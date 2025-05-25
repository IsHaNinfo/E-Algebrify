'use client';

import React, { useState } from 'react';

const SimplificationOfAlgebraicExpressionsAssessment = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="p-8 min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold mb-6 text-blue-400">
        Simplification of Algebraic Expressions Assessment
      </h1>

      {/* Concept Review Section */}
      <div className="prose max-w-none mb-6 bg-gray-900 text-blue-300 border border-blue-700 rounded p-4 shadow">
        <h2 className="text-blue-400">Concept Review</h2>
        <ul>
          <li><strong className="text-blue-400">Like Terms:</strong> Have the same variables raised to the same powers. Only like terms can be added or subtracted.</li>
          <li><strong className="text-blue-400">Distributive Law:</strong> a(b + c) = ab + ac</li>
          <li><strong className="text-blue-400">Multiplication:</strong> Multiply coefficients, apply exponent rules.</li>
          <li><strong className="text-blue-400">Division:</strong> Divide coefficients, subtract powers of like bases.</li>
        </ul>
        <p className="mt-2 text-blue-200">✅ Tip: Always group like terms before simplifying. Apply the distributive law when removing brackets.</p>
      </div>

      {/* Assignment Problem */}
      <div className="border border-blue-700 rounded p-6 shadow-lg bg-gray-900">
        <h2 className="text-xl font-semibold mb-4 text-blue-400"> Assignment Problem</h2>
        <p className="mb-2">
          Simplify the following expression:
        </p>
        <p className="text-blue-300 font-mono mb-4">
          2x(3x + 4) + 5x - (2x² - 3x) + 6xy - 4xy + 8 - 3
        </p>
        <p className="mb-4">Steps to perform:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Apply the distributive property to remove brackets</li>
          <li>Combine like terms</li>
          <li>Simplify the expression</li>
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
            <p className="mb-2">Let's break it down step by step:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Step 1: Distribute</strong></li>
              <p className="text-blue-300 font-mono">2x(3x + 4) = 6x² + 8x</p>
              <p className="text-blue-300 font-mono">-(2x² - 3x) = -2x² + 3x</p>

              <li><strong>Step 2: Combine all terms</strong></li>
              <p className="text-blue-300 font-mono">
                6x² + 8x + 5x - 2x² + 3x + 6xy - 4xy + 8 - 3
              </p>

              <li><strong>Step 3: Group like terms</strong></li>
              <p className="text-blue-300 font-mono">
                (6x² - 2x²) + (8x + 5x + 3x) + (6xy - 4xy) + (8 - 3)
              </p>

              <li><strong>Step 4: Simplify</strong></li>
              <p className="text-blue-300 font-mono">
                = 4x² + 16x + 2xy + 5
              </p>
            </ul>

            <p className="mt-4"><strong className="text-blue-400">Final Answer:</strong> <span className="text-blue-200 font-mono">4x² + 16x + 2xy + 5</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimplificationOfAlgebraicExpressionsAssessment;
