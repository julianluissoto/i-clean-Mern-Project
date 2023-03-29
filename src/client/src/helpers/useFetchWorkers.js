import { useEffect, useState } from "react";
import { getWorkers } from "./getWorkers";

export const useFetchWorkers = () => {
  const [worker, setWorker] = useState([]);

  const [isLoading, setisLoading] = useState(true);

  const getAllWorkers = async () => {
    const cleanWorker = await getWorkers();

    setWorker(cleanWorker);
    setisLoading(false);
  };
  useEffect(() => {
    getAllWorkers();
  }, []);

  return {
    worker,
    isLoading,
  };
};
