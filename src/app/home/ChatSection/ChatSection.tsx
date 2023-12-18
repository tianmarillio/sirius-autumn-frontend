'use client';
import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import ChatItem from './ChatItem';
import ChatContainer from './ChatContainer';

// Need to be sorted by newest
const initialChats = [
  {
    username: 'jonhsmith',
    text: 'allo.',
  },
  {
    username: 'jonhsmith12341234',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis veniam ipsum autem, necessitatibus doloribus dignissimos dolorum alias beatae, voluptatem repellat ducimus consequatur vero accusantium. Quod blanditiis dolor maxime natus.',
  },
  {
    username: 'alex',
    text: ' ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis veniam ipsum autem, necessitatibus doloribus dignissimos dolorum alias beatae, voluptatem repellat ducimus consequatur vero a',
  },
];

const ChatSection = () => {
  const [chatInput, setChatInput] = useState('');
  const [chats, setChats] = useState(initialChats);

  const handleChatInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChatInput(e.target.value);
  };

  const handleSubmitChat = (e: SyntheticEvent) => {
    e.preventDefault();

    setChats([
      {
        username: 'HARD_CODE_USERNAME',
        text: chatInput,
      },
      ...chats,
    ]);

    setChatInput('');
  };

  return (
    <div className="flex h-full w-full flex-col">
      <ChatContainer>
        {chats.map((chat, i) => (
          <ChatItem key={i} username={chat.username} text={chat.text} />
        ))}
      </ChatContainer>
      {/* <div className="h-32 bg-blue-200 px-4 flex flex-col justify-evenly"> */}
      <form
        className="flex h-32 flex-initial flex-col justify-evenly bg-secondary px-4"
        onSubmit={handleSubmitChat}
      >
        <input
          type="text"
          className="h-12 w-full rounded-md border-4 border-primary px-4 py-2"
          placeholder="Send message..."
          name="chat"
          onChange={handleChatInputChange}
          value={chatInput}
        />
        <button className="self-end font-bold text-primary" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatSection;
