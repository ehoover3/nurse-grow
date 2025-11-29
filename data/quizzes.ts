export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  answerImage?: string;
  answerExplanation?: string;
  notes?: string;
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
    slug: "test",
    title: "TEST",
    description: "TEST DESCRIPTION",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Skin", "Heart", "Brain"],
        answer: "Skin",
        answerImage: "/images/Figure 1.3 Glands.png",
      },
      {
        id: 2,
        question: "How many chambers does the human heart have?",
        options: ["2", "3", "4", "5"],
        answer: "4",
      },
      {
        id: 3,
        question: "Which transports blood?",
        options: ["Respiratory", "Circulatory", "Digestive", "Nervous"],
        answer: "Circulatory",
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
        question: "Which is positive feedback?",
        options: [
          "Stomach lining cell acid secretion is suppressed when stomach contents acidity increases.",
          "A rise in blood pressure stimulates the elimination of water in the urine, which reduces the blood pressure.",
          "Increase in the concentration of H⁺ in blood causes an increase in H+ excretion in urine.",
          "Increase in the blood CO₂ concentration stimulates breathing, which increases the rate at which CO₂ is eliminated from the body.",
          "Uterus contractions push the fetus against the cervix, which triggers release of oxytocin into the bloodstream; oxytocin then stimulates stronger uterus contractions.",
        ],
        answer: "Uterus contractions push the fetus against the cervix, which triggers release of oxytocin into the bloodstream; oxytocin then stimulates stronger uterus contractions.",
      },
      {
        id: 2,
        question: "The hormone aldosterone stimulates the reabsorption of sodium ions from a kidney tubule's lumen. This hormone acts on ____",
        options: ["Neurons.", "Muscle cells.", "Epithelial cells.", "Connective tissue cells."],
        answer: "Epithelial cells.",
      },
      {
        id: 3,
        question: "Hormones are secreted...",
        options: ["Into the blood.", "From exocrine glands.", "From endocrine glands.", "Both into the blood and from exocrine glands.", "Both into the blood and from endocrine glands."],
        answer: "Both into the blood and from endocrine glands.",
        answerImage: "/images/Figure 1.3 Glands.png",
      },
      {
        id: 4,
        question: "Which cell type is specialized for contraction and generation of force?",
        options: ["Muscle", "Epithelial", "Connective tissue", "Nerve"],
        answer: "Muscle",
      },
      {
        id: 5,
        question: "Normal blood glucose level is",
        options: ["50 mg/dL.", "100 mg/dL.", "50 mg/mL.", "100 mg/mL.", "50 mg/L."],
        answer: "100 mg/dL.",
      },

      {
        id: 6,
        question: "The body’s internal environment is synonymous with",
        options: ["extracellular fluid", "intracellular fluid"],
        answer: "extracellular fluid",
      },
      {
        id: 7,
        question: "Internal environment constant conditions maintenance is ____.",
        options: ["exocytosis", "gluconeogenesis", "homeostasis", "ionotropic"],
        answer: "homeostasis",
      },
      {
        id: 8,
        question: "Plasma is extracellular fluid.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        id: 9,
        question: "In homeostasis, all physiological variables are regulated to stay constant.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 10,
        question: "The protein elastin is found in (epithelial/connective) tissue.",
        options: ["epithelial", "connective"],
        answer: "connective",
      },
      {
        id: 11,
        question: "Plasma and interstitial fluid are identical in composition.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 12,
        question: "A hormone that causes movement of glucose from plasma to cells is           .",
        options: ["glycogen", "insulin", "glucagon", "vasopressin"],
        answer: "insulin",
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
        question: "Which biomolecule is not a polymer?",
        options: ["Polysaccharide", "Phospholipid", "Protein", "Nucleic acid"],
        answer: "Phospholipid",
      },

      {
        id: 2,
        question: "A fatty acid that has two double bonds between carbon atoms is ____",
        options: ["A saturated fatty acid.", "A desaturated fatty acid.", "A monounsaturated fatty acid.", "A polyunsaturated fatty acid.", "An eicosanoid."],
        answer: "A polyunsaturated fatty acid.",
      },
      {
        id: 3,
        question: "Which molecules is not a component of a phospholipid?",
        options: ["Cholesterol", "Glycerol", "Phosphate", "Fatty acid"],
        answer: "Cholesterol",
      },
      {
        id: 4,
        question: "Hydrogen bonding between the amino hydrogen of one amino acid and the carboxyl oxygen of another amino acid in a protein is responsible for",
        options: ["Primary protein structure.", "Secondary protein structure.", "Tertiary protein structure.", "Quaternary protein structure."],
        answer: "Secondary protein structure.",
      },
      {
        id: 5,
        question: "Which nucleic acids is not a pyrimidine?",
        options: ["Cytosine", "Thymine", "Uracil", "Adenine"],
        answer: "Adenine",
      },

      {
        id: 6,
        question: "Glycogen and lipids are stored",
        options: ["As inclusions in the cytosol.", "In storage vesicles.", "In secretory vesicles.", "In lysosomes.", "In the nucleolus."],
        answer: "As inclusions in the cytosol.",
      },
      {
        id: 7,
        question: "Which organelle produces most of a cell's ATP?",
        options: ["Nucleus", "Peroxisome", "Golgi apparatus", "Mitochondrion", "Smooth endoplasmic reticulum"],
        answer: "Mitochondrion",
      },
      {
        id: 8,
        question: "Which cell-to-cell adhesion allows quick transmission of electrical signals between adjacent cells?",
        options: ["Desmosome", "Gap junction", "Tight junction"],
        answer: "Gap junction",
      },

      {
        id: 9,
        question: "To initiate transcription of DNA, the ­enzyme RNA polymerase binds to the",
        options: ["Initiator codon.", "Termination codon.", "Promoter sequence.", "Centromere.", "Leader sequence."],
        answer: "Promoter sequence.",
      },
      {
        id: 10,
        question: "The base sequence on tRNA that ­recognizes the mRNA codon by the law of  complementary base pairing is called the",
        options: ["tRNA codon.", "Anticodon.", "Amino codon.", "Leader codon.", "Initiator codon."],
        answer: "Anticodon.",
      },
      {
        id: 11,
        question: "For proteins to be synthesized in ­association with the rough endoplasmic reticulum, the leader sequence must bind to a            on the membrane of the ­endoplasmic reticulum.",
        options: ["transport vesicle", "secretory vesicle", "coated vesicle", "signal recognition protein", "promoter"],
        answer: "signal recognition protein",
      },

      {
        id: 12,
        question: "During replication, which enzyme causes DNA to uncoil?",
        options: ["DNA polymerase", "RNA polymerase", "DNA kinase", "Helicase", "DNA ligase"],
        answer: "Helicase",
      },

      {
        id: 13,
        question: "What is a lagging strand?",
        options: ["A sequence of nucleotides in DNA that binds RNA polymerase", "A sequence of amino acids at the ­beginning of a polypeptide that directs the polypeptide to its destination", "The newly synthesized DNA strand formed by ligation of Okazaki fragments", "The protein filaments that extend between two cells to form desmosomes", "The protein filaments that form cilia"],
        answer: "The newly synthesized DNA strand formed by ligation of Okazaki fragments",
      },
      {
        id: 14,
        question: "During which phase of mitosis is the mitotic spindle developing?",
        options: ["Prophase", "Metaphase", "Anaphase", "Telophase", "Prometaphase"],
        answer: "Prophase",
      },
      {
        id: 15,
        question: "During which phase of mitosis do the chromosome pairs move to opposite poles of the cell?",
        options: ["Prophase", "Metaphase", "Anaphase", "Telophase", "Prometaphase"],
        answer: "Anaphase",
      },
      {
        id: 16,
        question: "Monosaccharides are (polar/nonpolar/amphipathic) molecules.",
        options: ["polar", "nonpolar", "amphipathic"],
        answer: "polar",
      },
      {
        id: 17,
        question: "Triglycerides are (polar/nonpolar/amphipathic) molecules.",
        options: ["polar", "nonpolar", "amphipathic"],
        answer: "nonpolar",
      },
      {
        id: 18,
        question: "The precursor molecule for all steroids is           .",
        options: ["cholesterol", "protein", "lipids", "glucose"],
        answer: "cholesterol",
      },
      {
        id: 19,
        question: "According to the law of complementary base pairing, in RNA, adenine base pairs with           .",
        options: ["uracil", "thymine", "cytosine", "guanine"],
        answer: "uracil",
      },
      {
        id: 20,
        question: "Transmembrane proteins are examples of _____ membrane proteins.",
        options: ["integral", "peripheral"],
        answer: "integral",
      },

      {
        id: 21,
        question: "The membrane of the smooth endoplasmic reticulum is continuous with the membrane of the Golgi apparatus.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 22,
        question: "Microfilaments provide structural support for hairlike projections of the plasma membrane called           .",
        options: ["microvilli", "stereocilia", "basal bodies", "desmosomes"],
        answer: "microvilli",
      },
      {
        id: 23,
        question: "The proteins that form gap junctions between two adjacent cells are called           .",
        options: ["connexons", "", "", ""],
        answer: "connexons",
      },
      {
        id: 24,
        question: "A section of DNA that codes for a specific protein is called a           .",
        options: ["gene", "", "", ""],
        answer: "gene",
      },
      {
        id: 25,
        question: "The mRNA codon transcribed from the DNA triplet ATC is           .",
        options: ["UAG", "", "", ""],
        answer: "UAG",
      },
      {
        id: 26,
        question: "More than one codon may code for a single amino acid.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        id: 27,
        question: "The first section of a polypeptide to be translated is called the _          ; it is ­important in directing the translated protein to its final destination.",
        options: ["leader sequence", "", "", ""],
        answer: "leader sequence",
      },
      {
        id: 28,
        question: "Replication of DNA occurs during (interphase/mitosis).",
        options: ["interphase", "", "", ""],
        answer: "interphase",
      },
      {
        id: 29,
        question: "Division of the cytoplasm into two daughter cells during cell division is called           .",
        options: ["cytokinesis", "", "", ""],
        answer: "cytokinesis",
      },

      {
        id: 30,
        question: "The chemical that tags proteins for destruction in a cell is called           .",
        options: ["ubiquitin", "", "", ""],
        answer: "ubiquitin",
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
        question: "When glucose is oxidized in cells, O₂ reacts with",
        options: ["Carbon to form CO₂", "Hydrogen to form H₂O", "Components of the electron transport chain.", "Inorganic phosphate to form ATP.", "Acetyl CoA to form acetate."],
        answer: "Hydrogen to form H₂O",
      },
      {
        id: 2,
        question: "Which illustrates substrate-level phosphorylation?  (P - phosphate, X - metabolic intermediate)",
        options: ["ATP → ADP + Pᵢ", "ADP + Pᵢ → ATP", "X - P → X + P", "X - P + ADP → X + ATP"],
        answer: "X - P + ADP → X + ATP",
      },
      {
        id: 3,
        question: "The enzyme pyruvate dehydrogenase, which converts pyruvate to acetyl CoA, can be activated or inactivated by phosphorylation or dephosphorylation. This is an example of",
        options: ["Allosteric regulation.", "Substrate-level phosphorylation.", "Oxidative phosphorylation.", "Saturation.", "Covalent regulation."],
        answer: "Covalent regulation.",
      },
      {
        id: 4,
        question: "The following reactions occur in conjunction with step 5 of the Krebs cycle:\nGDP + Pᵢ → GTP\nGTP + ADP → GDP + ATP\nThe net reaction in this process is",
        options: ["Pᵢ + GTP → GDP", "Pᵢ + GDP → GTP", "GTP + ADP → GDP + ATP", "ADP + Pᵢ → ATP", "GDP + Pᵢ → ATP"],
        answer: "GDP + Pᵢ → ATP",
      },
      {
        id: 5,
        question: "Which reaction is an example of hydrolysis?",
        options: ["Amino acid 1 + amino acid 2 → dipeptide + H₂O", "Lactose + H₂O → glucose + galactose", "Glucose1-phosphate → gludcose- 6-phosphate", "Glucose + 6O₂ → 6O₂ + 6H₂O", "Water (liquid) + heat → water (steam)"],
        answer: "Lactose + H₂O → glucose + galactose",
      },
      {
        id: 6,
        question: "Which classes of organic molecules can be used to synthesize triglycerides?",
        options: ["Carbohydrates only", "Lipids only", "Proteins only", "Carbohydrates and lipids only", "Carbohydrates, lipids, and proteins"],
        answer: "Carbohydrates, lipids, and proteins",
      },
      {
        id: 7,
        question: "Enzymes increase the rate of an enzyme-catalyzed reaction by",
        options: ["Increasing the activation energy barrier.", "Decreasing the activation energy barrier.", "Increasing the free energy of the reactant.", "Increasing the free energy of the product.", "Decreasing the free energy of the reactant."],
        answer: "Decreasing the activation energy barrier.",
      },

      {
        id: 8,
        question: "In the following reaction, NAD⁺ receives electrons from the substance AH₂:\nNAD⁺ + AH₂ E→ NADH + H⁺ + A\nwhere E is the enzyme that catalyzes the reaction. In this reaction, which substance undergoes oxidation?",
        options: ["NAD⁺", "NADH", "AH2", "A"],
        answer: "AH2",
        notes: "The has a symbol issue.  The E should be above the right arrow.",
      },
      {
        id: 9,
        question: "Which is carried out by enzymes in the cytosol?",
        options: ["Glycolysis", "Linking step", "Krebs cycle", "Oxidative phosphorylation", "Chemiosmotic coupling"],
        answer: "Glycolysis",
      },
      {
        id: 10,
        question: "In which is CO₂ generated?",
        options: ["Glycolysis only", "Linking step only", "Krebs cycle only", "Glycolysis and Krebs cycle", "Linking step and Krebs cycle"],
        answer: "Linking step and Krebs cycle",
      },
      {
        id: 11,
        question: "The removal of hydrogen atoms from a molecule is an example of (oxidation/reduction).",
        options: [],
        answer: "oxidation",
      },
      {
        id: 12,
        question: "The forward rate of a reaction can be ­increased by increasing the concentrations of the (reactants/products).",
        options: [],
        answer: "reactants",
      },
      {
        id: 13,
        question: "For a reaction to proceed spontaneously in the forward direction, the energy change must be (positive/negative).",
        options: [],
        answer: "negative",
      },
      {
        id: 14,
        question: "Liver and muscle cells are able to store glucose in the form of a branched-chain molecule called           .",
        options: [],
        answer: "glycogen",
      },

      {
        id: 15,
        question: "Allosteric regulation involves the ­attachment of a modulator molecule to an enzyme by means of a covalent bond.",
        options: [],
        answer: "false",
      },
      {
        id: 16,
        question: "Glycogenolysis is an example of a ­catabolic reaction.",
        options: [],
        answer: "true",
      },
      {
        id: 17,
        question: "The conversion of noncarbohydrate ­precursors into glucose is called           .",
        options: [],
        answer: "gluconeogenesis",
      },
      {
        id: 18,
        question: "When ATP is synthesized using energy released in glucose oxidation, most of the ATP is synthesized by oxidative ­phosphorylation.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        id: 19,
        question: "When a substrate molecule binds to an enzyme, it binds to a particular location known as the (active/regulatory) site.",
        options: [],
        answer: "active",
      },
      {
        id: 20,
        question: "Unless a substance is an essential nutrient, it is not necessary for proper cellular function.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 21,
        question: "An enzyme catalyzes a reaction at the (lowest/highest) possible rate when it is 100% saturated.",
        options: [],
        answer: "highest",
      },
      {
        id: 22,
        question: "Conversion of pyruvate to lactate occurs under (aerobic/anaerobic) conditions.",
        options: [],
        answer: "anaerobic",
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
        question: "Which is located in greater concentration inside cells compared to outside?",
        options: ["Potassium ions", "Sodium ions", "Proteins", "Potassium and sodium ions are both located in greater concentration inside cells.", "Potassium ions and proteins are both located in greater concentration inside cells."],
        answer: "Potassium ions and proteins are both located in greater concentration inside cells.",
      },
      {
        id: 2,
        question: "If a certain anion is located in greater concentration inside the cell and a negative membrane potential exists, then Wwich statements is true?",
        options: ["The electrical force on the anion tries to move it into the cell.", "The chemical force on the anion tries to move it into the cell.", "The equilibrium potential for the ­anion is a positive value.", "Both a and c are correct."],
        answer: "The equilibrium potential for the ­anion is a positive value.",
      },
      {
        id: 3,
        question: "Given that the potassium equilibrium potential is -94 mV and the sodium equilibrium potential is +60 mV, which statements is true for forces acting on sodium and potassium when a cell is at -70 mV?",
        options: ["The electrochemical gradient for Na⁺ tries to move it into the cell.", "The electrochemical gradient for K⁺ tries to move it into the cell.", "Both a and b are correct.", "Neither a nor b is correct."],
        answer: "The electrochemical gradient for Na⁺ tries to move it into the cell.",
      },
      {
        id: 4,
        question: "When the membrane potential is equal to the equilibrium potential of Na⁺ (Eₙₐ = + 60 mV)",
        options: ["Na⁺ moves into a cell down its electrochemical gradient.", "Na⁺ moves out of a cell down its electrochemical gradient.", "The net flux of Na⁺ is zero because it is at equilibrium."],
        answer: "The net flux of Na⁺ is zero because it is at equilibrium.",
      },
      {
        id: 5,
        question: "The osmotic pressure of a solution ­depends on",
        options: ["The concentrations of all solute particles contained in it.", "The concentrations of all permeant solute particles contained in it.", "The concentrations of all impermeant solute particles contained in it.", "The atmosphere pressure exerted on the solution.", "The volume of water in which the solute particles are dissolved."],
        answer: "The concentrations of all solute particles contained in it.",
      },
      {
        id: 6,
        question: "Assuming that only impermeant solutes are present, which will occur when a cell is placed in a solution whose osmolarity is 200 mOsm?",
        options: ["Water will move into the cell.", "Water will move out of the cell.", "Water will not cross the cell membrane."],
        answer: "Water will move into the cell.",
      },

      {
        id: 7,
        question: "A solution is hypotonic if",
        options: ["The concentration of all solutes contained in it is less than 300 mOsm.", "The concentration of all permeant solutes contained in it is less than 300 mOsm.", "The concentration of all impermeant solutes contained in it is less than 300 mOsm.", "Osmolarity is less than 300 mOsm."],
        answer: "The concentration of all impermeant solutes contained in it is less than 300 mOsm.",
      },
      {
        id: 8,
        question: "Movement of Na⁺ in sodium-linked glucose transport, in sodium-proton exchange, and via the sodium-potassium pump are all examples of",
        options: ["Primary active transport.", "Passive transport.", "Mediated transport.", "Simple diffusion."],
        answer: "Mediated transport.",
      },
      {
        id: 9,
        question: "What do active transporters and carriers have in common?",
        options: ["They both transport molecules up electrochemical gradients.", "They both transport molecules down electrochemical gradients.", "They both transport lipid-soluble ­substances preferentially.", "They both utilize ATP to transport molecules.", "They both are specific for certain molecules."],
        answer: "They both are specific for certain molecules.",
      },

      {
        id: 10,
        question: "Which is a white blood cell engulfing a bacterium into a vesicle?",

        options: ["Exocytosis.", "Transcytosis.", "Receptor-mediated endocytosis.", "Pinocytosis.", "Phagocytosis."],
        answer: "Phagocytosis.",
      },
      {
        id: 11,
        question: "Which transport mechanisms functions to bring a specific extracellular substance into the cell?",
        options: ["Receptor-mediated endocytosis", "Pinocytosis", "Phagocytosis", "Both Receptor-mediated endocytosis and Phagocytosis"],
        answer: "Both Receptor-mediated endocytosis and Phagocytosis",
      },
      {
        id: 12,
        question: "Substances that cross cell membranes by simple diffusion are mostly _____.",
        options: ["hydrophilic", "hydrophobic"],
        answer: "hydrophobic",
      },

      {
        id: 13,
        question: "In simple diffusion, an uncharged solute always flows from a region of higher concentration to a region of lower concentration.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        id: 14,
        question: "A concentration gradient is also referred to as a(n)            driving force.",
        options: [],
        answer: "chemical",
      },
      {
        id: 15,
        question: "When a membrane potential is positive, there is an excess of cations over anions inside the cell.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        id: 16,
        question: "A cell will shrink if it is placed in a hypertonic solution.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        id: 17,
        question: "When water diffuses across a membrane, it normally flows from a region of higher osmotic pressure to a region of lower osmotic pressure.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 18,
        question: "Junctions connecting adjacent epithelial cells are            junctions.",
        options: [],
        answer: "tight",
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
        question: "Arachidonic acid is the raw material for the synthesis of",
        options: ["Amines.", "Thyroid hormones.", "Eicosanoids.", "Steroids.", "Peptides."],
        answer: "Eicosanoids.",
      },

      {
        id: 2,
        question: "Epinephrine is a(n)",
        options: ["Amino acid.", "Steroid.", "Eicosanoid.", "Adrenocorticoid.", "Catecholamine."],
        answer: "Catecholamine.",
      },
      {
        id: 3,
        question: "Most chemical messengers fall into which chemical classes?",
        options: ["Amines", "Amino acids", "Peptides/proteins", "Eicosanoids", "Steroids"],
        answer: "Peptides/proteins",
      },
      {
        id: 4,
        question: "All amino acid chemical messengers function as",
        options: ["Paracrines.", "Autocrines.", "Neurohormones.", "Neurotransmitters.", "Hormones."],
        answer: "Neurotransmitters.",
      },
      {
        id: 5,
        question: "All steroid chemical messengers function as",
        options: ["Paracrines.", "Autocrines.", "Neurohormones.", "Neurotransmitters.", "Hormones."],
        answer: "Hormones.",
      },
      {
        id: 6,
        question: "Which is likely to cause an increase in intracellular cAMP levels?",
        options: ["Stimulation of phosphodiesterase activity", "Activation of an inhibitory G protein targeting adenylate cyclase", "Binding of chemical messengers to enzyme-linked receptors", "Binding of chemical messengers to receptor-operated channels", "Stimulation of adenylate cyclase activity"],
        answer: "Stimulation of adenylate cyclase activity",
      },
      {
        id: 7,
        question: "Which messenger classes bind to intracellular receptors?",
        options: ["Catecholamines only", "Peptides only", "Steroids only", "Both catecholamines and steroids", "Both peptides and steroids"],
        answer: "Steroids only",
      },
      {
        id: 8,
        question: "The response of a target cell to a messenger depends on ____?",
        options: ["Concentration of the messenger", "Concentration of receptors on the target cell", "Affinity of the receptor for the messenger", "Both a and c", "All of the above"],
        answer: "All of the above",
      },
      {
        id: 9,
        question: "G proteins are involved whenever",
        options: [
          "Binding of messenger molecules to cell surface receptors triggers a target cell response.",
          "Binding of ligand molecules to cell surface receptors triggers activation or inhibition of enzymes.",
          "Binding of ligand molecules to cell surface receptors triggers synthesis of second messengers.",
          "Binding of ligand molecules to cell surface receptors triggers a change in membrane permeability to ions.",
          "All of the above.",
        ],
        answer: "Binding of ligand molecules to cell surface receptors triggers synthesis of second messengers.",
      },
      {
        id: 10,
        question: "Which enzyme catalyzes the synthesis of diacylglycerol?",
        options: ["Adenylate cyclase", "Tyrosine kinase", "Phospholipase C", "Protein kinase", "Phosphoprotein phosphatase"],
        answer: "Phospholipase C",
      },
      {
        id: 11,
        question: "Cells that secrete a messenger are called           .",
        options: ["secretory cells"],
        answer: "secretory cells",
      },
      {
        id: 12,
        question: "An (endocrine/autocrine) agent acts on the same cell that secretes it.",
        options: ["endocrine", "autocrine"],
        answer: "autocrine",
      },
      {
        id: 13,
        question: "Endocrine glands release  (neurotransmitter/hormone) into the           , where it travels to the target cell.",
        options: ["neurotransmitter, blood", "hormone, blood"],
        answer: "hormone, blood",
      },
      {
        id: 14,
        question: "When a G protein is activated, it releases a (GDP/GTP) and binds a (GDP/GTP).",
        options: [],
        answer: "GDP, GTP",
      },
      {
        id: 15,
        question: "The enzyme that catalyzes conversion of ATP to cAMP is called           .",
        options: [],
        answer: "adenylate cyclase",
      },
      {
        id: 16,
        question: "Following activation of the phosphatidylinositol system, (IP₃/DAG) liberates calcium from intracellular stores.",
        options: [],
        answer: "IP3",
      },
      {
        id: 17,
        question: "(Lipophilic/Lipophobic) messengers  exert their effect on target cells by  activating or inactivating specific genes.",
        options: [],
        answer: "Lipophilic",
      },
      {
        id: 18,
        question: "Examples of locally acting chemical  messengers are (steroids/eicosanoids).",
        options: [],
        answer: "eicosanoids",
      },
      {
        id: 19,
        question: "Cytosolic calcium often exerts its effect by binding to cytosolic (protein kinase C/calmodulin).",
        options: [],
        answer: "calmodulin",
      },
      {
        id: 20,
        question: "Lipophobic messengers are secreted by (exocytosis/diffusion across the cell membrane).",
        options: [],
        answer: "exocytosis",
      },
      {
        id: 21,
        question: "Amino acids are (hormones/neurotransmitters).",
        options: [],
        answer: "neurotransmitters",
      },
      {
        id: 22,
        question: "The (nervous system/endocrine system) is a more rapid means of communication.",
        options: [],
        answer: "nervous system",
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
        question: "Epinephrine is released from which area of the adrenal gland?",
        options: ["Zona reticularis", "Zona fasciculata", "Zona glomerulosa", "Medulla"],
        answer: "Medulla",
      },
      {
        id: 2,
        question: "Which is true regarding regulation of pituitary hormone secretion by the hypothalamus?",
        options: [
          "All pituitary hormones are regulated by tropic hormones from the hypothalamus.",
          "All anterior pituitary hormones are regulated by a releasing hormone and a release-inhibiting hormone from the hypothalamus.",
          "All posterior pituitary hormones are regulated by a releasing hormone from the hypothalamus.",
          "All anterior pituitary hormones are tropic hormones.",
          "None of the above.",
        ],
        answer: "All pituitary hormones are regulated by tropic hormones from the hypothalamus.",
      },
      {
        id: 3,
        question: "Most hypothalamic and pituitary hormones are",
        options: ["Amino acids.", "Peptides/proteins.", "Steroids.", "Eicosanoids.", "Catecholamines."],
        answer: "Peptides/proteins.",
      },
      {
        id: 4,
        question: "Gonadotropin releasing hormone stimulates release of ____ from the anterior pituitary?",
        options: ["Sex hormones", "Follicle stimulating hormone", "Luteinizing hormone", "Both follicle stimulating hormone and luteinizing hormone"],
        answer: "Both follicle stimulating hormone and luteinizing hormone",
      },
      {
        id: 5,
        question: "Which adrenal hormones is secreted by chromaffin cells?",
        options: ["Cortisol", "Aldosterone", "Epinephrine", "Androgens"],
        answer: "Epinephrine",
      },
      {
        id: 6,
        question: "In primary hyposecretion of thyroid hormones,",
        options: ["Levels of thyroid hormones in the blood decrease.", "Levels of TRH in the blood decrease.", "Levels of TSH in the blood decrease."],
        answer: "Levels of thyroid hormones in the blood decrease.",
      },
      {
        id: 7,
        question: "Which organs secretes glucagon?",
        options: ["Liver", "Anterior pituitary", "Posterior pituitary", "Adrenal gland", "Pancreas"],
        answer: "Pancreas",
      },
      {
        id: 8,
        question: "Which is an example of permissiveness?",
        options: ["Glucagon increases blood glucose levels, and insulin decreases blood glucose levels.", "Glucagon, epinephrine, and cortisol all increase blood glucose levels.", "Estrogen stimulates synthesis of progesterone receptors in the endometrium."],
        answer: "Estrogen stimulates synthesis of progesterone receptors in the endometrium.",
      },
      {
        id: 9,
        question: "(Endocrine/Exocrine) glands secrete hormones.",
        options: ["Endocrine", "Exocrine"],
        answer: "Endocrine",
      },
      {
        id: 10,
        question: "Neural input to the hypothalamus is involved in regulating secretion of hormones by both lobes of the pituitary.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        id: 11,
        question: "The adrenal ____ secretes epinephrine.",
        options: ["medulla", "cortex"],
        answer: "medulla",
      },
      {
        id: 12,
        question: "Thyroid hormones are classified as (amines/steroids).",
        options: ["amines"],
        answer: "amines",
      },

      {
        id: 13,
        question: "Lipophobic messengers are secreted by (exocytosis/diffusion across the cell membrane).",
        options: ["exocytosis"],
        answer: "exocytosis",
      },

      {
        id: 14,
        question: "____ secretes calcitonin.",
        options: ["thyroid gland", "parathyroid gland"],
        answer: "thyroid gland",
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
        question: "Depolarization of a neuron to threshold stimulates",
        options: ["Opening of sodium channels.", "Delayed closing of sodium channels.", "Delayed opening of potassium channels.", "Both a and c.", "All of the above."],
        answer: "All of the above.",
      },
      {
        id: 2,
        question: "Neurotransmitters are released most commonly from the",
        options: ["Cell body.", "Dendrites.", "Axon terminals.", "Axon hillock."],
        answer: "Axon terminals.",
      },
      {
        id: 3,
        question: "If a cation is equally distributed across the cell membrane (that is, its concentration inside the cell equals its concentration outside the cell), then which statements is false?",
        options: ["At −70 mV, the chemical force on the ion is zero.", "At −70 mV, the electrical force on the ion acts to move it into the cell.", "At +30 mV, the chemical force on the ion is zero.", "The equilibrium potential for the ion is zero.", "At −70 mV, the electrochemical force on the ion acts to move it out of the cell."],
        answer: "At −70 mV, the electrochemical force on the ion acts to move it out of the cell.",
      },
      {
        id: 4,
        question: "An action potential's depolarization phase is caused by ____",
        options: ["Opening of potassium channels.", "Closing of potassium channels.", "Opening of sodium channels.", "Closing of sodium channels."],
        answer: "Opening of sodium channels.",
      },
      {
        id: 5,
        question: "During the relative refractory period, a second action potential",
        options: ["Cannot be elicited.", "Can be elicited by a threshold stimulus.", "Can be elicited by a subthreshold stimulus.", "Can be elicited by a suprathreshold stimulus."],
        answer: "Can be elicited by a suprathreshold stimulus.",
      },
      {
        id: 6,
        question: "Nerves are found",
        options: ["In the central nervous system.", "In the peripheral nervous system.", "Both a and b.", "Neither a nor b."],
        answer: "In the peripheral nervous system.",
      },
      {
        id: 7,
        question: "If the membrane potential of a neuron ­becomes more negative than it was at rest, then the neuron is                 . In this state, the neuron is                  excitable.",
        options: ["depolarized; more", "hyperpolarized; more", "depolarized; less", "hyperpolarized; less"],
        answer: "hyperpolarized; less",
      },
      {
        id: 8,
        question: "Oubain is a poison that blocks the Na⁺/K⁺ pump. If this pump is blocked, then the concentration of potassium inside the cell would",
        options: ["Increase.", "Decrease.", "Not change."],
        answer: "Decrease.",
      },
      {
        id: 9,
        question: "If potassium concentrations in the extracellular fluid of the brain increased, activity in the brain would",
        options: ["Increase.", "Decrease.", "Not change."],
        answer: "Increase.",
      },
      {
        id: 10,
        question: "Which neurons are part of the peripheral nervous system?",
        options: ["Motor neurons innervating skeletal muscles", "Parasympathetic neurons", "Sympathetic neurons", "All of the above"],
        answer: "All of the above",
      },
      {
        id: 11,
        question: "Which axons exhibits the greatest conduction velocity?",
        options: ["An unmyelinated axon with diameter 5 μm", "A myelinated axon with diameter 5 μm", "An unmyelinated axon with diameter 20 μm", "A myelinated axon with diameter 20 μm"],
        answer: "A myelinated axon with diameter 20 μm",
      },
      {
        id: 12,
        question: "Which best describes the status of sodium channels at the resting membrane potential?",
        options: ["Activation gates are open and inactivation gates are closed.", "Activation gates are closed and inactivation gates are open.", "Activation gates and inactivation gates are closed.", "Activation gates and inactivation gates are open."],
        answer: "Activation gates are closed and inactivation gates are open.",
      },
      {
        id: 13,
        question: "Which is not a part of the efferent division of the nervous system?",
        options: ["Parasympathetic nervous system", "Sympathetic nervous system", "Motor neurons", "Sensory receptors"],
        answer: "Sensory receptors",
      },
      {
        id: 14,
        question: "Of the following ions, which is (are) ­located in greater concentration inside the cell?",
        options: ["Sodium only", "Potassium only", "Chloride only", "Sodium and potassium", "Potassium and chloride"],
        answer: "Potassium only",
      },
      {
        id: 15,
        question: "Which statements about graded potentials is false?",
        options: ["The magnitude of a graded potential varies with the strength of the stimulus.", "Some graded potentials are ­hyperpolarizations; others are depolarizations.", "Graded potentials are produced at ligand-gated ion channels.", "Graded potentials can sum over space and time.", "Graded potentials are limited in ­duration by the refractory period."],
        answer: "Graded potentials are limited in ­duration by the refractory period.",
      },
      {
        id: 16,
        question: "What are the subdivisions of the peripheral nervous system?",
        options: ["afferent and efferent"],
        answer: "afferent and efferent",
      },
      {
        id: 17,
        question: "Info from the periphery is brought to the central nervous system by (afferent/efferent) pathways.",
        options: ["afferent"],
        answer: "afferent",
      },
      {
        id: 18,
        question: "Which cell type is more abundant in the nervous system—glial cells or neurons?",
        options: ["glial cells"],
        answer: "glial cells",
      },
      {
        id: 19,
        question: "Voltage-gated calcium channels are located in which region(s) of a neuron?",
        options: ["axon terminal"],
        answer: "axon terminal",
      },
      {
        id: 20,
        question: "(Schwann cells/Oligodendrocytes) form myelin in the peripheral nervous system, and (Schwann cells/oligodendrocytes) form myelin in the central nervous system.",
        options: ["Schwann cells, Oligodendrocytes", "Oligodendrocytes, Schwann cells"],
        answer: "Schwann cells, Oligodendrocytes",
      },
      {
        id: 21,
        question: "Myelin (increases/decreases) conduction velocity in axons.",
        options: ["increases"],
        answer: "increases",
      },
      {
        id: 22,
        question: "If an anion is present in greater concentration outside the cell compared to inside the cell, would the equilibrium ­potential for that anion be positive, ­negative, or zero?",
        options: ["negative"],
        answer: "negative",
      },
      {
        id: 23,
        question: "Which ion is closer to equilibrium at the resting membrane potential of -70 mV: sodium or potassium?",
        options: ["potassium"],
        answer: "potassium",
      },
      {
        id: 24,
        question: "In the peripheral nervous system, cell bodies of afferent neurons are located in           .",
        options: ["ganglion"],
        answer: "ganglion",
      },
      {
        id: 25,
        question: "The electrochemical force for potassium ions when membrane potential is at peak of an action potential is (greater than/less than) the electrochemical force for potassium ions when membrane potential is at rest.",
        options: ["greater than", "less than"],
        answer: "greater than",
      },
      {
        id: 26,
        question: "Both sodium and potassium channels have inactivation gates that close shortly after the activation gates open.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 27,
        question: "When sodium inactivation gates are closed, a second action potential is impossible.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        id: 28,
        question: "In myelinated axons, action potentials are propagated by            conduction.",
        options: ["saltatory"],
        answer: "saltatory",
      },
      {
        id: 29,
        question: "The Na⁺/K⁺ pump causes the repolarization phase of an action potential.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 30,
        question: "When a neuron is at the peak of an action potential (+30 mV) the direction of the electrical force for potassium ions is (into/out of) the cell.",
        options: ["out of"],
        answer: "out of",
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
        question: "Suppose that the electrochemical force for anion X(X⁻) acts to move the anion out of the cell. If a neurotransmitter binding to its receptor opened channels for X⁻ on the postsynaptic cell, then the response would",
        options: ["Be an EPSP.", "Be an IPSP.", "Be stabilization of the membrane.", "Not occur."],
        answer: "Be an EPSP.",
      },
      {
        id: 2,
        question: "Suppose that all the calcium could be removed from the extracellular fluid surrounding a neuron. Such removal would inhibit the ability of a neuron to",
        options: ["Produce action potentials.", "Release neurotransmitter.", "Respond to the binding of a neurotransmitter to its receptor.", "Degrade neurotransmitters."],
        answer: "Release neurotransmitter.",
      },
      {
        id: 3,
        question: "Synaptic vesicles",
        options: ["Store calcium.", "Release neurotransmitters by exocytosis.", "Degrade neurotransmitters.", "Form gap junctions.", "Synthesize neurotransmitters."],
        answer: "Release neurotransmitters by exocytosis.",
      },
      {
        id: 4,
        question: "If sodium channels closed in response to a stimulus, then",
        options: ["The neuron would be depolarized.", "The neuron would be hyperpolarized.", "The membrane potential would be stabilized.", "A second messenger would be produced.", "The neuron would remain at rest."],
        answer: "The neuron would be hyperpolarized.",
      },
      {
        id: 5,
        question: "A fast EPSP is most commonly produced by",
        options: ["The opening of sodium-selective channels.", "The opening of potassium-selective channels.", "The opening of chloride channels.", "The opening of channels selective for both sodium and potassium.", "The opening of calcium-selective channels."],
        answer: "The opening of channels selective for both sodium and potassium.",
      },
      {
        id: 6,
        question: "The enzyme that catalyzes the synthesis of acetylcholine is",
        options: ["Adenylate cyclase.", "Choline acetyl transferase.", "Monoamine oxidase.", "Acetylcholinesterase.", "Catechol-O-methyltransferase."],
        answer: "Choline acetyl transferase.",
      },
      {
        id: 7,
        question: "Which neurotransmitters is a biogenic amine but not a catecholamine?",
        options: ["Norepinephrine", "Serotonin", "Dopamine", "Epinephrine"],
        answer: "Serotonin",
      },
      {
        id: 8,
        question: "Which is most likely to occur at an axoaxonic synapse?",
        options: ["An EPSP", "An IPSP", "Stabilization of the membrane potential", "Temporal summation", "Presynaptic modulation"],
        answer: "Presynaptic modulation",
      },
      {
        id: 9,
        question: "What happens to the concentration of neurotransmitter in the synaptic cleft when the frequency of action potentials increases in the presynaptic neuron?",
        options: ["It increases", "It decreases", "It remains constant"],
        answer: "It increases",
      },
      {
        id: 10,
        question: "The EPSPs from two different synapses occur at the same time and cause a larger depolarization than either one alone can cause. This is an example of",
        options: ["Membrane stabilization.", "Presynaptic inhibition.", "Presynaptic facilitation.", "Temporal summation.", "Spatial summation."],
        answer: "Spatial summation.",
      },
      {
        id: 11,
        question: "At electrical synapses, which type of junction exists between the two cells?",
        options: ["gap junction"],
        answer: "gap junction",
      },
      {
        id: 12,
        question: "When the opening of ion channels allows both sodium and potassium ions to move through, no change in membrane potential occurs because sodium moves into the cell and potassium moves out of the cell.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 13,
        question: "Neurotransmitter receptors are found at (chemical/electrical) synapses.",
        options: ["chemical"],
        answer: "chemical",
      },
      {
        id: 14,
        question: "Whether a synapse is excitatory or inhibitory is determined by the mechanism of coupling between the neurotransmitter receptor and ion channels in the postsynaptic cell.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        id: 15,
        question: "The synaptic delay includes the time it takes for an action potential to travel from the trigger zone of a presynaptic cell to the axon terminal.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 16,
        question: "A given neurotransmitter might be excitatory at one synapse and inhibitory at another synapse.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        id: 17,
        question: "Given that release of an inhibitory neurotransmitter is altered by presynaptic facilitation, the response in the postsynaptic cell will be a (larger/smaller) degree of hyperpolarization.",
        options: ["larger"],
        answer: "larger",
      },
      {
        id: 18,
        question: "The response to a neurotransmitter is faster at (ionotropic/metabotropic) receptors.",
        options: ["ionotropic"],
        answer: "ionotropic",
      },
      {
        id: 19,
        question: "The enzymes that catalyze the degradation of catecholamines are            and           .",
        options: [],
        answer: "",
      },
      {
        id: 20,
        question: "Adenylate cyclase catalyzes the formation of           .",
        options: ["monoamine oxidase (MAO), catechol-O-methyltransferase (COMT)"],
        answer: "monoamine oxidase (MAO), catechol-O-methyltransferase (COMT)",
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
        question: "Touch perception requires that sensory neurons from the skin transmit info to",
        options: ["The basal nuclei.", "The somatosensory cortex.", "The hypothalamus.", "The limbic system.", "The hippocampus."],
        answer: "The somatosensory cortex.",
      },
      {
        id: 2,
        question: "Which of the meninges is closest to the neural tissue?",
        options: ["Dura mater", "Arachnoid mater", "Pia mater"],
        answer: "Pia mater",
      },
      {
        id: 3,
        question: "At rest, the brain accounts for how much of O₂ consumption within the body?",
        options: ["2%", "5%", "20%", "40%", "50%"],
        answer: "20%",
      },
      {
        id: 4,
        question: "Hippocampus.",
        options: ["Corpus callosum.", "Corticospinal tract.", "Central canal.", "Cerebral ventricles."],
        answer: "Corticospinal tract.",
      },
      {
        id: 5,
        question: "All spinal nerves contain",
        options: ["Afferent fibers.", "Efferent fibers.", "Both afferent and efferent fibers.", "Neither afferent nor efferent fibers."],
        answer: "Both afferent and efferent fibers.",
      },

      {
        id: 6,
        question: "The origin of neurons of the corticospinal tract is the",
        options: ["Ventral horn of the spinal cord.", "Somatosensory cortex.", "Primary motor cortex.", "Cerebellum.", "Thalamus."],
        answer: "Primary motor cortex.",
      },
      {
        id: 7,
        question: "Which is not a component of the limbic system?",
        options: ["Hippocampus", "Cerebral cortex", "Amygdala", "Midbrain", "Hypothalamus"],
        answer: "Midbrain",
      },
      {
        id: 8,
        question: "The circadian rhythm is established by which brain area?",
        options: ["Suprachiasmatic nucleus", "Amygdala", "Thalamus", "Occipital lobe of the cerebral cortex", "Pons"],
        answer: "Suprachiasmatic nucleus",
      },
      {
        id: 9,
        question: "Parkinson’s disease is caused by loss of dopaminergic innervation of the",
        options: ["Cerebellum.", "Basal nuclei.", "Brainstem.", "Primary motor cortex.", "Thalamus."],
        answer: "Basal nuclei.",
      },
      {
        id: 10,
        question: "Which reflex is monosynaptic?",
        options: ["Withdrawal reflex", "Crossed-extensor reflex", "Muscle spindle stretch reflex", "Both a and c", "All of the above"],
        answer: "Muscle spindle stretch reflex",
      },

      {
        id: 11,
        question: "The area of the brain important for the maintenance of posture is the",
        options: ["Primary motor cortex.", "Basal nuclei.", "Brainstem.", "Cerebellum.", "Limbic system."],
        answer: "Brainstem.",
      },
      {
        id: 12,
        question: "Long-term potentiation is",
        options: ["A prolonged increase in synaptic activity at a given synapse.", "The formation of new synapses.", "Memory from more than 10 years ago.", "Activated through the ascending reticular activating system."],
        answer: "A prolonged increase in synaptic activity at a given synapse.",
      },
      {
        id: 13,
        question: "Where is cerebrospinal fluid synthesized?",
        options: ["choroid plexus"],
        answer: "choroid plexus",
      },
      {
        id: 14,
        question: "Which type of junction between the endothelial cells of brain capillaries produces the blood-brain barrier?",
        options: ["tight junction"],
        answer: "tight junction",
      },
      {
        id: 15,
        question: "Myelinated axons are found in (gray/white) matter.",
        options: ["white"],
        answer: "white",
      },
      {
        id: 16,
        question: "Somatic efferents originate in the (dorsal/ventral) horn of the spinal cord.",
        options: ["dorsal", "ventral"],
        answer: "ventral",
      },
      {
        id: 17,
        question: "The major function of the (cerebrum/cerebellum) is to coordinate body movements.",
        options: ["cerebellum"],
        answer: "cerebellum",
      },
      {
        id: 18,
        question: "Which three structures make up the brainstem?",
        options: ["midbrain, pons, medulla"],
        answer: "midbrain, pons, medulla",
      },
      {
        id: 19,
        question: "Which side of the brain is generally associated with creativity?",
        options: ["left", "right"],
        answer: "right",
      },
      {
        id: 20,
        question: "What are the two main structures of the diencephalon?",
        options: ["thalamus, hypothalamus"],
        answer: "thalamus, hypothalamus",
      },
      {
        id: 21,
        question: "What is the major sensory relay nucleus to the cortex?",
        options: ["thalamus"],
        answer: "thalamus",
      },
      {
        id: 22,
        question: "The area of the brain most closely associated with fear is the           .",
        options: ["amygdala"],
        answer: "amygdala",
      },
      {
        id: 23,
        question: "The           system is associated with emotions, learning, and memory.",
        options: ["limbic"],
        answer: "limbic",
      },
      {
        id: 24,
        question: "The ability to recall info when taking physiology exams is an example of            memory.",
        options: ["declarative"],
        answer: "declarative",
      },
      {
        id: 25,
        question: "The afferents that activate reflex motor actions are different from those that activate ascending tracts to communicate a sensory input to the brain.",
        options: ["true", "false"],
        answer: "false",
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
        question: "The strength of a stimulus is coded by",
        options: ["The size of the receptor potential.", "The size of the action potentials.", "The frequency of action potentials.", "Both the size of the receptor potential and the frequency of action potentials."],
        answer: "Both the size of the receptor potential and the frequency of action potentials.",
      },
      {
        id: 2,
        question: "The mechanism by which a receptor converts a stimulus into an electrical signal is called",
        options: ["Conduction.", "Convection.", "Transduction.", "Modulation.", "Propagation."],
        answer: "Transduction.",
      },
      {
        id: 3,
        question: "In lateral inhibition,",
        options: ["The nervous system produces contrast to emphasize more-important info over less-important info.", "Afferent neurons with neighboring receptive fields inhibit each other’s communication to second-order neurons.", "The ability to locate the site of a stimulus is enhanced.", "Both a and c.", "All of the above."],
        answer: "All of the above.",
      },
      {
        id: 4,
        question: "Which observation best illustrates the concept of the labeled line?",
        options: [
          "When a boxer gets punched in the eye, he perceives light.",
          "Rotation of the head stimulates certain receptors in the vestibular system but not those in the visual system.",
          "Info from different photoreceptors converges on a single ganglion cell that projects to the lateral geniculate nucleus.",
          "Hair cells in the cochlea are stimulated by sound vibrations over a wide range of frequencies.",
        ],
        answer: "When a boxer gets punched in the eye, he perceives light.",
      },
      {
        id: 5,
        question: "Which best illustrates the concept of an adequate stimulus?",
        options: [
          "When a boxer gets punched in the eye, he perceives light.",
          "Rotation of the head stimulates certain receptors in the vestibular system but not those in the visual system.",
          "Info from different photoreceptors converges on a single ganglion cell that projects to the lateral geniculate nucleus.",
          "Hair cells in the cochlea are stimulated by sound vibrations over a wide range of frequencies.",
        ],
        answer: "Rotation of the head stimulates certain receptors in the vestibular system but not those in the visual system.",
      },
      {
        id: 6,
        question: "Rubbing a sore area can decrease the sensation of pain by",
        options: ["Activating the endogenous analgesia systems.", "Referring the pain to another area of the body.", "Activating larger-diameter afferents, which activate an inhibitory interneuron, which inhibits the second-order neurons for pain.", "Decreasing the number of action potentials in nociceptor afferents.", "Presynaptic inhibition of substance P release."],
        answer: "Activating larger-diameter afferents, which activate an inhibitory interneuron, which inhibits the second-order neurons for pain.",
      },
      {
        id: 7,
        question: "In the dorsal column–medial lemniscal pathway,",
        options: ["Proprioception info is transmitted to the brain.", "The first-order neuron communicates to the second-order neuron in the dorsal horn of the spinal cord.", "The pathway crosses to the contralateral side in the spinal cord.", "Both a and c."],
        answer: "Proprioception info is transmitted to the brain.",
      },
      {
        id: 8,
        question: "Which is the correct name of the pathway from the retina to the optic chiasm?",
        options: ["Optic tract", "Optic radiations", "Optic nerve", "Optic disk"],
        answer: "Optic nerve",
      },
      {
        id: 9,
        question: "Which is the correct name of the pathway from the lateral geniculate nucleus of the thalamus to the visual cortex?",
        options: ["Optic tract", "Optic radiations", "Optic nerve", "Optic chiasm", "Optic disk"],
        answer: "Optic radiations",
      },
      {
        id: 10,
        question: "Where would you expect to find the ascending tracts for somatosensory info?",
        options: ["In the white matter of the spinal cord", "In a spinal nerve", "In the gray matter of the spinal cord", "None of the above"],
        answer: "In the white matter of the spinal cord",
      },
      {
        id: 11,
        question: "The ability to perceive different frequencies in sound vibrations is based on the fact that",
        options: ["The stereocilia of any given hair cell respond to only one frequency.", "Different areas of the basilar membrane resonate at different frequencies, such that sound of a particular frequency causes only a certain region of the membrane to vibrate.", "The frequency of action potentials in the cochlear nerve varies in proportion to the frequency of a sound stimulus."],
        answer: "Different areas of the basilar membrane resonate at different frequencies, such that sound of a particular frequency causes only a certain region of the membrane to vibrate.",
      },
      {
        id: 12,
        question: "The stereocilia for hearing are exposed to",
        options: ["Endolymph in the scala vestibuli.", "Perilymph in the scala vestibuli.", "Endolymph in the scala media.", "Perilymph in the scala media.", "Endolymph in the scala tympani."],
        answer: "Endolymph in the scala media.",
      },
      {
        id: 13,
        question: "The parasympathetic nervous system causes",
        options: ["Contraction of the radial muscle of the iris.", "Contraction of the ciliary muscle.", "Pupillary dilation.", "Both a and c."],
        answer: "Contraction of the ciliary muscle.",
      },
      {
        id: 14,
        question: "The two types of thermoreceptors are            and           .",
        options: ["warm, cold"],
        answer: "warm, cold",
      },
      {
        id: 15,
        question: "Receptors are most sensitive to energy from the            stimulus.",
        options: ["adequate"],
        answer: "adequate",
      },
      {
        id: 16,
        question: "A phasic receptor adapts (quickly/ slowly) to a constant stimulus.",
        options: ["quickly"],
        answer: "quickly",
      },
      {
        id: 17,
        question: "The three types of nociceptors are           ,           , and           .",
        options: ["mechanical, thermal, polymodal"],
        answer: "mechanical, thermal, polymodal",
      },
      {
        id: 18,
        question: "Info about touch detected on the left side of the body is transmitted to the brain in the dorsal columns on the            side of the spinal cord.",
        options: ["left"],
        answer: "left",
      },
      {
        id: 19,
        question: "When a photopigment absorbs light, cGMP levels (increase/decrease).",
        options: ["decrease"],
        answer: "decrease",
      },
      {
        id: 20,
        question: "The first neurons that support production of action potentials in the visual pathway are (photoreceptors/bipolar cells/ganglion cells).",
        options: ["ganglion cells"],
        answer: "ganglion cells",
      },
      {
        id: 21,
        question: "The pitch of sound vibration reflects its (amplitude/frequency).",
        options: ["frequency"],
        answer: "frequency",
      },
      {
        id: 22,
        question: "A hair cell in the cochlea can be excited by sounds of different frequencies.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 23,
        question: "The process by which the lens becomes stronger for close-up vision is called           .",
        options: ["accomodation"],
        answer: "accomodation",
      },
      {
        id: 24,
        question: "Rods and cones differ with regard to the type of (retinal/opsin) they contain.",
        options: ["opsin"],
        answer: "opsin",
      },
      {
        id: 25,
        question: "A single ganglion cell will either be excited or inhibited by light applied to its visual field.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 26,
        question: "The visual cortex on the left side of the brain receives info from the right eye only.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        id: 27,
        question: "Odorant molecules must be dissolved in mucus if they are to bind to olfactory receptors.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        id: 28,
        question: "A given taste receptor cell responds to only one of the four primary tastes.",
        options: ["true", "false"],
        answer: "false",
      },
    ],
  },

  {
    slug: "physiology-chapter-11",
    title: "Nervous System: Autonomic and Motor Systems",
    description: "physiology-chapter-11",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "Effector organs of the autonomic nervous system include all of the following except",
        options: ["Heart muscle.", "Smooth muscle in the pupils of the eye.", "Respiratory muscles.", "Sweat glands.", "Salivary glands."],
        answer: "Respiratory muscles.",
      },
      {
        id: 2,
        question: "According to the concept of dual innervation by the autonomic nervous system, if sympathetic activity inhibits pancreatic secretions, then the parasympathetic nervous system should",
        options: ["Inhibit pancreatic secretions as well.", "Stimulate pancreatic secretions.", "Have no effect on pancreatic secretions."],
        answer: "Stimulate pancreatic secretions.",
      },
      {
        id: 3,
        question: "The adrenal medulla",
        options: ["Contains sympathetic postganglionic neurons.", "Is part of the brainstem.", "Releases epinephrine into the blood.", "Is part of the parasympathetic nervous system.", "Is controlled by the somatic nervous system."],
        answer: "Releases epinephrine into the blood.",
      },
      {
        id: 4,
        question: "The origin of spinal preganglionic neurons is the",
        options: ["Ventral horn of the spinal cord.", "Dorsal horn of the spinal cord.", "Lateral horn of the spinal cord."],
        answer: "Lateral horn of the spinal cord.",
      },
      {
        id: 5,
        question: "The origin of motor neurons is the",
        options: ["Ventral horn of the spinal cord.", "Dorsal horn of the spinal cord.", "Lateral horn of the spinal cord."],
        answer: "Ventral horn of the spinal cord.",
      },
      {
        id: 6,
        question: "Which second messengers stimulates the release of calcium from intracellular stores?",
        options: ["cAMP", "Inositol triphosphate", "Diacylglycerol"],
        answer: "Inositol triphosphate",
      },
      {
        id: 7,
        question: "How many motor neurons innervate a single skeletal muscle cell?",
        options: ["Zero", "One", "Several", "Hundreds", "Millions"],
        answer: "One",
      },
      {
        id: 8,
        question: "Which branch of the autonomic nervous system is most active when the body is at rest?",
        options: ["parasympathetic"],
        answer: "parasympathetic",
      },
      {
        id: 9,
        question: "Which part of the adrenal gland secretes epinephrine?",
        options: ["medulla"],
        answer: "medulla",
      },
      {
        id: 10,
        question: "Decrease in cAMP is associated with which class of adrenergic receptor?",
        options: ["α₂ adrenergic"],
        answer: "α₂ adrenergic",
      },
      {
        id: 11,
        question: "β2 adrenergic receptors have a greater affinity for (epinephrine/norepinephrine).",
        options: ["epinephrine"],
        answer: "epinephrine",
      },
    ],
  },

  {
    slug: "physiology-chapter-12",
    title: "Muscle Physiology",
    description: "physiology-chapter-12",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "When a muscle cell is relaxed and intracellular ATP levels are normal, a crossbridge will remain in which states?",
        options: ["Bound to actin and in the low-energy form", "Bound to actin and in the high-energy form", "In the high-energy form, with ADP and Pi bound to it", "In the high-energy form, with ATP bound to it", "In the low-energy form with nothing bound to it"],
        answer: "In the high-energy form, with ADP and Pi bound to it",
      },
      {
        id: 2,
        question: "During a muscle contraction, which does not change length?",
        options: ["The distance between Z lines", "The width of I bands", "The width of A bands", "None of the above"],
        answer: "The width of A bands",
      },
      {
        id: 3,
        question: "Which would tend to ­reduce the concentration of lactic acid that accumulates in a muscle cell as a ­result of contractile activity?",
        options: ["Increasing the concentration of glycolytic enzymes", "Decreasing the O₂ supply to the cell", "Increasing the diameter of the cell", "Increasing the number of mitochondria in the cell", "All of the above"],
        answer: "Increasing the number of mitochondria in the cell",
      },
      {
        id: 4,
        question: "Which statement is a valid generalization regarding the properties of smooth muscle?",
        options: [
          "Neurotransmitters can either excite or inhibit smooth muscle contraction, but any given neurotransmitter is always excitatory or inhibitory, regardless of where the muscle is located.",
          "A given smooth muscle cell can respond to more than one type of neurotransmitter.",
          "Smooth muscle cells are generally unresponsive to neurotransmitters of all types.",
          "Smooth muscle cells can respond to neural input from the somatic or autonomic nervous systems.",
          "None of the above.",
        ],
        answer: "A given smooth muscle cell can respond to more than one type of neurotransmitter.",
      },
      {
        id: 5,
        question: "Which is not a determinant of whole muscle tension?",
        options: ["The number of muscle fibers contracting", "The tension produced by each contracting fiber", "The proportion of each motor unit contracting at any given time", "The extent of fatigue", "The frequency of action potentials in the motor neurons"],
        answer: "The proportion of each motor unit contracting at any given time",
      },
      {
        id: 6,
        question: "In an isotonic contraction,",
        options: ["Muscle length shortens.", "Muscle tension exceeds the force of the load.", "The load is moved.", "Both a and c.", "All of the above."],
        answer: "All of the above.",
      },
      {
        id: 7,
        question: "Which is true for the ­excitation-contraction coupling of all muscle types (skeletal, cardiac, and smooth)?",
        options: ["An action potential causes calcium levels in the cytosol to increase.", "Calcium binds to troponin.", "Thick and thin filaments slide past each other.", "Both an action potential causes calcium levels in the cytosol to increase and thick and thin filaments slide past each other."],
        answer: "Both an action potential causes calcium levels in the cytosol to increase and thick and thin filaments slide past each other.",
      },
      {
        id: 8,
        question: "During contraction of a skeletal muscle fiber,",
        options: ["The thick filaments contract.", "The thin filaments contract.", "The A band becomes shorter.", "The I band becomes shorter."],
        answer: "The I band becomes shorter.",
      },
      {
        id: 9,
        question: "Which statements concerning the characteristics of different types of muscle fibers is false?",
        options: ["The higher the myosin ATPase activity, the faster the speed of contraction.", "Muscles that have high glycolytic capacity and large glycogen stores are more resistant to fatigue.", "Oxidative types of muscle fibers contain myoglobin.", "Oxidative fibers have a richer blood supply.", "Larger-diameter fibers can produce greater tension."],
        answer: "Muscles that have high glycolytic capacity and large glycogen stores are more resistant to fatigue.",
      },
      {
        id: 10,
        question: "Which muscle types contain gap junctions?",
        options: ["Skeletal muscle", "Smooth muscle", "Cardiac muscle", "Both skeletal muscle and smooth muscle", "Both smooth muscle and cardiac muscle"],
        answer: "Both smooth muscle and cardiac muscle",
      },
      {
        id: 11,
        question: "In skeletal muscle, when calcium is released from the sarcoplasmic reticulum, it binds to (troponin/tropomyosin) to initiate the crossbridge cycle.",
        options: ["troponin"],
        answer: "troponin",
      },
      {
        id: 12,
        question: "When a muscle fiber contracts, the I bands shorten.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        id: 13,
        question: "Glycolytic fibers generate more force than oxidative fibers because they are larger in diameter.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        id: 14,
        question: "(Glycolytic/Oxidative) fibers contain high concentrations of the O₂-binding protein myoglobin.",
        options: ["Oxidative"],
        answer: "Oxidative",
      },
      {
        id: 15,
        question: "The plasma membrane of a muscle cell is also known as the           .",
        options: ["sarcolemma"],
        answer: "sarcolemma",
      },
      {
        id: 16,
        question: "During muscle contraction, ATP hydrolysis is catalyzed by (myosin head groups/actin monomers).",
        options: ["myosin head groups"],
        answer: "myosin head groups",
      },
      {
        id: 17,
        question: "During an (isometric/isotonic) muscle contraction, a muscle develops contractile force but does not change in length.",
        options: ["isometric"],
        answer: "isometric",
      },
      {
        id: 18,
        question: "The velocity of contraction of a muscle fiber is directly related to its (diameter/myosin ATPase activity).",
        options: ["myosin ATPase activity"],
        answer: "myosin ATPase activity",
      },
      {
        id: 19,
        question: "A reduction in the number of active crossbridges is responsible for a decrease in force-generating capacity of a muscle fiber significantly (longer/shorter) than its optimum length.",
        options: ["longer"],
        answer: "longer",
      },
      {
        id: 20,
        question: "(Oxidative/Glycolytic) muscle fibers are more resistant to fatigue.",
        options: ["Oxidative"],
        answer: "Oxidative",
      },
      {
        id: 21,
        question: "According to the size principle, the force-generating capacity of a muscle fiber increases in direct proportion to its length.",
        options: ["true", "false"],
        answer: "false",
      },
    ],
  },
  {
    slug: "physiology-chapter-13",
    title: "Cardiovascular System: Cardiac Function",
    description: "physiology-chapter-13",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "Minimum aortic pressure during the cardiac cycle is attained",
        options: ["Immediately after closure of the aortic semilunar valve.", "Immediately before opening of the aortic semilunar valve.", "Immediately before opening of the atrioventricular valves.", "In mid-diastole.", "At the end of systole."],
        answer: "Immediately before opening of the aortic semilunar valve.",
      },
      {
        id: 2,
        question: "The first heart sound occurs when the atrioventricular valves close; thus it marks",
        options: ["The end of the ejection period.", "The beginning of the ejection period.", "The beginning of systole.", "The beginning of isovolumetric contraction.", "Both the beginning of systole and the beginning of isovolumetric contraction are true."],
        answer: "Both the beginning of systole and the beginning of isovolumetric contraction are true.",
      },
      {
        id: 3,
        question: "If you know end-diastolic volume, the only other thing you need to know to determine stroke volume is",
        options: ["Afterload.", "Ventricular contractility.", "End-systolic volume.", "Heart rate.", "Cardiac output."],
        answer: "End-systolic volume.",
      },
      {
        id: 4,
        question: "As a result of Starling’s law, stroke volume should increase following an increase in",
        options: ["Mean arterial pressure.", "Heart rate.", "Sympathetic activity.", "Afterload.", "Preload."],
        answer: "Preload.",
      },
      {
        id: 5,
        question: "Sympathetic and parasympathetic input to the SA node influences",
        options: ["Ventricular filling time.", "Ventricular contractility.", "Afterload.", "Atrial contractility."],
        answer: "Ventricular filling time.",
      },
      {
        id: 6,
        question: "Which contains deoxygenated blood?",
        options: ["The right ventricle", "The left ventricle", "Pulmonary veins", "The aorta", "Both a and c are true"],
        answer: "The right ventricle",
      },
      {
        id: 7,
        question: "Which is not normally apparent in the ECG?",
        options: ["Atrial depolarization", "Atrial repolarization", "Ventricular depolarization", "Ventricular repolarization", "None of the above"],
        answer: "Atrial repolarization",
      },
      {
        id: 8,
        question: "The second heart sound occurs when the semilunar valves close; thus it marks",
        options: ["The end of the ejection period.", "The beginning of the ejection period.", "The beginning of systole.", "The beginning of isovolumetric contraction.", "Both c and d are true."],
        answer: "The end of the ejection period.",
      },
      {
        id: 9,
        question: "The QRS complex of the ECG is due to",
        options: ["Atrial depolarization.", "Atrial repolarization.", "Ventricular depolarization.", "Ventricular repolarization.", "Opening of the AV valves."],
        answer: "Ventricular depolarization.",
      },
      {
        id: 10,
        question: "As a wave of action potentials travels from the atria to the ventricles, it is momentarily delayed by about 0.1 second as a result of slow conduction through",
        options: ["The SA node.", "The AV node.", "The atrioventricular bundle.", "The left and right bundle branches.", "Purkinje fibers."],
        answer: "The AV node.",
      },
      {
        id: 11,
        question: "Which is most likely to cause a decrease in the stroke volume of the left ventricle?",
        options: ["Increase in mean arterial pressure", "Increase in end-diastolic pressure", "Increase in end-diastolic volume", "Increase in the activity of sympathetic nerves to the heart", "Increase in central venous pressure"],
        answer: "Increase in mean arterial pressure",
      },
      {
        id: 12,
        question: "Left ventricular pressure and aortic pressure are virtually identical during",
        options: ["Isovolumetric contraction.", "Isovolumetric relaxation.", "Diastole.", "Systole.", "The ejection period."],
        answer: "The ejection period.",
      },
      {
        id: 13,
        question: "Heart rate is normally determined by the action potential frequency in ____ node.",
        options: ["SA", "AV"],
        answer: "SA",
      },
      {
        id: 14,
        question: "According to Starling’s law, stroke volume should increase if end-diastolic volume ____.",
        options: ["increases", "decreases"],
        answer: "increases",
      },
      {
        id: 15,
        question: "Heart rate is determined entirely by the inherent action potential frequency in cells of the SA node, with no external influences.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 16,
        question: "Blood flow through the systemic circuit is driven by contractions of the ____ ventricle.",
        options: ["left", "right"],
        answer: "left",
      },
      {
        id: 17,
        question: "The valve located at the junction between the left ventricle and the aorta is an example of a(n) (atrioventricular/semilunar) valve.",
        options: ["semilunar"],
        answer: "semilunar",
      },
      {
        id: 18,
        question: "(Isovolumetric contraction/Ejection) occurs immediately after diastole.",
        options: ["Isovolumetric contraction"],
        answer: "Isovolumetric contraction",
      },
      {
        id: 19,
        question: "The maximum aortic pressure during the cardiac cycle is called (diastolic/systolic) pressure.",
        options: ["systolic"],
        answer: "systolic",
      },
      {
        id: 20,
        question: "Under normal conditions, pressures in the left and right ventricles are equal during systole.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 21,
        question: "Stroke volume and            completely determine cardiac output.",
        options: ["heart rate"],
        answer: "heart rate",
      },
      {
        id: 22,
        question: "If end-diastolic volume does not change but end-systolic volume decreases, stroke volume (increases/decreases).",
        options: ["increases"],
        answer: "increases",
      },
      {
        id: 23,
        question: "If end-diastolic volume does not change but end-systolic volume decreases, ejection fraction (increases/decreases).",
        options: ["increases"],
        answer: "increases",
      },
      {
        id: 24,
        question: "If sympathetic and parasympathetic inputs are constant and end-diastolic volume increases, contractility of the ventricular myocardium increases.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 25,
        question: "The period of relaxation of the heart muscle is known as           .",
        options: ["diastole"],
        answer: "diastole",
      },
      {
        id: 26,
        question: "The (P/T) wave of the ECG corresponds to ventricular repolarization.",
        options: ["T"],
        answer: "T",
      },
      {
        id: 27,
        question: "Action potentials generated by pacemaker cells are called pacemaker potentials.",
        options: ["true", "false"],
        answer: "false",
      },
    ],
  },
  {
    slug: "physiology-chapter-14",
    title: "Cardiovascular System: Blood Vessels, Blood Flow, and Blood Pressure",
    description: "physiology-chapter-14",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "Total peripheral resistance is",
        options: ["The combined resistance of all organs in the body.", "The resistance of capillaries located in distal body parts.", "The combined resistance of all organs in the systemic circuit.", "The combined resistance of all the blood vessels within an organ or tissue.", "The resistance to blood flow through the heart."],
        answer: "The combined resistance of all organs in the systemic circuit.",
      },
      {
        id: 2,
        question: "Venous pressure increases",
        options: ["When blood volume decreases.", "As a result of venous pooling.", "As a result of an increase in venomotor tone.", "When a person stands up."],
        answer: "As a result of an increase in venomotor tone.",
      },
      {
        id: 3,
        question: "Which tends to promote edema in systemic tissues?",
        options: ["Decrease in the concentration of plasma proteins", "Increase in pressure in the vena cava", "Increase in arterial pressure", "Leakage of proteins from capillaries into the interstitial fluid", "All of the above"],
        answer: "All of the above",
      },
      {
        id: 4,
        question: "Which tends to cause a decrease in ventricular end-diastolic volume?",
        options: ["Increase in venous pressure", "Increase in skeletal muscle pump activity", "Decrease in filling time", "Increase in blood volume", "Increase in venomotor tone"],
        answer: "Decrease in filling time",
      },
      {
        id: 5,
        question: "Which blood vessels possess valves that prevent blood from flowing backward?",
        options: ["Arteries", "Arterioles", "Capillaries", "Venules", "Veins"],
        answer: "Veins",
      },
      {
        id: 6,
        question: "Where is the greatest proportion of total blood volume at rest?",
        options: ["Heart", "Arteries", "Arterioles", "Capillaries", "Veins"],
        answer: "Veins",
      },
      {
        id: 7,
        question: "Which tends to cause a decrease in mean arterial pressure?",
        options: ["A drop in total peripheral resistance", "Increase in stroke volume of the left ventricle", "Increase in heart rate", "Increase in venous return", "Increase in sympathetic activity"],
        answer: "A drop in total peripheral resistance",
      },
      {
        id: 8,
        question: "Lymphatic capillaries differ from blood capillaries in that",
        options: ["Lymphatic capillaries have a lower permeability to water.", "Lymphatic capillaries have a lower permeability to small solutes.", "Lymphatic capillaries are blind ended.", "Lymphatic capillaries are not connected to any other vessels.", "All of the above"],
        answer: "Lymphatic capillaries are blind ended.",
      },
      {
        id: 9,
        question: "Which tends to cause increased venous pooling?",
        options: ["Decrease in venomotor tone", "Decrease in the osmotic pressure of plasma proteins", "Decrease in mean arterial pressure", "Exercise", "Dehydration"],
        answer: "Decrease in venomotor tone",
      },
      {
        id: 10,
        question: "Which does not tend to increase as a result of the action of the skeletal muscle pump?",
        options: ["Venous pooling", "Venous return", "End-diastolic volume", "Stroke volume", "Cardiac output"],
        answer: "Venous pooling",
      },

      {
        id: 11,
        question: "If arterial pressure is elevated, baroreceptor signals trigger which responses?",
        options: ["A rise in vasopressin secretion", "A fall in plasma angiotensin II levels", "Increased activity in sympathetic ­vasoconstrictor nerves", "Increase in epinephrine secretion", "Increased total peripheral resistance"],
        answer: "A fall in plasma angiotensin II levels",
      },
      {
        id: 12,
        question: "During exercise, CO₂ produced by muscle cells causes vasodilation in skeletal muscle. This is an example of",
        options: ["Active hyperemia.", "Reactive hyperemia.", "Flow autoregulation.", "Extrinsic control of vascular resistance.", "Starling forces."],
        answer: "Active hyperemia.",
      },
      {
        id: 13,
        question: "Total peripheral resistance (increases/decreases) when general vasodilation of smaller arteries and arterioles occurs in systemic tissues.",
        options: ["decreases"],
        answer: "decreases",
      },
      {
        id: 14,
        question: "Veins have a (larger/smaller) compliance than arteries.",
        options: ["larger"],
        answer: "larger",
      },
      {
        id: 15,
        question: "(An increase/A decrease) in the radius of a blood vessel raises its resistance.",
        options: ["decrease"],
        answer: "decrease",
      },
      {
        id: 16,
        question: "",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 17,
        question: "Over the course of a day, capillary ­filtration and absorption occur at the same rate, so that the net volume of fluid filtered from capillaries is zero.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        id: 18,
        question: "Increase in the hydrostatic pressure of blood in capillaries tends to increase the rate at which fluid is filtered across capillary walls.",
        options: ["true", "false"],
        answer: "true",
      },
      {
        id: 19,
        question: "A drop in arterial blood pressure triggers (an increase/a decrease) in sympathetic nervous activity.",
        options: ["true", "false"],
        answer: "true",
      },
    ],
  },
  {
    slug: "physiology-chapter-15",
    title: "Cardiovascular System: Blood",
    description: "physiology-chapter-15",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "Which is not found in plasma?",
        options: ["Albumin", "Sodium", "Glucose", "Hemoglobin", "Potassium"],
        answer: "", // 1 d
      },
      {
        id: 2,
        question: "Which organ synthesizes new erythrocytes?",
        options: ["Liver", "Spleen", "Kidney", "Bone Marrow", "Heart"],
        answer: "", // 2 d
      },
      {
        id: 3,
        question: "Which classes of leukocytes function(s) in phagocytosis?",
        options: ["Neutrophils only", "Basophils only", "Lymphocytes only", "Neutrophils and basophils", "Basophils and lymphocytes"],
        answer: "", // 3 d
      },
      {
        id: 4,
        question: "Which class of leukocytes develops into macrophages in tissue?",
        options: ["Neutrophils", "Eosinophils", "Basophils", "Monocytes", "Lymphocytes"],
        answer: "", // 4 d
      },
      {
        id: 5,
        question: "Contact of blood with collagen triggers",
        options: ["Platelet aggregation.", "Activation of the intrinsic clotting cascade.", "Activation of the extrinsic clotting cascade.", "Both a and b."],
        answer: "", // 5 d
      },

      {
        id: 6,
        question: "Plasma with clotting factors removed is called            .",
        options: [],
        answer: "", // 6 serum
      },
      {
        id: 7,
        question: "During the clotting cascade,             ­converts fibrinogen to fibrin.",
        options: [],
        answer: "", // 7 thrombin
      },
      {
        id: 8,
        question: "            is an enzyme that converts CO₂ and water into carbonic acid.",
        options: [],
        answer: "", // 8 Carbonic anhydrase
      },
    ],
  },
  {
    slug: "physiology-chapter-16",
    title: "Respiratory System: Pulmonary Ventilation",
    description: "physiology-chapter-16",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "Which is a component of internal respiration?",
        options: ["Ventilation", "Transport of O₂ in the blood", "Diffusion of CO₂ from tissues to blood", "Diffusion of O₂ from blood to tissues", "Oxidative phosphorylation"],
        answer: "", // 1 e
      },
      {
        id: 2,
        question: "Which is not a function of the conducting zone of the respiratory system?",
        options: ["Humidifying the air", "Adjusting the air to body temperature", "Exchanging gases between the respiratory system and the blood", "Secreting mucus", "Protecting the lungs from inhaled particles"],
        answer: "", // 2 c
      },
      {
        id: 3,
        question: "The smallest airways in the conducting zone are",
        options: ["Terminal bronchioles.", "Respiratory bronchioles.", "Alveolar ducts.", "Alveolar sacs.", "Bronchi."],
        answer: "", // 3 a
      },
      {
        id: 4,
        question: "Surfactant is secreted by",
        options: ["Goblet cells.", "Alveolar macrophages.", "Type I cells.", "Type II cells.", "Ciliated cells."],
        answer: "", // 4 d
      },
      {
        id: 5,
        question: "The product of tidal volume and breathing frequency gives",
        options: ["Respiration rate.", "Total lung capacity.", "Alveolar ventilation.", "Minute ventilation.", "Dead space volume."],
        answer: "", // 5 d
      },
      {
        id: 6,
        question: "When all muscles of respiration are relaxed and alveolar pressure is zero, lung volume is equal to",
        options: ["Residual volume.", "Vital capacity.", "Functional residual capacity.", "Tidal volume.", "Total lung capacity."],
        answer: "", // 6 c
      },
      {
        id: 7,
        question: "Which statements describes the lungs at the functional residual capacity?",
        options: ["Atmospheric, intra-alveolar, and intrapleural pressures are all equal.", "The lungs tend to collapse due to their elastic properties.", "The chest wall tends to collapse due to its elastic properties.", "Both a and c are true."],
        answer: "", // 7 b
      },
      {
        id: 8,
        question: "Which factors decreases airway resistance?",
        options: ["Activation of the parasympathetic nervous system", "Epinephrine", "Histamine"],
        answer: "", // 8 b
      },
      {
        id: 9,
        question: "Pulmonary surfactant",
        options: ["Prevents collapse of alveoli.", "Prevents small alveoli from joining with larger alveoli.", "Increases lung compliance.", "Both a and c.", "All of the above."],
        answer: "", // 9 e
      },
      {
        id: 10,
        question: "Which muscles contract(s) during quiet expiration?",
        options: ["Diaphragm", "Internal intercostals", "External intercostals", "None of the above", "All of the above"],
        answer: "", // 10 d
      },

      {
        id: 11,
        question: "Contraction of the diaphragm increases the rate of air flow during forced expiration.",
        options: ["true", "false"],
        answer: "false", // 11 false
      },
      {
        id: 12,
        question: "During inspiration, transpulmonary pressure (increases/decreases).",
        options: [],
        answer: "", // 12 increases
      },
      {
        id: 13,
        question: "During inspiration, intrapleural pressure becomes (more/less) negative.",
        options: [],
        answer: "", // 13 more
      },
      {
        id: 14,
        question: "If airway resistance increases, a (higher/lower) transpulmonary pressure is required to produce a given rate of air flow during expiration.",
        options: [],
        answer: "", // 14 higher
      },
      {
        id: 15,
        question: "Pulmonary surfactant (increases/decreases) the surface tension of water.",
        options: [],
        answer: "", // 15 decreases
      },
      {
        id: 16,
        question: "Pulmonary surfactant (increases/decreases) lung compliance.",
        options: [],
        answer: "", // 16 increases
      },
      {
        id: 17,
        question: "Dead space volume is the volume of air in the (conducting zone/respiratory zone).",
        options: [],
        answer: "", // 17 conducting zone
      },
      {
        id: 18,
        question: "(Obstructive/Restrictive) lung diseases are characterized by increased airway resistance.",
        options: [],
        answer: "", // 18 Obstructive
      },
      {
        id: 19,
        question: "           cells secrete mucus.",
        options: [],
        answer: "", // 19 Goblet
      },
      {
        id: 20,
        question: "The (internal/external) intercostals are muscles of inspiration.",
        options: [],
        answer: "", // 20 external
      },
    ],
  },
  {
    slug: "physiology-chapter-17",
    title: "Respiratory System: Gas Exchange and Regulation of Breathing",
    description: "physiology-chapter-17",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "Under steady-state conditions, the rate at which O₂ enters pulmonary capillaries from alveolar air is equal to",
        options: ["The rate at which O₂ is delivered to alveoli in inspired air.", "The rate at which O₂ is carried out of the alveoli in expired air.", "The rate at which O₂ is consumed in respiring tissues.", "The rate at which CO₂ is produced in respiring tissues.", "The rate at which CO₂ leaves the pulmonary capillaries and enters alveolar air."],
        answer: "", // c
      },
      {
        id: 2,
        question: "At the normal resting O₂ partial pressure of mixed venous blood, hemoglobin is",
        options: ["Nearly 100% saturated.", "Nearly 97% saturated.", "Nearly 75% saturated.", "Nearly 50% saturated.", "Nearly 25% saturated."],
        answer: "", // c
      },
      {
        id: 3,
        question: "In respiring tissues, an increase in blood CO₂ partial pressure causes all of the following except",
        options: ["Increase in the hydrogen ion concentration.", "Increase in the bicarbonate concentration.", "Increase in the carbaminohemoglobin concentration.", "Increase in the affinity of hemoglobin for O₂.", "Increase in hemoglobin unloading of O₂."],
        answer: "", // d
      },
      {
        id: 4,
        question: "Which does not affect alveolar O₂ partial pressure?",
        options: ["The rate of O₂ consumption by respiring tissues", "Alveolar ventilation", "The O₂ partial pressure of inspired air", "The volume of air contained in the alveoli", "The humidification of air as it moves through the conducting zone"],
        answer: "", // d
      },
      {
        id: 5,
        question: "During hyperventilation, which would be expected to happen?",
        options: ["Increase in the O₂ partial pressure of arterial blood", "Increase in the CO₂ partial pressure of arterial blood", "Increase in the acidity of arterial blood", "Increase in the bicarbonate concentration of arterial blood", "Decrease in the pH of arterial blood"],
        answer: "", // a
      },
      {
        id: 6,
        question: "Which would be expected to cause a decrease in the percent saturation of hemoglobin?",
        options: ["Increase in O₂ partial pressure", "Decrease in blood pH", "Decrease in CO₂ partial pressure", "Decrease in temperature", "All of the above"],
        answer: "", // b
      },
      {
        id: 7,
        question: "Suppose that alveolar O₂ partial pressure = 100 mm Hg and CO₂ partial pressure = 60 mm Hg. Which is true?",
        options: ["pH will be less than normal.", "Percent saturation of hemoglobin by O₂ will be less than normal.", "Bicarbonate concentration will be greater than normal.", "Both a and c are true.", "All of the above."],
        answer: "", // e
      },
      {
        id: 8,
        question: "A person's arterial O₂ partial pressure and CO₂ partial pressure are normal (O₂ partial pressure = 100 mm Hg; CO₂ partial pressure = 40 mm Hg;). Which would most likely stimulate an increase in ventilation?",
        options: ["Decrease in O₂ partial pressure to 90 mm Hg", "Decrease in CO₂ partial pressure to 35 mm Hg", "Increase in O₂ partial pressure to 110 mm Hg", "Increase in CO₂ partial pressure to 45 mm Hg"],
        answer: "Increase in CO₂ partial pressure to 45 mm Hg",
      },
      {
        id: 9,
        question: "A rise in arterial CO₂ partial pressure triggers an increase in ventilation by stimulating both central and peripheral chemoreceptors. The response of central chemoreceptors is due to",
        options: [
          "Diffusion of CO₂ into brain extracellular fluid, which stimulates chemoreceptors directly.",
          "Diffusion of hydrogen ions into brain extracellular fluid, which stimulates chemoreceptors directly.",
          "Diffusion of CO₂ into brain extracellular fluid, which reacts with water to form hydrogen ions, which stimulate chemoreceptors directly.",
          "Diffusion of CO₂ into brain extracellular fluid, which reacts with water to form bicarbonate ions, which stimulate chemoreceptors directly.",
          "Direct stimulation by hydrogen ions in arterial blood.",
        ],
        answer: "", // c
      },
      {
        id: 10,
        question: "When a person exercises, ventilation increases to meet the demands of more active tissues. This is an example of",
        options: ["Hyperventilation.", "Hypoventilation.", "Hypoxia.", "Apnea.", "Hyperpnea."],
        answer: "", // e
      },
      {
        id: 11,
        question: "The normal ratio of bicarbonate concentration to CO₂ concentration in arterial blood is",
        options: ["1:5.", "5:1.", "10:1.", "20:1.", "1:20."],
        answer: "", // d
      },
      {
        id: 12,
        question: "Which can hemoglobin bind and transport in blood?",
        options: ["O₂", "CO₂", "Hydrogen ions", "Both a and c", "All of the above"],
        answer: "", // e
      },
      {
        id: 13,
        question: "Which areas of the brain contain inspiratory neurons?",
        options: ["The dorsal respiratory group only", "The ventral respiratory group only", "Both the dorsal and ventral respiratory groups", "Neither the dorsal nor ventral respiratory group"],
        answer: "", // c
      },
      {
        id: 14,
        question: "Under normal conditions, the rate at which O₂ is brought into the alveoli in inspired air is (the same as/greater than/less than) the rate at which it is consumed in respiring tissues.",
        options: [],
        answer: "", // the same as
      },
      {
        id: 15,
        question: "Under resting conditions, tissues normally extract (exactly half/more than half/less than half) of the O₂ delivered to them in arterial blood.",
        options: [],
        answer: "", // less than half
      },
      {
        id: 16,
        question: "The amount of CO₂ in systemic arterial blood is less than 50% of that in mixed venous blood.",
        options: ["true", "false"],
        answer: "false", // false
      },

      {
        id: 17,
        question: "When the CO₂ partial pressure of the blood increases, the concentration of bicarbonate (increases/decreases), and the concentration of hydrogen ions (increases/decreases).",
        options: [],
        answer: "", // increases, increases
      },
      {
        id: 18,
        question: "The enzyme that catalyzes the conversion of CO₂ to carbonic acid is          .",
        options: [],
        answer: "", // carbonic anhydrase
      },
      {
        id: 19,
        question: "As the pH of the blood increases, the affinity of hemoglobin for O₂ (increases/decreases).",
        options: [],
        answer: "", // increases
      },
      {
        id: 20,
        question: "When a person hypoventilates, the CO₂ partial pressure of arterial blood (increases/decreases).",
        options: [],
        answer: "", // increases
      },
      {
        id: 21,
        question: "Decrease in alveolar ventilation would be expected to cause a(n) (increase/decrease) in arterial O₂ partial pressure and a(n) (increase/decrease) in arterial CO₂ partial pressure.",
        options: [],
        answer: "", // decrease, increase
      },
      {
        id: 22,
        question: "Hemoglobin with CO₂ bound to it is called           .",
        options: [],
        answer: "", // carbaminohemoglobin
      },
      {
        id: 23,
        question: "In gas exchange in both the lungs and respiring tissues, O₂ and CO₂ always move down their partial pressure gradients.",
        options: ["true", "false"],
        answer: "true", // true
      },
      {
        id: 24,
        question: "(Central/Peripheral) chemoreceptors respond directly to hydrogen ions produced during metabolism.",
        options: [],
        answer: "", // Peripheral
      },
      {
        id: 25,
        question: "Coughing is triggered by stimulation of pulmonary            receptors.",
        options: [],
        answer: "", // irritant
      },
      {
        id: 26,
        question: "In respiratory acidosis, arterial CO₂ partial pressure is (higher/lower) than normal.",
        options: [],
        answer: "", // higher
      },
      {
        id: 27,
        question: "Increase in the O₂ partial pressure of alveolar air would be expected to trigger local (bronchoconstriction/bronchodilation) in airways.",
        options: [],
        answer: "", // bronchoconstriction
      },
      {
        id: 28,
        question: "Increase in the O₂ partial pressure of alveolar air would be expected to trigger local (vasoconstriction/vasodilation).",
        options: [],
        answer: "", // vasodilation
      },
    ],
  },
  {
    slug: "physiology-chapter-18",
    title: "Urinary System: Renal Function",
    description: "physiology-chapter-18",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "Which structure of the urinary system stores urine until it is excreted?",
        options: ["Kidneys", "Bladder", "Ureter", "Urethra", "Gallbladder"],
        answer: "", // ?
      },
      {
        id: 2,
        question: "Which is not one of the mechanisms by which a solute can be exchanged between the plasma and the renal tubules?",
        options: ["Glomerular filtration", "Secretion", "Excretion", "Reabsorption"],
        answer: "", // b
      },
      {
        id: 3,
        question: "Which type of specialized junction ­connects epithelial cells lining the renal tubules?",
        options: ["Gap junctions", "Tight junctions", "Desmosomes", "Intercalated disks", "Slit pores"],
        answer: "", // c
      },
      {
        id: 4,
        question: "Which does not favor a large glomerular filtration rate?",
        options: ["Slit pores", "Fenestrations", "High glomerular hydrostatic pressure", "High resistance in the afferent arteriole", "High resistance in the efferent arteriole"],
        answer: "", // b
      },
      {
        id: 5,
        question: "Most reabsorption of water and solutes occurs in the",
        options: ["Proximal tubule.", "Descending limb of the loop of Henle.", "Ascending limb of the loop of Henle.", "Distal tubule.", "Collecting duct."],
        answer: "", // d
      },

      {
        id: 6,
        question: "In what are microvilli most abundant?",
        options: ["Bowman’s capsule", "Glomerular capillaries", "Distal tubule", "Proximal tubule", "Collecting duct"],
        answer: "", // a
      },
      {
        id: 7,
        question: "Which would occur if mean arterial pressure increased from 95 mm Hg to 125 mm Hg?",
        options: [
          "Glomerular filtration rate would increase because of the increased glomerular capillary hydrostatic pressure.",
          "Glomerular filtration rate would decrease because of the increased Bowman’s capsule hydrostatic pressure.",
          "Glomerular filtration rate would not change because of autoregulation.",
          "Glomerular filtration rate would not change because of activation of the sympathetic nervous system.",
        ],
        answer: "", // d
      },
      {
        id: 8,
        question: "The normal fasting plasma glucose concentration is 100 mg/dL, and the renal threshold is 300 mg/dL. If the plasma concentration doubles to 200 mg/dL, then",
        options: ["The rate at which glucose is reabsorbed will double.", "The capacity of the renal tubule for transporting glucose will be exceeded.", "Urinary water excretion will increase.", "Glucose clearance will increase.", "The filtered load of glucose is halved."],
        answer: "", // c
      },
      {
        id: 9,
        question: "",
        options: [],
        answer: "", // a
      },
      {
        id: 10,
        question: "A substance S is freely filtered and excreted at a lower rate than filtered load. On the basis of this info alone, Which is the most precise conclusion that can justifiably be drawn regarding the kidneys’ processing of S?",
        options: ["S is not reabsorbed nor secreted.", "S is definitely reabsorbed and may be secreted.", "S is definitely secreted and may be reabsorbed.", "S is definitely both reabsorbed and secreted."],
        answer: "", // b
      },
      {
        id: 11,
        question: "Which observations would enable you to definitely conclude that a substance X is being secreted?",
        options: ["The clearance of X is greater than the GFR.", "The concentration of X in the urine is greater than its concentration in the plasma.", "The concentration of X in the plasma is decreasing over time.", "Either a or c", "Any of the above"],
        answer: "", // a
      },
      {
        id: 12,
        question: "Micturition occurs in response to",
        options: ["Relaxation of the detrusor muscle.", "Contraction of the internal and external urethral sphincters.", "Activation of parasympathetic neurons to the bladder.", "Activation of somatic motor neurons to the bladder."],
        answer: "", // c
      },
      {
        id: 13,
        question: "The (ureter/urethra) carries urine from the bladder to the outside of the body.",
        options: [],
        answer: "", // urethra
      },

      {
        id: 14,
        question: "Urinary excretion is the elimination of urine from the bladder.",
        options: ["true", "false"],
        answer: "true", // true
      },
      {
        id: 15,
        question: "The (afferent/efferent) arteriole carries blood toward the glomerulus.",
        options: [],
        answer: "", // afferent
      },
      {
        id: 16,
        question: "The combination of a glomerulus and the surrounding Bowman’s capsule is called a(n) ____________ ____________.",
        options: [],
        answer: "", // renal corpuscle
      },
      {
        id: 17,
        question: "The hydrostatic pressure in glomerular capillaries is (higher/lower) than the ­corresponding pressure in most capillaries of the body.",
        options: [],
        answer: "", // higher
      },
      {
        id: 18,
        question: "The glomerular filtration rate tends to (increase/decrease) as the concentration of proteins in the plasma increases.",
        options: [],
        answer: "", // decrease
      },
      {
        id: 19,
        question: "Autonomic neurons regulate contraction of the (internal/external) urethral sphincter.",
        options: [],
        answer: "", // internal
      },
      {
        id: 20,
        question: "The glomerular filtration pressure is synonymous with the hydrostatic pressure inside glomerular capillaries.",
        options: ["true", "false"],
        answer: "false", // false
      },
      {
        id: 21,
        question: "The filtered load of a solute is determined by its plasma concentration and the ­(glomerular filtration rate/urine flow rate).",
        options: [],
        answer: "", // glomerular filtration rate
      },
      {
        id: 22,
        question: "If the clearance of a substance is greater than the glomerular filtration rate, then that substance must have undergone (reabsorption/secretion) in the renal tubules.",
        options: [],
        answer: "", // secretion
      },
      {
        id: 23,
        question: "The clearance of (PAH/creatinine) is approximately equal to the renal plasma flow rate.",
        options: [],
        answer: "", // PAH
      },
      {
        id: 24,
        question: "Substances that are reabsorbed move into the (peritubular capillaries/tubule lumen).",
        options: [],
        answer: "", // peritubular capillaries
      },
      {
        id: 25,
        question: "Increase in the flow rate through the macula densa causes a(n) (increase/decrease) in the glomerular filtration rate.",
        options: [],
        answer: "", // decrease
      },
      {
        id: 26,
        question: "Glucose reabsorption occurs primarily in the (proximal tubule/distal tubule).",
        options: [],
        answer: "", // proximal tubule
      },
    ],
  },
  {
    slug: "physiology-chapter-19",
    title: "Urinary System: Fluid and Electrolyte Balance",
    description: "physiology-chapter-19",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "Which would be expected to trigger a decrease in renin secretion?",
        options: ["Decrease in the mean arterial pressure", "Decrease in the pressure inside the afferent arteriole", "Decrease in the activity of renal sympathetic nerves", "Decrease in the concentration of sodium chloride in tubular fluid", "Decrease in GFR"],
        answer: "", // c
      },
      {
        id: 2,
        question: "Which would be expected to trigger a decrease in the ADH secretion?",
        options: ["Ingestion of a large quantity of pure water", "Sweating", "Hemorrhage", "Decrease in mean arterial pressure", "Both a and c"],
        answer: "", // a
      },
      {
        id: 3,
        question: "Assume fluid enters the distal tubule with 100 mOsm osmolarity, and max osmolarity of medullary interstitial fluid is 1100 mOsm. As plasma ADH levels rise, what happens to urine osmolarity?",
        options: ["It approaches 100 mOsm as a lower limit.", "It approaches 1100 mOsm as an upper limit.", "It eventually exceeds 1100 mOsm.", "It approaches 300 mOsm, the normal osmolarity of plasma."],
        answer: "", // b
      },
      {
        id: 4,
        question: "Which tends to be accompanied by an increase in the rate at which bicarbonate is excreted in the urine?",
        options: ["Decrease in hydrogen ion secretion", "Decrease in the plasma bicarbonate concentration", "Increase in the production of ammonia by renal tubule epithelial cells", "Both a and b", "All of the above"],
        answer: "", // d
      },
      {
        id: 5,
        question: "Assuming that arterial CO₂ partial pressure is normal, metabolic acidosis promotes ____?",
        options: ["Increased hydrogen ion secretion by the renal tubule", "Decreased alveolar ventilation", "Increased bicarbonate reabsorption", "Both a and c", "All of the above"],
        answer: "", // d
      },
      {
        id: 6,
        question: "Which tends to promote an increase in sodium excretion?",
        options: ["Increase in the glomerular filtration rate", "Increase in plasma renin concentration", "Increase in the atrial natriuretic peptide secretion", "Both a and c", "All of the above"],
        answer: "", // d
      },
      {
        id: 7,
        question: "The osmolarity of tubular fluid increases as it flows through the descending limb of the loop of Henle because",
        options: ["Solutes are passively transported into the descending limb.", "Solutes are actively transported into the descending limb.", "Solutes are passively transported out of the ascending limb.", "Water moves passively into the descending limb.", "Water moves passively out of the descending limb."],
        answer: "", // e
      },
      {
        id: 8,
        question: "Because sweat is essentially a salt solution with an osmolarity lower than plasma, severe sweating leads to a reduction in plasma volume and an increase in plasma osmolarity. How do these changes affect the ADH secretion?",
        options: [
          "The decrease in plasma volume inhibits ADH secretion, but the increase in osmolarity stimulates it.",
          "The decrease in plasma volume stimulates ADH secretion, but the increase in osmolarity inhibits it.",
          "Both the decrease in plasma volume and the increase in osmolarity stimulate ADH secretion.",
          "Both the decrease in plasma volume and the increase in osmolarity inhibit ADH secretion.",
        ],
        answer: "", // c
      },
      {
        id: 9,
        question: "In the cytosol of intercalated cells, the CO₂ converted to carbonic acid can come from",
        options: ["The lumen of the distal tubule and the collecting duct.", "Metabolism inside the intercalated cell.", "Catabolism of glutamine.", "Both a and b", "All of the above"],
        answer: "", // b
      },
      {
        id: 10,
        question: "In the lumen of the proximal tubule, secreted hydrogen ions are primarily buffered by",
        options: ["Bicarbonate.", "Phosphates.", "Proteins.", "Sulfates.", "CO₂."],
        answer: "", // a
      },
      {
        id: 11,
        question: "Increase in mean arterial pressure stimulates ____?",
        options: ["ADH release", "Angiotensin II production", "Aldosterone release", "Renin release", "Increased water excretion in urine"],
        answer: "Increased water excretion in urine",
      },
      {
        id: 12,
        question: "Which does not stimulate aldosterone release?",
        options: ["Atrial natriuretic peptide", "Increase in plasma potassium", "Increase in renin secretion", "Increase in angiotensin II production"],
        answer: "Atrial natriuretic peptide",
      },
      {
        id: 13,
        question: "Where is the Na⁺/K⁺ pump located?",
        options: ["On the basolateral membrane of proximal tubule cells, and on the apical membrane of principal cells", "On the apical membrane of proximal tubule cells, and on the basolateral membrane of principal cells", "On the basolateral membrane of both proximal tubule cells and principal cells", "On the apical membrane of both proximal tubule cells and principal cells"],
        answer: "On the basolateral membrane of both proximal tubule cells and principal cells",
      },
      {
        id: 14,
        question: "In epithelial cells lining the proximal tubules, carbonic anhydrase is located",
        options: ["On the basolateral membrane only.", "On the apical membrane only.", "Inside the cell only.", "Inside the cell and on the apical membrane.", "Inside the cell and on the basolateral membrane."],
        answer: "Inside the cell and on the apical membrane.",
      },
      {
        id: 15,
        question: "A person has these symptoms: arterial pH = 7.45, partical pressure of CO₂ = 44 mm Hg, plasma bicarbonate concentration = 27 mM. What is the diagnosis?",
        options: ["Respiratory acidosis", "Respiratory alkalosis", "Metabolic acidosis", "Metabolic alkalosis"],
        answer: "Metabolic alkalosis",
      },
      {
        id: 16,
        question: "Increase in solutes reabsorption ____ water reabsorption.",
        options: ["increases", "decreases"],
        answer: "increases",
      },
      {
        id: 17,
        question: "Most solutes and water are reabsorbed in the (proximal tubule/distal tubule and collecting duct).",
        options: ["proximal tubule", "distal tubule and collecting duct"],
        answer: "proximal tubule",
      },
      {
        id: 18,
        question: "Epithelial cells of the descending limb of the loop of Henle actively transport solutes from tubular fluid to the surrounding peritubular space.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 19,
        question: "Urine flow rate increases as the plasma ADH level (increases/decreases).",
        options: ["increases", "decreases"],
        answer: "decreases",
      },
      {
        id: 20,
        question: "Stretching of the atria of the heart promotes the ____ secretion, a hormone that promotes sodium excretion.",
        options: ["atrial natriuretic peptide"],
        answer: "atrial natriuretic peptide",
      },
      {
        id: 21,
        question: "If the plasma volume is below normal, an increase in water reabsorption will be sufficient to restore it to normal.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 22,
        question: "           stimulates the insertion of Na⁺/K⁺ pumps into the plasma membrane of principal cells of the distal tubules and collecting ducts.",
        options: ["Aldosterone"],
        answer: "Aldosterone",
      },
      {
        id: 23,
        question: "           stimulates the insertion of water pores into the plasma membrane of epithelial cells of the distal tubules and collecting ducts.",
        options: ["Antidiuretic hormone (ADH)"],
        answer: "Antidiuretic hormone (ADH)",
      },
      {
        id: 24,
        question: "ADH increases water permeability of the loop of Henle.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 25,
        question: "Potassium secretion is ____ by aldosterone.",
        options: ["stimulated", "inhibited"],
        answer: "stimulated",
      },
      {
        id: 26,
        question: "Calcitonin ____ plasma calcium levels.",
        options: ["increases", "decreases"],
        answer: "decreases",
      },
      {
        id: 27,
        question: "Resorption of bone ____ plasma calcium levels.",
        options: ["increases", "decreases"],
        answer: "increases",
      },
      {
        id: 28,
        question: "By adding new bicarbonate to the blood, the kidneys can bring about a compensatory ____ in the plasma pH.",
        options: ["increase", "decrease"],
        answer: "increase",
      },
      {
        id: 29,
        question: "The kidneys can excrete urine to pure water.",
        options: ["true", "false"],
        answer: "false",
      },
      {
        id: 30,
        question: "There is no limit to the amount of hydrogen ions the kidneys can excrete.",
        options: ["true", "false"],
        answer: "false",
      },
    ],
  },

  {
    slug: "physiology-chapter-20",
    title: "Gastrointestinal System",
    description: "physiology-chapter-20",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "What do sodium, fatty acids, and vitamin A have in common?",
        options: ["They are not enzymatically modified prior to their absorption into the bloodstream.", "They cross the apical membranes of enterocytes by simple diffusion.", "They are transported into blood ­capillaries in the villi.", "They are all hydrophilic.", "All of the above"],
        answer: "They are not enzymatically modified prior to their absorption into the bloodstream.",
        answerExplanation: "Sodium, fatty acids, and vitamin A do not require enzymatic modification before absorption. Sodium is absorbed as an ion. Fatty acids and vitamin A are absorbed in their existing forms after emulsification. They do not all diffuse simply, nor are they all hydrophilic.",
      },
      {
        id: 2,
        question: "Bile flow blockage into the duodenum interferes with the digestion of ____?",
        options: ["Carbohydrates only", "Lipids only", "Proteins only", "Carbohydrates and lipids only", "Carbohydrates and proteins only"],
        answer: "Lipids only",
        answerImage: "/images/Figure 20.11 Pancreas",
        answerExplanation: "Bile is essential for emulsifying lipids, allowing lipase to digest fats. If bile cannot enter the duodenum, fat digestion is impaired, while carbohydrate and protein digestion continue normally.",
      },
      {
        id: 3,
        question: "The autonomic nervous system is involved in ___?",
        options: ["Cephalic-phase regulation only.", "Gastric-phase regulation only.", "Intestinal-phase regulation only.", "Gastric-phase and intestinal-phase regulation only.", "All three phases of regulation."],
        answer: "All three phases of regulation.",
        answerExplanation: "The autonomic nervous system influences all three phases of digestive regulation—cephalic, gastric, and intestinal—via parasympathetic and sympathetic pathways.",
      },
      {
        id: 4,
        question: "Salivary glands failure to secrete amylase would make it impossible to digest ____?",
        options: ["Proteins", "Fats", "Disaccharides", "Starch", "None of the above"],
        answer: "None of the above",
        answerExplanation: "Salivary amylase begins starch digestion, but pancreatic amylase fully compensates. Therefore, digestion of proteins, fats, disaccharides, and starch would still occur normally. Thus, none would be impossible to digest.",
      },
      {
        id: 5,
        question: "Which tends to inhibits stomach acid secretion?",
        options: ["A duodenal contents osmolarity increase", "Stomach acid entering the duodenum", "Food arriving in the stomach", "Both A duodenal contents osmolarity increase and stomach acid entering the duodenum", "All of the above"],
        answer: "Both an increase in the osmolarity of duodenal contents and entry of stomach acid into the duodenum",
        answerExplanation: "Two stimuli inhibit acid secretion via the enterogastric reflex: Increased duodenal osmolarity. Entry of acidic chyme into the duodenum. Arrival of food in the stomach stimulates acid secretion, not inhibits it.",
      },
      {
        id: 6,
        question: "Which illustrates potentiation?",
        options: [
          "Bile secretion is normally stimulated by both secretin and CCK.",
          "Secretin and CCK act primarily on ­different parts of the hepatic secretory apparatus.",
          "Secretin and CCK both stimulate bile duct cells to secrete fluid.",
          "The bile duct cells fluid secretion is greater when both CCK and secretin are present, compared to when either hormone is present alone (at the same concentration).",
        ],
        answer: "The bile duct cells fluid secretion is greater when both CCK and secretin are present, compared to when either hormone is present alone (at the same concentration).",
        answerExplanation: "Potentiation occurs when two hormones together create a greater effect than either alone. CCK + secretin produce a larger bile duct fluid secretion than either hormone at the same concentration.",
      },
      {
        id: 7,
        question: "The enzyme enterokinase is directly or indirectly responsible for the proper functioning of",
        options: ["Bile salts.", "Lipases.", "Trypsin.", "Chymotrypsin.", "Both trypsin and chymotrypsin."],
        answer: "Both trypsin and chymotrypsin.",
        answerImage: "/images/Figure 20.16 Activation of Proteases in Small Intestine",
        answerExplanation: "Enterokinase converts trypsinogen → trypsin, and trypsin activates chymotrypsinogen → chymotrypsin. Thus, enterokinase is responsible for the activation of both trypsin and chymotrypsin.",
      },
      {
        id: 8,
        question: "Which is an example of a zymogen?",
        options: ["Enterokinase", "Chymotrypsinogen", "Salivary amylase", "Cholecystokinin", "All of the above"],
        answer: "Chymotrypsinogen",
        answerExplanation: "A zymogen is an inactive enzyme precursor. Chymotrypsinogen is the inactive form of chymotrypsin. The others (enterokinase, salivary amylase, CCK) are active enzymes or hormones.",
      },
      {
        id: 9,
        question: "Increases in gastric motility are generally accompanied by increases in ileal motility because of the",
        options: ["Gastroileal reflex.", "Ileogastric reflex.", "Gastrocolic reflex.", "Colonocolonic reflex.", "Intestino-intestinal reflex."],
        answer: "Gastroileal reflex.",
        answerExplanation: "The gastroileal reflex increases ileal motility when the stomach becomes more active, helping move intestinal contents forward in coordination with gastric activity.",
      },
      {
        id: 10,
        question: "Which is a digestion product of amylase?",
        options: ["Maltose", "Glucose", "Sucrose", "Lactose", "Fructose"],
        answer: "Maltose",
        answerExplanation: "Amylase breaks starch into disaccharides such as maltose, not glucose or other simple sugars directly.",
      },
      {
        id: 11,
        question: "Increases in which can induce satiety?",
        options: ["Alpha melanocyte stimulating hormone", "Thyroid stimulating hormone", "Leptin", "Both alpha melanocyte stimulating hormone and leptin", "All of the above"],
        answer: "Both alpha melanocyte stimulating hormone and leptin",
        answerExplanation: "Both alpha-MSH (a melanocortin that suppresses appetite in the hypothalamus) and leptin (a hormone from adipose tissue that signals long-term energy stores) promote satiety. TSH does not regulate hunger.",
      },
      {
        id: 12,
        question: "Through the action of pancreatic amylase alone, starch can be broken down to a form that can be absorbed completely.",
        options: ["true", "false"],
        answer: "false",
        answerExplanation: "Pancreatic amylase breaks starch into maltose and small oligosaccharides, but final digestion to absorbable monosaccharides requires brush border enzymes. Therefore it cannot complete digestion alone.",
      },
      {
        id: 13,
        question: "Stomach glands that secrete acid are accessory glands.",
        options: ["true", "false"],
        answer: "false",
        answerExplanation: "The stomach's acid-secreting glands are part of the primary digestive tract, not accessory glands (which include the liver, gallbladder, and pancreas). Therefore, the statement is false.",
      },
      {
        id: 14,
        question: "Receptive relaxation is an example of (cephalic-phase/gastric-phase) control of stomach function.",
        options: ["cephalic-phase", "gastric-phase"],
        answer: "cephalic-phase",
        answerExplanation: "Receptive relaxation of the stomach occurs before food arrives and is triggered by sight, smell, and thought of food—making it a cephalic-phase response.",
      },
      {
        id: 15,
        question: "The (submucosal/myenteric) nerve plexus is located within the muscularis externa.",
        options: ["submucosal", "myenteric"],
        answer: "myenteric",
        answerImage: "/images/Figure 20.3 Gastrointestial Wall.png",
        answerExplanation: "The myenteric (Auerbach’s) plexus lies between the circular and longitudinal muscle layers of the muscularis externa. The submucosal plexus is located in the submucosa.",
      },
      {
        id: 16,
        question: "The________ is the outermost layer of the gastrointestinal wall, consisting of the mesothelium and an underlying layer of connective tissue.",
        options: ["serosa"],
        answer: "serosa",
        answerExplanation: "The serosa is the external layer of the GI tract, consisting of a mesothelium over connective tissue.",
      },
      {
        id: 17,
        question: "When food is present in the small intestine, contraction of the gallbladder is stimulated by (secretin/cholecystokinin).",
        options: ["secretin", "cholecystokinin"],
        answer: "cholecystokinin",
        answerExplanation: "CCK is released when fats enter the duodenum and causes the gallbladder to contract and release bile. Secretin mainly stimulates bicarbonate secretion.",
      },
      {
        id: 18,
        question: "Bile salts are necessary for the proper functioning of pancreatic (proteases/lipases).",
        options: ["proteases", "lipases"],
        answer: "lipases",
        answerExplanation: "Bile salts emulsify fats, increasing surface area so pancreatic lipase can digest triglycerides. Proteases do not require bile.",
      },
      {
        id: 19,
        question: "The lamina propria is located within the ____.",
        options: ["mucosa", "submucosa"],
        answer: "mucosa",
        answerExplanation: "The lamina propria is the connective tissue layer within the mucosa, beneath the epithelium.",
      },
      {
        id: 20,
        question: "Gastrin ____ stomach acid secretion.",
        options: ["stimulates", "inhibits"],
        answer: "stimulates",
        answerExplanation: "Gastrin stimulates acid secretion by acting on parietal cells and promoting histamine release from ECL cells.",
      },
      {
        id: 21,
        question: "In the stomach, pepsinogen is secreted by (chief cells/parietal cells).",
        options: ["chief cells", "parietal cells"],
        answer: "chief cells",
        answerImage: "/images/Figure 20.15 Pepsin",
        answerExplanation: "Chief cells release pepsinogen, which becomes pepsin in an acidic environment. Parietal cells secrete HCl and intrinsic factor.",
      },
      {
        id: 22,
        question: "The small intestine is periodically swept of its contents by ____.",
        options: ["segmentation", "migrating motility complexes"],
        answer: "migrating motility complexes",
        answerImage: "/images/Figure 20.30 Peristalsis and Segmentation",
        answerExplanation: "Between meals, migrating motility complexes (MMCs) sweep residual contents through the small intestine. Segmentation occurs during meals.",
      },
      {
        id: 23,
        question: "Enterohepatic circulation is blood conduction from intestine to liver via the hepatic portal vein.",
        options: ["true", "false"],
        answer: "false",
        answerExplanation: "Enterohepatic circulation refers primarily to recycling of bile salts between the intestine and liver—not blood flow through the hepatic portal vein. Thus the statement is false.",
      },
      {
        id: 24,
        question: "Nerves and hormones exert their effects on gastrointestinal motility primarily by altering the (frequency/amplitude) of slow waves.",
        options: ["frequency", "amplitude"],
        answer: "amplitude",
        answerExplanation: "GI nerves and hormones change the amplitude of slow waves (strength of contraction), not the frequency of slow wave generation.",
      },
      {
        id: 25,
        question: "Chewing is under voluntary control but is also controlled by reflex neural pathways. ",
        options: ["true", "false"],
        answer: "true",
        answerExplanation: "Yes—chewing is voluntary but also maintained by brainstem reflex circuits that rhythmically control jaw motion. This makes the statement true.",
      },
      {
        id: 26,
        question: "Disaccharides are broken down to monosaccharides by ____.",
        options: ["pancreatic enzymes", "brush border enzymes"],
        answer: "brush border enzymes",
        answerExplanation: "Disaccharides (like lactose, maltose, sucrose) are digested by brush border enzymes into absorbable monosaccharides. Pancreatic enzymes cannot perform this final step.",
      },
    ],
  },

  {
    slug: "physiology-chapter-21",
    title: "Endocrine System: Regulation of Energy Metabolism and Growth",
    description: "physiology-chapter-21",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "Which is an example of a permissive effect of a hormone?",
        options: ["The effect of thyroid hormones on growth", "The effect of insulin on glucose uptake by cells", "The effect of sex hormones on growth hormone secretion", "Both effect of thyroid hormones on growth and effect of sex hormones on the growth hormone secretion", "All of the above"],
        answer: "Both effect of thyroid hormones on growth and effect of sex hormones on the growth hormone secretion",
        answerExplanation: "A permissive effect means one hormone enables another hormone to act more effectively. Thyroid hormones make growth hormone’s effects stronger, and sex hormones enhance GH secretion—so both are examples of permissive interactions.",
      },
      {
        id: 2,
        question: "Which is an example of a glucose-sparing effect of cortisol?",
        options: ["Inhibition of ACTH release", "Stimulation of liver gluconeogenesis", "Stimulation of lipolysis", "Stimulation of glycogen breakdown", "Stimulation of protein synthesis"],
        answer: "Stimulation of lipolysis",
        answerExplanation: "A glucose-sparing effect shifts cells away from burning glucose. Cortisol achieves this by stimulating lipolysis, providing fatty acids for fuel and preserving glucose for the brain.",
      },
      {
        id: 3,
        question: "Which ­pancreas cells secrete insulin?",
        options: ["Alpha cells", "Beta cells", "Delta cells", "Exocrine cells", "Duct cells"],
        answer: "Beta cells",
        answerExplanation: "Beta cells in the pancreatic islets produce insulin. Alpha cells produce glucagon, and delta cells produce somatostatin.",
      },
      {
        id: 4,
        question: "Stress stimulates which hormones secretion?",
        options: ["Growth hormone", "Epinephrine", "Thyroid hormones", "ACTH", "All of the above"],
        answer: "All of the above",
        answerExplanation: "Stress activates both the sympathetic nervous system and the HPA axis, increasing epinephrine, ACTH (and thus cortisol), and growth hormone. Therefore, all listed hormones rise during stress.",
      },
      {
        id: 5,
        question: "Hypoglycemia inhibits secreting ____?",
        options: ["Growth hormone", "Insulin", "Epinephrine", "Glucagon", "All of the above"],
        answer: "Insulin",
        answerExplanation: "Low blood glucose suppresses insulin secretion while stimulating glucagon, epinephrine, and GH. So insulin is inhibited.",
      },
      {
        id: 6,
        question: "In the postabsorptive state, the central nervous system uses ____ as its primary source of energy?",
        options: ["Fatty acids", "Amino acids", "Glucose", "Glycerol", "Ketones"],
        answer: "Glucose",
        answerExplanation: "During fasting, most tissues switch to fat, but the CNS still relies primarily on glucose, except in prolonged starvation when ketones partially substitute.",
      },
      {
        id: 7,
        question: "Which cell types is directly responsible for building new bone material?",
        options: ["Osteoblasts", "Osteoclasts", "Osteocytes", "Chondrocytes"],
        answer: "Osteoblasts",
        answerExplanation: "Osteoblasts synthesize and lay down new bone matrix. Osteoclasts break down bone.",
      },
      {
        id: 8,
        question: "Which is true of adulthood?",
        options: ["Growth hormone exerts no effects on body tissues.", "Growth hormone secretion ceases altogether.", "Growth hormone cannot stimulate increases in long bones length.", "Bone structure becomes permanently fixed.", "None of the above"],
        answer: "Growth hormone cannot stimulate increases in long bones length.",
        answerExplanation: "In adults, growth plates have closed, so GH cannot increase the length of long bones, though it still affects metabolism and soft tissue growth.",
      },
      {
        id: 9,
        question: "Which form of thyroid hormone has greater activity at target cells?",
        options: ["T₃", "T₄", "Neither; T₃ and T₄ have equal activity"],
        answer: "T₃",
        answerExplanation: "T₃ is the biologically more active form at target cells. T₄ is a precursor converted to T₃.",
      },
      {
        id: 10,
        question: "Which hormones is a steroid?",
        options: ["Thyroid hormones", "Insulin", "Glucagon", "Growth hormone", "Cortisol"],
        answer: "Cortisol",
        answerExplanation: "The adrenal cortex produces the steroid hormone cortisol. Thyroid hormones are amine derivatives; insulin, glucagon, and GH are peptides.",
      },
      {
        id: 11,
        question: "Energy mobilization is promoted by (insulin/glucagon).",
        options: ["insulin", "glucagon"],
        answer: "glucagon",
        answerExplanation: "Glucagon mobilizes stored fuels by raising blood glucose and stimulating glycogenolysis and gluconeogenesis.",
      },
      {
        id: 12,
        question: "____ secretion is increased during the absorptive period.",
        options: ["insulin", "glucagon"],
        answer: "insulin",
        answerExplanation: "After a meal (absorptive state), insulin increases to promote nutrient storage and uptake.",
      },
      {
        id: 13,
        question: "Insulin and glucagon both help regulate the plasma glucose concentration. ",
        options: ["true", "false"],
        answer: "true",
        answerExplanation: "True. They act as opposing regulators to maintain plasma glucose homeostasis.",
      },
      {
        id: 14,
        question: "Breakdown of triglycerides yields fatty acids and           , which can be used by cells for energy.",
        options: ["glycerol"],
        answer: "glycerol",
        answerExplanation: "Triglycerides break down into fatty acids and glycerol, the latter of which can be used for energy or gluconeogenesis.",
      },
      {
        id: 15,
        question: "Conversion of amino acids to fatty acids occurs more likely in ____ state.",
        options: ["absorptive", "postabsorptive"],
        answer: "absorptive",
        answerExplanation: "This occurs in the absorptive state, when excess nutrients are converted into storage molecules like fat.",
      },
      {
        id: 16,
        question: "Conversion of amino acids to glucose occurs more likely in ____ state.",
        options: ["absorptive", "postabsorptive"],
        answer: "postabsorptive",
        answerExplanation: "This occurs in the postabsorptive state, when the body needs to generate glucose through gluconeogenesis.",
      },
      {
        id: 17,
        question: "Increase in plasma thyroid hormone levels tends to make the body’s energy balance more (positive/negative).",
        options: ["positive", "negative"],
        answer: "negative",
        answerExplanation: "Increased thyroid hormone raises metabolic rate, causing the body to burn more energy—making energy balance more negative.",
      },
      {
        id: 18,
        question: "Energy taken into the body is either stored or appears as work or           .",
        options: ["heat"],
        answer: "heat",
        answerExplanation: "All other energy taken in is released as heat, maintaining body temperature.",
      },
      {
        id: 19,
        question: "Stress tends to (stimulate/inhibit) GHRH secretion.",
        options: ["stimulate", "inhibit"],
        answer: "inhibit",
        answerExplanation: "Stress increases cortisol, which inhibits GHRH and reduces growth hormone release.",
      },
      {
        id: 20,
        question: "Many of growth hormone’s effects on target tissues are due to it triggering release of other chemical messengers called           .",
        options: ["(IGFs) insulin-like growth factors"],
        answer: "(IGFs) insulin-like growth factors",
        answerExplanation: "GH stimulates release of insulin-like growth factors (IGFs), which mediate most of its growth-promoting effects.",
      },
      {
        id: 21,
        question: "Closure of the epiphyseal plates is promoted by (growth hormone/sex hormones).",
        options: ["growth hormone", "sex hormones"],
        answer: "sex hormones",
        answerExplanation: "Sex hormones (estrogen and testosterone) trigger epiphyseal plate closure during late puberty.",
      },
      {
        id: 22,
        question: "Thyroid hormones promote increased ­responsiveness of target tissues to ­(sympathetic/parasympathetic) nerve activity.",
        options: ["sympathetic", "parasympathetic"],
        answer: "sympathetic",
        answerExplanation: "Thyroid hormone increases sensitivity to sympathetic nervous system activity, contributing to increased heart rate and metabolic effects.",
      },
      {
        id: 23,
        question: "Glucocorticoids promote (increased/decreased) plasma glucose levels.",
        options: ["increased", "decreased"],
        answer: "increased",
        answerExplanation: "Glucocorticoids increase plasma glucose by promoting gluconeogenesis and reducing glucose uptake in peripheral tissues.",
      },
      {
        id: 24,
        question: "Stimulation of gluconeogenesis by glucagon is an example of a glucose-sparing effect.",
        options: ["true", "false"],
        answer: "false",
        answerExplanation: "Glucose-sparing means using less glucose, but gluconeogenesis produces glucose, increasing availability rather than sparing its use.",
      },
      {
        id: 25,
        question: "Plasma glucocorticoids have a(n) (stimulatory/inhibitory) effect on the ACTH secretion.",
        options: ["stimulatory", "inhibitory"],
        answer: "inhibitory",
        answerExplanation: "Plasma glucocorticoids exert negative feedback, inhibiting ACTH secretion from the anterior pituitary.",
      },
    ],
  },

  {
    slug: "physiology-chapter-22",
    title: "Reproductive System",
    description: "physiology-chapter-22",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "In both males and females, gonadotropin secretion by the anterior pituitary is stimulated by ____?",
        options: ["Inhibin", "Androgens", "GnRH", "FSH", "GHRH"],
        answer: "GnRH",
        answerExplanation: "GnRH from the hypothalamus stimulates the anterior pituitary to release the gonadotropins FSH and LH.",
      },
      {
        id: 2,
        question: "In the embryo, which effects are promoted by testosterone?",
        options: ["Development of the primitive gonads into testes", "Regression of Müllerian ducts", "Development of Müllerian ducts into male reproductive organs", "Development of Wolffian ducts into male reproductive organs", "Expression of the srY gene"],
        answer: "Development of Wolffian ducts into male reproductive organs",
        answerExplanation: "Testosterone stabilizes and stimulates the Wolffian ducts, causing them to develop into male internal reproductive structures.",
      },
      {
        id: 3,
        question: "The testes are housed in the",
        options: ["prostate gland.", "scrotum.", "penis.", "epididymis.", "vas deferens."],
        answer: "scrotum.",
        answerImage: "/images/Figure 22.6 Male Reproductive System",
        answerExplanation: "The testes are housed in the scrotum, which helps regulate temperature for proper sperm production.",
      },
      {
        id: 4,
        question: "In the first step of spermatogenesis, spermatogonia differentiate into cells called",
        options: ["spermatids.", "primary spermatocytes.", "secondary spermatocytes.", "spermatozoa.", "spermatophytes."],
        answer: "primary spermatocytes.",
        answerExplanation: "Spermatogonia first divide and differentiate into primary spermatocytes before undergoing meiosis.",
      },
      {
        id: 5,
        question: "Cells in the ovaries secrete all of the following hormones except",
        options: ["estrogens.", "progesterone.", "androgens.", "luteinizing hormone.", "inhibin."],
        answer: "luteinizing hormone.",
        answerExplanation: "LH is produced by the anterior pituitary, not the ovaries.",
      },
      {
        id: 6,
        question: "In oogenesis, when does meiosis I occur?",
        options: ["In early fetal life", "At birth", "Just before ovulation", "After ovulation but before fertilization", "After fertilization"],
        answer: "Just before ovulation",
        answerExplanation: "Meiosis I in oogenesis completes just before ovulation, producing a secondary oocyte.",
      },
      {
        id: 7,
        question: "During the early to mid-follicular phase of the ovarian cycle, which hormone(s) stimulate(s) granulosa cell functions?",
        options: ["Progesterone", "FSH", "LH", "GnRH", "Estrogens"],
        answer: "FSH",
        answerExplanation: "FSH stimulates granulosa cells, supporting follicle development and estrogen production.",
      },
      {
        id: 8,
        question: "In the late luteal phase, why do estrogen and progesterone levels fall?",
        options: ["Rupture of the dominant follicle", "Degeneration of the corpus luteum", "An inhibitory effect of LH on secretory activity of the corpus luteum", "The inhibitory effect of inhibin on the secretory activity of granulosa cells", "All of the above"],
        answer: "Degeneration of the corpus luteum",
        answerExplanation: "When the corpus luteum degenerates (if no pregnancy occurs), estrogen and progesterone levels fall.",
      },
      {
        id: 9,
        question: "In the uterine cycle, which phase immediately precedes the proliferative phase?",
        options: ["Menstrual phase", "Secretory phase", "Luteal phase", "Follicular phase"],
        answer: "Menstrual phase",
        answerExplanation: "The menstrual phase occurs just before the proliferative phase.",
      },
      {
        id: 10,
        question: "The placenta not only serves as an organ of exchange but also secretes all of the following hormones except",
        options: ["prolactin.", "chorionic gonadotropin.", "placental lactogen.", "progesterone.", "estrogens."],
        answer: "prolactin.",
        answerExplanation: "The placenta produces hCG, placental lactogen, estrogen, and progesterone — but not prolactin.",
      },
      {
        id: 11,
        question: "In meiosis I, maternal and paternal chromosomes are segregated into separate daughter cells.",
        options: ["true", "false"],
        answer: "false",
        answerExplanation: "Meiosis I separates homologous chromosomes, not specifically maternal vs. paternal sets into separate cells.",
      },
      {
        id: 12,
        question: "The srY gene codes for (testosterone ­receptors/testis-determining factor), which determine(s) whether an embryo develops testes or ovaries.",
        options: ["testosterone", "testis-determining factor"],
        answer: "testis-determining factor",
        answerExplanation: "The SRY gene codes for TDF, which triggers testis development.",
      },
      {
        id: 13,
        question: "In the absence of testosterone and MIS, the Müllerian ducts (persist/degenerate) in the embryo, and female structures eventually develop.",
        options: ["persist"],
        answer: "persist",
        answerExplanation: "Without testosterone and MIS, the Müllerian ducts persist and develop into female structures.",
      },
      {
        id: 14,
        question: "FSH and LH are classified as (sex hormones/gonadotropins).",
        options: ["gonadotropins"],
        answer: "gonadotropins",
        answerExplanation: "FSH and LH are gonadotropins produced by the anterior pituitary.",
      },
      {
        id: 15,
        question: "GnRH, which is secreted by the hypothalamus, stimulates the secretion of both FSH and LH from the anterior pituitary.",
        options: ["true", "false"],
        answer: "true",
        answerExplanation: "GnRH stimulates release of both FSH and LH from the anterior pituitary.",
      },
      {
        id: 16,
        question: "In the testes, androgens are secreted by (Sertoli cells/Leydig cells).",
        options: ["Leydig cells"],
        answer: "Leydig cells",
        answerExplanation: "Leydig cells produce testosterone in response to LH.",
      },
      {
        id: 17,
        question: "Spermatogenesis is stimulated by testosterone and (FSH/LH), which targets Sertoli cells.",
        options: ["FSH", "LH"],
        answer: "FSH",
        answerExplanation: "FSH acts on Sertoli cells to support spermatogenesis, alongside testosterone.",
      },
      {
        id: 18,
        question: "The head of a sperm contains chromosomes and a(n) , a vesicle containing enzymes needed for fertilization.",
        options: ["acrosome"],
        answer: "acrosome",
        answerImage: "/images/Figure 22.9 Sperm Cell",
        answerExplanation: "The acrosome contains enzymes that help sperm penetrate the egg.",
      },
      {
        id: 19,
        question: "Erection is accompanied by a(n) ____ in the activity of sympathetic neurons projecting to blood vessels in the penis.",
        options: ["increase", "decrease"],
        answer: "decrease",
        answerExplanation: "Erection occurs with decreased sympathetic activity and increased parasympathetic activity.",
      },
      {
        id: 20,
        question: "Once sperm are deposited in the female reproductive tract, they cannot fertilize the oocyte until they have undergone a process called .",
        options: ["capacitation"],
        answer: "capacitation",
        answerExplanation: "Capacitation is a process in the female reproductive tract that enables sperm to fertilize the oocyte.",
      },
      {
        id: 21,
        question: "Fertilization usually occurs in the (uterus/uterine tube).",
        options: ["uterus", "uterine tube"],
        answer: "uterine tube",
        answerExplanation: "Fertilization normally occurs in the ampulla of the uterine tube.",
      },
      {
        id: 22,
        question: "The second half of the ovarian cycle is called the (luteal/follicular) phase.",
        options: ["luteal phase"],
        answer: "luteal phase",
        answerExplanation: "The second half of the ovarian cycle (after ovulation) is the luteal phase.",
      },
      {
        id: 23,
        question: "In a follicle, the oocyte is surrounded by a layer of (granulosa/theca) cells that provide it with nourishment and regulate its development.",
        options: ["granulosa", "theca"],
        answer: "granulosa",
        answerExplanation: "Granulosa cells surround the oocyte and regulate its nutrient environment.",
      },
      {
        id: 24,
        question: "(FSH/LH) stimulates theca cells to secrete androgens, which are converted to estrogens by granulosa cells.",
        options: ["LH"],
        answer: "LH",
        answerExplanation: "LH stimulates theca cells to produce androgens, which granulosa cells convert to estrogens.",
      },
      {
        id: 25,
        question: "The inner layer of the uterine wall is called the (endometrium/myometrium).",
        options: ["endometrium", "myometrium"],
        answer: "endometrium",
        answerExplanation: "The endometrium is the inner lining where implantation occurs.",
      },
      {
        id: 26,
        question: "During the ____ phase of the uterine cycle, the lining of the uterus thickens under the influence of ­rising estrogen levels.",
        options: ["proliferative", "secretory"],
        answer: "proliferative",
        answerExplanation: "In the proliferative phase, estrogen causes thickening of the endometrial lining.",
      },
      {
        id: 27,
        question: "Ovulation is triggered by (FSH/LH).",
        options: ["LH"],
        answer: "LH",
        answerExplanation: "The LH surge triggers ovulation.",
      },
      {
        id: 28,
        question: "The corpus luteum secretes estrogens and (LH/progesterone).",
        options: ["LH", "progesterone"],
        answer: "progesterone",
        answerExplanation: "The corpus luteum secretes progesterone (and some estrogen), not LH.",
      },
      {
        id: 29,
        question: "In the late follicular phase, LH secretion is stimulated by (estrogens/progesterone).",
        options: ["estrogens", "progesterone"],
        answer: "estrogens",
        answerExplanation: "High estrogen levels in the late follicular phase stimulate the LH surge.",
      },
      {
        id: 30,
        question: "Degeneration of the corpus luteum causes hormonal changes that trigger (ovulation/menstruation).",
        options: ["ovulation", "menstruation"],
        answer: "menstruation",
        answerExplanation: "Falling progesterone and estrogen from corpus luteum degeneration triggers menstruation.",
      },
      {
        id: 31,
        question: "Before implantation, the morula develops into a(n) __________, which consists of an inner cell mass contained within a hollow, fluid-filled outer cell layer.",
        options: ["blastocyst"],
        answer: "blastocyst",
        answerExplanation: "A blastocyst forms before implantation, containing the inner cell mass and trophoblast.",
      },
      {
        id: 32,
        question: "Secretory-phase uterine conditions are promoted by (estrogen/progesterone), which inhibits gonadotropin secretion during the last half of the ovarian cycle.",
        options: ["estrogen", "progesterone"],
        answer: "progesterone",
        answerExplanation: "Progesterone promotes secretory transformation of the endometrium and suppresses gonadotropins.",
      },
      {
        id: 33,
        question: "During pregnancy's last six months, estrogens and progesterone are secreted by (ovaries/placenta).",
        options: ["placenta"],
        answer: "placenta",
        answerExplanation: "After the first trimester, the placenta becomes the major source of estrogen and progesterone.",
      },
      {
        id: 34,
        question: "During labor, strong uterine contractions are induced by (prolactin/oxytocin).",
        options: ["oxytocin"],
        answer: "oxytocin",
        answerExplanation: "Oxytocin from the posterior pituitary stimulates strong uterine contractions during labor.",
      },
      {
        id: 35,
        question: "Suckling stimulates the release of __________, which promotes milk production by the breasts.",
        options: ["prolactin"],
        answer: "prolactin",
        answerExplanation: "Prolactin from the anterior pituitary stimulates milk production in the mammary glands.",
      },
    ],
  },
  {
    slug: "physiology-chapter-23",
    title: "Immune System",
    description: "physiology-chapter-23",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "Which class of pathogens consists of only unicellular organisms?",
        options: ["Virus", "Bacteria", "Fungi", "Parasites", "None of the above"],
        answer: "Bacteria",
        answerImage: "/images/Figure 23.4 Pathogens",
        answerExplanation: "Bacteria are single-celled prokaryotic organisms, unlike viruses (acellular) or fungi/parasites (can be multicellular).",
      },
      {
        id: 2,
        question: "Which conditions would lead to the most serious immunodeficiency disease?",
        options: ["Lack of IgG", "Lack of neutrophils", "Lack of B cells", "Lack of cytotoxic T cells", "Lack of helper T cells"],
        answer: "Lack of helper T cells",
        answerExplanation: "Helper T cells (CD4⁺) are required to activate B cells, cytotoxic T cells, and macrophages. Without them, almost all adaptive immunity fails.",
      },
      {
        id: 3,
        question: "Which molecules can opsonize antigen?",
        options: ["A T cell receptor", "Interferon", "An antibody", "A perforin", "Interleukin-2"],
        answer: "An antibody",
        answerImage: "/images/Figure 23.16 Opsonization",
        answerExplanation: "Antibodies bind antigens and tag (opsonize) them for phagocytosis.",
      },
      {
        id: 4,
        question: "Lymphocytes contact foreign antigen in all of the following tissues except",
        options: ["bone marrow.", "the spleen.", "lymph nodes.", "the appendix.", "Peyer’s patches."],
        answer: "bone marrow.",
        answerExplanation: "Bone marrow is a primary lymphoid organ; lymphocytes do not encounter foreign antigens there.",
      },
      {
        id: 5,
        question: "Which is not true about humoral immunity?",
        options: ["It involves B cells.", "It involves antibodies.", "It involves cytotoxic T cells.", "It can provide passive immunity when transferred from one person to another."],
        answer: "It involves cytotoxic T cells.",
        answerExplanation: "Humoral immunity involves B cells and antibodies; cytotoxic T cells belong to cell-mediated immunity.",
      },
      {
        id: 6,
        question: "Macrophages",
        options: ["are derived from monocytes.", "have class II MHC molecules.", "are phagocytic.", "are indirectly involved in specific immunity.", "all of the above."],
        answer: "all of the above.",
        answerExplanation: "Macrophages originate from monocytes, perform phagocytosis, express class II MHC, and present antigen to helper T cells.",
      },
      {
        id: 7,
        question: "Activated cytotoxic T cells release pore-forming molecules called",
        options: ["histamines.", "complement proteins.", "perforins.", "immunoglobulins.", "ready-porins."],
        answer: "perforins.",
        answerExplanation: "Cytotoxic T cells kill infected cells by releasing perforins, which form pores in target membranes.",
      },
      {
        id: 8,
        question: "Type AB blood",
        options: ["is considered a universal blood donor.", "is considered a universal blood recipient.", "produces antibodies to the B antigen.", "produces antibodies to the A antigen.", "is Rh-positive."],
        answer: "is considered a universal blood recipient.",
        answerExplanation: "AB blood has no anti-A or anti-B antibodies, so the person can receive all ABO types (universal recipient).",
      },
      {
        id: 9,
        question: "Which can result in lifelong immunity?",
        options: ["Passage of maternal antibodies to a developing fetus", "An inflammatory response to a splinter", "Phagocytosis of bacteria by a neutrophil", "Administration of the polio vaccine", "Administration of antibodies against the rabies virus"],
        answer: "Administration of the polio vaccine",
        answerExplanation: "Vaccines such as polio stimulate active immunity and immunologic memory, providing long-term protection.",
      },
      {
        id: 10,
        question: "Foreign antigens phagocytosed by macrophages are presented by",
        options: ["class I MHC molecules to cytotoxic T cells.", "class II MHC molecules to helper T cells.", "class I MHC molecules to helper T cells.", "class II MHC molecules to CD8-bearing cells.", "class II MHC molecules to cytotoxic T cells."],
        answer: "class II MHC molecules to helper T cells.",
        answerExplanation: "Extracellular antigen taken up by macrophages is presented on class II MHC to helper T cells (CD4⁺).",
      },
      {
        id: 11,
        question: "Of the following events, which occurs earliest in the process of local inflammation?",
        options: ["Increased capillary permeability", "Fever", "Attack by cytotoxic T cells", "Release of histamine", "Lysis of microbes mediated by antibodies and complement"],
        answer: "Release of histamine",
        answerExplanation: "Local inflammation begins with mast-cell degranulation and histamine release before other immune processes occur.",
      },
      {
        id: 12,
        question: "Which is not true about helper T cells?",
        options: ["They function in both the cell-­mediated and humoral immune responses.", "They secrete antibody.", "They bear surface CD4 molecules.", "They are subject to infection by HIV.", "When activated, they secrete IL-2 and other cytokines."],
        answer: "They secrete antibody.",
        answerExplanation: "Helper T cells do not secrete antibodies; B cells do. Helper T cells regulate both arms of adaptive immunity.",
      },
      {
        id: 13,
        question: "Which is not an antigen-presenting cell?",
        options: ["Macrophage", "Dendritic cell", "Mast cell", "Activated B cells", "Thymus cells"],
        answer: "Thymus cells",
        answerExplanation: "Thymus cells are not antigen-presenting cells; macrophages, dendritic cells, and activated B cells are.",
      },
      {
        id: 14,
        question: "IL-2 is important for the activation of all of the following cell types except",
        options: ["B cells.", "cytotoxic T cells.", "NK cells.", "T helper cells.", "macrophages."],
        answer: "macrophages.",
        answerExplanation: "IL-2 activates T cells, B cells, and NK cells—but not macrophages directly.",
      },
      {
        id: 15,
        question: "Which is an autoimmune disease in which myelinated neurons become the target of the immune response?",
        options: ["Myasthenia gravis", "Multiple sclerosis", "Diabetes mellitus", "Rheumatoid arthritis"],
        answer: "Multiple sclerosis",
        answerExplanation: "Multiple sclerosis is an autoimmune disease where the immune system attacks CNS myelin.",
      },
      {
        id: 16 - 1,
        question: "Which cell type mediates phagocytosis?",
        options: ["Helper T cell (Tₕ)", "Cytotoxic T cell (T꜀)", "B cell (B)", "Macrophage (M)"],
        answer: "Macrophage (M)",
        answerExplanation: "Macrophages are responsible for phagocytosis.",
      },
      {
        id: 16 - 2,
        question: "Which cell type secretes cytokines such as IL-2?",
        options: ["Helper T cell (Tₕ)", "Cytotoxic T cell (T꜀)", "B cell (B)", "Macrophage (M)"],
        answer: "Helper T cell (Tₕ)",
        answerExplanation: "Helper T cells secrete cytokines like IL-2 to coordinate immune responses.",
      },
      {
        id: 16 - 3,
        question: "Which cell type kills virus-infected cells?",
        options: ["Helper T cell (Tₕ)", "Cytotoxic T cell (T꜀)", "B cell (B)", "Macrophage (M)"],
        answer: "Cytotoxic T cell (T꜀)",
        answerExplanation: "Cytotoxic T cells (CD8+) directly kill infected cells.",
      },
      {
        id: 16 - 4,
        question: "Which cell type specifically binds to free virus?",
        options: ["Helper T cell (Tₕ)", "Cytotoxic T cell (T꜀)", "B cell (B)", "Macrophage (M)"],
        answer: "B cell (B)",
        answerExplanation: "B cells recognize free antigen (like viruses) through their B cell receptor.",
      },
      {
        id: 16 - 5,
        question: "Which cell type differentiates into antibody-secreting plasma cells?",
        options: ["Helper T cell (Tₕ)", "Cytotoxic T cell (T꜀)", "B cell (B)", "Macrophage (M)"],
        answer: "B cell (B)",
        answerExplanation: "B cells differentiate into plasma cells, which produce antibodies.",
      },
      {
        id: 17 - 1,
        question: "Which immune response type occurs in a viral infection?",
        options: ["Humoral (H)", "Cell-mediated (CM)", "Both (B)", "Neither (N)"],
        answer: "Both (B)",
        answerExplanation: "Viral infections activate both humoral and cell-mediated immunity.",
      },
      {
        id: 17 - 2,
        question: "Which immune response type involves the production of antibodies?",
        options: ["Humoral (H)", "Cell-mediated (CM)", "Both (B)", "Neither (N)"],
        answer: "Humoral (H)",
        answerExplanation: "The production of antibodies is a hallmark of the humoral immune response.",
      },
      {
        id: 17 - 3,
        question: "Which immune response type involves the phagocytic activity of neutrophils?",
        options: ["Humoral (H)", "Cell-mediated (CM)", "Both (B)", "Neither (N)"],
        answer: "Neither (N)",
        answerExplanation: "Neutrophil phagocytosis is part of innate immunity, not humoral or cell-mediated responses.",
      },
      {
        id: 17 - 4,
        question: "Which immune response type involves killing virus-infected cells?",
        options: ["Humoral (H)", "Cell-mediated (CM)", "Both (B)", "Neither (N)"],
        answer: "Cell-mediated (CM)",
        answerExplanation: "Killing virus-infected cells is the main function of cell-mediated immunity.",
      },
      {
        id: 17 - 5,
        question: "Which immune response type involves T cells bearing CD8?",
        options: ["Humoral (H)", "Cell-mediated (CM)", "Both (B)", "Neither (N)"],
        answer: "Cell-mediated (CM)",
        answerExplanation: "CD8 T cells are cytotoxic T cells involved in cell-mediated immunity.",
      },
      {
        id: 18,
        question: "A person who experiences life-threatening allergic reactions to bee sting venom might be given an experimental drug designed to (block/enhance) the binding of IgE to mast cells.",
        options: ["block", "enhance"],
        answer: "block",
        answerExplanation: "Blocking IgE binding prevents mast-cell degranulation, reducing severe allergic reactions.",
      },
      {
        id: 19,
        question: "When a macrophage is infected by a virus, viral antigen will be presented by (class I/class II MHC molecules) to a (helper T cell/cytotoxic T cell).",
        options: ["class II MHC molecules, helper T cell", "class I MHC molecules, cytotoxic T cell"],
        answer: "class II MHC molecules, helper T cell",
        answerExplanation: "Macrophages present antigen on class II MHC to helper T cells. Class I MHC would instead activate cytotoxic T cells.",
      },
      {
        id: 20,
        question: "Evidence exists of interactions among the immune system, the nervous system, and the endocrine system.",
        options: ["true", "false"],
        answer: "true",
        answerExplanation: "Immune, nervous, and endocrine systems communicate through cytokines, hormones, and neural signals.",
      },
      {
        id: 21,
        question: "A girl steps on a rusty nail, then is given tetanus antitoxin (antibody to tetanus toxin). Is this active or passive immunization?",
        options: ["active", "passive"],
        answer: "passive",
        answerExplanation: "Antitoxin injection provides ready-made antibodies → passive immunity.",
      },
      {
        id: 22,
        question: "Macrophages internalize foreign antigens by (endocytosis/phagocytosis), whereas B cells do so by (endocytosis/phagocytosis).",
        options: ["phagocytosis, endocytosis", "endocytosis, phagocytosis"],
        answer: "phagocytosis, endocytosis",
        answerExplanation: "Macrophages take up large particles via phagocytosis. B cells internalize antigen by receptor-mediated endocytosis.",
      },
      {
        id: 23,
        question: "A person who has had a thymectomy as a treatment for a thymic tumor will likely experience a diminished (T cell/B cell) count.",
        options: ["T cell", "B cell"],
        answer: "T cell",
        answerExplanation: "The thymus is required for T-cell maturation. Removing it decreases T-cell numbers, not B-cell numbers.",
      },
    ],
  },
  {
    slug: "physiology-chapter-24",
    title: "Diabetes Mellitus",
    description: "physiology-chapter-24",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "Which best describes type 1 DM?",
        options: ["Bacterial infection of the adrenal medulla", "Viral infection of the adrenal medulla", "Autoimmune disease of the endocrine pancreas", "Autoimmune disease of the exocrine pancreas", "Disease of chronic obesity"],
        answer: "Autoimmune disease of the endocrine pancreas",
        answerImage: "/images/Table 24.1 Type 1 and Type 2 Diabetes Mellitus.png",
        answerExplanation: "Type 1 diabetes is an autoimmune disease in which the immune system destroys the β-cells of the endocrine pancreas, causing little to no insulin production. The adrenal medulla is not involved.",
      },
      {
        id: 2,
        question: "Which is not a symptom of ketoacidosis?",
        options: ["Acetone breath", "Increased ventilation", "Increased lipolysis", "Muscle tremors", "Increased sympathetic activity"],
        answer: "Muscle tremors",
        answerExplanation: "Ketoacidosis causes acetone breath, Kussmaul (increased) ventilation, increased lipolysis, and high sympathetic activity. Muscle tremors are not a characteristic symptom.",
      },
      {
        id: 3,
        question: "What causes a diabetic coma?",
        options: ["Severe hyperglycemia", "Too much insulin, which causes severe hypoglycemia", "Acidosis", "Increased sympathetic activity to blood vessels of the brain", "Vasoconstriction of blood vessels to the brain"],
        answer: "Too much insulin, which causes severe hypoglycemia",
        answerExplanation: "A diabetic coma often results from severe hypoglycemia, usually due to too much insulin. Low glucose deprives the brain of energy, causing loss of consciousness.",
      },
      {
        id: 4,
        question: "What are the “three polys” of diabetes mellitus?",
        options: ["Polydipsia, polyphagia, polyuria", "Polyglycemia, polylipemia, polyuria", "Polydipsia, polyglycemia, polycythemia", "Polycythemia, polyphagia, polyuria", "Polyphagia, polyinsulinemia, polydipsia"],
        answer: "Polydipsia, polyphagia, polyuria",
        answerExplanation: "The classic symptoms of uncontrolled diabetes are polydipsia (excessive thirst), polyphagia (excessive hunger), and polyuria (excessive urination) due to high blood glucose and osmotic diuresis.",
      },
      {
        id: 5,
        question: "Glycosylation of which protein is used as a marker for diagnosing diabetes?",
        options: ["Insulin", "Hexokinase", "Hemoglobin", "Aldose reductase", "Protein kinase C"],
        answer: "Hemoglobin",
        answerExplanation: "Diabetes is diagnosed in part using HbA1c, which measures the glycosylation of hemoglobin. This reflects average blood glucose levels over ~3 months.",
      },
      {
        id: 6,
        question: "Proliferative retinopathy is caused by ____?",
        options: [
          "Microaneurysms causing blood vessels in the retina to leak",
          "Extensive angiogenesis in the retina resulting in weak, fragile blood vessels that leak",
          "Increased production of rods and cones such that they overlap and interfere with each other’s function",
          "Extensive development of the choroid, putting pressure on the optic nerve",
          "Extensive development of the retinal pigmented epithelium, putting pressure on the optic nerve",
        ],
        answer: "Extensive angiogenesis in the retina resulting in weak, fragile blood vessels that leak",
        answerImage: "/images/Figure 24.8 Diabetic retinopathy.png",
        answerExplanation: "Proliferative diabetic retinopathy occurs when excessive angiogenesis produces weak, fragile new vessels, which easily leak or bleed, damaging retinal tissue.",
      },
      {
        id: 7,
        question: "What is an early symptom of nephropathy used for diagnostic purposes?",
        options: ["Glucose in the urine", "Albumin in the urine", "Blood in the urine", "Excessive thirst", "Dehydration"],
        answer: "Albumin in the urine",
        answerExplanation: "An early sign of diabetic kidney disease is albumin in the urine (microalbuminuria), which indicates damage to the glomerular filtration barrier.",
      },
      {
        id: 8,
        question: "Which is not a phagocyte?",
        options: ["Fibroblasts", "Neutrophils", "Macrophages", "Monocytes"],
        answer: "Fibroblasts",
        answerExplanation: "Neutrophils, macrophages, and monocytes are phagocytic immune cells. Fibroblasts are structural connective-tissue cells, not phagocytes.",
      },
      {
        id: 9,
        question: "Which is not used to treat type 2 DM?",
        options: ["Sulfonylureas", "Biguanides", "α-Glucosidase inhibitors", "Thiazolidinediones", "Phenylephrine"],
        answer: "Phenylephrine",
        answerExplanation: "Sulfonylureas, biguanides, α-glucosidase inhibitors, and thiazolidinediones all treat type 2 diabetes. Phenylephrine is a decongestant and does not treat diabetes.",
      },
      {
        id: 10,
        question: "Which is an enzyme ­currently being studied as a target for gene therapy of diabetes mellitus?",
        options: ["Hexokinase", "Protein kinase C", "Aldose reductase", "AMP-activated protein kinase", "Tyrosine kinase"],
        answer: "Aldose reductase",
        answerExplanation: "Aldose reductase is an enzyme involved in the polyol pathway, which contributes to diabetic complications. It is being studied as a potential gene therapy target to reduce long-term tissue damage.",
      },
      {
        id: 11,
        question: "Which is the more prevalent, type 1 or type 2 diabetes mellitus?",
        options: ["Type 2 diabetes mellitus"],
        answer: "Type 2 diabetes mellitus",
        answerExplanation: "Type 2 diabetes mellitus is far more common than type 1, accounting for about 90–95% of all diabetes cases.",
      },
      {
        id: 12,
        question: "____ is an autoimmune disease.",
        options: ["Type 1 diabetes mellitus", "Type 2 diabetes mellitus"],
        answer: "Type 1 diabetes mellitus",
        answerExplanation: "Type 1 diabetes mellitus is an autoimmune disorder in which the immune system destroys pancreatic β-cells. Type 2 is not autoimmune.",
      },
      {
        id: 13,
        question: "The non-enzymatic addition of glucose to a protein is called            .",
        options: ["glycosylation"],
        answer: "glycosylation",
        answerExplanation: "Glycosylation is the non-enzymatic attachment of glucose to proteins, a process that increases with chronic hyperglycemia and is used to measure HbA1c.",
      },
      {
        id: 14,
        question: "Acidosis occurs in diabetes due to the production of            .",
        options: ["ketones"],
        answer: "ketones",
        answerExplanation: "In uncontrolled diabetes, the body uses fats for energy, producing ketones, which are acidic and lead to metabolic acidosis.",
      },
      {
        id: 15,
        question: "Define polyuria, polydipsia, and polyphagia.",
        options: ["Polyuria = excessive urination; polydipsia = excessive thirst; polyphagia = excess eating"],
        answer: "Polyuria = excessive urination; polydipsia = excessive thirst; polyphagia = excess eating",
        answerExplanation: "These are classic symptoms of diabetes: Polyuria: excessive urination due to osmotic diuresis from glucose in the filtrate. Polydipsia: excessive thirst caused by dehydration from polyuria. Polyphagia: increased hunger because cells cannot take up glucose effectively.",
      },
      {
        id: 16,
        question: "Amputation in diabetes occurs secondary to            .",
        options: ["Acceptable answers include delayed wound healing; diabetic neuropathy; gangrene; or diabetic foot ulcer."],
        answer: "Acceptable answers include delayed wound healing; diabetic neuropathy; gangrene; or diabetic foot ulcer.",
        answerExplanation: "Amputations often result from delayed wound healing, neuropathy, and infections, which can progress to ulcers or gangrene due to poor circulation and nerve damage.",
      },
      {
        id: 17,
        question: "Name the three phases of wound healing. Which phases are delayed in diabetes?",
        options: ["Three phases: inflammation, proliferation, remodeling; all these phases are delayed in diabetes."],
        answer: "Three phases: inflammation, proliferation, remodeling; all these phases are delayed in diabetes.",
        answerExplanation: "The three phases of wound healing are inflammation, proliferation, and remodeling. All phases are slowed or impaired in diabetes due to poor blood flow, high glucose, and immune dysfunction.",
      },
      {
        id: 18,
        question: "How do sulfonylureas increase insulin secretion?",
        options: ["They cause closing of potassium channels on the beta cell membrane, which depolarizes the cell."],
        answer: "They cause closing of potassium channels on the beta cell membrane, which depolarizes the cell.",
        answerExplanation: "Sulfonylureas close ATP-sensitive potassium channels on pancreatic β-cells. This depolarizes the membrane, triggers calcium influx, and stimulates insulin release.",
      },
      {
        id: 19,
        question: "Weight-loss surgery can reverse some cases of type 2 DM.",
        options: ["true", "false"],
        answer: "true",
        answerExplanation: "Bariatric (weight-loss) surgery can significantly improve insulin sensitivity and sometimes reverse type 2 diabetes, especially in early stages.",
      },
      {
        id: 20,
        question: "What is a diabetic coma?",
        options: ["A coma resulting from taking an excess of insulin, thereby dropping blood glucose levels to dangerously low levels."],
        answer: "A coma resulting from taking an excess of insulin, thereby dropping blood glucose levels to dangerously low levels.",
        answerExplanation: "A diabetic coma can occur when excess insulin causes severe hypoglycemia, depriving the brain of glucose and leading to loss of consciousness.",
      },
    ],
  },
];
