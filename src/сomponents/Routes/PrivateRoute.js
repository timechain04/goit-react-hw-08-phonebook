import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedin } from 'redux/slice/AuthSlise';

const PrivateRoute = ({ children }) => {
  const isLoggedin = useSelector(getLoggedin);
  return isLoggedin ? children : <Navigate to="/" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
