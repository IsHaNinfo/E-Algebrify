"use client";
import React, { useState } from 'react';

interface AnswerInputProps {
    questionId: string;
    correctAnswer: string;
    onAnswerSubmit: (isCorrect: boolean) => void;
}

const AnswerInput: React.FC<AnswerInputProps> = ({ questionId, correctAnswer, onAnswerSubmit }) => {
    const [userAnswer, setUserAnswer] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const id = questionId;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const normalizedUserAnswer = userAnswer.trim().toLowerCase();
        const normalizedCorrectAnswer = correctAnswer.trim().toLowerCase();
        const correct = normalizedUserAnswer === normalizedCorrectAnswer;
        
        setIsCorrect(correct);
        setIsSubmitted(true);
        onAnswerSubmit(correct);
    };

    return (
        <div className="mt-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col gap-4">
                    <textarea
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="Enter your answer"
                        className="w-full min-h-[100px] px-4 py-3 bg-gray-800 border border-blue-700 rounded text-blue-200 focus:outline-none focus:border-blue-500 resize-y"
                        disabled={isSubmitted}
                    />
                    <button
                        type="submit"
                        disabled={isSubmitted}
                        className="self-end px-6 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 disabled:opacity-50 text-lg"
                    >
                        Submit
                    </button>
                </div>
                
                {isSubmitted && (
                    <div className={`p-6 rounded ${
                        isCorrect ? 'bg-green-900/50 border-green-700' : 'bg-red-900/50 border-red-700'
                    } border`}>
                        <p className={`text-lg font-medium ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                            {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                        </p>
                        {!isCorrect && (
                            <div className="mt-3 text-blue-200">
                                <p className="text-lg">Correct answer:</p>
                                <p className="mt-2 p-3 bg-gray-800 rounded font-mono text-lg">{correctAnswer}</p>
                            </div>
                        )}
                    </div>
                )}
            </form>
        </div>
    );
};

export default AnswerInput; 