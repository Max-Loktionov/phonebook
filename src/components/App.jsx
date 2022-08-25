import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { Container } from './App.styled';
import { Layout } from './Layout/Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
// import { useGetUserQuery } from 'redux/user/userApi';

const HomePage = lazy(() => import('../views/HomePage.js'));
const LogInPage = lazy(() => import('../views/LogInPage'));
const RegisterPage = lazy(() => import('../views/RegisterPage'));
const ContactsPage = lazy(() => import('components/ContactsPage'));
const NotFoundPage = lazy(() => import('../views/NotFound'));

export default function App() {
  // useGetUserQuery();

  return (
    <Container>
      <Suspense fallback={<Oval />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="contacts"
              element={
                <PrivateRoute navTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route
              index
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted navTo="/contacts">
                  <LogInPage />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted navTo="/">
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Container>
  );
}
