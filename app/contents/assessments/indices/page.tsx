"use client";
import React, { useState } from 'react';

const IndicesAssessment = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="p-8 min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold mb-4 text-blue-400">Indices Assessment</h1>

      {/* Concept Review Section */}
      <div className="prose max-w-none mb-6 bg-gray-900 text-blue-300 border border-blue-700 rounded p-4 shadow">
        <h2 className="text-blue-400">Concept Review</h2>
        <ul>
          <li>
            <strong>Product Rule:</strong> a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>
          </li>
          <li>
            <strong>Quotient Rule:</strong> a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>
          </li>
          <li>
            <strong>Power Rule:</strong> (a<sup>m</sup>)<sup>n</sup> = a<sup>m×n</sup>
          </li>
          <li>
            <strong>Distributive Law:</strong> a(b + c) = ab + ac
          </li>
        </ul>
        <p className="text-blue-400">✅ Tip: Use exponent laws carefully when simplifying expressions.</p>
      </div>

      {/* Assessment Problem */}
      <div className="border border-blue-700 rounded p-6 shadow-lg bg-gray-900">
        <h2 className="text-xl font-semibold mb-2 text-blue-400">Assessment Problem</h2>
        <p className="mb-4">
          Simplify the following expression using the laws of indices:
        </p>
        <p className="text-blue-200 text-lg font-mono mb-4">
          (2x³)² × x⁴ ÷ x²
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
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>(2x³)² = 4x⁶ (Power Rule: 2² = 4, (x³)² = x⁶)</li>
              <li>4x⁶ × x⁴ = 4x¹⁰ (Product Rule: x⁶ × x⁴ = x¹⁰)</li>
              <li>4x¹⁰ ÷ x² = 4x⁸ (Quotient Rule: x¹⁰ ÷ x² = x⁸)</li>
              <li><strong>Final Answer:</strong> <span className="text-blue-300 font-mono">4x⁸</span></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default IndicesAssessment;
