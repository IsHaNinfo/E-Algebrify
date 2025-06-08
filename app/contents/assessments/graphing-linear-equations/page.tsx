"use client";
import React, { useState, useRef, useEffect } from "react";
import { graphingLinearEquationsQuestions } from './data';
import AnswerInput from '../components/AnswerInput';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface Point {
    x: number;
    y: number;
    id: string;
}

interface Line {
    points: Point[];
    id: string;
}

const GraphingLinearEquationsAssessment = () => {
    const [showAnswers, setShowAnswers] = useState<{ [key: string]: boolean }>({});
    const [userAnswers, setUserAnswers] = useState<{ [key: string]: boolean }>({});
    const [lines, setLines] = useState<Line[]>([]);
    const [currentLine, setCurrentLine] = useState<Point[]>([]);
    const [isDrawing, setIsDrawing] = useState(false);
    const [selectedPoint, setSelectedPoint] = useState<Point | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [showUserGraph, setShowUserGraph] = useState(false);
    const [zoom, setZoom] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [isPanning, setIsPanning] = useState(false);
    const [lastPanPoint, setLastPanPoint] = useState({ x: 0, y: 0 });
    const [activeLineId, setActiveLineId] = useState<string | null>(null);
    const [isHandMode, setIsHandMode] = useState(false);

    const handleAnswerSubmit = (questionId: string, isCorrect: boolean) => {
        setUserAnswers(prev => ({
            ...prev,
            [questionId]: isCorrect
        }));
    };

    const toggleAnswer = (questionId: string) => {
        setShowAnswers(prev => ({
            ...prev,
            [questionId]: !prev[questionId]
        }));
    };

    const handleZoom = (delta: number) => {
        setZoom(prev => Math.max(0.1, Math.min(5, prev + delta)));
    };

    const handlePan = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isPanning) return;
        
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;

        const currentX = e.clientX - rect.left;
        const currentY = e.clientY - rect.top;
        
        setPan(prev => ({
            x: prev.x + (currentX - lastPanPoint.x),
            y: prev.y + (currentY - lastPanPoint.y)
        }));
        
        setLastPanPoint({ x: currentX, y: currentY });
    };

    const getCanvasCoordinates = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return null;

        const x = (e.clientX - rect.left - pan.x - rect.width / 2) / zoom;
        const y = (e.clientY - rect.top - pan.y - rect.height / 2) / zoom;
        return { x, y };
    };

    const renderGraph = (question: typeof graphingLinearEquationsQuestions[0]) => {
        if (!question.graphData) return null;

        const data = {
            labels: question.graphData.xValues.map(x => x.toString()),
            datasets: [
                {
                    label: question.graphData.equation,
                    data: question.graphData.yValues,
                    borderColor: 'rgb(59, 130, 246)', // blue-500
                    backgroundColor: 'rgba(59, 130, 246, 0.5)',
                    pointBackgroundColor: 'rgb(59, 130, 246)',
                    pointBorderColor: '#fff',
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    tension: 0.1
                }
            ]
        };

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        color: 'rgba(59, 130, 246, 0.1)'
                    },
                    ticks: {
                        color: 'rgb(191, 219, 254)' // blue-200
                    }
                },
                y: {
                    grid: {
                        color: 'rgba(59, 130, 246, 0.1)'
                    },
                    ticks: {
                        color: 'rgb(191, 219, 254)' // blue-200
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'rgb(191, 219, 254)' // blue-200
                    }
                }
            }
        };

        return (
            <div className="mt-6 h-[400px] bg-gray-800 p-4 rounded border border-blue-700">
                <Line data={data} options={options} />
            </div>
        );
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (isHandMode || e.button === 1 || e.ctrlKey) { // Middle mouse button, Ctrl + click, or hand mode
            setIsPanning(true);
            const rect = canvasRef.current?.getBoundingClientRect();
            if (rect) {
                setLastPanPoint({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
            if (canvasRef.current) {
                canvasRef.current.style.cursor = 'grabbing';
            }
        } else {
            setIsDrawing(true);
            const coords = getCanvasCoordinates(e);
            if (coords) {
                const newPoint = {
                    x: coords.x,
                    y: coords.y,
                    id: Date.now().toString()
                };
                
                if (activeLineId) {
                    setLines(prev => prev.map(line => 
                        line.id === activeLineId 
                            ? { ...line, points: [...line.points, newPoint] }
                            : line
                    ));
                } else {
                    const newLineId = Date.now().toString();
                    setActiveLineId(newLineId);
                    setLines(prev => [...prev, { points: [newPoint], id: newLineId }]);
                }
                setSelectedPoint(newPoint);
            }
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        if (isPanning) {
            handlePan(e);
        } else if (isDrawing) {
            const coords = getCanvasCoordinates(e);
            if (coords && activeLineId) {
                const newPoint = {
                    x: coords.x,
                    y: coords.y,
                    id: Date.now().toString()
                };
                setLines(prev => prev.map(line => 
                    line.id === activeLineId 
                        ? { ...line, points: [...line.points, newPoint] }
                        : line
                ));
                setSelectedPoint(newPoint);
            }
        }
    };

    const handleMouseUp = () => {
        setIsDrawing(false);
        setIsPanning(false);
        if (canvasRef.current) {
            canvasRef.current.style.cursor = isHandMode ? 'grab' : 'crosshair';
        }
    };

    const handleMouseLeave = () => {
        setIsDrawing(false);
        setIsPanning(false);
        if (canvasRef.current) {
            canvasRef.current.style.cursor = isHandMode ? 'grab' : 'crosshair';
        }
    };

    const toggleHandMode = () => {
        setIsHandMode(!isHandMode);
        if (canvasRef.current) {
            canvasRef.current.style.cursor = !isHandMode ? 'grab' : 'crosshair';
        }
    };

    const renderUserDrawingCanvas = () => {
        return (
            <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-blue-400">Draw Your Graph</h3>
                    <div className="space-x-2">
                        <button
                            onClick={() => {
                                setLines([]);
                                setCurrentLine([]);
                                setSelectedPoint(null);
                                setActiveLineId(null);
                                setZoom(1);
                                setPan({ x: 0, y: 0 });
                            }}
                            className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                            Clear
                        </button>
                        <button
                            onClick={() => setShowUserGraph(!showUserGraph)}
                            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            {showUserGraph ? 'Hide My Graph' : 'Show My Graph'}
                        </button>
                        <button
                            onClick={() => setActiveLineId(null)}
                            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                            New Line
                        </button>
                        <button
                            onClick={toggleHandMode}
                            className={`px-3 py-1 rounded flex items-center space-x-1 ${
                                isHandMode 
                                    ? 'bg-yellow-600 text-white hover:bg-yellow-700' 
                                    : 'bg-gray-600 text-white hover:bg-gray-700'
                            }`}
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-5 w-5" 
                                viewBox="0 0 20 20" 
                                fill="currentColor"
                            >
                                <path 
                                    fillRule="evenodd" 
                                    d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" 
                                    clipRule="evenodd" 
                                />
                            </svg>
                            <span>Pan</span>
                        </button>
                    </div>
                </div>
                <div className="relative h-[400px] bg-gray-800 rounded border border-blue-700 overflow-hidden">
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0"
                        width={800}
                        height={400}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                        onWheel={(e) => {
                            e.preventDefault();
                            const delta = e.deltaY > 0 ? -0.1 : 0.1;
                            handleZoom(delta);
                        }}
                        style={{ cursor: isHandMode ? 'grab' : 'crosshair' }}
                    />
                </div>
                {/* Zoom Controls */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => handleZoom(-0.1)}
                            className="px-2 py-1 bg-gray-700 text-blue-300 rounded hover:bg-gray-600"
                        >
                            -
                        </button>
                        <span className="text-blue-300">Zoom: {Math.round(zoom * 100)}%</span>
                        <button
                            onClick={() => handleZoom(0.1)}
                            className="px-2 py-1 bg-gray-700 text-blue-300 rounded hover:bg-gray-600"
                        >
                            +
                        </button>
                    </div>
                    <div className="text-blue-300 text-sm">
                        {isHandMode 
                            ? 'Click and drag to pan the graph' 
                            : 'Hold Ctrl + Click or Middle Mouse Button to pan'}
                    </div>
                </div>
                {/* Coordinate Display */}
                <div className="flex justify-between items-center text-blue-300 text-sm">
                    <div>X: {selectedPoint ? Math.round(selectedPoint.x / 50) : '-'}</div>
                    <div>Y: {selectedPoint ? Math.round(-selectedPoint.y / 50) : '-'}</div>
                </div>
                {/* Points List */}
                {lines.length > 0 && (
                    <div className="mt-2 p-3 bg-gray-800 rounded border border-blue-700">
                        <h4 className="text-blue-400 mb-2">Lines:</h4>
                        <div className="space-y-2">
                            {lines.map((line, lineIndex) => (
                                <div key={line.id} className="space-y-1">
                                    <div className="text-blue-300">Line {lineIndex + 1}:</div>
                                    <div className="flex flex-wrap gap-2">
                                        {line.points.map((point, pointIndex) => (
                                            <div
                                                key={point.id}
                                                className={`px-2 py-1 rounded ${
                                                    selectedPoint === point
                                                        ? 'bg-green-600 text-white'
                                                        : 'bg-gray-700 text-blue-300'
                                                }`}
                                                onClick={() => setSelectedPoint(point)}
                                            >
                                                ({Math.round(point.x / 50)}, {Math.round(-point.y / 50)})
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Save the current context state
        ctx.save();

        // Apply zoom and pan transformations
        ctx.translate(pan.x + canvas.width / 2, pan.y + canvas.height / 2);
        ctx.scale(zoom, zoom);

        // Draw grid
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
        ctx.lineWidth = 1;

        // Calculate grid range based on zoom
        const gridSize = 50;
        const startX = -canvas.width / zoom;
        const endX = canvas.width * 2 / zoom;
        const startY = -canvas.height / zoom;
        const endY = canvas.height * 2 / zoom;

        // Draw vertical lines and x-axis labels
        for (let x = Math.floor(startX / gridSize) * gridSize; x < endX; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, startY);
            ctx.lineTo(x, endY);
            ctx.stroke();

            // Draw x-axis labels
            if (x !== 0) {
                const value = Math.round(x / gridSize);
                ctx.fillStyle = 'rgb(191, 219, 254)';
                ctx.font = '12px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(value.toString(), x, 20);
            }
        }

        // Draw horizontal lines and y-axis labels
        for (let y = Math.floor(startY / gridSize) * gridSize; y < endY; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(startX, y);
            ctx.lineTo(endX, y);
            ctx.stroke();

            // Draw y-axis labels
            if (y !== 0) {
                const value = Math.round(-y / gridSize);
                ctx.fillStyle = 'rgb(191, 219, 254)';
                ctx.font = '12px Arial';
                ctx.textAlign = 'right';
                ctx.fillText(value.toString(), -10, y + 4);
            }
        }

        // Draw axes with arrows
        ctx.strokeStyle = 'rgb(59, 130, 246)';
        ctx.lineWidth = 2;

        // X-axis with arrow
        ctx.beginPath();
        ctx.moveTo(startX, 0);
        ctx.lineTo(endX, 0);
        ctx.stroke();
        // X-axis arrow
        ctx.beginPath();
        ctx.moveTo(endX - 20, -10);
        ctx.lineTo(endX, 0);
        ctx.lineTo(endX - 20, 10);
        ctx.stroke();
        // X-axis label
        ctx.fillStyle = 'rgb(191, 219, 254)';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('x', endX - 30, -15);

        // Y-axis with arrow
        ctx.beginPath();
        ctx.moveTo(0, startY);
        ctx.lineTo(0, endY);
        ctx.stroke();
        // Y-axis arrow
        ctx.beginPath();
        ctx.moveTo(-10, startY + 20);
        ctx.lineTo(0, startY);
        ctx.lineTo(10, startY + 20);
        ctx.stroke();
        // Y-axis label
        ctx.fillStyle = 'rgb(191, 219, 254)';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('y', -15, startY + 30);

        // Draw origin point
        ctx.fillStyle = 'rgb(59, 130, 246)';
        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText('O', 10, 10);

        // Draw all lines with improved visibility
        lines.forEach((line, lineIndex) => {
            // Draw line with thicker stroke
            ctx.strokeStyle = line.id === activeLineId ? 'rgb(34, 197, 94)' : 'rgb(16, 185, 129)';
            ctx.lineWidth = line.id === activeLineId ? 3 : 2;
            ctx.beginPath();
            ctx.moveTo(line.points[0].x, line.points[0].y);
            
            for (let i = 1; i < line.points.length; i++) {
                ctx.lineTo(line.points[i].x, line.points[i].y);
            }
            ctx.stroke();

            // Draw points with improved visibility
            line.points.forEach((point) => {
                // Draw point
                ctx.fillStyle = point === selectedPoint ? 'rgb(34, 197, 94)' : 'rgb(16, 185, 129)';
                ctx.beginPath();
                ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
                ctx.fill();

                // Add point highlight
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(point.x, point.y, 6, 0, Math.PI * 2);
                ctx.stroke();

                // Draw point coordinates with improved visibility
                ctx.fillStyle = 'rgb(191, 219, 254)';
                ctx.font = 'bold 12px Arial';
                ctx.textAlign = 'left';
                const x = Math.round(point.x / gridSize);
                const y = Math.round(-point.y / gridSize);
                ctx.fillText(`(${x}, ${y})`, point.x + 8, point.y - 8);
            });
        });

        // Restore the context state
        ctx.restore();
    }, [lines, selectedPoint, zoom, pan, activeLineId]);

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-blue-400">
                Graphing Linear Equations Assessment
            </h1>

            {/* Concept Review */}
            {graphingLinearEquationsQuestions[0].conceptReview && (
                <div className="prose max-w-none mb-6 bg-gray-900 text-blue-300 border border-blue-700 rounded p-6 shadow">
                    <h2 className="text-blue-400">Basics of the Cartesian Plane</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        {graphingLinearEquationsQuestions[0].conceptReview.map((concept, index) => (
                            <li key={index} className="whitespace-pre-line">{concept}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Assessment Questions */}
            {graphingLinearEquationsQuestions.map((question) => (
                <div key={question.id} className="border border-blue-700 rounded p-6 shadow-lg bg-gray-900">
                    <h2 className="text-xl font-semibold mb-4 text-blue-400">
                        Assessment Problem
                    </h2>

                    <p className="text-blue-200 text-lg font-mono mb-4 whitespace-pre-line">
                        {question.question}
                    </p>

                    {/* User Drawing Canvas */}
                    {renderUserDrawingCanvas()}

                    {/* Solution Graph */}
                    {showUserGraph && renderGraph(question)}

                    <AnswerInput
                        questionId={question.id}
                        correctAnswer={question.answer}
                        onAnswerSubmit={(isCorrect) => handleAnswerSubmit(question.id, isCorrect)}
                    />

                    <button
                        className="mt-4 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800"
                        onClick={() => toggleAnswer(question.id)}
                    >
                        {showAnswers[question.id] ? 'Hide Solution' : 'Show Solution'}
                    </button>

                    {showAnswers[question.id] && (
                        <div className="mt-4 p-4 rounded text-blue-200 bg-gray-800 border border-blue-700">
                            <h3 className="font-semibold text-blue-400 mb-2">Detailed Solution:</h3>
                            <ol className="list-decimal pl-5 space-y-1">
                                {question.explanation.map((step, index) => (
                                    <li key={index} className="whitespace-pre-line">{step}</li>
                                ))}
                            </ol>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default GraphingLinearEquationsAssessment;
