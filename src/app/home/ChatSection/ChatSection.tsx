'use client';
import React from 'react';
import ChatItem from './ChatItem';
import ChatContainer from './ChatContainer';
import useChatFormHandler from './useChatFormHandler';
import ChatForm from './ChatForm';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { User } from '@/store/authSlice/authSlice.interfaces';

const ChatSection = () => {
  const { chats, handleSubmit } = useChatFormHandler();
  const user = useSelector<RootState, User | null>((state) => state.auth.user);

  return (
    <section className="hidden h-full w-[18rem] bg-secondary xl:flex xl:flex-col">
      <div className="grid h-16 place-content-center bg-black text-white">
        {user?.username}
      </div>

      <ChatContainer>
        {chats.map((chat, i) => (
          <ChatItem key={i} username={chat.username} text={chat.text} />
        ))}
      </ChatContainer>

      <ChatForm handleSubmit={handleSubmit} />
    </section>
  );
};

export default ChatSection;
