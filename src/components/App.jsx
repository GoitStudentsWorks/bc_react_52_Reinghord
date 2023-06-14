import DiaryDateCalendar from './DiaryDateCalendar/DiaryDateCalendar';
// import Navigation from './Navigation/Navigation';
import Login from './Login/Login';
import Register from './Register/Register';
// import UserInfo from './UserInfo/UserInfo';
// import Modal from './Modal/Modal';
// import Header from './Header/Header';
// import DiaryAddProductForm from './DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductList from './DiaryProductList/DiaryProductList';
// import DiaryProductListItem from './DiaryProductListItem/DiaryProductListItem';
// import { Loader } from './components/Loader/Loader';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser, refreshUser } from 'redux/auth/auth-operations';
import CalculatorСalorieForm from './DiaryAddProductForm/DiaryAddProductForm';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { Layout } from './Layout/Layout';
import PageNotFound from './PageNotFound/PageNotFound';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser())
      .unwrap()
      .then(() => dispatch(getUser()));
  }, [dispatch]);

  return (
    <>
      <Suspense>
        {/* fallback={<Loader />}> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CalculatorСalorieForm />} />
            <Route
              path="registration"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="calculator"
              element={
                <PrivateRoute>
                  <CalculatorСalorieForm />
                </PrivateRoute>
              }
            />
            <Route
              path="diary"
              element={
                <PrivateRoute>
                  <DiaryDateCalendar />
                </PrivateRoute>
              }
            />
            <Route
              path="menu"
              element={
                <PrivateRoute>
                  <DiaryProductList />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
      {/* <Header></Header>
      <Navigation></Navigation>
      <UserInfo></UserInfo>
      <Login></Login>
      <Register></Register>
      <Modal></Modal>
      <CalculatorСalorieForm></CalculatorСalorieForm>
      <DiaryDateCalendar></DiaryDateCalendar>
      <DiaryAddProductForm></DiaryAddProductForm>
      <DiaryProductList></DiaryProductList>
      <DiaryProductListItem></DiaryProductListItem> */}
    </>
  );
};
