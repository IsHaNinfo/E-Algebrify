import React from 'react'


type ProgressBarProps = {
  complete: number;
  questionCount:number;
};
const ProgressBar = ({ complete, questionCount }: ProgressBarProps) => {
  return (
    <div className="flex justify-center items-center mt-16 gap-1">
      {[...Array(complete)].map((_, i) => (
        <div key={i} className="w-10 h-1 bg-purple-600"></div>
      ))}
      {[...Array(questionCount - complete)].map((_, i) => (
        <div key={i} className="w-10 h-1 bg-gray-400"></div>
      ))}
    </div>
  );
};

export default ProgressBar