import { Outlet } from 'react-router-dom';
import { getLoggedin } from 'redux/slice/AuthSlise';
import { useSelector } from 'react-redux';
import AppBar from '../AppBar/AppBar';

const Layout = () => {
  const isLoggedin = useSelector(getLoggedin);
  return (
    <>
     {isLoggedin && <AppBar />}
      <Outlet />
    </>
  );
};

export default Layout;
