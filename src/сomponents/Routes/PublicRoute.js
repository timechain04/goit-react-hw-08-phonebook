import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedin } from 'redux/slice/AuthSlise';
import PropTypes from 'prop-types'; 

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedin = useSelector(getLoggedin);
  const shouldRedirect = isLoggedin && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired, 
  restricted: PropTypes.bool, 
};

export default PublicRoute;
