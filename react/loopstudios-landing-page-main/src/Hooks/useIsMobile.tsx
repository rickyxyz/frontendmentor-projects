import { useEffect, useState } from "react";

function useIsMobile() {
  const dekstopThreshold = 1000;
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function changeWindowSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerWidth });
    }

    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize.width <= dekstopThreshold;
}

export default useIsMobile;
