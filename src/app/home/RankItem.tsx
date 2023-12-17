import React, { FC } from 'react';

interface RankItemProps {
  username: string;
  i: number;
}

const RankItem: FC<RankItemProps> = ({ username, i }) => {
  const color =
    i % 2 === 0 ? 'bg-secondary text-primary' : 'bg-primary text-secondary';

  return (
    <li className={`${color} flex h-12 items-center px-4 py-2 tracking-wide`}>
      {i + 1}. {username}
    </li>
  );
};

export default RankItem;
