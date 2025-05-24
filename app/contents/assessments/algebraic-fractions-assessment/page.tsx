"use client";
import React, { useState } from 'react';

const AlgebraicFractionsAssessment = () => {
    const [showAnswer1, setShowAnswer1] = useState(false);
    const [showAnswer2, setShowAnswer2] = useState(false);

    return (
        <div className="p-8 min-h-screen bg-black text-white">
            <h1 className="text-2xl font-bold mb-4 text-blue-400">Algebraic Fractions Assessment</h1>

            {/* Concept Review */}
            <div className="prose max-w-none mb-6 bg-gray-900 text-blue-300 border border-blue-700 rounded p-4 shadow">
                <h2 className="text-blue-400">Concept Review</h2>
                <ul>
                    <li><strong className='text-blue-400'>Common Factors:</strong> Factor out the GCF from algebraic terms.</li>
                    <li><strong className='text-blue-400'>Solving Fractional Equations:</strong> Multiply all terms by the LCM of denominators to eliminate fractions.</li>
                    <li><strong className='text-blue-400'>Linear Equations:</strong> Isolate the variable to solve.</li>
                    <li><strong className='text-blue-400'>Quadratic Factorization:</strong> Factor the expression, set each factor to 0, and solve.</li>
                </ul>
                <p className="text-blue-400">✅ Tip: Always simplify expressions before solving.</p>
            </div>

            {/* Assessment Problem 1: Factor Common Terms */}
            <div className="border border-blue-700 rounded p-6 shadow-lg bg-gray-900 mb-6">
                <h2 className="text-xl font-semibold mb-2 text-blue-400">Problem 1: Factor the Expression</h2>
                <p className="text-blue-200 text-lg font-mono mb-4">
                    Factor: 6x + 9
                </p>
                <button
                    className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
                    onClick={() => setShowAnswer1(!showAnswer1)}
                >
                    {showAnswer1 ? 'Hide Answer' : 'Show Answer'}
                </button>

                {showAnswer1 && (
                    <div className="mt-4 p-4 rounded text-blue-200 bg-gray-800 border border-blue-700">
                        <p><strong>GCF of 6 and 9 is 3:</strong></p>
                        <p>6x + 9 = 3(2x + 3)</p>
                        <p><strong>Final Answer:</strong> <span className="text-blue-300 font-mono">3(2x + 3)</span></p>
                    </div>
                )}
            </div>

            {/* Assessment Problem 2: Solve Fractional Equation */}
            <div className="border border-blue-700 rounded p-6 shadow-lg bg-gray-900">
                <h2 className="text-xl font-semibold mb-2 text-blue-400">Problem 2: Solve the Fractional Equation</h2>
                <p className="text-blue-200 text-lg font-mono mb-4">
                    Solve: 1/3 + 2/c = 1
                </p>
                <button
                    className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
                    onClick={() => setShowAnswer2(!showAnswer2)}
                >
                    {showAnswer2 ? 'Hide Answer' : 'Show Answer'}
                </button>

                {showAnswer2 && (
                    <div className="mt-4 p-4 rounded text-blue-200 bg-gray-800 border border-blue-700">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>LCM of 3 and c = 3c</li>
                            <li>Multiply all terms by 3c: c + 6 = 3c</li>
                            <li>Subtract c from both sides: 6 = 2c</li>
                            <li>Divide both sides by 2: c = 3</li>
                            <li><strong>Final Answer:</strong> <span className="text-blue-300 font-mono">c = 3</span></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AlgebraicFractionsAssessment;
