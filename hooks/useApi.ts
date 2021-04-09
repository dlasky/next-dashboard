import ms from "ms";
import axios from "axios";
import { useEffect, useState } from "react";
import useRefresh from "./useRefresh";

interface ApiHook {
  data: any;
  loading: boolean;
}

interface ApiHookProps {
  url: string;
  interval: string;
}

const useApi = ({ url, interval }: ApiHookProps): ApiHook => {
  const [data, setData] = useState();
  const [loading, setIsLoading] = useState(true);
  const { time } = useRefresh(ms(interval));
  useEffect(() => {
    (async () => {
      const result = await axios.get(url);
      console.log("res", result);
      setIsLoading(false);
      setData(result.data);
    })();
  }, [time]);
  return { data, loading };
};

export default useApi;
