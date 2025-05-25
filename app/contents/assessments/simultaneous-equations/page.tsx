'use client';

import React, { useState } from 'react';

const SimultaneousEquationsAssessment = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="p-8 min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold mb-6 text-blue-400">
        Simultaneous Equations Assessment
      </h1>

      {/* Concept Review Section */}
      <div className="prose max-w-none mb-6 bg-gray-900 text-blue-300 border border-blue-700 rounded p-4 shadow">
        <h2 className="text-blue-400">Concept Review</h2>
        <ul>
          <li><strong className="text-blue-400">Simultaneous Equations:</strong> Set of equations with multiple variables solved together to find values satisfying all equations.</li>
          <li><strong className="text-blue-400">Substitution Method:</strong> Solve one equation for a variable, substitute into the other, then solve.</li>
          <li><strong className="text-blue-400">Elimination Method:</strong> Add or subtract equations to eliminate one variable, then solve.</li>
          <li><strong className="text-blue-400">Graphical Method:</strong> Draw lines of equations on graph, intersection point is the solution.</li>
        </ul>
        <p className="mt-2 text-blue-200">✅ Tip: Check your answers by substituting values back into both equations.</p>
      </div>

      {/* Assignment Problem */}
      <div className="border border-blue-700 rounded p-6 shadow-lg bg-gray-900">
        <h2 className="text-xl font-semibold mb-4 text-blue-400">Assignment Problem</h2>
        <p className="mb-2">
          Solve the system of equations using substitution or elimination:
        </p>
        <p className="text-blue-300 font-mono mb-4">
          2x + y = 7<br />
          3x - y = 8
        </p>
        <p className="mb-4">Steps to perform:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Choose substitution or elimination method</li>
          <li>Solve for one variable</li>
          <li>Substitute back to find the other variable</li>
          <li>Verify your solution by checking both equations</li>
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
            <p className="mb-2">Using the Elimination Method:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Step 1: Add equations to eliminate y</strong></li>
              <p className="text-blue-300 font-mono">
                (2x + y) + (3x - y) = 7 + 8
              </p>
              <p className="text-blue-300 font-mono">
                5x = 15
              </p>

              <li><strong>Step 2: Solve for x</strong></li>
              <p className="text-blue-300 font-mono">
                x = 15 / 5 = 3
              </p>

              <li><strong>Step 3: Substitute x = 3 into first equation to find y</strong></li>
              <p className="text-blue-300 font-mono">
                2(3) + y = 7
              </p>
              <p className="text-blue-300 font-mono">
                6 + y = 7 ⇒ y = 1
              </p>

              <li><strong>Step 4: Verify in second equation</strong></li>
              <p className="text-blue-300 font-mono">
                3(3) - 1 = 9 - 1 = 8 (True)
              </p>
            </ul>

            <p className="mt-4"><strong className="text-blue-400">Final Solution:</strong> <span className="text-blue-200 font-mono">{'{ x = 3, y = 1 }'}</span></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SimultaneousEquationsAssessment;
