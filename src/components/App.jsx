
// import Navigation from './Navigation/Navigation';
import Login from './Login/Login';
import Register from './Register/Register';
// import UserInfo from './UserInfo/UserInfo';
// import Modal from './Modal/Modal';
// import Header from './Header/Header';
// import DiaryAddProductForm from './DiaryAddProductForm/DiaryAddProductForm';
// import DiaryProductList from './DiaryProductList/DiaryProductList';
// import DiaryProductListItem from './DiaryProductListItem/DiaryProductListItem';
// import { Loader } from './components/Loader/Loader';
// import CalculatorСalorieForm from './DiaryAddProductForm/DiaryAddProductForm';
// import DiaryProductListItem from './DiaryProductListItem/DiaryProductListItem';
// import { Loader } from './components/Loader/Loader';
import CalculatorCalorieForm from './CalculatorСalorieForm/CalculatorСalorieForm';
// import { RightSideBar } from './RightSideBar/RightSideBar';

import { useDispatch } from 'react-redux';

import { Suspense, useEffect } from 'react';
import { getUser, refreshUser } from 'redux/auth/auth-operations';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout/Layout';
import PageNotFound from './PageNotFound/PageNotFound';

import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { getIsRefreshing } from 'redux/auth/auth-selectors';
import { ThemeSwitching } from './styles/ThemeSwitching';
import { useAuth } from 'hooks';
import { GlobalStylesPrivate } from './styles/GlobalStylePrivate.styled';
import { GlobalStylePublic } from './GlobalStylePublic/GlobalStylePublic.styled';

import GlobalTablet from './GlobalStylePublic/GlobalTablet';
import Calculator from 'pages/Calculator/Calculator';
import Diary from 'pages/Diary/Diary';


export const App = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser())
      .unwrap()
      .then(() => dispatch(getUser()));

  }, [dispatch]);

  const isRefreshing = useSelector(getIsRefreshing);




  return isRefreshing ? (
    <b>Refresing user...</b>
  ) : (
    <>
      <ThemeSwitching>
        {isLoggedIn ? <GlobalStylesPrivate /> : <GlobalStylePublic />}
        <Suspense>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<CalculatorCalorieForm />} />
              <Route
                path="registration"
                element={
                  <PublicRoute restricted>
                    <GlobalTablet />
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <GlobalTablet />
                    <Login />
                  </PublicRoute>
                }
              />
              <Route
                path="calculator"
                element={
                  <PrivateRoute>
                    <Calculator />
                  </PrivateRoute>
                }
              />
              <Route
                path="diary"
                element={
                  <PrivateRoute>
                    <Diary/>
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ThemeSwitching>
    </>
  );
};
