import React from 'react';
import AnswerBox from './AnswerBox';
import AnswerContainer from './AnswerContainer';
import QuestionBox from './QuestionBox';

const GameSection = () => {
  return (
    <div className="flex h-full w-full flex-col items-center pt-16">
      <QuestionBox
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        architecto eaque maiores nostrum totam voluptatem placeat repellat.
        Adipisci obcaecati quibusdam enim explicabo quis, facilis sint quaerat,
        repellendus voluptatem officiis minus."
       />
      <AnswerContainer>
        <AnswerBox text="A. Lorem !" />
        <AnswerBox text="B. Lorem ipsum adipisicing elit. Dolorem, magni!" />
        <AnswerBox
          text="C. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          magni!"
        />
        <AnswerBox
          text="D. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, asdad adasdas asdasddasd asdasd 
          magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, asdad adasdas asdasddasd asdasd 
          magni! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, asdad adasdas asdasddasd asdasd 
          magni!"
        />
      </AnswerContainer>
    </div>
  );
};

export default GameSection;
