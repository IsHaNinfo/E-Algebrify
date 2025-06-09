export interface AssessmentQuestion {
    id: string;
    type: 'linear' | 'factor';
    question: string;
    answer: string;
    explanation: string[];
    conceptReview?: string[];
}

export const factorizationQuestions: AssessmentQuestion[] = [
    {
        id: 'fa-001',
        type: 'linear',
        question: 'Solve the following linear equation:\n4(x - 2) = 2x + 6',
        answer: 'x = 7',
        explanation: [
            'Distribute 4 on the left: 4x - 8 = 2x + 6',
            'Subtract 2x from both sides: 2x - 8 = 6',
            'Add 8 to both sides: 2x = 14',
            'Divide both sides by 2: x = 7'
        ],
        conceptReview: [
            'Linear Equation: An equation of the form ax + b = c, where a, b, and c are constants.',
            'Solution: The value of the variable that makes the equation true.',
            'Isolating the variable: Rearranging the equation to solve for the unknown.'
        ]
    }
]; 