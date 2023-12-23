'use client';
import React from 'react';
import RankContainer from './RankContainer';
import RankItem from './RankItem';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { resetToken, resetUser } from '@/store/authSlice';
import { AUTH_TOKEN } from '@/constants';

interface User {
  username: string;
}

const users: User[] = [];
for (let i = 0; i < 25; i++) {
  users.push({ username: 'JohnSmith123456' });
}

const LeaderboardSection = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(resetToken());
    dispatch(resetUser());

    localStorage.removeItem(AUTH_TOKEN);

    router.push('/login');
  };

  return (
    <section className="hidden h-full w-[18rem] bg-blue-200 xl:block">
      <div className="grid h-10 place-content-center bg-red-300">
        <button className="rounded bg-accent px-4 py-1" onClick={handleLogout}>
          LOGOUT
        </button>
      </div>

      <h2 className="grid h-20 place-content-center px-4 py-2 text-center text-2xl font-bold tracking-widest">
        LEADERBOARD
      </h2>

      <div className="h-[calc(100%-7.5rem)]">
        <RankContainer>
          {users.map((user, i) => (
            <RankItem username={user.username} point={2000000} i={i} key={i} />
          ))}
        </RankContainer>
      </div>
    </section>
  );
};

export default LeaderboardSection;
