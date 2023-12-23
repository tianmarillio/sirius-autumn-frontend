'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchUserData, resetToken, setToken } from '@/store/authSlice';
import { AUTH_TOKEN } from '@/constants';

const withAuth = (Component: any) => {
  const HOC = (props: any) => {
    const router = useRouter();
    // return <Component {...props} />;
    /**
     * if token has token inside localstorage
     *  get user from api
     *    if user exist => set token and user inside store
     *    else delete token from storage, push to login page
     */

    const dispatch = useDispatch<AppDispatch>();

    const token = useSelector<RootState>((state) => state.auth.token);
    const user = useSelector<RootState>((state) => state.auth.user);

    useEffect(() => {
      const isAuthenticated = !!(token && user);

      if (isAuthenticated) {
        return;
      }

      const authenticate = async () => {
        const localToken = localStorage.getItem(AUTH_TOKEN);

        if (!localToken) {
          return router.push('/login');
        }

        dispatch(setToken(localToken));

        const result = await dispatch(fetchUserData());

        if (!fetchUserData.fulfilled.match(result)) {
          dispatch(resetToken());
          localStorage.removeItem(AUTH_TOKEN);
          return router.push('/login');
        }
      };

      authenticate();
    }, [token, user, dispatch, router]);
    // eslint-disable-next-line

    // TODO: redirect to home if access /login or /register

    // TODO: use useSelector and localstorage for user data & token
    // const auth = false;
    // const auth = true;

    // useEffect(() => {
    //   if (!auth) {
    //     return redirect('/login');
    //   }
    // }, [auth]);

    // if (!auth) {
    //   return null;
    // }

    return <Component {...props} />;
  };

  return HOC;
};

export default withAuth;
