import { CourseData, Unit, FormulaSection } from './types';

export const vocabularyDefs: Record<string, string> = {
    "limit": "The value that a function 'approaches' as the input 'approaches' some value. Limits are foundational to calculus, defining continuity, derivatives, and integrals.",
    "one-sided limit": "The value a function approaches as the input gets closer from either the right or the left side of a certain value.",
    "two-sided limit": "The value a function approaches, which exists only if both the left-sided and right-sided limits are equal.",
    "indeterminate form": "An expression like 0/0 or ∞/∞ that does not have a well-defined value. L'Hospital's Rule can often be used to evaluate limits of this form.",
    "continuity": "A property of a function that can be drawn without lifting the pen. Formally, a function is continuous at a point c if f(c) exists, the limit as x approaches c exists, and these two values are equal.",
    "discontinuity": "A point where a function is not continuous. Types include removable (a hole), jump (a break), and infinite (a vertical asymptote).",
    "vertical asymptote": "A vertical line x=c that the graph of a function approaches but never touches. It occurs where the limit of the function is ±∞.",
    "horizontal asymptote": "A horizontal line y=L that the graph of a function approaches as x approaches ±∞.",
    "Squeeze Theorem": "A theorem stating that if a function f(x) is 'squeezed' between two other functions, g(x) and h(x), near a point c, and if g(x) and h(x) have the same limit L at c, then f(x) must also have the limit L at c.",
    "Intermediate Value Theorem (IVT)": "A theorem stating that for any continuous function over a closed interval [a, b], the function must take on every y-value between f(a) and f(b).",
    "derivative": "The instantaneous rate of change of a function, which can be interpreted as the slope of the tangent line to the function's graph at a point.",
    "instantaneous rate of change": "The rate of change of a function at a single, specific point, found by taking the limit of the average rate of change.",
    "average rate of change": "The slope of the secant line between two points on a function's graph, calculated as (f(b)-f(a))/(b-a).",
    "differentiability": "The property of a function having a derivative at a point. A function must be continuous and have no sharp corners or vertical tangents to be differentiable.",
    "tangent line": "A line that touches a curve at a single point and has the same slope as the curve at that point.",
    "normal line": "A line that is perpendicular to the tangent line at the point of tangency.",
    "power rule": "A shortcut for finding the derivative of a function of the form x^n, which is nx^(n-1).",
    "product rule": "A rule for finding the derivative of a product of two functions: (fg)' = f'g + fg'.",
    "quotient rule": "A rule for finding the derivative of a quotient of two functions: (f/g)' = (f'g - fg')/g^2.",
    "chain rule": "A rule for finding the derivative of a composite function f(g(x)), which is f'(g(x)) * g'(x).",
    "implicit differentiation": "A technique used to find the derivative of a function that is not explicitly defined in terms of 'y = ...', by differentiating both sides of the equation with respect to x and solving for dy/dx.",
    "inverse function": "A function that 'reverses' another function. If f(a)=b, then the inverse function f⁻¹(b)=a.",
    "inverse trigonometric function": "Functions like arcsin, arccos, and arctan, which are the inverse functions of the basic trigonometric functions.",
    "higher-order derivatives": "The result of differentiating a function multiple times. The second derivative (f'') describes concavity, the third derivative is the jerk, and so on.",
    "rectilinear motion": "Motion along a straight line. Key concepts include position s(t), velocity v(t)=s'(t), and acceleration a(t)=v'(t)=s''(t).",
    "position": "The location of an object, often given as a function of time s(t).",
    "velocity": "The rate of change of position with respect to time (the derivative of position). It includes speed and direction.",
    "speed": "The magnitude of velocity, |v(t)|.",
    "acceleration": "The rate of change of velocity with respect to time (the derivative of velocity).",
    "related rates": "Problems where the rates of change of two or more related variables are found by differentiating an equation that connects them with respect to time.",
    "local linearity": "The idea that if you zoom in far enough on a differentiable function's graph, it will look like a straight line (the tangent line).",
    "linearization": "Using the tangent line at a point to approximate the function's values nearby.",
    "L'Hospital's Rule": "A rule that uses derivatives to evaluate limits of indeterminate forms like 0/0 or ∞/∞.",
    "extrema": "The maximum or minimum values of a function (plural of extremum).",
    "Mean Value Theorem (MVT)": "A theorem stating that for a differentiable function on a closed interval, there is at least one point where the instantaneous rate of change (slope of tangent) equals the average rate of change (slope of secant).",
    "Extreme Value Theorem (EVT)": "A theorem stating that any continuous function on a closed interval must have an absolute maximum and an absolute minimum on that interval.",
    "critical point": "A point in the domain of a function where the derivative is either zero or undefined. Extrema can only occur at critical points or endpoints.",
    "concavity": "The way the graph of a function is curved. 'Concave up' is shaped like a cup, and 'concave down' is shaped like a frown. It is determined by the sign of the second derivative.",
    "point of inflection": "A point on a curve where the concavity changes (from up to down or vice-versa).",
    "First Derivative Test": "A method to find local extrema by checking the sign of the first derivative around a critical point.",
    "Second Derivative Test": "A method to find local extrema by checking the sign of the second derivative at a critical point.",
    "Candidates Test": "A method to find absolute extrema on a closed interval by testing the function's values at the critical points and the endpoints.",
    "optimization": "The process of finding the maximum or minimum value of a function, often in the context of a real-world problem.",
    "antiderivative": "A function F whose derivative is the given function f. For example, x² is an antiderivative of 2x.",
    "indefinite integral": "The general form of the antiderivative of a function, written as ∫f(x)dx = F(x) + C, where C is the constant of integration.",
    "definite integral": "An integral calculated over a specific interval [a, b], written as ∫ (from a to b) f(x)dx, which represents the accumulated change or the signed area between the function's graph and the x-axis.",
    "Riemann sum": "An approximation of a definite integral using a sum of areas of rectangles. Common types are left, right, and midpoint Riemann sums.",
    "trapezoidal sum": "An approximation of a definite integral using a sum of areas of trapezoids, which is often more accurate than a Riemann sum.",
    "accumulation function": "A function defined as a definite integral, like g(x) = ∫ (from a to x) f(t)dt, which represents the accumulated area under f(t) starting from a.",
    "Fundamental Theorem of Calculus (FTC)": "A theorem that links differentiation and integration. Part 1 states that the derivative of an accumulation function is the original function. Part 2 provides a method for evaluating definite integrals using antiderivatives.",
    "u-substitution": "A technique for finding integrals by reversing the chain rule, where a part of the integrand is replaced with a variable 'u'.",
    "differential equation": "An equation that relates a function with its derivatives.",
    "separable differential equation": "A type of differential equation that can be solved by separating variables (getting all y terms on one side and all x terms on the other) and integrating.",
    "slope field": "A graphical representation of a differential equation, where short line segments at various points show the slope of the solution curve at that point.",
    "average value of a function": "The average height of a function over an interval, calculated as (1/(b-a)) * ∫ (from a to b) f(x)dx.",
    "displacement": "The net change in position of an object, calculated by integrating velocity: ∫v(t)dt.",
    "total distance traveled": "The total path length covered by an object, calculated by integrating speed: ∫|v(t)|dt.",
    "area between curves": "The area of the region enclosed between two functions, found by integrating the 'upper function' minus the 'lower function'.",
    "volume of solids": "The volume of a 3D shape, which can be found by integrating the area of its cross-sections (e.g., disc method, washer method)."
};

const rawCourseData: Omit<CourseData, 'units'> & { units: Omit<Unit, 'color' | 'normalizedWeight'>[] } = {
  units: [
    {
      id: 'u1',
      name: 'Unit 1: Limits and Continuity',
      examWeighting: '10–12%',
      classPeriods: '~22–23',
      keyUnderstanding: "This unit introduces the fundamental concept of limits, which is the cornerstone of calculus. You will learn to evaluate limits graphically, numerically, and analytically, and understand how limits relate to continuity. This foundational knowledge is crucial for understanding differentiation (Unit 2) and integration (Unit 6).",
      bigIdeas: [
        { title: 'Change (CHA)', question: 'Can change occur at an instant?' },
        { title: 'Limits (LIM)', question: 'How does knowing the value of a limit, or that a limit does not exist, help you to make sense of interesting features of functions and their graphs?' },
        { title: 'Analysis of Functions (FUN)', question: 'How do we close loopholes so that a conclusion about a function is always true?' }
      ],
      sciencePractices: "You'll focus on connecting representations (2.B, 2.C), identifying mathematical information from various forms, and justifying conclusions (3.C, 3.D) using definitions and theorems.",
      examTips: "Be prepared to evaluate or estimate limits presented graphically, numerically, analytically, or verbally. Consistently use correct mathematical notation and present setups. Remember that the epsilon-delta definition of a limit is not assessed. Always verify the hypotheses of a theorem before applying it.",
      vocabulary: ['limit', 'one-sided limit', 'two-sided limit', 'indeterminate form', 'continuity', 'discontinuity', 'vertical asymptote', 'horizontal asymptote', 'Squeeze Theorem', 'Intermediate Value Theorem (IVT)'],
      topics: [
        {
          id: 'u1t1',
          name: 'Topic 1.1: Introducing Calculus: Can Change Occur at an Instant?',
          iCanStatements: [
            {
              id: 'u1t1ic1',
              text: 'I Can: Interpret the rate of change at an instant in terms of average rates of change over intervals containing that instant.',
              keyConcepts: [
                { id: 'u1t1ic1kc1', text: "Key Concepts: Calculus uses limits to understand and model dynamic change. Average rate of change is undefined at a point where the change in the independent variable is zero. The limit concept defines instantaneous rate of change." },
                { id: 'u1t1ic1kc2', text: "Formulas: Average Rate of Change" },
                { id: 'u1t1ic1kc3', text: "Suggested Skill: Connecting Representations 2.B" }
              ]
            }
          ]
        },
        {
          id: 'u1t2',
          name: 'Topic 1.2: Defining Limits and Using Limit Notation',
          iCanStatements: [
            {
              id: 'u1t2ic1',
              text: 'I Can: Represent limits analytically using correct notation and interpret limits expressed in analytic notation.',
              keyConcepts: [
                { id: 'u1t2ic1kc1', text: "Key Concepts: The limit of f(x) as x approaches c is L if f(x) can be made arbitrarily close to L by taking x sufficiently close to c (but not equal to c). Limits can be expressed graphically, numerically, and analytically." },
                { id: 'u1t2ic1kc2', text: "Notation: lim (as x→c) f(x) = L" },
                { id: 'u1t2ic1kc3', text: "Suggested Skill: Connecting Representations 2.B" }
              ]
            }
          ]
        },
        {
          id: 'u1t3',
          name: 'Topic 1.3: Estimating Limit Values from Graphs',
          iCanStatements: [
            {
              id: 'u1t3ic1',
              text: 'I Can: Estimate limits of functions from graphs.',
              keyConcepts: [
                { id: 'u1t3ic1kc1', text: "Key Concepts: One-sided limits are part of the limit concept. Graphical information can estimate limits. Limits might not exist if the function is unbounded, oscillating, or if left and right limits are unequal." },
                { id: 'u1t3ic1kc2', text: "Suggested Skill: Connecting Representations 2.B" }
              ]
            }
          ]
        },
        {
          id: 'u1t4',
          name: 'Topic 1.4: Estimating Limit Values from Tables',
          iCanStatements: [
            {
              id: 'u1t4ic1',
              text: 'I Can: Estimate limits of functions from tables.',
              keyConcepts: [
                { id: 'u1t4ic1kc1', text: "Key Concepts: Numerical information can be used to estimate limits." },
                { id: 'u1t4ic1kc2', text: "Suggested Skill: Connecting Representations 2.B" }
              ]
            }
          ]
        },
        {
          id: 'u1t5',
          name: 'Topic 1.5: Determining Limits Using Algebraic Properties of Limits',
          iCanStatements: [
            {
              id: 'u1t5ic1',
              text: 'I Can: Determine the limits of functions using limit theorems.',
              keyConcepts: [
                { id: 'u1t5ic1kc1', text: "Key Concepts: Limits of sums, differences, products, quotients, and composite functions can be found using limit theorems." },
                { id: 'u1t5ic1kc2', text: "Limit Properties: lim [f(x) ± g(x)] = lim f(x) ± lim g(x)" },
                { id: 'u1t5ic1kc3', text: "Limit Properties: lim [k * f(x)] = k * lim f(x)" },
                { id: 'u1t5ic1kc4', text: "Limit Properties: lim [f(x) * g(x)] = lim f(x) * lim g(x)" },
                { id: 'u1t5ic1kc5', text: "Limit Properties: lim [f(x) / g(x)] = lim f(x) / lim g(x), provided lim g(x) ≠ 0" },
                { id: 'u1t5ic1kc6', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u1t6',
          name: 'Topic 1.6: Determining Limits Using Algebraic Manipulation',
          iCanStatements: [
            {
              id: 'u1t6ic1',
              text: 'I Can: Determine the limits of functions using equivalent expressions for the function.',
              keyConcepts: [
                { id: 'u1t6ic1kc1', text: "Key Concepts: Rearranging expressions (factoring, multiplying by conjugates, trigonometric identities) into equivalent forms may be necessary before evaluating limits." },
                { id: 'u1t6ic1kc2', text: "Suggested Skill: Implementing Mathematical Processes 1.C" }
              ]
            }
          ]
        },
        {
          id: 'u1t7',
          name: 'Topic 1.7: Selecting Procedures for Determining Limits',
          iCanStatements: [
            {
              id: 'u1t7ic1',
              text: 'I Can: Select an appropriate procedure for determining limits.',
              keyConcepts: [
                { id: 'u1t7ic1kc1', text: "Key Concepts: Practice applying all methods for determining limits (graphical, numerical, analytical, algebraic manipulation)." },
                { id: 'u1t7ic1kc2', text: "Suggested Skill: Implementing Mathematical Processes 1.C" }
              ]
            }
          ]
        },
        {
          id: 'u1t8',
          name: 'Topic 1.8: Determining Limits Using the Squeeze Theorem',
          iCanStatements: [
            {
              id: 'u1t8ic1',
              text: 'I Can: Determine the limits of functions using the Squeeze Theorem.',
              keyConcepts: [
                { id: 'u1t8ic1kc1', text: "Key Concepts: If h(x) ≤ f(x) ≤ g(x) for all x in an open interval containing c, except possibly at c itself, and if lim (as x→c) h(x) = L and lim (as x→c) g(x) = L, then lim (as x→c) f(x) = L." },
                { id: 'u1t8ic1kc2', text: "Suggested Skill: Justification 3.C" }
              ]
            }
          ]
        },
        {
          id: 'u1t9',
          name: 'Topic 1.9: Connecting Multiple Representations of Limits',
          iCanStatements: [
            {
              id: 'u1t9ic1',
              text: 'I Can: Connect multiple representations of limits.',
              keyConcepts: [
                { id: 'u1t9ic1kc1', text: "Key Concepts: Translate mathematical information about limits from graphical, numerical, analytical, and verbal representations." },
                { id: 'u1t9ic1kc2', text: "Suggested Skill: Connecting Representations 2.C" }
              ]
            }
          ]
        },
        {
          id: 'u1t10',
          name: 'Topic 1.10: Exploring Types of Discontinuities',
          iCanStatements: [
            {
              id: 'u1t10ic1',
              text: 'I Can: Justify conclusions about continuity at a point using the definition.',
              keyConcepts: [
                { id: 'u1t10ic1kc1', text: "Key Concepts: Types of discontinuities include removable, jump, and discontinuities due to vertical asymptotes." },
                { id: 'u1t10ic1kc2', text: "Suggested Skill: Justification 3.B" }
              ]
            }
          ]
        },
        {
          id: 'u1t11',
          name: 'Topic 1.11: Defining Continuity at a Point',
          iCanStatements: [
            {
              id: 'u1t11ic1',
              text: 'I Can: Justify conclusions about continuity at a point using the definition.',
              keyConcepts: [
                { id: 'u1t11ic1kc1', text: "Key Concepts: A function f is continuous at x=c if and only if: 1. f(c) exists. 2. lim (as x→c) f(x) exists. 3. lim (as x→c) f(x) = f(c)." },
                { id: 'u1t11ic1kc2', text: "Suggested Skill: Justification 3.C" }
              ]
            }
          ]
        },
        {
          id: 'u1t12',
          name: 'Topic 1.12: Confirming Continuity over an Interval',
          iCanStatements: [
            {
              id: 'u1t12ic1',
              text: 'I Can: Determine intervals over which a function is continuous.',
              keyConcepts: [
                { id: 'u1t12ic1kc1', text: "Key Concepts: A function is continuous on an interval if it is continuous at each point in the interval. Polynomial, rational, power, exponential, logarithmic, and trigonometric functions are continuous on all points in their domains." },
                { id: 'u1t12ic1kc2', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u1t13',
          name: 'Topic 1.13: Removing Discontinuities',
          iCanStatements: [
            {
              id: 'u1t13ic1',
              text: 'I Can: Determine values of x or solve for parameters that make discontinuous functions continuous, if possible.',
              keyConcepts: [
                { id: 'u1t13ic1kc1', text: "Key Concepts: If a limit exists at a removable discontinuity, it can be removed by redefining the function's value at that point to equal the limit. For piecewise functions, values at boundaries must match for continuity." },
                { id: 'u1t13ic1kc2', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u1t14',
          name: 'Topic 1.14: Connecting Infinite Limits and Vertical Asymptotes',
          iCanStatements: [
            {
              id: 'u1t14ic1',
              text: 'I Can: Interpret the behavior of functions using limits involving infinity.',
              keyConcepts: [
                { id: 'u1t14ic1kc1', text: "Key Concepts: Infinite limits describe unbounded behavior. If lim (as x→c) f(x) = ±∞, then x=c is a vertical asymptote." },
                { id: 'u1t14ic1kc2', text: "Suggested Skill: Justification 3.D" }
              ]
            }
          ]
        },
        {
          id: 'u1t15',
          name: 'Topic 1.15: Connecting Limits at Infinity and Horizontal Asymptotes',
          iCanStatements: [
            {
              id: 'u1t15ic1',
              text: 'I Can: Interpret the behavior of functions using limits involving infinity.',
              keyConcepts: [
                { id: 'u1t15ic1kc1', text: "Key Concepts: Limits at infinity describe end behavior. If lim (as x→±∞) f(x) = L, then y=L is a horizontal asymptote." },
                { id: 'u1t15ic1kc2', text: "Suggested Skill: Connecting Representations 2.D" }
              ]
            }
          ]
        },
        {
          id: 'u1t16',
          name: 'Topic 1.16: Working with the Intermediate Value Theorem (IVT)',
          iCanStatements: [
            {
              id: 'u1t16ic1',
              text: 'I Can: Explain the behavior of a function on an interval using the Intermediate Value Theorem.',
              keyConcepts: [
                { id: 'u1t16ic1kc1', text: "Key Concepts: If f is a continuous function on the closed interval [a,b] and d is any number between f(a) and f(b), then there is at least one number c in (a,b) such that f(c)=d." },
                { id: 'u1t16ic1kc2', text: "Suggested Skill: Justification 3.E" }
              ]
            }
          ]
        }
      ],
      formulas: [
        {
            title: 'Limits Definitions',
            content: `
                <p><strong>Precise Definition:</strong> We say <code>lim<sub>x→a</sub> f(x) = L</code> if for every ε > 0 there is a δ > 0 such that whenever 0 < |x - a| < δ then |f(x) - L| < ε.</p>
                <p><strong>"Working" Definition:</strong> We say <code>lim<sub>x→a</sub> f(x) = L</code> if we can make f(x) as close to L as we want by taking x sufficiently close to a (on either side of a) without letting x = a.</p>
                <p><strong>Right Hand Limit:</strong> <code>lim<sub>x→a+</sub> f(x) = L</code>. This has the same definition as the limit except it requires x > a.</p>
                <p><strong>Left Hand Limit:</strong> <code>lim<sub>x→a-</sub> f(x) = L</code>. This has the same definition as the limit except it requires x < a.</p>
                <p><strong>Limit at Infinity:</strong> We say <code>lim<sub>x→∞</sub> f(x) = L</code> if we can make f(x) as close to L as we want by taking x large enough and positive. There is a similar definition for <code>lim<sub>x→-∞</sub> f(x) = L</code> except we require x large and negative.</p>
                <p><strong>Infinite Limit:</strong> We say <code>lim<sub>x→a</sub> f(x) = ∞</code> if we can make f(x) arbitrarily large (and positive) by taking x sufficiently close to a. There is a similar definition for <code>lim<sub>x→a</sub> f(x) = -∞</code>.</p>
            `
        },
        {
            title: 'Relationship between the limit and one-sided limits',
            content: `
                <p><code>lim<sub>x→a</sub> f(x) = L</code> ⇔ <code>lim<sub>x→a+</sub> f(x) = lim<sub>x→a-</sub> f(x) = L</code></p>
                <p>If <code>lim<sub>x→a+</sub> f(x) ≠ lim<sub>x→a-</sub> f(x)</code> then <code>lim<sub>x→a</sub> f(x)</code> Does Not Exist.</p>
            `
        },
        {
            title: 'Properties of Limits',
            content: `
                <p>Assume <code>lim<sub>x→a</sub> f(x)</code> and <code>lim<sub>x→a</sub> g(x)</code> both exist and c is any number then,</p>
                <ol class="list-decimal list-inside space-y-2">
                    <li><code>lim<sub>x→a</sub> [c * f(x)] = c * lim<sub>x→a</sub> f(x)</code></li>
                    <li><code>lim<sub>x→a</sub> [f(x) ± g(x)] = lim<sub>x→a</sub> f(x) ± lim<sub>x→a</sub> g(x)</code></li>
                    <li><code>lim<sub>x→a</sub> [f(x) * g(x)] = lim<sub>x→a</sub> f(x) * lim<sub>x→a</sub> g(x)</code></li>
                    <li><code>lim<sub>x→a</sub> [f(x) / g(x)] = (lim<sub>x→a</sub> f(x)) / (lim<sub>x→a</sub> g(x))</code>, provided <code>lim<sub>x→a</sub> g(x) ≠ 0</code></li>
                    <li><code>lim<sub>x→a</sub> [f(x)]<sup>n</sup> = [lim<sub>x→a</sub> f(x)]<sup>n</sup></code></li>
                    <li><code>lim<sub>x→a</sub> <sup>n</sup>√<span style="text-decoration: overline">f(x)</span> = <sup>n</sup>√<span style="text-decoration: overline">lim<sub>x→a</sub> f(x)</span></code></li>
                </ol>
            `
        },
        {
            title: 'Basic Limit Evaluations at ±∞',
            content: `
                <ol class="list-decimal list-inside space-y-2">
                    <li><code>lim<sub>x→∞</sub> e<sup>x</sup> = ∞</code> and <code>lim<sub>x→-∞</sub> e<sup>x</sup> = 0</code></li>
                    <li><code>lim<sub>x→∞</sub> ln(x) = ∞</code> and <code>lim<sub>x→0+</sub> ln(x) = -∞</code></li>
                    <li>If r > 0 then <code>lim<sub>x→∞</sub> b/x<sup>r</sup> = 0</code>.</li>
                    <li>If r > 0 and x<sup>r</sup> is real for negative x, then <code>lim<sub>x→-∞</sub> b/x<sup>r</sup> = 0</code>.</li>
                    <li>For n even: <code>lim<sub>x→±∞</sub> x<sup>n</sup> = ∞</code></li>
                    <li>For n odd: <code>lim<sub>x→∞</sub> x<sup>n</sup> = ∞</code> and <code>lim<sub>x→-∞</sub> x<sup>n</sup> = -∞</code></li>
                    <li>For polynomials, the limit at ±∞ is determined by the term with the highest power.</li>
                </ol>
            `
        },
        {
            title: 'Evaluation Techniques for Limits',
            content: `
                <ul class="list-disc list-inside space-y-2">
                    <li><strong>Continuous Functions:</strong> If f(x) is continuous at a, then <code>lim<sub>x→a</sub> f(x) = f(a)</code>.</li>
                    <li><strong>Factor and Cancel:</strong> Useful for rational functions that result in 0/0.</li>
                    <li><strong>Rationalize Numerator/Denominator:</strong> Useful for limits with radicals that result in 0/0.</li>
                    <li><strong>Polynomials at Infinity:</strong> Factor out the largest power of x from the denominator to determine the limit.</li>
                </ul>
            `
        },
        {
            title: 'Continuity',
            content: `
                <p>A function f(x) is continuous at x=a if:</p>
                <ol class="list-decimal list-inside">
                    <li>f(a) is defined.</li>
                    <li><code>lim<sub>x→a</sub> f(x)</code> exists.</li>
                    <li><code>lim<sub>x→a</sub> f(x) = f(a)</code>.</li>
                </ol>
                <br>
                <p><strong>Intermediate Value Theorem (IVT):</strong> Suppose that f(x) is continuous on [a, b] and let M be any number between f(a) and f(b). Then there exists a number c such that a < c < b and f(c) = M.</p>
            `
        }
      ]
    },
    {
      id: 'u2',
      name: 'Unit 2: Differentiation: Definition and Fundamental Properties',
      examWeighting: '10–12%',
      classPeriods: '~13–14',
      keyUnderstanding: "This unit introduces the concept of the derivative as an instantaneous rate of change. You will learn the definition of the derivative and fundamental differentiation rules. Mastering these rules is crucial for all subsequent calculus topics.",
      bigIdeas: [
        { title: 'Change (CHA)', question: "How can a state determine the rate of change in high school graduates at a particular level of public investment in education (in graduates per dollar) based on a model for the number of graduates as a function of the state's education budget?" },
        { title: 'Limits (LIM)', question: "Why do mathematical properties and rules for simplifying and evaluating limits apply to differentiation?" },
        { title: 'Analysis of Functions (FUN)', question: "If you knew that the rate of change in high school graduates at a particular level of public investment in education (in graduates per dollar) was a positive number, what might that tell you about the number of graduates at that level of investment?" }
      ],
      sciencePractices: "You'll apply mathematical procedures (1.E) with precision, connect representations (2.B), and use appropriate notation (4.C).",
      examTips: "Practice presenting clear mathematical structures for derivatives. When estimating derivatives from tables, show the difference quotient. Be precise with notation like f'(x), y', and dy/dx.",
      vocabulary: ['derivative', 'instantaneous rate of change', 'average rate of change', 'differentiability', 'tangent line', 'normal line', 'power rule', 'product rule', 'quotient rule', 'chain rule', 'higher-order derivatives'],
      topics: [
        {
          id: 'u2t1',
          name: 'Topic 2.1: Defining Average and Instantaneous Rates of Change at a Point',
          iCanStatements: [
            {
              id: 'u2t1ic1',
              text: 'I Can: Determine average rates of change using difference quotients and represent the derivative of a function as the limit of a difference quotient.',
              keyConcepts: [
                { id: 'u2t1ic1kc1', text: "Key Concepts: Average rate of change is expressed by difference quotients. Instantaneous rate of change is the limit of these quotients." },
                { id: 'u2t1ic1kc2', text: "Formulas: Average Rate of Change: (f(a+h)-f(a))/h or (f(x)-f(a))/(x-a)" },
                { id: 'u2t1ic1kc3', text: "Formulas: Definition of the Derivative: f'(a) = lim (h→0) (f(a+h)-f(a))/h or f'(a) = lim (x→a) (f(x)-f(a))/(x-a)" },
                { id: 'u2t1ic1kc4', text: "Suggested Skill: Connecting Representations 2.B" }
              ]
            }
          ]
        },
        {
          id: 'u2t2',
          name: 'Topic 2.2: Defining the Derivative of a Function and Using Derivative Notation',
          iCanStatements: [
            {
              id: 'u2t2ic1',
              text: 'I Can: Represent the derivative of a function as the limit of a difference quotient and determine the equation of a line tangent to a curve at a given point.',
              keyConcepts: [
                { id: 'u2t2ic1kc1', text: "Key Concepts: The derivative f'(x)=lim (h→0) (f(x+h)-f(x))/h. Notations include dy/dx, f'(x), y'. The derivative at a point is the slope of the tangent line." },
                { id: 'u2t2ic1kc2', text: "Formulas: Equation of a tangent line at (x₀,y₀): y-y₀=f'(x₀)(x-x₀)" },
                { id: 'u2t2ic1kc3', text: "Suggested Skills: Implementing Mathematical Processes 1.D, Communication and Notation 4.C" }
              ]
            }
          ]
        },
        {
          id: 'u2t3',
          name: 'Topic 2.3: Estimating Derivatives of a Function at a Point',
          iCanStatements: [
            {
              id: 'u2t3ic1',
              text: 'I Can: Estimate derivatives.',
              keyConcepts: [
                { id: 'u2t3ic1kc1', text: "Key Concepts: Derivatives can be estimated from tables or graphs. Technology can calculate or estimate derivatives." },
                { id: 'u2t3ic1kc2', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u2t4',
          name: 'Topic 2.4: Connecting Differentiability and Continuity',
          iCanStatements: [
            {
              id: 'u2t4ic1',
              text: 'I Can: Explain the relationship between differentiability and continuity.',
              keyConcepts: [
                { id: 'u2t4ic1kc1', text: "Key Concepts: If a function is differentiable at a point, it is continuous at that point. A continuous function may not be differentiable (e.g., sharp turns, vertical tangents)." },
                { id: 'u2t4ic1kc2', text: "Suggested Skill: Justification 3.E" }
              ]
            }
          ]
        },
        {
          id: 'u2t5',
          name: 'Topic 2.5: Applying the Power Rule',
          iCanStatements: [
            {
              id: 'u2t5ic1',
              text: 'I Can: Calculate derivatives of familiar functions.',
              keyConcepts: [
                { id: 'u2t5ic1kc1', text: "Key Concepts: Direct application of rules to calculate derivatives for functions of the form f(x)=xʳ." },
                { id: 'u2t5ic1kc2', text: "Formulas: Power Rule: If f(x)=xⁿ, then f'(x)=nxⁿ⁻¹." },
                { id: 'u2t5ic1kc3', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u2t6',
          name: 'Topic 2.6: Derivative Rules: Constant, Sum, Difference, and Constant Multiple',
          iCanStatements: [
            {
              id: 'u2t6ic1',
              text: 'I Can: Calculate derivatives of familiar functions.',
              keyConcepts: [
                { id: 'u2t6ic1kc1', text: "Key Concepts: Sums, differences, and constant multiples of functions can be differentiated using rules. The power rule combined with these properties differentiates polynomial functions." },
                { id: 'u2t6ic1kc2', text: "Formulas: Constant Rule: If f(x)=c, then f'(x)=0." },
                { id: 'u2t6ic1kc3', text: "Formulas: Constant Multiple Rule: If f(x)=c·g(x), then f'(x)=c·g'(x)." },
                { id: 'u2t6ic1kc4', text: "Formulas: Sum/Difference Rule: If f(x)=g(x)±h(x), then f'(x)=g'(x)±h'(x)." },
                { id: 'u2t6ic1kc5', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u2t7',
          name: 'Topic 2.7: Derivatives of cos(x), sin(x), eˣ, and ln(x)',
          iCanStatements: [
            {
              id: 'u2t7ic1',
              text: 'I Can: Calculate derivatives of familiar functions and interpret a limit as a definition of a derivative.',
              keyConcepts: [
                { id: 'u2t7ic1kc1', text: "Key Concepts: Specific rules for trigonometric, exponential, and logarithmic functions. Recognizing a limit as a derivative definition can simplify limit evaluation." },
                { id: 'u2t7ic1kc2', text: "Formulas: d/dx(sin(x)) = cos(x)" },
                { id: 'u2t7ic1kc3', text: "Formulas: d/dx(cos(x)) = -sin(x)" },
                { id: 'u2t7ic1kc4', text: "Formulas: d/dx(eˣ) = eˣ" },
                { id: 'u2t7ic1kc5', text: "Formulas: d/dx(ln(x)) = 1/x" },
                { id: 'u2t7ic1kc6', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u2t8',
          name: 'Topic 2.8: The Product Rule',
          iCanStatements: [
            {
              id: 'u2t8ic1',
              text: 'I Can: Calculate derivatives of products of differentiable functions.',
              keyConcepts: [
                { id: 'u2t8ic1kc1', text: "Key Concepts: Derivatives of products use the product rule." },
                { id: 'u2t8ic1kc2', text: "Formulas: Product Rule: If f(x)=u(x)v(x), then f'(x)=u'(x)v(x)+u(x)v'(x)." },
                { id: 'u2t8ic1kc3', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u2t9',
          name: 'Topic 2.9: The Quotient Rule',
          iCanStatements: [
            {
              id: 'u2t9ic1',
              text: 'I Can: Calculate derivatives of quotients of differentiable functions.',
              keyConcepts: [
                { id: 'u2t9ic1kc1', text: "Key Concepts: Derivatives of quotients use the quotient rule." },
                { id: 'u2t9ic1kc2', text: "Formulas: Quotient Rule: If f(x)=u(x)/v(x), then f'(x)=[u'(x)v(x)-u(x)v'(x)]/[v(x)]²." },
                { id: 'u2t9ic1kc3', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u2t10',
          name: 'Topic 2.10: Finding the Derivatives of Tangent, Cotangent, Secant, and/or Cosecant Functions',
          iCanStatements: [
            {
              id: 'u2t10ic1',
              text: 'I Can: Calculate derivatives of products and quotients of differentiable functions.',
              keyConcepts: [
                { id: 'u2t10ic1kc1', text: "Key Concepts: Rearranging these functions using identities allows differentiation with existing rules." },
                { id: 'u2t10ic1kc2', text: "Formulas: d/dx(tan(x)) = sec²(x)" },
                { id: 'u2t10ic1kc3', text: "Formulas: d/dx(cot(x)) = -csc²(x)" },
                { id: 'u2t10ic1kc4', text: "Formulas: d/dx(sec(x)) = sec(x)tan(x)" },
                { id: 'u2t10ic1kc5', text: "Formulas: d/dx(csc(x)) = -csc(x)cot(x)" },
                { id: 'u2t10ic1kc6', text: "Suggested Skill: Implementing Mathematical Processes 1.D" }
              ]
            }
          ]
        }
      ],
      formulas: [
        {
            title: 'Definition and Notation of the Derivative',
            content: `
                <p>If y = f(x) then the derivative is defined to be: <code>f'(x) = lim<sub>h→0</sub> (f(x+h) - f(x)) / h</code></p>
                <p><strong>Notations for the derivative:</strong></p>
                <p><code>f'(x) = y' = dy/dx = df/dx = d/dx(f(x)) = Df(x)</code></p>
                <p><strong>Derivative evaluated at x = a:</strong></p>
                <p><code>f'(a) = y'|<sub>x=a</sub> = dy/dx|<sub>x=a</sub> = df/dx|<sub>x=a</sub></code></p>
            `
        },
        {
            title: 'Interpretation of the Derivative',
            content: `
                <ol class="list-decimal list-inside space-y-2">
                    <li><code>m = f'(a)</code> is the slope of the tangent line to y = f(x) at x = a. The equation of the tangent line is <code>y = f(a) + f'(a)(x-a)</code>.</li>
                    <li><code>f'(a)</code> is the instantaneous rate of change of f(x) at x = a.</li>
                    <li>If f(t) is the position of an object at time t, then f'(t) is the velocity of the object at t.</li>
                </ol>
            `
        },
        {
            title: 'Basic Derivative Properties and Formulas',
            content: `
                <p>If f(x) and g(x) are differentiable functions, and c and n are any real numbers:</p>
                <ul class="list-disc list-inside space-y-2">
                    <li><strong>Constant Rule:</strong> <code>d/dx(c) = 0</code></li>
                    <li><strong>Constant Multiple Rule:</strong> <code>(c * f(x))' = c * f'(x)</code></li>
                    <li><strong>Sum/Difference Rule:</strong> <code>(f(x) ± g(x))' = f'(x) ± g'(x)</code></li>
                    <li><strong>Power Rule:</strong> <code>d/dx(x<sup>n</sup>) = n * x<sup>n-1</sup></code></li>
                    <li><strong>Product Rule:</strong> <code>(f(x)g(x))' = f'(x)g(x) + f(x)g'(x)</code></li>
                    <li><strong>Quotient Rule:</strong> <code>(f(x)/g(x))' = (f'(x)g(x) - f(x)g'(x)) / [g(x)]<sup>2</sup></code></li>
                </ul>
            `
        },
        {
            title: 'Common Derivatives',
            content: `
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>Basic Functions</strong></p>
                    <ul class="list-disc list-inside">
                      <li><code>d/dx(c) = 0</code></li>
                      <li><code>d/dx(x) = 1</code></li>
                      <li><code>d/dx(x<sup>n</sup>) = nx<sup>n-1</sup></code></li>
                    </ul>
                  </div>
                  <div>
                    <p><strong>Trigonometric Functions</strong></p>
                    <ul class="list-disc list-inside">
                      <li><code>d/dx(sin(x)) = cos(x)</code></li>
                      <li><code>d/dx(cos(x)) = -sin(x)</code></li>
                      <li><code>d/dx(tan(x)) = sec<sup>2</sup>(x)</code></li>
                      <li><code>d/dx(sec(x)) = sec(x)tan(x)</code></li>
                      <li><code>d/dx(csc(x)) = -csc(x)cot(x)</code></li>
                      <li><code>d/dx(cot(x)) = -csc<sup>2</sup>(x)</code></li>
                    </ul>
                  </div>
                  <div>
                    <p><strong>Exponential & Logarithmic</strong></p>
                    <ul class="list-disc list-inside">
                      <li><code>d/dx(e<sup>x</sup>) = e<sup>x</sup></code></li>
                      <li><code>d/dx(a<sup>x</sup>) = a<sup>x</sup>ln(a)</code></li>
                      <li><code>d/dx(ln(x)) = 1/x</code>, x > 0</li>
                      <li><code>d/dx(log<sub>a</sub>(x)) = 1/(x ln(a))</code>, x > 0</li>
                    </ul>
                  </div>
                </div>
            `
        }
      ]
    },
    {
      id: 'u3',
      name: 'Unit 3: Differentiation: Composite, Implicit, and Inverse Functions',
      examWeighting: '9–13%',
      classPeriods: '~10–11',
      keyUnderstanding: "This unit expands differentiation techniques to include composite functions (Chain Rule), implicitly defined functions, and inverse functions. Mastery of the Chain Rule is essential for success in all future units.",
      bigIdeas: [
        { title: 'Analysis of Functions (FUN)', question: "If pressure experienced by a diver is a function of depth and depth is a function of time, how might we find the rate of change in pressure with respect to time?" }
      ],
      sciencePractices: "You'll identify appropriate rules (1.C), apply procedures (1.E), and confirm solutions (3.G).",
      examTips: "The Chain Rule is critical. Recognize when it applies, especially in functions like sin(2x) or e^(x²). Be careful with implicit differentiation; remember that y depends on x. Practice differentiating mixed functions (products, quotients, compositions, inverses).",
      vocabulary: ['chain rule', 'implicit differentiation', 'inverse function', 'inverse trigonometric function', 'higher-order derivatives'],
      topics: [
        {
          id: 'u3t1',
          name: 'Topic 3.1: The Chain Rule',
          iCanStatements: [
            {
              id: 'u3t1ic1',
              text: 'I Can: Calculate derivatives of compositions of differentiable functions.',
              keyConcepts: [
                { id: 'u3t1ic1kc1', text: "Key Concepts: The Chain Rule provides a way to differentiate composite functions." },
                { id: 'u3t1ic1kc2', text: "Formulas: Chain Rule: If y=f(u) and u=g(x), then dy/dx = (dy/du) * (du/dx). Or, d/dx[f(g(x))] = f'(g(x)) * g'(x)." },
                { id: 'u3t1ic1kc3', text: "Suggested Skill: Implementing Mathematical Processes 1.C" }
              ]
            }
          ]
        },
        {
          id: 'u3t2',
          name: 'Topic 3.2: Implicit Differentiation',
          iCanStatements: [
            {
              id: 'u3t2ic1',
              text: 'I Can: Calculate derivatives of implicitly defined functions.',
              keyConcepts: [
                { id: 'u3t2ic1kc1', text: "Key Concepts: The Chain Rule is the basis for implicit differentiation. Differentiate both sides of the equation with respect to x, remembering to apply the Chain Rule to terms involving y." },
                { id: 'u3t2ic1kc2', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u3t3',
          name: 'Topic 3.3: Differentiating Inverse Functions',
          iCanStatements: [
            {
              id: 'u3t3ic1',
              text: 'I Can: Calculate derivatives of inverse functions.',
              keyConcepts: [
                { id: 'u3t3ic1kc1', text: "Key Concepts: The Chain Rule and the definition of an inverse function can be used to find its derivative." },
                { id: 'u3t3ic1kc2', text: "Formulas: Derivative of an Inverse Function: If y=f⁻¹(x), then (f⁻¹)'(x) = 1 / f'(f⁻¹(x))." },
                { id: 'u3t3ic1kc3', text: "Suggested Skill: Justification 3.G" }
              ]
            }
          ]
        },
        {
          id: 'u3t4',
          name: 'Topic 3.4: Differentiating Inverse Trigonometric Functions',
          iCanStatements: [
            {
              id: 'u3t4ic1',
              text: 'I Can: Calculate derivatives of inverse trigonometric functions.',
              keyConcepts: [
                { id: 'u3t4ic1kc1', text: "Key Concepts: The Chain Rule applies with the definition or formulas for inverse trigonometric derivatives." },
                { id: 'u3t4ic1kc2', text: "Formulas: d/dx(arcsin(u)) = u' / √(1-u²)" },
                { id: 'u3t4ic1kc3', text: "Formulas: d/dx(arccos(u)) = -u' / √(1-u²)" },
                { id: 'u3t4ic1kc4', text: "Formulas: d/dx(arctan(u)) = u' / (1+u²)" },
                { id: 'u3t4ic1kc5', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u3t5',
          name: 'Topic 3.5: Selecting Procedures for Calculating Derivatives',
          iCanStatements: [
            {
              id: 'u3t5ic1',
              text: 'I Can: Select an appropriate procedure for calculating derivatives.',
              keyConcepts: [
                { id: 'u3t5ic1kc1', text: "Key Concepts: Practice applying all learning objectives related to calculating derivatives, choosing the correct rule based on the function's form." },
                { id: 'u3t5ic1kc2', text: "Suggested Skill: Implementing Mathematical Processes 1.C" }
              ]
            }
          ]
        },
        {
          id: 'u3t6',
          name: 'Topic 3.6: Calculating Higher-Order Derivatives',
          iCanStatements: [
            {
              id: 'u3t6ic1',
              text: 'I Can: Determine higher-order derivatives of a function.',
              keyConcepts: [
                { id: 'u3t6ic1kc1', text: "Key Concepts: Differentiating f' produces f'', and repeating this process yields higher-order derivatives." },
                { id: 'u3t6ic1kc2', text: "Notation: f''(x), y'', d²y/dx² for second derivative; f⁽ⁿ⁾(x), dⁿy/dxⁿ for n-th derivative." },
                { id: 'u3t6ic1kc3', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        }
      ],
      formulas: [
        {
            title: 'The Chain Rule',
            content: `
                <p>The Chain Rule is used to differentiate composite functions.</p>
                <p>Formula: <code>d/dx (f(g(x))) = f'(g(x)) * g'(x)</code></p>
                <p><strong>Chain Rule Variants for Common Functions:</strong></p>
                <ul class="list-disc list-inside space-y-2">
                    <li><code>d/dx ([f(x)]<sup>n</sup>) = n[f(x)]<sup>n-1</sup> * f'(x)</code></li>
                    <li><code>d/dx (e<sup>f(x)</sup>) = f'(x) * e<sup>f(x)</sup></code></li>
                    <li><code>d/dx (ln[f(x)]) = f'(x) / f(x)</code></li>
                    <li><code>d/dx (sin[f(x)]) = f'(x) * cos[f(x)]</code></li>
                    <li><code>d/dx (cos[f(x)]) = -f'(x) * sin[f(x)]</code></li>
                    <li><code>d/dx (tan[f(x)]) = f'(x) * sec<sup>2</sup>[f(x)]</code></li>
                    <li><code>d/dx (tan<sup>-1</sup>[f(x)]) = f'(x) / (1 + [f(x)]<sup>2</sup>)</code></li>
                </ul>
            `
        },
        {
            title: 'Implicit Differentiation',
            content: `
                <p>Used to find dy/dx for relations that are not functions (or not easily solved for y).</p>
                <p><strong>Procedure:</strong></p>
                <ol class="list-decimal list-inside space-y-2">
                    <li>Differentiate both sides of the equation with respect to x.</li>
                    <li>When differentiating a term with y, apply the Chain Rule by multiplying by dy/dx.</li>
                    <li>Solve the resulting equation for dy/dx.</li>
                </ol>
                <p>Example: Find y' for <code>e<sup>2x-9y</sup> + x<sup>3</sup>y<sup>2</sup> = sin(y) + 11x</code></p>
                <p><code>e<sup>2x-9y</sup>(2 - 9y') + 3x<sup>2</sup>y<sup>2</sup> + 2x<sup>3</sup>yy' = cos(y)y' + 11</code></p>
                <p>Then, isolate y' algebraically.</p>
            `
        },
        {
            title: 'Derivatives of Inverse Functions',
            content: `
                <p><strong>Inverse Trigonometric Functions:</strong></p>
                <ul class="list-disc list-inside space-y-2">
                    <li><code>d/dx(sin<sup>-1</sup>(x)) = 1 / √(1-x<sup>2</sup>)</code></li>
                    <li><code>d/dx(cos<sup>-1</sup>(x)) = -1 / √(1-x<sup>2</sup>)</code></li>
                    <li><code>d/dx(tan<sup>-1</sup>(x)) = 1 / (1+x<sup>2</sup>)</code></li>
                </ul>
            `
        },
        {
            title: 'Higher Order Derivatives',
            content: `
                <p>The <strong>2nd Derivative</strong> is the derivative of the derivative.</p>
                <p>Notation: <code>f''(x) = d/dx(f'(x)) = d<sup>2</sup>y/dx<sup>2</sup></code></p>
                <p>The <strong>n<sup>th</sup> Derivative</strong> is found by differentiating n times.</p>
                <p>Notation: <code>f<sup>(n)</sup>(x) = d<sup>n</sup>y/dx<sup>n</sup></code></p>
            `
        }
      ]
    },
    {
      id: 'u4',
      name: 'Unit 4: Contextual Applications of Differentiation',
      examWeighting: '10–15%',
      classPeriods: '~10–11',
      keyUnderstanding: "This unit applies differentiation to real-world scenarios, including motion, related rates, and approximations. You will learn to interpret the meaning of derivatives in context and solve problems involving rates of change.",
      bigIdeas: [
        { title: 'Change (CHA)', question: "How are problems about position, velocity, and acceleration of a particle in motion over time structurally similar to problems about the volume of a rising balloon over an interval of heights, the population of London over the 14th century, or the metabolism of a dose of medicine over time?" },
        { title: 'Limits (LIM)', question: "Since certain indeterminate forms seem to actually approach a limit, how can we determine that limit, provided it exists?" }
      ],
      sciencePractices: "You'll identify procedures (1.D), explain approximations (1.F), identify common structures (2.A), and explain solutions in context (3.F).",
      examTips: "Pay close attention to language like 'rate of change.' When using L'Hospital's Rule, explicitly verify that the limit is an indeterminate form (0/0 or ∞/∞) before applying the rule. Remember that L'Hospital's Rule applies to the ratio of derivatives, not the derivative of the ratio.",
      vocabulary: ['rectilinear motion', 'position', 'velocity', 'speed', 'acceleration', 'related rates', 'local linearity', 'linearization', "L'Hospital's Rule", 'indeterminate form'],
      topics: [
        {
          id: 'u4t1',
          name: 'Topic 4.1: Interpreting the Meaning of the Derivative in Context',
          iCanStatements: [
            {
              id: 'u4t1ic1',
              text: 'I Can: Interpret the meaning of a derivative in context.',
              keyConcepts: [
                { id: 'u4t1ic1kc1', text: "Key Concepts: The derivative is the instantaneous rate of change. It expresses information about rates of change in applied contexts. The unit for f'(x) is the unit for f divided by the unit for x." },
                { id: 'u4t1ic1kc2', text: "Suggested Skill: Implementing Mathematical Processes 1.D" }
              ]
            }
          ]
        },
        {
          id: 'u4t2',
          name: 'Topic 4.2: Straight-Line Motion: Connecting Position, Velocity, and Acceleration',
          iCanStatements: [
            {
              id: 'u4t2ic1',
              text: 'I Can: Calculate rates of change in applied contexts.',
              keyConcepts: [
                { id: 'u4t2ic1kc1', text: "Key Concepts: Derivatives solve rectilinear motion problems." },
                { id: 'u4t2ic1kc2', text: "Formulas: Position: s(t)" },
                { id: 'u4t2ic1kc3', text: "Formulas: Velocity: v(t) = s'(t)" },
                { id: 'u4t2ic1kc4', text: "Formulas: Acceleration: a(t) = v'(t) = s''(t)" },
                { id: 'u4t2ic1kc5', text: "Formulas: Speed: |v(t)|" },
                { id: 'u4t2ic1kc6', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u4t3',
          name: 'Topic 4.3: Rates of Change in Applied Contexts Other Than Motion',
          iCanStatements: [
            {
              id: 'u4t3ic1',
              text: 'I Can: Interpret rates of change in applied contexts.',
              keyConcepts: [
                { id: 'u4t3ic1kc1', text: "Key Concepts: The derivative applies to various rates of change problems beyond motion." },
                { id: 'u4t3ic1kc2', text: "Suggested Skill: Connecting Representations 2.A" }
              ]
            }
          ]
        },
        {
          id: 'u4t4',
          name: 'Topic 4.4: Introduction to Related Rates',
          iCanStatements: [
            {
              id: 'u4t4ic1',
              text: 'I Can: Calculate related rates in applied contexts.',
              keyConcepts: [
                { id: 'u4t4ic1kc1', text: "Key Concepts: The Chain Rule is fundamental for differentiating variables with respect to a common independent variable (usually time). Other differentiation rules may also be needed." },
                { id: 'u4t4ic1kc2', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u4t5',
          name: 'Topic 4.5: Solving Related Rates Problems',
          iCanStatements: [
            {
              id: 'u4t5ic1',
              text: 'I Can: Interpret related rates in applied contexts.',
              keyConcepts: [
                { id: 'u4t5ic1kc1', text: "Key Concepts: Solve problems by relating quantities whose rates of change are known." },
                { id: 'u4t5ic1kc2', text: "Suggested Skill: Justification 3.F" }
              ]
            }
          ]
        },
        {
          id: 'u4t6',
          name: 'Topic 4.6: Approximating Values of a Function Using Local Linearity and Linearization',
          iCanStatements: [
            {
              id: 'u4t6ic1',
              text: 'I Can: Approximate a value on a curve using the equation of a tangent line.',
              keyConcepts: [
                { id: 'u4t6ic1kc1', text: "Key Concepts: The tangent line is a local linear approximation. The function's concavity near the tangency point determines if the approximation is an underestimate or overestimate." },
                { id: 'u4t6ic1kc2', text: "Formulas: Linear Approximation: L(x) = f(a) + f'(a)(x-a)" },
                { id: 'u4t6ic1kc3', text: "Suggested Skill: Implementing Mathematical Processes 1.F" }
              ]
            }
          ]
        },
        {
          id: 'u4t7',
          name: "Topic 4.7: Using L'Hospital's Rule for Determining Limits of Indeterminate Forms",
          iCanStatements: [
            {
              id: 'u4t7ic1',
              text: 'I Can: Determine limits of functions that result in indeterminate forms.',
              keyConcepts: [
                { id: 'u4t7ic1kc1', text: "Key Concepts: Indeterminate forms are 0/0 or ∞/∞. L'Hospital's Rule can be used to evaluate these limits." },
                { id: 'u4t7ic1kc2', text: "Formulas: L'Hospital's Rule: If lim f(x)/g(x) is of the form 0/0 or ∞/∞, then lim f(x)/g(x) = lim f'(x)/g'(x), provided the latter limit exists." },
                { id: 'u4t7ic1kc3', text: "Suggested Skill: Justification 3.D" }
              ]
            }
          ]
        }
      ],
      formulas: [
        {
            title: "L'Hôpital's Rule",
            content: `
                <p>If <code>lim<sub>x→a</sub> f(x)/g(x)</code> is of the indeterminate form <code>0/0</code> or <code>±∞/±∞</code>, then:</p>
                <p><code>lim<sub>x→a</sub> f(x)/g(x) = lim<sub>x→a</sub> f'(x)/g'(x)</code></p>
                <p>This rule applies where 'a' is a number, ∞, or -∞.</p>
            `
        },
        {
            title: 'Related Rates',
            content: `
                <p>This technique is used to find the rate of change of a quantity that is related to other quantities whose rates of change are known.</p>
                <p><strong>Procedure:</strong></p>
                <ol class="list-decimal list-inside space-y-2">
                    <li>Identify known and unknown quantities and their rates of change. Draw a picture.</li>
                    <li>Write an equation relating the variables.</li>
                    <li>Differentiate the entire equation with respect to time (t), using implicit differentiation.</li>
                    <li>Plug in the known quantities and solve for the unknown rate.</li>
                </ol>
            `
        }
      ]
    },
    {
      id: 'u5',
      name: 'Unit 5: Analytical Applications of Differentiation',
      examWeighting: '15–18%',
      classPeriods: '~15–16',
      keyUnderstanding: "This unit focuses on using derivatives to analyze the behavior of functions, including finding extrema, intervals of increasing/decreasing, and concavity. You will learn to justify conclusions about function behavior.",
      bigIdeas: [
        { title: 'Analysis of Functions (FUN)', question: "How might the Mean Value Theorem be used to justify a conclusion that you were speeding at some point on a certain stretch of highway, even without knowing the exact time you were speeding? What additional information is included in a sound mathematical argument about optimization that a simple description of an equivalent answer lacks?" }
      ],
      sciencePractices: "You'll apply procedures (1.E), identify relationships between representations (2.D, 2.E), and provide justifications (3.E).",
      examTips: "Be precise in your language when describing function behavior (e.g., 'f is increasing' vs. 'it is increasing'). Justifications must be based on calculus (e.g., 'f is increasing because f'(x) > 0'). For extrema, use the First Derivative Test, Second Derivative Test, or Candidates Test.",
      vocabulary: ['Mean Value Theorem (MVT)', 'Extreme Value Theorem (EVT)', 'critical point', 'extrema', 'concavity', 'point of inflection', 'First Derivative Test', 'Second Derivative Test', 'Candidates Test', 'optimization'],
      topics: [
        {
          id: 'u5t1',
          name: 'Topic 5.1: Using the Mean Value Theorem',
          iCanStatements: [
            {
              id: 'u5t1ic1',
              text: 'I Can: Justify conclusions about functions by applying the Mean Value Theorem over an interval.',
              keyConcepts: [
                { id: 'u5t1ic1kc1', text: "Key Concepts: If f is continuous on [a,b] and differentiable on (a,b), then there exists a c in (a,b) such that f'(c) = (f(b)-f(a))/(b-a)." },
                { id: 'u5t1ic1kc2', text: "Suggested Skill: Justification 3.E" }
              ]
            }
          ]
        },
        {
          id: 'u5t2',
          name: 'Topic 5.2: Extreme Value Theorem, Global Versus Local Extrema, and Critical Points',
          iCanStatements: [
            {
              id: 'u5t2ic1',
              text: 'I Can: Justify conclusions about functions by applying the Extreme Value Theorem.',
              keyConcepts: [
                { id: 'u5t2ic1kc1', text: "Key Concepts: If f is continuous on [a,b], then f has an absolute maximum and an absolute minimum on [a,b]. Critical points are where f'(x)=0 or f'(x) is undefined. Local extrema occur at critical points." },
                { id: 'u5t2ic1kc2', text: "Suggested Skill: Justification 3.E" }
              ]
            }
          ]
        },
        {
          id: 'u5t3',
          name: 'Topic 5.3: Determining Intervals on Which a Function Is Increasing or Decreasing',
          iCanStatements: [
            {
              id: 'u5t3ic1',
              text: 'I Can: Justify conclusions about the behavior of a function based on the behavior of its derivatives.',
              keyConcepts: [
                { id: 'u5t3ic1kc1', text: "Key Concepts: If f'(x)>0 on an interval, f(x) is increasing. If f'(x)<0 on an interval, f(x) is decreasing." },
                { id: 'u5t3ic1kc2', text: "Suggested Skill: Connecting Representations 2.E" }
              ]
            }
          ]
        },
        {
          id: 'u5t4',
          name: 'Topic 5.4: Using the First Derivative Test to Determine Relative (Local) Extrema',
          iCanStatements: [
            {
              id: 'u5t4ic1',
              text: 'I Can: Justify conclusions about the behavior of a function based on the behavior of its derivatives.',
              keyConcepts: [
                { id: 'u5t4ic1kc1', text: "Key Concepts: If f'(x) changes sign from positive to negative at a critical point c, then f(c) is a relative maximum. If f'(x) changes sign from negative to positive at c, then f(c) is a relative minimum." },
                { id: 'u5t4ic1kc2', text: "Suggested Skill: Justification 3.D" }
              ]
            }
          ]
        },
        {
          id: 'u5t5',
          name: 'Topic 5.5: Using the Candidates Test to Determine Absolute (Global) Extrema',
          iCanStatements: [
            {
              id: 'u5t5ic1',
              text: 'I Can: Justify conclusions about the behavior of a function based on the behavior of its derivatives.',
              keyConcepts: [
                { id: 'u5t5ic1kc1', text: "Key Concepts: Absolute extrema on a closed interval occur at critical points or endpoints. Evaluate f(x) at all critical points in the interval and at the endpoints, then compare values." },
                { id: 'u5t5ic1kc2', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u5t6',
          name: 'Topic 5.6: Determining Concavity of Functions over Their Domains',
          iCanStatements: [
            {
              id: 'u5t6ic1',
              text: 'I Can: Justify conclusions about the behavior of a function based on the behavior of its derivatives.',
              keyConcepts: [
                { id: 'u5t6ic1kc1', text: "Key Concepts: If f''(x)>0 on an interval, f(x) is concave up. If f''(x)<0 on an interval, f(x) is concave down. Points of inflection occur where concavity changes." },
                { id: 'u5t6ic1kc2', text: "Suggested Skill: Connecting Representations 2.E" }
              ]
            }
          ]
        },
        {
          id: 'u5t7',
          name: 'Topic 5.7: Using the Second Derivative Test to Determine Extrema',
          iCanStatements: [
            {
              id: 'u5t7ic1',
              text: 'I Can: Justify conclusions about the behavior of a function based on the behavior of its derivatives.',
              keyConcepts: [
                { id: 'u5t7ic1kc1', text: "Key Concepts: If f'(c)=0 and f''(c)>0, then f(c) is a relative minimum. If f'(c)=0 and f''(c)<0, then f(c) is a relative maximum. If f''(c)=0, the test is inconclusive." },
                { id: 'u5t7ic1kc2', text: "Suggested Skill: Justification 3.D" }
              ]
            }
          ]
        },
        {
          id: 'u5t8',
          name: 'Topic 5.8: Sketching Graphs of Functions and Their Derivatives',
          iCanStatements: [
            {
              id: 'u5t8ic1',
              text: 'I Can: Justify conclusions about the behavior of a function based on the behavior of its derivatives.',
              keyConcepts: [
                { id: 'u5t8ic1kc1', text: "Key Concepts: Relate key features of f, f', and f'' to their graphical, numerical, and analytical representations." },
                { id: 'u5t8ic1kc2', text: "Suggested Skill: Connecting Representations 2.D" }
              ]
            }
          ]
        },
        {
          id: 'u5t9',
          name: 'Topic 5.9: Connecting a Function, Its First Derivative, and Its Second Derivative',
          iCanStatements: [
            {
              id: 'u5t9ic1',
              text: 'I Can: Justify conclusions about the behavior of a function based on the behavior of its derivatives.',
              keyConcepts: [
                { id: 'u5t9ic1kc1', text: "Key Concepts: Understand the relationships between the graphs and properties of f, f', and f''." },
                { id: 'u5t9ic1kc2', text: "Suggested Skill: Connecting Representations 2.D" }
              ]
            }
          ]
        },
        {
          id: 'u5t10',
          name: 'Topic 5.10: Introduction to Optimization Problems',
          iCanStatements: [
            {
              id: 'u5t10ic1',
              text: 'I Can: Calculate minimum and maximum values in applied contexts or analysis of functions.',
              keyConcepts: [
                { id: 'u5t10ic1kc1', text: "Key Concepts: Derivatives can solve optimization problems (finding min/max values)." },
                { id: 'u5t10ic1kc2', text: "Suggested Skill: Connecting Representations 2.A" }
              ]
            }
          ]
        },
        {
          id: 'u5t11',
          name: 'Topic 5.11: Solving Optimization Problems',
          iCanStatements: [
            {
              id: 'u5t11ic1',
              text: 'I Can: Interpret minimum and maximum values calculated in applied contexts.',
              keyConcepts: [
                { id: 'u5t11ic1kc1', text: "Key Concepts: Minimum and maximum values have specific meanings in applied contexts." },
                { id: 'u5t11ic1kc2', text: "Suggested Skill: Justification 3.F" }
              ]
            }
          ]
        },
        {
          id: 'u5t12',
          name: 'Topic 5.12: Exploring Behaviors of Implicit Relations',
          iCanStatements: [
            {
              id: 'u5t12ic1',
              text: 'I Can: Determine critical points of implicit relations and justify conclusions about the behavior of an implicitly defined function based on evidence from its derivatives.',
              keyConcepts: [
                { id: 'u5t12ic1kc1', text: "Key Concepts: Critical points of implicit relations are where dy/dx=0 or dy/dx is undefined. Applications of derivatives extend to implicitly defined functions. Second derivatives may involve x, y, and dy/dx." },
                { id: 'u5t12ic1kc2', text: "Suggested Skills: Implementing Mathematical Processes 1.E, Justification 3.E" }
              ]
            }
          ]
        }
      ],
      formulas: [
        {
            title: 'Key Theorems',
            content: `
                <p><strong>Mean Value Theorem (MVT):</strong> If f(x) is continuous on [a, b] and differentiable on (a, b), then there is a number c where a < c < b such that <code>f'(c) = (f(b) - f(a)) / (b - a)</code>. (Instantaneous rate of change equals average rate of change).</p>
                <p><strong>Extreme Value Theorem (EVT):</strong> If f(x) is continuous on a closed interval [a, b], then f(x) has both an absolute maximum and an absolute minimum on that interval.</p>
                <p><strong>Fermat's Theorem:</strong> If f(x) has a relative (local) extremum at x = c, then x = c is a critical point of f(x).</p>
            `
        },
        {
            title: 'Analyzing Function Behavior',
            content: `
                <p><strong>Critical Points:</strong> A point x = c is a critical point of f(x) if either <code>f'(c) = 0</code> or <code>f'(c)</code> doesn't exist.</p>
                <p><strong>Increasing/Decreasing:</strong></p>
                <ul class="list-disc list-inside">
                    <li>If <code>f'(x) > 0</code> for all x in an interval I, then f(x) is increasing on I.</li>
                    <li>If <code>f'(x) < 0</code> for all x in an interval I, then f(x) is decreasing on I.</li>
                </ul>
                <p><strong>Concavity:</strong></p>
                <ul class="list-disc list-inside">
                    <li>If <code>f''(x) > 0</code> for all x in an interval I, then f(x) is concave up on I.</li>
                    <li>If <code>f''(x) < 0</code> for all x in an interval I, then f(x) is concave down on I.</li>
                </ul>
                <p><strong>Inflection Points:</strong> An inflection point is where the concavity of the function changes.</p>
            `
        },
        {
            title: 'Tests for Extrema',
            content: `
                <p><strong>First Derivative Test:</strong> If x = c is a critical point:</p>
                <ul class="list-disc list-inside">
                    <li>If f'(x) changes from positive to negative at c, then c is a relative maximum.</li>
                    <li>If f'(x) changes from negative to positive at c, then c is a relative minimum.</li>
                </ul>
                <p><strong>Second Derivative Test:</strong> If x = c is a critical point such that f'(c) = 0:</p>
                <ul class="list-disc list-inside">
                    <li>If <code>f''(c) > 0</code>, then c is a relative minimum.</li>
                    <li>If <code>f''(c) < 0</code>, then c is a relative maximum.</li>
                    <li>If <code>f''(c) = 0</code>, the test is inconclusive.</li>
                </ul>
                <p><strong>Candidates Test (for Absolute Extrema on [a,b]):</strong></p>
                <ol class="list-decimal list-inside">
                    <li>Find all critical points of f(x) in [a, b].</li>
                    <li>Evaluate f(x) at all critical points found in Step 1.</li>
                    <li>Evaluate f(a) and f(b).</li>
                    <li>The largest value is the absolute maximum; the smallest is the absolute minimum.</li>
                </ol>
            `
        },
        {
            title: 'Optimization',
            content: `
                <p>A procedure to find the absolute maximum or minimum value of a quantity.</p>
                <ol class="list-decimal list-inside">
                    <li>Write an equation for the quantity to be optimized (e.g., Area, Volume).</li>
                    <li>Write a constraint equation relating the variables.</li>
                    <li>Use the constraint to write the optimization equation in terms of a single variable.</li>
                    <li>Find the derivative of the equation, find critical points, and test them to find the max/min.</li>
                </ol>
            `
        }
      ]
    },
    {
      id: 'u6',
      name: 'Unit 6: Integration and Accumulation of Change',
      examWeighting: '17–20%',
      classPeriods: '~18–20',
      keyUnderstanding: "This unit establishes the relationship between differentiation and integration using the Fundamental Theorem of Calculus. You will learn to interpret definite integrals as accumulation of change and master various integration techniques.",
      bigIdeas: [
        { title: 'Change (CHA)', question: "Given information about a rate of population growth over time, how can we determine how much the population changed over a given interval of time?" },
        { title: 'Limits (LIM)', question: "If compounding more often increases the amount in an account with a given rate of return and term, why doesn't compounding continuously result in an infinite account balance, all other things being equal?" },
        { title: 'Analysis of Functions (FUN)', question: "How is integrating to find areas related to differentiating to find slopes?" }
      ],
      sciencePractices: "You'll identify procedures (1.D, 1.E), connect representations (2.C, 2.D), and apply definitions/theorems (3.D).",
      examTips: "Be careful with the Chain Rule when differentiating functions defined by integrals and when using u-substitution. When using a calculator for definite integrals, present the integral expression with limits and differential. For indefinite integrals, include the constant of integration (+C). Avoid equating expressions that are not equal.",
      vocabulary: ['antiderivative', 'indefinite integral', 'definite integral', 'Riemann sum', 'trapezoidal sum', 'accumulation function', 'Fundamental Theorem of Calculus (FTC)', 'u-substitution'],
      topics: [
        {
          id: 'u6t1',
          name: 'Topic 6.1: Exploring Accumulations of Change',
          iCanStatements: [
            {
              id: 'u6t1ic1',
              text: 'I Can: Interpret the meaning of areas associated with the graph of a rate of change in context.',
              keyConcepts: [
                { id: 'u6t1ic1kc1', text: "Key Concepts: The area between a rate of change function and the x-axis represents the accumulation of change. If the rate is positive (negative), the accumulated change is positive (negative). Units for area are (unit of rate) × (unit of independent variable)." },
                { id: 'u6t1ic1kc2', text: "Suggested Skill: Communication and Notation 4.B" }
              ]
            }
          ]
        },
        {
          id: 'u6t2',
          name: 'Topic 6.2: Approximating Areas with Riemann Sums',
          iCanStatements: [
            {
              id: 'u6t2ic1',
              text: 'I Can: Approximate a definite integral using geometric and numerical methods.',
              keyConcepts: [
                { id: 'u6t2ic1kc1', text: "Key Concepts: Definite integrals can be approximated using left, right, midpoint Riemann sums, or trapezoidal sums, with uniform or nonuniform partitions. The behavior of the function (increasing/decreasing, concave up/down) determines if an approximation is an underestimate or overestimate." },
                { id: 'u6t2ic1kc2', text: "Formulas: Area of rectangle: base × height" },
                { id: 'u6t2ic1kc3', text: "Formulas: Area of trapezoid: (1/2)(base1+base2) × height" },
                { id: 'u6t2ic1kc4', text: "Suggested Skill: Implementing Mathematical Processes 1.F" }
              ]
            }
          ]
        },
        {
          id: 'u6t3',
          name: 'Topic 6.3: Riemann Sums, Summation Notation, and Definite Integral Notation',
          iCanStatements: [
            {
              id: 'u6t3ic1',
              text: 'I Can: Interpret the limiting case of the Riemann sum as a definite integral and represent the limiting case of the Riemann sum as a definite integral.',
              keyConcepts: [
                { id: 'u6t3ic1kc1', text: "Key Concepts: The definite integral is the limit of Riemann sums as the width of subintervals approaches 0." },
                { id: 'u6t3ic1kc2', text: "Formulas: ∫(from a to b)f(x)dx = lim (as n→∞) Σ(from i=1 to n) f(xᵢ*)Δxᵢ" },
                { id: 'u6t3ic1kc3', text: "Suggested Skill: Connecting Representations 2.C" }
              ]
            }
          ]
        },
        {
          id: 'u6t4',
          name: 'Topic 6.4: The Fundamental Theorem of Calculus and Accumulation Functions',
          iCanStatements: [
            {
              id: 'u6t4ic1',
              text: 'I Can: Represent accumulation functions using definite integrals.',
              keyConcepts: [
                { id: 'u6t4ic1kc1', text: "Key Concepts: The definite integral can define new functions." },
                { id: 'u6t4ic1kc2', text: "Formulas: FTC Part 1: If F(x) = ∫(from a to x) f(t)dt, then F'(x) = f(x)." },
                { id: 'u6t4ic1kc3', text: "Formulas: If F(x) = ∫(from a to g(x)) f(t)dt, then F'(x) = f(g(x)) · g'(x)." },
                { id: 'u6t4ic1kc4', text: "Suggested Skill: Implementing Mathematical Processes 1.D" }
              ]
            }
          ]
        },
        {
          id: 'u6t5',
          name: 'Topic 6.5: Interpreting the Behavior of Accumulation Functions Involving Area',
          iCanStatements: [
            {
              id: 'u6t5ic1',
              text: 'I Can: Represent accumulation functions using definite integrals.',
              keyConcepts: [
                { id: 'u6t5ic1kc1', text: "Key Concepts: Graphical, numerical, analytical, and verbal representations of f provide information about g(x) = ∫(from a to x) f(t)dt." },
                { id: 'u6t5ic1kc2', text: "Suggested Skill: Connecting Representations 2.D" }
              ]
            }
          ]
        },
        {
          id: 'u6t6',
          name: 'Topic 6.6: Applying Properties of Definite Integrals',
          iCanStatements: [
            {
              id: 'u6t6ic1',
              text: 'I Can: Calculate a definite integral using areas and properties of definite integrals.',
              keyConcepts: [
                { id: 'u6t6ic1kc1', text: "Key Concepts: Definite integrals can be evaluated using geometry. Properties include constant multiple, sum/difference, reversal of limits, and adjacent intervals." },
                { id: 'u6t6ic1kc2', text: "Formulas: ∫k·f(x)dx = k·∫f(x)dx" },
                { id: 'u6t6ic1kc3', text: "Formulas: ∫[f(x)±g(x)]dx = ∫f(x)dx ± ∫g(x)dx" },
                { id: 'u6t6ic1kc4', text: "Formulas: ∫(from a to b)f(x)dx = -∫(from b to a)f(x)dx" },
                { id: 'u6t6ic1kc5', text: "Formulas: ∫(from a to c)f(x)dx + ∫(from c to b)f(x)dx = ∫(from a to b)f(x)dx" },
                { id: 'u6t6ic1kc6', text: "Suggested Skill: Justification 3.D" }
              ]
            }
          ]
        },
        {
          id: 'u6t7',
          name: 'Topic 6.7: The Fundamental Theorem of Calculus and Definite Integrals',
          iCanStatements: [
            {
              id: 'u6t7ic1',
              text: 'I Can: Evaluate definite integrals analytically using the Fundamental Theorem of Calculus.',
              keyConcepts: [
                { id: 'u6t7ic1kc1', text: "Key Concepts: An antiderivative F of f has F'=f." },
                { id: 'u6t7ic1kc2', text: "Formulas: FTC Part 2: If f is continuous on [a,b] and F is an antiderivative of f, then ∫(from a to b) f(x)dx = F(b)-F(a)." },
                { id: 'u6t7ic1kc3', text: "Suggested Skill: Justification 3.D" }
              ]
            }
          ]
        },
        {
          id: 'u6t8',
          name: 'Topic 6.8: Finding Antiderivatives and Indefinite Integrals: Basic Rules and Notation',
          iCanStatements: [
            {
              id: 'u6t8ic1',
              text: 'I Can: Determine antiderivatives of functions and indefinite integrals, using knowledge of derivatives.',
              keyConcepts: [
                { id: 'u6t8ic1kc1', text: "Key Concepts: ∫f(x)dx=F(x)+C, where F'(x)=f(x). Differentiation rules provide the foundation for antiderivatives." },
                { id: 'u6t8ic1kc2', text: "Formulas: ∫xⁿdx = (xⁿ⁺¹)/(n+1) + C (for n≠-1)" },
                { id: 'u6t8ic1kc3', text: "Formulas: ∫(1/x)dx = ln|x| + C" },
                { id: 'u6t8ic1kc4', text: "Suggested Skill: Communication and Notation 4.C" }
              ]
            }
          ]
        },
        {
          id: 'u6t9',
          name: 'Topic 6.9: Integrating Using Substitution',
          iCanStatements: [
            {
              id: 'u6t9ic1',
              text: 'I Can: Determine indefinite integrals and evaluate definite integrals for integrands requiring substitution.',
              keyConcepts: [
                { id: 'u6t9ic1kc1', text: "Key Concepts: Substitution of variables (u-substitution) is a technique for finding antiderivatives. For definite integrals, change the limits of integration according to the substitution." },
                { id: 'u6t9ic1kc2', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u6t10',
          name: 'Topic 6.10: Integrating Functions Using Long Division and Completing the Square',
          iCanStatements: [
            {
              id: 'u6t10ic1',
              text: 'I Can: Determine indefinite integrals and evaluate definite integrals for integrands requiring rearrangements into equivalent forms.',
              keyConcepts: [
                { id: 'u6t10ic1kc1', text: "Key Concepts: Techniques include long division for rational functions where the degree of the numerator is greater than or equal to the degree of the denominator, and completing the square for certain quadratic expressions in the denominator." },
                { id: 'u6t10ic1kc2', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u6t11',
          name: 'Topic 6.11: Selecting Techniques for Antidifferentiation',
          iCanStatements: [
            {
              id: 'u6t11ic1',
              text: 'I Can: Select an appropriate procedure for antidifferentiation.',
              keyConcepts: [
                { id: 'u6t11ic1kc1', text: "Key Concepts: Practice choosing the correct integration technique based on the integrand's form." },
                { id: 'u6t11ic1kc2', text: "Suggested Skill: Implementing Mathematical Processes 1.C" }
              ]
            }
          ]
        }
      ],
      formulas: [
        {
            title: 'Integral Definitions',
            content: `
                <p><strong>Definite Integral:</strong> Suppose f(x) is continuous on [a,b]. Divide [a,b] into n subintervals of width Δx and choose x<sub>i</sub>* from each interval. Then: <br><code>∫<sub>a</sub><sup>b</sup> f(x) dx = lim<sub>n→∞</sub> Σ<sub>i=1</sub><sup>n</sup> f(x<sub>i</sub>*) Δx</code></p>
                <p><strong>Anti-Derivative:</strong> An anti-derivative of f(x) is a function, F(x), such that F'(x) = f(x).</p>
                <p><strong>Indefinite Integral:</strong> <code>∫ f(x) dx = F(x) + C</code> where F(x) is an anti-derivative of f(x) and C is the constant of integration.</p>
            `
        },
        {
            title: 'The Fundamental Theorem of Calculus (FTC)',
            content: `
                <p><strong>Part I (The Second FTC):</strong> If f(x) is continuous on [a,b], then the accumulation function g(x) = <code>∫<sub>a</sub><sup>x</sup> f(t) dt</code> is also continuous on [a,b] and <code>g'(x) = d/dx [∫<sub>a</sub><sup>x</sup> f(t) dt] = f(x)</code>.</p>
                <p><strong>Part II (The First FTC):</strong> If f(x) is continuous on [a,b] and F(x) is any anti-derivative of f(x), then <code>∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) - F(a)</code>.</p>
            `
        },
        {
            title: 'Properties of Definite Integrals',
            content: `
                <ul class="list-disc list-inside space-y-2">
                    <li><code>∫<sub>a</sub><sup>b</sup> cf(x) dx = c ∫<sub>a</sub><sup>b</sup> f(x) dx</code></li>
                    <li><code>∫<sub>a</sub><sup>b</sup> [f(x) ± g(x)] dx = ∫<sub>a</sub><sup>b</sup> f(x) dx ± ∫<sub>a</sub><sup>b</sup> g(x) dx</code></li>
                    <li><code>∫<sub>a</sub><sup>a</sup> f(x) dx = 0</code></li>
                    <li><code>∫<sub>a</sub><sup>b</sup> f(x) dx = -∫<sub>b</sub><sup>a</sup> f(x) dx</code></li>
                    <li><code>∫<sub>a</sub><sup>b</sup> f(x) dx = ∫<sub>a</sub><sup>c</sup> f(x) dx + ∫<sub>c</sub><sup>b</sup> f(x) dx</code></li>
                </ul>
            `
        },
        {
            title: 'Common Integrals',
            content: `
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul class="list-disc list-inside">
                    <li><code>∫ k dx = kx + C</code></li>
                    <li><code>∫ x<sup>n</sup> dx = (x<sup>n+1</sup>)/(n+1) + C, n ≠ -1</code></li>
                    <li><code>∫ 1/x dx = ln|x| + C</code></li>
                    <li><code>∫ e<sup>u</sup> du = e<sup>u</sup> + C</code></li>
                    <li><code>∫ a<sup>u</sup> du = a<sup>u</sup>/ln(a) + C</code></li>
                  </ul>
                </div>
                <div>
                  <ul class="list-disc list-inside">
                    <li><code>∫ sin(u) du = -cos(u) + C</code></li>
                    <li><code>∫ cos(u) du = sin(u) + C</code></li>
                    <li><code>∫ sec<sup>2</sup>(u) du = tan(u) + C</code></li>
                    <li><code>∫ sec(u)tan(u) du = sec(u) + C</code></li>
                    <li><code>∫ csc(u)cot(u) du = -csc(u) + C</code></li>
                    <li><code>∫ csc<sup>2</sup>(u) du = -cot(u) + C</code></li>
                  </ul>
                </div>
              </div>
            `
        },
        {
            title: 'Approximating Definite Integrals',
            content: `
                <p>For a given integral <code>∫<sub>a</sub><sup>b</sup> f(x) dx</code> and n subintervals, let Δx = (b-a)/n.</p>
                <p><strong>Midpoint Rule:</strong> <code>Δx [f(x<sub>1</sub>*) + f(x<sub>2</sub>*) + ... + f(x<sub>n</sub>*)]</code>, where x<sub>i</sub>* is the midpoint of the i-th subinterval.</p>
                <p><strong>Trapezoid Rule:</strong> <code>(Δx/2) [f(x<sub>0</sub>) + 2f(x<sub>1</sub>) + 2f(x<sub>2</sub>) + ... + 2f(x<sub>n-1</sub>) + f(x<sub>n</sub>)]</code></p>
            `
        },
        {
            title: 'Integration by u-Substitution',
            content: `
                <p>A technique to reverse the Chain Rule. Choose a 'u' that is the "inner function" of a composite function, find du, and substitute to simplify the integral.</p>
                <p>Example: <code>∫ 5x<sup>2</sup>cos(x<sup>3</sup>) dx</code></p>
                <ul class="list-disc list-inside">
                    <li>Let <code>u = x<sup>3</sup></code></li>
                    <li>Then <code>du = 3x<sup>2</sup> dx</code>, so <code>x<sup>2</sup>dx = (1/3)du</code></li>
                    <li>Substitute: <code>∫ 5 cos(u) (1/3)du = (5/3) ∫ cos(u) du</code></li>
                    <li>Integrate: <code>(5/3) sin(u) + C</code></li>
                    <li>Substitute back: <code>(5/3) sin(x<sup>3</sup>) + C</code></li>
                </ul>
            `
        }
      ]
    },
    {
      id: 'u7',
      name: 'Unit 7: Differential Equations',
      examWeighting: '6–12%',
      classPeriods: '~8–9',
      keyUnderstanding: "In this unit, you will learn to set up and solve separable differential equations. You will use slope fields to visualize solutions and understand how initial conditions lead to unique solutions.",
      bigIdeas: [
        { title: 'Analysis of Functions (FUN)', question: "How can we derive a model for the number of computers, C, infected by a virus, given a model for how fast the computers are being infected, dC/dt, at a particular time?" }
      ],
      sciencePractices: "You'll translate information (2.C), confirm solutions (3.G), and use graphing techniques (4.D).",
      examTips: "Practice setting up and solving separable differential equations: separate variables, integrate both sides, add a constant of integration (+C), use initial conditions to find C, and solve for the dependent variable. Do not omit the constant of integration. Recognize exponential growth/decay models.",
      vocabulary: ['differential equation', 'separable differential equation', 'slope field'],
      topics: [
        {
          id: 'u7t1',
          name: 'Topic 7.1: Modeling Situations with Differential Equations',
          iCanStatements: [
            {
              id: 'u7t1ic1',
              text: 'I Can: Interpret verbal statements of problems as differential equations involving a derivative expression.',
              keyConcepts: [
                { id: 'u7t1ic1kc1', text: "Key Concepts: Differential equations relate a function and its derivatives." },
                { id: 'u7t1ic1kc2', text: "Suggested Skill: Connecting Representations 2.C" }
              ]
            }
          ]
        },
        {
          id: 'u7t2',
          name: 'Topic 7.2: Verifying Solutions for Differential Equations',
          iCanStatements: [
            {
              id: 'u7t2ic1',
              text: 'I Can: Verify solutions to differential equations.',
              keyConcepts: [
                { id: 'u7t2ic1kc1', text: "Key Concepts: Derivatives can verify if a function is a solution. There may be infinitely many general solutions." },
                { id: 'u7t2ic1kc2', text: "Suggested Skill: Justification 3.G" }
              ]
            }
          ]
        },
        {
          id: 'u7t3',
          name: 'Topic 7.3: Sketching Slope Fields',
          iCanStatements: [
            {
              id: 'u7t3ic1',
              text: 'I Can: Estimate solutions to differential equations.',
              keyConcepts: [
                { id: 'u7t3ic1kc1', text: "Key Concepts: A slope field graphically represents a differential equation. It provides information about solution behavior." },
                { id: 'u7t3ic1kc2', text: "Suggested Skill: Connecting Representations 2.C" }
              ]
            }
          ]
        },
        {
          id: 'u7t4',
          name: 'Topic 7.4: Reasoning Using Slope Fields',
          iCanStatements: [
            {
              id: 'u7t4ic1',
              text: 'I Can: Estimate solutions to differential equations.',
              keyConcepts: [
                { id: 'u7t4ic1kc1', text: "Key Concepts: Solutions to differential equations are functions or families of functions." },
                { id: 'u7t4ic1kc2', text: "Suggested Skill: Communication and Notation 4.D" }
              ]
            }
          ]
        },
        {
          id: 'u7t5',
          name: 'Topic 7.6: Finding General Solutions Using Separation of Variables',
          iCanStatements: [
            {
              id: 'u7t5ic1',
              text: 'I Can: Determine general solutions to differential equations.',
              keyConcepts: [
                { id: 'u7t5ic1kc1', text: "Key Concepts: Some differential equations can be solved by separation of variables. Antidifferentiation finds general solutions." },
                { id: 'u7t5ic1kc2', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u7t6',
          name: 'Topic 7.7: Finding Particular Solutions Using Initial Conditions and Separation of Variables',
          iCanStatements: [
            {
              id: 'u7t6ic1',
              text: 'I Can: Determine particular solutions to differential equations.',
              keyConcepts: [
                { id: 'u7t6ic1kc1', text: "Key Concepts: A general solution describes infinitely many solutions; an initial condition yields a unique particular solution." },
                { id: 'u7t6ic1kc2', text: "Formulas: General solution: ∫g(y)dy = ∫f(x)dx ⇒ G(y) = F(x)+C" },
                { id: 'u7t6ic1kc3', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u7t7',
          name: 'Topic 7.8: Exponential Models with Differential Equations',
          iCanStatements: [
            {
              id: 'u7t7ic1',
              text: 'I Can: Interpret the meaning of a differential equation and its variables in context and determine general and particular solutions.',
              keyConcepts: [
                { id: 'u7t7ic1kc1', text: "Key Concepts: The model for exponential growth/decay is dy/dt=ky." },
                { id: 'u7t7ic1kc2', text: "Formulas: Solution to dy/dt=ky: y=y₀eᵏᵗ (where y₀ is the initial value)" },
                { id: 'u7t7ic1kc3', text: "Suggested Skill: Justification 3.G" }
              ]
            }
          ]
        }
      ],
      formulas: [
        {
            title: 'Modeling and Verifying Solutions',
            content: `
                <p>A <strong>differential equation</strong> is an equation that relates a function with its derivatives. For example, <code>dy/dx = 2x</code>.</p>
                <ul class="list-disc list-inside space-y-2 mt-2">
                    <li>A <strong>general solution</strong> represents a family of functions, often containing a constant 'C'. For <code>dy/dx = 2x</code>, the general solution is <code>y = x² + C</code>.</li>
                    <li>A <strong>particular solution</strong> is a single function that satisfies a given initial condition. If we know the solution passes through (1, 4), we can find C: <code>4 = 1² + C ⇒ C = 3</code>. The particular solution is <code>y = x² + 3</code>.</li>
                    <li>To <strong>verify a solution</strong>, substitute the function and its derivatives into the differential equation to see if it holds true.</li>
                </ul>
            `
        },
        {
            title: 'Slope Fields',
            content: `
                <p>A <strong>slope field</strong> is a graphical representation of a differential equation. At each point (x, y) on a grid, a short line segment is drawn with the slope given by the value of dy/dx at that point. It visualizes the direction of the solution curves.</p>
                <div class="flex flex-col md:flex-row items-center gap-6 mt-4">
                    <div class="flex-1 text-center">
                        <p class="mb-2 font-semibold">Slope field for <code>dy/dx = x</code></p>
                        <svg viewBox="-5 -5 110 110" class="w-full max-w-xs mx-auto bg-slate-800/50 rounded-lg border border-slate-700/50">
                            <!-- Axes -->
                            <line x1="50" y1="0" x2="50" y2="100" stroke="#a0aec0" stroke-width="0.5"/>
                            <line x1="0" y1="50" x2="100" y2="50" stroke="#a0aec0" stroke-width="0.5"/>
                            <!-- Slope segments -->
                            <g stroke="#94a3b8" stroke-width="0.75">
                                <line x1="6.18" y1="107.89" x2="13.82" y2="92.11" /><line x1="6.18" y1="97.89" x2="13.82" y2="82.11" /><line x1="6.18" y1="87.89" x2="13.82" y2="72.11" /><line x1="6.18" y1="77.89" x2="13.82" y2="62.11" /><line x1="6.18" y1="67.89" x2="13.82" y2="52.11" /><line x1="6.18" y1="57.89" x2="13.82" y2="42.11" /><line x1="6.18" y1="47.89" x2="13.82" y2="32.11" /><line x1="6.18" y1="37.89" x2="13.82" y2="22.11" /><line x1="6.18" y1="27.89" x2="13.82" y2="12.11" />
                                <line x1="16.51" y1="96.51" x2="23.49" y2="83.49" /><line x1="16.51" y1="86.51" x2="23.49" y2="73.49" /><line x1="16.51" y1="76.51" x2="23.49" y2="63.49" /><line x1="16.51" y1="66.51" x2="23.49" y2="53.49" /><line x1="16.51" y1="56.51" x2="23.49" y2="43.49" /><line x1="16.51" y1="46.51" x2="23.49" y2="33.49" /><line x1="16.51" y1="36.51" x2="23.49" y2="23.49" /><line x1="16.51" y1="26.51" x2="23.49" y2="13.49" /><line x1="16.51" y1="16.51" x2="23.49" y2="3.49" />
                                <line x1="27.17" y1="85.53" x2="32.83" y2="74.47" /><line x1="27.17" y1="75.53" x2="32.83" y2="64.47" /><line x1="27.17" y1="65.53" x2="32.83" y2="54.47" /><line x1="27.17" y1="55.53" x2="32.83" y2="44.47" /><line x1="27.17" y1="45.53" x2="32.83" y2="34.47" /><line x1="27.17" y1="35.53" x2="32.83" y2="24.47" /><line x1="27.17" y1="25.53" x2="32.83" y2="14.47" /><line x1="27.17" y1="15.53" x2="32.83" y2="4.47" /><line x1="27.17" y1="5.53" x2="32.83" y2="-5.53" />
                                <line x1="37.89" y1="73.82" x2="42.11" y2="66.18" /><line x1="37.89" y1="63.82" x2="42.11" y2="56.18" /><line x1="37.89" y1="53.82" x2="42.11" y2="46.18" /><line x1="37.89" y1="43.82" x2="42.11" y2="36.18" /><line x1="37.89" y1="33.82" x2="42.11" y2="26.18" /><line x1="37.89" y1="23.82" x2="42.11" y2="16.18" /><line x1="37.89" y1="13.82" x2="42.11" y2="6.18" /><line x1="37.89" y1="3.82" x2="42.11" y2="-3.82" /><line x1="37.89" y1="-6.18" x2="42.11" y2="-13.82" />
                                <line x1="46.00" y1="50.00" x2="54.00" y2="50.00" /><line x1="46.00" y1="40.00" x2="54.00" y2="40.00" /><line x1="46.00" y1="30.00" x2="54.00" y2="30.00" /><line x1="46.00" y1="20.00" x2="54.00" y2="20.00" /><line x1="46.00" y1="10.00" x2="54.00" y2="10.00" /><line x1="46.00" y1="60.00" x2="54.00" y2="60.00" /><line x1="46.00" y1="70.00" x2="54.00" y2="70.00" /><line x1="46.00" y1="80.00" x2="54.00" y2="80.00" /><line x1="46.00" y1="90.00" x2="54.00" y2="90.00" />
                                <line x1="57.89" y1="36.18" x2="62.11" y2="43.82" /><line x1="57.89" y1="26.18" x2="62.11" y2="33.82" /><line x1="57.89" y1="16.18" x2="62.11" y2="23.82" /><line x1="57.89" y1="6.18" x2="62.11" y2="13.82" /><line x1="57.89" y1="-3.82" x2="62.11" y2="3.82" /><line x1="57.89" y1="46.18" x2="62.11" y2="53.82" /><line x1="57.89" y1="56.18" x2="62.11" y2="63.82" /><line x1="57.89" y1="66.18" x2="62.11" y2="73.82" /><line x1="57.89" y1="76.18" x2="62.11" y2="83.82" />
                                <line x1="67.17" y1="24.47" x2="72.83" y2="35.53" /><line x1="67.17" y1="14.47" x2="72.83" y2="25.53" /><line x1="67.17" y1="4.47" x2="72.83" y2="15.53" /><line x1="67.17" y1="-5.53" x2="72.83" y2="5.53" /><line x1="67.17" y1="-15.53" x2="72.83" y2="-4.47" /><line x1="67.17" y1="34.47" x2="72.83" y2="45.53" /><line x1="67.17" y1="44.47" x2="72.83" y2="55.53" /><line x1="67.17" y1="54.47" x2="72.83" y2="65.53" /><line x1="67.17" y1="64.47" x2="72.83" y2="75.53" />
                                <line x1="76.51" y1="13.49" x2="83.49" y2="26.51" /><line x1="76.51" y1="3.49" x2="83.49" y2="16.51" /><line x1="76.51" y1="-6.51" x2="83.49" y2="6.51" /><line x1="76.51" y1="-16.51" x2="83.49" y2="-3.49" /><line x1="76.51" y1="-26.51" x2="83.49" y2="-13.49" /><line x1="76.51" y1="23.49" x2="83.49" y2="36.51" /><line x1="76.51" y1="33.49" x2="83.49" y2="46.51" /><line x1="76.51" y1="43.49" x2="83.49" y2="56.51" /><line x1="76.51" y1="53.49" x2="83.49" y2="66.51" />
                                <line x1="86.18" y1="2.11" x2="93.82" y2="17.89" /><line x1="86.18" y1="-7.89" x2="93.82" y2="7.89" /><line x1="86.18" y1="-17.89" x2="93.82" y2="-2.11" /><line x1="86.18" y1="-27.89" x2="93.82" y2="-12.11" /><line x1="86.18" y1="-37.89" x2="93.82" y2="-22.11" /><line x1="86.18" y1="12.11" x2="93.82" y2="27.89" /><line x1="86.18" y1="22.11" x2="93.82" y2="37.89" /><line x1="86.18" y1="32.11" x2="93.82" y2="47.89" /><line x1="86.18" y1="42.11" x2="93.82" y2="57.89" />
                            </g>
                        </svg>
                    </div>
                    <div class="flex-1 text-center">
                        <p class="mb-2 font-semibold">Solution curve for initial condition (0, -1)</p>
                        <svg viewBox="-5 -5 110 110" class="w-full max-w-xs mx-auto bg-slate-800/50 rounded-lg border border-slate-700/50">
                            <!-- Axes -->
                            <line x1="50" y1="0" x2="50" y2="100" stroke="#a0aec0" stroke-width="0.5"/>
                            <line x1="0" y1="50" x2="100" y2="50" stroke="#a0aec0" stroke-width="0.5"/>
                            <!-- Slope segments -->
                            <g stroke="#94a3b8" stroke-width="0.75">
                                <line x1="6.18" y1="107.89" x2="13.82" y2="92.11" /><line x1="6.18" y1="97.89" x2="13.82" y2="82.11" /><line x1="6.18" y1="87.89" x2="13.82" y2="72.11" /><line x1="6.18" y1="77.89" x2="13.82" y2="62.11" /><line x1="6.18" y1="67.89" x2="13.82" y2="52.11" /><line x1="6.18" y1="57.89" x2="13.82" y2="42.11" /><line x1="6.18" y1="47.89" x2="13.82" y2="32.11" /><line x1="6.18" y1="37.89" x2="13.82" y2="22.11" /><line x1="6.18" y1="27.89" x2="13.82" y2="12.11" />
                                <line x1="16.51" y1="96.51" x2="23.49" y2="83.49" /><line x1="16.51" y1="86.51" x2="23.49" y2="73.49" /><line x1="16.51" y1="76.51" x2="23.49" y2="63.49" /><line x1="16.51" y1="66.51" x2="23.49" y2="53.49" /><line x1="16.51" y1="56.51" x2="23.49" y2="43.49" /><line x1="16.51" y1="46.51" x2="23.49" y2="33.49" /><line x1="16.51" y1="36.51" x2="23.49" y2="23.49" /><line x1="16.51" y1="26.51" x2="23.49" y2="13.49" /><line x1="16.51" y1="16.51" x2="23.49" y2="3.49" />
                                <line x1="27.17" y1="85.53" x2="32.83" y2="74.47" /><line x1="27.17" y1="75.53" x2="32.83" y2="64.47" /><line x1="27.17" y1="65.53" x2="32.83" y2="54.47" /><line x1="27.17" y1="55.53" x2="32.83" y2="44.47" /><line x1="27.17" y1="45.53" x2="32.83" y2="34.47" /><line x1="27.17" y1="35.53" x2="32.83" y2="24.47" /><line x1="27.17" y1="25.53" x2="32.83" y2="14.47" /><line x1="27.17" y1="15.53" x2="32.83" y2="4.47" /><line x1="27.17" y1="5.53" x2="32.83" y2="-5.53" />
                                <line x1="37.89" y1="73.82" x2="42.11" y2="66.18" /><line x1="37.89" y1="63.82" x2="42.11" y2="56.18" /><line x1="37.89" y1="53.82" x2="42.11" y2="46.18" /><line x1="37.89" y1="43.82" x2="42.11" y2="36.18" /><line x1="37.89" y1="33.82" x2="42.11" y2="26.18" /><line x1="37.89" y1="23.82" x2="42.11" y2="16.18" /><line x1="37.89" y1="13.82" x2="42.11" y2="6.18" /><line x1="37.89" y1="3.82" x2="42.11" y2="-3.82" /><line x1="37.89" y1="-6.18" x2="42.11" y2="-13.82" />
                                <line x1="46.00" y1="50.00" x2="54.00" y2="50.00" /><line x1="46.00" y1="40.00" x2="54.00" y2="40.00" /><line x1="46.00" y1="30.00" x2="54.00" y2="30.00" /><line x1="46.00" y1="20.00" x2="54.00" y2="20.00" /><line x1="46.00" y1="10.00" x2="54.00" y2="10.00" /><line x1="46.00" y1="60.00" x2="54.00" y2="60.00" /><line x1="46.00" y1="70.00" x2="54.00" y2="70.00" /><line x1="46.00" y1="80.00" x2="54.00" y2="80.00" /><line x1="46.00" y1="90.00" x2="54.00" y2="90.00" />
                                <line x1="57.89" y1="36.18" x2="62.11" y2="43.82" /><line x1="57.89" y1="26.18" x2="62.11" y2="33.82" /><line x1="57.89" y1="16.18" x2="62.11" y2="23.82" /><line x1="57.89" y1="6.18" x2="62.11" y2="13.82" /><line x1="57.89" y1="-3.82" x2="62.11" y2="3.82" /><line x1="57.89" y1="46.18" x2="62.11" y2="53.82" /><line x1="57.89" y1="56.18" x2="62.11" y2="63.82" /><line x1="57.89" y1="66.18" x2="62.11" y2="73.82" /><line x1="57.89" y1="76.18" x2="62.11" y2="83.82" />
                                <line x1="67.17" y1="24.47" x2="72.83" y2="35.53" /><line x1="67.17" y1="14.47" x2="72.83" y2="25.53" /><line x1="67.17" y1="4.47" x2="72.83" y2="15.53" /><line x1="67.17" y1="-5.53" x2="72.83" y2="5.53" /><line x1="67.17" y1="-15.53" x2="72.83" y2="-4.47" /><line x1="67.17" y1="34.47" x2="72.83" y2="45.53" /><line x1="67.17" y1="44.47" x2="72.83" y2="55.53" /><line x1="67.17" y1="54.47" x2="72.83" y2="65.53" /><line x1="67.17" y1="64.47" x2="72.83" y2="75.53" />
                                <line x1="76.51" y1="13.49" x2="83.49" y2="26.51" /><line x1="76.51" y1="3.49" x2="83.49" y2="16.51" /><line x1="76.51" y1="-6.51" x2="83.49" y2="6.51" /><line x1="76.51" y1="-16.51" x2="83.49" y2="-3.49" /><line x1="76.51" y1="-26.51" x2="83.49" y2="-13.49" /><line x1="76.51" y1="23.49" x2="83.49" y2="36.51" /><line x1="76.51" y1="33.49" x2="83.49" y2="46.51" /><line x1="76.51" y1="43.49" x2="83.49" y2="56.51" /><line x1="76.51" y1="53.49" x2="83.49" y2="66.51" />
                                <line x1="86.18" y1="2.11" x2="93.82" y2="17.89" /><line x1="86.18" y1="-7.89" x2="93.82" y2="7.89" /><line x1="86.18" y1="-17.89" x2="93.82" y2="-2.11" /><line x1="86.18" y1="-27.89" x2="93.82" y2="-12.11" /><line x1="86.18" y1="-37.89" x2="93.82" y2="-22.11" /><line x1="86.18" y1="12.11" x2="93.82" y2="27.89" /><line x1="86.18" y1="22.11" x2="93.82" y2="37.89" /><line x1="86.18" y1="32.11" x2="93.82" y2="47.89" /><line x1="86.18" y1="42.11" x2="93.82" y2="57.89" />
                            </g>
                            <!-- Solution curve y = 0.5x^2 - 1 -->
                            <path d="M 0.00 7.50 L 2.00 7.70 L 4.00 8.30 L 6.00 9.30 L 8.00 10.70 L 10.00 12.50 L 12.00 14.70 L 14.00 17.30 L 16.00 20.30 L 18.00 23.70 L 20.00 27.50 L 22.00 31.70 L 24.00 36.30 L 26.00 41.30 L 28.00 46.70 L 30.00 52.50 L 32.00 58.70 L 34.00 65.30 L 36.00 72.30 L 38.00 79.70 L 40.00 87.50 L 42.00 95.70 L 44.00 104.30 L 46.00 113.30 L 48.00 122.70 L 50.00 132.50 L 52.00 122.70 L 54.00 113.30 L 56.00 104.30 L 58.00 95.70 L 60.00 87.50 L 62.00 79.70 L 64.00 72.30 L 66.00 65.30 L 68.00 58.70 L 70.00 52.50 L 72.00 46.70 L 74.00 41.30 L 76.00 36.30 L 78.00 31.70 L 80.00 27.50 L 82.00 23.70 L 84.00 20.30 L 86.00 17.30 L 88.00 14.70 L 90.00 12.50 L 92.00 10.70 L 94.00 9.30 L 96.00 8.30 L 98.00 7.70 L 100.00 7.50" fill="none" stroke="#ff406f" stroke-width="1.5" style="filter: drop-shadow(0 0 3px #ff406f);" />
                            <circle cx="50" cy="70" r="2" fill="#ff406f" stroke="white" stroke-width="0.5" />
                        </svg>
                    </div>
                </div>
            `
        },
        {
            title: 'Solving by Separation of Variables',
            content: `
                <p>This technique is used for differential equations that can be written in the form <code>dy/dx = f(x)g(y)</code>.</p>
                <p class="font-semibold mt-2">Procedure:</p>
                <ol class="list-decimal list-inside space-y-2">
                    <li><strong>Separate variables:</strong> Rearrange the equation to get all y-terms with dy on one side and all x-terms with dx on the other. <br><code>(1/g(y)) dy = f(x) dx</code></li>
                    <li><strong>Integrate:</strong> Integrate both sides of the equation. <br><code>∫(1/g(y)) dy = ∫f(x) dx</code></li>
                    <li><strong>Add constant of integration:</strong> Include '+ C' on one side (usually the x-side). <br><code>G(y) = F(x) + C</code></li>
                    <li><strong>Solve for C (if initial condition is given):</strong> Plug in the initial (x, y) values to find the value of C for the particular solution.</li>
                    <li><strong>Solve for y:</strong> If possible, rearrange the equation to express y as a function of x.</li>
                </ol>
            `
        },
        {
            title: 'Exponential Growth and Decay',
            content: `
                <p>This model applies when the rate of change of a quantity is directly proportional to the size of the quantity.</p>
                <ul class="list-disc list-inside space-y-2 mt-2">
                    <li><strong>Differential Equation:</strong> <code>dy/dt = ky</code></li>
                    <li><strong>General Solution:</strong> <code>y = Ce<sup>kt</sup></code>, where C is the initial value at t=0.</li>
                    <li>If k > 0, it models exponential growth.</li>
                    <li>If k < 0, it models exponential decay.</li>
                </ul>
            `
        }
      ]
    },
    {
      id: 'u8',
      name: 'Unit 8: Applications of Integration',
      examWeighting: '10–15%',
      classPeriods: '~19–20',
      keyUnderstanding: "This unit applies definite integrals to calculate average values, model particle motion and net change, and determine areas and volumes. You will develop a deep understanding of integration as an accumulation process.",
      bigIdeas: [
        { title: 'Change (CHA)', question: "How is finding the number of visitors to a museum over an interval of time based on information about the rate of entry similar to finding the area of a region between a curve and the x-axis?" }
      ],
      sciencePractices: "You'll identify procedures (1.D, 1.E), identify relationships between representations (2.D), apply definitions/theorems (3.D), and use appropriate notation (4.C, 4.E).",
      examTips: "Distinguish between average value and average rate of change. When setting up integrals for area or volume, clearly show the setup with limits of integration and the differential. Practice identifying whether to integrate with respect to x or y.",
      vocabulary: ['average value of a function', 'displacement', 'total distance traveled', 'area between curves', 'volume of solids'],
      topics: [
        {
          id: 'u8t1',
          name: 'Topic 8.1: Finding the Average Value of a Function on an Interval',
          iCanStatements: [
            {
              id: 'u8t1ic1',
              text: 'I Can: Determine the average value of a function using definite integrals.',
              keyConcepts: [
                { id: 'u8t1ic1kc1', text: "Key Concepts: The average value of a continuous function f over [a,b] is given by the formula." },
                { id: 'u8t1ic1kc2', text: "Formulas: Average Value = [1/(b-a)] * ∫(from a to b)f(x)dx" },
                { id: 'u8t1ic1kc3', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u8t2',
          name: 'Topic 8.2: Connecting Position, Velocity, and Acceleration of Functions Using Integrals',
          iCanStatements: [
            {
              id: 'u8t2ic1',
              text: 'I Can: Determine values for positions and rates of change using definite integrals in problems involving rectilinear motion.',
              keyConcepts: [
                { id: 'u8t2ic1kc1', text: "Key Concepts: The definite integral of velocity is displacement. The definite integral of speed is total distance traveled." },
                { id: 'u8t2ic1kc2', text: "Formulas: Displacement: ∫(from t₁ to t₂)v(t)dt = s(t₂) - s(t₁)" },
                { id: 'u8t2ic1kc3', text: "Formulas: Total Distance Traveled: ∫(from t₁ to t₂)|v(t)|dt" },
                { id: 'u8t2ic1kc4', text: "Suggested Skill: Implementing Mathematical Processes 1.D" }
              ]
            }
          ]
        },
        {
          id: 'u8t3',
          name: 'Topic 8.3: Using Accumulation Functions and Definite Integrals in Applied Contexts',
          iCanStatements: [
            {
              id: 'u8t3ic1',
              text: 'I Can: Interpret the meaning of a definite integral in accumulation problems and determine net change using definite integrals in applied contexts.',
              keyConcepts: [
                { id: 'u8t3ic1kc1', text: "Key Concepts: A function defined as an integral represents accumulation. The definite integral of a rate of change gives the net change." },
                { id: 'u8t3ic1kc2', text: "Suggested Skill: Justification 3.D" }
              ]
            }
          ]
        },
        {
          id: 'u8t4',
          name: 'Topic 8.4: Finding the Area Between Curves Expressed as Functions of x',
          iCanStatements: [
            {
              id: 'u8t4ic1',
              text: 'I Can: Calculate areas in the plane using the definite integral.',
              keyConcepts: [
                { id: 'u8t4ic1kc1', text: "Key Concepts: Areas between curves can be found by integrating the difference between the upper and lower functions." },
                { id: 'u8t4ic1kc2', text: "Formulas: Area = ∫(from a to b)[f(x)-g(x)]dx, where f(x)≥g(x) on [a,b]." },
                { id: 'u8t4ic1kc3', text: "Suggested Skill: Communication and Notation 4.C" }
              ]
            }
          ]
        },
        {
          id: 'u8t5',
          name: 'Topic 8.5: Finding the Area Between Curves Expressed as Functions of y',
          iCanStatements: [
            {
              id: 'u8t5ic1',
              text: 'I Can: Calculate areas in the plane using the definite integral.',
              keyConcepts: [
                { id: 'u8t5ic1kc1', text: "Key Concepts: Areas can be calculated using functions of y by integrating the difference between the rightmost and leftmost functions." },
                { id: 'u8t5ic1kc2', text: "Formulas: Area = ∫(from c to d)[f(y)-g(y)]dy, where f(y)≥g(y) on [c,d]." },
                { id: 'u8t5ic1kc3', text: "Suggested Skill: Implementing Mathematical Processes 1.E" }
              ]
            }
          ]
        },
        {
          id: 'u8t6',
          name: 'Topic 8.6: Finding the Area Between Curves That Intersect at More Than Two Points',
          iCanStatements: [
            {
              id: 'u8t6ic1',
              text: 'I Can: Calculate areas in the plane using the definite integral.',
              keyConcepts: [
                { id: 'u8t6ic1kc1', text: "Key Concepts: Areas may require sums of two or more definite integrals, or integrating the absolute value of the difference of two functions." },
                { id: 'u8t6ic1kc2', text: "Suggested Skill: Connecting Representations 2.B" }
              ]
            }
          ]
        },
        {
          id: 'u8t7',
          name: 'Topic 8.7: Volumes with Cross Sections: Squares and Rectangles',
          iCanStatements: [
            {
              id: 'u8t7ic1',
              text: 'I Can: Calculate volumes of solids with known cross sections using definite integrals.',
              keyConcepts: [
                { id: 'u8t7ic1kc1', text: "Key Concepts: Volumes of solids with square and rectangular cross sections can be found by integrating the area of the cross-section." },
                { id: 'u8t7ic1kc2', text: "Formulas: Volume = ∫(from a to b)A(x)dx or ∫(from c to d)A(y)dy, where A is the area of the cross-section." },
                { id: 'u8t7ic1kc3', text: "Suggested Skill: Justification 3.D" }
              ]
            }
          ]
        },
        {
          id: 'u8t8',
          name: 'Topic 8.8: Volumes with Cross Sections: Triangles and Semicircles',
          iCanStatements: [
            {
              id: 'u8t8ic1',
              text: 'I Can: Calculate volumes of solids with known cross sections using definite integrals.',
              keyConcepts: [
                { id: 'u8t8ic1kc1', text: "Key Concepts: Volumes of solids with triangular, semicircular, or other geometrically defined cross sections are found by integrating their respective area formulas." },
                { id: 'u8t8ic1kc2', text: "Suggested Skill: Justification 3.D" }
              ]
            }
          ]
        },
        {
          id: 'u8t9',
          name: 'Topic 8.9: Volume with Disc Method: Revolving Around the x- or y-Axis',
          iCanStatements: [
            {
              id: 'u8t9ic1',
              text: 'I Can: Calculate volumes of solids of revolution using definite integrals.',
              keyConcepts: [
                { id: 'u8t9ic1kc1', text: "Key Concepts: Volumes of solids of revolution around axes can be found using the disc method." },
                { id: 'u8t9ic1kc2', text: "Formulas: Disc Method (revolving around x-axis): V = π ∫(from a to b)[R(x)]²dx" },
                { id: 'u8t9ic1kc3', text: "Formulas: Disc Method (revolving around y-axis): V = π ∫(from c to d)[R(y)]²dy" },
                { id: 'u8t9ic1kc4', text: "Suggested Skill: Justification 3.D" }
              ]
            }
          ]
        },
        {
          id: 'u8t10',
          name: 'Topic 8.10: Volume with Disc Method: Revolving Around Other Axes',
          iCanStatements: [
            {
              id: 'u8t10ic1',
              text: 'I Can: Calculate volumes of solids of revolution using definite integrals.',
              keyConcepts: [
                { id: 'u8t10ic1kc1', text: "Key Concepts: Volumes of solids of revolution around any horizontal or vertical line can be found using the disc method by adjusting the radius." },
                { id: 'u8t10ic1kc2', text: "Suggested Skill: Connecting Representations 2.D" }
              ]
            }
          ]
        },
        {
          id: 'u8t11',
          name: 'Topic 8.11: Volume with Washer Method: Revolving Around the x- or y-Axis',
          iCanStatements: [
            {
              id: 'u8t11ic1',
              text: 'I Can: Calculate volumes of solids of revolution using definite integrals.',
              keyConcepts: [
                { id: 'u8t11ic1kc1', text: "Key Concepts: Volumes of solids of revolution with ring-shaped cross sections (holes) can be found using the washer method." },
                { id: 'u8t11ic1kc2', text: "Formulas: Washer Method (x-axis): V = π ∫(from a to b)([R(x)]²-[r(x)]²)dx" },
                { id: 'u8t11ic1kc3', text: "Formulas: Washer Method (y-axis): V = π ∫(from c to d)([R(y)]²-[r(y)]²)dy" },
                { id: 'u8t11ic1kc4', text: "Suggested Skill: Communication and Notation 4.E" }
              ]
            }
          ]
        },
        {
          id: 'u8t12',
          name: 'Topic 8.12: Volume with Washer Method: Revolving Around Other Axes',
          iCanStatements: [
            {
              id: 'u8t12ic1',
              text: 'I Can: Calculate volumes of solids of revolution using definite integrals.',
              keyConcepts: [
                { id: 'u8t12ic1kc1', text: "Key Concepts: Volumes of solids of revolution around any horizontal or vertical line with ring-shaped cross sections can be found using the washer method by adjusting the radii." },
                { id: 'u8t12ic1kc2', text: "Suggested Skill: Connecting Representations 2.D" }
              ]
            }
          ]
        }
      ],
      formulas: [
        {
            title: 'Average Value of a Function',
            content: `
                <p>The average value of a function f(x) on an interval [a, b] is given by:</p>
                <p><code>f<sub>avg</sub> = (1 / (b-a)) * ∫<sub>a</sub><sup>b</sup> f(x) dx</code></p>
            `
        },
        {
            title: 'Area Between Curves',
            content: `
                <p>If f(x) and g(x) are continuous functions:</p>
                <ul class="list-disc list-inside space-y-2">
                    <li><strong>Functions of x:</strong> <code>A = ∫<sub>a</sub><sup>b</sup> [upper function - lower function] dx</code></li>
                    <li><strong>Functions of y:</strong> <code>A = ∫<sub>c</sub><sup>d</sup> [right function - left function] dy</code></li>
                </ul>
            `
        },
        {
            title: 'Volumes of Revolution (Disc and Washer Methods)',
            content: `
                <p><strong>General Formula:</strong> The volume of a solid is found by integrating the area of its cross-section: <code>V = ∫ A(x) dx</code> or <code>V = ∫ A(y) dy</code></p>
                <p>For solids of revolution, the cross-sections are circles (discs) or rings (washers).</p>
                <p><strong>Disc Method:</strong> When there is no gap between the region and the axis of revolution.</p>
                <p><code>A = π * (radius)<sup>2</sup></code></p>
                <ul class="list-disc list-inside">
                    <li>Revolving around x-axis: <code>V = ∫<sub>a</sub><sup>b</sup> π [R(x)]<sup>2</sup> dx</code></li>
                </ul>
                <p><strong>Washer (Ring) Method:</strong> When there is a gap between the region and the axis of revolution.</p>
                <p><code>A = π * (Outer Radius)<sup>2</sup> - π * (Inner Radius)<sup>2</sup></code></p>
                <ul class="list-disc list-inside">
                    <li>Revolving around x-axis: <code>V = ∫<sub>a</sub><sup>b</sup> π ([R(x)]<sup>2</sup> - [r(x)]<sup>2</sup>) dx</code></li>
                </ul>
                <p>Note: R(x) is the outer radius (distance from axis to outer curve) and r(x) is the inner radius (distance from axis to inner curve). Formulas are similar for revolution around the y-axis (using functions of y and dy).</p>
            `
        }
      ]
    }
  ]
};

const unitColors = [
  '#3dff57',
  '#ff40ff',
  '#40ffff',
  '#ffff40',
  '#ff8f40',
  '#bf40ff',
  '#ff406f',
  '#40ffaf'
];

const totalWeight = rawCourseData.units.reduce((acc, unit) => {
    const weightRange = unit.examWeighting.replace(/–/g, '-').replace('%', '').split('-').map(Number);
    const avgWeight = (weightRange[0] + (weightRange[1] || weightRange[0])) / 2;
    return acc + avgWeight;
}, 0);


export const courseData: CourseData = {
  units: rawCourseData.units.map((unit, index) => {
    const weightRange = unit.examWeighting.replace(/–/g, '-').replace('%', '').split('-').map(Number);
    const avgWeight = (weightRange[0] + (weightRange[1] || weightRange[0])) / 2;
    return {
      ...unit,
      color: unitColors[index % unitColors.length],
      normalizedWeight: avgWeight / totalWeight,
      formulas: unit.formulas || [],
    };
  }),
};