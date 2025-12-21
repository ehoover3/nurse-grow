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
    slug: "test",
    title: "TEST",
    description: "TEST DESCRIPTION",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Metabolic Alkalosis",
        multipleChoiceOptions: [
          { text: "Respiratory Acidosis", image: "/images/RespiratoryAcidosis.png" },
          { text: "Respiratory Alkalosis", image: "/images/RespiratoryAlkalosis.png" },
          { text: "Metabolic Alkalosis", image: "/images/MetabolicAlkalosis.png" },
        ],
        multipleChoiceAnswer: "Metabolic Alkalosis",
        tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
      },
      {
        id: 2,
        type: "rpg-interaction",
        question: "Explore the mad scientist’s lab and uncover how the body sends and uses electrical signals.",
        rpgRequiredInteractions: 2,
        rpgObjects: [
          {
            id: "skeleton",
            label: "A talking skeleton",
            portrait: "/images/characters/Skeleton.png",
            gridX: 2,
            gridY: 1,
            dialogue: ["Ah-ha! Observe the bones in action!", "Bones create red blood cells."],
          },
          {
            id: "twitching-muscle",
            label: "Twitching Muscle Apparatus",
            gridX: 7,
            gridY: 4,
            dialogue: ["Marvel at the muscle fiber!", "Muscle contraction occurs when calcium ions are released inside the cell.", "This allows actin and myosin to slide past each other."],
          },
        ],
      },
      {
        id: 3,
        type: "word-order",
        question: "Put the order of the GI Tract in order:",
        sequentialOrderWordBank: [
          { text: "Mouth", image: "/images/Mouth.png" },
          { text: "Brain", image: "/images/Brain.png" },
          { text: "Stomach", image: "/images/Stomach.png" },
          { text: "Small Intestine", image: "/images/SmallIntestines.png" },
          { text: "Large Intestine", image: "/images/LargeIntestines.png" },
        ],
        sequentialOrderAnswer: ["Mouth", "Stomach", "Small Intestine", "Large Intestine"],
      },
      {
        id: 4,
        type: "matching",
        question: "Match the organ to its function:",
        matchingPairs: [
          { left: "Heart", right: "Pumps blood" },
          { left: "Lungs", right: "Gas exchange" },
          { left: "Brain", right: "Thinks" },
        ],
      },
    ],
  },
  {
    slug: "physiology-chapter-1",
    title: "Introduction to Physiology",
    description: "physiology-chapter-1",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Which is positive feedback?",
        multipleChoiceOptions: [
          { text: "Stomach lining cell acid secretion is suppressed when stomach contents acidity increases", image: "" },
          { text: "A rise in blood pressure stimulates water elimination in urine, which reduces blood pressure", image: "" },
          { text: "Increase in H⁺ concentration in blood causes an increase in H+ excretion in urine", image: "" },
          { text: "Increase in blood CO₂ concentration stimulates breathing, which increases the rate at which CO₂ is eliminated from the body", image: "" },
          { text: "Uterus contractions push the fetus against the cervix, which triggers oxytocin release in the bloodstream; oxytocin then stimulates stronger uterus contractions", image: "" },
        ],
        multipleChoiceAnswer: "Uterus contractions push the fetus against the cervix, which triggers oxytocin release in the bloodstream; oxytocin then stimulates stronger uterus contractions",
        tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "{Aldosterone} acts on which kidney cells?",
        multipleChoiceOptions: [
          { text: "Neurons", image: "/images/Neuron.png" },
          { text: "Muscle cells", image: "" },
          { text: "Epithelial cells", image: "" },
          { text: "Connective tissue cells", image: "" },
        ],
        multipleChoiceAnswer: "Epithelial cells",
        tooltipTerms: [
          { label: "Na", meaning: "Sodium" },
          { label: "Aldosterone", meaning: "Aldosterone is horomone that stimulates {Na} reabsorption in the kidney tubules" },
        ],
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Where are hormones secreted?",
        multipleChoiceOptions: [
          { text: "Into the blood", image: "" },
          { text: "From exocrine glands", image: "" },
          { text: "From endocrine glands", image: "" },
          { text: "Both into the blood and from exocrine glands", image: "" },
          { text: "Both into the blood and from endocrine glands", image: "" },
        ],
        multipleChoiceAnswer: "Both into the blood and from endocrine glands",
        feedbackImage: "/images/Figure 1.3 Glands.png",
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Which cell type contracts and generates force?",
        multipleChoiceOptions: [
          { text: "Muscle", image: "" },
          { text: "Epithelial", image: "" },
          { text: "Connective tissue", image: "" },
          { text: "Nerve", image: "" },
        ],
        multipleChoiceAnswer: "Muscle",
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "What is normal blood glucose level?",
        multipleChoiceOptions: [
          { text: "50 mg/dL", image: "" },
          { text: "100 mg/dL", image: "" },
          { text: "50 mg/mL", image: "" },
          { text: "100 mg/mL", image: "" },
          { text: "50 mg/L", image: "" },
        ],
        multipleChoiceAnswer: "100 mg/dL",
      },

      {
        id: 6,
        type: "multiple-choice",
        question: "What is the body's internal environment is synonymous with?",
        multipleChoiceOptions: [
          { text: "Extracellular Fluid", image: "" },
          { text: "Intracellular Fluid", image: "" },
        ],
        multipleChoiceAnswer: "Extracellular Fluid",
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "What is maintaining the internal environment?",
        multipleChoiceOptions: [
          { text: "Exocytosis", image: "" },
          { text: "Gluconeogenesis", image: "" },
          { text: "Homeostasis", image: "" },
          { text: "Ionotropic", image: "" },
        ],
        multipleChoiceAnswer: "Homeostasis",
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "Is plasma extracellular fluid?",
        multipleChoiceOptions: [
          { text: "Yes", image: "" },
          { text: "No", image: "" },
        ],
        multipleChoiceAnswer: "Yes",
      },
      {
        id: 9,
        type: "multiple-choice",
        question: "In homeostasis, are physiology variables constant?",
        multipleChoiceOptions: [
          { text: "Yes", image: "" },
          { text: "No", image: "" },
        ],
        multipleChoiceAnswer: "No",
      },
      {
        id: 10,
        type: "multiple-choice",
        question: "What tissue type is {Elastin} found in?",
        multipleChoiceOptions: [
          { text: "Epithelial", image: "" },
          { text: "Connective", image: "" },
        ],
        multipleChoiceAnswer: "Connective",
        tooltipTerms: [{ label: "Elastin", meaning: "A protein" }],
      },
      {
        id: 11,
        type: "multiple-choice",
        question: "Are plasma and interstitial fluid synonyms?",
        multipleChoiceOptions: [
          { text: "Yes", image: "" },
          { text: "No", image: "" },
        ],
        multipleChoiceAnswer: "No",
      },
      {
        id: 12,
        type: "multiple-choice",
        question: "What moves glucose movement from plasma to cells?",
        multipleChoiceOptions: [
          { text: "Glycogen", image: "" },
          { text: "Insulin", image: "" },
          { text: "Glucagon", image: "" },
          { text: "Vasopressin", image: "/images/Vasopressin.png" },
        ],
        multipleChoiceAnswer: "Insulin",
      },
    ],
  },
  {
    slug: "physiology-chapter-2",
    title: "Cell Structure and Function",
    description: "physiology-chapter-2",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Which biomolecule is not a polymer?",
        multipleChoiceOptions: [
          { text: "Polysaccharide", image: "" },
          { text: "Phospholipid", image: "" },
          { text: "Protein", image: "" },
          { text: "Nucleic acid", image: "" },
        ],
        multipleChoiceAnswer: "Phospholipid",
      },

      {
        id: 2,
        type: "multiple-choice",
        question: "Which fatty acid has 2 double bonds?",
        multipleChoiceOptions: [
          { text: "Saturated Fatty Acid", image: "" },
          { text: "Desaturated Fatty Acid", image: "" },
          { text: "Monounsaturated Fatty Acid", image: "" },
          { text: "Polyunsaturated Fatty Acid", image: "" },
          { text: "Eicosanoid", image: "" },
        ],
        multipleChoiceAnswer: "Polyunsaturated Fatty Acid",
        feedbackExplanation:
          "A fatty acid is a long chain of carbon (C) atoms with hydrogen (H) atoms attached and a carboxyl group (-COOH) at one end. Saturated fatty acids: All carbon-carbon bonds are single bonds (C–C). No double bonds. Example: stearic acid. Monounsaturated fatty acids: One double bond (C=C) exists in the chain. Example: oleic acid. Polyunsaturated fatty acids (PUFAs): Two or more double bonds (C=C) are present. Example: linoleic acid has 2 double bonds. So, if a fatty acid has exactly 2 double bonds, it cannot be saturated or monounsaturated—it must be polyunsaturated. That’s why “Polyunsaturated fatty acid” is the correct answer",
        tooltipTerms: [{ label: "C", meaning: "Carbon" }],
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Which molecule is not a phospholipid component?",
        multipleChoiceOptions: [
          { text: "Cholesterol", image: "" },
          { text: "Glycerol", image: "" },
          { text: "Phosphate", image: "" },
          { text: "Fatty Acid", image: "" },
        ],
        multipleChoiceAnswer: "Cholesterol",
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "{H}-bonds between amino acids form which structure?",
        multipleChoiceOptions: [
          { text: "Primary protein structure", image: "" },
          { text: "Secondary protein structure", image: "" },
          { text: "Tertiary protein structure", image: "" },
          { text: "Quaternary protein structure", image: "" },
        ],
        multipleChoiceAnswer: "Secondary protein structure",
        tooltipTerms: [{ label: "H", meaning: "Hydrogen" }],
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "Which nucleic acids is not a pyrimidine?",
        multipleChoiceOptions: [
          { text: "Cytosine", image: "" },
          { text: "Thymine", image: "" },
          { text: "Uracil", image: "" },
          { text: "Adenine", image: "" },
        ],
        multipleChoiceAnswer: "Adenine",
      },

      {
        id: 6,
        type: "multiple-choice",
        question: "Glycogen and lipids are stored",
        multipleChoiceOptions: [
          { text: "As inclusions in the cytosol", image: "" },
          { text: "In storage vesicles", image: "" },
          { text: "In secretory vesicles", image: "" },
          { text: "In lysosomes", image: "" },
          { text: "In the nucleolus", image: "" },
        ],
        multipleChoiceAnswer: "As inclusions in the cytosol",
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "Which organelle produces most of a cell's ATP?",
        multipleChoiceOptions: [
          { text: "Nucleus", image: "" },
          { text: "Peroxisome", image: "" },
          { text: "Golgi Apparatus", image: "/images/GolgiApparatus.png" },
          { text: "Mitochondrion", image: "/images/Mitochondrion.png" },
          { text: "Smooth Endoplasmic Reticulum", image: "/images/SmoothEndoplasmicReticulum.png" },
        ],
        multipleChoiceAnswer: "Mitochondrion",
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "Which passes electrical signals between cells?",
        multipleChoiceOptions: [
          { text: "Desmosome", image: "" },
          { text: "Gap Junction", image: "" },
          { text: "Tight Junction", image: "" },
        ],
        multipleChoiceAnswer: "Gap junction",
      },

      {
        id: 9,
        type: "multiple-choice",
        question: "RNA polymerase binds ___ to then transcribe DNA?",
        multipleChoiceOptions: [
          { text: "Initiator Codon", image: "" },
          { text: "Termination Codon", image: "" },
          { text: "Promoter Sequence", image: "" },
          { text: "Centromere", image: "" },
          { text: "Leader Sequence", image: "" },
        ],
        multipleChoiceAnswer: "Promoter Sequence",
      },
      {
        id: 10,
        type: "multiple-choice",
        question: "The base sequence on tRNA that ­recognizes the mRNA codon by the law of  complementary base pairing is called the",
        multipleChoiceOptions: [
          { text: "tRNA Codon", image: "" },
          { text: "Anticodon", image: "" },
          { text: "Amino Codon", image: "" },
          { text: "Leader Codon", image: "" },
          { text: "Initiator Codon", image: "" },
        ],
        multipleChoiceAnswer: "Anticodon",
      },
      {
        id: 11,
        type: "multiple-choice",
        question: "For a protein to enter the rough ER, its leader sequence must bind to a ____",
        multipleChoiceOptions: [
          { text: "Transport Vesicle", image: "" },
          { text: "Secretory Vesicle", image: "" },
          { text: "Coated Vesicle", image: "" },
          { text: "Signal Recognition Protein", image: "" },
          { text: "Promoter", image: "" },
        ],
        multipleChoiceAnswer: "Signal Recognition Protein",
      },
      {
        id: 12,
        type: "multiple-choice",
        question: "During replication, which enzyme causes DNA to uncoil?",
        multipleChoiceOptions: [
          { text: "DNA polymerase", image: "" },
          { text: "RNA polymerase", image: "" },
          { text: "DNA kinase", image: "" },
          { text: "Helicase", image: "" },
          { text: "DNA ligase", image: "" },
        ],
        multipleChoiceAnswer: "Helicase",
      },

      {
        id: 13,
        type: "multiple-choice",
        question: "What is a lagging strand?",
        multipleChoiceOptions: [
          { text: "A sequence of nucleotides in DNA that binds RNA polymerase", image: "" },
          { text: "A sequence of amino acids at the beginning of a polypeptide that directs the polypeptide to its destination", image: "" },
          { text: "The newly synthesized DNA strand formed by ligation of Okazaki fragments", image: "" },
          { text: "The protein filaments that extend between 2 cells to form desmosomes", image: "" },
          { text: "The protein filaments that form cilia", image: "" },
        ],
        multipleChoiceAnswer: "The newly synthesized DNA strand formed by ligation of Okazaki fragments",
      },
      {
        id: 14,
        type: "multiple-choice",
        question: "During which phase of mitosis is the mitotic spindle developing?",
        multipleChoiceOptions: [
          { text: "Prophase", image: "/images/Prophase.png" },
          { text: "Metaphase", image: "/images/Metaphase.png" },
          { text: "Anaphase", image: "/images/Anaphase.png" },
          { text: "Telophase", image: "/images/Telephase.png" },
          { text: "Prometaphase", image: "/images/Prometaphase.png" },
        ],
        multipleChoiceAnswer: "Prophase",
      },
      {
        id: 15,
        type: "multiple-choice",
        question: "During which phase of mitosis do chromosome pairs move to opposite poles of the cell?",
        multipleChoiceOptions: [
          { text: "Prophase", image: "/images/Prophase.png" },
          { text: "Metaphase", image: "/images/Metaphase.png" },
          { text: "Anaphase", image: "/images/Anaphase.png" },
          { text: "Telophase", image: "/images/Telephase.png" },
          { text: "Prometaphase", image: "/images/Prometaphase.png" },
        ],
        multipleChoiceAnswer: "Anaphase",
      },
      {
        id: 16,
        type: "multiple-choice",
        question: "Monosaccharides are (polar/nonpolar/amphipathic) molecules",
        multipleChoiceOptions: [
          { text: "polar", image: "" },
          { text: "nonpolar", image: "" },
          { text: "amphipathic", image: "" },
        ],
        multipleChoiceAnswer: "polar",
      },
      {
        id: 17,
        type: "multiple-choice",
        question: "Triglycerides are (polar/nonpolar/amphipathic) molecules",
        multipleChoiceOptions: [
          { text: "polar", image: "" },
          { text: "nonpolar", image: "" },
          { text: "amphipathic", image: "" },
        ],
        multipleChoiceAnswer: "nonpolar",
      },
      {
        id: 18,
        type: "multiple-choice",
        question: "The precursor molecule for all steroids is ____",
        multipleChoiceOptions: [
          { text: "cholesterol", image: "" },
          { text: "protein", image: "" },
          { text: "lipids", image: "" },
          { text: "glucose", image: "" },
        ],
        multipleChoiceAnswer: "cholesterol",
      },
      {
        id: 19,
        type: "multiple-choice",
        question: "According to law of complementary base pairing, in RNA, adenine base pairs with ____",
        multipleChoiceOptions: [
          { text: "uracil", image: "" },
          { text: "thymine", image: "" },
          { text: "cytosine", image: "" },
          { text: "guanine", image: "" },
        ],
        multipleChoiceAnswer: "uracil",
      },
      {
        id: 20,
        type: "multiple-choice",
        question: "Transmembrane proteins are examples of _____ membrane proteins",
        multipleChoiceOptions: [
          { text: "integral", image: "" },
          { text: "peripheral", image: "" },
        ],
        multipleChoiceAnswer: "integral",
      },

      {
        id: 21,
        type: "multiple-choice",
        question: "The membrane of smooth endoplasmic reticulum is continuous with membrane of Golgi apparatus",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "False",
      },
      {
        id: 22,
        type: "multiple-choice",
        question: "Microfilaments provide structural support for hairlike projections of plasma membrane called ____",
        multipleChoiceOptions: [
          { text: "Microvilli", image: "/images/Microvilli.png" },
          { text: "Stereocilia", image: "/images/Stereocilia.png" },
          { text: "Basal Bodies", image: "" },
          { text: "Desmosomes", image: "" },
        ],
        multipleChoiceAnswer: "Microvilli",
      },
      {
        id: 23,
        type: "multiple-choice",
        question: "The proteins that form gap junctions between 2 adjacent cells are called ____",
        multipleChoiceOptions: [{ text: "connexons", image: "" }],
        multipleChoiceAnswer: "connexons",
      },
      {
        id: 24,
        type: "multiple-choice",
        question: "A section of DNA that codes for a specific protein is called a ____",
        multipleChoiceOptions: [{ text: "gene", image: "" }],
        multipleChoiceAnswer: "gene",
      },
      {
        id: 25,
        type: "multiple-choice",
        question: "The mRNA codon transcribed from DNA triplet ATC is ____",
        multipleChoiceOptions: [{ text: "UAG", image: "" }],
        multipleChoiceAnswer: "UAG",
      },
      {
        id: 26,
        type: "multiple-choice",
        question: "More than one codon may code for a single amino acid",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "True",
      },
      {
        id: 27,
        type: "multiple-choice",
        question: "The first polypeptide translated part is ____ that directs protein to its final destination",
        multipleChoiceOptions: [{ text: "leader sequence", image: "" }],
        multipleChoiceAnswer: "leader sequence",
      },
      {
        id: 28,
        type: "multiple-choice",
        question: "Replication of DNA occurs during (interphase/mitosis)",
        multipleChoiceOptions: [{ text: "interphase", image: "" }],
        multipleChoiceAnswer: "interphase",
      },
      {
        id: 29,
        type: "multiple-choice",
        question: "Division of cytoplasm into 2 daughter cells during cell division is called ____",
        multipleChoiceOptions: [{ text: "cytokinesis", image: "" }],
        multipleChoiceAnswer: "cytokinesis",
      },

      {
        id: 30,
        type: "multiple-choice",
        question: "The chemical that tags proteins for destruction in a cell is called ____",
        multipleChoiceOptions: [{ text: "ubiquitin", image: "" }],
        multipleChoiceAnswer: "ubiquitin",
      },
    ],
  },

  {
    slug: "physiology-chapter-3",
    title: "Cell Metabolism",
    description: "physiology-chapter-3",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "When glucose is oxidized in cells, O₂ reacts with",
        multipleChoiceOptions: [
          { text: "Carbon to form CO₂", image: "" },
          { text: "Hydrogen to form H₂O", image: "" },
          { text: "Components of electron transport chain", image: "" },
          { text: "Inorganic phosphate to form ATP", image: "" },
          { text: "Acetyl CoA to form acetate", image: "" },
        ],
        multipleChoiceAnswer: "Hydrogen to form H₂O",
        tooltipTerms: [
          { label: "CO₂", meaning: "Carbon Dioxide" },
          { label: "O₂", meaning: "Oxygen" },
        ],
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Which illustrates substrate-level phosphorylation?  (P - phosphate, X - metabolic intermediate)",
        multipleChoiceOptions: [
          { text: "ATP → ADP + Pᵢ", image: "" },
          { text: "ADP + Pᵢ → ATP", image: "" },
          { text: "X - P → X + P", image: "" },
          { text: "X - P + ADP → X + ATP", image: "" },
        ],
        multipleChoiceAnswer: "X - P + ADP → X + ATP",
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Which adds or removes chemical groups to activate or inactivate an enzyme?",
        multipleChoiceOptions: [
          { text: "Allosteric Regulation", image: "" },
          { text: "Substrate-Level Phosphorylation", image: "" },
          { text: "Oxidative Phosphorylation", image: "" },
          { text: "Saturation", image: "" },
          { text: "Covalent Regulation", image: "" },
        ],
        multipleChoiceAnswer: "Covalent Regulation",
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "These reactions occur in during Krebs cycle's step 5:\nGDP + Pᵢ → GTP\nGTP + ADP → GDP + ATP\nThe net reaction is",
        multipleChoiceOptions: [
          { text: "Pᵢ + GTP → GDP", image: "" },
          { text: "Pᵢ + GDP → GTP", image: "" },
          { text: "GTP + ADP → GDP + ATP", image: "" },
          { text: "ADP + Pᵢ → ATP", image: "" },
          { text: "GDP + Pᵢ → ATP", image: "" },
        ],
        multipleChoiceAnswer: "GDP + Pᵢ → ATP",
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "Which reaction is an example of hydrolysis?",
        multipleChoiceOptions: [
          { text: "Amino acid 1 + amino acid 2 → dipeptide + H₂O", image: "" },
          { text: "Lactose + H₂O → glucose + galactose", image: "" },
          { text: "Glucose1-phosphate → gludcose- 6-phosphate", image: "" },
          { text: "Glucose + 6O₂ → 6O₂ + 6H₂O", image: "" },
          { text: "Water (liquid) + heat → water (steam)", image: "" },
        ],
        multipleChoiceAnswer: "Lactose + H₂O → glucose + galactose",
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "Which classes of organic molecules can be used to synthesize triglycerides?",
        multipleChoiceOptions: [
          { text: "Carbohydrates only", image: "" },
          { text: "Lipids only", image: "" },
          { text: "Proteins only", image: "" },
          { text: "Carbohydrates and lipids only", image: "" },
          { text: "Carbohydrates, lipids, and proteins", image: "" },
        ],
        multipleChoiceAnswer: "Carbohydrates, lipids, and proteins",
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "Enzymes increase rate of an enzyme-catalyzed reaction by",
        multipleChoiceOptions: [
          { text: "Increasing activation energy barrier", image: "" },
          { text: "Decreasing activation energy barrier", image: "" },
          { text: "Increasing free energy of reactant", image: "" },
          { text: "Increasing free energy of product", image: "" },
          { text: "Decreasing free energy of reactant", image: "" },
        ],
        multipleChoiceAnswer: "Decreasing activation energy barrier",
      },

      {
        id: 8,
        type: "multiple-choice",
        question: "In this reaction, what is oxidized? NAD⁺ + AH₂ → NADH + H⁺ + A”",
        multipleChoiceOptions: [
          { text: "NAD⁺", image: "" },
          { text: "NADH", image: "" },
          { text: "AH2", image: "" },
          { text: "A", image: "" },
        ],
        multipleChoiceAnswer: "AH2",
        feedbackExplanation: "AH₂ is oxidized because it loses electrons (and hydrogen) and becomes A, while NAD⁺ gains those electrons and is reduced to NADH",
      },
      {
        id: 9,
        type: "multiple-choice",
        question: "Which is carried out by enzymes in cytosol?",
        multipleChoiceOptions: [
          { text: "Glycolysis", image: "" },
          { text: "Linking step", image: "" },
          { text: "Krebs cycle", image: "" },
          { text: "Oxidative phosphorylation", image: "" },
          { text: "Chemiosmotic coupling", image: "" },
        ],
        multipleChoiceAnswer: "Glycolysis",
      },
      {
        id: 10,
        type: "multiple-choice",
        question: "In which is CO₂ generated?",
        multipleChoiceOptions: [
          { text: "Glycolysis only", image: "" },
          { text: "Linking step only", image: "" },
          { text: "Krebs cycle only", image: "" },
          { text: "Glycolysis and Krebs cycle", image: "" },
          { text: "Linking step and Krebs cycle", image: "" },
        ],
        multipleChoiceAnswer: "Linking step and Krebs cycle",
        tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
      },
      {
        id: 11,
        type: "multiple-choice",
        question: "The removal of hydrogen atoms from a molecule is an example of (oxidation/reduction)",
        multipleChoiceOptions: [{ text: "oxidation", image: "" }],
        multipleChoiceAnswer: "oxidation",
      },
      {
        id: 12,
        type: "multiple-choice",
        question: "The forward rate of a reaction can be ­increased by increasing concentrations of (reactants/products)",
        multipleChoiceOptions: [{ text: "reactants", image: "" }],
        multipleChoiceAnswer: "reactants",
      },
      {
        id: 13,
        type: "multiple-choice",
        question: "For a reaction to proceed spontaneously in forward direction, energy change must be (positive/negative)",
        multipleChoiceOptions: [{ text: "negative", image: "" }],
        multipleChoiceAnswer: "negative",
      },
      {
        id: 14,
        type: "multiple-choice",
        question: "Liver and muscle cells are able to store glucose in form of a branched-chain molecule called ____",
        multipleChoiceOptions: [{ text: "glycogen", image: "" }],
        multipleChoiceAnswer: "glycogen",
      },

      {
        id: 15,
        type: "multiple-choice",
        question: "Allosteric regulation involves ­attachment of a modulator molecule to an enzyme by means of a covalent bond",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "False",
      },
      {
        id: 16,
        type: "multiple-choice",
        question: "Glycogenolysis is an example of a ­catabolic reaction",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "True",
      },
      {
        id: 17,
        type: "multiple-choice",
        question: "The conversion of noncarbohydrate ­precursors into glucose is called ____",
        multipleChoiceOptions: [{ text: "gluconeogenesis", image: "" }],
        multipleChoiceAnswer: "gluconeogenesis",
      },
      {
        id: 18,
        type: "multiple-choice",
        question: "When ATP is synthesized using energy released in glucose oxidation, most of ATP is synthesized by oxidative ­phosphorylation",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "True",
      },
      {
        id: 19,
        type: "multiple-choice",
        question: "When a substrate molecule binds to an enzyme, it binds to a particular location known as (active/regulatory) site",
        multipleChoiceOptions: [{ text: "active", image: "" }],
        multipleChoiceAnswer: "active",
      },
      {
        id: 20,
        type: "multiple-choice",
        question: "Unless a substance is an essential nutrient, it is not necessary for proper cellular function",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "False",
      },
      {
        id: 21,
        type: "multiple-choice",
        question: "An enzyme catalyzes a reaction at (lowest/highest) possible rate when it is 100% saturated",
        multipleChoiceOptions: [{ text: "highest", image: "" }],
        multipleChoiceAnswer: "highest",
      },
      {
        id: 22,
        type: "multiple-choice",
        question: "Conversion of pyruvate to lactate occurs under (aerobic/anaerobic) conditions",
        multipleChoiceOptions: [{ text: "anaerobic", image: "" }],
        multipleChoiceAnswer: "anaerobic",
      },
    ],
  },

  {
    slug: "physiology-chapter-4",
    title: "Cell Membrane Transport",
    description: "physiology-chapter-4",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Which is located in greater concentration inside cells compared to outside?",
        multipleChoiceOptions: [
          { text: "{K} ions", image: "" },
          { text: "{Na} ions", image: "" },
          { text: "Proteins", image: "" },
          { text: "{K} and {Na} ions are both located in greater concentration inside cells", image: "" },
          { text: "{K} ions and proteins are both located in greater concentration inside cells", image: "" },
        ],
        multipleChoiceAnswer: "K ions and proteins are both located in greater concentration inside cells",
        tooltipTerms: [
          { label: "K", meaning: "Potassium" },
          { label: "Na", meaning: "Sodium" },
        ],
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "If a certain anion is located in greater concentration in the cell and a negative membrane potential exists, then which is true?",
        multipleChoiceOptions: [
          { text: "The electrical force on the anion tries to move it into the cell", image: "" },
          { text: "The chemical force on the anion tries to move it into the cell", image: "" },
          { text: "The equilibrium potential for the anion is a positive value", image: "" },
        ],
        multipleChoiceAnswer: "The equilibrium potential for the anion is a positive value",
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "If a cell is at -70 mV, {K}⁺ tends to leave and {Na}⁺ tends to enter. Which is true for {N}a⁺ and {K}⁺ movement?",
        multipleChoiceOptions: [
          { text: "Na⁺ moves in", image: "" },
          { text: "K⁺ moves in", image: "" },
          { text: "Both", image: "" },
          { text: "Neither", image: "" },
        ],
        multipleChoiceAnswer: "Na⁺ moves in",
        tooltipTerms: [
          { label: "K", meaning: "Potassium" },
          { label: "Na", meaning: "Sodium" },
        ],
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "When the membrane potential is equal to the equilibrium potential of Na⁺ (Eₙₐ = + 60 mV)",
        multipleChoiceOptions: [
          { text: "Na⁺ moves into a cell down its electrochemical gradient", image: "" },
          { text: "Na⁺ moves out of a cell down its electrochemical gradient", image: "" },
          { text: "The net flux of Na⁺ is zero because it is at equilibrium", image: "" },
        ],
        multipleChoiceAnswer: "The net flux of Na⁺ is zero because it is at equilibrium",
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "The osmotic pressure of a solution ­depends on",
        multipleChoiceOptions: [
          { text: "The concentrations of all solute particles contained in it", image: "" },
          { text: "The concentrations of all permeant solute particles contained in it", image: "" },
          { text: "The concentrations of all impermeant solute particles contained in it", image: "" },
          { text: "The atmosphere pressure exerted on the solution", image: "" },
          { text: "The volume of water in which the solute particles are dissolved", image: "" },
        ],
        multipleChoiceAnswer: "The concentrations of all solute particles contained in it",
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "Assume  only impermeant solutes are present, which occurs when a cell is placed in a 200 mOsm osmolarity solution?",
        multipleChoiceOptions: [
          { text: "Water will move into the cell", image: "" },
          { text: "Water will move out of the cell", image: "" },
          { text: "Water will not cross the cell membrane", image: "" },
        ],
        multipleChoiceAnswer: "Water will move into the cell",
      },

      {
        id: 7,
        type: "multiple-choice",
        question: "A solution is hypotonic if",
        multipleChoiceOptions: [
          { text: "All solutes concentration contained in it is less than 300 mOsm", image: "" },
          { text: "All permeant solutes concentration contained in it is less than 300 mOsm", image: "" },
          { text: "All impermeant solutes concentration contained in it is less than 300 mOsm", image: "" },
          { text: "Osmolarity is less than 300 mOsm", image: "" },
        ],
        multipleChoiceAnswer: "All impermeant solutes concentration contained in it is less than 300 mOsm",
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "Movement of {Na}⁺ in {Na}-linked glucose transport, in {Na}-proton exchange, and via the {Na}-{K} pump are all examples of",
        multipleChoiceOptions: [
          { text: "Primary active transport", image: "" },
          { text: "Passive transport", image: "" },
          { text: "Mediated transport", image: "" },
          { text: "Simple diffusion", image: "" },
        ],
        multipleChoiceAnswer: "Mediated transport",
        tooltipTerms: [
          { label: "K", meaning: "Potassium" },
          { label: "Na", meaning: "Sodium" },
        ],
      },
      {
        id: 9,
        type: "multiple-choice",
        question: "What do active transporters and carriers have in common?",
        multipleChoiceOptions: [
          { text: "They both transport molecules up electrochemical gradients", image: "" },
          { text: "They both transport molecules down electrochemical gradients", image: "" },
          { text: "They both transport lipid-soluble substances preferentially", image: "" },
          { text: "They both utilize ATP to transport molecules", image: "" },

          { text: "They both are specific for certain molecules", image: "" },
        ],
        multipleChoiceAnswer: "They both are specific for certain molecules",
      },

      {
        id: 10,
        type: "multiple-choice",
        question: "Which is a white blood cell engulfing a bacterium into a vesicle?",

        multipleChoiceOptions: [
          { text: "Exocytosis", image: "" },
          { text: "Transcytosis", image: "" },
          { text: "Receptor-mediated endocytosis", image: "" },
          { text: "Pinocytosis", image: "" },
          { text: "Phagocytosis", image: "" },
        ],
        multipleChoiceAnswer: "Phagocytosis",
      },
      {
        id: 11,
        type: "multiple-choice",
        question: "Which transport mechanisms functions to bring a specific extracellular substance into the cell?",
        multipleChoiceOptions: [
          { text: "Receptor-mediated endocytosis", image: "" },
          { text: "Pinocytosis", image: "" },
          { text: "Phagocytosis", image: "" },
          { text: "Both Receptor-mediated endocytosis and Phagocytosis", image: "" },
        ],
        multipleChoiceAnswer: "Both Receptor-mediated endocytosis and Phagocytosis",
      },
      {
        id: 12,
        type: "multiple-choice",
        question: "Substances that cross cell membranes by simple diffusion are mostly _____",
        multipleChoiceOptions: [
          { text: "hydrophilic", image: "" },
          { text: "hydrophobic", image: "" },
        ],
        multipleChoiceAnswer: "hydrophobic",
      },

      {
        id: 13,
        type: "multiple-choice",
        question: "In simple diffusion, an uncharged solute always flows from a region of higher concentration to a region of lower concentration",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "True",
      },
      {
        id: 14,
        type: "multiple-choice",
        question: "A concentration gradient is also referred to as a(n) ____ driving force",
        multipleChoiceOptions: [{ text: "chemical", image: "" }],
        multipleChoiceAnswer: "chemical",
      },
      {
        id: 15,
        type: "multiple-choice",
        question: "When a membrane potential is positive, there is an excess of cations over anions in the cell",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "True",
      },
      {
        id: 16,
        type: "multiple-choice",
        question: "A cell will shrink if it is placed in a hypertonic solution",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "True",
      },
      {
        id: 17,
        type: "multiple-choice",
        question: "Water diffuses from high to low osmotic pressure",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "False",
      },
      {
        id: 18,
        type: "multiple-choice",
        question: "Junctions connecting adjacent epithelial cells are ____ junctions",
        multipleChoiceOptions: [{ text: "tight", image: "" }],
        multipleChoiceAnswer: "tight",
      },
    ],
  },

  {
    slug: "physiology-chapter-5",
    title: "Chemical Messengers",
    description: "physiology-chapter-5",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Arachidonic acid is the raw material for the synthesis of",
        multipleChoiceOptions: [
          { text: "Amines", image: "" },
          { text: "Thyroid hormones", image: "" },
          { text: "Eicosanoids", image: "" },
          { text: "Steroids", image: "" },
          { text: "Peptides", image: "" },
        ],
        multipleChoiceAnswer: "Eicosanoids",
      },

      {
        id: 2,
        type: "multiple-choice",
        question: "Epinephrine is a(n)",
        multipleChoiceOptions: [
          { text: "Amino acid", image: "" },
          { text: "Steroid", image: "" },
          { text: "Eicosanoid", image: "" },
          { text: "Adrenocorticoid", image: "" },
          { text: "Catecholamine", image: "" },
        ],
        multipleChoiceAnswer: "Catecholamine",
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Most chemical messengers fall into which chemical classes?",
        multipleChoiceOptions: [
          { text: "Amines", image: "" },
          { text: "Amino acids", image: "" },
          { text: "Peptides/proteins", image: "" },
          { text: "Eicosanoids", image: "" },
          { text: "Steroids", image: "" },
        ],
        multipleChoiceAnswer: "Peptides/proteins",
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "All amino acid chemical messengers function as",
        multipleChoiceOptions: [
          { text: "Paracrines", image: "" },
          { text: "Autocrines", image: "" },
          { text: "Neurohormones", image: "" },
          { text: "Neurotransmitters", image: "" },
          { text: "Hormones", image: "" },
        ],
        multipleChoiceAnswer: "Neurotransmitters",
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "All steroid chemical messengers function as",
        multipleChoiceOptions: [
          { text: "Paracrines", image: "" },
          { text: "Autocrines", image: "" },
          { text: "Neurohormones", image: "" },
          { text: "Neurotransmitters", image: "" },
          { text: "Hormones", image: "" },
        ],
        multipleChoiceAnswer: "Hormones",
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "Which is likely to cause an increase in intracellular cAMP levels?",
        multipleChoiceOptions: [
          { text: "Stimulation of phosphodiesterase activity", image: "" },
          { text: "Activation of an inhibitory G protein targeting adenylate cyclase", image: "" },
          { text: "Binding of chemical messengers to enzyme-linked receptors", image: "" },
          { text: "Binding of chemical messengers to receptor-operated channels", image: "" },
          { text: "Stimulation of adenylate cyclase activity", image: "" },
        ],
        multipleChoiceAnswer: "Stimulation of adenylate cyclase activity",
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "Which messenger classes bind to intracellular receptors?",
        multipleChoiceOptions: [
          { text: "Catecholamines only", image: "" },
          { text: "Peptides only", image: "" },
          { text: "Steroids only", image: "" },
          { text: "Both catecholamines and steroids", image: "" },
          { text: "Both peptides and steroids", image: "" },
        ],
        multipleChoiceAnswer: "Steroids only",
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "The response of a target cell to a messenger depends on ____?",
        multipleChoiceOptions: [
          { text: "Messenger concentration", image: "" },
          { text: "Target cll receptor concentration", image: "" },
          { text: "Receptor affinity for the messenger", image: "" },
          { text: "All of the above", image: "" },
        ],
        multipleChoiceAnswer: "All of the above",
      },
      {
        id: 9,
        type: "multiple-choice",
        question: "G proteins are involved whenever",
        multipleChoiceOptions: [
          { text: "Binding of messenger molecules to cell surface receptors triggers a target cell response", image: "" },
          { text: "Binding of ligand molecules to cell surface receptors triggers activation or inhibition of enzymes", image: "" },
          { text: "Binding of ligand molecules to cell surface receptors triggers synthesis of second messengers", image: "" },
          { text: "Binding of ligand molecules to cell surface receptors triggers a change in membrane permeability to ions", image: "" },
          { text: "All of the above", image: "" },
        ],
        multipleChoiceAnswer: "Binding of ligand molecules to cell surface receptors triggers synthesis of second messengers",
      },
      {
        id: 10,
        type: "multiple-choice",
        question: "Which enzyme catalyzes the synthesis of diacylglycerol?",
        multipleChoiceOptions: [
          { text: "Adenylate cyclase", image: "" },
          { text: "Tyrosine kinase", image: "" },
          { text: "Phospholipase C", image: "" },
          { text: "Protein kinase", image: "" },
          { text: "Phosphoprotein phosphatase", image: "" },
        ],
        multipleChoiceAnswer: "Phospholipase C",
      },
      {
        id: 11,
        type: "multiple-choice",
        question: "Cells that secrete a messenger are called ____",
        multipleChoiceOptions: [{ text: "secretory cells", image: "" }],
        multipleChoiceAnswer: "secretory cells",
      },
      {
        id: 12,
        type: "multiple-choice",
        question: "An (endocrine/autocrine) agent acts on the same cell that secretes it",
        multipleChoiceOptions: [
          { text: "endocrine", image: "" },
          { text: "autocrine", image: "" },
        ],
        multipleChoiceAnswer: "autocrine",
      },
      {
        id: 13,
        type: "multiple-choice",
        question: "Endocrine glands release  (neurotransmitter/hormone) into the ____, where it travels to the target cell",
        multipleChoiceOptions: [
          { text: "neurotransmitter, blood", image: "" },
          { text: "hormone, blood", image: "" },
        ],
        multipleChoiceAnswer: "hormone, blood",
      },
      {
        id: 14,
        type: "multiple-choice",
        question: "When a G protein is activated, it releases a (GDP/GTP) and binds a (GDP/GTP)",
        multipleChoiceOptions: [{ text: "GDP, GTP", image: "" }],
        multipleChoiceAnswer: "GDP, GTP",
      },
      {
        id: 15,
        type: "multiple-choice",
        question: "The enzyme that catalyzes conversion of ATP to cAMP is called ____",
        multipleChoiceOptions: [{ text: "adenylate cyclase", image: "" }],
        multipleChoiceAnswer: "adenylate cyclase",
      },
      {
        id: 16,
        type: "multiple-choice",
        question: "Following activation of the phosphatidylinositol system, (IP₃/DAG) liberates {Ca} from intracellular stores",
        multipleChoiceOptions: [{ text: "IP3", image: "" }],
        multipleChoiceAnswer: "IP3",
        tooltipTerms: [{ label: "Ca", meaning: "Calcium" }],
      },
      {
        id: 17,
        type: "multiple-choice",
        question: "(Lipophilic/Lipophobic) messengers  exert their effect on target cells by  activating or inactivating specific genes",
        multipleChoiceOptions: [{ text: "Lipophilic", image: "" }],
        multipleChoiceAnswer: "Lipophilic",
      },
      {
        id: 18,
        type: "multiple-choice",
        question: "Examples of locally acting chemical  messengers are (steroids/eicosanoids)",
        multipleChoiceOptions: [{ text: "eicosanoids", image: "" }],
        multipleChoiceAnswer: "eicosanoids",
      },
      {
        id: 19,
        type: "multiple-choice",
        question: "Cytosolic calcium often exerts its effect by binding to cytosolic (protein kinase C/calmodulin)",
        multipleChoiceOptions: [{ text: "calmodulin", image: "" }],
        multipleChoiceAnswer: "calmodulin",
      },
      {
        id: 20,
        type: "multiple-choice",
        question: "Lipophobic messengers are secreted by (exocytosis/diffusion across the cell membrane)",
        multipleChoiceOptions: [{ text: "exocytosis", image: "" }],
        multipleChoiceAnswer: "exocytosis",
      },
      {
        id: 21,
        type: "multiple-choice",
        question: "Amino acids are (hormones/neurotransmitters)",
        multipleChoiceOptions: [{ text: "neurotransmitters", image: "" }],
        multipleChoiceAnswer: "neurotransmitters",
      },
      {
        id: 22,
        type: "multiple-choice",
        question: "The (nervous system/endocrine system) is a more rapid means of communication",
        multipleChoiceOptions: [{ text: "nervous system", image: "" }],
        multipleChoiceAnswer: "nervous system",
      },
    ],
  },
  {
    slug: "physiology-chapter-6",
    title: "Endocrine System: Endocrine Glands and Hormone Actions",
    description: "physiology-chapter-6",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Epinephrine is released from which area of the adrenal gland?",
        multipleChoiceOptions: [
          { text: "Zona reticularis", image: "" },
          { text: "Zona fasciculata", image: "" },
          { text: "Zona glomerulosa", image: "" },
          { text: "Medulla", image: "" },
        ],
        multipleChoiceAnswer: "Medulla",
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Which is true regarding regulation of pituitary hormone secretion by the hypothalamus?",
        multipleChoiceOptions: [
          { text: "All pituitary hormones are regulated by tropic hormones from the hypothalamus", image: "" },
          { text: "All anterior pituitary hormones are regulated by a releasing hormone and a release-inhibiting hormone from the hypothalamus", image: "" },
          { text: "All posterior pituitary hormones are regulated by a releasing hormone from the hypothalamus", image: "" },
          { text: "All anterior pituitary hormones are tropic hormones", image: "" },
          { text: "None of the above", image: "" },
        ],
        multipleChoiceAnswer: "All pituitary hormones are regulated by tropic hormones from the hypothalamus",
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Most hypothalamic and pituitary hormones are",
        multipleChoiceOptions: [
          { text: "Amino acids", image: "" },
          { text: "Peptides/proteins", image: "" },
          { text: "Steroids", image: "" },
          { text: "Eicosanoids", image: "" },
          { text: "Catecholamines", image: "" },
        ],
        multipleChoiceAnswer: "Peptides/proteins",
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Gonadotropin releasing hormone stimulates release of ____ from the anterior pituitary?",
        multipleChoiceOptions: [
          { text: "Sex hormones", image: "" },
          { text: "Follicle stimulating hormone", image: "" },
          { text: "Luteinizing hormone", image: "" },
          { text: "Both follicle stimulating hormone and luteinizing hormone", image: "" },
        ],
        multipleChoiceAnswer: "Both follicle stimulating hormone and luteinizing hormone",
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "Which adrenal hormones is secreted by chromaffin cells?",
        multipleChoiceOptions: [
          { text: "Cortisol", image: "" },
          { text: "Aldosterone", image: "" },
          { text: "Epinephrine", image: "" },
          { text: "Androgens", image: "" },
        ],
        multipleChoiceAnswer: "Epinephrine",
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "In primary hyposecretion of thyroid hormones,",
        multipleChoiceOptions: [
          { text: "Levels of thyroid hormones in the blood decrease", image: "" },
          { text: "Levels of TRH in the blood decrease", image: "" },
          { text: "Levels of TSH in the blood decrease", image: "" },
        ],
        multipleChoiceAnswer: "Levels of thyroid hormones in the blood decrease",
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "Which organs secretes glucagon?",
        multipleChoiceOptions: [
          { text: "Liver", image: "" },
          { text: "Anterior pituitary", image: "" },
          { text: "Posterior pituitary", image: "" },
          { text: "Adrenal gland", image: "" },
          { text: "Pancreas", image: "" },
        ],
        multipleChoiceAnswer: "Pancreas",
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "Which is an example of permissiveness?",
        multipleChoiceOptions: [
          { text: "Glucagon increases blood glucose levels and insulin decreases blood glucose levels", image: "" },
          { text: "Glucagon, epinephrine, and cortisol all increase blood glucose levels", image: "" },
          { text: "Estrogen stimulates synthesis of progesterone receptors in the endometrium", image: "" },
        ],
        multipleChoiceAnswer: "Estrogen stimulates synthesis of progesterone receptors in the endometrium",
      },
      {
        id: 9,
        type: "multiple-choice",
        question: "(Endocrine/Exocrine) glands secrete hormones",
        multipleChoiceOptions: [
          { text: "Endocrine", image: "" },
          { text: "Exocrine", image: "" },
        ],
        multipleChoiceAnswer: "Endocrine",
      },
      {
        id: 10,
        type: "multiple-choice",
        question: "Neural input to the hypothalamus is involved in regulating secretion of hormones by both lobes of the pituitary",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "True",
      },
      {
        id: 11,
        type: "multiple-choice",
        question: "The adrenal ____ secretes epinephrine",
        multipleChoiceOptions: [
          { text: "medulla", image: "" },
          { text: "cortex", image: "" },
        ],
        multipleChoiceAnswer: "medulla",
      },
      {
        id: 12,
        type: "multiple-choice",
        question: "Thyroid hormones are classified as (amines/steroids)",
        multipleChoiceOptions: [{ text: "amines", image: "" }],
        multipleChoiceAnswer: "amines",
      },

      {
        id: 13,
        type: "multiple-choice",
        question: "Lipophobic messengers are secreted by (exocytosis/diffusion across the cell membrane)",
        multipleChoiceOptions: [{ text: "exocytosis", image: "" }],
        multipleChoiceAnswer: "exocytosis",
      },

      {
        id: 14,
        type: "multiple-choice",
        question: "____ secretes calcitonin",
        multipleChoiceOptions: [
          { text: "thyroid gland", image: "" },
          { text: "parathyroid gland", image: "" },
        ],
        multipleChoiceAnswer: "thyroid gland",
      },
    ],
  },
  {
    slug: "physiology-chapter-7",
    title: "Nerve Cells and Electrical Signaling",
    description: "physiology-chapter-7",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Depolarization of a neuron to threshold stimulates",
        multipleChoiceOptions: [
          { text: "Opening of {Na} channels", image: "" },
          { text: "Delayed closing of {Na} channels", image: "" },
          { text: "Delayed opening of {K} channels", image: "" },
          { text: "Both a and c", image: "" },
          { text: "All of the above", image: "" },
        ],
        multipleChoiceAnswer: "All of the above",
        tooltipTerms: [
          { label: "K", meaning: "Potassium" },
          { label: "Na", meaning: "Sodium" },
        ],
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Neurotransmitters are released most commonly from the",
        multipleChoiceOptions: [
          { text: "Cell body", image: "" },
          { text: "Dendrites", image: "" },
          { text: "Axon terminals", image: "" },
          { text: "Axon hillock", image: "" },
        ],
        multipleChoiceAnswer: "Axon terminals",
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "If a cation has equal intra- and exracellular concentrations, then which statement is true?",
        multipleChoiceOptions: [
          { text: "At −70 mV, the chemical force on the ion is zero", image: "" },
          { text: "At −70 mV, the electrical force on the ion acts to move it into the cell", image: "" },
          { text: "At +30 mV, the chemical force on the ion is zero", image: "" },
          { text: "The equilibrium potential for the ion is zero", image: "" },
          { text: "At −70 mV, the electrochemical force on the ion acts to move it out of the cell", image: "" },
        ],
        multipleChoiceAnswer: "The equilibrium potential for the ion is zero",
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "An action potential's depolarization phase is caused by ____",
        multipleChoiceOptions: [
          { text: "Opening of {K} channels", image: "" },
          { text: "Closing of {K} channels", image: "" },
          { text: "Opening of {Na} channels", image: "" },
          { text: "Closing of {Na} channels", image: "" },
        ],
        multipleChoiceAnswer: "Opening of {Na} channels",
        tooltipTerms: [
          { label: "K", meaning: "Potassium" },
          { label: "Na", meaning: "Sodium" },
        ],
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "During the relative refractory period, a second action potential",
        multipleChoiceOptions: [
          { text: "Cannot be elicited", image: "" },
          { text: "Can be elicited by a threshold stimulus", image: "" },
          { text: "Can be elicited by a subthreshold stimulus", image: "" },
          { text: "Can be elicited by a suprathreshold stimulus", image: "" },
        ],
        multipleChoiceAnswer: "Can be elicited by a suprathreshold stimulus",
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "Nerves are found",
        multipleChoiceOptions: [
          { text: "In the central nervous system", image: "" },
          { text: "In the peripheral nervous system", image: "" },
        ],
        multipleChoiceAnswer: "In the peripheral nervous system",
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "If a neuron's membrane potential becomes more negative than at rest, it is ____ and ____",
        multipleChoiceOptions: [
          { text: "depolarized; more", image: "" },
          { text: "hyperpolarized; more", image: "" },
          { text: "depolarized; less", image: "" },
          { text: "hyperpolarized; less", image: "" },
        ],
        multipleChoiceAnswer: "hyperpolarized; less",
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "Oubain is a poison that blocks the {Na}⁺/{K}⁺ pump. If this pump is blocked, then {K} concentration in the cell would",
        multipleChoiceOptions: [
          { text: "Increase", image: "" },
          { text: "Decrease", image: "" },
          { text: "Not change", image: "" },
        ],
        multipleChoiceAnswer: "Decrease",
        tooltipTerms: [
          { label: "K", meaning: "Potassium" },
          { label: "Na", meaning: "Sodium" },
        ],
      },
      {
        id: 9,
        type: "multiple-choice",
        question: "If {K} concentrations in the extracellular fluid of the brain increased, activity in the brain would",
        multipleChoiceOptions: [
          { text: "Increase", image: "" },
          { text: "Decrease", image: "" },
          { text: "Not change", image: "" },
        ],
        multipleChoiceAnswer: "Increase",
        tooltipTerms: [{ label: "K", meaning: "Potassium" }],
      },
      {
        id: 10,
        type: "multiple-choice",
        question: "Which neurons are part of the peripheral nervous system?",
        multipleChoiceOptions: [
          { text: "Motor neurons innervating skeletal muscles", image: "" },
          { text: "Parasympathetic neurons", image: "" },
          { text: "Sympathetic neurons", image: "" },
          { text: "All of the above", image: "" },
        ],
        multipleChoiceAnswer: "All of the above",
      },
      {
        id: 11,
        type: "multiple-choice",
        question: "Which axons exhibits the greatest conduction velocity?",
        multipleChoiceOptions: [
          { text: "An unmyelinated axon with diameter 5 μm", image: "" },
          { text: "A myelinated axon with diameter 5 μm", image: "" },
          { text: "An unmyelinated axon with diameter 20 μm", image: "" },
          { text: "A myelinated axon with diameter 20 μm", image: "" },
        ],
        multipleChoiceAnswer: "A myelinated axon with diameter 20 μm",
      },
      {
        id: 12,
        type: "multiple-choice",
        question: "Which best describes the status of {Na} channels at the resting membrane potential?",
        multipleChoiceOptions: [
          { text: "Activation gates are open and inactivation gates are closed", image: "" },
          { text: "Activation gates are closed and inactivation gates are open", image: "" },
          { text: "Activation gates and inactivation gates are closed", image: "" },
          { text: "Activation gates and inactivation gates are open", image: "" },
        ],
        multipleChoiceAnswer: "Activation gates are closed and inactivation gates are open",
        tooltipTerms: [{ label: "Na", meaning: "Sodium" }],
      },
      {
        id: 13,
        type: "multiple-choice",
        question: "Which is not a part of the efferent division of the nervous system?",
        multipleChoiceOptions: [
          { text: "Parasympathetic nervous system", image: "" },
          { text: "Sympathetic nervous system", image: "" },
          { text: "Motor neurons", image: "" },
          { text: "Sensory receptors", image: "" },
        ],
        multipleChoiceAnswer: "Sensory receptors",
      },
      {
        id: 14,
        type: "multiple-choice",
        question: "Of the following ions, which is (are) ­located in greater concentration in the cell?",
        multipleChoiceOptions: [
          { text: "{Na} only", image: "" },
          { text: "{K} only", image: "" },
          { text: "Chloride only", image: "" },
          { text: "{Na} and potassium", image: "" },
          { text: "{K} and chloride", image: "" },
        ],
        multipleChoiceAnswer: "{K} only",
        tooltipTerms: [
          { label: "K", meaning: "Potassium" },
          { label: "Na", meaning: "Sodium" },
        ],
      },
      {
        id: 15,
        type: "multiple-choice",
        question: "Which statements about graded potentials is false?",
        multipleChoiceOptions: [
          { text: "The magnitude of a graded potential varies with the strength of the stimulus", image: "" },
          { text: "Some graded potentials are ­hyperpolarizations; others are depolarizations", image: "" },
          { text: "Graded potentials are produced at ligand-gated ion channels", image: "" },
          { text: "Graded potentials can sum over space and time", image: "" },
          { text: "Graded potentials are limited in ­duration by the refractory period", image: "" },
        ],
        multipleChoiceAnswer: "Graded potentials are limited in ­duration by the refractory period",
      },
      {
        id: 16,
        type: "multiple-choice",
        question: "What are the subdivisions of the peripheral nervous system?",
        multipleChoiceOptions: [{ text: "afferent and efferent", image: "" }],
        multipleChoiceAnswer: "afferent and efferent",
      },
      {
        id: 17,
        type: "multiple-choice",
        question: "Info from the periphery is brought to the central nervous system by (afferent/efferent) pathways",
        multipleChoiceOptions: [{ text: "afferent", image: "" }],
        multipleChoiceAnswer: "afferent",
      },
      {
        id: 18,
        type: "multiple-choice",
        question: "Which cell type is more abundant in the nervous system—glial cells or neurons?",
        multipleChoiceOptions: [{ text: "glial cells", image: "" }],
        multipleChoiceAnswer: "glial cells",
      },
      {
        id: 19,
        type: "multiple-choice",
        question: "Voltage-gated {Ca} channels are located in which region(s) of a neuron?",
        multipleChoiceOptions: [{ text: "axon terminal", image: "" }],
        multipleChoiceAnswer: "axon terminal",
        tooltipTerms: [{ label: "Ca", meaning: "Calcium" }],
      },
      {
        id: 20,
        type: "multiple-choice",
        question: "____ form myelin in peripheral nervous system, and ____ form myelin in the central nervous system",
        multipleChoiceOptions: [
          { text: "Schwann cells, Oligodendrocytes", image: "" },
          { text: "Oligodendrocytes, Schwann cells", image: "" },
        ],
        multipleChoiceAnswer: "Schwann cells, Oligodendrocytes",
      },
      {
        id: 21,
        type: "multiple-choice",
        question: "Myelin (increases/decreases) conduction velocity in axons",
        multipleChoiceOptions: [{ text: "increases", image: "" }],
        multipleChoiceAnswer: "increases",
      },
      {
        id: 22,
        type: "multiple-choice",
        question: "If an anion is more concentrated outside the cell, its equilibrium is ____",
        multipleChoiceOptions: [
          { text: "negative", image: "" },
          { text: "positive", image: "" },
          { text: "zero", image: "" },
        ],
        multipleChoiceAnswer: "negative",
      },
      {
        id: 23,
        type: "multiple-choice",
        question: "Which ion is closer to equilibrium at the resting membrane potential of -70 mV: {Na} or {K}?",
        multipleChoiceOptions: [{ text: "{K}", image: "" }],
        multipleChoiceAnswer: "{K}",
        tooltipTerms: [
          { label: "Na", meaning: "Sodium" },

          { label: "K", meaning: "Potassium" },
        ],
      },
      {
        id: 24,
        type: "multiple-choice",
        question: "In the peripheral nervous system, cell bodies of afferent neurons are located in ____",
        multipleChoiceOptions: [{ text: "ganglion", image: "" }],
        multipleChoiceAnswer: "ganglion",
      },
      {
        id: 25,
        type: "multiple-choice",
        question: "The electrochemical force on {K}⁺ at the peak of an action potential is ____ the force at rest",
        multipleChoiceOptions: [
          { text: "greater than", image: "" },
          { text: "less than", image: "" },
        ],
        multipleChoiceAnswer: "greater than",
        tooltipTerms: [{ label: "K", meaning: "Potassium" }],
      },
      {
        id: 26,
        type: "multiple-choice",
        question: "Both {Na} and {K} channels have inactivation gates that close shortly after the activation gates open",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "False",
        tooltipTerms: [
          { label: "K", meaning: "Potassium" },
          { label: "Na", meaning: "Sodium" },
        ],
      },
      {
        id: 27,
        type: "multiple-choice",
        question: "When {Na} inactivation gates are closed, a second action potential is impossible",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "True",
        tooltipTerms: [{ label: "Na", meaning: "Sodium" }],
      },
      {
        id: 28,
        type: "multiple-choice",
        question: "In myelinated axons, action potentials are propagated by ____ conduction",
        multipleChoiceOptions: [{ text: "saltatory", image: "" }],
        multipleChoiceAnswer: "saltatory",
      },
      {
        id: 29,
        type: "multiple-choice",
        question: "The Na⁺/K⁺ pump causes the repolarization phase of an action potential",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "False",
      },
      {
        id: 30,
        type: "multiple-choice",
        question: "When a neuron is at an action potential peak (+30 mV) the electrical force direction for {K} ions is ____ the cell",
        multipleChoiceOptions: [
          { text: "Into", image: "" },
          { text: "Out Of", image: "" },
        ],
        multipleChoiceAnswer: "Out Of",
        tooltipTerms: [{ label: "K", meaning: "Potassium" }],
      },
    ],
  },
  {
    slug: "physiology-chapter-8",
    title: "Synaptic Transmission and Neural Integration",
    description: "physiology-chapter-8",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "If an anion’s electrochemical force drives it out of the cell, opening its channels would cause:",
        multipleChoiceOptions: [
          { text: "An EPSP", image: "" },
          { text: "An IPSP", image: "" },
          { text: "Stabilization of the membrane", image: "" },
          { text: "Not occur", image: "" },
        ],
        multipleChoiceAnswer: "An EPSP",
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Suppose all {Ca} could be removed from extracellular fluid surrounding a neuron. Such removal would inhibit a neuron's ability to",
        multipleChoiceOptions: [
          { text: "Produce action potentials", image: "" },
          { text: "Release neurotransmitter", image: "" },
          { text: "Respond to the binding of a neurotransmitter to its receptor", image: "" },
          { text: "Degrade neurotransmitters", image: "" },
        ],
        multipleChoiceAnswer: "Release neurotransmitter",
        tooltipTerms: [{ label: "Ca", meaning: "Calcium" }],
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "Synaptic vesicles",
        multipleChoiceOptions: [
          { text: "Store {Ca}", image: "" },
          { text: "Release neurotransmitters by exocytosis", image: "" },
          { text: "Degrade neurotransmitters", image: "" },
          { text: "Form gap junctions", image: "" },
          { text: "Synthesize neurotransmitters", image: "" },
        ],
        multipleChoiceAnswer: "Release neurotransmitters by exocytosis",
        tooltipTerms: [{ label: "Ca", meaning: "Calcium" }],
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "If {Na} channels closed in response to a stimulus, then",
        multipleChoiceOptions: [
          { text: "The neuron would be depolarized", image: "" },
          { text: "The neuron would be hyperpolarized", image: "" },
          { text: "The membrane potential would be stabilized", image: "" },
          { text: "A second messenger would be produced", image: "" },
          { text: "The neuron would remain at rest", image: "" },
        ],
        multipleChoiceAnswer: "The neuron would be hyperpolarized",
        tooltipTerms: [{ label: "Na", meaning: "Sodium" }],
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "A fast EPSP is most commonly produced by",
        multipleChoiceOptions: [
          { text: "The opening of sodium-selective channels", image: "" },
          { text: "The opening of potassium-selective channels", image: "" },
          { text: "The opening of chloride channels", image: "" },
          { text: "The opening of channels selective for both {Na} and {K}", image: "" },
          { text: "The opening of calcium-selective channels", image: "" },
        ],
        multipleChoiceAnswer: "The opening of channels selective for both {Na} and {K}",
        tooltipTerms: [
          { label: "Na", meaning: "Sodium" },

          { label: "K", meaning: "Potassium" },
        ],
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "The enzyme that catalyzes the synthesis of acetylcholine is",
        multipleChoiceOptions: [
          { text: "Adenylate cyclase", image: "" },
          { text: "Choline acetyl transferase", image: "" },
          { text: "Monoamine oxidase", image: "" },
          { text: "Acetylcholinesterase", image: "" },
          { text: "Catechol-O-methyltransferase", image: "" },
        ],
        multipleChoiceAnswer: "Choline acetyl transferase",
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "Which neurotransmitters is a biogenic amine but not a catecholamine?",
        multipleChoiceOptions: [
          { text: "Norepinephrine", image: "" },
          { text: "Serotonin", image: "" },
          { text: "Dopamine", image: "" },
          { text: "Epinephrine", image: "" },
        ],
        multipleChoiceAnswer: "Serotonin",
      },

      {
        id: 8,
        type: "multiple-choice",
        question: "Which is most likely to occur at an axoaxonic synapse?",
        multipleChoiceOptions: [
          { text: "An EPSP", image: "" },
          { text: "An IPSP", image: "" },
          { text: "Stabilization of the membrane potential", image: "" },
          { text: "Temporal summation", image: "" },
          { text: "Presynaptic modulation", image: "" },
        ],
        multipleChoiceAnswer: "Presynaptic modulation",
      },
      {
        id: 9,
        type: "multiple-choice",
        question: "What happens to synaptic cleft neurotransmitter concentration when presynaptic neuron action potentials frequency increases?",
        multipleChoiceOptions: [
          { text: "It increases", image: "" },
          { text: "It decreases", image: "" },
          { text: "It remains constant", image: "" },
        ],
        multipleChoiceAnswer: "It increases",
      },
      {
        id: 10,
        type: "multiple-choice",
        question: "What is the sum of {EPSPs} from several synapses called?",
        multipleChoiceOptions: [
          { text: "Membrane Stabilization", image: "" },
          { text: "Presynaptic Inhibition", image: "" },
          { text: "Presynaptic Facilitation", image: "" },
          { text: "Temporal Summation", image: "" },
          { text: "Spatial Summation", image: "" },
        ],
        multipleChoiceAnswer: "Spatial Summation",
        tooltipTerms: [{ label: "EPSPs", meaning: "Excitatory PostSynaptic Potentials" }],
      },
      {
        id: 11,
        type: "multiple-choice",
        question: "At electrical synapses, which type of junction exists between the 2 cells?",
        multipleChoiceOptions: [{ text: "gap junction", image: "" }],
        multipleChoiceAnswer: "gap junction",
      },
      {
        id: 12,
        type: "multiple-choice",
        question: "When open ion channels allow {Na} and {K} ions to move through, there is no change in membrane potential",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "False",
        tooltipTerms: [
          { label: "K", meaning: "Potassium" },
          { label: "Na", meaning: "Sodium" },
        ],
      },
      {
        id: 13,
        type: "multiple-choice",
        question: "Neurotransmitter receptors are found at (chemical/electrical) synapses",
        multipleChoiceOptions: [{ text: "chemical", image: "" }],
        multipleChoiceAnswer: "chemical",
      },
      {
        id: 14,
        type: "multiple-choice",
        question: "A synapse is excitatory or inhibitory by the coupling between neurotransmitter receptor and ion channels in postsynaptic cell",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "True",
      },
      {
        id: 15,
        type: "multiple-choice",
        question: "Synaptic delay is the time an AP travels the axon",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "False",
      },
      {
        id: 16,
        type: "multiple-choice",
        question: "A given neurotransmitter might be excitatory at one synapse and inhibitory at another synapse",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "True",
      },
      {
        id: 17,
        type: "multiple-choice",
        question: "Presynaptic facilitation reduces release of an inhibitory transmitter. The postsynaptic hyperpolarization becomes:",
        multipleChoiceOptions: [
          { text: "larger", image: "" },
          { text: "smaller", image: "" },
          { text: "unchanged", image: "" },
          { text: "absent", image: "" },
        ],
        multipleChoiceAnswer: "larger",
      },
      {
        id: 18,
        type: "multiple-choice",
        question: "The response to a neurotransmitter is faster at (ionotropic/metabotropic) receptors",
        multipleChoiceOptions: [{ text: "ionotropic", image: "" }],
        multipleChoiceAnswer: "ionotropic",
      },
      {
        id: 19,
        type: "multiple-choice",
        question: "The enzymes that catalyze the degradation of catecholamines are ____ and ____",
        multipleChoiceOptions: [{ text: "", image: "" }],
        multipleChoiceAnswer: "",
      },
      {
        id: 20,
        type: "multiple-choice",
        question: "Adenylate cyclase catalyzes the formation of ____",
        multipleChoiceOptions: [{ text: "monoamine oxidase (MAO), catechol-O-methyltransferase (COMT)", image: "" }],
        multipleChoiceAnswer: "monoamine oxidase (MAO), catechol-O-methyltransferase (COMT)",
      },
    ],
  },
  {
    slug: "physiology-chapter-9",
    title: "Nervous System: Central System",
    description: "physiology-chapter-9",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "Touch perception requires that sensory neurons from the skin transmit info to",
        multipleChoiceOptions: [
          { text: "The basal nuclei", image: "" },
          { text: "The somatosensory cortex", image: "" },
          { text: "The hypothalamus", image: "" },
          { text: "The limbic system", image: "" },
          { text: "The hippocampus", image: "" },
        ],
        multipleChoiceAnswer: "The somatosensory cortex",
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "Which of the meninges is closest to the neural tissue?",
        multipleChoiceOptions: [
          { text: "Dura mater", image: "" },
          { text: "Arachnoid mater", image: "" },
          { text: "Pia mater", image: "" },
        ],
        multipleChoiceAnswer: "Pia mater",
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "At rest, the brain accounts for how much of O₂ consumption within the body?",
        multipleChoiceOptions: [
          { text: "2%", image: "" },

          { text: "5%", image: "" },
          { text: "20%", image: "" },
          { text: "40%", image: "" },
          { text: "50%", image: "" },
        ],
        multipleChoiceAnswer: "20%",
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Hippocampus",
        multipleChoiceOptions: [
          { text: "Corpus callosum", image: "" },
          { text: "Corticospinal tract", image: "" },
          { text: "Central canal", image: "" },
          { text: "Cerebral ventricles", image: "" },
        ],
        multipleChoiceAnswer: "Corticospinal tract",
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "All spinal nerves contain",
        multipleChoiceOptions: [
          { text: "Afferent fibers", image: "" },
          { text: "Efferent fibers", image: "" },
          { text: "Both afferent and efferent fibers", image: "" },
          { text: "Neither afferent nor efferent fibers", image: "" },
        ],
        multipleChoiceAnswer: "Both afferent and efferent fibers",
      },

      {
        id: 6,
        type: "multiple-choice",
        question: "The origin of neurons of the corticospinal tract is the",
        multipleChoiceOptions: [
          { text: "Ventral horn of the spinal cord", image: "" },
          { text: "Somatosensory cortex", image: "" },
          { text: "Primary motor cortex", image: "" },
          { text: "Cerebellum", image: "" },
          { text: "Thalamus", image: "" },
        ],
        multipleChoiceAnswer: "Primary motor cortex",
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "Which is not a component of the limbic system?",
        multipleChoiceOptions: [
          { text: "Hippocampus", image: "" },
          { text: "Cerebral cortex", image: "" },
          { text: "Amygdala", image: "" },
          { text: "Midbrain", image: "" },
          { text: "Hypothalamus", image: "" },
        ],
        multipleChoiceAnswer: "Midbrain",
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "The circadian rhythm is established by which brain area?",
        multipleChoiceOptions: [
          { text: "Suprachiasmatic nucleus", image: "" },
          { text: "Amygdala", image: "" },
          { text: "Thalamus", image: "" },
          { text: "Occipital lobe of the cerebral cortex", image: "" },
          { text: "Pons", image: "" },
        ],
        multipleChoiceAnswer: "Suprachiasmatic nucleus",
      },
      {
        id: 9,
        type: "multiple-choice",
        question: "Parkinson’s disease is caused by loss of dopaminergic innervation of the",
        multipleChoiceOptions: [
          { text: "Cerebellum", image: "" },
          { text: "Basal nuclei", image: "" },
          { text: "Brainstem", image: "" },
          { text: "Primary motor cortex", image: "" },
          { text: "Thalamus", image: "" },
        ],
        multipleChoiceAnswer: "Basal nuclei",
      },
      {
        id: 10,
        type: "multiple-choice",
        question: "Which reflex is monosynaptic?",
        multipleChoiceOptions: [
          { text: "Withdrawal reflex", image: "" },
          { text: "Crossed-extensor reflex", image: "" },
          { text: "Muscle spindle stretch reflex", image: "" },
          { text: "All of the above", image: "" },
        ],
        multipleChoiceAnswer: "Muscle spindle stretch reflex",
      },

      {
        id: 11,
        type: "multiple-choice",
        question: "The area of the brain important for the maintenance of posture is the",
        multipleChoiceOptions: [
          { text: "Primary motor cortex", image: "" },
          { text: "Basal nuclei", image: "" },
          { text: "Brainstem", image: "" },
          { text: "Cerebellum", image: "" },
          { text: "Limbic system", image: "" },
        ],
        multipleChoiceAnswer: "Brainstem",
      },
      {
        id: 12,
        type: "multiple-choice",
        question: "Long-term potentiation is",
        multipleChoiceOptions: [
          { text: "A prolonged increase in synaptic activity at a given synapse", image: "" },
          { text: "The formation of new synapses", image: "" },
          { text: "Memory from more than 10 years ago", image: "" },
          { text: "Activated through the ascending reticular activating system", image: "" },
        ],
        multipleChoiceAnswer: "A prolonged increase in synaptic activity at a given synapse",
      },
      {
        id: 13,
        type: "multiple-choice",
        question: "Where is cerebrospinal fluid synthesized?",
        multipleChoiceOptions: [{ text: "choroid plexus", image: "" }],
        multipleChoiceAnswer: "choroid plexus",
      },
      {
        id: 14,
        type: "multiple-choice",
        question: "Which type of junction between the endothelial cells of brain capillaries produces the blood-brain barrier?",
        multipleChoiceOptions: [{ text: "tight junction", image: "" }],
        multipleChoiceAnswer: "tight junction",
      },
      {
        id: 15,
        type: "multiple-choice",
        question: "Myelinated axons are found in (gray/white) matter",
        multipleChoiceOptions: [{ text: "white", image: "" }],
        multipleChoiceAnswer: "white",
      },
      {
        id: 16,
        type: "multiple-choice",
        question: "Somatic efferents originate in the (dorsal/ventral) horn of the spinal cord",
        multipleChoiceOptions: [
          { text: "dorsal", image: "" },
          { text: "ventral", image: "" },
        ],
        multipleChoiceAnswer: "ventral",
      },
      {
        id: 17,
        type: "multiple-choice",
        question: "The major function of the (cerebrum/cerebellum) is to coordinate body movements",
        multipleChoiceOptions: [{ text: "cerebellum", image: "" }],
        multipleChoiceAnswer: "cerebellum",
      },
      {
        id: 18,
        type: "multiple-choice",
        question: "Which 3 structures make up the brainstem?",
        multipleChoiceOptions: [{ text: "midbrain, pons, medulla", image: "" }],
        multipleChoiceAnswer: "midbrain, pons, medulla",
      },
      {
        id: 19,
        type: "multiple-choice",
        question: "Which side of the brain is generally associated with creativity?",
        multipleChoiceOptions: [
          { text: "left", image: "" },
          { text: "right", image: "" },
        ],
        multipleChoiceAnswer: "right",
      },
      {
        id: 20,
        type: "multiple-choice",
        question: "What are the 2 main structures of the diencephalon?",
        multipleChoiceOptions: [{ text: "thalamus, hypothalamus", image: "" }],
        multipleChoiceAnswer: "thalamus, hypothalamus",
      },
      {
        id: 21,
        type: "multiple-choice",
        question: "What is the major sensory relay nucleus to the cortex?",
        multipleChoiceOptions: [{ text: "thalamus", image: "" }],
        multipleChoiceAnswer: "thalamus",
      },
      {
        id: 22,
        type: "multiple-choice",
        question: "The area of the brain most closely associated with fear is the ____",
        multipleChoiceOptions: [{ text: "amygdala", image: "" }],
        multipleChoiceAnswer: "amygdala",
      },
      {
        id: 23,
        type: "multiple-choice",
        question: "The ____system is associated with emotions, learning, and memory",
        multipleChoiceOptions: [{ text: "limbic", image: "" }],
        multipleChoiceAnswer: "limbic",
      },
      {
        id: 24,
        type: "multiple-choice",
        question: "The ability to recall info when taking physiology exams is an example of____  memory",
        multipleChoiceOptions: [{ text: "declarative", image: "" }],
        multipleChoiceAnswer: "declarative",
      },
      {
        id: 25,
        type: "multiple-choice",
        question: "Do {afferents} for reflexes differ from those to brain?",
        multipleChoiceOptions: [
          { text: "Yes", image: "" },
          { text: "No", image: "" },
        ],
        multipleChoiceAnswer: "No",
        tooltipTerms: [{ label: "afferents", meaning: "Nerve fibers or neurons that carry sensory information toward the central nervous system (CNS)" }],
        feedbackExplanation: "Afferent neurons that trigger reflexes can also send signals to the brain via ascending pathways. Reflex circuits in the spinal cord don't exclude communication to the brain, so they are not completely different sets of afferents—the same sensory neuron can participate in both.",
      },
    ],
  },
  {
    slug: "physiology-chapter-10",
    title: "Nervous System: Autonomic and Motor Systems",
    description: "physiology-chapter-10",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        type: "multiple-choice",
        question: "The strength of a stimulus is coded by",
        multipleChoiceOptions: [
          { text: "The size of the receptor potential", image: "" },
          { text: "The size of the action potentials", image: "" },
          { text: "The frequency of action potentials", image: "" },
          { text: "Both the size of the receptor potential and the frequency of action potentials", image: "" },
        ],
        multipleChoiceAnswer: "Both the size of the receptor potential and the frequency of action potentials",
      },
      {
        id: 2,
        type: "multiple-choice",
        question: "The mechanism by which a receptor converts a stimulus into an electrical signal is called",
        multipleChoiceOptions: [
          { text: "Conduction", image: "" },
          { text: "Convection", image: "" },
          { text: "Transduction", image: "" },
          { text: "Modulation", image: "" },
          { text: "Propagation", image: "" },
        ],
        multipleChoiceAnswer: "Transduction",
      },
      {
        id: 3,
        type: "multiple-choice",
        question: "In lateral inhibition,",
        multipleChoiceOptions: [
          { text: "The nervous system produces contrast to emphasize more-important info over less-important info", image: "" },
          { text: "Afferent neurons with neighboring receptive fields inhibit each other’s communication to second-order neurons", image: "" },
          { text: "The ability to locate the site of a stimulus is enhanced", image: "" },
          { text: "All of the above", image: "" },
        ],
        multipleChoiceAnswer: "All of the above",
      },
      {
        id: 4,
        type: "multiple-choice",
        question: "Which observation best illustrates the concept of the labeled line?",
        multipleChoiceOptions: [
          { text: "When a boxer gets punched in the eye, he perceives light", image: "" },
          { text: "Rotation of the head stimulates certain receptors in the vestibular system but not those in the visual system", image: "" },
          { text: "Info from different photoreceptors converges on a single ganglion cell that projects to the lateral geniculate nucleus", image: "" },
          { text: "Hair cells in the cochlea are stimulated by sound vibrations over a wide range of frequencies", image: "" },
        ],
        multipleChoiceAnswer: "When a boxer gets punched in the eye, he perceives light",
      },
      {
        id: 5,
        type: "multiple-choice",
        question: "Which best illustrates the concept of an adequate stimulus?",
        multipleChoiceOptions: [
          { text: "When a boxer gets punched in the eye, he perceives light", image: "" },
          { text: "Rotation of the head stimulates certain receptors in the vestibular system but not those in the visual system", image: "" },
          { text: "Info from different photoreceptors converges on a single ganglion cell that projects to the lateral geniculate nucleus", image: "" },
          { text: "Hair cells in the cochlea are stimulated by sound vibrations over a wide range of frequencies", image: "" },
        ],
        multipleChoiceAnswer: "Rotation of the head stimulates certain receptors in the vestibular system but not those in the visual system",
      },
      {
        id: 6,
        type: "multiple-choice",
        question: "Rubbing a sore area can decrease the sensation of pain by",
        multipleChoiceOptions: [
          { text: "Activating the endogenous analgesia systems", image: "" },
          { text: "Referring the pain to another area of the body", image: "" },
          { text: "Activating larger-diameter afferents, which activate an inhibitory interneuron, which inhibits the second-order neurons for pain", image: "" },
          { text: "Decreasing the number of action potentials in nociceptor afferents", image: "" },
          { text: "Presynaptic inhibition of substance P release", image: "" },
        ],
        multipleChoiceAnswer: "Activating larger-diameter afferents, which activate an inhibitory interneuron, which inhibits the second-order neurons for pain",
      },
      {
        id: 7,
        type: "multiple-choice",
        question: "In the dorsal column–medial lemniscal pathway,",
        multipleChoiceOptions: [
          { text: "Proprioception info is transmitted to the brain", image: "" },
          { text: "The first-order neuron communicates to the second-order neuron in the dorsal horn of the spinal cord", image: "" },
          { text: "The pathway crosses to the contralateral side in the spinal cord", image: "" },
          { text: "Both a and c", image: "" },
        ],
        multipleChoiceAnswer: "Proprioception info is transmitted to the brain",
      },
      {
        id: 8,
        type: "multiple-choice",
        question: "Which is the correct name of the pathway from the retina to the optic chiasm?",
        multipleChoiceOptions: [
          { text: "Optic tract", image: "" },
          { text: "Optic radiations", image: "" },
          { text: "Optic nerve", image: "" },
          { text: "Optic disk", image: "" },
        ],
        multipleChoiceAnswer: "Optic nerve",
      },
      {
        id: 9,
        type: "multiple-choice",
        question: "Which is the correct name of the pathway from the lateral geniculate nucleus of the thalamus to the visual cortex?",
        multipleChoiceOptions: [
          { text: "Optic tract", image: "" },
          { text: "Optic radiations", image: "" },
          { text: "Optic nerve", image: "" },
          { text: "Optic chiasm", image: "" },
          { text: "Optic disk", image: "" },
        ],
        multipleChoiceAnswer: "Optic radiations",
      },
      {
        id: 10,
        type: "multiple-choice",
        question: "Where would you expect to find the ascending tracts for somatosensory info?",
        multipleChoiceOptions: [
          { text: "In the white matter of the spinal cord", image: "" },
          { text: "In a spinal nerve", image: "" },
          { text: "In the gray matter of the spinal cord", image: "" },
          { text: "None of the above", image: "" },
        ],
        multipleChoiceAnswer: "In the white matter of the spinal cord",
      },
      {
        id: 11,
        type: "multiple-choice",
        question: "The ability to perceive different frequencies in sound vibrations is based on the fact that",
        multipleChoiceOptions: [
          { text: "The stereocilia of any given hair cell respond to only one frequency", image: "/images/Stereocilia.png" },
          { text: "Different areas of the basilar membrane resonate at different frequencies, such that sound of a particular frequency causes only a certain region of the membrane to vibrate", image: "" },
          { text: "The frequency of action potentials in the cochlear nerve varies in proportion to the frequency of a sound stimulus", image: "" },
        ],
        multipleChoiceAnswer: "Different areas of the basilar membrane resonate at different frequencies, such that sound of a particular frequency causes only a certain region of the membrane to vibrate",
      },
      {
        id: 12,
        type: "multiple-choice",
        question: "The stereocilia for hearing are exposed to",
        multipleChoiceOptions: [
          { text: "Endolymph in the scala vestibuli", image: "" },
          { text: "Perilymph in the scala vestibuli", image: "" },
          { text: "Endolymph in the scala media", image: "" },
          { text: "Perilymph in the scala media", image: "" },
          { text: "Endolymph in the scala tympani", image: "" },
        ],
        multipleChoiceAnswer: "Endolymph in the scala media",
        feedbackImage: "/images/Stereocilia.png",
      },
      {
        id: 13,
        type: "multiple-choice",
        question: "The parasympathetic nervous system causes",
        multipleChoiceOptions: [
          { text: "Contraction of the radial muscle of the iris", image: "" },
          { text: "Contraction of the ciliary muscle", image: "" },
          { text: "Pupillary dilation", image: "" },
        ],
        multipleChoiceAnswer: "Contraction of the ciliary muscle",
      },
      {
        id: 14,
        type: "multiple-choice",
        question: "The 2 types of thermoreceptors are ____ and ____",
        multipleChoiceOptions: [{ text: "warm, cold", image: "" }],
        multipleChoiceAnswer: "warm, cold",
      },
      {
        id: 15,
        type: "multiple-choice",
        question: "Receptors are most sensitive to energy from the ____ stimulus",
        multipleChoiceOptions: [{ text: "adequate", image: "" }],
        multipleChoiceAnswer: "adequate",
      },
      {
        id: 16,
        type: "multiple-choice",
        question: "A phasic receptor adapts (quickly/ slowly) to a constant stimulus",
        multipleChoiceOptions: [{ text: "quickly", image: "" }],
        multipleChoiceAnswer: "quickly",
      },
      {
        id: 17,
        type: "multiple-choice",
        question: "The 3 types of nociceptors are ____, ____, and ____",
        multipleChoiceOptions: [{ text: "mechanical, thermal, polymodal", image: "" }],
        multipleChoiceAnswer: "mechanical, thermal, polymodal",
      },
      {
        id: 18,
        type: "multiple-choice",
        question: "Info about touch detected on body's left side is transmitted to the brain in dorsal columns on the spinal cord's ____ side",
        multipleChoiceOptions: [
          { text: "Left", image: "" },
          { text: "Right", image: "" },
        ],
        multipleChoiceAnswer: "Left",
      },
      {
        id: 19,
        type: "multiple-choice",
        question: "When a photopigment absorbs light, cGMP levels (increase/decrease)",
        multipleChoiceOptions: [{ text: "decrease", image: "" }],
        multipleChoiceAnswer: "decrease",
      },
      {
        id: 20,
        type: "multiple-choice",
        question: "The first neurons that support production of action potentials in the visual pathway are ____",
        multipleChoiceOptions: [
          { text: "Ganglion Cells", image: "" },
          { text: "Bipolar Cells", image: "" },
          { text: "Photoreceptors", image: "" },
        ],
        multipleChoiceAnswer: "Ganglion Cells",
      },
      {
        id: 21,
        type: "multiple-choice",
        question: "The pitch of sound vibration reflects its (amplitude/frequency)",
        multipleChoiceOptions: [{ text: "frequency", image: "" }],
        multipleChoiceAnswer: "frequency",
      },
      {
        id: 22,
        type: "multiple-choice",
        question: "A hair cell in the cochlea can be excited by sounds of different frequencies",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "False",
      },
      {
        id: 23,
        type: "multiple-choice",
        question: "The process by which the lens becomes stronger for close-up vision is called ____",
        multipleChoiceOptions: [{ text: "Accomodation", image: "" }],
        multipleChoiceAnswer: "Accomodation",
      },
      {
        id: 24,
        type: "multiple-choice",
        question: "Rods and cones differ with regard to the type of (retinal/opsin) they contain",
        multipleChoiceOptions: [{ text: "Opsin", image: "" }],
        multipleChoiceAnswer: "Opsin",
      },
      {
        id: 25,
        type: "multiple-choice",
        question: "A single ganglion cell will either be excited or inhibited by light applied to its visual field",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "False",
      },
      {
        id: 26,
        type: "multiple-choice",
        question: "The visual cortex on the brain's left side receives info from the right eye only",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "True",
        feedbackImage: "/images/VisualCortex.png",
      },
      {
        id: 27,
        type: "multiple-choice",
        question: "Odorant molecules must be dissolved in mucus if they are to bind to olfactory receptors",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "True",
      },
      {
        id: 28,
        type: "multiple-choice",
        question: "A given taste receptor cell responds to only one of the 4 primary tastes",
        multipleChoiceOptions: [
          { text: "True", image: "" },
          { text: "False", image: "" },
        ],
        multipleChoiceAnswer: "False",
      },
    ],
  },

  //   {
  //     slug: "physiology-chapter-11",
  //     title: "Nervous System: Autonomic and Motor Systems",
  //     description: "physiology-chapter-11",
  //     image: "/images/anatomy.png",
  //     questions: [
  //       {
  //         id: 1,
  //         type: "multiple-choice",
  //         question: "Effector organs of the autonomic nervous system include all of the following except",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Heart muscle", "Smooth muscle in the pupils of the eye", "Respiratory muscles", "Sweat glands", "Salivary glands"],
  //         multipleChoiceAnswer: "Respiratory muscles",
  //       },
  //       {
  //         id: 2,
  //         type: "multiple-choice",
  //         question: "If sympathetic activity inhibits pancreatic secretions, then the parasympathetic nervous system should",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Inhibit pancreatic secretions as well", "Stimulate pancreatic secretions", "Have no effect on pancreatic secretions"],
  //         multipleChoiceAnswer: "Stimulate pancreatic secretions",
  //         feedbackExplanation: "The autonomic nervous system has dual innervation by the sympathetic and parasympathetic nervous system",
  //       },
  //       {
  //         id: 3,
  //         type: "multiple-choice",
  //         question: "The adrenal medulla",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Contains sympathetic postganglionic neurons", "Is part of the brainstem", "Releases epinephrine into the blood", "Is part of the parasympathetic nervous system", "Is controlled by the somatic nervous system"],
  //         multipleChoiceAnswer: "Releases epinephrine into the blood",
  //       },
  //       {
  //         id: 4,
  //         type: "multiple-choice",
  //         question: "The origin of spinal preganglionic neurons is the",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Ventral horn of the spinal cord", "Dorsal horn of the spinal cord", "Lateral horn of the spinal cord"],
  //         multipleChoiceAnswer: "Lateral horn of the spinal cord",
  //       },
  //       {
  //         id: 5,
  //         type: "multiple-choice",
  //         question: "The origin of motor neurons is the",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Ventral horn of the spinal cord", "Dorsal horn of the spinal cord", "Lateral horn of the spinal cord"],
  //         multipleChoiceAnswer: "Ventral horn of the spinal cord",
  //       },
  //       {
  //         id: 6,
  //         type: "multiple-choice",
  //         question: "Which second messengers stimulates the release of {Ca} from intracellular stores?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "cAMP", "Inositol triphosphate", "Diacylglycerol"],
  //         multipleChoiceAnswer: "Inositol triphosphate",
  //         tooltipTerms: [{ label: "Ca", meaning: "Calcium" }],
  //       },
  //       {
  //         id: 7,
  //         type: "multiple-choice",
  //         question: "How many motor neurons innervate a single skeletal muscle cell?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Zero", "One", "Several", "Hundreds", "Millions"],
  //         multipleChoiceAnswer: "One",
  //       },
  //       {
  //         id: 8,
  //         type: "multiple-choice",
  //         question: "Which branch of the autonomic nervous system is most active when the body is at rest?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "parasympathetic"],
  //         multipleChoiceAnswer: "parasympathetic",
  //       },
  //       {
  //         id: 9,
  //         type: "multiple-choice",
  //         question: "Which part of the adrenal gland secretes epinephrine?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "medulla"],
  //         multipleChoiceAnswer: "medulla",
  //       },
  //       {
  //         id: 10,
  //         type: "multiple-choice",
  //         question: "Decrease in cAMP is associated with which class of adrenergic receptor?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "α₂ adrenergic"],
  //         multipleChoiceAnswer: "α₂ adrenergic",
  //       },
  //       {
  //         id: 11,
  //         type: "multiple-choice",
  //         question: "β2 adrenergic receptors have a greater affinity for (epinephrine/norepinephrine)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "epinephrine"],
  //         multipleChoiceAnswer: "epinephrine",
  //       },
  //     ],
  //   },

  //   {
  //     slug: "physiology-chapter-12",
  //     title: "Muscle Physiology",
  //     description: "physiology-chapter-12",
  //     image: "/images/anatomy.png",
  //     questions: [
  //       {
  //         id: 1,
  //         type: "multiple-choice",
  //         question: "When a muscle cell is relaxed and intracellular ATP levels are normal, a crossbridge will remain in which states?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Bound to actin and in the low-energy form", "Bound to actin and in the high-energy form", "In the high-energy form, with ADP and Pi bound to it", "In the high-energy form, with ATP bound to it", "In the low-energy form with nothing bound to it"],
  //         multipleChoiceAnswer: "In the high-energy form, with ADP and Pi bound to it",
  //       },
  //       {
  //         id: 2,
  //         type: "multiple-choice",
  //         question: "During a muscle contraction, which does not change length?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "The distance between Z lines", "The width of I bands", "The width of A bands", "None of the above"],
  //         multipleChoiceAnswer: "The width of A bands",
  //       },
  //       {
  //         id: 3,
  //         type: "multiple-choice",
  //         question: "Which would tend to ­reduce the lactic acid concentration that accumulates in a muscle cell as a ­result of contractile activity?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Increasing the glycolytic enzymes concentration", "Decreasing the O₂ supply to the cell", "Increasing the diameter of the cell", "Increasing the number of mitochondria in the cell", "All of the above"],
  //         multipleChoiceAnswer: "Increasing the number of mitochondria in the cell",
  //       },
  //       {
  //         id: 4,
  //         type: "multiple-choice",
  //         question: "Which statement is a valid generalization regarding the properties of smooth muscle?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },

  //           "Neurotransmitters can either excite or inhibit smooth muscle contraction, but any given neurotransmitter is always excitatory or inhibitory, regardless of where the muscle is located",
  //           "A given smooth muscle cell can respond to more than one type of neurotransmitter",
  //           "Smooth muscle cells are generally unresponsive to neurotransmitters of all types",
  //           "Smooth muscle cells can respond to neural input from the somatic or autonomic nervous systems",
  //           "None of the above",
  //         ],
  //         multipleChoiceAnswer: "A given smooth muscle cell can respond to more than one type of neurotransmitter",
  //       },
  //       {
  //         id: 5,
  //         type: "multiple-choice",
  //         question: "Which is not a determinant of whole muscle tension?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "The number of muscle fibers contracting", "The tension produced by each contracting fiber", "The proportion of each motor unit contracting at any given time", "The extent of fatigue", "The frequency of action potentials in the motor neurons"],
  //         multipleChoiceAnswer: "The proportion of each motor unit contracting at any given time",
  //       },
  //       {
  //         id: 6,
  //         type: "multiple-choice",
  //         question: "In an isotonic contraction,",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Muscle length shortens", "Muscle tension exceeds the force of the load", "The load is moved", "Both a and c", "All of the above"],
  //         multipleChoiceAnswer: "All of the above",
  //       },
  //       {
  //         id: 7,
  //         type: "multiple-choice",
  //         question: "Which is true for the ­excitation-contraction coupling of all muscle types (skeletal, cardiac, and smooth)?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "An action potential causes {Ca} levels in the cytosol to increase", "{Ca} binds to troponin", "Thick and thin filaments slide past each other", "Both an action potential causes calcium levels in the cytosol to increase and thick and thin filaments slide past each other"],
  //         multipleChoiceAnswer: "Both an action potential causes calcium levels in the cytosol to increase and thick and thin filaments slide past each other",
  //         tooltipTerms: [{ label: "Ca", meaning: "Calcium" }],
  //       },
  //       {
  //         id: 8,
  //         type: "multiple-choice",
  //         question: "During contraction of a skeletal muscle fiber,",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "The thick filaments contract", "The thin filaments contract", "The A band becomes shorter", "The I band becomes shorter"],
  //         multipleChoiceAnswer: "The I band becomes shorter",
  //       },
  //       {
  //         id: 9,
  //         type: "multiple-choice",
  //         question: "Which statements concerning the characteristics of different types of muscle fibers is false?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "The higher the myosin ATPase activity, the faster the speed of contraction", "Muscles that have high glycolytic capacity and large glycogen stores are more resistant to fatigue", "Oxidative types of muscle fibers contain myoglobin", "Oxidative fibers have a richer blood supply", "Larger-diameter fibers can produce greater tension"],
  //         multipleChoiceAnswer: "Muscles that have high glycolytic capacity and large glycogen stores are more resistant to fatigue",
  //       },
  //       {
  //         id: 10,
  //         type: "multiple-choice",
  //         question: "Which muscle types contain gap junctions?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Both skeletal muscle and smooth muscle", "Both smooth muscle and cardiac muscle"],
  //         multipleChoiceAnswer: "Both smooth muscle and cardiac muscle",
  //       },
  //       {
  //         id: 11,
  //         type: "multiple-choice",
  //         question: "In skeletal muscle, when sarcoplasmic reticulum releases {Ca}, it binds to ____ to initiate crossbridge cycle",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Troponin", "Tropomyosin"],
  //         multipleChoiceAnswer: "Troponin",
  //         tooltipTerms: [{ label: "Ca", meaning: "Calcium" }],
  //       },
  //       {
  //         id: 12,
  //         type: "multiple-choice",
  //         question: "When a muscle fiber contracts, the I bands shorten",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "True",
  //       },
  //       {
  //         id: 13,
  //         type: "multiple-choice",
  //         question: "Glycolytic fibers generate more force than oxidative fibers because they are larger in diameter",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "True",
  //       },
  //       {
  //         id: 14,
  //         type: "multiple-choice",
  //         question: "(Glycolytic/Oxidative) fibers contain high concentrations of the O₂-binding protein myoglobin",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Oxidative"],
  //         multipleChoiceAnswer: "Oxidative",
  //       },
  //       {
  //         id: 15,
  //         type: "multiple-choice",
  //         question: "The plasma membrane of a muscle cell is also known as the ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "sarcolemma"],
  //         multipleChoiceAnswer: "sarcolemma",
  //       },
  //       {
  //         id: 16,
  //         type: "multiple-choice",
  //         question: "During muscle contraction, ATP hydrolysis is catalyzed by (myosin head groups/actin monomers)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "myosin head groups"],
  //         multipleChoiceAnswer: "myosin head groups",
  //       },
  //       {
  //         id: 17,
  //         type: "multiple-choice",
  //         question: "During an (isometric/isotonic) muscle contraction, a muscle develops contractile force but does not change in length",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "isometric"],
  //         multipleChoiceAnswer: "isometric",
  //       },
  //       {
  //         id: 18,
  //         type: "multiple-choice",
  //         question: "The velocity of contraction of a muscle fiber is directly related to its (diameter/myosin ATPase activity)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "myosin ATPase activity"],
  //         multipleChoiceAnswer: "myosin ATPase activity",
  //       },
  //       {
  //         id: 19,
  //         type: "multiple-choice",
  //         question: "Force drops when a muscle is stretched too far because it’s ____ than optimal",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "longer", "shorter"],
  //         multipleChoiceAnswer: "longer",
  //         feedbackExplanation: "When muscle fiber is stretched past optimal length, fewer crossbridges can form",
  //       },
  //       {
  //         id: 20,
  //         type: "multiple-choice",
  //         question: "(Oxidative/Glycolytic) muscle fibers are more resistant to fatigue",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Oxidative"],
  //         multipleChoiceAnswer: "Oxidative",
  //       },
  //       {
  //         id: 21,
  //         type: "multiple-choice",
  //         question: "According to the size principle, the force-generating capacity of a muscle fiber increases in direct proportion to its length",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False",
  //       },
  //     ],
  //   },
  //   {
  //     slug: "physiology-chapter-13",
  //     title: "Cardiovascular System: Cardiac Function",
  //     description: "physiology-chapter-13",
  //     image: "/images/anatomy.png",
  //     questions: [
  //       {
  //         id: 1,
  //         type: "multiple-choice",
  //         question: "Minimum aortic pressure during the cardiac cycle is attained",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Immediately after closure of the aortic semilunar valve", "Immediately before opening of the aortic semilunar valve", "Immediately before opening of the atrioventricular valves", "In mid-diastole", "At the end of systole"],
  //         multipleChoiceAnswer: "Immediately before opening of the aortic semilunar valve",
  //       },
  //       {
  //         id: 2,
  //         type: "multiple-choice",
  //         question: "The first heart sound occurs when the atrioventricular valves close; thus it marks",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "The end of the ejection period", "The beginning of the ejection period", "The beginning of systole", "The beginning of isovolumetric contraction", "Both the beginning of systole and the beginning of isovolumetric contraction are true"],
  //         multipleChoiceAnswer: "Both the beginning of systole and the beginning of isovolumetric contraction are true",
  //       },
  //       {
  //         id: 3,
  //         type: "multiple-choice",
  //         question: "If you know end-diastolic volume, the only other thing you need to know to determine stroke volume is",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Afterload", "Ventricular contractility", "End-systolic volume", "Heart rate", "Cardiac output"],
  //         multipleChoiceAnswer: "End-systolic volume",
  //       },
  //       {
  //         id: 4,
  //         type: "multiple-choice",
  //         question: "As a result of Starling’s law, stroke volume should increase following an increase in",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Mean arterial pressure", "Heart rate", "Sympathetic activity", "Afterload", "Preload"],
  //         multipleChoiceAnswer: "Preload",
  //       },
  //       {
  //         id: 5,
  //         type: "multiple-choice",
  //         question: "Sympathetic and parasympathetic input to the SA node influences",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Ventricular filling time", "Ventricular contractility", "Afterload", "Atrial contractility"],
  //         multipleChoiceAnswer: "Ventricular filling time",
  //       },
  //       {
  //         id: 6,
  //         type: "multiple-choice",
  //         question: "Which contains deoxygenated blood?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "The right ventricle", "The left ventricle", "Pulmonary veins", "The aorta", "Both a and c are true"],
  //         multipleChoiceAnswer: "The right ventricle",
  //       },
  //       {
  //         id: 7,
  //         type: "multiple-choice",
  //         question: "Which is not normally apparent in the ECG?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Atrial depolarization", "Atrial repolarization", "Ventricular depolarization", "Ventricular repolarization", "None of the above"],
  //         multipleChoiceAnswer: "Atrial repolarization",
  //       },
  //       {
  //         id: 8,
  //         type: "multiple-choice",
  //         question: "The second heart sound occurs when the semilunar valves close; thus it marks",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "The end of the ejection period", "The beginning of the ejection period", "The beginning of systole", "The beginning of isovolumetric contraction", "Both c and d are true"],
  //         multipleChoiceAnswer: "The end of the ejection period",
  //       },
  //       {
  //         id: 9,
  //         type: "multiple-choice",
  //         question: "The QRS complex of the ECG is due to",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Atrial depolarization", "Atrial repolarization", "Ventricular depolarization", "Ventricular repolarization", "Opening of the AV valves"],
  //         multipleChoiceAnswer: "Ventricular depolarization",
  //       },
  //       {
  //         id: 10,
  //         type: "multiple-choice",
  //         question: "The atria-to-ventricle delay (~0.1 s) happens at the ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "The SA node", "The AV node", "The atrioventricular bundle", "The left and right bundle branches", "Purkinje fibers"],
  //         multipleChoiceAnswer: "The AV node",
  //       },
  //       {
  //         id: 11,
  //         type: "multiple-choice",
  //         question: "Which is most likely to cause a decrease in the stroke volume of the left ventricle?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Increase in mean arterial pressure", "Increase in end-diastolic pressure", "Increase in end-diastolic volume", "Increase in the activity of sympathetic nerves to the heart", "Increase in central venous pressure"],
  //         multipleChoiceAnswer: "Increase in mean arterial pressure",
  //       },
  //       {
  //         id: 12,
  //         type: "multiple-choice",
  //         question: "Left ventricular pressure and aortic pressure are virtually identical during",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Isovolumetric contraction", "Isovolumetric relaxation", "Diastole", "Systole", "The ejection period"],
  //         multipleChoiceAnswer: "The ejection period",
  //       },
  //       {
  //         id: 13,
  //         type: "multiple-choice",
  //         question: "Heart rate is normally determined by the action potential frequency in ____ node",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "SA", "AV"],
  //         multipleChoiceAnswer: "SA",
  //       },
  //       {
  //         id: 14,
  //         type: "multiple-choice",
  //         question: "According to Starling’s law, stroke volume should increase if end-diastolic volume ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "increases", "decreases"],
  //         multipleChoiceAnswer: "increases",
  //       },
  //       {
  //         id: 15,
  //         type: "multiple-choice",
  //         question: "Heart rate is determined entirely by the inherent action potential frequency in cells of the SA node, with no external influences",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False",
  //       },
  //       {
  //         id: 16,
  //         type: "multiple-choice",
  //         question: "Blood flow through the systemic circuit is driven by contractions of the ____ ventricle",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "left", "right"],
  //         multipleChoiceAnswer: "left",
  //       },
  //       {
  //         id: 17,
  //         type: "multiple-choice",
  //         question: "What is the valve between the left ventricle and aorta?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Atrioventricular", "Semilunar"],
  //         multipleChoiceAnswer: "Semilunar",
  //       },
  //       {
  //         id: 18,
  //         type: "multiple-choice",
  //         question: "(Isovolumetric contraction/Ejection) occurs immediately after diastole",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Isovolumetric contraction"],
  //         multipleChoiceAnswer: "Isovolumetric contraction",
  //       },
  //       {
  //         id: 19,
  //         type: "multiple-choice",
  //         question: "The maximum aortic pressure during the cardiac cycle is called (diastolic/systolic) pressure",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "systolic"],
  //         multipleChoiceAnswer: "systolic",
  //       },
  //       {
  //         id: 20,
  //         type: "multiple-choice",
  //         question: "Under normal conditions, pressures in the left and right ventricles are equal during systole",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False",
  //       },
  //       {
  //         id: 21,
  //         type: "multiple-choice",
  //         question: "Stroke volume and ____ completely determine cardiac output",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "heart rate"],
  //         multipleChoiceAnswer: "heart rate",
  //       },
  //       {
  //         id: 22,
  //         type: "multiple-choice",
  //         question: "If end-diastolic volume does not change but end-systolic volume decreases, stroke volume ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Increases", "Decreases"],
  //         multipleChoiceAnswer: "Increases",
  //       },
  //       {
  //         id: 23,
  //         type: "multiple-choice",
  //         question: "If end-diastolic volume does not change but end-systolic volume decreases, ejection fraction ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Increases", "Decreases"],
  //         multipleChoiceAnswer: "Increases",
  //       },
  //       {
  //         id: 24,
  //         type: "multiple-choice",
  //         question: "If ANS inputs are constant and end-diastolic volume increases, does ventricular contractility increase?",
  //         multipleChoiceOptions: [
  //           { text: "Yes", image: "" },
  //           { text: "No", image: "" },
  //         ],
  //         multipleChoiceAnswer: "No",
  //         tooltipTerms: [{ label: "ANS", meaning: "Autonomic Nervous System" }],
  //       },
  //       {
  //         id: 25,
  //         type: "multiple-choice",
  //         question: "The period of relaxation of the heart muscle is known as ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "diastole"],
  //         multipleChoiceAnswer: "diastole",
  //       },
  //       {
  //         id: 26,
  //         type: "multiple-choice",
  //         question: "The (P/T) wave of the ECG corresponds to ventricular repolarization",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "T"],
  //         multipleChoiceAnswer: "T",
  //       },
  //       {
  //         id: 27,
  //         type: "multiple-choice",
  //         question: "Action potentials generated by pacemaker cells are called pacemaker potentials",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False",
  //       },
  //     ],
  //   },
  //   {
  //     slug: "physiology-chapter-14",
  //     title: "Cardiovascular System: Blood Vessels, Blood Flow, and Blood Pressure",
  //     description: "physiology-chapter-14",
  //     image: "/images/anatomy.png",
  //     questions: [
  //       {
  //         id: 1,
  //         type: "multiple-choice",
  //         question: "Total peripheral resistance is",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "The combined resistance of all organs in the body", "The resistance of capillaries located in distal body parts", "The combined resistance of all organs in the systemic circuit", "The combined resistance of all the blood vessels within an organ or tissue", "The resistance to blood flow through the heart"],
  //         multipleChoiceAnswer: "The combined resistance of all organs in the systemic circuit",
  //       },
  //       {
  //         id: 2,
  //         type: "multiple-choice",
  //         question: "Venous pressure increases",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "When blood volume decreases", "As a result of venous pooling", "As a result of an increase in venomotor tone", "When a person stands up"],
  //         multipleChoiceAnswer: "As a result of an increase in venomotor tone",
  //       },
  //       {
  //         id: 3,
  //         type: "multiple-choice",
  //         question: "Which tends to promote edema in systemic tissues?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Decrease in plasma proteins concentration", "Increase in pressure in the vena cava", "Increase in arterial pressure", "Leakage of proteins from capillaries into the interstitial fluid", "All of the above"],
  //         multipleChoiceAnswer: "All of the above",
  //       },
  //       {
  //         id: 4,
  //         type: "multiple-choice",
  //         question: "Which tends to cause a decrease in ventricular end-diastolic volume?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Increase in venous pressure", "Increase in skeletal muscle pump activity", "Decrease in filling time", "Increase in blood volume", "Increase in venomotor tone"],
  //         multipleChoiceAnswer: "Decrease in filling time",
  //       },
  //       {
  //         id: 5,
  //         type: "multiple-choice",
  //         question: "Which blood vessels possess valves that prevent blood from flowing backward?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Arteries", "Arterioles", "Capillaries", "Venules", "Veins"],
  //         multipleChoiceAnswer: "Veins",
  //       },
  //       {
  //         id: 6,
  //         type: "multiple-choice",
  //         question: "Where is the greatest proportion of total blood volume at rest?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Heart", "Arteries", "Arterioles", "Capillaries", "Veins"],
  //         multipleChoiceAnswer: "Veins",
  //       },
  //       {
  //         id: 7,
  //         type: "multiple-choice",
  //         question: "Which tends to cause a decrease in mean arterial pressure?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "A drop in total peripheral resistance", "Increase in stroke volume of the left ventricle", "Increase in heart rate", "Increase in venous return", "Increase in sympathetic activity"],
  //         multipleChoiceAnswer: "A drop in total peripheral resistance",
  //       },
  //       {
  //         id: 8,
  //         type: "multiple-choice",
  //         question: "Lymphatic capillaries differ from blood capillaries in that",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Lymphatic capillaries have a lower permeability to water", "Lymphatic capillaries have a lower permeability to small solutes", "Lymphatic capillaries are blind ended", "Lymphatic capillaries are not connected to any other vessels", "All of the above"],
  //         multipleChoiceAnswer: "Lymphatic capillaries are blind ended",
  //       },
  //       {
  //         id: 9,
  //         type: "multiple-choice",
  //         question: "Which tends to cause increased venous pooling?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Decrease in venomotor tone", "Decrease in the osmotic pressure of plasma proteins", "Decrease in mean arterial pressure", "Exercise", "Dehydration"],
  //         multipleChoiceAnswer: "Decrease in venomotor tone",
  //       },
  //       {
  //         id: 10,
  //         type: "multiple-choice",
  //         question: "Which does not tend to increase as a result of the action of the skeletal muscle pump?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Venous pooling", "Venous return", "End-diastolic volume", "Stroke volume", "Cardiac output"],
  //         multipleChoiceAnswer: "Venous pooling",
  //       },

  //       {
  //         id: 11,
  //         type: "multiple-choice",
  //         question: "If arterial pressure is elevated, baroreceptor signals trigger which responses?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "A rise in vasopressin secretion", "A fall in plasma angiotensin II levels", "Increased activity in sympathetic ­vasoconstrictor nerves", "Increase in epinephrine secretion", "Increased total peripheral resistance"],
  //         multipleChoiceAnswer: "A fall in plasma angiotensin II levels",
  //       },
  //       {
  //         id: 12,
  //         type: "multiple-choice",
  //         question: "During exercise, CO₂ produced by muscle cells causes vasodilation in skeletal muscle. This is an example of",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Active hyperemia", "Reactive hyperemia", "Flow autoregulation", "Extrinsic control of vascular resistance", "Starling forces"],
  //         multipleChoiceAnswer: "Active hyperemia",
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 13,
  //         type: "multiple-choice",
  //         question: "Total peripheral resistance ____ when general vasodilation of smaller arteries and arterioles occurs in systemic tissues",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Increases", "Decreases"],
  //         multipleChoiceAnswer: "Decreases",
  //       },
  //       {
  //         id: 14,
  //         type: "multiple-choice",
  //         question: "Veins have a (larger/smaller) compliance than arteries",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "larger"],
  //         multipleChoiceAnswer: "larger",
  //       },
  //       {
  //         id: 15,
  //         type: "multiple-choice",
  //         question: "(An increase/A decrease) in the radius of a blood vessel raises its resistance",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "decrease"],
  //         multipleChoiceAnswer: "decrease",
  //       },
  //       {
  //         id: 16,
  //         type: "multiple-choice",
  //         question: "",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False",
  //       },
  //       {
  //         id: 17,
  //         type: "multiple-choice",
  //         question: "In a day, capillary ­filtration and absorption occur at the same rate, so net volume of fluid filtered from capillaries is zero",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "True",
  //       },
  //       {
  //         id: 18,
  //         type: "multiple-choice",
  //         question: "Does higher blood capillary hydrostatic pressure increase filtration?",
  //         multipleChoiceOptions: [
  //           { text: "Yes", image: "" },
  //           { text: "No", image: "" },
  //         ],
  //         multipleChoiceAnswer: "Yes",
  //       },
  //       {
  //         id: 19,
  //         type: "multiple-choice",
  //         question: "A drop in arterial blood pressure triggers (an increase/a decrease) in sympathetic nervous activity",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "True",
  //       },
  //     ],
  //   },
  //   {
  //     slug: "physiology-chapter-15",
  //     title: "Cardiovascular System: Blood",
  //     description: "physiology-chapter-15",
  //     image: "/images/anatomy.png",
  //     questions: [
  //       {
  //         id: 1,
  //         type: "multiple-choice",
  //         question: "Which is not found in plasma?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Albumin", "Sodium", "Glucose", "Hemoglobin", "Potassium"],
  //         multipleChoiceAnswer: "", // 1 d
  //       },
  //       {
  //         id: 2,
  //         type: "multiple-choice",
  //         question: "Which organ synthesizes new erythrocytes?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Liver", "Spleen", "Kidney", "Bone Marrow", "Heart"],
  //         multipleChoiceAnswer: "", // 2 d
  //       },
  //       {
  //         id: 3,
  //         type: "multiple-choice",
  //         question: "Which classes of leukocytes function(s) in phagocytosis?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Neutrophils only", "Basophils only", "Lymphocytes only", "Neutrophils and basophils", "Basophils and lymphocytes"],
  //         multipleChoiceAnswer: "", // 3 d
  //       },
  //       {
  //         id: 4,
  //         type: "multiple-choice",
  //         question: "Which class of leukocytes develops into macrophages in tissue?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Neutrophils", "Eosinophils", "Basophils", "Monocytes", "Lymphocytes"],
  //         multipleChoiceAnswer: "", // 4 d
  //       },
  //       {
  //         id: 5,
  //         type: "multiple-choice",
  //         question: "Contact of blood with collagen triggers",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Platelet aggregation", "Activation of the intrinsic clotting cascade", "Activation of the extrinsic clotting cascade", "Both a and b"],
  //         multipleChoiceAnswer: "", // 5 d
  //       },

  //       {
  //         id: 6,
  //         type: "multiple-choice",
  //         question: "Plasma with clotting factors removed is called            ",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // 6 serum
  //       },
  //       {
  //         id: 7,
  //         type: "multiple-choice",
  //         question: "During the clotting cascade,             ­converts fibrinogen to fibrin",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // 7 thrombin
  //       },
  //       {
  //         id: 8,
  //         type: "multiple-choice",
  //         question: "            is an enzyme that converts CO₂ and water into carbonic acid",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // 8 Carbonic anhydrase
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //     ],
  //   },
  //   {
  //     slug: "physiology-chapter-16",
  //     title: "Respiratory System: Pulmonary Ventilation",
  //     description: "physiology-chapter-16",
  //     image: "/images/anatomy.png",
  //     questions: [
  //       {
  //         id: 1,
  //         type: "multiple-choice",
  //         question: "Which is a component of internal respiration?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Ventilation", "Transport of O₂ in the blood", "Diffusion of CO₂ from tissues to blood", "Diffusion of O₂ from blood to tissues", "Oxidative phosphorylation"],
  //         multipleChoiceAnswer: "", // 1 e
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 2,
  //         type: "multiple-choice",
  //         question: "Which is not a function of the conducting zone of the respiratory system?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Humidifying the air", "Adjusting the air to body temperature", "Exchanging gases between the respiratory system and the blood", "Secreting mucus", "Protecting the lungs from inhaled particles"],
  //         multipleChoiceAnswer: "", // 2 c
  //       },
  //       {
  //         id: 3,
  //         type: "multiple-choice",
  //         question: "The smallest airways in the conducting zone are",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Terminal bronchioles", "Respiratory bronchioles", "Alveolar ducts", "Alveolar sacs", "Bronchi"],
  //         multipleChoiceAnswer: "", // 3 a
  //       },
  //       {
  //         id: 4,
  //         type: "multiple-choice",
  //         question: "Surfactant is secreted by",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Goblet cells", "Alveolar macrophages", "Type I cells", "Type II cells", "Ciliated cells"],
  //         multipleChoiceAnswer: "", // 4 d
  //       },
  //       {
  //         id: 5,
  //         type: "multiple-choice",
  //         question: "The product of tidal volume and breathing frequency gives",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Respiration rate", "Total lung capacity", "Alveolar ventilation", "Minute ventilation", "Dead space volume"],
  //         multipleChoiceAnswer: "", // 5 d
  //       },
  //       {
  //         id: 6,
  //         type: "multiple-choice",
  //         question: "When all muscles of respiration are relaxed and alveolar pressure is zero, lung volume is equal to",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Residual volume", "Vital capacity", "Functional residual capacity", "Tidal volume", "Total lung capacity"],
  //         multipleChoiceAnswer: "", // 6 c
  //       },
  //       {
  //         id: 7,
  //         type: "multiple-choice",
  //         question: "Which statements describes the lungs at the functional residual capacity?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Atmospheric, intra-alveolar, and intrapleural pressures are all equal", "The lungs tend to collapse due to their elastic properties", "The chest wall tends to collapse due to its elastic properties", "Both a and c are true"],
  //         multipleChoiceAnswer: "", // 7 b
  //       },
  //       {
  //         id: 8,
  //         type: "multiple-choice",
  //         question: "Which factors decreases airway resistance?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Activation of the parasympathetic nervous system", "Epinephrine", "Histamine"],
  //         multipleChoiceAnswer: "", // 8 b
  //       },
  //       {
  //         id: 9,
  //         type: "multiple-choice",
  //         question: "Pulmonary surfactant",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Prevents collapse of alveoli", "Prevents small alveoli from joining with larger alveoli", "Increases lung compliance", "Both a and c", "All of the above"],
  //         multipleChoiceAnswer: "", // 9 e
  //       },
  //       {
  //         id: 10,
  //         type: "multiple-choice",
  //         question: "Which muscles contract(s) during quiet expiration?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Diaphragm", "Internal intercostals", "External intercostals", "None of the above", "All of the above"],
  //         multipleChoiceAnswer: "", // 10 d
  //       },

  //       {
  //         id: 11,
  //         type: "multiple-choice",
  //         question: "Contraction of the diaphragm increases the rate of air flow during forced expiration",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False",
  //       },
  //       {
  //         id: 12,
  //         type: "multiple-choice",
  //         question: "During inspiration, transpulmonary pressure ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Increases", "Decreases"],
  //         multipleChoiceAnswer: "Increases",
  //       },
  //       {
  //         id: 13,
  //         type: "multiple-choice",
  //         question: "During inspiration, intrapleural pressure becomes ____ negative",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "More", "Less"],
  //         multipleChoiceAnswer: "More",
  //       },
  //       {
  //         id: 14,
  //         type: "multiple-choice",
  //         question: "If airway resistance increases, a ____ transpulmonary pressure is required to produce a given rate of air flow during expiration",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Higher", "Lower"],
  //         multipleChoiceAnswer: "Higher",
  //       },
  //       {
  //         id: 15,
  //         type: "multiple-choice",
  //         question: "Pulmonary surfactant (increases/decreases) the surface tension of water",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Increases", "Decreases"],
  //         multipleChoiceAnswer: "Decreases",
  //       },
  //       {
  //         id: 16,
  //         type: "multiple-choice",
  //         question: "Pulmonary surfactant (increases/decreases) lung compliance",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // 16 increases
  //       },
  //       {
  //         id: 17,
  //         type: "multiple-choice",
  //         question: "Dead space volume is the volume of air in the (conducting zone/respiratory zone)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // 17 conducting zone
  //       },
  //       {
  //         id: 18,
  //         type: "multiple-choice",
  //         question: "(Obstructive/Restrictive) lung diseases are characterized by increased airway resistance",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // 18 Obstructive
  //       },
  //       {
  //         id: 19,
  //         type: "multiple-choice",
  //         question: "Which cells secrete mucus?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Goblet"],
  //         multipleChoiceAnswer: "Goblet",
  //       },
  //       {
  //         id: 20,
  //         type: "multiple-choice",
  //         question: "The (internal/external) intercostals are muscles of inspiration",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // 20 external
  //       },
  //     ],
  //   },
  //   {
  //     slug: "physiology-chapter-17",
  //     title: "Respiratory System: Gas Exchange and Regulation of Breathing",
  //     description: "physiology-chapter-17",
  //     image: "/images/anatomy.png",
  //     questions: [
  //       {
  //         id: 1,
  //         type: "multiple-choice",
  //         question: "Under steady-state conditions, the rate at which O₂ enters pulmonary capillaries from alveolar air is equal to",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "The rate at which O₂ is delivered to alveoli in inspired air", "The rate at which O₂ is carried out of the alveoli in expired air", "The rate at which O₂ is consumed in respiring tissues", "The rate at which CO₂ is produced in respiring tissues", "The rate at which CO₂ leaves the pulmonary capillaries and enters alveolar air"],
  //         multipleChoiceAnswer: "", // c
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 2,
  //         type: "multiple-choice",
  //         question: "At the normal resting O₂ partial pressure of mixed venous blood, hemoglobin is",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Nearly 100% saturated", "Nearly 97% saturated", "Nearly 75% saturated", "Nearly 50% saturated", "Nearly 25% saturated"],
  //         multipleChoiceAnswer: "", // c
  //       },
  //       {
  //         id: 3,
  //         type: "multiple-choice",
  //         question: "In respiring tissues, an increase in blood CO₂ partial pressure causes all of the following except",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Increase in the hydrogen ion concentration", "Increase in the bicarbonate concentration", "Increase in the carbaminohemoglobin concentration", "Increase in the affinity of hemoglobin for O₂", "Increase in hemoglobin unloading of O₂"],
  //         multipleChoiceAnswer: "", // d
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 4,
  //         type: "multiple-choice",
  //         question: "Which does not affect alveolar O₂ partial pressure?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "The rate of O₂ consumption by respiring tissues", "Alveolar ventilation", "The O₂ partial pressure of inspired air", "The volume of air contained in the alveoli", "The humidification of air as it moves through the conducting zone"],
  //         multipleChoiceAnswer: "", // d
  //       },
  //       {
  //         id: 5,
  //         type: "multiple-choice",
  //         question: "During hyperventilation, which would happen?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Increase in the O₂ partial pressure of arterial blood", "Increase in the CO₂ partial pressure of arterial blood", "Increase in the acidity of arterial blood", "Increase in arterial blood bicarbonate concentration", "Decrease in the pH of arterial blood"],
  //         multipleChoiceAnswer: "", // a
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 6,
  //         type: "multiple-choice",
  //         question: "Which would cause a decrease in the percent saturation of hemoglobin?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Increase in O₂ partial pressure", "Decrease in blood pH", "Decrease in CO₂ partial pressure", "Decrease in temperature", "All of the above"],
  //         multipleChoiceAnswer: "", // b
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 7,
  //         type: "multiple-choice",
  //         question: "Suppose alveolar O₂ partial pressure = 100 mm Hg and CO₂ partial pressure = 60 mm Hg. Which is true?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "pH will be less than normal", "Percent saturation of hemoglobin by O₂ will be less than normal", "Bicarbonate concentration will be greater than normal", "Both a and c are true", "All of the above"],
  //         multipleChoiceAnswer: "", // e
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 8,
  //         type: "multiple-choice",
  //         question: "A person has normal arterial {O₂} (100 mm Hg) and {CO₂} (40 mm Hg). Which would likely increase ventilation?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Decrease in O₂ partial pressure to 90 mm Hg", "Decrease in CO₂ partial pressure to 35 mm Hg", "Increase in O₂ partial pressure to 110 mm Hg", "Increase in CO₂ partial pressure to 45 mm Hg"],
  //         multipleChoiceAnswer: "Increase in CO₂ partial pressure to 45 mm Hg",
  //         tooltipTerms: [
  //           { label: "CO₂", meaning: "Carbon Dioxide" },
  //           { label: "O₂", meaning: "Oxygen" },
  //         ],
  //       },
  //       {
  //         id: 9,
  //         type: "multiple-choice",
  //         question: "What causes central chemoreceptors to respond when arterial CO₂ rises?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },

  //           "CO₂ diffuses into brain extracellular fluid, which stimulates chemoreceptors directly",
  //           "Hydrogen ions diffuses into brain extracellular fluid, which stimulates chemoreceptors directly",
  //           "CO₂ diffuses into brain extracellular fluid, which reacts with water to form hydrogen ions, which stimulate chemoreceptors directly",
  //           "CO₂ diffuses into brain extracellular fluid, which reacts with water to form bicarbonate ions, which stimulate chemoreceptors directly",
  //           "Direct stimulation by hydrogen ions in arterial blood",
  //         ],
  //         multipleChoiceAnswer: "", // c
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 10,
  //         type: "multiple-choice",
  //         question: "When a person exercises, ventilation increases to meet the demands of more active tissues. This is an example of",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Hyperventilation", "Hypoventilation", "Hypoxia", "Apnea", "Hyperpnea"],
  //         multipleChoiceAnswer: "", // e
  //       },
  //       {
  //         id: 11,
  //         type: "multiple-choice",
  //         question: "The normal ratio of bicarbonate concentration to CO₂ concentration in arterial blood is",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "1:5", "5:1", "10:1", "20:1", "1:20"],
  //         multipleChoiceAnswer: "", // d
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 12,
  //         type: "multiple-choice",
  //         question: "Which can hemoglobin bind and transport in blood?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "O₂", "CO₂", "Hydrogen ions", "Both a and c", "All of the above"],
  //         multipleChoiceAnswer: "", // e
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 13,
  //         type: "multiple-choice",
  //         question: "Which areas of the brain contain inspiratory neurons?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "The dorsal respiratory group only", "The ventral respiratory group only", "Both the dorsal and ventral respiratory groups", "Neither the dorsal nor ventral respiratory group"],
  //         multipleChoiceAnswer: "", // c
  //       },
  //       {
  //         id: 14,
  //         type: "multiple-choice",
  //         question: "Under normal conditions, the rate O₂ is brought in alveoli in inspired air is ____ the rate it is consumed in respiring tissues",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "the same as", "greater than", "less than"],
  //         multipleChoiceAnswer: "", // the same as
  //       },
  //       {
  //         id: 15,
  //         type: "multiple-choice",
  //         question: "Under resting conditions, tissues normally extract ____ of O₂ delivered to them in arterial blood",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Exactly Half", "More Than Half", "Less Than Half"],
  //         multipleChoiceAnswer: "Less Than Half",
  //       },
  //       {
  //         id: 16,
  //         type: "multiple-choice",
  //         question: "The amount of CO₂ in systemic arterial blood is less than 50% of that in mixed venous blood",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False", // false
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },

  //       {
  //         id: 17,
  //         type: "multiple-choice",
  //         question: "When blood CO₂ partial pressure increases, bicarbonate concentration (), and hydrogen ions concentration (increases/decreases)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "increases, increases"],
  //         multipleChoiceAnswer: "increases, increaes", // increases, increases
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 18,
  //         type: "multiple-choice",
  //         question: "The enzyme that catalyzes the conversion of CO₂ to carbonic acid is          ",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // carbonic anhydrase
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 19,
  //         type: "multiple-choice",
  //         question: "As the pH of the blood increases, the affinity of hemoglobin for O₂ (increases/decreases)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // increases
  //       },
  //       {
  //         id: 20,
  //         type: "multiple-choice",
  //         question: "When a person hypoventilates, the CO₂ partial pressure of arterial blood (increases/decreases)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // increases
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 21,
  //         type: "multiple-choice",
  //         question: "Decrease in alveolar ventilation would cause ____ in arterial O₂ partial pressure and ____ in arterial CO₂ partial pressure",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "decrease, increase"],
  //         multipleChoiceAnswer: "decrease, increase",
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 22,
  //         type: "multiple-choice",
  //         question: "Hemoglobin with CO₂ bound to it is called ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // carbaminohemoglobin
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 23,
  //         type: "multiple-choice",
  //         question: "In gas exchange in both the lungs and respiring tissues, O₂ and CO₂ always move down their partial pressure gradients",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "True", // true
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 24,
  //         type: "multiple-choice",
  //         question: "(Central/Peripheral) chemoreceptors respond directly to hydrogen ions produced during metabolism",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // Peripheral
  //       },
  //       {
  //         id: 25,
  //         type: "multiple-choice",
  //         question: "Coughing is triggered by stimulation of pulmonary ____ receptors",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // irritant
  //       },
  //       {
  //         id: 26,
  //         type: "multiple-choice",
  //         question: "In respiratory acidosis, arterial CO₂ partial pressure is (higher/lower) than normal",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // higher
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 27,
  //         type: "multiple-choice",
  //         question: "Increase in the O₂ partial pressure of alveolar air would trigger local (bronchoconstriction/bronchodilation) in airways",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // bronchoconstriction
  //       },
  //       {
  //         id: 28,
  //         type: "multiple-choice",
  //         question: "Increase in the O₂ partial pressure of alveolar air would trigger local (vasoconstriction/vasodilation)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // vasodilation
  //       },
  //     ],
  //   },
  //   {
  //     slug: "physiology-chapter-18",
  //     title: "Urinary System: Renal Function",
  //     description: "physiology-chapter-18",
  //     image: "/images/anatomy.png",
  //     questions: [
  //       {
  //         id: 1,
  //         type: "multiple-choice",
  //         question: "Which structure of the urinary system stores urine until it is excreted?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Kidneys", "Bladder", "Ureter", "Urethra", "Gallbladder"],
  //         multipleChoiceAnswer: "", // ?
  //       },
  //       {
  //         id: 2,
  //         type: "multiple-choice",
  //         question: "Which is not one of the mechanisms by which a solute can be exchanged between the plasma and the renal tubules?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Glomerular filtration", "Secretion", "Excretion", "Reabsorption"],
  //         multipleChoiceAnswer: "", // b
  //       },
  //       {
  //         id: 3,
  //         type: "multiple-choice",
  //         question: "Which type of specialized junction ­connects epithelial cells lining the renal tubules?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Gap junctions", "Tight junctions", "Desmosomes", "Intercalated disks", "Slit pores"],
  //         multipleChoiceAnswer: "", // c
  //       },
  //       {
  //         id: 4,
  //         type: "multiple-choice",
  //         question: "Which does not favor a large glomerular filtration rate?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Slit pores", "Fenestrations", "High glomerular hydrostatic pressure", "High resistance in the afferent arteriole", "High resistance in the efferent arteriole"],
  //         multipleChoiceAnswer: "", // b
  //       },
  //       {
  //         id: 5,
  //         type: "multiple-choice",
  //         question: "Most reabsorption of water and solutes occurs in the",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Proximal tubule", "Descending limb of the loop of Henle", "Ascending limb of the loop of Henle", "Distal tubule", "Collecting duct"],
  //         multipleChoiceAnswer: "", // d
  //       },

  //       {
  //         id: 6,
  //         type: "multiple-choice",
  //         question: "In what are microvilli most abundant?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Bowman’s capsule", "Glomerular capillaries", "Distal tubule", "Proximal tubule", "Collecting duct"],
  //         multipleChoiceAnswer: "", // a
  //       },
  //       {
  //         id: 7,
  //         type: "multiple-choice",
  //         question: "Which would occur if mean arterial pressure increased from 95 mm Hg to 125 mm Hg?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },

  //           "Glomerular filtration rate would increase because of the increased glomerular capillary hydrostatic pressure",
  //           "Glomerular filtration rate would decrease because of the increased Bowman’s capsule hydrostatic pressure",
  //           "Glomerular filtration rate would not change because of autoregulation",
  //           "Glomerular filtration rate would not change because of activation of the sympathetic nervous system",
  //         ],
  //         multipleChoiceAnswer: "", // d
  //       },
  //       {
  //         id: 8,
  //         type: "multiple-choice",
  //         question: "Fasting plasma glucose is 100 mg/dL, renal threshold 300 mg/dL. If glucose rises to 200 mg/dL, then?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Glucose reabsorption rate will double", "Renal tubule capacity for transporting glucose will be exceeded", "Urinary water excretion will increase", "Glucose clearance will increase", "The filtered load of glucose is halved"],
  //         multipleChoiceAnswer: "Urinary water excretion will increase",
  //       },
  //       {
  //         id: 9,
  //         type: "multiple-choice",
  //         question: "",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // a
  //       },
  //       {
  //         id: 10,
  //         type: "multiple-choice",
  //         question: "A substance is freely filtered and excreted at a lower rate than filtered load. How are the kidneys processing the substance?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Is not reabsorbed nor secreted", "It is definitely reabsorbed and may be secreted", "It is definitely secreted and may be reabsorbed", "It is definitely both reabsorbed and secreted"],
  //         multipleChoiceAnswer: "S is definitely reabsorbed and may be secreted",
  //       },

  //       {
  //         id: 11,
  //         type: "multiple-choice",
  //         question: "Which observations would enable you to definitely conclude that a substance X is being secreted?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "The clearance of X is greater than the GFR", "The concentration of X in the urine is greater than its concentration in the plasma", "The concentration of X in the plasma is decreasing over time", "Either a or c", "Any of the above"],
  //         multipleChoiceAnswer: "", // a
  //       },
  //       {
  //         id: 12,
  //         type: "multiple-choice",
  //         question: "Micturition occurs in response to",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Relaxation of the detrusor muscle", "Contraction of the internal and external urethral sphincters", "Activation of parasympathetic neurons to the bladder", "Activation of somatic motor neurons to the bladder"],
  //         multipleChoiceAnswer: "", // c
  //       },
  //       {
  //         id: 13,
  //         type: "multiple-choice",
  //         question: "The (ureter/urethra) carries urine from the bladder to the outside of the body",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // urethra
  //       },

  //       {
  //         id: 14,
  //         type: "multiple-choice",
  //         question: "Urinary excretion is the elimination of urine from the bladder",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "True", // true
  //       },
  //       {
  //         id: 15,
  //         type: "multiple-choice",
  //         question: "The (afferent/efferent) arteriole carries blood toward the glomerulus",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // afferent
  //       },
  //       {
  //         id: 16,
  //         type: "multiple-choice",
  //         question: "The combination of a glomerulus and the surrounding Bowman’s capsule is called a(n) ____________ ____________",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // renal corpuscle
  //       },
  //       {
  //         id: 17,
  //         type: "multiple-choice",
  //         question: "Glomerular capillary hydrostatic pressure is ____ than in most body capillaries.",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Higher", "Lower"],
  //         multipleChoiceAnswer: "Higher",
  //       },
  //       {
  //         id: 18,
  //         type: "multiple-choice",
  //         question: "The glomerular filtration rate tends to (increase/decrease) as plasma proteins concentration increases",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // decrease
  //       },
  //       {
  //         id: 19,
  //         type: "multiple-choice",
  //         question: "Autonomic neurons regulate contraction of the (internal/external) urethral sphincter",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // internal
  //       },
  //       {
  //         id: 20,
  //         type: "multiple-choice",
  //         question: "The glomerular filtration pressure is synonymous with the hydrostatic pressure inside glomerular capillaries",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False", // false
  //       },
  //       {
  //         id: 21,
  //         type: "multiple-choice",
  //         question: "The filtered load of a solute is determined by its plasma concentration and the ­(glomerular filtration rate/urine flow rate)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // glomerular filtration rate
  //       },
  //       {
  //         id: 22,
  //         type: "multiple-choice",
  //         question: "When clearance > glomerular filtration rate, then the substance is ____ in renal tubules",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "reabsorped", "secreted"],
  //         multipleChoiceAnswer: "secreted",
  //       },
  //       {
  //         id: 23,
  //         type: "multiple-choice",
  //         question: "The clearance of (PAH/creatinine) is approximately equal to the renal plasma flow rate",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // PAH
  //       },
  //       {
  //         id: 24,
  //         type: "multiple-choice",
  //         question: "Substances that are reabsorbed move into the (peritubular capillaries/tubule lumen)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // peritubular capillaries
  //       },
  //       {
  //         id: 25,
  //         type: "multiple-choice",
  //         question: "Increase in the flow rate through the macula densa causes a(n) (increase/decrease) in the glomerular filtration rate",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // decrease
  //       },
  //       {
  //         id: 26,
  //         type: "multiple-choice",
  //         question: "Glucose reabsorption occurs primarily in the (proximal tubule/distal tubule)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // ],
  //         multipleChoiceAnswer: "", // proximal tubule
  //       },
  //     ],
  //   },
  //   {
  //     slug: "physiology-chapter-19",
  //     title: "Urinary System: Fluid and Electrolyte Balance",
  //     description: "physiology-chapter-19",
  //     image: "/images/anatomy.png",
  //     questions: [
  //       {
  //         id: 1,
  //         type: "multiple-choice",
  //         question: "Which would trigger a decrease in renin secretion?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Decrease in the mean arterial pressure", "Decrease in the pressure inside the afferent arteriole", "Decrease in the activity of renal sympathetic nerves", "Decrease in {NaCl} concentration in tubular fluid", "Decrease in GFR"],
  //         multipleChoiceAnswer: "", // c
  //         tooltipTerms: [{ label: "Na", meaning: "Sodium Chloride" }],
  //       },
  //       {
  //         id: 2,
  //         type: "multiple-choice",
  //         question: "Which would trigger a decrease in the ADH secretion?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Ingestion of a large quantity of pure water", "Sweating", "Hemorrhage", "Decrease in mean arterial pressure", "Both a and c"],
  //         multipleChoiceAnswer: "", // a
  //       },
  //       {
  //         id: 3,
  //         type: "multiple-choice",
  //         question: "Fluid enters the distal tubule at 100 mOsm; the medulla reaches 1100 mOsm. As ADH increases, urine osmolarity will:",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Approaches 100 mOsm as a lower limit", "Approaches 1100 mOsm as an upper limit", "Exceeds 1100 mOsm", "Approaches 300 mOsm, normal plasma osmolarity"],
  //         multipleChoiceAnswer: "Approaches 1100 mOsm as an upper limit",
  //       },
  //       {
  //         id: 4,
  //         type: "multiple-choice",
  //         question: "Which tends to be accompanied by an increase in the rate at which bicarbonate is excreted in the urine?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Decrease in hydrogen ion secretion", "Decrease in the plasma bicarbonate concentration", "Increase in the production of ammonia by renal tubule epithelial cells", "Both a and b", "All of the above"],
  //         multipleChoiceAnswer: "", // d
  //       },
  //       {
  //         id: 5,
  //         type: "multiple-choice",
  //         question: "Assuming that arterial CO₂ partial pressure is normal, metabolic acidosis promotes ____?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Increased hydrogen ion secretion by the renal tubule", "Decreased alveolar ventilation", "Increased bicarbonate reabsorption", "Both a and c", "All of the above"],
  //         multipleChoiceAnswer: "", // d
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 6,
  //         type: "multiple-choice",
  //         question: "Which tends to promote an increase in {Na} excretion?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Increase in the glomerular filtration rate", "Increase in plasma renin concentration", "Increase in the atrial natriuretic peptide secretion", "Both a and c", "All of the above"],
  //         multipleChoiceAnswer: "", // d
  //         tooltipTerms: [{ label: "Na", meaning: "Sodium" }],
  //       },
  //       {
  //         id: 7,
  //         type: "multiple-choice",
  //         question: "The osmolarity of tubular fluid increases as it flows through the descending limb of the loop of Henle because",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Solutes are passively transported into the descending limb", "Solutes are actively transported into the descending limb", "Solutes are passively transported out of the ascending limb", "Water moves passively into the descending limb", "Water moves passively out of the descending limb"],
  //         multipleChoiceAnswer: "", // e
  //       },
  //       {
  //         id: 8,
  //         type: "multiple-choice",
  //         question: "Severe sweating lowers plasma volume and raises plasma osmolarity. How does this affect ADH?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Decrease in plasma volume inhibits ADH secretion, but the increase in osmolarity stimulates it", "Decrease in plasma volume stimulates ADH secretion, but the increase in osmolarity inhibits it", "Both decrease in plasma volume and increase in osmolarity stimulate ADH secretion", "Both decrease in plasma volume and increase in osmolarity inhibit ADH secretion"],
  //         multipleChoiceAnswer: "", // c
  //       },

  //       {
  //         id: 9,
  //         type: "multiple-choice",
  //         question: "In the cytosol of intercalated cells, the CO₂ converted to carbonic acid can come from",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "The lumen of the distal tubule and the collecting duct", "Metabolism inside the intercalated cell", "Catabolism of glutamine", "Both a and b", "All of the above"],
  //         multipleChoiceAnswer: "", // b
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 10,
  //         type: "multiple-choice",
  //         question: "In the lumen of the proximal tubule, secreted hydrogen ions are primarily buffered by",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Bicarbonate", "Phosphates", "Proteins", "Sulfates", "CO₂"],
  //         multipleChoiceAnswer: "", // a
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 11,
  //         type: "multiple-choice",
  //         question: "Increase in mean arterial pressure stimulates ____?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "ADH release", "Angiotensin II production", "Aldosterone release", "Renin release", "Increased water excretion in urine"],
  //         multipleChoiceAnswer: "Increased water excretion in urine",
  //       },
  //       {
  //         id: 12,
  //         type: "multiple-choice",
  //         question: "Which does not stimulate aldosterone release?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Atrial natriuretic peptide", "Increase in plasma potassium", "Increase in renin secretion", "Increase in angiotensin II production"],
  //         multipleChoiceAnswer: "Atrial natriuretic peptide",
  //       },
  //       {
  //         id: 13,
  //         type: "multiple-choice",
  //         question: "Where is the Na⁺/K⁺ pump located?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "On the basolateral membrane of proximal tubule cells, and on the apical membrane of principal cells", "On the apical membrane of proximal tubule cells, and on the basolateral membrane of principal cells", "On the basolateral membrane of both proximal tubule cells and principal cells", "On the apical membrane of both proximal tubule cells and principal cells"],
  //         multipleChoiceAnswer: "On the basolateral membrane of both proximal tubule cells and principal cells",
  //       },
  //       {
  //         id: 14,
  //         type: "multiple-choice",
  //         question: "In epithelial cells lining the proximal tubules, carbonic anhydrase is located",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "On the basolateral membrane only", "On the apical membrane only", "Inside the cell only", "Inside the cell and on the apical membrane", "Inside the cell and on the basolateral membrane"],
  //         multipleChoiceAnswer: "Inside the cell and on the apical membrane",
  //       },
  //       {
  //         id: 15,
  //         type: "multiple-choice",
  //         question: "What is the diagnosis? Arterial pH = 7.45, CO₂ Partical Pressure = 44 mm Hg, Plasma Bicarbonate Concentration = 27 mM",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Respiratory Acidosis", "Respiratory Alkalosis", "Metabolic Acidosis", "Metabolic Alkalosis"],
  //         multipleChoiceAnswer: "Metabolic Alkalosis",
  //         tooltipTerms: [{ label: "CO₂", meaning: "Carbon Dioxide" }],
  //       },
  //       {
  //         id: 16,
  //         type: "multiple-choice",
  //         question: "Increase in solutes reabsorption ____ water reabsorption",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "increases", "decreases"],
  //         multipleChoiceAnswer: "increases",
  //       },
  //       {
  //         id: 17,
  //         type: "multiple-choice",
  //         question: "Most solutes and water are reabsorbed in the (proximal tubule/distal tubule and collecting duct)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "proximal tubule", "distal tubule and collecting duct"],
  //         multipleChoiceAnswer: "proximal tubule",
  //       },
  //       {
  //         id: 18,
  //         type: "multiple-choice",
  //         question: "Do the loop of Henle descending limb cells actively transport solutes?",
  //         multipleChoiceOptions: [
  //           { text: "Yes", image: "" },
  //           { text: "No", image: "" },
  //         ],
  //         multipleChoiceAnswer: "No",
  //       },
  //       {
  //         id: 19,
  //         type: "multiple-choice",
  //         question: "Urine flow rate increases as the plasma ADH level (increases/decreases)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "increases", "decreases"],
  //         multipleChoiceAnswer: "decreases",
  //       },
  //       {
  //         id: 20,
  //         type: "multiple-choice",
  //         question: "Stretching of the atria of the heart promotes the ____ secretion, a hormone that promotes {Na} excretion",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "atrial natriuretic peptide"],
  //         multipleChoiceAnswer: "atrial natriuretic peptide",
  //         tooltipTerms: [{ label: "Na", meaning: "Sodium" }],
  //       },
  //       {
  //         id: 21,
  //         type: "multiple-choice",
  //         question: "If the plasma volume is below normal, an increase in water reabsorption will be sufficient to restore it to normal",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False",
  //       },
  //       {
  //         id: 22,
  //         type: "multiple-choice",
  //         question: "____ stimulates the insertion of Na⁺/K⁺ pumps into plasma membrane of principal cells of the distal tubules and collecting ducts",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Aldosterone"],
  //         multipleChoiceAnswer: "Aldosterone",
  //       },
  //       {
  //         id: 23,
  //         type: "multiple-choice",
  //         question: "____ stimulates water pores insertion in distal tubules and collecting ducts epithelial cells plasma membrane",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Antidiuretic hormone (ADH)"],
  //         multipleChoiceAnswer: "Antidiuretic hormone (ADH)",
  //       },
  //       {
  //         id: 24,
  //         type: "multiple-choice",
  //         question: "ADH increases water permeability of the loop of Henle",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False",
  //       },
  //       {
  //         id: 25,
  //         type: "multiple-choice",
  //         question: "{K} secretion is ____ by aldosterone",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "stimulated", "inhibited"],
  //         multipleChoiceAnswer: "stimulated",
  //         tooltipTerms: [{ label: "K", meaning: "Potassium" }],
  //       },
  //       {
  //         id: 26,
  //         type: "multiple-choice",
  //         question: "Calcitonin ____ plasma {Ca} levels",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "increases", "decreases"],
  //         multipleChoiceAnswer: "decreases",
  //         tooltipTerms: [{ label: "Ca", meaning: "Calcium" }],
  //       },
  //       {
  //         id: 27,
  //         type: "multiple-choice",
  //         question: "Resorption of bone ____ plasma {Ca} levels",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "increases", "decreases"],
  //         multipleChoiceAnswer: "increases",
  //         tooltipTerms: [{ label: "Ca", meaning: "Calcium" }],
  //       },
  //       {
  //         id: 28,
  //         type: "multiple-choice",
  //         question: "By adding new bicarbonate to the blood, the kidneys can bring about a compensatory ____ in the plasma pH",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "increase", "decrease"],
  //         multipleChoiceAnswer: "increase",
  //       },
  //       {
  //         id: 29,
  //         type: "multiple-choice",
  //         question: "The kidneys can excrete urine to pure water",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False",
  //       },
  //       {
  //         id: 30,
  //         type: "multiple-choice",
  //         question: "There is no limit to the amount of hydrogen ions the kidneys can excrete",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False",
  //       },
  //     ],
  //   },

  //   {
  //     slug: "physiology-chapter-20",
  //     title: "Gastrointestinal System",
  //     description: "physiology-chapter-20",
  //     image: "/images/anatomy.png",
  //     questions: [
  //       {
  //         id: 1,
  //         type: "multiple-choice",
  //         question: "What do sodium, fatty acids, and vitamin A have in common?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "They are not enzymatically modified prior to their absorption into the bloodstream", "They cross the apical membranes of enterocytes by simple diffusion", "They are transported into blood ­capillaries in the villi", "They are all hydrophilic", "All of the above"],
  //         multipleChoiceAnswer: "They are not enzymatically modified prior to their absorption into the bloodstream",
  //         feedbackExplanation: "Sodium, fatty acids, and vitamin A do not require enzymatic modification before absorption. {Na} is absorbed as an ion. Fatty acids and vitamin A are absorbed in their existing forms after emulsification. They do not all diffuse simply, nor are they all hydrophilic",
  //         tooltipTerms: [{ label: "Na", meaning: "Sodium" }],
  //       },
  //       {
  //         id: 2,
  //         type: "multiple-choice",
  //         question: "Bile flow blockage into the duodenum interferes with the digestion of ____?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Carbohydrates only", "Lipids only", "Proteins only", "Carbohydrates and lipids only", "Carbohydrates and proteins only"],
  //         multipleChoiceAnswer: "Lipids only",
  //         feedbackImage: "/images/Figure 20.11 Pancreas",
  //         feedbackExplanation: "Bile is essential for emulsifying lipids, allowing lipase to digest fats. If bile cannot enter the duodenum, fat digestion is impaired, while carbohydrate and protein digestion continue normally",
  //       },
  //       {
  //         id: 3,
  //         type: "multiple-choice",
  //         question: "The autonomic nervous system is involved in ___?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Cephalic-phase regulation only", "Gastric-phase regulation only", "Intestinal-phase regulation only", "Gastric-phase and intestinal-phase regulation only", "All 3 phases of regulation"],
  //         multipleChoiceAnswer: "All 3 phases of regulation",
  //         feedbackExplanation: "The autonomic nervous system influences all 3 phases of digestive regulation—cephalic, gastric, and intestinal—via parasympathetic and sympathetic pathways",
  //       },
  //       {
  //         id: 4,
  //         type: "multiple-choice",
  //         question: "Salivary glands failure to secrete amylase would make it impossible to digest ____?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Proteins", "Fats", "Disaccharides", "Starch", "None of the above"],
  //         multipleChoiceAnswer: "None of the above",
  //         feedbackExplanation: "Salivary amylase begins starch digestion, but pancreatic amylase fully compensates. Therefore, digestion of proteins, fats, disaccharides, and starch would still occur normally. Thus, none would be impossible to digest",
  //       },
  //       {
  //         id: 5,
  //         type: "multiple-choice",
  //         question: "Which tends to inhibits stomach acid secretion?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "A duodenal contents osmolarity increase", "Stomach acid entering the duodenum", "Food arriving in the stomach", "Both A duodenal contents osmolarity increase and stomach acid entering the duodenum", "All of the above"],
  //         multipleChoiceAnswer: "Both an increase in the osmolarity of duodenal contents and entry of stomach acid into the duodenum",
  //         feedbackExplanation: "Two stimuli inhibit acid secretion via the enterogastric reflex: Increased duodenal osmolarity. Entry of acidic chyme into the duodenum. Arrival of food in the stomach stimulates acid secretion, not inhibits it",
  //       },
  //       {
  //         id: 6,
  //         type: "multiple-choice",
  //         question: "Which illustrates potentiation?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },

  //           "Bile secretion is normally stimulated by both secretin and CCK",
  //           "Secretin and CCK act primarily on ­different parts of the hepatic secretory apparatus",
  //           "Secretin and CCK both stimulate bile duct cells to secrete fluid",
  //           "The bile duct cells fluid secretion is greater when both CCK and secretin are present, compared to when either hormone is present alone (at the same concentration)",
  //         ],
  //         multipleChoiceAnswer: "The bile duct cells fluid secretion is greater when both CCK and secretin are present, compared to when either hormone is present alone (at the same concentration)",
  //         feedbackExplanation: "Potentiation occurs when 2 hormones together create a greater effect than either alone. CCK + secretin produce a larger bile duct fluid secretion than either hormone at the same concentration",
  //       },
  //       {
  //         id: 7,
  //         type: "multiple-choice",
  //         question: "The enzyme enterokinase is directly or indirectly responsible for the proper functioning of",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Bile salts", "Lipases", "Trypsin", "Chymotrypsin", "Both trypsin and chymotrypsin"],
  //         multipleChoiceAnswer: "Both trypsin and chymotrypsin",
  //         feedbackImage: "/images/Figure 20.16 Activation of Proteases in Small Intestine",
  //         feedbackExplanation: "Enterokinase converts trypsinogen → trypsin, and trypsin activates chymotrypsinogen → chymotrypsin. Thus, enterokinase is responsible for the activation of both trypsin and chymotrypsin",
  //       },
  //       {
  //         id: 8,
  //         type: "multiple-choice",
  //         question: "Which is an example of a zymogen?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Enterokinase", "Chymotrypsinogen", "Salivary amylase", "Cholecystokinin", "All of the above"],
  //         multipleChoiceAnswer: "Chymotrypsinogen",
  //         feedbackExplanation: "A zymogen is an inactive enzyme precursor. Chymotrypsinogen is the inactive form of chymotrypsin. The others (enterokinase, salivary amylase, CCK) are active enzymes or hormones",
  //       },
  //       {
  //         id: 9,
  //         type: "multiple-choice",
  //         question: "Increases in gastric motility are generally accompanied by increases in ileal motility because of the",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Gastroileal reflex", "Ileogastric reflex", "Gastrocolic reflex", "Colonocolonic reflex", "Intestino-intestinal reflex"],
  //         multipleChoiceAnswer: "Gastroileal reflex",
  //         feedbackExplanation: "The gastroileal reflex increases ileal motility when the stomach becomes more active, helping move intestinal contents forward in coordination with gastric activity",
  //       },
  //       {
  //         id: 10,
  //         type: "multiple-choice",
  //         question: "Which is a digestion product of amylase?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Maltose", "Glucose", "Sucrose", "Lactose", "Fructose"],
  //         multipleChoiceAnswer: "Maltose",
  //         feedbackExplanation: "Amylase breaks starch into disaccharides such as maltose, not glucose or other simple sugars directly",
  //       },
  //       {
  //         id: 11,
  //         type: "multiple-choice",
  //         question: "Increases in which can induce satiety?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Alpha melanocyte stimulating hormone", "Thyroid stimulating hormone", "Leptin", "Both alpha melanocyte stimulating hormone and leptin", "All of the above"],
  //         multipleChoiceAnswer: "Both alpha melanocyte stimulating hormone and leptin",
  //         feedbackExplanation: "Both alpha-MSH (a melanocortin that suppresses appetite in the hypothalamus) and leptin (a hormone from adipose tissue that signals long-term energy stores) promote satiety. TSH does not regulate hunger",
  //       },
  //       {
  //         id: 12,
  //         type: "multiple-choice",
  //         question: "Through the action of pancreatic amylase alone, starch can be broken down to a form that can be absorbed completely",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False",
  //         feedbackExplanation: "Pancreatic amylase breaks starch into maltose and small oligosaccharides, but final digestion to absorbable monosaccharides requires brush border enzymes. Therefore it cannot complete digestion alone",
  //       },
  //       {
  //         id: 13,
  //         type: "multiple-choice",
  //         question: "Stomach glands that secrete acid are accessory glands",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False",
  //         feedbackExplanation: "The stomach's acid-secreting glands are part of the primary digestive tract, not accessory glands (which include the liver, gallbladder, and pancreas). Therefore, the statement is false",
  //       },
  //       {
  //         id: 14,
  //         type: "multiple-choice",
  //         question: "Receptive relaxation is an example of (cephalic-phase/gastric-phase) control of stomach function",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "cephalic-phase", "gastric-phase"],
  //         multipleChoiceAnswer: "cephalic-phase",
  //         feedbackExplanation: "Receptive relaxation of the stomach occurs before food arrives and is triggered by sight, smell, and thought of food—making it a cephalic-phase response",
  //       },
  //       {
  //         id: 15,
  //         type: "multiple-choice",
  //         question: "The ____ nerve plexus is located within the muscularis externa",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Submucosal", "Myenteric"],
  //         multipleChoiceAnswer: "Myenteric",
  //         feedbackImage: "/images/Figure 20.3 Gastrointestial Wall.png",
  //         feedbackExplanation: "The myenteric (Auerbach’s) plexus lies between the circular and longitudinal muscle layers of the muscularis externa. The submucosal plexus is located in the submucosa",
  //       },
  //       {
  //         id: 16,
  //         type: "multiple-choice",
  //         question: "What is the outermost layer of the gastrointestinal wall?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Serosa"],
  //         multipleChoiceAnswer: "Serosa",
  //         feedbackExplanation: "The serosa is the external layer of the GI tract, consisting of a mesothelium over connective tissue",
  //       },
  //       {
  //         id: 17,
  //         type: "multiple-choice",
  //         question: "When food is present in the small intestine, contraction of the gallbladder is stimulated by (secretin/cholecystokinin)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "secretin", "cholecystokinin"],
  //         multipleChoiceAnswer: "cholecystokinin",
  //         feedbackExplanation: "CCK is released when fats enter the duodenum and causes the gallbladder to contract and release bile. Secretin mainly stimulates bicarbonate secretion",
  //       },
  //       {
  //         id: 18,
  //         type: "multiple-choice",
  //         question: "Bile salts are necessary for the proper functioning of pancreatic (proteases/lipases)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "proteases", "lipases"],
  //         multipleChoiceAnswer: "lipases",
  //         feedbackExplanation: "Bile salts emulsify fats, increasing surface area so pancreatic lipase can digest triglycerides. Proteases do not require bile",
  //       },
  //       {
  //         id: 19,
  //         type: "multiple-choice",
  //         question: "The lamina propria is located within the ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "mucosa", "submucosa"],
  //         multipleChoiceAnswer: "mucosa",
  //         feedbackExplanation: "The lamina propria is the connective tissue layer within the mucosa, beneath the epithelium",
  //       },
  //       {
  //         id: 20,
  //         type: "multiple-choice",
  //         question: "Gastrin ____ stomach acid secretion",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "stimulates", "inhibits"],
  //         multipleChoiceAnswer: "stimulates",
  //         feedbackExplanation: "Gastrin stimulates acid secretion by acting on parietal cells and promoting histamine release from ECL cells",
  //       },
  //       {
  //         id: 21,
  //         type: "multiple-choice",
  //         question: "In the stomach, pepsinogen is secreted by (chief cells/parietal cells)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "chief cells", "parietal cells"],
  //         multipleChoiceAnswer: "chief cells",
  //         feedbackImage: "/images/Figure 20.15 Pepsin",
  //         feedbackExplanation: "Chief cells release pepsinogen, which becomes pepsin in an acidic environment. Parietal cells secrete HCl and intrinsic factor",
  //       },
  //       {
  //         id: 22,
  //         type: "multiple-choice",
  //         question: "The small intestine is periodically swept of its contents by ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "segmentation", "migrating motility complexes"],
  //         multipleChoiceAnswer: "migrating motility complexes",
  //         feedbackImage: "/images/Figure 20.30 Peristalsis and Segmentation",
  //         feedbackExplanation: "Between meals, migrating motility complexes (MMCs) sweep residual contents through the small intestine. Segmentation occurs during meals",
  //       },
  //       {
  //         id: 23,
  //         type: "multiple-choice",
  //         question: "Enterohepatic circulation is blood conduction from intestine to liver via the hepatic portal vein",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False",
  //         feedbackExplanation: "Enterohepatic circulation refers primarily to recycling of bile salts between the intestine and liver—not blood flow through the hepatic portal vein. Thus the statement is false",
  //       },
  //       {
  //         id: 24,
  //         type: "multiple-choice",
  //         question: "Nerves and hormones exert their effects on gastrointestinal motility primarily by altering the slow waves ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Frequency", "Amplitude"],
  //         multipleChoiceAnswer: "Amplitude",
  //         feedbackExplanation: "GI nerves and hormones change the amplitude of slow waves (strength of contraction), not the frequency of slow wave generation",
  //       },
  //       {
  //         id: 25,
  //         type: "multiple-choice",
  //         question: "Chewing is under voluntary control but is also controlled by reflex neural pathways. ",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "True",
  //         feedbackExplanation: "Yes—chewing is voluntary but also maintained by brainstem reflex circuits that rhythmically control jaw motion. This makes the statement true",
  //       },
  //       {
  //         id: 26,
  //         type: "multiple-choice",
  //         question: "Disaccharides are broken down to monosaccharides by ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "pancreatic enzymes", "brush border enzymes"],
  //         multipleChoiceAnswer: "brush border enzymes",
  //         feedbackExplanation: "Disaccharides (like lactose, maltose, sucrose) are digested by brush border enzymes into absorbable monosaccharides. Pancreatic enzymes cannot perform this final step",
  //       },
  //     ],
  //   },

  //   {
  //     slug: "physiology-chapter-21",
  //     title: "Endocrine System: Regulation of Energy Metabolism and Growth",
  //     description: "physiology-chapter-21",
  //     image: "/images/anatomy.png",
  //     questions: [
  //       {
  //         id: 1,
  //         type: "multiple-choice",
  //         question: "Which is an example of a permissive effect of a hormone?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "The effect of thyroid hormones on growth", "The effect of insulin on glucose uptake by cells", "The effect of sex hormones on growth hormone secretion", "Both effect of thyroid hormones on growth and effect of sex hormones on the growth hormone secretion", "All of the above"],
  //         multipleChoiceAnswer: "Both effect of thyroid hormones on growth and effect of sex hormones on the growth hormone secretion",
  //         feedbackExplanation: "A permissive effect means one hormone enables another hormone to act more effectively. Thyroid hormones make growth hormone’s effects stronger, and sex hormones enhance GH secretion—so both are examples of permissive interactions",
  //       },
  //       {
  //         id: 2,
  //         type: "multiple-choice",
  //         question: "Which is an example of a glucose-sparing effect of cortisol?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Inhibition of ACTH release", "Stimulation of liver gluconeogenesis", "Stimulation of lipolysis", "Stimulation of glycogen breakdown", "Stimulation of protein synthesis"],
  //         multipleChoiceAnswer: "Stimulation of lipolysis",
  //         feedbackExplanation: "A glucose-sparing effect shifts cells away from burning glucose. Cortisol achieves this by stimulating lipolysis, providing fatty acids for fuel and preserving glucose for the brain",
  //       },
  //       {
  //         id: 3,
  //         type: "multiple-choice",
  //         question: "Which ­pancreas cells secrete insulin?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Alpha cells", "Beta cells", "Delta cells", "Exocrine cells", "Duct cells"],
  //         multipleChoiceAnswer: "Beta cells",
  //         feedbackExplanation: "Beta cells in the pancreatic islets produce insulin. Alpha cells produce glucagon, and delta cells produce somatostatin",
  //       },
  //       {
  //         id: 4,
  //         type: "multiple-choice",
  //         question: "Stress stimulates which hormones secretion?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Growth hormone", "Epinephrine", "Thyroid hormones", "ACTH", "All of the above"],
  //         multipleChoiceAnswer: "All of the above",
  //         feedbackExplanation: "Stress activates both the sympathetic nervous system and the HPA axis, increasing epinephrine, ACTH (and thus cortisol), and growth hormone. Therefore, all listed hormones rise during stress",
  //       },
  //       {
  //         id: 5,
  //         type: "multiple-choice",
  //         question: "Hypoglycemia inhibits secreting ____?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Growth hormone", "Insulin", "Epinephrine", "Glucagon", "All of the above"],
  //         multipleChoiceAnswer: "Insulin",
  //         feedbackExplanation: "Low blood glucose suppresses insulin secretion while stimulating glucagon, epinephrine, and GH. So insulin is inhibited",
  //       },
  //       {
  //         id: 6,
  //         type: "multiple-choice",
  //         question: "In the postabsorptive state, the central nervous system uses ____ as its primary source of energy?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Fatty acids", "Amino acids", "Glucose", "Glycerol", "Ketones"],
  //         multipleChoiceAnswer: "Glucose",
  //         feedbackExplanation: "During fasting, most tissues switch to fat, but the CNS still relies primarily on glucose, except in prolonged starvation when ketones partially substitute",
  //       },
  //       {
  //         id: 7,
  //         type: "multiple-choice",
  //         question: "Which cell types is directly responsible for building new bone material?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Osteoblasts", "Osteoclasts", "Osteocytes", "Chondrocytes"],
  //         multipleChoiceAnswer: "Osteoblasts",
  //         feedbackExplanation: "Osteoblasts synthesize and lay down new bone matrix. Osteoclasts break down bone",
  //       },
  //       {
  //         id: 8,
  //         type: "multiple-choice",
  //         question: "Which is true of adulthood?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Growth hormone exerts no effects on body tissues", "Growth hormone secretion ceases altogether", "Growth hormone cannot stimulate increases in long bones length", "Bone structure becomes permanently fixed", "None of the above"],
  //         multipleChoiceAnswer: "Growth hormone cannot stimulate increases in long bones length",
  //         feedbackExplanation: "In adults, growth plates have closed, so GH cannot increase the length of long bones, though it still affects metabolism and soft tissue growth",
  //       },
  //       {
  //         id: 9,
  //         type: "multiple-choice",
  //         question: "Which form of thyroid hormone has greater activity at target cells?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "T₃", "T₄", "Neither; T₃ and T₄ have equal activity"],
  //         multipleChoiceAnswer: "T₃",
  //         feedbackExplanation: "T₃ is the biologically more active form at target cells. T₄ is a precursor converted to T₃",
  //       },
  //       {
  //         id: 10,
  //         type: "multiple-choice",
  //         question: "Which hormones is a steroid?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Thyroid hormones", "Insulin", "Glucagon", "Growth hormone", "Cortisol"],
  //         multipleChoiceAnswer: "Cortisol",
  //         feedbackExplanation: "The adrenal cortex produces the steroid hormone cortisol. Thyroid hormones are amine derivatives; insulin, glucagon, and GH are peptides",
  //       },
  //       {
  //         id: 11,
  //         type: "multiple-choice",
  //         question: "Energy mobilization is promoted by (insulin/glucagon)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "insulin", "glucagon"],
  //         multipleChoiceAnswer: "glucagon",
  //         feedbackExplanation: "Glucagon mobilizes stored fuels by raising blood glucose and stimulating glycogenolysis and gluconeogenesis",
  //       },
  //       {
  //         id: 12,
  //         type: "multiple-choice",
  //         question: "____ secretion is increased during the absorptive period",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "insulin", "glucagon"],
  //         multipleChoiceAnswer: "insulin",
  //         feedbackExplanation: "After a meal (absorptive state), insulin increases to promote nutrient storage and uptake",
  //       },
  //       {
  //         id: 13,
  //         type: "multiple-choice",
  //         question: "Insulin and glucagon both help regulate the plasma glucose concentration. ",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "True",
  //         feedbackExplanation: "True. They act as opposing regulators to maintain plasma glucose homeostasis",
  //       },
  //       {
  //         id: 14,
  //         type: "multiple-choice",
  //         question: "Breakdown of triglycerides yields fatty acids and ____, which can be used by cells for energy",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "glycerol"],
  //         multipleChoiceAnswer: "glycerol",
  //         feedbackExplanation: "Triglycerides break down into fatty acids and glycerol, the latter of which can be used for energy or gluconeogenesis",
  //       },
  //       {
  //         id: 15,
  //         type: "multiple-choice",
  //         question: "Conversion of amino acids to fatty acids occurs more likely in ____ state",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "absorptive", "postabsorptive"],
  //         multipleChoiceAnswer: "absorptive",
  //         feedbackExplanation: "This occurs in the absorptive state, when excess nutrients are converted into storage molecules like fat",
  //       },
  //       {
  //         id: 16,
  //         type: "multiple-choice",
  //         question: "Conversion of amino acids to glucose occurs more likely in ____ state",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "absorptive", "postabsorptive"],
  //         multipleChoiceAnswer: "postabsorptive",
  //         feedbackExplanation: "This occurs in the postabsorptive state, when the body needs to generate glucose through gluconeogenesis",
  //       },
  //       {
  //         id: 17,
  //         type: "multiple-choice",
  //         question: "Increase in plasma thyroid hormone levels tends to make the body’s energy balance more (positive/negative)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "positive", "negative"],
  //         multipleChoiceAnswer: "negative",
  //         feedbackExplanation: "Increased thyroid hormone raises metabolic rate, causing the body to burn more energy—making energy balance more negative",
  //       },
  //       {
  //         id: 18,
  //         type: "multiple-choice",
  //         question: "Energy taken into the body is either stored or appears as work or ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "heat"],
  //         multipleChoiceAnswer: "heat",
  //         feedbackExplanation: "All other energy taken in is released as heat, maintaining body temperature",
  //       },
  //       {
  //         id: 19,
  //         type: "multiple-choice",
  //         question: "Stress tends to (stimulate/inhibit) GHRH secretion",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "stimulate", "inhibit"],
  //         multipleChoiceAnswer: "inhibit",
  //         feedbackExplanation: "Stress increases cortisol, which inhibits GHRH and reduces growth hormone release",
  //       },
  //       {
  //         id: 20,
  //         type: "multiple-choice",
  //         question: "Many of growth hormone’s effects on target tissues are due to it triggering release of other chemical messengers called ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "(IGFs) insulin-like growth factors"],
  //         multipleChoiceAnswer: "(IGFs) insulin-like growth factors",
  //         feedbackExplanation: "GH stimulates release of insulin-like growth factors (IGFs), which mediate most of its growth-promoting effects",
  //       },
  //       {
  //         id: 21,
  //         type: "multiple-choice",
  //         question: "Closure of the epiphyseal plates is promoted by (growth hormone/sex hormones)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "growth hormone", "sex hormones"],
  //         multipleChoiceAnswer: "sex hormones",
  //         feedbackExplanation: "Sex hormones (estrogen and testosterone) trigger epiphyseal plate closure during late puberty",
  //       },
  //       {
  //         id: 22,
  //         type: "multiple-choice",
  //         question: "Thyroid hormones promote increased ­responsiveness of target tissues to ­(sympathetic/parasympathetic) nerve activity",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "sympathetic", "parasympathetic"],
  //         multipleChoiceAnswer: "sympathetic",
  //         feedbackExplanation: "Thyroid hormone increases sensitivity to sympathetic nervous system activity, contributing to increased heart rate and metabolic effects",
  //       },
  //       {
  //         id: 23,
  //         type: "multiple-choice",
  //         question: "Glucocorticoids promote (increased/decreased) plasma glucose levels",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "increased", "decreased"],
  //         multipleChoiceAnswer: "increased",
  //         feedbackExplanation: "Glucocorticoids increase plasma glucose by promoting gluconeogenesis and reducing glucose uptake in peripheral tissues",
  //       },
  //       {
  //         id: 24,
  //         type: "multiple-choice",
  //         question: "Stimulation of gluconeogenesis by glucagon is an example of a glucose-sparing effect",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False",
  //         feedbackExplanation: "Glucose-sparing means using less glucose, but gluconeogenesis produces glucose, increasing availability rather than sparing its use",
  //       },
  //       {
  //         id: 25,
  //         type: "multiple-choice",
  //         question: "Plasma glucocorticoids have a(n) (stimulatory/inhibitory) effect on the ACTH secretion",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "stimulatory", "inhibitory"],
  //         multipleChoiceAnswer: "inhibitory",
  //         feedbackExplanation: "Plasma glucocorticoids exert negative feedback, inhibiting ACTH secretion from the anterior pituitary",
  //       },
  //     ],
  //   },

  //   {
  //     slug: "physiology-chapter-22",
  //     title: "Reproductive System",
  //     description: "physiology-chapter-22",
  //     image: "/images/anatomy.png",
  //     questions: [
  //       {
  //         id: 1,
  //         type: "multiple-choice",
  //         question: "In both males and females, gonadotropin secretion by the anterior pituitary is stimulated by ____?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Inhibin", "Androgens", "GnRH", "FSH", "GHRH"],
  //         multipleChoiceAnswer: "GnRH",
  //         feedbackExplanation: "GnRH from the hypothalamus stimulates the anterior pituitary to release the gonadotropins FSH and LH",
  //       },
  //       {
  //         id: 2,
  //         type: "multiple-choice",
  //         question: "In the embryo, which effects are promoted by testosterone?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Development of the primitive gonads into testes", "Regression of Müllerian ducts", "Development of Müllerian ducts into male reproductive organs", "Development of Wolffian ducts into male reproductive organs", "Expression of the srY gene"],
  //         multipleChoiceAnswer: "Development of Wolffian ducts into male reproductive organs",
  //         feedbackExplanation: "Testosterone stabilizes and stimulates the Wolffian ducts, causing them to develop into male internal reproductive structures",
  //       },
  //       {
  //         id: 3,
  //         type: "multiple-choice",
  //         question: "The testes are housed in the",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "prostate gland", "scrotum", "penis", "epididymis", "vas deferens"],
  //         multipleChoiceAnswer: "scrotum",
  //         feedbackImage: "/images/Figure 22.6 Male Reproductive System",
  //         feedbackExplanation: "The testes are housed in the scrotum, which helps regulate temperature for proper sperm production",
  //       },
  //       {
  //         id: 4,
  //         type: "multiple-choice",
  //         question: "In the first step of spermatogenesis, spermatogonia differentiate into cells called",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "spermatids", "primary spermatocytes", "secondary spermatocytes", "spermatozoa", "spermatophytes"],
  //         multipleChoiceAnswer: "primary spermatocytes",
  //         feedbackExplanation: "Spermatogonia first divide and differentiate into primary spermatocytes before undergoing meiosis",
  //       },
  //       {
  //         id: 5,
  //         type: "multiple-choice",
  //         question: "Cells in the ovaries secrete all of the following hormones except",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "estrogens", "progesterone", "androgens", "luteinizing hormone", "inhibin"],
  //         multipleChoiceAnswer: "luteinizing hormone",
  //         feedbackExplanation: "LH is produced by the anterior pituitary, not the ovaries",
  //       },
  //       {
  //         id: 6,
  //         type: "multiple-choice",
  //         question: "In oogenesis, when does meiosis I occur?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "In early fetal life", "At birth", "Just before ovulation", "After ovulation but before fertilization", "After fertilization"],
  //         multipleChoiceAnswer: "Just before ovulation",
  //         feedbackExplanation: "Meiosis I in oogenesis completes just before ovulation, producing a secondary oocyte",
  //       },
  //       {
  //         id: 7,
  //         type: "multiple-choice",
  //         question: "During the early to mid-follicular phase of the ovarian cycle, which hormone(s) stimulate(s) granulosa cell functions?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Progesterone", "FSH", "LH", "GnRH", "Estrogens"],
  //         multipleChoiceAnswer: "FSH",
  //         feedbackExplanation: "FSH stimulates granulosa cells, supporting follicle development and estrogen production",
  //       },
  //       {
  //         id: 8,
  //         type: "multiple-choice",
  //         question: "In the late luteal phase, why do estrogen and progesterone levels fall?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Rupture of the dominant follicle", "Degeneration of the corpus luteum", "An inhibitory effect of LH on secretory activity of the corpus luteum", "The inhibitory effect of inhibin on the secretory activity of granulosa cells", "All of the above"],
  //         multipleChoiceAnswer: "Degeneration of the corpus luteum",
  //         feedbackExplanation: "When the corpus luteum degenerates (if no pregnancy occurs), estrogen and progesterone levels fall",
  //       },
  //       {
  //         id: 9,
  //         type: "multiple-choice",
  //         question: "In the uterine cycle, which phase immediately precedes the proliferative phase?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Menstrual phase", "Secretory phase", "Luteal phase", "Follicular phase"],
  //         multipleChoiceAnswer: "Menstrual phase",
  //         feedbackExplanation: "The menstrual phase occurs just before the proliferative phase",
  //       },
  //       {
  //         id: 10,
  //         type: "multiple-choice",
  //         question: "The placenta not only serves as an organ of exchange but also secretes all of the following hormones except",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "prolactin", "chorionic gonadotropin", "placental lactogen", "progesterone", "estrogens"],
  //         multipleChoiceAnswer: "prolactin",
  //         feedbackExplanation: "The placenta produces hCG, placental lactogen, estrogen, and progesterone — but not prolactin",
  //       },
  //       {
  //         id: 11,
  //         type: "multiple-choice",
  //         question: "In meiosis I, maternal and paternal chromosomes are segregated into separate daughter cells",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "False",
  //         feedbackExplanation: "Meiosis I separates homologous chromosomes, not specifically maternal vs. paternal sets into separate cells",
  //       },
  //       {
  //         id: 12,
  //         type: "multiple-choice",
  //         question: "The srY gene codes for ____, which determine(s) whether an embryo develops testes or ovaries",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Testosterone Receptors", "Testis-Determining Factor"],
  //         multipleChoiceAnswer: "Testis-Determining Factor",
  //         feedbackExplanation: "The SRY gene codes for TDF, which triggers testis development",
  //       },
  //       {
  //         id: 13,
  //         type: "multiple-choice",
  //         question: "In the absence of testosterone and MIS, the Müllerian ducts ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Persist", "Degenerate"],
  //         multipleChoiceAnswer: "Persist",
  //         feedbackExplanation: "Without testosterone and MIS, the Müllerian ducts persist and develop into female structures",
  //       },
  //       {
  //         id: 14,
  //         type: "multiple-choice",
  //         question: "FSH and LH are classified as (sex hormones/gonadotropins)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "gonadotropins"],
  //         multipleChoiceAnswer: "gonadotropins",
  //         feedbackExplanation: "FSH and LH are gonadotropins produced by the anterior pituitary",
  //       },
  //       {
  //         id: 15,
  //         type: "multiple-choice",
  //         question: "GnRH, which is secreted by the hypothalamus, stimulates the secretion of both FSH and LH from the anterior pituitary",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "True",
  //         feedbackExplanation: "GnRH stimulates release of both FSH and LH from the anterior pituitary",
  //       },
  //       {
  //         id: 16,
  //         type: "multiple-choice",
  //         question: "In the testes, androgens are secreted by (Sertoli cells/Leydig cells)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Leydig cells"],
  //         multipleChoiceAnswer: "Leydig cells",
  //         feedbackExplanation: "Leydig cells produce testosterone in response to LH",
  //       },
  //       {
  //         id: 17,
  //         type: "multiple-choice",
  //         question: "Spermatogenesis is stimulated by testosterone and (FSH/LH), which targets Sertoli cells",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "FSH", "LH"],
  //         multipleChoiceAnswer: "FSH",
  //         feedbackExplanation: "FSH acts on Sertoli cells to support spermatogenesis, alongside testosterone",
  //       },
  //       {
  //         id: 18,
  //         type: "multiple-choice",
  //         question: "The head of a sperm contains chromosomes and a(n) , a vesicle containing enzymes needed for fertilization",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "acrosome"],
  //         multipleChoiceAnswer: "acrosome",
  //         feedbackImage: "/images/Figure 22.9 Sperm Cell",
  //         feedbackExplanation: "The acrosome contains enzymes that help sperm penetrate the egg",
  //       },
  //       {
  //         id: 19,
  //         type: "multiple-choice",
  //         question: "Erection is accompanied by a(n) ____ in the activity of sympathetic neurons projecting to blood vessels in the penis",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "increase", "decrease"],
  //         multipleChoiceAnswer: "decrease",
  //         feedbackExplanation: "Erection occurs with decreased sympathetic activity and increased parasympathetic activity",
  //       },
  //       {
  //         id: 20,
  //         type: "multiple-choice",
  //         question: "Sperm must undergo ____ before they can fertilize an oocyte",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Capacitation"],
  //         multipleChoiceAnswer: "Capacitation",
  //         feedbackExplanation: "Capacitation is a process in the female reproductive tract that enables sperm to fertilize the oocyte",
  //       },
  //       {
  //         id: 21,
  //         type: "multiple-choice",
  //         question: "Where does fertilization usually occur?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Uterus", "Uterine Tube"],
  //         multipleChoiceAnswer: "Uterine Tube",
  //         feedbackExplanation: "Fertilization normally occurs in the ampulla of the uterine tube",
  //       },
  //       {
  //         id: 22,
  //         type: "multiple-choice",
  //         question: "The second half of the ovarian cycle is called the ____ phase",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Luteal Phase", "Follicular Phase"],
  //         multipleChoiceAnswer: "Luteal Phase",
  //         feedbackExplanation: "The second half of the ovarian cycle (after ovulation) is the luteal phase",
  //       },
  //       {
  //         id: 23,
  //         type: "multiple-choice",
  //         question: "In a follicle, which cells surround and nourish the oocyte?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Granulosa", "Theca"],
  //         multipleChoiceAnswer: "Granulosa",
  //         feedbackExplanation: "Granulosa cells surround the oocyte and regulate its nutrient environment",
  //       },
  //       {
  //         id: 24,
  //         type: "multiple-choice",
  //         question: "____ stimulates theca cells to secrete androgens, which are converted to estrogens by granulosa cells",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "LH", "FSH"],
  //         multipleChoiceAnswer: "LH",
  //         feedbackExplanation: "LH stimulates theca cells to produce androgens, which granulosa cells convert to estrogens",
  //       },
  //       {
  //         id: 25,
  //         type: "multiple-choice",
  //         question: "What is the uterine inner wall layer called?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Endometrium", "Myometrium"],
  //         multipleChoiceAnswer: "Endometrium",
  //         feedbackExplanation: "The endometrium is the inner lining where implantation occurs",
  //       },
  //       {
  //         id: 26,
  //         type: "multiple-choice",
  //         question: "During the ____ phase of the uterine cycle, the lining of the uterus thickens under the influence of rising estrogen levels",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Proliferative", "Secretory"],
  //         multipleChoiceAnswer: "Proliferative",
  //         feedbackExplanation: "In the proliferative phase, estrogen causes thickening of the endometrial lining",
  //       },
  //       {
  //         id: 27,
  //         type: "multiple-choice",
  //         question: "What triggers ovulation?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "LH", "FSH"],
  //         multipleChoiceAnswer: "LH",
  //         feedbackExplanation: "The LH surge triggers ovulation",
  //       },
  //       {
  //         id: 28,
  //         type: "multiple-choice",
  //         question: "The corpus luteum secretes estrogens and (LH/progesterone)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "LH", "Progesterone"],
  //         multipleChoiceAnswer: "Progesterone",
  //         feedbackExplanation: "The corpus luteum secretes progesterone (and some estrogen), not LH",
  //       },
  //       {
  //         id: 29,
  //         type: "multiple-choice",
  //         question: "In the late follicular phase, LH secretion is stimulated by ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Estrogens", "Progesterone"],
  //         multipleChoiceAnswer: "Estrogens",
  //         feedbackExplanation: "High estrogen levels in the late follicular phase stimulate the LH surge",
  //       },
  //       {
  //         id: 30,
  //         type: "multiple-choice",
  //         question: "Degeneration of the corpus luteum causes hormonal changes that trigger (ovulation/menstruation)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Ovulation", "Menstruation"],
  //         multipleChoiceAnswer: "Menstruation",
  //         feedbackExplanation: "Falling progesterone and estrogen from corpus luteum degeneration triggers menstruation",
  //       },
  //       {
  //         id: 31,
  //         type: "multiple-choice",
  //         question: "Before implantation, morula develop into ____, which has an inner cell mass in a hollow, fluid-filled outer cell layer",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Blastocyst"],
  //         multipleChoiceAnswer: "Blastocyst",
  //         feedbackExplanation: "A blastocyst forms before implantation, containing the inner cell mass and trophoblast",
  //       },
  //       {
  //         id: 32,
  //         type: "multiple-choice",
  //         question: "Secretory-phase uterine conditions are promoted by ____, which inhibits gonadotropin secretion",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Estrogen", "Progesterone"],
  //         multipleChoiceAnswer: "Progesterone",
  //         feedbackExplanation: "Progesterone promotes secretory transformation of the endometrium and suppresses gonadotropins",
  //       },
  //       {
  //         id: 33,
  //         type: "multiple-choice",
  //         question: "During pregnancy's last 6 months, estrogens and progesterone are secreted by (ovaries/placenta)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "placenta"],
  //         multipleChoiceAnswer: "placenta",
  //         feedbackExplanation: "After the first trimester, the placenta becomes the major source of estrogen and progesterone",
  //       },
  //       {
  //         id: 34,
  //         type: "multiple-choice",
  //         question: "During labor, strong uterine contractions are induced by (prolactin/oxytocin)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "oxytocin"],
  //         multipleChoiceAnswer: "oxytocin",
  //         feedbackExplanation: "Oxytocin from the posterior pituitary stimulates strong uterine contractions during labor",
  //       },
  //       {
  //         id: 35,
  //         type: "multiple-choice",
  //         question: "Suckling stimulates the release of __________, which promotes milk production by the breasts",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "prolactin"],
  //         multipleChoiceAnswer: "prolactin",
  //         feedbackExplanation: "Prolactin from the anterior pituitary stimulates milk production in the mammary glands",
  //       },
  //     ],
  //   },
  //   {
  //     slug: "physiology-chapter-23",
  //     title: "Immune System",
  //     description: "physiology-chapter-23",
  //     image: "/images/anatomy.png",
  //     questions: [
  //       {
  //         id: 1,
  //         type: "multiple-choice",
  //         question: "Which class of pathogens consists of only unicellular organisms?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Virus", "Bacteria", "Fungi", "Parasites", "None of the above"],
  //         multipleChoiceAnswer: "Bacteria",
  //         feedbackImage: "/images/Figure 23.4 Pathogens",
  //         feedbackExplanation: "Bacteria are single-celled prokaryotic organisms, unlike viruses (acellular) or fungi/parasites (can be multicellular)",
  //       },
  //       {
  //         id: 2,
  //         type: "multiple-choice",
  //         question: "Which conditions would lead to the most serious immunodeficiency disease?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Lack of IgG", "Lack of neutrophils", "Lack of B cells", "Lack of cytotoxic T cells", "Lack of helper T cells"],
  //         multipleChoiceAnswer: "Lack of helper T cells",
  //         feedbackExplanation: "Helper T cells (CD4⁺) are required to activate B cells, cytotoxic T cells, and macrophages. Without them, almost all adaptive immunity fails",
  //       },
  //       {
  //         id: 3,
  //         type: "multiple-choice",
  //         question: "Which molecules can opsonize antigen?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "A T cell receptor", "Interferon", "An antibody", "A perforin", "Interleukin-2"],
  //         multipleChoiceAnswer: "An antibody",
  //         feedbackImage: "/images/Figure 23.16 Opsonization",
  //         feedbackExplanation: "Antibodies bind antigens and tag (opsonize) them for phagocytosis",
  //       },
  //       {
  //         id: 4,
  //         type: "multiple-choice",
  //         question: "Lymphocytes contact foreign antigen in all of the following tissues except",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "bone marrow", "the spleen", "lymph nodes", "the appendix", "Peyer’s patches"],
  //         multipleChoiceAnswer: "bone marrow",
  //         feedbackExplanation: "Bone marrow is a primary lymphoid organ; lymphocytes do not encounter foreign antigens there",
  //       },
  //       {
  //         id: 5,
  //         type: "multiple-choice",
  //         question: "Which is not true about humoral immunity?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "It involves B cells", "It involves antibodies", "It involves cytotoxic T cells", "It can provide passive immunity when transferred from one person to another"],
  //         multipleChoiceAnswer: "It involves cytotoxic T cells",
  //         feedbackExplanation: "Humoral immunity involves B cells and antibodies; cytotoxic T cells belong to cell-mediated immunity",
  //       },
  //       {
  //         id: 6,
  //         type: "multiple-choice",
  //         question: "Macrophages",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "are derived from monocytes", "have class II MHC molecules", "are phagocytic", "are indirectly involved in specific immunity", "all of the above"],
  //         multipleChoiceAnswer: "all of the above",
  //         feedbackExplanation: "Macrophages originate from monocytes, perform phagocytosis, express class II MHC, and present antigen to helper T cells",
  //       },
  //       {
  //         id: 7,
  //         type: "multiple-choice",
  //         question: "Activated cytotoxic T cells release pore-forming molecules called",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "histamines", "complement proteins", "perforins", "immunoglobulins", "ready-porins"],
  //         multipleChoiceAnswer: "perforins",
  //         feedbackExplanation: "Cytotoxic T cells kill infected cells by releasing perforins, which form pores in target membranes",
  //       },
  //       {
  //         id: 8,
  //         type: "multiple-choice",
  //         question: "Type AB blood",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "is considered a universal blood donor", "is considered a universal blood recipient", "produces antibodies to the B antigen", "produces antibodies to the A antigen", "is Rh-positive"],
  //         multipleChoiceAnswer: "is considered a universal blood recipient",
  //         feedbackExplanation: "AB blood has no anti-A or anti-B antibodies, so the person can receive all ABO types (universal recipient)",
  //       },
  //       {
  //         id: 9,
  //         type: "multiple-choice",
  //         question: "Which can result in lifelong immunity?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Passage of maternal antibodies to a developing fetus", "An inflammatory response to a splinter", "Phagocytosis of bacteria by a neutrophil", "Administration of polio vaccine", "Administration of antibodies against the rabies virus"],
  //         multipleChoiceAnswer: "Administration of polio vaccine",
  //         feedbackExplanation: "Vaccines such as polio stimulate active immunity and immunologic memory, providing long-term protection",
  //       },
  //       {
  //         id: 10,
  //         type: "multiple-choice",
  //         question: "Foreign antigens phagocytosed by macrophages are presented by",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "class I MHC molecules to cytotoxic T cells", "class II MHC molecules to helper T cells", "class I MHC molecules to helper T cells", "class II MHC molecules to CD8-bearing cells", "class II MHC molecules to cytotoxic T cells"],
  //         multipleChoiceAnswer: "class II MHC molecules to helper T cells",
  //         feedbackExplanation: "Extracellular antigen taken up by macrophages is presented on class II MHC to helper T cells (CD4⁺)",
  //       },
  //       {
  //         id: 11,
  //         type: "multiple-choice",
  //         question: "Of the following events, which occurs earliest in the process of local inflammation?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Increased capillary permeability", "Fever", "Attack by cytotoxic T cells", "Release of histamine", "Lysis of microbes mediated by antibodies and complement"],
  //         multipleChoiceAnswer: "Release of histamine",
  //         feedbackExplanation: "Local inflammation begins with mast-cell degranulation and histamine release before other immune processes occur",
  //       },
  //       {
  //         id: 12,
  //         type: "multiple-choice",
  //         question: "Which is not true about helper T cells?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "They function in both the cell-­mediated and humoral immune responses", "They secrete antibody", "They bear surface CD4 molecules", "They are subject to infection by HIV", "When activated, they secrete IL-2 and other cytokines"],
  //         multipleChoiceAnswer: "They secrete antibody",
  //         feedbackExplanation: "Helper T cells do not secrete antibodies; B cells do. Helper T cells regulate both arms of adaptive immunity",
  //       },
  //       {
  //         id: 13,
  //         type: "multiple-choice",
  //         question: "Which is not an antigen-presenting cell?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Macrophage", "Dendritic Cell", "Mast Cell", "Activated B Cells", "Thymus Cells"],
  //         multipleChoiceAnswer: "Thymus Cells",
  //         feedbackExplanation: "Thymus cells are not antigen-presenting cells; macrophages, dendritic cells, and activated B cells are",
  //       },
  //       {
  //         id: 14,
  //         type: "multiple-choice",
  //         question: "IL-2 is important for the activation of all of the following cell types except",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "B Cells", "Cytotoxic T Cells", "NK Cells", "T Helper Cells", "Macrophages"],
  //         multipleChoiceAnswer: "Macrophages",
  //         feedbackExplanation: "IL-2 activates T cells, B cells, and NK cells—but not macrophages directly",
  //       },
  //       {
  //         id: 15,
  //         type: "multiple-choice",
  //         question: "Which is an autoimmune disease in which myelinated neurons become the target of the immune response?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Myasthenia Gravis", "Multiple Sclerosis", "Diabetes Mellitus", "Rheumatoid Arthritis"],
  //         multipleChoiceAnswer: "Multiple Sclerosis",
  //         feedbackExplanation: "Multiple sclerosis is an autoimmune disease where the immune system attacks CNS myelin",
  //       },
  //       {
  //         id: 16 - 1,
  //         type: "multiple-choice",
  //         question: "Which cell type mediates phagocytosis?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Helper T Cell", "Cytotoxic T Cell", "B Cell", "Macrophage"],
  //         multipleChoiceAnswer: "Macrophage",
  //         feedbackExplanation: "Macrophages are responsible for phagocytosis",
  //       },
  //       {
  //         id: 16 - 2,
  //         type: "multiple-choice",
  //         question: "Which cell type secretes cytokines such as IL-2?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Helper T Cell", "Cytotoxic T Cell", "B Cell", "Macrophage"],
  //         multipleChoiceAnswer: "Helper T Cell",
  //         feedbackExplanation: "Helper T cells secrete cytokines like IL-2 to coordinate immune responses",
  //       },
  //       {
  //         id: 16 - 3,
  //         type: "multiple-choice",
  //         question: "Which cell type kills virus-infected cells?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Helper T Cell", "Cytotoxic T Cell", "B Cell", "Macrophage"],
  //         multipleChoiceAnswer: "Cytotoxic T Cell",
  //         feedbackExplanation: "Cytotoxic T cells (CD8+) directly kill infected cells",
  //       },
  //       {
  //         id: 16 - 4,
  //         type: "multiple-choice",
  //         question: "Which cell type specifically binds to free virus?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Helper T Cell", "Cytotoxic T Cell", "B Cell", "Macrophage"],
  //         multipleChoiceAnswer: "B Cell",
  //         feedbackExplanation: "B cells recognize free antigen (like viruses) through their B cell receptor",
  //       },
  //       {
  //         id: 16 - 5,
  //         type: "multiple-choice",
  //         question: "Which cell type differentiates into antibody-secreting plasma cells?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Helper T cell", "Cytotoxic T Cell", "B Cell", "Macrophage"],
  //         multipleChoiceAnswer: "B Cell",
  //         feedbackExplanation: "B cells differentiate into plasma cells, which produce antibodies",
  //       },
  //       {
  //         id: 17 - 1,
  //         type: "multiple-choice",
  //         question: "Which immune response type occurs in a viral infection?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Humoral", "Cell-Mediated", "Both", "Neither"],
  //         multipleChoiceAnswer: "Both",
  //         feedbackExplanation: "Viral infections activate both humoral and cell-mediated immunity",
  //       },
  //       {
  //         id: 17 - 2,
  //         type: "multiple-choice",
  //         question: "Which immune response type involves the production of antibodies?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Humoral", "Cell-Mediated", "Both", "Neither"],
  //         multipleChoiceAnswer: "Humoral",
  //         feedbackExplanation: "The production of antibodies is a hallmark of the humoral immune response",
  //       },
  //       {
  //         id: 17 - 3,
  //         type: "multiple-choice",
  //         question: "Which immune response type involves the phagocytic activity of neutrophils?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Humoral", "Cell-Mediated", "Both", "Neither"],
  //         multipleChoiceAnswer: "Neither",
  //         feedbackExplanation: "Neutrophil phagocytosis is part of innate immunity, not humoral or cell-mediated responses",
  //       },
  //       {
  //         id: 17 - 4,
  //         type: "multiple-choice",
  //         question: "Which immune response type involves killing virus-infected cells?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Humoral", "Cell-Mediated", "Both", "Neither"],
  //         multipleChoiceAnswer: "Cell-mediated",
  //         feedbackExplanation: "Killing virus-infected cells is the main function of cell-mediated immunity",
  //       },
  //       {
  //         id: 17 - 5,
  //         type: "multiple-choice",
  //         question: "Which immune response type involves T cells bearing CD8?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Humoral", "Cell-Mediated", "Both", "Neither"],
  //         multipleChoiceAnswer: "Cell-Mediated",
  //         feedbackExplanation: "CD8 T cells are cytotoxic T cells involved in cell-mediated immunity",
  //       },
  //       {
  //         id: 18,
  //         type: "multiple-choice",
  //         question: "A patient with severe bee sting allergies is given a drug to ____ IgE binding to mast cells",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Block", "Enhance"],
  //         multipleChoiceAnswer: "Block",
  //         feedbackExplanation: "Blocking IgE binding prevents mast-cell degranulation, reducing severe allergic reactions",
  //       },
  //       {
  //         id: 19 - 1,
  //         type: "multiple-choice",
  //         question: "Which MHC class presents antigen from a macrophage?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Class I MHC", "Class II MHC"],
  //         multipleChoiceAnswer: "Class II MHC",
  //         feedbackExplanation: "Macrophages present antigen on class II MHC to helper T cells",
  //       },
  //       {
  //         id: 19 - 2,
  //         type: "multiple-choice",
  //         question: "Which T cell recognizes antigen on class II MHC?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Helper T Cell", "Cytotoxic T Cell"],
  //         multipleChoiceAnswer: "Helper T Cell",
  //         feedbackExplanation: "Macrophages present antigen on class II MHC to helper T cells. Class I MHC would instead activate cytotoxic T cells",
  //       },
  //       {
  //         id: 20,
  //         type: "multiple-choice",
  //         question: "Evidence exists of interactions among the immune system, the nervous system, and the endocrine system",
  //         multipleChoiceOptions: [
  //           { text: "True", image: "" },
  //           { text: "False", image: "" },
  //         ],
  //         multipleChoiceAnswer: "True",
  //         feedbackExplanation: "Immune, nervous, and endocrine systems communicate through cytokines, hormones, and neural signals",
  //       },
  //       {
  //         id: 21,
  //         type: "multiple-choice",
  //         question: "A girl steps on a rusty nail, then is given tetanus antitoxin (antibody to tetanus toxin). Is this active or passive immunization?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Active", "Passive"],
  //         multipleChoiceAnswer: "Passive",
  //         feedbackExplanation: "Antitoxin injection provides ready-made antibodies → passive immunity",
  //       },
  //       {
  //         id: 22,
  //         type: "multiple-choice",
  //         question: "Macrophages internalize foreign antigens by (endocytosis/phagocytosis), whereas B cells do so by (endocytosis/phagocytosis)",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Phagocytosis, Endocytosis", "Endocytosis, Phagocytosis"],
  //         multipleChoiceAnswer: "Phagocytosis, Endocytosis",
  //         feedbackExplanation: "Macrophages take up large particles via phagocytosis. B cells internalize antigen by receptor-mediated endocytosis",
  //       },
  //       {
  //         id: 23,
  //         type: "multiple-choice",
  //         question: "A person who has had a thymectomy as a treatment for a thymic tumor will likely experience a diminished (T cell/B cell) count",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "T Cell", "B Cell"],
  //         multipleChoiceAnswer: "T Cell",
  //         feedbackExplanation: "The thymus is required for T-cell maturation. Removing it decreases T-cell numbers, not B-cell numbers",
  //       },
  //     ],
  //   },
  //   {
  //     slug: "physiology-chapter-24",
  //     title: "Diabetes Mellitus",
  //     description: "physiology-chapter-24",
  //     image: "/images/anatomy.png",
  //     questions: [
  //       {
  //         id: 1,
  //         type: "multiple-choice",
  //         question: "Which best describes type 1 DM?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Bacterial infection of the adrenal medulla", "Viral infection of the adrenal medulla", "Autoimmune disease of the endocrine pancreas", "Autoimmune disease of the exocrine pancreas", "Disease of chronic obesity"],
  //         multipleChoiceAnswer: "Autoimmune disease of the endocrine pancreas",
  //         feedbackImage: "/images/Table 24.1 Type 1 and Type 2 Diabetes Mellitus.png",
  //         feedbackExplanation: "Type 1 diabetes is an autoimmune disease in which the immune system destroys the β-cells of the endocrine pancreas, causing little to no insulin production. The adrenal medulla is not involved",
  //       },
  //       {
  //         id: 2,
  //         type: "multiple-choice",
  //         question: "Which is not a symptom of ketoacidosis?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Acetone Breath", "Increased Ventilation", "Increased Lipolysis", "Muscle Tremors", "Increased Sympathetic Activity"],
  //         multipleChoiceAnswer: "Muscle Tremors",
  //         feedbackExplanation: "Ketoacidosis causes acetone breath, Kussmaul (increased) ventilation, increased lipolysis, and high sympathetic activity. Muscle tremors are not a characteristic symptom",
  //       },
  //       {
  //         id: 3,
  //         type: "multiple-choice",
  //         question: "What causes a diabetic coma?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Severe Hyperglycemia", "Too much insulin, which causes severe hypoglycemia", "Acidosis", "Increased sympathetic activity to blood vessels of the brain", "Vasoconstriction of blood vessels to the brain"],
  //         multipleChoiceAnswer: "Too much insulin, which causes severe hypoglycemia",
  //         feedbackExplanation: "A diabetic coma often results from severe hypoglycemia, usually due to too much insulin. Low glucose deprives the brain of energy, causing loss of consciousness",
  //       },
  //       {
  //         id: 4,
  //         type: "multiple-choice",
  //         question: "What are the “3 polys” of diabetes mellitus?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "{Polydipsia}, {Polyphagia}, {Polyuria}", "{Polyglycemia}, {Polylipemia}, {Polyuria}", "{Polycythemia}, {Polyglycemia}, {Polydipsia}", "{Polycythemia}, {Polyphagia}, {Polyuria}", "{Polydipsia}, {Polyinsulinemia}, {Polyphagia}"],
  //         multipleChoiceAnswer: "{Polydipsia}, {Polyphagia}, {Polyuria}",
  //         feedbackExplanation: "The classic symptoms of uncontrolled diabetes are polydipsia (excessive thirst), polyphagia (excessive hunger), and polyuria (excessive urination) due to high blood glucose and osmotic diuresis",
  //         tooltipTerms: [
  //           { label: "Polycythemia", meaning: "Too many red blood cells in the blood" },
  //           { label: "Polydipsia", meaning: "Excessive thirst" },
  //           { label: "Polyinsulinemia", meaning: "Abnormally high insulin levels in the blood" },
  //           { label: "Polyglycemia", meaning: "High blood glucose levels" },
  //           { label: "Polylipemia", meaning: "High levels of fats/lipids in the blood" },
  //           { label: "Polyphagia", meaning: "Excessive hunger or eating" },
  //           { label: "Polyuria", meaning: "Excessive urination" },
  //         ],
  //       },
  //       {
  //         id: 5,
  //         type: "multiple-choice",
  //         question: "Glycosylation of which protein is used as a marker for diagnosing diabetes?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Insulin", "Hexokinase", "Hemoglobin", "Aldose Reductase", "Protein Kinase C"],
  //         multipleChoiceAnswer: "Hemoglobin",
  //         feedbackExplanation: "Diabetes is diagnosed in part using HbA1c, which measures the glycosylation of hemoglobin. This reflects average blood glucose levels over ~3 months",
  //       },
  //       {
  //         id: 6,
  //         type: "multiple-choice",
  //         question: "Proliferative retinopathy is caused by ____?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Leaking retinal blood vessel {microaneurysms}", "Extensive retina {angiogenesis} resulting in weak, fragile, leaky blood vessels", "Too many rods and cones overlapping", "Extensive choroid development, putting pressure on the optic nerve", "Extensive retinal pigmented epithelium development, putting pressure on the optic nerve"],
  //         multipleChoiceAnswer: "Extensive retina {angiogenesis} resulting in weak, fragile, leaky blood vessels",
  //         feedbackImage: "/images/Figure 24.8 Diabetic retinopathy.png",
  //         feedbackExplanation: "Proliferative diabetic retinopathy occurs when excessive angiogenesis produces weak, fragile new vessels, which easily leak or bleed, damaging retinal tissue",
  //         tooltipTerms: [
  //           {
  //             label: "angiogenesis",
  //             meaning: "process by which new blood vessels form from existing blood vessels",
  //           },
  //           {
  //             label: "microaneurysms",
  //             meaning: "tiny bulges in the walls of small blood vessels",
  //           },
  //         ],
  //       },
  //       {
  //         id: 7,
  //         type: "multiple-choice",
  //         question: "What is an early {nephropathy} symptom used for diagnostic purposes?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Glucose in Urine", "{Albumin} in Urine", "Blood in Urine", "Excessive Thirst", "Dehydration"],
  //         multipleChoiceAnswer: "Albumin in Urine",
  //         feedbackExplanation: "An early sign of diabetic kidney disease is albumin in the urine (microalbuminuria), which indicates damage to the glomerular filtration barrier",
  //         tooltipTerms: [
  //           {
  //             label: "nephropathy",
  //             meaning: "kidney disease or damage",
  //           },
  //           {
  //             label: "Albumin",
  //             meaning: "Albumin is a protein made by the liver that circulates in the blood",
  //           },
  //         ],
  //       },
  //       {
  //         id: 8,
  //         type: "multiple-choice",
  //         question: "Which is not a phagocyte?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Fibroblasts", "Neutrophils", "Macrophages", "Monocytes"],
  //         multipleChoiceAnswer: "Fibroblasts",
  //         feedbackExplanation: "Neutrophils, macrophages, and monocytes are phagocytic immune cells. Fibroblasts are structural connective-tissue cells, not phagocytes",
  //       },
  //       {
  //         id: 9,
  //         type: "multiple-choice",
  //         question: "Which is not used to treat type 2 DM?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Sulfonylureas", "Biguanides", "α-Glucosidase Inhibitors", "Thiazolidinediones", "Phenylephrine"],
  //         multipleChoiceAnswer: "Phenylephrine",
  //         feedbackExplanation: "Sulfonylureas, biguanides, α-glucosidase inhibitors, and thiazolidinediones all treat type 2 diabetes. Phenylephrine is a decongestant and does not treat diabetes",
  //       },
  //       {
  //         id: 10,
  //         type: "multiple-choice",
  //         question: "Which is an enzyme currently being studied as a target for gene therapy of diabetes mellitus?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Hexokinase", "Protein Kinase C", "Aldose Reductase", "AMP-Activated Protein Kinase", "Tyrosine Kinase"],
  //         multipleChoiceAnswer: "Aldose Reductase",
  //         feedbackExplanation: "Aldose reductase is an enzyme involved in the polyol pathway, which contributes to diabetic complications. It is being studied as a potential gene therapy target to reduce long-term tissue damage",
  //       },
  //       {
  //         id: 11,
  //         type: "multiple-choice",
  //         question: "Which is the more prevalent, type 1 or type 2 diabetes mellitus?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Type 2 Diabetes Mellitus"],
  //         multipleChoiceAnswer: "Type 2 Diabetes Mellitus",
  //         feedbackExplanation: "Type 2 diabetes mellitus is far more common than type 1, accounting for about 90–95% of all diabetes cases",
  //       },
  //       {
  //         id: 12,
  //         type: "multiple-choice",
  //         question: "____ is an autoimmune disease",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Type 1 Diabetes Mellitus", "Type 2 Diabetes Mellitus"],
  //         multipleChoiceAnswer: "Type 1 Diabetes Mellitus",
  //         feedbackExplanation: "Type 1 diabetes mellitus is an autoimmune disorder in which the immune system destroys pancreatic β-cells. Type 2 is not autoimmune",
  //       },
  //       {
  //         id: 13,
  //         type: "multiple-choice",
  //         question: "The non-enzymatic addition of glucose to a protein is called ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Glycosylation"],
  //         multipleChoiceAnswer: "Glycosylation",
  //         feedbackExplanation: "Glycosylation is the non-enzymatic attachment of glucose to proteins, a process that increases with chronic hyperglycemia and is used to measure HbA1c",
  //       },
  //       {
  //         id: 14,
  //         type: "multiple-choice",
  //         question: "Acidosis occurs in diabetes due to the production of ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Ketones"],
  //         multipleChoiceAnswer: "Ketones",
  //         feedbackExplanation: "In uncontrolled diabetes, the body uses fats for energy, producing ketones, which are acidic and lead to metabolic acidosis",
  //       },
  //       {
  //         id: 15,
  //         type: "multiple-choice",
  //         question: "Define polyuria, polydipsia, and polyphagia",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Polyuria = excessive urination; polydipsia = excessive thirst; polyphagia = excess eating"],
  //         multipleChoiceAnswer: "Polyuria = excessive urination; polydipsia = excessive thirst; polyphagia = excess eating",
  //         feedbackExplanation: "These are classic symptoms of diabetes: Polyuria: excessive urination due to osmotic diuresis from glucose in the filtrate. Polydipsia: excessive thirst caused by dehydration from polyuria. Polyphagia: increased hunger because cells cannot take up glucose effectively",
  //       },
  //       {
  //         id: 16,
  //         type: "multiple-choice",
  //         question: "Amputation in diabetes occurs secondary to ____",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Acceptable answers include delayed wound healing; diabetic neuropathy; gangrene; or diabetic foot ulcer"],
  //         multipleChoiceAnswer: "Acceptable answers include delayed wound healing; diabetic neuropathy; gangrene; or diabetic foot ulcer",
  //         feedbackExplanation: "Amputations often result from delayed wound healing, neuropathy, and infections, which can progress to ulcers or gangrene due to poor circulation and nerve damage",
  //       },
  //       {
  //         id: 17,
  //         type: "multiple-choice",
  //         question: "Name the 3 phases of wound healing. Which phases are delayed in diabetes?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "Three phases: inflammation, proliferation, remodeling; all these phases are delayed in diabetes"],
  //         multipleChoiceAnswer: "Three phases: inflammation, proliferation, remodeling; all these phases are delayed in diabetes",
  //         feedbackExplanation: "The 3 phases of wound healing are inflammation, proliferation, and remodeling. All phases are slowed or impaired in diabetes due to poor blood flow, high glucose, and immune dysfunction",
  //       },
  //       {
  //         id: 18,
  //         type: "multiple-choice",
  //         question: "How do sulfonylureas increase insulin secretion?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "They cause closing of {K} channels on the beta cell membrane, which depolarizes the cell"],
  //         multipleChoiceAnswer: "They cause closing of {K} channels on the beta cell membrane, which depolarizes the cell",
  //         feedbackExplanation: "Sulfonylureas close ATP-sensitive {K} channels on pancreatic β-cells. This depolarizes the membrane, triggers {Ca} influx, and stimulates insulin release",
  //         tooltipTerms: [
  //           { label: "Ca", meaning: "Calcium" },
  //           { label: "K", meaning: "Potassium" },
  //         ],
  //       },
  //       {
  //         id: 19,
  //         type: "multiple-choice",
  //         question: "Can weight-loss surgery reverse some type II diabetes cases?",
  //         multipleChoiceOptions: [
  //           { text: "Yes", image: "" },
  //           { text: "No", image: "" },
  //         ],
  //         multipleChoiceAnswer: "Yes",
  //         feedbackExplanation: "Bariatric (weight-loss) surgery can significantly improve insulin sensitivity and sometimes reverse type 2 diabetes, especially in early stages",
  //       },
  //       {
  //         id: 20,
  //         type: "multiple-choice",
  //         question: "What is a diabetic coma?",
  //         multipleChoiceOptions: [

  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // { text: , image: "" },
  // "A coma from taking too much insulin, thereby dropping blood glucose levels to dangerously low levels"],
  //         multipleChoiceAnswer: "A coma resulting from taking an excess of insulin, thereby dropping blood glucose levels to dangerously low levels",
  //         feedbackExplanation: "A diabetic coma can occur when excess insulin causes severe hypoglycemia, depriving the brain of glucose and leading to loss of consciousness",
  //       },
  //     ],
  //   },
];
