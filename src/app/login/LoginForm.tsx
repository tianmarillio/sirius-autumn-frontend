'use client';
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FieldText from '@/components/Formik/FieldText';
import FieldPassword from '@/components/Formik/FieldPassword';
import { useDispatch } from 'react-redux';
import { login } from '@/store/authSlice';
import { AppDispatch } from '@/store/store';
import { useRouter } from 'next/navigation';
import { AUTH_TOKEN } from '@/constants/constants';

interface FormValues {
  username: string;
  password: string;
}

const validationSchema: yup.ObjectSchema<FormValues> = yup.object({
  username: yup.string().required('username is required'),
  password: yup.string().required('password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const initialValues: FormValues = {
    username: '',
    password: '',
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const loginResult = await dispatch(
          login({
            username: values.username,
            password: values.password,
          }),
        );

        if (!login.fulfilled.match(loginResult)) {
          // TODO: throw error
          return;
        }

        localStorage.setItem(AUTH_TOKEN, loginResult.payload);
        router.push('/');
      }}
    >
      {({ isSubmitting }) => (
        <Form className="mb-4 flex flex-col gap-2">
          <FieldText name="username" label="Username" placeholder="JohnSmith" />

          <FieldPassword
            name="password"
            label="Password"
            placeholder="Enter your password"
            showPassword={showPassword}
            handleTogglePassword={handleTogglePassword}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full rounded-lg bg-purple-600 py-2 text-white"
          >
            Sign In
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
