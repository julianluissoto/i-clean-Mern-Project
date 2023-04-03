import { useAuth0 } from "@auth0/auth0-react";

export const Home = () => {
  const { user } = useAuth0();

  const name = user.name;
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-center text-sky-950">
          BIENVENIDO {name.toUpperCase()} A
        </h1>
        <img
          className="w-12"
          src="https://imgtr.ee/images/2023/04/02/UuUgc.gif"
          alt="logo-gif"
        />
      </div>

      <h1 className="flex direction justify-center text-2xl">I-CLEAN</h1>
      <h2 className="flex direction justify-center text-xl text-orange-600 font-bold">
        El mejor sitio para contratar Empleadas Domesticas
      </h2>
    </div>
  );
};
