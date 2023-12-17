'use client';
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import FieldText from '@/components/Formik/FieldText';
import FieldPassword from '@/components/Formik/FieldPassword';

interface FormValues {
  username: string;
  password: string;
}

const validationSchema: yup.ObjectSchema<FormValues> = yup.object({
  username: yup.string().required('username is required'),
  password: yup.string().required('password is required'),
});

const RegisterForm = () => {
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
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));

        //   setSubmitting(false);
        // }, 400);
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
