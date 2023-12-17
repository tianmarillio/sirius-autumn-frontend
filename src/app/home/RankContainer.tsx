import React, { FC, ReactNode } from 'react';

interface RankContainerProps {
  children: ReactNode;
}

const RankContainer: FC<RankContainerProps> = ({ children }) => {
  return <ol className="h-[calc(100%-5rem)] overflow-scroll">{children}</ol>;
};

export default RankContainer;
