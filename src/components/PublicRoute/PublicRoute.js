import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PublicRoute({ children, navTo = '/', restricted = false }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={navTo} /> : children;
}

export default PublicRoute;
