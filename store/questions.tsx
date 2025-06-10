 const  quizArray = [
  {
    id: 1,
    location: 'basic-algebraic-concepts',
    name: 'Basic Algebraic Concepts',
    type: 'Lesson end quiz',
    questions: [
      {
        id: 1,
        question: 'In the expression 3x + 5, what is the variable?',
        options: ['3', '5', 'x', '+'],
        answer: 'x',
      },
      {
        id: 2,
        question: 'What is the coefficient in the term 7a²?',
        options: ['7', 'a', '2', 'a²'],
        answer: '7',
      },
      {
        id: 3,
        question: 'Which of the following is a constant?',
        options: ['x', 'a²', '5', '3x'],
        answer: '5',
      },
      {
        id: 4,
        question: 'What does the exponent in a² tell us?',
        options: [
          'Multiply a by 2',
          'Multiply a by itself',
          'Add a twice',
          'Divide a by 2',
        ],
        answer: 'Multiply a by itself',
      },
      {
        id: 5,
        question: 'Which of the following is a term in the expression 3x + 5?',
        options: ['3x', '3', 'x + 5', '+'],
        answer: '3x',
      },
    ],
  },
  {
    id: 2,
    location: 'simplification-of-algebraic-expressions',
    name: 'Simplification of Algebraic Expressions',
    type: 'Lesson end quiz',
    questions: [
      {
        id: 1,
        question: 'Which of the following are like terms?',
        options: ['3x and 5x', '2x and 2y', 'x and x²', 'x and y'],
        answer: '3x and 5x',
      },
      {
        id: 2,
        question: 'Simplify: 4x + 3x - 2x',
        options: ['9x', '5x', '6x', '7x'],
        answer: '5x',
      },
      {
        id: 3,
        question: 'Simplify: 2x × 3x',
        options: ['6x', '5x²', '6x²', 'x⁶'],
        answer: '6x²',
      },
      {
        id: 4,
        question: 'Simplify: (6a²) ÷ (2a)',
        options: ['3a²', '3a', '12a', '4a'],
        answer: '3a',
      },
      {
        id: 5,
        question: 'What is the result of removing the brackets in: 3(x + 2)?',
        options: ['3x + 2', '3x + 6', 'x + 5', '3x + 2x'],
        answer: '3x + 6',
      },
    ],
  },
  {
    id: 3,
    location: 'Indices',
    name: 'Indices',
    type: 'Lesson end quiz',
    questions: [
      {
        id: 1,
        question: 'What is the result of 3² × 3⁴ using the product rule?',
        options: ['3⁶', '3⁸', '9', '81'],
        answer: '3⁶',
      },
      {
        id: 2,
        question: 'Simplify: 5⁵ ÷ 5² using the quotient rule.',
        options: ['5⁷', '5³', '5²', '5¹⁰'],
        answer: '5³',
      },
      {
        id: 3,
        question: 'What is the result of (2³)² using the power rule?',
        options: ['2⁵', '2⁶', '2⁹', '6²'],
        answer: '2⁶',
      },
      {
        id: 4,
        question: 'What is 7⁰ equal to?',
        options: ['0', '7', '1', 'Undefined'],
        answer: '1',
      },
      {
        id: 5,
        question: 'Simplify: 2⁻³',
        options: ['8', '1/8', '2', '1/6'],
        answer: '1/8',
      },
      {
        id: 6,
        question: 'Simplify the expression: 2³ × 2² ÷ 2⁴',
        options: ['2', '2³', '2⁵', '2²'],
        answer: '2',
      },
      {
        id: 7,
        question: 'Simplify: (3²)³ ÷ 3⁴',
        options: ['3²', '3³', '3⁶', '3⁴'],
        answer: '3²',
      },
    ],
  },
  {
    id: 4,
    location: 'factorization',
    name: 'Factorization',
    type: 'Lesson end quiz',
    questions: [
      {
        id: 1,
        question: 'What is the common factor of the terms 6x and 9x²?',
        options: ['3x', '6x²', '9x', 'x²'],
        answer: '3x',
      },
      {
        id: 2,
        question: 'Factorize: x² + 5x',
        options: ['x(x + 5)', '(x + 5)(x + 5)', 'x²(1 + 5)', 'x + 5x'],
        answer: 'x(x + 5)',
      },
      {
        id: 3,
        question: 'Factorize: a² - b²',
        options: ['(a + b)(a - b)', '(a - b)²', '(a² + b²)', 'a(b - a)'],
        answer: '(a + b)(a - b)',
      },
      {
        id: 4,
        question:
          'Which of the following is a correct factorization of x² + 6x + 9?',
        options: [
          '(x + 3)(x + 3)',
          '(x + 9)(x - 1)',
          '(x + 2)(x + 4)',
          '(x - 3)(x - 3)',
        ],
        answer: '(x + 3)(x + 3)',
      },
      {
        id: 5,
        question: 'Factorize: 3x² - 12x',
        options: ['3x(x - 4)', 'x(x - 4)', '3(x² - 4)', '3x(x + 4)'],
        answer: '3x(x - 4)',
      },
      {
        id: 6,
        question: 'What identity is used in factorizing x² - 9?',
        options: [
          'a² - b² = (a + b)(a - b)',
          '(a + b)² = a² + 2ab + b²',
          '(a - b)² = a² - 2ab + b²',
          'None',
        ],
        answer: 'a² - b² = (a + b)(a - b)',
      },
    ],
  },
  {
    id: 5,
    location: 'Algebraic-Fractions',
    name: 'Algebraic Fractions',
    type: 'Lesson end quiz',
    questions: [
      {
        id: 1,
        question: 'Simplify: (6x²) / (3x)',
        options: ['2x', '2x²', '3x', '3x²'],
        answer: '2x',
      },
      {
        id: 2,
        question: 'Simplify: (x² - 9) / (x - 3)',
        options: ['x + 3', 'x² - 3', 'x - 3', 'x² + 3'],
        answer: 'x + 3',
      },
      {
        id: 3,
        question: 'What is the result of (2/x) + (3/x)?',
        options: ['5x', '5/x', '2x + 3x', '(2 + 3)x'],
        answer: '5/x',
      },
      {
        id: 4,
        question: 'Simplify: (x² - 1)/(x - 1)',
        options: ['x + 1', 'x - 1', 'x² - 1', '1'],
        answer: 'x + 1',
      },
      {
        id: 5,
        question: 'Multiply and simplify: (x/3) × (6/x)',
        options: ['2', 'x²/18', '6x/3x', '1'],
        answer: '2',
      },
      {
        id: 6,
        question: 'Divide: (x² / 4) ÷ (x / 2)',
        options: ['x/2', 'x²/8', 'x/8', 'x/1'],
        answer: 'x/2',
      },
    ],
  },
  {
    id: 6,
    location: 'solving-equations',
    name: 'Solving Equations',
    type: 'Lesson end quiz',
    questions: [
      {
        id: 1,
        question: 'Solve: x + 7 = 12',
        options: ['x = 5', 'x = 19', 'x = -5', 'x = -19'],
        answer: 'x = 5',
      },
      {
        id: 2,
        question: 'Solve: 3x = 18',
        options: ['x = 21', 'x = 15', 'x = 6', 'x = 3'],
        answer: 'x = 6',
      },
      {
        id: 3,
        question: 'Solve: 2(x - 3) = 10',
        options: ['x = 4', 'x = 3', 'x = 8', 'x = 5'],
        answer: 'x = 8',
      },
      {
        id: 4,
        question: 'Solve: 4x - 5 = 2x + 7',
        options: ['x = 6', 'x = -6', 'x = 1', 'x = -1'],
        answer: 'x = 6',
      },
      {
        id: 5,
        question: 'Solve: (x/2) + 3 = 7',
        options: ['x = 2', 'x = 4', 'x = 8', 'x = 10'],
        answer: 'x = 8',
      },
      {
        id: 6,
        question: 'What value of x satisfies the equation: 5x + 2 = 3x + 10?',
        options: ['x = 8', 'x = 6', 'x = 4', 'x = 2'],
        answer: 'x = 4',
      },
    ],
  },
  {
    id: 7,
    location: 'formulas-and-substitutions',
    name: 'Formulas and Substitutions',
    type: 'Lesson end quiz',
    questions: [
      {
        id: 1,
        question: 'If A = l × w, what is A when l = 8 and w = 5?',
        options: ['40', '13', '3', '80'],
        answer: '40',
      },
      {
        id: 2,
        question: 'Evaluate the formula: C = 2πr, when r = 7 and π ≈ 3.14',
        options: ['43.96', '21.98', '14', '44'],
        answer: '43.96',
      },
      {
        id: 3,
        question:
          'The formula for the area of a triangle is A = (1/2)bh. What is A when b = 10 and h = 6?',
        options: ['60', '30', '16', '36'],
        answer: '30',
      },
      {
        id: 4,
        question: 'Substitute x = 3 and y = 4 into the expression: x² + y²',
        options: ['25', '12', '7', '16'],
        answer: '25',
      },
      {
        id: 5,
        question: 'If V = l × w × h, find V when l = 2, w = 3, and h = 4.',
        options: ['24', '9', '20', '18'],
        answer: '24',
      },
      {
        id: 6,
        question: 'Given the formula T = 2a + 3b, find T when a = 1 and b = 2.',
        options: ['8', '6', '7', '10'],
        answer: '8',
      },
    ],
  },
  {
    id: 8,
    location: 'graphing-linear-equations',
    name: 'Graphing Linear Equations',
    type: 'Lesson end quiz',
    questions: [
      {
        id: 1,
        question:
          'What is the slope of the line represented by the equation y = 3x + 2?',
        options: ['3', '2', '1', '5'],
        answer: '3',
      },
      {
        id: 2,
        question: 'In the equation y = -4x + 1, what is the y-intercept?',
        options: ['-4', '1', '4', '-1'],
        answer: '1',
      },
      {
        id: 3,
        question: 'Which of the following points lies on the line y = 2x - 1?',
        options: ['(1, 1)', '(2, 3)', '(0, -1)', '(3, 5)'],
        answer: '(0, -1)',
      },
      {
        id: 4,
        question:
          'If a line passes through the points (0, 2) and (2, 6), what is its slope?',
        options: ['2', '4', '3', '1'],
        answer: '2',
      },
      {
        id: 5,
        question:
          'What is the equation of a line with a slope of 0 and a y-intercept of -3?',
        options: ['y = -3', 'x = -3', 'y = 0', 'x = 0'],
        answer: 'y = -3',
      },
      {
        id: 6,
        question: 'Which of the following represents a vertical line?',
        options: ['x = 5', 'y = 5', 'y = x', 'y = -x + 2'],
        answer: 'x = 5',
      },
    ],
  },
  {
    id: 9,
    location: 'simultaneous-equations',
    name: 'Simultaneous Equations',
    type: 'Lesson end quiz',
    questions: [
      {
        id: 1,
        question:
          'What is the solution to the system: x + y = 5 and x - y = 1?',
        options: [
          'x = 2, y = 3',
          'x = 3, y = 2',
          'x = 1, y = 4',
          'x = 4, y = 1',
        ],
        answer: 'x = 3, y = 2',
      },
      {
        id: 2,
        question:
          'Which method eliminates one variable by adding or subtracting the equations?',
        options: ['Substitution', 'Factorization', 'Elimination', 'Graphing'],
        answer: 'Elimination',
      },
      {
        id: 3,
        question: 'Solve the system: 2x + 3y = 12 and x = 3.',
        options: [
          'x = 3, y = 2',
          'x = 3, y = 4',
          'x = 3, y = 1',
          'x = 3, y = 3',
        ],
        answer: 'x = 3, y = 2',
      },
      {
        id: 4,
        question:
          'How many solutions does the system x + 2y = 4 and 2x + 4y = 8 have?',
        options: [
          'No solution',
          'One solution',
          'Two solutions',
          'Infinitely many solutions',
        ],
        answer: 'Infinitely many solutions',
      },
      {
        id: 5,
        question: 'Which of the following systems has no solution?',
        options: [
          'x + y = 2, x - y = 0',
          '2x + 3y = 6, 4x + 6y = 12',
          'x + y = 5, x + y = 7',
          'x = 1, y = 2',
        ],
        answer: 'x + y = 5, x + y = 7',
      },
    ],
  },
  {
    id: 10,
    location: 'inequalities',
    name: 'Inequalities',
    type: 'Lesson end quiz',
    questions: [
      {
        id: 1,
        question: 'Which symbol represents "greater than or equal to"?',
        options: ['<', '≤', '>', '≥'],
        answer: '≥',
      },
      {
        id: 2,
        question: 'Solve the inequality: 3x - 5 > 1',
        options: ['x > 2', 'x < 2', 'x > -2', 'x < -2'],
        answer: 'x > 2',
      },
      {
        id: 3,
        question: 'Which of the following is the solution to: -2x ≤ 6?',
        options: ['x ≥ -3', 'x ≤ -3', 'x ≥ 3', 'x ≤ 3'],
        answer: 'x ≥ -3',
      },
      {
        id: 4,
        question: 'If 4x + 1 < 9, what is the solution for x?',
        options: ['x < 2', 'x > 2', 'x < -2', 'x > -2'],
        answer: 'x < 2',
      },
      {
        id: 5,
        question:
          'What happens to the inequality sign when multiplying or dividing both sides by a negative number?',
        options: [
          'It stays the same',
          'It changes direction',
          'It becomes an equation',
          'It gets removed',
        ],
        answer: 'It changes direction',
      },
    ],
  },
  {
    id: 11,
    location: 'endQuiz',
    name: 'End Quiz',
    type: 'Course end quiz',
    questions: [
      {
        id: 1,
        question: 'Which of the following is a variable?',
        options: ['7', 'x', '10', '5x'],
        answer: 'x',
      },
      {
        id: 2,
        question: 'What is the coefficient in the term 8y²?',
        options: ['8', 'y²', '2', 'y'],
        answer: '8',
      },
      {
        id: 3,
        question: 'Simplify: 4a + 3a - 2a',
        options: ['5a', '9a', '2a', '7a'],
        answer: '5a',
      },
      {
        id: 4,
        question: 'What is the simplified result of 2x × 3x?',
        options: ['5x²', '6x²', '6x', '6x³'],
        answer: '6x²',
      },
      {
        id: 5,
        question: 'Which rule is used to expand: 3(x + 4)?',
        options: [
          'Power rule',
          'Distributive law',
          'Quotient rule',
          'Product rule',
        ],
        answer: 'Distributive law',
      },
      {
        id: 6,
        question: 'Simplify: (2^3 × 2^2) ÷ 2^4',
        options: ['2', '4', '1', '8'],
        answer: '2',
      },
      {
        id: 7,
        question: 'What is the value of 9^0?',
        options: ['9', '0', '1', 'undefined'],
        answer: '1',
      },
      {
        id: 8,
        question: 'Factorize: x² + 5x + 6',
        options: [
          '(x + 3)(x + 2)',
          '(x + 6)(x - 1)',
          '(x + 2)(x - 3)',
          '(x + 1)(x + 6)',
        ],
        answer: '(x + 3)(x + 2)',
      },
      {
        id: 9,
        question: 'Simplify: (x² - 9) / (x + 3)',
        options: ['x - 3', 'x + 3', 'x² + 3', 'x² - 3'],
        answer: 'x - 3',
      },
      {
        id: 10,
        question: 'Solve: 2x + 3 = 11',
        options: ['x = 4', 'x = 7', 'x = 5', 'x = 3'],
        answer: 'x = 4',
      },
      {
        id: 11,
        question: 'If A = l × w, find A when l = 4 and w = 3.',
        options: ['7', '12', '1', '3'],
        answer: '12',
      },
      {
        id: 12,
        question: 'What is the y-intercept of the equation y = 2x + 5?',
        options: ['2', '5', '0', '-2'],
        answer: '5',
      },
      {
        id: 13,
        question: 'Solve the system: x + y = 10 and x - y = 2',
        options: [
          'x = 6, y = 4',
          'x = 5, y = 5',
          'x = 4, y = 6',
          'x = 8, y = 2',
        ],
        answer: 'x = 6, y = 4',
      },
      {
        id: 14,
        question:
          'Which of these is a correct solution for the inequality: 2x - 1 < 7?',
        options: ['x < 4', 'x > 4', 'x = 4', 'x < 3'],
        answer: 'x < 4',
      },
    ],
  },
];
export default quizArray;