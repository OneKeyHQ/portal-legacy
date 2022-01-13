import React, { FC, useEffect, useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import LazyLoad from "react-lazyload";
import List from "rc-virtual-list";
import Loading from "../universal/loading";
import { CDNHOST } from "../../constants/index";

interface Props {
  type: string;
  base: string;
  chainId: string;
  tokens: ERC20Contract[];
  onAdd?: (e: ERC20Contract) => void;
}

// eslint-disable-next-line react/display-name
const GridItem: FC<
  ERC20Contract & Pick<Props, "base" | "onAdd" | "type">
  // eslint-disable-next-line react/prop-types
> = ({ base, onAdd, type, ...token }) => {
  const imageNode = useMemo(() => {
    return (
      <LazyLoad
        placeholder={
          <div className="w-10 h-10 rounded-full flex-shrink-0 bg-gray-200 animate-pulse" />
        }
        overflow
        scrollContainer=".rc-virtual-list-holder"
        debounce
        once
      >
        <img
          className="w-10 h-10 rounded-full flex-shrink-0"
          src={`${CDNHOST}/${type}/${token.address}.png`}
          alt={token.symbol}
        />
      </LazyLoad>
    );
  }, [token.address, type, token.symbol]);

  return (
    <div className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
      <div className="w-full flex items-center justify-between p-6 space-x-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-900 text-sm font-medium truncate">
              {token.symbol}
            </h3>
          </div>
          <p className="mt-1 text-gray-500 text-sm truncate">{token.name}</p>
        </div>
        {imageNode}
      </div>
      <div>
        <div className="-mt-px flex divide-x divide-gray-200">
          <div className="w-0 flex-1 flex">
            <a
              href={`${base}/token/${token.address}`}
              target="_blank"
              className="cursor-pointer relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              rel="noreferrer"
            >
              <span className="ml-3">View</span>
            </a>
          </div>
          <div className="-ml-px w-0 flex-1 flex">
            {/* FIXME: eslint prob */}
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <span
              onClick={() => onAdd(token)}
              className="cursor-pointer relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
            >
              <span className="ml-3">ADD TO ONEKEY</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Grid({ tokens, base, chainId, type }: Props) {
  const [mounted, setMounted] = useState(() => false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tokenRows = useMemo(() => {
    if (tokens.length > 0 && tokens.length < 3) {
      return [tokens];
    }

    const rows = [];
    let row = [];
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (i % 3 === 0 && i !== 0) {
        rows.push(row);
        row = [token];
      } else {
        row.push(token);
      }
    }
    return rows;
  }, [tokens]);

  const onAdd = (erc20: ERC20Contract) => {
    const ethereum = (window as any).ethereum;
    if (ethereum.chainId === chainId) {
      ethereum
        .request({
          method: "wallet_watchAsset",
          params: {
            type: "ERC20",
            options: {
              address: erc20.address,
              symbol: erc20.symbol,
              decimals: erc20.decimals,
              image: erc20.logoURI,
            },
          },
        })
        .catch((e: any) => {
          alert(e.message);
        });
    } else {
      alert(`当前 Token 只支持 ${type} 网络，请确保插件已切换至对应网络`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 mb-10 border-t border-b">
      {!mounted && <Loading />}

      {mounted && !tokenRows.length && (
        <p>
          <FormattedMessage
            id="page_tokens__not_found"
            defaultMessage="找不到对应的 Token？尝试更换其他链或从 <a>{symbol}浏览器</a> 查询？"
            values={{
              // eslint-disable-next-line react/display-name
              a: (symbol) => (
                <a
                  href={base}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {symbol}
                </a>
              ),
              symbol: type?.toUpperCase(),
            }}
          />
        </p>
      )}

      {mounted && !!tokenRows.length && (
        <List
          data={tokenRows}
          itemKey={(row) => `row-${tokenRows.indexOf(row)}`}
          height={533}
        >
          {(tokenRow) => (
            <div className="grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2 lg:grid-cols-3 p-2">
              {tokenRow.map((token) => (
                <GridItem
                  {...token}
                  type={type.toLowerCase()}
                  onAdd={onAdd}
                  base={base}
                  key={token.address}
                />
              ))}
            </div>
          )}
        </List>
      )}
    </div>
  );
}
