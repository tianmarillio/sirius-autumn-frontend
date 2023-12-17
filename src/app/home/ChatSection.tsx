import React from 'react';
import ChatItem from './ChatItem';
import ChatContainer from './ChatContainer';

const ChatSection = () => {
  return (
    <div className="h-screen">
      {/* <ChatContainer>
        <ChatItem></ChatItem>
      </ChatContainer>
      
      <ChatSender></ChatSender> */}

      <ChatContainer>
        <ChatItem username="jonhsmith" text="allo." />
        <ChatItem username="alex" text="Lorem ipsum dolor" />
        <ChatItem
          username="jonhsmith12341234$$$$$$$$$$z$$$%%%%%%%%%%12312312311111"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis veniam ipsum autem, necessitatibus doloribus dignissimos dolorum alias beatae, voluptatem repellat ducimus consequatur vero accusantium. Quod blanditiis dolor maxime natus."
         />
        <ChatItem
          username="jonhsmith12341234555555"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis veniam ipsum autem, necessitatibus doloribus dignissimos dolorum alias beatae, voluptatem repellat ducimus consequatur vero accusantium. Quod blanditiis dolor maxime natus."
         />
        <ChatItem
          username="jonhsmith12341234555555"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis veniam ipsum autem, necessitatibus doloribus dignissimos dolorum alias beatae, voluptatem repellat ducimus consequatur vero accusantium. Quod blanditiis dolor maxime natus."
         />
        <ChatItem
          username="jonhsmith12341234555555"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis veniam ipsum autem, necessitatibus doloribus dignissimos dolorum alias beatae, voluptatem repellat ducimus consequatur vero accusantium. Quod blanditiis dolor maxime natus."
         />
        <ChatItem
          username="jonhsmith12341234555555"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis veniam ipsum autem, necessitatibus doloribus dignissimos dolorum alias beatae, voluptatem repellat ducimus consequatur vero accusantium. Quod blanditiis dolor maxime natus."
         />
      </ChatContainer>
      {/* <div className="h-32 bg-blue-200 px-4 flex flex-col justify-evenly"> */}
      <div className="flex h-32 flex-col justify-evenly bg-secondary px-4">
        <input
          type="text"
          className="h-12 w-full rounded-md border-4 border-primary px-4 py-2"
          placeholder="Send message..."
        />
        <button className="self-end font-bold text-primary">Send</button>
      </div>
    </div>
  );
};

export default ChatSection;
