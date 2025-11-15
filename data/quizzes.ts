// data/quizzes.ts
export type Question = {
  question: string;
  options: string[];
  answer: string;
};

export type Quiz = {
  slug: string;
  title: string;
  description: string;
  image: string;
  questions: Question[];
};

export const quizzes: Quiz[] = [
  {
    slug: "anatomy-basics",
    title: "Anatomy Basics",
    description: "Learn organs, systems, and body parts.",
    image: "/images/anatomy.png",
    questions: [
      {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Skin", "Heart", "Brain"],
        answer: "Skin",
      },
      {
        question: "How many chambers does the human heart have?",
        options: ["2", "3", "4", "5"],
        answer: "4",
      },
      {
        question: "Which system is responsible for transporting blood?",
        options: ["Respiratory", "Circulatory", "Digestive", "Nervous"],
        answer: "Circulatory",
      },
    ],
  },
  {
    slug: "pharmacology-1",
    title: "Pharmacology I",
    description: "Intro to medications, effects, and safety.",
    image: "/images/pills.png",
    questions: [
      {
        question: "Which route of drug administration is the fastest?",
        options: ["Oral", "Intravenous", "Topical", "Subcutaneous"],
        answer: "Intravenous",
      },
      {
        question: "What does the term 'half-life' refer to in pharmacology?",
        options: ["Time for drug to be excreted completely", "Time for drug to reach bloodstream", "Time for half of the drug to be eliminated", "Time for full therapeutic effect"],
        answer: "Time for half of the drug to be eliminated",
      },
      {
        question: "Which organ primarily metabolizes drugs?",
        options: ["Kidneys", "Liver", "Lungs", "Spleen"],
        answer: "Liver",
      },
    ],
  },
  {
    slug: "medical-terminology",
    title: "Medical Terminology",
    description: "Roots, prefixes, and common medical words.",
    image: "/images/medical-terms.png",
    questions: [
      {
        question: "What does 'cardio-' mean?",
        options: ["Lung", "Heart", "Blood", "Muscle"],
        answer: "Heart",
      },
      {
        question: "What does '-itis' indicate?",
        options: ["Inflammation", "Tumor", "Disease", "Condition"],
        answer: "Inflammation",
      },
      {
        question: "What does 'hypo-' mean?",
        options: ["Above", "Below", "Normal", "Without"],
        answer: "Below",
      },
    ],
  },
  {
    slug: "physiology-basics",
    title: "Human Physiology Basics",
    description: "Learn about body functions and systems.",
    image: "/images/physiology.png",
    questions: [
      {
        question: "Which organ filters blood and produces urine?",
        options: ["Liver", "Kidneys", "Heart", "Pancreas"],
        answer: "Kidneys",
      },
      {
        question: "What part of the brain controls balance and coordination?",
        options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
        answer: "Cerebellum",
      },
      {
        question: "Which blood cells help fight infections?",
        options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
        answer: "White blood cells",
      },
    ],
  },
];
