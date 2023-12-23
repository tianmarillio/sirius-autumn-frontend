'use client';
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FieldText from '@/components/Formik/FieldText';
import FieldPassword from '@/components/Formik/FieldPassword';
import { useDispatch } from 'react-redux';
import { register } from '@/store/authSlice';
import { AppDispatch } from '@/store/store';
import { useRouter } from 'next/navigation';

interface FormValues {
  username: string;
  password: string;
}

const validationSchema: yup.ObjectSchema<FormValues> = yup.object({
  username: yup.string().required('username is required'),
  password: yup.string().required('password is required'),
});

const RegisterForm = () => {
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
        const registerResult = await dispatch(
          register({
            username: values.username,
            password: values.password,
          }),
        );

        if (!register.fulfilled.match(registerResult)) {
          // TODO: throw error
          return;
        }

        router.push('/login');
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

export default RegisterForm;
