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
    slug: "blood-pressure",
    title: "Blood Pressure",
    description: "Add description here.",
    image: "/images/disaster-doctor/flooded-lobby.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "What is systolic blood pressure?",
        multipleChoiceOptions: [
          { text: "The top number in a blood pressure measurement - the pressure when the heart beats", image: "/images/SystolicBloodPressure.png" },
          { text: "The bottom number in a blood pressure measurement - the pressure when the heart is resting", image: "/images/DiastolicBloodPressure.png" },
        ],
        feedbackImage: "/images/SystolicBloodPressure.png",
        multipleChoiceAnswer: "The top number in a blood pressure measurement - the pressure when the heart beats",
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "What is diastolic blood pressure?",
        multipleChoiceOptions: [
          { text: "The top number in a blood pressure measurement - the pressure when the heart beats", image: "/images/SystolicBloodPressure.png" },
          { text: "The bottom number in a blood pressure measurement - the pressure when the heart is resting", image: "/images/DiastolicBloodPressure.png" },
        ],
        feedbackImage: "/images/DiastolicBloodPressure.png",
        multipleChoiceAnswer: "The bottom number in a blood pressure measurement - the pressure when the heart is resting",
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "What is hypertension?",
        multipleChoiceOptions: [
          { text: "When the average of multiple blood pressure measurements obtained on two or more occasions is >= 130 mm HG systolic or >= 80 mm Hg diastolic", image: "/images/Hypertension.png" },
          { text: "When the average of multiple blood pressure measurements obtained on two or more occasions is < 90 mm HG systolic or < 60 mm Hg diastolic", image: "/images/DiastolicBloodPressure.png" },
        ],
        feedbackImage: "/images/Hypertension.png",
        multipleChoiceAnswer: "When the average of multiple blood pressure measurements obtained on two or more occasions is >= 130 mm HG systolic or >= 80 mm Hg diastolic",
      },

      {
        id: 4,
        type: "multiple-choice",
        question: "What are Koorotkoff sounds?",
        multipleChoiceOptions: [{ text: "Blood flow sounds heard using a stethoscope when taking blood pressure manually", image: "" }],
        feedbackImage: "",
        multipleChoiceAnswer: "Blood flow sounds heard using a stethoscope when taking blood pressure manually",
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Which is the Radial Pulse?",
        multipleChoiceOptions: [
          { text: "The heartbeat palpated over the radial artery in the wrist", image: "/images/RadialPulse.png" },
          { text: "The triangular depression in the inner elbow", image: "/images/AntecubitalFossa.png" },
          { text: "The major artery of the upper arm which travels through the antecubital fossa", image: "/images/BrachialArtery.png" },
        ],
        feedbackImage: "/images/RadialPulse2.png",
        multipleChoiceAnswer: "The heartbeat palpated over the radial artery in the wrist",
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "Which is the Antecubital Fossa?",
        multipleChoiceOptions: [
          { text: "The heartbeat palpated over the radial artery in the wrist", image: "/images/RadialPulse.png" },
          { text: "The triangular depression in the inner elbow", image: "/images/AntecubitalFossa.png" },
          { text: "The major artery of the upper arm which travels through the antecubital fossa", image: "/images/BrachialArtery.png" },
        ],
        feedbackImage: "/images/AntecubitalFossa.png",
        multipleChoiceAnswer: "The triangular depression in the inner elbow",
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "Which is the Brachial Artery?",
        multipleChoiceOptions: [
          { text: "The heartbeat palpated over the radial artery in the wrist", image: "/images/RadialPulse.png" },
          { text: "The triangular depression in the inner elbow", image: "/images/AntecubitalFossa.png" },
          { text: "The major artery of the upper arm which travels through the antecubital fossa", image: "/images/BrachialArtery.png" },
        ],
        feedbackImage: "/images/BrachialArtery.png",
        multipleChoiceAnswer: "The major artery of the upper arm which travels through the antecubital fossa",
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "Which arm(s) should you measure bood pressure on a patient's first visit?",
        multipleChoiceOptions: [
          { text: "Left Arm", image: "" },
          { text: "Right Arm", image: "" },
          { text: "Both Arms", image: "" },
        ],
        feedbackImage: "",
        multipleChoiceAnswer: "Both Arms",
      },

      {
        id: 8,
        type: "multiple-choice",
        question: "Which arm(s) should you measure bood pressure on a patient's subsequent visit?",
        multipleChoiceOptions: [
          { text: "Left Arm", image: "" },
          { text: "Right Arm", image: "" },
          { text: "Both Arm", image: "" },
          { text: "Arm with previous higher readings", image: "" },
        ],
        feedbackImage: "",
        multipleChoiceAnswer: "Arm with previous higher readings",
      },

      {
        id: 9,
        type: "multiple-choice",
        question: "What is the minimum number of minutes to wait between blood pressure measurements at a patient's subsequent visit??",
        multipleChoiceOptions: [
          { text: "1-2 minutes", image: "" },
          { text: "2-3 minutes", image: "" },
          { text: "5 minutes", image: "" },
          { text: "30 minutes", image: "" },
        ],
        feedbackImage: "",
        multipleChoiceAnswer: "1-2 minutes",
      },

      {
        id: 10,
        type: "multiple-choice",
        question: "How long should patients refrain from caffeine, smoking, and exercise before a blood pressure measurement appointment?",
        multipleChoiceOptions: [
          { text: "1-2 minutes", image: "" },
          { text: "2-3 minutes", image: "" },
          { text: "5 minutes", image: "" },
          { text: "30 minutes", image: "" },
        ],
        feedbackImage: "",
        multipleChoiceAnswer: "30 minutes",
      },

      {
        id: 11,
        type: "multiple-choice",
        question: "How long should patients rest without using their mobile device before measurement?",
        multipleChoiceOptions: [
          { text: "1-2 minutes", image: "" },
          { text: "2-3 minutes", image: "" },
          { text: "5 minutes", image: "" },
          { text: "30 minutes", image: "" },
        ],
        feedbackImage: "",
        multipleChoiceAnswer: "5 minutes",
      },

      {
        id: 12,
        type: "multiple-choice",
        question: "What is AIDET?",
        multipleChoiceOptions: [{ text: "Acknowledge, Introduce, Duration, Explanation, Thank You", image: "" }],
        feedbackImage: "",
        feedbackText: `1. Knock on Door
        2. Hand Hygiene
        3. ACKNOWLEDGE: Greet patient by name. Make eye contact, smile, and acknowledge family or friends in the room.
        4. INTRODUCE: give my first name, state my role, explain I'm taking vital, .
        5. DURATION: indicate it will take 15 minutes. 
        6. EXPLANATION: Explain process.  Ask if questions.
        6. Tell me your full name and date of birth.  Check their wrist band.
        7. Do Vitals.
        8. Ask if questions.
        9. THANK YOU: Thank the patient and/or family.
        10. Hand hygiene`,
        multipleChoiceAnswer: "Acknowledge, Introduce, Duration, Explanation, Thank You",
      },
    ],
  },

  {
    slug: "comprehensive-heatlh-assessment",
    title: "Comprehensive Health Assessment",
    description: "Add description here.",
    image: "/images/disaster-doctor/flooded-lobby.png",
    questions: [
      {
        id: 12,
        type: "multiple-choice",
        question: "What is AIDET?",
        multipleChoiceOptions: [{ text: "Acknowledge, Introduce, Duration, Explanation, Thank You", image: "" }],
        feedbackImage: "",
        feedbackText: `ACKNOWLEDGE: Greet the patient by name. Make eye contact, smile, and acknowledge family or friends in the room.
INTRODUCE: Introduce yourself with your name, skill set, professional certification, and experience.
DURATION: Give an accurate time expectation for tests, physician arrival, and identify next steps. When this is not possible, give a time in which you will update the patient on progress.
EXPLANATION: Explain step-by-step what to expect next, answer questions, and let the patient know how to contact you, such as a nurse call button.
THANK YOU: Thank the patient and/or family. You might express gratitude to them for choosing your hospital or for their communication and cooperation. Thank family members for being there to support the patient.        `,
        multipleChoiceAnswer: "Acknowledge, Introduce, Duration, Explanation, Thank You",
      },
    ],
  },
];
