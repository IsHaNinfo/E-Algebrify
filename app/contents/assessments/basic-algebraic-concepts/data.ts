export interface AssessmentQuestion {
    id: string;
    type: 'identification';
    question: string;
    answer: string;
    explanation: string[];
    conceptReview?: string[];
}

export const basicAlgebraicQuestions: AssessmentQuestion[] = [
    {
        id: 'bac-001',
        type: 'identification',
        question: 'Consider the algebraic expression: 6x² - 4xy + 9 - y\n\nIdentify:\n1. All the terms in the expression\n2. All the variables used\n3. All the constants\n4. The coefficient of each variable term\n5. The powers of the variables',
        answer: 'Terms: 6x², -4xy, 9, -y\nVariables: x, y\nConstants: 9\nCoefficients: 6x² → 6, -4xy → -4, -y → -1\nPowers: x² → x=2, xy → x=1,y=1, y → y=1',
        explanation: [
            'Terms: 6x², -4xy, 9, -y',
            'Variables: x, y',
            'Constants: 9',
            'Coefficients:',
            '  6x² → Coefficient is 6',
            '  -4xy → Coefficient is -4',
            '  -y → Coefficient is -1',
            'Powers:',
            '  x² → Power of x is 2',
            '  xy → Power of x is 1, y is 1',
            '  y → Power of y is 1'
        ],
        conceptReview: [
            'Variable: A symbol like x or y that represents a number that can change.',
            'Constant: A fixed value that doesn\'t change.',
            'Term: A part of an expression formed by constants, variables, and/or powers.',
            'Coefficient: The numerical part of a term that is multiplied by the variable.',
            'Power (Exponent): Tells how many times to multiply a number or variable by itself.'
        ]
    }
]; 