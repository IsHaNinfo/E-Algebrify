export interface AssessmentQuestion {
    id: string;
    type: 'graphing';
    question: string;
    answer: string;
    explanation: string[];
    conceptReview?: string[];
    graphData?: {
        xValues: number[];
        yValues: number[];
        equation: string;
    };
}

export const graphingLinearEquationsQuestions: AssessmentQuestion[] = [
    {
        id: 'gle-001',
        type: 'graphing',
        question: 'Given the linear equation: y = 3x - 2, perform the following:\n\n1. Create a table of values for x = -2, -1, 0, 1, 2 and find the corresponding y.\n2. Plot the points from the table on the Cartesian plane (describe the points).\n3. State the gradient and y-intercept of the line.\n4. Explain what the gradient and y-intercept tell you about the graph.',
        answer: '1. x=-2→y=-8, x=-1→y=-5, x=0→y=-2, x=1→y=1, x=2→y=4\n2. Points: (-2,-8), (-1,-5), (0,-2), (1,1), (2,4)\n3. Gradient=3, Y-intercept=-2\n4. Line rises 3 units for every 1 unit right, crosses y-axis at (0,-2)',
        explanation: [
            '1. Table of values:',
            '   x = -2 → y = 3(-2) - 2 = -6 - 2 = -8',
            '   x = -1 → y = 3(-1) - 2 = -3 - 2 = -5',
            '   x = 0 → y = 3(0) - 2 = 0 - 2 = -2',
            '   x = 1 → y = 3(1) - 2 = 3 - 2 = 1',
            '   x = 2 → y = 3(2) - 2 = 6 - 2 = 4',
            '2. Points to plot:',
            '   (-2, -8), (-1, -5), (0, -2), (1, 1), (2, 4)',
            '3. Gradient (m) = 3',
            '   Y-intercept (c) = -2',
            '4. The gradient 3 means the line rises 3 units vertically for every 1 unit it moves right.',
            '   The y-intercept -2 means the line crosses the y-axis at (0, -2).'
        ],
        conceptReview: [
            'The horizontal axis is called the x-axis',
            'The vertical axis is called the y-axis',
            'The point where they intersect is the origin (0,0)',
            'Each point is an ordered pair (x, y)',
            'The equation of a line is y = mx + c where:',
            '  m is the gradient (slope)',
            '  c is the y-intercept'
        ],
        graphData: {
            xValues: [-2, -1, 0, 1, 2],
            yValues: [-8, -5, -2, 1, 4],
            equation: 'y = 3x - 2'
        }
    }
]; 