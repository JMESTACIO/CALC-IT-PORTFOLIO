// data.js - the list of artifacts shown in the Learning Artifacts section.
const artifacts = [
    {
        type: "Activities",
        topic: "Functions and Function Operations",
        title: "Activity: Composition of Functions",
        score: "25 / 25",
        description: "I added, subtracted, and multiplied two functions, then found both compositions f∘g and g∘f.",
        example: [
            "Given f(x) = x + 5 and g(x) = 3x − 2",
            "",
            "(f∘g)(x) = f(3x − 2)",
            "         = (3x − 2) + 5",
            "         = 3x + 3",
            "",
            "(g∘f)(x) = g(x + 5)",
            "         = 3(x + 5) − 2",
            "         = 3x + 13"
        ],
        reflection: "This activity is about combining functions using +, −, ×, and composition. What I understood is that (f∘g)(x) means putting g(x) inside f, so the order matters. f∘g and g∘f usually give different answers. Multiplying needed careful expanding of binomials, where sign mistakes are easy to make. Writing each substitution on its own line helped me check my work. I got 25/25, so I think I handled the operations well. In programming this is like passing the output of one function into another function."
    },

    {
        type: "Projects",
        topic: "Functions and Function Operations",
        title: "Group Project: Calculus Poster",
        score: "50 / 50",
        description: "A group poster showing five function operation problems with their solutions.",
        image: "images/poster.jpg",
        reflection: "For the poster, our group explained five function operation problems step by step. Explaining the steps made me check if I really understood them, because I had to say why each line works. Composition was the part that needed the most care, since the inner and outer function have to go in the right order. The poster lists every member of the group, so it shows teamwork and not only my own work. This is like web development, where small functions are chained together to change data."
    },

    {
        type: "Activities",
        topic: "Limits",
        title: "Activity: Evaluating Limits",
        score: "19 / 25",
        description: "Limit problems solved by plugging in the number, factoring, and using the conjugate to fix a 0/0 form.",
        example: [
            "lim x→16 (x − 16)/(√x − 4)",
            "Substituting gives 0/0, so multiply by the conjugate (√x + 4):",
            "= (x − 16)(√x + 4) / (x − 16)",
            "= √x + 4",
            "= √16 + 4 = 8",
            "",
            "lim x→5 (x − 5)/(x² − 25)",
            "= (x − 5)/((x − 5)(x + 5)) = 1/(x + 5) = 1/10"
        ],
        reflection: "This activity shows how to find limits when plugging in the number doesn't work. When I get 0/0, the expression is indeterminate, so I have to rewrite it first by factoring and canceling a common factor, or by multiplying by the conjugate to remove a square root. What I understood is that a limit is about where the function is going, not always its value at that point. I got 19/25, so I lost points on some items. The method I should double-check is the conjugate, because expanding the product wrong is an easy way to lose a point. Programs that repeat a step until a value settles use the same idea."
    },

    {
        type: "Projects",
        topic: "Limits",
        title: "Group Project: Calculus Card Deck",
        score: "50 / 50",
        description: "A deck of limit flashcards, with a problem on the front and the worked solution on the back.",
        image: "images/card-deck.jpg",
        gallery: [
            "images/card-deck-1.jpg",
            "images/card-deck-2.jpg",
            "images/card-deck-3.jpg",
            "images/card-deck-4.jpg",
            "images/card-deck-5.jpg",
            "images/card-deck-6.jpg",
            "images/card-deck-7.jpg",
            "images/card-deck-8.jpg",
            "images/card-deck-9.jpg",
            "images/card-deck-10.jpg"
        ],
        reflection: "Our group made flashcards on limits, with a problem on the front and the solution on the back. To fit a solution on a small card, we had to pick only the important steps of each technique, like factoring, the conjugate, or plugging in. The deck covers direct substitution, factoring, and conjugate cards, so it includes the limit techniques from class. Cards like these are also good for reviewing before an exam. In programming, a flashcard is a bit like a lookup table: a ready answer for a known input."
    },

    {
        type: "Activities",
        topic: "Rules of Differentiation",
        title: "Activity: Basic Differentiation Rules",
        score: "20 / 20",
        description: "Short exercises using the constant, power, sum, and difference rules.",
        example: [
            "y = 5x⁴ + 3x² − 7",
            "Power rule on each term, constant rule on −7:",
            "y' = 5(4x³) + 3(2x) − 0",
            "y' = 20x³ + 6x",
            "",
            "y = 3x⁻⁴",
            "y' = −12x⁻⁵ = −12/x⁵"
        ],
        reflection: "This activity covered the constant, power, sum, and difference rules. I learned that for a polynomial you differentiate each term separately: multiply by the exponent, then lower the exponent by one. Negative exponents were the tricky part, because the exponent gets more negative and the answer is usually written as a fraction. I scored 20/20, so these rules were solid. The details worth checking are the sign and the new exponent, like in 3x⁻⁴. Derivatives measure how fast something changes, which is the idea behind speed and growth in software."
    },

    {
        type: "Activities",
        topic: "Rules of Differentiation",
        title: "Activity: Product Rule, Quotient Rule and Fractional Exponents",
        score: "45 / 45",
        description: "Rewrote roots as fractional exponents, then used the product and quotient rules.",
        example: [
            "y = (x + 2)(x² + 3)",
            "u = x + 2, v = x² + 3",
            "u' = 1, v' = 2x",
            "y' = u·v' + v·u'",
            "   = (x + 2)(2x) + (x² + 3)(1)",
            "   = 3x² + 4x + 3",
            "",
            "y = √x = x^(1/2)",
            "y' = (1/2)x^(−1/2) = 1/(2√x)"
        ],
        reflection: "This activity was about the product and quotient rules and rewriting roots as fractional exponents. I learned to label u and v before differentiating so I don't mix up the parts. The quotient rule needs more care because the order in the numerator matters, and switching it gives the wrong sign. Rewriting a square root as x^(1/2) lets me use the power rule on it. I scored 45/45 on this activity, which showed me the labeling habit works. Combined and curved quantities in graphics and animation need derivatives like this."
    },

    {
        type: "Activities",
        topic: "Rules of Differentiation",
        title: "Activity: The Chain Rule",
        score: "20 / 20",
        description: "Differentiated composite functions by finding the derivative of the inner function and multiplying it by the derivative of the outer one.",
        example: [
            "y = (2x + 3)⁵",
            "outer: ( )⁵   inner: 2x + 3",
            "y' = 5(2x + 3)⁴ · (2)",
            "y' = 10(2x + 3)⁴",
            "",
            "y = (x² + 4)³",
            "y' = 3(x² + 4)² · (2x) = 6x(x² + 4)²"
        ],
        reflection: "The chain rule is for a function inside another function. My method is to take the derivative of the outer function and keep the inside the same, then multiply by the derivative of the inside. The most common mistake is forgetting the inner derivative, so I write it on its own line. For example, (2x + 3)⁵ needs an extra factor of 2. I scored 20/20. The chain rule is also the basis of backpropagation in machine learning, which connects to my field."
    },

    {
        type: "Examinations",
        topic: "Examinations",
        title: "Prelim Examination: Answer Sheet",
        score: "41 / 50",
        description: "Multiple-choice exam on the prelim topics.",
        example: [
            "",
            "1. If f(x) = 2x + 1 and g(x) = x − 4, then (f + g)(x) = ?",
            "   A) 3x − 3   B) 3x + 5",
            "   C) 2x − 3   D) x − 3",
            "   Answer: A",
            "",
            "2. With the same f and g, (f∘g)(x) = ?",
            "   A) 2x − 3   B) 2x − 7",
            "   C) 2x + 5   D) 2x − 8",
            "   Answer: B",
            "",
            "3. lim x→3 (x² − 9)/(x − 3) = ?",
            "   A) 0   B) 3",
            "   C) 6   D) does not exist",
            "   Answer: C",
            "",
            "4. lim x→∞ (3x + 7)/(x² + 5) = ?",
            "   A) 0   B) 3",
            "   C) 7/5   D) ∞",
            "   Answer: A"
        ],
        exampleTitle: "Sample questions on functions and limits",
        caption: "Sample questions of this type. Not the actual exam items.",
        tall: true,
        reflection: "The prelim tested the first topics under time pressure. It showed me that I can handle the usual function operations and limits, but my speed and accuracy on multiple-choice items still need work. I scored 41/50 (82%), which means I lost 9 points. The prelim included limit problems, which is also where my activity score was lowest. Using scratch work for the computation items helped me avoid just guessing. Checking my work step by step is also a habit that helps when I debug code."
    },

    {
        type: "Examinations",
        topic: "Examinations",
        title: "Midterm Examination: Answer Sheet",
        score: "26 / 50",
        description: "Multiple-choice exam on the midterm topics.",
        example: [
            "",
            "1. d/dx (5x⁴ − 3x² + 7) = ?",
            "   A) 20x³ − 6x   B) 20x³ − 6",
            "   C) 5x³ − 3x   D) 20x⁴ − 6x²",
            "   Answer: A",
            "",
            "2. Product rule: y = (x + 1)(x² − 2), y' = ?",
            "   A) 2x   B) 3x² + 2x − 2",
            "   C) 3x² − 2   D) x³ + x² − 2",
            "   Answer: B",
            "",
            "3. Quotient rule: y = x/(x + 1), y' = ?",
            "   A) 1/(x + 1)²   B) x/(x + 1)²",
            "   C) 1   D) −1/(x + 1)²",
            "   Answer: A",
            "",
            "4. Chain rule: y = (3x − 1)⁴, y' = ?",
            "   A) 4(3x − 1)³   B) 12(3x − 1)³",
            "   C) 12x(3x − 1)³   D) 3(3x − 1)⁴",
            "   Answer: B"
        ],
        exampleTitle: "Sample questions on differentiation",
        caption: "Sample questions of this type. Not the actual exam items.",
        tall: true,
        reflection: "The midterm covered the midterm topics, including the differentiation rules. Compared with the activities, I had to pick the right rule myself instead of being told which one to use. I scored 26/50 (52%), lower than my 41/50 on the prelim. That is a drop of 15 points. The likely reason is that the midterm mixed several differentiation rules, so choosing the right one without notes was harder than doing one rule at a time. My next step is to practice mixed problems without notes. Going over wrong answers is a lot like reading error messages and fixing the cause."
    },

    {
        type: "Projects",
        topic: "Calculus in IT and Web Development",
        title: "Group Project: Calculus Infographic Video",
        score: "100 / 100",
        description: "A group video about how Calculus connects to IT and web development.",
        video: "images/infographic.mp4",
        link: "",
        reflection: "This group video explains how Calculus connects to IT and web development. To make it, we had to go from solving problems to explaining why they matter, using ideas like rates of change in animation and optimization in performance. Keeping it simple for people who haven't studied Calculus meant using one clear example for each idea. The infomercial was a group project, so it reflects the whole group's work. It showed me that derivatives are tools I can actually use as a developer."
    }
];
