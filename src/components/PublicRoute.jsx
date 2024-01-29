import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useUser } from 'context';

// - If the route is restricted and the user is logged in, redirects to "redirectTo"
// - Otherwise renders the component

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const user = useUser();

  const shouldRedirect = user.name && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

PublicRoute.propTypes = {
  children: PropTypes.node,
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};
