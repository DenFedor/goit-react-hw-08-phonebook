import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';
import { PAGE_NAMES } from 'router/paths';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import PrivateRoute from 'router/PrivateRoutes';
import PublicRoute from 'router/PublicRoutes';
const LandingPage = lazy(() => import('../pages/home'));
const SignIn = lazy(() => import('./Login/login'));
const SignUp = lazy(() => import('./Register/signUp'));
const Contacts = lazy(() => import('../pages/contacts'));
const NotFound = lazy(() => import('../pages/notFound'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <Routes>
        <Route
          exact
          path={PAGE_NAMES.home}
          element={
            <PrivateRoute
              component={<LandingPage />}
              redirectTo={PAGE_NAMES.contacts}
            />
          }
        />
        <Route
          path={PAGE_NAMES.register}
          element={
            <PrivateRoute
              component={<SignUp />}
              redirectTo={PAGE_NAMES.contacts}
            />
          }
        />
        <Route
          path={PAGE_NAMES.login}
          element={
            <PrivateRoute
              component={<SignIn />}
              redirectTo={PAGE_NAMES.contacts}
            />
          }
        />
        <Route
          path={PAGE_NAMES.contacts}
          element={
            <PublicRoute
              component={<Contacts />}
              redirectTo={PAGE_NAMES.login}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
