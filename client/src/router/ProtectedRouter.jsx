import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Nav from "../components/Nav";

export default function ProtectedRoute({ children }) {
  if (!localStorage.getItem("accessToken")) {
    return <Navigate to="/login" />;
  }

  return (
    <Nav>
      <Outlet />
    </Nav>
  );
}
