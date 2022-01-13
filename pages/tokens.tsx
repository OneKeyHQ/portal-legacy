import { useMemo, useState } from "react";
import { useIntl } from "react-intl";
import { matchSorter } from "match-sorter";
import Nav from "../components/universal/nav";
import Footer from "../components/universal/footer";
import Header from "../components/header";
import HecoTokens from "../fixtures/heco.json";
import BscTokens from "../fixtures/bsc.json";
import EthTokens from "../fixtures/eth.json";
import Selector, { TokenType } from "../components/tokens_sectors/selector";
import Grid from "../components/tokens_sectors/grid";
import Search from "../components/universal/search";
import { useDebounceValue, useThrottle } from "../utils/hooks";

const filterTokens = (
  tokens: ERC20Contract[],
  searchValue: string
): ERC20Contract[] => {
  if (!searchValue) return tokens;
  return matchSorter(tokens, searchValue, { keys: ["name", "symbol"] });
};

const getTokensByType = (type?: TokenType): ERC20Contract[] => {
  const map = {
    heco: HecoTokens,
    bsc: BscTokens,
    eth: EthTokens,
  };

  return Object.values(map[type] ?? {});
};

export default function Tokens() {
  const intl = useIntl();
  const [type, setType] = useState<TokenType>("bsc");
  const [updateTypeThrottled] = useThrottle(setType);
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedValue = useDebounceValue(searchValue);
  const filteredTokens = useMemo(
    () => filterTokens(getTokensByType(type), debouncedValue),
    [debouncedValue, type]
  );

  const gridListNode = useMemo(() => {
    const propsMap = {
      bsc: {
        type: "BSC",
        base: "https://bscscan.com",
        chainId: "0x38",
      },
      eth: {
        type: "ETH",
        base: "https://etherscan.com",
        chainId: "0x1",
      },
      heco: {
        type: "HECO",
        base: "https://hecoinfo.com",
        chainId: "0x80",
      },
    };

    return <Grid {...propsMap[type]} tokens={filteredTokens} />;
  }, [type, filteredTokens]);

  const searchNode = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
      <div className="w-full sm:max-w-sm">
        <Search
          onSearch={(val) => {
            setSearchValue(val);
          }}
          placeholder={intl.formatMessage({
            id: "page_tokens__search_placeholder",
            defaultMessage: "搜索想要的 Token",
          })}
          value={searchValue}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      <Header>
        <title>
          {intl.formatMessage({
            id: "pages.token.title",
            defaultMessage: "OneKey Token列表",
          })}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Header>
      <Nav />
      <main>
        <Selector type={type} onClick={updateTypeThrottled} />
        {searchNode}
        {gridListNode}
      </main>
      <Footer />
    </div>
  );
}
