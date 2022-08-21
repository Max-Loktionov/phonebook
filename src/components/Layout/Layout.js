import { Outlet, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import AppBar from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <ToastContainer />
      <Outlet />
    </>
  );
};
