'use client';
import ProgressBar from '@/components/ui/ProgressBar';
import { Check } from 'lucide-react';

import React, { useEffect, useState } from 'react';
function Quiz({ slug }: { slug: string[] }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showError, setShowError] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [alreadyCompleted, setAlreadyCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const quizData = {
    id: 1,
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
    ],
  };
  type QuestionAnswer = {
    id: number;
    correctAnswer: string;
    answer: string;
    location: number;
  };

  useEffect(() => {
    const stored = localStorage.getItem('completedQuizzes');
    const quizIds: number[] = stored ? JSON.parse(stored) : [];

    if (quizIds.includes(quizData.id)) {
      setAlreadyCompleted(true);
    }
  }, []);

  const [questionAnswers, setQuestionAnswers] = useState<QuestionAnswer[]>([]);

  const handleNext = () => {
    if (
      questionAnswers.some(
        (data) => data.id === quizData.questions[currentQuestionIndex].id
      )
    ) {
      setShowError(false);
      if (currentQuestionIndex < quizData.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        console.log(
          'Quiz completed!',
          questionAnswers,
          'questions',
          questionAnswers.length,
          'correct',
          questionAnswers.filter((data) => data.answer == data.correctAnswer)
            .length,
          slug
        );
        setShowResult(true);
        setCurrentQuestionIndex(0);
        setLoading(true);
        setTimeout(() => {}, 500);
      }
    } else {
      setShowError(true);
    }
  };

  const checkAnswers = (answer: string) => {
    setShowError(false);
    const updatedAnswers = [...questionAnswers];
    const existingAnswer = updatedAnswers.filter(
      (data) => data.id === quizData.questions[currentQuestionIndex].id
    );
    if (existingAnswer.length > 0) {
      updatedAnswers.forEach((data) => {
        if (data.id === quizData.questions[currentQuestionIndex].id) {
          data.answer = answer;
          data.correctAnswer = quizData.questions[currentQuestionIndex].answer;
          data.location = currentQuestionIndex;
        }
      });
    } else {
      updatedAnswers.push({
        id: quizData.questions[currentQuestionIndex].id,
        answer: answer,
        correctAnswer: quizData.questions[currentQuestionIndex].answer,
        location: currentQuestionIndex,
      });
    }
    setQuestionAnswers(updatedAnswers);
  };

  const questionCorrectness = () => {
    if (!showResult) {
      return '';
    }
    const currentQuestion = questionAnswers.filter(
      (data) => data.location === currentQuestionIndex
    )[0];
    if (currentQuestion.answer === currentQuestion.correctAnswer) {
      return 'text-green-500';
    } else {
      return 'text-red-500';
    }
  };

  return (
    <div className="min-h-[calc(100vh-140px)] flex justify-center items-center ">
      <div>
        <div className="text-2xl font-semibold text-center">
          {quizData.name}
        </div>
        <div className="text-center">{quizData.type}</div>
        {!alreadyCompleted && (
          <>
            <div
              className={`mt-12 text-xl text-center ${questionCorrectness()}`}>
              {currentQuestionIndex + 1} .{' '}
              {quizData.questions[currentQuestionIndex].question}
            </div>
            <div className=" flex justify-center items-center">
              <div className=" grid grid-cols-2 gap-x-16 gap-y-4 mt-3">
                {quizData.questions[currentQuestionIndex].options.map(
                  (answer, index) => {
                    const currentAnswerData = questionAnswers.find(
                      (data) =>
                        data.id === quizData.questions[currentQuestionIndex].id
                    );
                    const isSelected = currentAnswerData?.answer === answer;
                    const isCorrect =
                      quizData.questions[currentQuestionIndex].answer ===
                      answer;

                    return (
                      <div key={index} className="flex items-center gap-3 mb-2">
                        <input
                          type="radio"
                          name="answer"
                          checked={isSelected}
                          disabled={showResult}
                          value={answer}
                          onChange={() => checkAnswers(answer)}
                          className="appearance-none w-4 h-4 border border-gray-400 rounded-sm checked:bg-purple-500 checked:border-transparent cursor-pointer transition-all duration-200"
                        />
                        <label
                          className={`cursor-pointer ${
                            showResult
                              ? isCorrect
                                ? 'text-green-600 font-semibold'
                                : isSelected
                                ? 'text-red-500'
                                : ''
                              : ''
                          }`}
                          onClick={() => {
                            if (!showResult) checkAnswers(answer);
                          }}>
                          {answer}
                          {showResult && isCorrect && (
                            <span className="ml-2"></span>
                          )}
                          {showResult && isSelected && !isCorrect && (
                            <span className="ml-2"></span>
                          )}
                        </label>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
            <div className="flex justify-between items-center mt-10 min-w-[600px]">
              <div
                onClick={() =>
                  setCurrentQuestionIndex(currentQuestionIndex - 1)
                }
                className={`relative group inline-block rounded-2xl px-7 py-1 text-white cursor-pointer border border-white overflow-hidden ${
                  currentQuestionIndex === 0 ? 'invisible' : 'visible'
                }`}>
                <span className="relative z-10 group-hover:text-black ">
                  Back
                </span>
                <div className="absolute inset-0 bg-white  transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out group-hover:origin-left group-hover:duration-300 group-hover:ease-out group-hover:transition-transform group-hover:z-0 group-hover:rounded-2xl "></div>
              </div>

              {showError && (
                <div className=" text-red-800">Please select a answer</div>
              )}

              {currentQuestionIndex < quizData.questions.length - 1 ? (
                <div
                  onClick={handleNext}
                  className="relative group inline-block rounded-2xl px-7 py-1 text-white cursor-pointer border border-white overflow-hidden">
                  <span className="relative z-10 group-hover:text-black ">
                    Next
                  </span>
                  <div className="absolute inset-0 bg-white  transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out group-hover:origin-left group-hover:duration-300 group-hover:ease-out group-hover:transition-transform group-hover:z-0 group-hover:rounded-2xl "></div>
                </div>
              ) : showResult ? (
                <div
                  onClick={() => {
                    const stored = localStorage.getItem('completedQuizzes');
                    const quizIds: number[] = stored ? JSON.parse(stored) : [];

                    if (!quizIds.includes(quizData.id)) {
                      quizIds.push(quizData.id);
                      localStorage.setItem(
                        'completedQuizzes',
                        JSON.stringify(quizIds)
                      );
                    }
                    setAlreadyCompleted(true);
                    setCurrentQuestionIndex(0);
                    setShowResult(false);
                    setQuestionAnswers([]);
                    setShowError(false);
                  }}
                  className="relative group inline-block rounded-2xl px-7 py-1 text-white cursor-pointer border border-white overflow-hidden">
                  <span className="relative z-10 group-hover:text-black ">
                    Done
                  </span>
                  <div className="absolute inset-0 bg-white  transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out group-hover:origin-left group-hover:duration-300 group-hover:ease-out group-hover:transition-transform group-hover:z-0 group-hover:rounded-2xl "></div>
                </div>
              ) : (
                <div
                  onClick={loading ? undefined : handleNext}
                  className="relative group inline-block rounded-2xl px-7 py-1 text-white cursor-pointer border border-white overflow-hidden min-w-[100px] text-center">
                  <span className="relative z-10 group-hover:text-black flex items-center justify-center gap-2">
                    {loading ? (
                      <svg
                        className="animate-spin h-5 w-5 text-white group-hover:text-black"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"></path>
                      </svg>
                    ) : (
                      'Submit'
                    )}
                  </span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out group-hover:origin-left group-hover:duration-300 group-hover:ease-out group-hover:transition-transform group-hover:z-0 group-hover:rounded-2xl" />
                </div>
              )}
            </div>
            <ProgressBar
              questionCount={quizData.questions.length}
              complete={currentQuestionIndex + 1}
            />
            {showResult && (
              <div className="text-center mt-10 text-lg text-yellow-600 ">
                <div>
                  you are correct{' '}
                  {
                    questionAnswers.filter(
                      (data) => data.answer == data.correctAnswer
                    ).length
                  }{' '}
                  out of {questionAnswers.length}{' '}
                </div>
              </div>
            )}
          </>
        )}

        {alreadyCompleted && (
          <div className="text-center mt-10 text-2xl text-green-600">
            Completed <Check size={26} className="inline ml-2" />

          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
