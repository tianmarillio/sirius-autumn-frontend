import React, { FC, ReactNode } from 'react';

interface ChatContainerProps {
  children: ReactNode;
}

const ChatContainer: FC<ChatContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-1 flex-col-reverse overflow-x-hidden overflow-y-scroll bg-secondary px-4">
      {children}
    </div>
  );
};

export default ChatContainer;
