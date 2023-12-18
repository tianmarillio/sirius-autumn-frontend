import React, { FC, ReactNode } from 'react';

interface RankContainerProps {
  children: ReactNode;
}

const RankContainer: FC<RankContainerProps> = ({ children }) => {
  return <ol className="h-full overflow-scroll">{children}</ol>;
};

export default RankContainer;
