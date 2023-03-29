import { useFetchWorkers } from "../helpers/useFetchWorkers";
import "./workers.css";
const Workers = () => {
  const { worker, isLoading } = useFetchWorkers();

  return (
    <div>
      <h1>Cleaner</h1>
      <div className="worker-cards">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          worker.map((w) => (
            <div className="worker-card" key={w.id}>
              <h2 className="worker-name">{w.name}</h2>
              <h2 className="worker-name">{w.lastName}</h2>
              <h3 className="worker-address">ubicacion: {w.address}</h3>
              <img className="card" src={w.image} alt={w.name} />

              <h3 className="worker-skills">
                Aptitudes:
                <hr /> {w.skills}
              </h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Workers;
