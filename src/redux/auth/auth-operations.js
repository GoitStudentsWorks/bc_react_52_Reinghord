import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance, setToken, clearToken } from 'config';

export const register = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue }) => {
    try {
      const user = await instance.post('/auth/register', body);
      setToken(user.data.token);
      return user.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      const user = await instance.post('/auth/login', body);
      setToken(user.data.token);
      return user.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await instance.post('/auth/logout');
      clearToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setToken(persistedToken);
      const res = await instance.get('/auth/refresh');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
