import { useEffect, useState } from "react";

const useRefresh = (ms: number = 1000) => {
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    setTimeout(() => setTime(Date.now()), ms);
  }, []);
  //TODO: consider stablizing the object
  return { time };
};

export default useRefresh;
