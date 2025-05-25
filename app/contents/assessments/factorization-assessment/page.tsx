"use client"
import React, { useState } from 'react';

const LinearEquationsAssessment = () => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className="p-8 min-h-screen bg-black text-white">
            <h1 className="text-2xl font-bold mb-4 text-blue-400">Linear Equations Assessment</h1>

            {/* Concept Review Section */}
            <div className="prose max-w-none mb-6 bg-gray-900 text-blue-300 border border-blue-700 rounded p-4 shadow">
                <h2 className="text-blue-400">Concept Review</h2>
                <ul>
                    <li><strong className='text-blue-400'>Linear Equation:</strong> An equation of the form <code>ax + b = c</code>, where <code>a</code>, <code>b</code>, and <code>c</code> are constants.</li>
                    <li><strong className='text-blue-400'>Solution:</strong> The value of the variable that makes the equation true.</li>
                    <li><strong className='text-blue-400'>Isolating the variable:</strong> Rearranging the equation to solve for the unknown.</li>
                </ul>
            </div>

            {/* Assessment Problem */}
            <div className="border border-blue-700 rounded p-6 shadow-lg bg-gray-900">
                <h2 className="text-xl font-semibold mb-2 text-blue-400">Assessment Problem</h2>
                <p className="mb-4">
                    Solve the following linear equation:
                    <br />
                    <strong className="text-blue-300">4(x - 2) = 2x + 6</strong>
                </p>

                <button
                    className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
                    onClick={toggleAnswer}
                >
                    {showAnswer ? 'Hide Answer' : 'Show Answer'}
                </button>

                {showAnswer && (
                    <div className="mt-4 p-4 rounded text-blue-200 bg-gray-800 border border-blue-700">
                        <h3 className="font-semibold text-blue-400">Answer:</h3>
                        <ol className="list-decimal pl-5 mt-2 space-y-1">
                            <li>Distribute 4 on the left: 4x - 8 = 2x + 6</li>
                            <li>Subtract 2x from both sides: 2x - 8 = 6</li>
                            <li>Add 8 to both sides: 2x = 14</li>
                            <li>Divide both sides by 2: <strong>x = 7</strong></li>
                        </ol>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LinearEquationsAssessment;
