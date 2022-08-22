import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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
