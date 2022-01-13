import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import camelcase from "camelcase-keys";
import Nav from "../components/universal/nav";
import Footer from "../components/universal/footer";
import Selector from "../components/download_sectors/selector";
import Ios from "../components/download_sectors/ios";
import Android from "../components/download_sectors/android";
import Desktop from "../components/download_sectors/desktop";
import BridgeComp from "../components/download_sectors/bridge";
import Header from "../components/header";
import Loading from "../components/universal/loading";
import Link from "../components/universal/link";
import { fetchWithCache } from "../utils/fetch-with-cache";
import { KEY_DEVICE_TYPE } from "../utils/constants";
import { getParameterByName } from "../utils/utils";

export interface AndroidType {
  versionName: string;
  url: string;
  sha256SumAsc: string;
}
export interface Suite {
  version: string;
  macDmg: string;
  winZadig: string;
  linux: string;
  sha256SumAsc: string;
}
export interface Bridge {
  version: string;
  linux32Rpm: string;
  linux64Rpm: string;
  linux32Deb: string;
  linux64Deb: string;
  win: string;
  mac: string;
  changelogCn: string;
  changelogEn: string;
  sha256SumAsc: string;
}
interface DownloadResponse {
  apk?: AndroidType;
  suite?: Suite;
  bridge?: Bridge;
  userAgent?: string;
}

type DeviceType = "ios" | "android" | "desktop" | "bridge";

const getDeviceType = (ua: string): DeviceType => {
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return /iP(hone|od)/i.test(ua) ? "ios" : "android";
  }
  return "desktop";
};

const getTypeFromStorage = (): DeviceType => {
  try {
    return (localStorage.getItem(KEY_DEVICE_TYPE) as DeviceType) ?? "ios";
  } catch {
    return "ios";
  }
};

export default function Downloads() {
  const intl = useIntl();
  const [downloadRes, setDownloadRes] = useState<DownloadResponse | null>();
  const router = useRouter();

  const defaultClient = getParameterByName(
    "client",
    typeof window !== "undefined" ? window.location.href : ""
  ) as DeviceType;

  const [type, setType] = useState<DeviceType>(
    (defaultClient as DeviceType) ||
      getDeviceType(typeof navigator !== "undefined" ? navigator.userAgent : "")
  );

  const replaceRoutePath = useCallback(
    (client: DeviceType) => {
      router.push({ pathname: "/download", query: { client } });
    },
    [router]
  );

  useEffect(() => {
    // 点击导航query丢失问题
    if (!defaultClient && type) {
      replaceRoutePath(type);
    }

    // 直接访问带有query的url
    if (defaultClient && !type) {
      setType(defaultClient);
    }
  }, [defaultClient, type, replaceRoutePath]);

  useEffect(() => {
    fetchWithCache("https://data.onekey.so/version.json").then((res) =>
      setDownloadRes(camelcase(res, { deep: true }))
    );
  }, []);

  useEffect(() => {
    if (type) {
      localStorage.setItem(KEY_DEVICE_TYPE, type);
      replaceRoutePath(type);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  useEffect(() => {
    if (!downloadRes?.userAgent || type) {
      return;
    }
    const { userAgent } = downloadRes;
    const deviceType = getDeviceType(userAgent);
    setType(deviceType);
  }, [downloadRes, type]);

  const devices = useMemo(() => {
    if (!downloadRes) return null;

    const { apk: android, suite, bridge } = downloadRes;

    return {
      ios: <Ios version={android.versionName} />,
      android: (
        <Android
          version={android.versionName}
          url={android.url}
          ascUrl={android.sha256SumAsc}
        />
      ),
      desktop: (
        <Desktop
          version={suite.version}
          macUrl={suite.macDmg}
          winUrl={suite.winZadig}
          linuxUrl={suite.linux}
          ascUrl={suite.sha256SumAsc}
        />
      ),
      bridge: (
        <BridgeComp
          version={bridge.version}
          linux32Rpm={bridge.linux32Rpm}
          linux64Rpm={bridge.linux64Rpm}
          linux32Deb={bridge.linux32Deb}
          linux64Deb={bridge.linux64Deb}
          winUrl={bridge.win}
          macUrl={bridge.mac}
          changeLogCn={bridge.changelogCn}
          changeLogEn={bridge.changelogEn}
          ascUrl={bridge.sha256SumAsc}
        />
      ),
    };
  }, [downloadRes]);

  const loadingNode = (
    <Loading
      message={
        <FormattedMessage
          id="msg__loading_packages"
          defaultMessage="加载最新安装包中..."
        />
      }
    />
  );

  const externalLinkNode = devices && (
    <div className="px-4 py-6 sm:px-6 sm:pt-6 sm:pb-10">
      <p className="text-lg text-gray-500 sm:text-center">
        <FormattedMessage
          id="pages__download__extension_support"
          defaultMessage="找不到你想要的客户端？试试我们的 <a>浏览器插件</a>"
          values={{
            // eslint-disable-next-line react/display-name
            a: (text: string) => (
              <Link
                href="/plugin"
                className="text-green-600 hover:text-green-500 cursor-pointer"
              >
                {text}
              </Link>
            ),
          }}
        />
      </p>
    </div>
  );

  return (
    <div>
      <Header>
        <title>
          {intl.formatMessage({
            id: "pages.download.title",
            defaultMessage: "下载 OneKey App",
          })}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Header>
      <Nav />
      <Selector type={type} onClick={setType} />
      {externalLinkNode}
      {devices ? devices[type] : loadingNode}
      <Footer />
    </div>
  );
}
