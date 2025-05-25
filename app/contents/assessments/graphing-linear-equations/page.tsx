"use client";
import React, { useState } from "react";

const GraphingLinearEquationsAssessment = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => setShowAnswer(!showAnswer);

  return (
    <div className="p-8 min-h-screen bg-black text-white">
      <h1 className="text-2xl font-bold mb-6 text-blue-400">
        Graphing Linear Equations Assessment
      </h1>

      {/* Concept Review */}
      <div className="prose max-w-none mb-6 bg-gray-900 text-blue-300 border border-blue-700 rounded p-6 shadow">
        <h2 className="text-blue-400">Basics of the Cartesian Plane</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>The horizontal axis is called the <strong>x-axis</strong></li>
          <li>The vertical axis is called the <strong>y-axis</strong></li>
          <li>The point where they intersect is the <strong>origin (0,0)</strong></li>
          <li>Each point is an ordered pair <code>(x, y)</code></li>
        </ul>

        <h3 className="mt-4 text-blue-400">Understanding Coordinates</h3>
        <p>
          The first number (<code>x</code>) is the distance from the y-axis.<br />
          The second number (<code>y</code>) is the distance from the x-axis.
        </p>

        <h3 className="mt-4 text-blue-400">Plotting Points and Drawing Graphs</h3>
        <p>
          To graph a linear equation:
        </p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Choose values for <code>x</code></li>
          <li>Find corresponding <code>y</code> values</li>
          <li>Plot the points on the plane</li>
          <li>Draw a straight line through the points</li>
        </ol>

        <h3 className="mt-4 text-blue-400">Example: Graphing <code>y = 2x + 1</code></h3>
        <p>Step 1: Create a Table of Values</p>
        <table className="table-auto border-collapse border border-blue-700 text-blue-300 mb-4">
          <thead>
            <tr>
              <th className="border border-blue-700 px-3 py-1">x</th>
              <th className="border border-blue-700 px-3 py-1">y = 2x + 1</th>
              <th className="border border-blue-700 px-3 py-1">Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-blue-700 px-3 py-1">-1</td>
              <td className="border border-blue-700 px-3 py-1">-1</td>
              <td className="border border-blue-700 px-3 py-1">(-1, -1)</td>
            </tr>
            <tr>
              <td className="border border-blue-700 px-3 py-1">0</td>
              <td className="border border-blue-700 px-3 py-1">1</td>
              <td className="border border-blue-700 px-3 py-1">(0, 1)</td>
            </tr>
            <tr>
              <td className="border border-blue-700 px-3 py-1">1</td>
              <td className="border border-blue-700 px-3 py-1">3</td>
              <td className="border border-blue-700 px-3 py-1">(1, 3)</td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-4 text-blue-400">Gradient and Y-intercept</h3>
        <p>
          The equation of a line is <code>y = mx + c</code> where:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>m</strong> is the gradient (slope)</li>
          <li><strong>c</strong> is the y-intercept</li>
        </ul>

        <h4 className="mt-3 text-blue-400">Gradient (m)</h4>
        <p>
          The gradient tells us how steep the line is and the rate of change.
          For example:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>m = 2: Line rises 2 units for every 1 unit right</li>
          <li>m = -1: Line falls 1 unit for every 1 unit right</li>
          <li>m = 0.5: Line rises 0.5 units for every 1 unit right</li>
        </ul>

        <h4 className="mt-3 text-blue-400">Y-intercept (c)</h4>
        <p>
          The y-intercept is where the line crosses the y-axis (x = 0). Examples:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>c = 1: crosses at (0,1)</li>
          <li>c = -2: crosses at (0,-2)</li>
          <li>c = 0: passes through origin (0,0)</li>
        </ul>
      </div>

      {/* Assessment Problem */}
      <div className="border border-blue-700 rounded p-6 shadow-lg bg-gray-900">
        <h2 className="text-xl font-semibold mb-4 text-blue-400">
          Assessment Problem
        </h2>

        <p className="mb-4 text-blue-200 font-mono">
          Given the linear equation: <code>y = 3x - 2</code>, perform the following:
        </p>

        <ol className="list-decimal list-inside space-y-4 text-blue-200 font-mono">
          <li>Create a table of values for <code>x = -2, -1, 0, 1, 2</code> and find the corresponding <code>y</code>.</li>
          <li>Plot the points from the table on the Cartesian plane (describe the points).</li>
          <li>State the gradient and y-intercept of the line.</li>
          <li>Explain what the gradient and y-intercept tell you about the graph.</li>
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
                Table of values:
                <br />
                x = -2 → y = 3(-2) - 2 = -6 - 2 = <code>-8</code>
                <br />
                x = -1 → y = 3(-1) - 2 = -3 - 2 = <code>-5</code>
                <br />
                x = 0 → y = 3(0) - 2 = 0 - 2 = <code>-2</code>
                <br />
                x = 1 → y = 3(1) - 2 = 3 - 2 = <code>1</code>
                <br />
                x = 2 → y = 3(2) - 2 = 6 - 2 = <code>4</code>
              </li>

              <li>
                Points to plot: <br />
                (-2, -8), (-1, -5), (0, -2), (1, 1), (2, 4)
              </li>

              <li>
                Gradient (m) = 3 <br />
                Y-intercept (c) = -2
              </li>

              <li>
                The gradient 3 means the line rises 3 units vertically for every 1 unit it moves right.<br />
                The y-intercept -2 means the line crosses the y-axis at (0, -2).
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default GraphingLinearEquationsAssessment;
