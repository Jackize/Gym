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
