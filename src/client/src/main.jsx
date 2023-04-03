import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import WorkersDetail from "./Components/WorkersDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/worker/:id",
    element: <WorkersDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-eo0m857loswjtj2h.us.auth0.com"
      clientId="J6VwHI2petrxTd9KxhQ98JFs8Yp2Kq4j"
      redirectUri={window.location.origin}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
