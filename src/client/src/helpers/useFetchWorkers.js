import { useEffect, useState } from "react";
import { getWorkers } from "./getWorkers";
export const useFetchWorkers = () => {
  const [worker, setWorker] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getWorker = async () => {
    const workersFinded = await getWorkers();
    setWorker(workersFinded);
    setisLoading(false);
  };
  useEffect(() => {
    getWorker();
  }, []);

  return {
    worker,
    isLoading,
  };
};
