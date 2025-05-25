"use client";
import React, { useState } from "react";

const SolvingEquationsAssessment = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="p-8 min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold mb-4 text-blue-400">Solving Equations Assessment</h1>

      {/* Concept Review */}
      <div className="prose max-w-none mb-6 bg-gray-900 text-blue-300 border border-blue-700 rounded p-4 shadow">
        <h2 className="text-blue-400">Concept Review</h2>

        {/* Fractional Equations */}
        <h3 className="text-blue-400">Solving Fractional Equations</h3>
        <p>
          Fractional equations include variables in denominators. We clear fractions by multiplying all terms by the Lowest Common Denominator (LCD).
        </p>
        <ol>
          <li>Identify the LCD.</li>
          <li>Multiply every term by the LCD to eliminate denominators.</li>
          <li>Solve the resulting equation.</li>
        </ol>
        <p><strong>Example 1:</strong> Solve: 1/(x+1) + 1 = 2</p>
        <ul>
          <li>Subtract 1 → 1/(x+1) = 1</li>
          <li>Multiply both sides by x+1 → 1 = x + 1</li>
          <li>Solve → x = 0</li>
        </ul>
        <p><strong>Example 2:</strong> Solve: (2x + 3)/5 = 1</p>
        <ul>
          <li>Multiply both sides by 5 → 2x + 3 = 5</li>
          <li>Subtract 3 → 2x = 2</li>
          <li>Divide by 2 → x = 1</li>
        </ul>

        {/* Quadratic Equations */}
        <h3 className="text-blue-400">Quadratic Equations by Factorization</h3>
        <p>
          Quadratic equations are of the form <code>ax² + bx + c = 0</code>. Solve by factorizing the expression and using the zero-product rule.
        </p>
        <ol>
          <li>Express in standard form.</li>
          <li>Factor the expression.</li>
          <li>Set each factor to zero and solve.</li>
        </ol>
        <p><strong>Example 1:</strong> Solve: x² + 5x + 6 = 0</p>
        <ul>
          <li>Factor: (x + 2)(x + 3) = 0</li>
          <li>Set factors to 0 → x = -2, x = -3</li>
        </ul>
        <p><strong>Example 2:</strong> Solve: x² - 4x - 5 = 0</p>
        <ul>
          <li>Factor: (x - 5)(x + 1) = 0</li>
          <li>Roots: x = 5, x = -1</li>
        </ul>

        {/* Linear Equations */}
        <h3 className="text-blue-400">Linear Equations in One Variable</h3>
        <p>
          A linear equation is of the form <code>ax + b = c</code>. The goal is to isolate the variable x.
        </p>
        <ol>
          <li>Simplify both sides if needed.</li>
          <li>Move variables to one side and constants to the other.</li>
          <li>Isolate the variable.</li>
        </ol>
        <p><strong>Example 1:</strong> Solve: 3x - 5 = 7</p>
        <ul>
          <li>Add 5 → 3x = 12</li>
          <li>Divide by 3 → x = 4</li>
        </ul>
        <p><strong>Example 2:</strong> Solve: 2(x - 1) = 4</p>
        <ul>
          <li>Expand → 2x - 2 = 4</li>
          <li>Add 2 → 2x = 6</li>
          <li>Divide by 2 → x = 3</li>
        </ul>
      </div>

      {/* Assessment */}
      <div className="border border-blue-700 rounded p-6 shadow-lg bg-gray-900">
        <h2 className="text-xl font-semibold mb-2 text-blue-400">Assessment Problem</h2>
        <p className="mb-4">Solve the following equations:</p>
        <ol className="list-decimal pl-5 space-y-2 text-blue-200">
          <li>1/(x + 2) + 2 = 3</li>
          <li>(x² - x - 6) = 0</li>
          <li>5x - 3 = 2x + 6</li>
        </ol>

        <button
          className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
          onClick={toggleAnswer}
        >
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </button>

        {showAnswer && (
          <div className="mt-4 p-4 rounded text-blue-200 bg-gray-800 border border-blue-700">
            <h3 className="font-semibold text-blue-400">Answers:</h3>
            <ol className="list-decimal pl-5 mt-2 space-y-3">
              <li>
                <strong>1/(x + 2) + 2 = 3</strong>
                <ul className="list-disc pl-5">
                  <li>Subtract 2: 1/(x + 2) = 1</li>
                  <li>Multiply both sides by (x + 2): 1 = x + 2</li>
                  <li>Solve: x = -1</li>
                </ul>
              </li>
              <li>
                <strong>x² - x - 6 = 0</strong>
                <ul className="list-disc pl-5">
                  <li>Factor: (x - 3)(x + 2) = 0</li>
                  <li>Roots: x = 3, x = -2</li>
                </ul>
              </li>
              <li>
                <strong>5x - 3 = 2x + 6</strong>
                <ul className="list-disc pl-5">
                  <li>Subtract 2x: 3x - 3 = 6</li>
                  <li>Add 3: 3x = 9</li>
                  <li>Divide by 3: x = 3</li>
                </ul>
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default SolvingEquationsAssessment;
