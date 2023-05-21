import { useCallback, useEffect, useState } from "react";

import { getWindowSize } from "@/utils";

export const useWindowSize = () => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  const handleWindowResize = useCallback(() => setSize(getWindowSize()), []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  useEffect(() => {
    handleWindowResize();
  }, [handleWindowResize]);

  return size;
};
