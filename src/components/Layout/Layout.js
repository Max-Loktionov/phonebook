import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppBar from 'components/AppBar/AppBar';
import { useGetUserQuery } from 'redux/user/userApi';
import { useSelector } from 'react-redux';

export const Layout = () => {
  const { token } = useSelector(state => state.auth);
  console.log(token);
  useGetUserQuery(undefined, {
    skip: !token,
  });

  return (
    <>
      <AppBar />
      <ToastContainer />
      <Outlet />
    </>
  );
};
