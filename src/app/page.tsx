'use client';
import React from 'react';
import ChatSection from './home/ChatSection';
import GameSection from './home/GameSection';
import LeaderboardSection from './home/LeaderboardSection';
import withAuth from '@/components/auth/withAuth';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { User } from '@/store/authSlice';

const Home = () => {
  const user = useSelector<RootState, User | null>((state) => state.auth.user);

  if (!user)
    return (
      <main className="grid h-screen w-screen place-content-center text-5xl">
        LOADING...
      </main>
    );

  return (
    <main className="mx-auto flex h-screen w-screen justify-between bg-slate-300">
      <ChatSection />
      <GameSection />
      <LeaderboardSection />
    </main>
  );
};

export default withAuth(Home);
