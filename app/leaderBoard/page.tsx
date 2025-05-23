import LeaderboardUserRow from '@/contents/leaderboard/leaderboardUserRow';
import Image from 'next/image';
import React from 'react';

const page = () => {
  const userData = [
    { rank: 1, name: 'Nalaka Sampath', weekly: 100, total: 120 },
    { rank: 2, name: 'Nishantha perera', weekly: 90, total: 110 },
      { rank: 3, name: 'Kasun bandara', weekly: 80, total: 100 },
      { rank: 4, name: 'Kasun Perera', weekly: 70, total: 90 },
    
  ];
  return (
    <div className="p-5 min-h-[calc(100vh-140px)]">
      <div className="flex content-center items-center justify-center gap-4 mb-5">
        <Image
          src="/images/medal.png"
          alt="A descriptive alt text for my image"
          width={60}
          height={60}
        />
        <div className="text-4xl font-bold text-center text-white">
          LEADERBOARD
        </div>
        <Image src="/images/medal.png" alt="medal" width={60} height={60} />
      </div>

      <div className="flex flex-col items-center justify-center mb-3">
        <div className="relative w-full max-w-3xl">
          <div className="transform skew-x-12 bg-gray-700 flex h-4 items-center gap-5 w-full px-5 py-4 shadow-md">
            <div className="transform -skew-x-12 w-2/12 text-white text-left">
              rank
            </div>
            <div className="transform -skew-x-12 w-5/12 text-white">Name</div>
            <div className="transform -skew-x-12 w-2/12 text-white text-center">
              weekly
            </div>
            <div className="transform -skew-x-12 w-2/12 text-white text-right">
              total
            </div>
          </div>
        </div>
      </div>
      {userData.map((user, index) => (
        <LeaderboardUserRow key={index} user={user} />
      ))}
    </div>
  );
};

export default page;
