import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getWorkerDetail } from "../helpers/getWorkerDetail";

const WorkersDetail = () => {
  const { id } = useParams();
  const [workerD, setworkerD] = useState();

  useEffect(() => {
    const dataTraida = getWorkerDetail(id).then((dataTraida) =>
      setworkerD(dataTraida)
    );
  }, []);
  return (
    <section style={{ display: "flex" }}>
      <div>
        <h2>worker name </h2>
        <h2>{workerD && workerD.name}</h2>
        <img src={workerD && workerD.image} t={"este es alt"} />
      </div>
      <div>
        <h1>estrellas</h1>
        <h3> {workerD && workerD.clientReview}</h3>
      </div>
      <h1 className="text-3xl font-bold bg-red-900">Hello world!</h1>
    </section>
  );
};

export default WorkersDetail;
