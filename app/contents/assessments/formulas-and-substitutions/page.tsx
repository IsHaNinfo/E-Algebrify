"use client";
import React, { useState } from "react";

const FormulasAndSubstitutionsAssessment = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => setShowAnswer(!showAnswer);

  return (
    <div className="p-8 min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold mb-6 text-blue-400">
        Formulas and Substitutions Assessment
      </h1>

      <div className="prose max-w-none mb-6 bg-gray-900 text-blue-300 border border-blue-700 rounded p-6 shadow">
        <h2 className="text-blue-400">Concept Review</h2>
        <ul>
          <li>
            <strong className='text-blue-400'>Substitution:</strong> Replace variables in a formula with given values and simplify.
          </li>
          <li>
            <strong className='text-blue-400'>Deriving Formulas:</strong> Rearrange formulas to find new formulas or isolate variables.
          </li>
          <li>
            <strong className='text-blue-400'>Changing the Subject:</strong> Use inverse operations (add/subtract, multiply/divide) to make a different variable the subject.
          </li>
        </ul>
        <p className="text-blue-400">
          ✅ Tip: Carefully follow algebraic steps when substituting or rearranging.
        </p>
      </div>

      <div className="border border-blue-700 rounded p-6 shadow-lg bg-gray-900">
        <h2 className="text-xl font-semibold mb-4 text-blue-400">Assessment Problem</h2>

        <p className="mb-4">
          Complete the following tasks using the concepts of formulas and substitutions:
        </p>

        <ol className="list-decimal list-inside space-y-4 text-blue-200 font-mono">
          <li>
            <strong>Substitution:</strong> Given the formula <code>A = l × w</code>, find
            the area when <code>l = 7</code> and <code>w = 4</code>.
          </li>

          <li>
            <strong>Deriving a Formula:</strong> Given speed formula <code>v = d / t</code>,
            rearrange to find <code>d</code> in terms of <code>v</code> and <code>t</code>.
            Then find the distance if <code>v = 50</code> km/h and <code>t = 3</code> hours.
          </li>

          <li>
            <strong>Changing the Subject:</strong> Given <code>v = u + at</code>, make <code>t</code> the subject.
          </li>

          <li>
            <strong>Substitution & Calculation:</strong> Use the formula for
            displacement <code>s = ut + (1/2)at²</code> with <code>u = 5</code> m/s,
            <code>a = 2</code> m/s², and <code>t = 4</code> seconds. Calculate
            the displacement.
          </li>
        </ol>

        <button
          onClick={toggleAnswer}
          className="mt-6 px-5 py-2 bg-blue-700 rounded hover:bg-blue-800"
        >
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>

        {showAnswer && (
          <div className="mt-6 p-5 rounded bg-gray-800 border border-blue-700 text-blue-200 space-y-4 font-mono">
            <h3 className="font-semibold text-blue-400">Answer:</h3>

            <ol className="list-decimal list-inside space-y-3">
              <li>
                <strong>Substitution:</strong> A = l × w = 7 × 4 = <span className="text-blue-300">28</span>
              </li>

              <li>
                <strong>Deriving a Formula:</strong>
                <br />
                Multiply both sides by t: <code>d = v × t</code>
                <br />
                Substitute: d = 50 × 3 = <span className="text-blue-300">150</span> km
              </li>

              <li>
                <strong>Changing the Subject:</strong>
                <br />
                Given <code>v = u + at</code>, subtract u: <code>v - u = at</code>
                <br />
                Divide by a: <code>t = (v - u) / a</code>
              </li>

              <li>
                <strong>Substitution & Calculation:</strong>
                <br />
                s = ut + (1/2)at²
                <br />
                Substitute values: s = 5×4 + (1/2)×2×(4)²
                <br />
                Calculate: s = 20 + 1 × 16 = <span className="text-blue-300">36</span> meters
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormulasAndSubstitutionsAssessment;
