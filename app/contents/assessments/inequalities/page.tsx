'use client';

import React, { useState } from 'react';

const InequalitiesAssessment = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="p-8 min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold mb-6 text-blue-400">
        Inequalities Assessment
      </h1>

      {/* Concept Review Section */}
      <div className="prose max-w-none mb-6 bg-gray-900 text-blue-300 border border-blue-700 rounded p-4 shadow">
        <h2 className="text-blue-400">Concept Review</h2>
        <ul>
          <li>
            <strong className="text-blue-400">Inequalities:</strong> Show relationships where one value is greater than, less than, or equal to another.
          </li>
          <li>
            <strong className="text-blue-400">Symbols:</strong> {'<'}, {'>'}, {'≤'}, {'≥'}
          </li>
          <li>
            <strong className="text-blue-400">Solving Tips:</strong> Treat like equations, but reverse the inequality when multiplying/dividing by negative numbers.
          </li>
          <li>
            <strong className="text-blue-400">Graphical Representation:</strong> Use open (○) or filled (●) circles and arrows to show ranges on a number line.
          </li>
          <li>
            <strong className="text-blue-400">Compound Inequalities:</strong> Use &quot;and&quot; for intersection, &quot;or&quot; for union of conditions.
          </li>
        </ul>
        <p className="mt-2 text-blue-200">
          ✅ Tip: Always reverse the inequality sign when multiplying or dividing by a negative number.
        </p>
      </div>

      {/* Assignment Problem */}
      <div className="border border-blue-700 rounded p-6 shadow-lg bg-gray-900">
        <h2 className="text-xl font-semibold mb-4 text-blue-400">Assignment Problem</h2>
        <p className="mb-2">Solve the following inequality:</p>
        <p className="text-blue-300 font-mono mb-4">-3x + 5 ≥ 2</p>
        <p className="mb-4">Steps to perform:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Isolate the variable</li>
          <li>Be cautious with sign changes when dividing</li>
          <li>Represent the solution on a number line</li>
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
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Step 1:</strong> Subtract 5 from both sides</li>
              <p className="text-blue-300 font-mono">-3x ≥ -3</p>

              <li><strong>Step 2:</strong> Divide both sides by -3 (reverse the inequality)</li>
              <p className="text-blue-300 font-mono">x ≤ 1</p>

              <li><strong>Graphical Representation:</strong></li>
              <p className="text-blue-300 font-mono">
                ● at 1, arrow extends to the left
              </p>
            </ul>

            <p className="mt-4">
              <strong className="text-blue-400">Final Answer:</strong>{' '}
              <span className="text-blue-200 font-mono">x ≤ 1</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InequalitiesAssessment;
