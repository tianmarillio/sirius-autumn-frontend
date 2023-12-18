import React, { FC, ReactNode } from 'react';

interface AnswerContainerProps {
  children: ReactNode;
}

const AnswerContainer: FC<AnswerContainerProps> = ({ children }) => {
  return (
    <div className="grid w-4/5 grid-cols-1 gap-8 lg:grid-cols-2">
      {children}
    </div>
  );
};

export default AnswerContainer;
