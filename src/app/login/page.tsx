import React, { FC } from 'react';
import LoginForm from './LoginForm';

const Login: FC = () => {
  return (
    <main className="mx-auto flex h-screen w-screen flex-row bg-slate-400">
      <section className="flex-1 bg-green-200" />
      <section className="flex-1  bg-red-200">
        <div className="flex h-full w-full flex-col justify-center gap-2 bg-blue-200 px-12 pt-28 lg:px-24">
          <h1 className="mb-12 text-4xl font-semibold">Log In</h1>
          <LoginForm />
          <p className="font-light">Don&apos;t have an account? Sign Up</p>
          <p className="font-light">Forget Password?</p>
        </div>
      </section>
    </main>
  );
};

export default Login;
