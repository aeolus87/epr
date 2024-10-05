import React from "react";
import { Route, Navigate } from "react-router-dom";

// Example of a simple AdminRoute component
export const AdminRoute = ({ element, ...rest }) => {
  const isAdmin = true; // Replace with your admin check logic

  return (
    <Route
      {...rest}
      element={isAdmin ? element : <Navigate to="/" />} // Redirect if not admin
    />
  );
};
