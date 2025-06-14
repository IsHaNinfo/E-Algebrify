'use client';
import ProgressBar from '@/components/ui/ProgressBar';


import React, { useState } from 'react';
function Page() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const quizData = {
    name: 'Basic Algebraic Concepts',
    type: 'Lesson end quiz',
    questions: [
      {
        id: 1,
        question: 'What is your favorite programming language?',
        options: ['Java', 'Python', 'JavaScript', 'C++'],
        answer: 'JavaScript',
      },
      {
        id: 2,
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        answer: 'Paris',
      },
      {
        id: 3,
        question: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Jupiter',
      },
      {
        id: 4,
        question: 'What is the boiling point of water?',
        options: ['0°C', '50°C', '100°C', '150°C'],
        answer: '100°C',
      },
      {
        id: 5,
        question: 'What is your favorite programming language?',
        options: ['Java', 'Python', 'JavaScript', 'C++'],
        answer: 'JavaScript',
      },
      {
        id: 6,
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        answer: 'Paris',
      },
    ],
  };
  type QuestionAnswer = {
    id: number;
    answer: string;
  };

  const [questionAnswers, setQuestionAnswers] = useState<QuestionAnswer[]>([]);

  const checkAnswers = (answer: string) => {
    const updatedAnswers = [...questionAnswers];
    const existingAnswer = updatedAnswers.filter(
      (data) => data.id === quizData.questions[currentQuestionIndex].id
    );
    if (existingAnswer.length > 0) {
      updatedAnswers.forEach((data) => {
        if (data.id === quizData.questions[currentQuestionIndex].id) {
          data.answer = answer;
        }
      });
    } else {
      updatedAnswers.push({
        id: quizData.questions[currentQuestionIndex].id,
        answer: answer,
      });
    }
    setQuestionAnswers(updatedAnswers);
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex justify-center items-center ">
      <div>
        <div className="text-2xl font-semibold text-center">
          {quizData.name}
        </div>
        <div className="text-center">{quizData.type}</div>
        <div className=" mt-12 text-xl text-center">
          {quizData.questions[currentQuestionIndex].question}
        </div>
        <div className=" flex justify-center items-center">
          <div className=" grid grid-cols-2 gap-x-16 gap-y-4 mt-3">
            {quizData.questions[currentQuestionIndex].options.map(
              (answer, index) => (
                <div key={index} className="flex items-center gap-3 mb-2">
                  <input
                    type="radio"
                    name="answer"
                    checked={questionAnswers.some(
                      (data) =>
                        data.id ===
                          quizData.questions[currentQuestionIndex].id &&
                        data.answer === answer
                    )}
                    value={answer}
                    onChange={() => checkAnswers(answer)}
                    className="appearance-none w-4 h-4 border border-gray-400 rounded-sm checked:bg-purple-500 checked:border-transparent cursor-pointer transition-all duration-200"
                  />
                  <label
                    className="cursor-pointer"
                    onClick={() => checkAnswers(answer)}>
                    {answer}
                  </label>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex justify-between items-center mt-10 min-w-[600px]">
          <div
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
            className={`relative group inline-block rounded-2xl px-7 py-1 text-white cursor-pointer border border-white overflow-hidden ${
              currentQuestionIndex === 0 ? 'invisible' : 'visible'
            }`}>
            <span className="relative z-10 group-hover:text-black ">Back</span>
            <div className="absolute inset-0 bg-white  transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out group-hover:origin-left group-hover:duration-300 group-hover:ease-out group-hover:transition-transform group-hover:z-0 group-hover:rounded-2xl "></div>
          </div>

          {currentQuestionIndex < quizData.questions.length - 1 ? (
            <div
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
              className="relative group inline-block rounded-2xl px-7 py-1 text-white cursor-pointer border border-white overflow-hidden">
              <span className="relative z-10 group-hover:text-black ">
                Next
              </span>
              <div className="absolute inset-0 bg-white  transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out group-hover:origin-left group-hover:duration-300 group-hover:ease-out group-hover:transition-transform group-hover:z-0 group-hover:rounded-2xl "></div>
            </div>
          ) : (
            <div
              onClick={() => console.log(questionAnswers, 'submit')}
              className="relative group inline-block rounded-2xl px-7 py-1 text-white cursor-pointer border border-white overflow-hidden">
              <span className="relative z-10 group-hover:text-black ">
                submit
              </span>
              <div className="absolute inset-0 bg-white  transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out group-hover:origin-left group-hover:duration-300 group-hover:ease-out group-hover:transition-transform group-hover:z-0 group-hover:rounded-2xl "></div>
            </div>
          )}
        </div>
        <ProgressBar
          questionCount={quizData.questions.length}
          complete={currentQuestionIndex + 1}
        />
      </div>
    </div>
  );
}

export default Page;
