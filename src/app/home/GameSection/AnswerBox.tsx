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
  );
};

export default AnswerBox;
