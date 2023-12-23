'use client';
import React from 'react';
import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <main className="mx-auto flex h-screen w-screen flex-row bg-slate-400">
      <section className="flex-1 bg-red-200">
        <div className="flex h-full w-full flex-col justify-center gap-2 bg-blue-200 px-12 pt-28 lg:px-24">
          <h1 className="mb-12 text-4xl font-semibold">Register</h1>
          <RegisterForm />
          <p className="font-light">Have an account? Sign In</p>
        </div>
      </section>
      <section className="w-1/2 flex-1 bg-green-200" />
    </main>
  );
};

export default Register;
