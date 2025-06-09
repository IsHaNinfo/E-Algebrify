"use client";
import React, { useState } from "react";
import { formulasAndSubstitutionsQuestions } from './data';
import AnswerInput from '../components/AnswerInput';

const FormulasAndSubstitutionsAssessment = () => {
    const [showAnswers, setShowAnswers] = useState<{ [key: string]: boolean }>({});
    const [userAnswers, setUserAnswers] = useState<{ [key: string]: boolean }>({});

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

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-blue-400">
                Formulas and Substitutions Assessment
            </h1>

            {/* Concept Review */}
            {formulasAndSubstitutionsQuestions[0].conceptReview && (
                <div className="prose max-w-none mb-6 bg-gray-900 text-blue-300 border border-blue-700 rounded p-6 shadow">
                    <h2 className="text-blue-400">Concept Review</h2>
                    <ul>
                        {formulasAndSubstitutionsQuestions[0].conceptReview.map((concept, index) => (
                            <li key={index}>
                                <strong className='text-blue-400'>{concept.split(':')[0]}:</strong>
                                {concept.split(':')[1]}
                            </li>
                        ))}
                    </ul>
                    <p className="text-blue-400">
                        ✅ Tip: Carefully follow algebraic steps when substituting or rearranging.
                    </p>
                </div>
            )}

            {/* Assessment Questions */}
            {formulasAndSubstitutionsQuestions.map((question) => (
                <div key={question.id} className="border border-blue-700 rounded p-6 shadow-lg bg-gray-900">
                    <h2 className="text-xl font-semibold mb-4 text-blue-400">Assessment Problem</h2>
                    <p className="text-blue-200 text-lg font-mono mb-4 whitespace-pre-line">
                        {question.question}
                    </p>

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
            {userAnswers[formulasAndSubstitutionsQuestions[0].id] !== undefined && (
                        // <div className={`mt-4 p-2 rounded ${
                        //     userAnswers[question.id] 
                        //         ? 'bg-green-600 text-white' 
                        //         : 'bg-red-600 text-white'
                        // }`}>
                        //     {userAnswers[question.id] 
                        //         ? 'Correct!' 
                        //         : 'Incorrect. Try again!'}
                        // </div>
                        <div></div>
                    )}
        </div>
    );
};

export default FormulasAndSubstitutionsAssessment;
