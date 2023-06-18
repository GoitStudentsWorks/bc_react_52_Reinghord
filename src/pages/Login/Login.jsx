import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import {
  StyledInputAuth,
  StyledFormAuth,
  StyledBtnAuthAccent,
  StyledHeaderAuth,
  StyledWrapInputAuth,
  StyledLabelAuth,
  StyledErrorAuth,
  // StyledLinkAuth,
  StyledWrapAuthBtn,
  AuthWrapComponent,
} from './Login.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdAlert } from 'react-icons/io';
import GlobalTablet from 'components/GlobalStylePublic/GlobalTablet';
import { ThemeTogle } from './ThemeTogle';

let schema = yup.object({
  password: yup
    .string()
    .required('Please enter a password')
    .min(8, 'Min length 8 symbols')
    .max(32, 'Max length 32 symbols')
    .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/, 'a-z and 0-9'),

  email: yup
    .string()
    .required('Please enter a email')
    .email('Enter a correct email')
    .min(8, 'Min length 8 symbols')
    .max(32, 'Max length 32 symbols'),
});

function Login() {
  const dispatch = useDispatch();
  const startValue = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    dispatch(logIn(values));
  };
  return (
    <>

      <GlobalTablet />
      <AuthWrapComponent>
        <StyledHeaderAuth>Sign in</StyledHeaderAuth>
        <Formik
          onSubmit={handleSubmit}
          validationSchema={schema}
          initialValues={startValue}
        >
          <StyledFormAuth>
            <StyledWrapInputAuth>
              <StyledInputAuth type="email" name="email" placeholder=" " />
              <StyledLabelAuth>Email *</StyledLabelAuth>
              <ErrorMessage name="email">
                {m => (
                  <StyledErrorAuth>
                    <IoMdAlert />
                    {m}
                  </StyledErrorAuth>
                )}
              </ErrorMessage>
            </StyledWrapInputAuth>
            <StyledWrapInputAuth>
              <StyledInputAuth
                type="password"
                name="password"
                placeholder=" "
              />
              <StyledLabelAuth>Password *</StyledLabelAuth>
              <ErrorMessage name="password">
                {m => (
                  <StyledErrorAuth>
                    <IoMdAlert />
                    {m}
                  </StyledErrorAuth>
                )}
              </ErrorMessage>
            </StyledWrapInputAuth>
            <StyledWrapAuthBtn>
              <StyledBtnAuthAccent type="submit">Sign in</StyledBtnAuthAccent>
              {/* <StyledLinkAuth to="/registration">Register</StyledLinkAuth> */}
            </StyledWrapAuthBtn>
          </StyledFormAuth>
        </Formik>
        <ThemeTogle />
      </AuthWrapComponent>
    </>
  );
}

export default Login;
