import React from 'react';
import RankContainer from './RankContainer';
import RankItem from './RankItem';

interface User {
  username: string;
}

const users: User[] = [];
for (let i = 0; i < 25; i++) {
  users.push({ username: 'JohnSmith123456' });
}

const LeaderboardSection = () => {
  return (
    <div className="h-screen">
      <div className="grid h-10 place-content-center bg-red-300">
        <button className="rounded bg-accent px-4 py-1">LOGOUT</button>
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
    </div>
  );
};

export default LeaderboardSection;
