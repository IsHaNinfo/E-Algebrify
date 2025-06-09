export interface AssessmentQuestion {
    id: string;
    type: 'factor' | 'solve';
    question: string;
    answer: string;
    explanation: string[];
    conceptReview?: string[];
}

export const algebraicFractionsQuestions: AssessmentQuestion[] = [
    {
        id: 'af-001',
        type: 'factor',
        question: 'Factor: 6x + 9',
        answer: '3(2x + 3)',
        explanation: [
            'GCF of 6 and 9 is 3',
            '6x + 9 = 3(2x + 3)',
            'Final Answer: 3(2x + 3)'
        ],
        conceptReview: [
            'Common Factors: Factor out the GCF from algebraic terms.',
            'Solving Fractional Equations: Multiply all terms by the LCM of denominators to eliminate fractions.',
            'Linear Equations: Isolate the variable to solve.',
            'Quadratic Factorization: Factor the expression, set each factor to 0, and solve.'
        ]
    },
    {
        id: 'af-002',
        type: 'solve',
        question: 'Solve: 1/3 + 2/c = 1',
        answer: 'c = 3',
        explanation: [
            'LCM of 3 and c = 3c',
            'Multiply all terms by 3c: c + 6 = 3c',
            'Subtract c from both sides: 6 = 2c',
            'Divide both sides by 2: c = 3'
        ]
    }
]; 