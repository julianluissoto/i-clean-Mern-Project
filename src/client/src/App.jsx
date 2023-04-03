import Workers from "./Components/Workers";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Components/LoginButton";
import LogOutButton from "./Components/LogOutButton";
import "./index.css";
import { Home } from "./Components/Home";
function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user?.email, user?.name);
  return (
    <div className="bg-violet-300">
      {isAuthenticated ? (
        <>
          <Home />
          <Workers />
          <LogOutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default App;
