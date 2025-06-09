export interface AssessmentQuestion {
    id: string;
    type: 'formula';
    question: string;
    answer: string;
    explanation: string[];
    conceptReview?: string[];
}

export const formulasAndSubstitutionsQuestions: AssessmentQuestion[] = [
    {
        id: 'fs-001',
        type: 'formula',
        question: 'Complete the following tasks using the concepts of formulas and substitutions:\n\n1. Substitution: Given the formula A = l × w, find the area when l = 7 and w = 4.\n\n2. Deriving a Formula: Given speed formula v = d / t, rearrange to find d in terms of v and t. Then find the distance if v = 50 km/h and t = 3 hours.\n\n3. Changing the Subject: Given v = u + at, make t the subject.\n\n4. Substitution & Calculation: Use the formula for displacement s = ut + (1/2)at² with u = 5 m/s, a = 2 m/s², and t = 4 seconds. Calculate the displacement.',
        answer: '1. A = 28\n2. d = 150 km\n3. t = (v - u) / a\n4. s = 36 meters',
        explanation: [
            '1. Substitution: A = l × w = 7 × 4 = 28',
            '2. Deriving a Formula:',
            '   Multiply both sides by t: d = v × t',
            '   Substitute: d = 50 × 3 = 150 km',
            '3. Changing the Subject:',
            '   Given v = u + at, subtract u: v - u = at',
            '   Divide by a: t = (v - u) / a',
            '4. Substitution & Calculation:',
            '   s = ut + (1/2)at²',
            '   Substitute values: s = 5×4 + (1/2)×2×(4)²',
            '   Calculate: s = 20 + 1 × 16 = 36 meters'
        ],
        conceptReview: [
            'Substitution: Replace variables in a formula with given values and simplify.',
            'Deriving Formulas: Rearrange formulas to find new formulas or isolate variables.',
            'Changing the Subject: Use inverse operations (add/subtract, multiply/divide) to make a different variable the subject.'
        ]
    }
]; 