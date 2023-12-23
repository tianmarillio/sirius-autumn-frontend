import { useState } from 'react';

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
    username: 'jonhsmith12341234',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis veniam ipsum autem, necessitatibus doloribus dignissimos dolorum alias beatae, voluptatem repellat ducimus consequatur vero accusantium. Quod blanditiis dolor maxime natus.',
  },
  {
    username: 'jonhsmith12341234',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facilis veniam ipsum autem, necessitatibus doloribus dignissimos dolorum alias beatae, voluptatem repellat ducimus consequatur vero accusantium. Quod blanditiis dolor maxime natus.',
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

const useChatFormHandler = () => {
  const [chats, setChats] = useState(initialChats);

  const handleSubmit = async (chatInput: string) => {
    setChats([
      {
        username: 'HARD_CODE_USERNAME',
        text: chatInput,
      },
      ...chats,
    ]);
  };

  return {
    handleSubmit,
    chats,
  };
};

export default useChatFormHandler;
