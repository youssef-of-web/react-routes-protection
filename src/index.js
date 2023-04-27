import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "./index.css";
import Books from "./pages/books";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Login from "./pages/login";
import Pricing from "./pages/pricing";
import Admin from "./pages/admin";
import Unauthorized from "./pages/unauthorized";

const auth = false;
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/unauthorized",
        element: <Unauthorized />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
