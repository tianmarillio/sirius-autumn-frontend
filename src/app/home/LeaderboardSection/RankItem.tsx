import React, { FC } from 'react';

interface RankItemProps {
  username: string;
  i: number;
  point: number;
}

const RankItem: FC<RankItemProps> = ({ username, i, point }) => {
  const color =
    i % 2 === 0 ? 'bg-secondary text-primary' : 'bg-primary text-secondary';

  return (
    <li
      className={`${color} flex min-h-[3rem] min-w-[200px] flex-row flex-wrap justify-between gap-x-1 px-4 py-2`}
    >
      <p className="flex items-center">{i + 1}.</p>
      <p className="flex items-center tracking-wide">{username}</p>
      <p className="flex items-center">{point}</p>
    </li>
    // <li className={`${color} grid h-12 grid-cols-12 px-2 min-w-[200px]`}>
    //   <p className="col-span-1 flex items-center">{i + 1}.</p>
    //   <p className="col-span-8 flex items-center px-4 py-2 tracking-wide">
    //     {username}
    //   </p>
    //   <p className="col-span-3 grid place-content-center">{point}</p>
    // </li>
  );
};

export default RankItem;
