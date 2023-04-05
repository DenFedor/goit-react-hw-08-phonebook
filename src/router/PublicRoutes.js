import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import authSelectors from 'redux/auth/auth-selectors';
export default function PublicRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isLoading = useSelector(authSelectors.getIsLoading);
  const shouldRedirect = !isLoggedIn && !isLoading;
  return shouldRedirect ? <Navigate to={redirectTo} replace={true}/> : Component;
}
