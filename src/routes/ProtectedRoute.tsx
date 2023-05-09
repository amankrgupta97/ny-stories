import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
  auth: boolean;
  children: React.ReactNode;
}

const ProtectedRoute = ({ auth, children }: IProtectedRouteProps) => {
  return <>{auth ? children : <Navigate replace to="/login" />}</>;
};

export default ProtectedRoute;
