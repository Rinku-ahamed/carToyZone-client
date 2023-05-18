/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <h2>Loading</h2>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoutes;
