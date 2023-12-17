import React from 'react';
import GameSection from './GameSection';
import LeaderboardSection from './LeaderboardSection';
import ChatSection from './ChatSection';

const Home = () => {
  return (
    <main className="mx-auto grid h-screen grid-cols-12 bg-slate-500">
      <section className="col-span-2 hidden bg-red-200 lg:block">
        <ChatSection />
      </section>
      <section className="col-span-8 bg-slate-300">
        <GameSection />
      </section>
      <section className="col-span-2 hidden bg-blue-200 lg:block">
        <LeaderboardSection />
      </section>
    </main>
    // <main className="mx-auto flex h-screen flex-row bg-slate-500">
    //   <section className="flex-1 bg-red-200 hidden lg:block" >
    //     <ChatSection></ChatSection>
    //   </section>
    //   <section className="flex-[3]  bg-slate-300">
    //     <GameSection />
    //   </section>
    //   <section className="flex-1 bg-blue-200 hidden lg:block" >
    //     <LeaderboardSection></LeaderboardSection>
    //   </section>
    // </main>
  );
};

export default Home;
