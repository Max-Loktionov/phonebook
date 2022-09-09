import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({ children, navTo = '/' }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? children : <Navigate to={navTo} />;
}

export default PrivateRoute;
