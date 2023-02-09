import { Navigate } from 'react-router-dom';
import { useUser } from 'context';

// - If the route is private and the user is logged in, render the component
// - Otherwise redirects to "redirectTo"

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const user = useUser();

  return user.name ? children : <Navigate to={redirectTo} />;
}
