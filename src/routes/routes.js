import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Shop from "../components/Shop/Shop";
import productsAndCartLoader from "../loaders/productsAndCartLoader";
import Orders from "../components/Orders/Orders";
import Inventory from "../components/Inventory/Inventory";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import About from "../components/About/About";
import Shipping from "../components/Shipping/Shipping";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: () => fetch("products.json"),
        element: <Shop />,
      },
      {
        path: "/orders",
        loader: productsAndCartLoader,
        element: <Orders />,
      },
      {
        path: "/inventory",
        element: (
          <PrivateRoute>
            <Inventory />
          </PrivateRoute>
        ),
      },
      {
        path: "/shipping",
        element: (
          <PrivateRoute>
            <Shipping />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
