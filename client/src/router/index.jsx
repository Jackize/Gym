import { createBrowserRouter, Outlet } from "react-router-dom";
import AuthProvider from "../context/AuthProvider";
import ErrorPage from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRouter";
import Practice from "../pages/Practice";
import Discover from "../pages/Discover";
import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Arm from "../pages/Practice/Arm";
import Back from "../pages/Practice/Back";
import Leg from "../pages/Practice/Leg";
import Abs from "../pages/Practice/Abs";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};
export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <Register />,
        path: "/register",
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Practice />,
            path: "/practice",
          },
          {
            element: <Arm />,
            path: "/practice/arm",
          },
          {
            element: <Back />,
            path: "/practice/back",
          },
          {
            element: <Leg />,
            path: "/practice/leg",
          },
          {
            element: <Abs />,
            path: "/practice/abs",
          },
          {
            element: <Settings />,
            path: "/settings",
          },
          {
            element: <Dashboard />,
            path: "/dashboard",
          },
          {
            element: <Discover />,
            path: "/discover",
          },
        ],
      },
    ],
  },
]);
