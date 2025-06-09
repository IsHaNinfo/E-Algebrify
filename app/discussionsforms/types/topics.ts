export interface SubTopic {
    name: string;
    description: string;
}

export interface Topic {
    name: string;
    subtopics: SubTopic[];
}

export const algebraTopics: Topic[] = [
    {
        name: "Basic Algebraic Concepts",
        subtopics: [
            { name: "Variables, Constants, and Terms", description: "Understanding the building blocks of algebra" },
            { name: "Coefficients and Powers", description: "How numbers interact with variables" }
        ]
    },
    {
        name: "Simplification of Algebraic Expressions",
        subtopics: [
            { name: "Adding and Subtracting Like Terms", description: "Combining similar terms in expressions" },
            { name: "Multiplication and Division of Terms", description: "Operations with algebraic terms" },
            { name: "Use and Removal of Brackets", description: "Working with parentheses in expressions" }
        ]
    },
    {
        name: "Indices (Laws of Exponents)",
        subtopics: [
            { name: "Product, Quotient, and Power Rules", description: "Rules for working with exponents" },
            { name: "Zero and Negative Indices", description: "Special cases of exponents" },
            { name: "Simplifying Using Indices", description: "Using exponent rules to simplify expressions" }
        ]
    },
    {
        name: "Factorization",
        subtopics: [
            { name: "Finding Common Factors", description: "Identifying and extracting common factors" },
            { name: "Difference of Two Squares", description: "Special case of factorization" },
            { name: "Perfect Square Trinomials", description: "Factoring perfect square expressions" },
            { name: "Grouping Method", description: "Using grouping to factor expressions" },
            { name: "Factorizing Quadratic Expressions", description: "Breaking down quadratic expressions" }
        ]
    },
    {
        name: "Algebraic Fractions",
        subtopics: [
            { name: "Simplifying Algebraic Fractions", description: "Reducing fractions to simplest form" },
            { name: "Addition, Subtraction, Multiplication, and Division of Algebraic Fractions", description: "Operations with algebraic fractions" }
        ]
    },
    {
        name: "Solving Equations",
        subtopics: [
            { name: "Solving Linear Equations in One Variable", description: "Finding solutions to linear equations" },
            { name: "Solving Quadratic Equations by Factorization", description: "Using factoring to solve quadratics" },
            { name: "Solving Simple Fractional Equations", description: "Working with equations containing fractions" }
        ]
    },
    {
        name: "Formulas and Substitution",
        subtopics: [
            { name: "Substituting Values into Expressions", description: "Replacing variables with values" },
            { name: "Deriving and Using Formulas", description: "Creating and applying mathematical formulas" },
            { name: "Changing the Subject of a Formula", description: "Rearranging formulas to solve for different variables" }
        ]
    },
    {
        name: "Graphing Linear Equations",
        subtopics: [
            { name: "Basics of the Cartesian Plane", description: "Understanding coordinate systems" },
            { name: "Plotting Points and Drawing Graphs", description: "Creating visual representations of equations" },
            { name: "Gradient and Y-intercept", description: "Key features of linear graphs" }
        ]
    },
    {
        name: "Simultaneous Equations",
        subtopics: [
            { name: "Solving by Substitution", description: "Using substitution method" },
            { name: "Solving by Elimination", description: "Using elimination method" },
            { name: "Graphical Solutions", description: "Finding solutions through graphing" }
        ]
    },
    {
        name: "Inequalities",
        subtopics: [
            { name: "Solving Linear Inequalities", description: "Working with inequality expressions" },
            { name: "Graphical Representation on a Number Line", description: "Visualizing inequality solutions" }
        ]
    }
]; 