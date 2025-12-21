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
  feedbackExplanation?: string;
};

type RPGChoice = {
  text: string;
  correct: boolean;
  explanation: string;
};

type RPGObject = {
  id: string;
  label: string;
  dialogue: string[];
  portrait?: string;
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
    slug: "disaster-doctor-floor-1",
    title: "Disaster Doctor: Rising Waters",
    description: "Heavy rain is flooding the lower floors. Use anatomy and physiology to assess and stabilize residents before it’s too late.",
    image: "/images/disaster-doctor/flooded-lobby.png",
    questions: [
      {
        id: 1,
        type: "rpg-interaction",
        question: "Floodwater is pouring into the lobby. Several residents are trapped. Move through the area and assess what’s happening inside their bodies.",
        rpgRequiredInteractions: 3,
        rpgObjects: [
          {
            id: "panicked-resident",
            label: "Panicked Resident",
            portrait: "/images/characters/PanickedResident.png",
            gridX: 2,
            gridY: 3,
            dialogue: ["I can’t catch my breath!", "My heart is racing!"],
            choices: [
              {
                text: "Sympathetic nervous system activation",
                correct: true,
                explanation: "Stress activates the sympathetic nervous system, releasing adrenaline and increasing heart rate and breathing.",
              },
              {
                text: "Parasympathetic dominance",
                correct: false,
                explanation: "The parasympathetic system slows the heart and promotes rest, which does not match these symptoms.",
              },
              {
                text: "Respiratory infection",
                correct: false,
                explanation: "There are no signs of infection such as fever or cough.",
              },
              {
                text: "Cardiac muscle failure",
                correct: false,
                explanation: "This presentation fits acute stress, not heart failure.",
              },
            ],
          },
          {
            id: "injured-leg",
            label: "Resident with Injured Leg",
            portrait: "/images/characters/InjuredResident.png",
            gridX: 6,
            gridY: 4,
            dialogue: ["I slipped and can’t stand up.", "My leg won’t support me."],
            choices: [
              {
                text: "Disrupted neuromuscular signaling",
                correct: true,
                explanation: "Movement requires intact nerve signaling and muscle contraction. Injury can disrupt this pathway.",
              },
              {
                text: "Lung hypoxia",
                correct: false,
                explanation: "There are no respiratory symptoms.",
              },
              {
                text: "Digestive system failure",
                correct: false,
                explanation: "Digestion is unrelated to leg movement.",
              },
              {
                text: "Hormonal imbalance",
                correct: false,
                explanation: "This injury is acute and mechanical, not endocrine.",
              },
            ],
          },
          {
            id: "electrical-panel",
            label: "Flooded Electrical Panel",
            gridX: 8,
            gridY: 1,
            dialogue: ["Water crackles around exposed wiring."],
            choices: [
              {
                text: "Electrical signaling depends on ion movement",
                correct: true,
                explanation: "Nerves rely on controlled ion flow across membranes, similar to electrical circuits.",
              },
              {
                text: "Bones generate electricity",
                correct: false,
                explanation: "Bones do not generate electrical signals.",
              },
              {
                text: "Blood conducts nerve impulses",
                correct: false,
                explanation: "Nerve impulses travel along neurons, not through blood.",
              },
              {
                text: "Muscles fire independently of nerves",
                correct: false,
                explanation: "Muscles require nerve input to contract.",
              },
            ],
          },
        ],
        feedbackExplanation: "You stabilized the lobby by identifying how stress, injury, and electrical signaling affect the human body.",
      },

      {
        id: 2,
        type: "rpg-interaction",
        question: "The water reaches knee height. A resident collapses near the stairwell. Others feel weak and cold. Assess the circulatory system.",
        rpgRequiredInteractions: 3,
        rpgObjects: [
          {
            id: "collapsed-resident",
            label: "Collapsed Resident",
            portrait: "/images/characters/CollapsedResident.png",
            gridX: 4,
            gridY: 3,
            dialogue: ["I feel dizzy… everything is spinning.", "My hands feel cold."],
            choices: [
              {
                text: "Early circulatory shock",
                correct: true,
                explanation: "Low blood pressure reduces oxygen delivery, causing dizziness, weakness, and cold extremities.",
              },
              {
                text: "Primary lung infection",
                correct: false,
                explanation: "There are no respiratory or infectious signs.",
              },
              {
                text: "Digestive upset",
                correct: false,
                explanation: "GI issues do not cause collapse or cold extremities.",
              },
              {
                text: "Normal stress response",
                correct: false,
                explanation: "Collapse indicates a pathological process.",
              },
            ],
          },
          {
            id: "rapid-pulse",
            label: "Resident with Rapid Pulse",
            portrait: "/images/characters/RapidPulse.png",
            gridX: 1,
            gridY: 4,
            dialogue: ["My heart won’t slow down!"],
            choices: [
              {
                text: "Compensatory tachycardia",
                correct: true,
                explanation: "The heart beats faster to maintain blood flow during low pressure states.",
              },
              {
                text: "Normal athletic conditioning",
                correct: false,
                explanation: "Athletic hearts beat slower at rest.",
              },
              {
                text: "Respiratory alkalosis",
                correct: false,
                explanation: "No breathing-related pH disturbance is evident.",
              },
              {
                text: "Cardiac arrest",
                correct: false,
                explanation: "The heart is clearly beating.",
              },
            ],
          },
          {
            id: "cold-water",
            label: "Cold Floodwater",
            gridX: 8,
            gridY: 2,
            dialogue: ["The water is painfully cold."],
            choices: [
              {
                text: "Peripheral vasoconstriction",
                correct: true,
                explanation: "Blood vessels constrict to preserve core temperature.",
              },
              {
                text: "Vasodilation",
                correct: false,
                explanation: "Vasodilation increases heat loss.",
              },
              {
                text: "Increased sweating",
                correct: false,
                explanation: "Sweating occurs with heat, not cold.",
              },
              {
                text: "Digestive activation",
                correct: false,
                explanation: "Cold stress suppresses digestion.",
              },
            ],
          },
        ],
        feedbackExplanation: "You identified early shock and compensatory responses. As flooding worsens, circulation becomes increasingly fragile.",
      },
    ],
  },
];
