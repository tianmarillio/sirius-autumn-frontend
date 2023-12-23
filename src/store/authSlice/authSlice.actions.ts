import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginPayload, RegisterPayload, User } from '.';
import api from '@/services/api/axios';

export const login = createAsyncThunk(
  'auth/login',
  async (payload: LoginPayload) => {
    const response = await api().post('/auth/login', payload);
    const token = response.data.token;

    return token;
  },
);

export const register = createAsyncThunk(
  'auth/register',
  async (payload: RegisterPayload) => {
    await api().post('/auth/register', payload);
  },
);

export const fetchUserData = createAsyncThunk(
  'auth/fetchUserData',
  async (_, { getState }) => {
    const { auth } = getState() as {
      auth: {
        token: string;
        user: User;
      };
    };

    const response = await api(auth.token).get('/user-data');
    const userData = response.data;

    return userData;
  },
);
