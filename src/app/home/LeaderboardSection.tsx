import React from 'react';
import RankContainer from './RankContainer';
import RankItem from './RankItem';

interface User {
  username: string;
}

const users: User[] = [];
for (let i = 0; i < 25; i++) {
  users.push({ username: 'Lorem, ipsum.' });
}

const LeaderboardSection = () => {
  return (
    <div className="h-screen">
      <h2 className="h-20 px-4 py-2 text-center text-2xl font-bold tracking-widest">
        LEADERBOARD
      </h2>

      <RankContainer>
        {users.map((user, i) => (
          <RankItem username={user.username} i={i} key={i} />
        ))}
        {/* <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem>
        <RankItem username="Lorem, ipsum."></RankItem> */}
      </RankContainer>
    </div>
  );
};

export default LeaderboardSection;
