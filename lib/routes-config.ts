export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
  type?: 'tsx' | 'mdx';
};

export const ROUTES: EachRoute[] = [
  // {
  //   title: 'Getting Started',
  //   href: '/getting-started',
  //   noLink: true,
  //   items: [
  //     { title: 'Introduction', href: '/introduction' },
  //     {
  //       title: 'Installation',
  //       href: '/installation',
  //     },
  //     { title: 'Quick Start Guide', href: '/quick-start-guide' },
  //     {
  //       title: 'Project Structure',
  //       href: '/project-structure',
  //     },
  //     {
  //       title: 'Components',
  //       href: '/components',
  //       items: [
  //         { title: 'Stepper', href: '/stepper' },
  //         { title: 'Tabs', href: '/tabs' },
  //         { title: 'Note', href: '/note' },
  //         { title: 'Code Block', href: '/code-block' },
  //         { title: 'Image & Link', href: '/image-link' },
  //         { title: 'File System', href: '/file-system', tag: 'New' },
  //         { title: 'Custom', href: '/custom' },
  //       ],
  //     },
  //     { title: 'Internationalization', href: '/i18n' },
  //     { title: 'Algolia Search', href: '/algolia-search', tag: 'New' },
  //     { title: 'Themes', href: '/themes' },
  //     {
  //       title: 'Customize',
  //       href: '/customize',
  //     },
  //   ],
  // },
  {
    title: 'Basic Algebraic Concepts',
    href: '/basic-algebraic-concepts',
    noLink: true,
    items: [
      {
        title: 'Variables, Constants, and Terms',
        href: '/variables-constants-and-terms',
      },
      {
        title: 'Coefficients and Powers',
        href: '/coefficients-and-powers',
      },
      {
        title: "Lesson quiz",
        href: '/testing-quiz',
        type: "tsx"
      }
    ],
  },
  {
    title: 'Simplification of Algebraic Expressions',
    href: '/simplification-of-algebraic-expressions',
    items: [
      {
        title: 'Adding and Subtracting Like Terms',
        href: '/adding-and-subtracting-like-terms',
      },
      {
        title: 'Multiplication and Division of Terms',
        href: '/multiplication-and-division-of-terms',
      },
      {
        title: 'Use and Removal of Brackets',
        href: '/use-and-removal-of-brackets',
      },
    ],
  },

  {
    title: 'Indices (Laws of Exponents)',
    href: '/Indices',
    items: [
      {
        title: 'Product, Quotient, and Power Rules',
        href: '/Product-Quotient-and-Power-Rules',
      },
      {
        title: 'Zero and Negative Indices',
        href: '/Zero-and-Negative-Indices',
      },
      {
        title: 'Simplifying Using Indices',
        href: '/Simplifying-Using-Indices',
      },
    ],
  },
  {
    title: 'Factorization',
    href: '/factorization',
    items: [
      {
        title: 'Finding Common Factors',
        href: '/Finding-Common-Factors',
      },
      {
        title: 'Difference of Two Squares',
        href: '/Difference-of-Two-Squares',
      },

      {
        title: 'Perfect Square Trinomials',
        href: '/Perfect-Square-Trinomials',
      },
      {
        title: 'Grouping Method',
        href: '/Grouping-Method',
      },
      {
        title: 'Factorizing Quadratic Expressions',
        href: '/Factorizing-Quadratic-Expressions',
      },
    ],
  },
  {
    title: 'Algebraic Fractions',
    href: '/Algebraic-Fractions',
    items: [
      {
        title: 'Operations on Algebraic Fractions',
        href: '/Operations-on-Algebraic-Fractions',
      },
      {
        title: 'Solving Linear Equations',
        href: '/Solving-Linear-Equations',
      },
      {
        title: 'Solving Quadratic Equations by Factorization',
        href: '/Solving-Quadratic-Equations-by-Factorization',
      },
      {
        title: 'Solving Fractional Equations',
        href: '/Solving-Fractional-Equations',
      },
    ],
  },
  {
    title: 'Solving Equations',
    href: '/solving-equations',
    noLink: true,
    items: [
      {
        title: 'Linear Equations in One Variable',
        href: '/linear-equations-in-one-variable',
      },
      {
        title: 'Quadratic Equations by Factorization',
        href: '/quadratic-equations-by-factorization',
      },
      {
        title: ' Fra ctional Equations',
        href: '/fractional-equations',
      },
    ],
  },
  {
    title: 'Formulas and Substitutions',
    href: '/formulas-and-substitutions',
    noLink: true,
    items: [
      {
        title: 'Substituting Values into Expressions',
        href: '/substituting-values-into-expressions',
      },
      {
        title: 'Deriving and Using Formulas',
        href: '/deriving-and-using-formulas',
      },
      {
        title: 'Changing the Subject of a Formula',
        href: '/changing-the-subject-of-a-formula',
      },
    ],
  },

  {
    title: 'Graphing Linear Equations',
    href: '/graphing-linear-equations',
    noLink: true,
    items: [
      {
        title: 'Basics of the Cartesian Plane',
        href: '/basics-of-the-cartesian-plane',
      },
      {
        title: 'Plotting Points and Drawing Graphs',
        href: '/plotting-points-and-drawing-graphs',
      },
      {
        title: 'Gradient (Slope) and Y-intercept',
        href: '/gradient-slope-and-y-intercept',
      },
    ],
  },

  {
    title: 'Simultaneous Equations',
    href: '/simultaneous-equations',
    noLink: true,
    items: [
      {
        title: 'Solving by Substitution',
        href: '/solving-by-substitution',
      },
      {
        title: 'Solving by Elimination',
        href: '/solving-by-elimination',
      },
      {
        title: 'Solving by Graphing',
        href: '/solving-by-graphing',
      },
    ],
  },
  {
    title: 'Inequalities',
    href: '/inequalities',
    noLink: true,
    items: [
      {
        title: 'Solving Linear Inequalities',
        href: '/solving-linear-inequalities',
      },
      {
        title: 'Graphical Representation on a Number Line',
        href: '/graphing-on-a-number-line',
      },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();