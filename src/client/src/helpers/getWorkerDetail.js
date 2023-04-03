import axios from "axios";

export const getWorkerDetail = async (id) => {
  const worker = await axios.get(`http://localhost:3002/api/worker/${id}`);
  const datosApi = worker.data;

  return datosApi;
};
