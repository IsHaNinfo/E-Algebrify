'use client';
import LeaderboardUserRow from '@/contents/leaderboard/leaderboardUserRow';
import { getLeaderboardDetails } from '@/services/api';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


const page = () => {

  const [userData, setUserData]=useState([]);

  useEffect(() => {
    getDetails()
  }, [])
  
  const getDetails =async () => {
    try {
      const result = await getLeaderboardDetails();
      console.log('🚀 ~ getDetails ~ result:', result.data);
      setUserData(result.data);
      
    } catch (error) {
      console.log("error:", error)
      
    }
  }


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
          <div className="transform skew-x-12 bg-gray-700 flex h-4 items-center gap-5 w-full  py-4 shadow-md">
            <div className="transform -skew-x-12 w-2/12 text-white text-center ">
              Rank
            </div>
            <div className="transform -skew-x-12 w-5/12 text-white pl-10">
              Name
            </div>

            <div className="transform -skew-x-12 w-2/12 text-white text-right">
              Points
            </div>
          </div>
        </div>
      </div>
      {userData.map((user, index) => (
        <LeaderboardUserRow key={index} rank={index+1} user={user} />
      ))}
    </div>
  );
};

export default page;
