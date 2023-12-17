import React, { FC, ReactNode } from 'react';

interface ChatContainerProps {
  children: ReactNode;
}

const ChatContainer: FC<ChatContainerProps> = ({ children }) => {
  return (
    <div className="flex h-[calc(100%-8rem)] flex-col-reverse overflow-scroll overflow-x-hidden bg-secondary px-4">
      {children}
    </div>
  );
};

export default ChatContainer;
