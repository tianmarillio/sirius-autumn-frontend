import React, { FC } from 'react';

interface QuestionBoxProps {
  text: string;
}

const QuestionBox: FC<QuestionBoxProps> = ({ text }) => {
  return (
    <p className="mb-24 w-4/5 border-4 border-secondary bg-primary px-8 py-4 text-xl tracking-wide text-secondary lg:text-2xl">
      {text}
    </p>
  );
};

export default QuestionBox;
