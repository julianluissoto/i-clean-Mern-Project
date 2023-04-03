import Workers from "./Components/Workers";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Components/LoginButton";
import LogOutButton from "./Components/LogOutButton";
import "./index.css";
import { Home } from "./Components/Home";
function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className=" mt-10 flex justify-center items-center">
      {isAuthenticated ? (
        <>
          <Home />
          <Workers />
          <LogOutButton />
        </>
      ) : (
        <div className=" flex justify-center  w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <LoginButton />
        </div>
      )}
    </div>
  );
}

export default App;
