import axios from "axios";

export const getWorkerDetail = async (id) => {
  const worker = await axios.get(
    `https://i-clean.up.railway.app/api/worker/${id}`
  );
  const datosApi = worker.data;

  return datosApi;
};
