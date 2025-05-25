"use client"
import React, { useState } from 'react';

const BasicAlgebraicConceptsAssessment = () => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className="p-8 min-h-screen bg-black text-white">
            <h1 className="text-2xl font-bold mb-4 text-blue-400">Basic Algebraic Concepts Assessment</h1>

            {/* Concept Review Section */}
            <div className="prose max-w-none mb-6 bg-gray-900 text-blue-300 border border-blue-700 rounded p-4 shadow">
                <h2 className="text-blue-400">Concept Review</h2>
                <ul>
                    <li><strong className='text-blue-400'>Variable:</strong> A symbol like x or y that represents a number that can change.</li>
                    <li><strong className='text-blue-400'>Constant:</strong> A fixed value that doesn't change.</li>
                    <li><strong className='text-blue-400'>Term:</strong> A part of an expression formed by constants, variables, and/or powers.</li>
                    <li><strong className='text-blue-400'>Coefficient:</strong> The numerical part of a term that is multiplied by the variable.</li>
                    <li><strong className='text-blue-400'>Power (Exponent):</strong> Tells how many times to multiply a number or variable by itself.</li>
                </ul>
            </div>

            {/* Assessment Problem */}
            <div className="border border-blue-700 rounded p-6 shadow-lg bg-gray-900">
                <h2 className="text-xl font-semibold mb-2 text-blue-400">Assessment Problem</h2>
                <p className="mb-4">
                    Consider the algebraic expression: <strong className="text-blue-300">6x² - 4xy + 9 - y</strong>
                </p>
                <p className="mb-4">Based on this expression, identify:</p>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>All the terms in the expression</li>
                    <li>All the variables used</li>
                    <li>All the constants</li>
                    <li>The coefficient of each variable term</li>
                    <li>The powers of the variables</li>
                </ol>

                <button
                    className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
                    onClick={toggleAnswer}
                >
                    {showAnswer ? 'Hide Answer' : 'Show Answer'}
                </button>

                {showAnswer && (
                    <div className="mt-4 p-4 rounded text-blue-200 bg-gray-800 border border-blue-700">
                        <h3 className="font-semibold text-blue-400">Answer:</h3>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>Terms:</strong> 6x², -4xy, 9, -y</li>
                            <li><strong>Variables:</strong> x, y</li>
                            <li><strong>Constants:</strong> 9</li>
                            <li><strong>Coefficients:</strong>
                                <ul className="pl-5 list-disc">
                                    <li>6x² → Coefficient is 6</li>
                                    <li>-4xy → Coefficient is -4</li>
                                    <li>-y → Coefficient is -1</li>
                                </ul>
                            </li>
                            <li><strong>Powers:</strong>
                                <ul className="pl-5 list-disc">
                                    <li>x² → Power of x is 2</li>
                                    <li>xy → Power of x is 1, y is 1</li>
                                    <li>y → Power of y is 1</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BasicAlgebraicConceptsAssessment;
