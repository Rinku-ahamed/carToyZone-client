import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToys from "../pages/AllToys/AllToys";
import AddToys from "../pages/AddToys/AddToys";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/addToys",
        element: (
          <PrivateRoutes>
            <AddToys></AddToys>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
