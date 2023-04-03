import { useFetchWorkers } from "../helpers/useFetchWorkers";
import { Link } from "react-router-dom";

const Workers = () => {
  const { worker, isLoading } = useFetchWorkers();

  return (
    <div className="flex justify-evenly flex-wrap ">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        worker.map((w) => (
          <Link
            className=" w-48 mt-6 border-solid border-2 border-sky-500mt-5 rounded-lg flex flex-col items-center"
            key={w.id}
            to={`/worker/${w.id}`}
          >
            <div>
              <h2 className="text-center">{w.name}</h2>
              <h2 className="text-center">{w.lastName}</h2>
              <h3 className="text-end">Ubicacion: {w.address}</h3>
              <div className=" border-r-amber-900">
                <img
                  className="w-300px object-contain h-48 w-96"
                  src={w.image}
                  alt={w.name}
                />
              </div>

              <h3 className="worker-skills">
                Aptitudes:
                <hr /> {w.skills}
              </h3>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Workers;
