import { useEffect, useRef, useState } from "react";
import { FormattedMessage } from "react-intl";

export default function Roadmap() {
  const [scriptState, setScriptState] = useState(false);
  const dataUpvotyRef = useRef();
  const { current } = dataUpvotyRef;

  // Check if document is finally loaded
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://roadmap.onekey.so/javascript/upvoty.embed.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      setScriptState(true);
    };
  }, []);

  useEffect(() => {
    if (scriptState && current) {
      // @ts-expect-error
      upvoty.init("render", {
        ssoToken: null,
        baseUrl: "roadmap.onekey.so",
      });
    }
  }, [scriptState, current]);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:pt-24 sm:pb-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
            <FormattedMessage
              defaultMessage="路线图"
              description=""
              id="components.home_sectors.roadmap.1263605220"
            />
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            <FormattedMessage
              defaultMessage="你提需求，我们实现"
              description=""
              id="components.home_sectors.roadmap.1480778511"
            />
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            <FormattedMessage
              defaultMessage="观察团队目前的进度"
              description=""
              id="components.home_sectors.roadmap.277029346"
            />
          </p>
          <div data-upvoty ref={dataUpvotyRef} />
        </div>
      </div>
    </div>
  );
}
