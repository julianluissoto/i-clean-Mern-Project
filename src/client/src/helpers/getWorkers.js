export const getWorkers = async () => {
  const url = `http://localhost:3001/api/worker`;
  const resp = await fetch(url);
  const dataWorkers = await resp.json();

  const workers = dataWorkers.map((worker) => ({
    id: worker._id,
    name: worker.name,
    lastName: worker.lastName,
    address: worker.address,
    qualification: worker.qualification,
    image: worker.image,
    skills: worker.skills,
  }));

  return workers;
};
