import Image from 'next/image';
import React from 'react'


type LeaderboardUserRowProps = {
  user: {
    rank: number;
    name: string;
    weekly: number;
    total: number;
  };
};
const LeaderboardUserRow = (props:LeaderboardUserRowProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative mb-3 w-full max-w-3xl ">
        <div className="transform skew-x-12 bg-gray-700  flex h-12  items-center gap-5 w-full pe-5   ">
          <div className="w-1/12 h-12 -skew-x-12">
            <div className="relative h-full">
              <div className="transform skew-x-12 bg-gray-800 h-full w-full flex items-center justify-center">
                <div className="transform -skew-x-12 text-white text-2xl font-bold font-code ">
                  {props.user.rank}
                </div>
              </div>
            </div>
          </div>
          <Image
            className="-skew-x-12 w-1/12 p-3 "
            src={'/images/profile.png'}
            alt="profile"
            width={20}
            height={20}
          />
          <div className="transform -skew-x-12 w-5/12 text-white ">
            {props.user.name}
          </div>
          <div className="transform -skew-x-12 w-2/12 text-white text-center">
            {props.user.weekly}
          </div>
          <div className="transform -skew-x-12 w-2/12 text-white text-right">
            {props.user.total}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardUserRow;