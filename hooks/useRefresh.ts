import { useEffect, useState } from "react";

const useRefresh = (ms: number = 1000) => {
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    let interval = setInterval(() => {
      setTime(Date.now());
    }, ms);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [ms]);
  //TODO: consider stablizing the object
  return { time };
};

export default useRefresh;
