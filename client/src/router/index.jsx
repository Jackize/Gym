import { createBrowserRouter, Outlet } from "react-router-dom";
import AuthProvider from "../context/AuthProvider";
import ErrorPage from '../pages/Error';
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRouter";

const AuthLayout = () => {
    return (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    );
  };
export default createBrowserRouter([{
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
        {
            element: <Login/>,
            path: "/login"
        },
        {
            element: <Register/>,
            path: "/register"
        },
        {
            element: <ProtectedRoute/>,
            children: [
                {
                    element: <Home/>,
                    path: "/",
                }
            ]
        }
    ]
}]);
