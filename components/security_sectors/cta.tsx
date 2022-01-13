import Image from "next/image";
import { FormattedMessage } from "react-intl";

/* This example requires Tailwind CSS v2.0+ */
export default function Cta() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">
            <FormattedMessage
              defaultMessage="想要了解更多?"
              id="components.security_sectors.cta.title1"
            />
          </span>
          <span className="block">
            <FormattedMessage
              defaultMessage="联系我们专业的客户支持获得帮助"
              id="components.security_sectors.cta.title2"
            />
          </span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://help.onekey.so/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              <FormattedMessage
                defaultMessage="前往客户支持中心"
                id="components.security_sectors.cta.action1"
              />
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <a
              href="https://discord.gg/onekey"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-50 hover:bg-green-100"
            >
              <FormattedMessage
                defaultMessage="访问官方 Discord 社区"
                id="components.security_sectors.cta.action2"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
