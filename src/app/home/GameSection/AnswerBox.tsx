import React from 'react';
import { FC } from 'react';

interface AnswerBoxProps {
  text: string;
}

const AnswerBox: FC<AnswerBoxProps> = ({ text }) => {
  return (
    <p className="min-h-[6rem] rounded-lg border-2 border-secondary bg-primary px-8 py-4 text-lg tracking-wide text-secondary shadow-xl hover:cursor-pointer hover:bg-secondary hover:text-primary lg:text-xl">
      {text}
    </p>
    // <p className="min-h-[6rem] rounded-lg bg-emerald-100 px-8 py-4 text-emerald-700 shadow-xl hover:cursor-pointer hover:bg-emerald-700 hover:text-emerald-100 border-emerald-700 border-2">
    //   {text}
    // </p>
  );
};

export default AnswerBox;
