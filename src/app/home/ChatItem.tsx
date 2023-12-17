import React, { FC } from 'react';

interface ChatItemProps {
  username: string;
  text: string;
}

const ChatItem: FC<ChatItemProps> = ({ username, text }) => {
  return (
    <p className="my-1 text-white">
      <span className="font-bold text-accent">{username}:</span> {text}
    </p>
  );
};

export default ChatItem;
