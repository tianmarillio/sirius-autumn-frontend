import React, { FC, ReactNode } from 'react';

interface ChatContainerProps {
  children: ReactNode;
}

const ChatContainer: FC<ChatContainerProps> = ({ children }) => {
  return (
    <div className="flex h-[100%-8rem] flex-1 flex-col-reverse justify-end overflow-y-scroll bg-secondary px-4">
      {/* {children} */}
      {/* // <div className="flex h-36 flex-col justify-end overflow-y-scroll overflow-x-hidden bg-secondary px-4"> */}
      <div className="flex h-full w-full flex-col-reverse overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

export default ChatContainer;
