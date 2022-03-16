import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
// redux
import { useSelector } from 'react-redux';
// pages


// ----------------------------------------------------------------------

GuestGuard.propTypes = {
  children: PropTypes.node
};

export default function GuestGuard({ children }) {
    const token = useSelector((state) => state.user.token);

  if (token) {
    return <Navigate to={'/login'} />;
  }

  return <>{children}</>;
}
