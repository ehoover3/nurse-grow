type QuestionType = {
  id: number;
  type: "multiple-choice" | "matching" | "word-order" | "rpg-interaction";
  question: string;

  tooltipTerms?: { label: string; meaning: string }[];

  // ───────────────
  // Multiple Choice
  // ───────────────
  multipleChoiceOptions?: { text: string; image: string }[];
  multipleChoiceAnswer?: string;

  // ─────────
  // Matching
  // ─────────
  matchingPairs?: { left: string; right: string }[];

  // ───────────────
  // Word / Sequence
  // ───────────────
  sequentialOrderWordBank?: { text: string; image?: string }[];
  sequentialOrderAnswer?: string[];

  // ───────────────
  // RPG Interaction
  // ───────────────

  rpgObjects?: RPGObject[];
  rpgRequiredInteractions?: number;

  // ─────────
  // Feedback
  // ─────────
  feedbackImage?: string;
  feedbackText?: string;
};

type RPGChoice = {
  text: string;
  correct: boolean;
  explanation: string;
};

type SpritePortrait = {
  src: string; // sprite sheet image
  x: number; // pixel X in sheet
  y: number; // pixel Y in sheet
  width: number; // visible width
  height: number; // visible height
};

type RPGObject = {
  id: string;
  label: string;
  dialogue: string[];
  portrait?: SpritePortrait;
  mapSprite?: any;
  gridX: number;
  gridY: number;
  choices?: RPGChoice[];
};

export type QuizType = {
  slug: string;
  title: string;
  description: string;
  image: string;
  questions: QuestionType[];
};

export const quizzes: QuizType[] = [
  {
    slug: "health-assessment-exam1",
    title: "Health Assessment Exam 1",
    description: "Add description here.",
    image: "/images/disaster-doctor/flooded-lobby.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "The nurse is interviewing the client and asks the client what brought the client to the physician’s office.  The client states, “I have been nauseated for three days.”  How will the nurse categorize this information?",
        multipleChoiceOptions: [
          { text: "Chief complaint", image: "" },
          { text: "Physical exam", image: "" },
          { text: "Past Health History", image: "" },
          { text: "Context of care", image: "" },
        ],
        multipleChoiceAnswer: "Chief complaint",
      },

      {
        id: 2,
        type: "multiple-choice",
        question: "The nurse is completing a diagram of the client’s family history.  Which of the following is a visual representation of family history?",
        multipleChoiceOptions: [
          { text: "Chief complaint", image: "" },
          { text: "Genogram", image: "" },
          { text: "Reflection", image: "" },
          { text: "Review of systems", image: "" },
        ],
        multipleChoiceAnswer: "Genogram",
        feedbackText: "Genograms are not helpful for the elderly, but are for pediatrics.",
      },

      {
        id: 3,
        type: "multiple-choice",
        question: "The nurse is interviewing the client and is giving the client full attention.  This is an example of?",
        multipleChoiceOptions: [
          { text: "Active listening", image: "" },
          { text: "Facilitation (uh-huh,  mmm)", image: "" },
          { text: "Reflection", image: "" },
          { text: "Clarification", image: "" },
          { text: "Confrontation", image: "" },
        ],
        multipleChoiceAnswer: "Active listening",
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "The nurse is collecting objective data.  The most efficient way to collect this information is through which assessment?",
        multipleChoiceOptions: [
          { text: "Reflection", image: "" },
          { text: "Physical assessment", image: "" },
          { text: "Health History", image: "" },
          { text: "Facilitation", image: "" },
        ],
        multipleChoiceAnswer: "Physical assessment",
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "The nurse is documenting in the electronic record. The nurse understands that this is referred to as:",
        multipleChoiceOptions: [
          { text: "The legal permanent record", image: "" },
          { text: "The shift assessment", image: "" },
          { text: "The genogram", image: "" },
          { text: "The review of systems", image: "" },
        ],
        multipleChoiceAnswer: "The legal permanent record",
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "The patient makes the following statement to the nurse: “I work out, eat healthy, and take vitamins every day.”  The nurse understands that the client is practicing which health maintenance technique?",
        multipleChoiceOptions: [
          { text: "Health advancement", image: "" },
          { text: "Health promotion", image: "" },
          { text: "Clinical judgement", image: "" },
          { text: "Tertiary prevention", image: "" },
        ],
        multipleChoiceAnswer: "Health promotion",
      },

      {
        id: 7,
        type: "multiple-choice",
        question: "The nurse is collecting information regarding the client’s perception of overall health status through the review of systems.  The nurse understands that the information collected with this technique would be considered____.",
        multipleChoiceOptions: [
          { text: "Subjective data", image: "" },
          { text: "Chief complaint", image: "" },
          { text: "Secondary data", image: "" },
          { text: "Objective data", image: "" },
        ],
        multipleChoiceAnswer: "Subjective data",
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "The nurse is collecting data on the client’s symptoms and chief complaint.  These are all components of:",
        multipleChoiceOptions: [
          { text: "Confrontation", image: "" },
          { text: "The Physical Exam", image: "" },
          { text: "Facilitation", image: "" },
          { text: "The History of Present Illness", image: "" },
        ],
        multipleChoiceAnswer: "The History of Present Illness",
      },

      {
        id: 9,
        type: "multiple-choice",
        question: "Which communication technique would the nurse utilize to encourage the client to continue speaking?",
        multipleChoiceOptions: [
          { text: "Active listening", image: "" },
          { text: "Facilitation", image: "" },
          { text: "Reflection", image: "" },
          { text: "Confrontation", image: "" },
        ],
        multipleChoiceAnswer: "Facilitation",
      },

      {
        id: 10,
        type: "multiple-choice",
        question: "A 50-year-old client has scheduled an appointment for a colonoscopy. This is an example of?",
        multipleChoiceOptions: [
          { text: "Primary prevention", image: "" },
          { text: "Tertiary prevention", image: "" },
          { text: "Secondary prevention", image: "" },
          { text: "Quaternary prevention", image: "" },
        ],
        multipleChoiceAnswer: "Secondary prevention",
      },
    ],
  },
];
