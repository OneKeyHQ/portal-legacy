import { useEffect, useState } from "react";
import UAParser from "ua-parser-js";

type UseOSType = () => [string];

export const useOSType: UseOSType = () => {
  const [osname, setOSname] = useState("");

  useEffect(() => {
    const parser = new UAParser();
    const os = parser.getOS();
    setOSname(os.name);
  }, []);

  return [osname];
};
