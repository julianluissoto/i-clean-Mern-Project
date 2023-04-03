import axios from "axios";

export const getWorkers = async () => {
  const worker = await axios.get(
    "https://i-clean.up.railway.app/api/worker" ||
      "http://localhost:3002/api/worker"
  );
  const datosApi = worker.data;

  const workerDatabase = datosApi.map((w) => ({
    id: w._id,
    name: w.name,
    lastName: w.lastName,
    address: w.address,
    qualification: w.qualification,
    skills: w.skills,
    image: w.image,
    clientReview: w.clientReview,
  }));

  return workerDatabase;
};
