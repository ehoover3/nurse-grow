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

type RPGObject = {
  id: string;
  label: string;
  dialogue: string[];
  portrait?: string;

  gridX: number; // column
  gridY: number; // row
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
    description: "Heavy rain is flooding the lower floors. Learn how the human body responds to stress, injury, and movement under pressure.",
    image: "/images/disaster-doctor/flooded-lobby.png",
    questions: [
      {
        id: 1,
        type: "rpg-interaction",
        question: "Floodwater is pouring into the lobby. Several residents are trapped on Floor 1. Move through the area and assess what’s going wrong inside their bodies before the water rises higher.",
        rpgRequiredInteractions: 3,
        rpgObjects: [
          {
            id: "panicked-resident",
            label: "Panicked Resident",
            portrait: "/images/characters/PanickedResident.png",
            gridX: 2,
            gridY: 3,
            dialogue: ["I can’t catch my breath!", "My heart is racing and I feel dizzy!", "When the body senses danger, the sympathetic nervous system activates.", "This releases adrenaline, increasing heart rate and breathing to prepare for survival."],
          },
          {
            id: "injured-leg",
            label: "Resident with Injured Leg",
            portrait: "/images/characters/InjuredResident.png",
            gridX: 6,
            gridY: 4,
            dialogue: ["I slipped when the water rushed in!", "I can’t stand up—my leg won’t support me.", "Skeletal muscles contract when nerves release signals at the neuromuscular junction.", "If nerves, muscles, or blood flow are disrupted, movement becomes weak or impossible."],
          },
          {
            id: "electrical-panel",
            label: "Flooded Electrical Panel",
            gridX: 8,
            gridY: 1,
            dialogue: ["Sparks flash as water reaches exposed wiring.", "Electrical signals in the human body rely on controlled ion movement across membranes.", "Just like faulty wiring, disrupted electrical signaling in nerves can cause serious dysfunction."],
          },
        ],
        feedbackImage: "/images/disaster-doctor/evacuation.png",
        feedbackExplanation: "You stabilized the situation by understanding how stress, muscle control, and electrical signaling affect the body. These systems will become even more critical as the flood rises.",
      },
      {
        id: 2,
        type: "rpg-interaction",
        question: "The water has reached knee height. A resident collapses near the stairwell, and others report feeling weak and cold. Move quickly to assess what’s failing inside their bodies.",
        rpgRequiredInteractions: 3,
        rpgObjects: [
          {
            id: "collapsed-resident",
            label: "Collapsed Resident",
            portrait: "/images/characters/CollapsedResident.png",
            gridX: 4,
            gridY: 3,
            dialogue: ["I feel lightheaded… everything is spinning.", "My hands are cold and I feel weak.", "When blood pressure drops, organs receive less oxygen.", "This can lead to shock, a life-threatening failure of circulation."],
          },
          {
            id: "rapid-pulse",
            label: "Resident with Rapid Pulse",
            portrait: "/images/characters/RapidPulse.png",
            gridX: 1,
            gridY: 4,
            dialogue: ["My heart is pounding really fast!", "The heart increases its rate to compensate for low blood volume or pressure.", "This is controlled by the autonomic nervous system to maintain perfusion."],
          },
          {
            id: "cold-water",
            label: "Cold Floodwater",
            gridX: 8,
            gridY: 2,
            dialogue: ["The water is icy cold.", "Cold exposure causes blood vessels in the skin to constrict.", "This preserves core temperature but reduces blood flow to the extremities."],
          },
        ],
        feedbackImage: "/images/disaster-doctor/stairwell-evacuation.png",
        feedbackExplanation: "You recognized early signs of circulatory shock. Maintaining blood pressure and oxygen delivery is critical as flooding and cold stress worsen.",
      },
    ],
  },
];
