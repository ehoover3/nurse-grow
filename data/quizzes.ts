export type Question = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  answerImage?: string;
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
        question: "Which system is responsible for transporting blood?",
        options: ["Respiratory", "Circulatory", "Digestive", "Nervous"],
        answer: "Circulatory",
      },
    ],
  },

  {
    slug: "physiology",
    title: "Physiology Chapter 1 - Introduction to Physiology.",
    description: "Physiology Chapter 1 - Introduction to Physiology.",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "Which of the following best illustrates the concept of positive feedback?",
        options: [
          "The secretion of acid by cells in the stomach lining is suppressed when the acidity of the stomach contents increases.",
          "A rise in blood pressure stimulates the elimination of water in the urine, which reduces the blood pressure.",
          "An increase in the concentration of H⁺ in blood causes an increase in H+ excretion in urine.",
          "An increase in the carbon dioxide concentration of the blood stimulates breathing, which increases the rate at which carbon dioxide is eliminated from the body.",
          "Contractions of the uterus push the fetus against the cervix, which triggers release of oxytocin into the bloodstream; oxytocin then stimulates stronger contractions of the uterus.",
        ],
        answer: "",
      },
      {
        id: 2,
        question: "The hormone aldosterone stimulates the reabsorption of sodium ions from the lumen of a kidney tubule. Based on your knowledge of the body’s cell types, you can surmise that this hormone acts on",
        options: ["Neurons.", "Muscle cells.", "Epithelial cells.", "Connective tissue cells."],
        answer: "",
      },
      {
        id: 3,
        question: "Hormones are secreted",
        options: ["Into the blood.", "From exocrine glands.", "From endocrine glands.", "Both a and b are true.", "Both a and c are true."],
        answer: "",
        answerImage: "/images/Figure 1.3 Glands.png",
      },
      {
        id: 4,
        question: "Which cell type is specialized for contraction and generation of force?",
        options: ["Muscle", "Epithelial", "Connective tissue", "Nerve"],
        answer: "",
      },
      {
        id: 5,
        question: "Normal blood glucose level is",
        options: ["50 mg/dL.", "100 mg/dL.", "50 mg/mL.", "100 mg/mL.", "50 mg/L."],
        answer: "",
      },

      {
        id: 6,
        question: "The body’s internal environment is synonymous with",
        options: ["extracellular fluid", "intracellular fluid"],
        answer: "",
      },
      {
        id: 7,
        question: "Maintenance of constant conditions in the internal environment is known as           .",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "Plasma is extracellular fluid.",
        options: ["true", "false"],
        answer: "",
      },
      {
        id: 9,
        question: "In homeostasis, all physiological variables are regulated to stay constant.",
        options: ["true", "false"],
        answer: "",
      },
      {
        id: 10,
        question: "The protein elastin is found in (epithelial/connective) tissue.",
        options: ["epithelial", "connective"],
        answer: "",
      },
      {
        id: 11,
        question: "Plasma and interstitial fluid are identical in composition.",
        options: ["true", "false"],
        answer: "",
      },
      {
        id: 12,
        question: "A hormone that causes movement of glucose from plasma to cells is           .",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },
  {
    slug: "physiology",
    title: "Physiology Chapter 2 - Cell Structure and Function",
    description: "Physiology Chapter 2 - Cell Structure and Function",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "Which of the following biomolecules is not a polymer?",
        options: ["Polysaccharide", "Phospholipid", "Protein", "Nucleic acid"],
        answer: "",
      },

      {
        id: 2,
        question: "A fatty acid that has two double bonds between carbon atoms is called",
        options: ["A saturated fatty acid.", "A desaturated fatty acid.", "A monounsaturated fatty acid.", "A polyunsaturated fatty acid.", "An eicosanoid."],
        answer: "",
      },
      {
        id: 3,
        question: "Which of the following molecules is not a component of a phospholipid?",
        options: ["Cholesterol", "Glycerol", "Phosphate", "Fatty acid"],
        answer: "",
      },
      {
        id: 4,
        question: "Hydrogen bonding between the amino hydrogen of one amino acid and the carboxyl oxygen of another amino acid in a protein is responsible for",
        options: ["Primary protein structure.", "Secondary protein structure.", "Tertiary protein structure.", "Quaternary protein structure."],

        answer: "",
      },
      {
        id: 5,
        question: "Which of the following nucleic acids is not a pyrimidine?",
        options: ["Cytosine", "Thymine", "Uracil", "Adenine"],
        answer: "",
      },

      {
        id: 6,
        question: "Glycogen and lipids are stored",
        options: ["As inclusions in the cytosol.", "In storage vesicles.", "In secretory vesicles.", "In lysosomes.", "In the nucleolus."],
        answer: "",
      },
      {
        id: 7,
        question: "Which organelle produces most of a cell’s ATP?",
        options: ["Nucleus", "Peroxisome", "Golgi apparatus", "Mitochondrion", "Smooth endoplasmic reticulum"],
        answer: "",
      },
      {
        id: 8,
        question: "Which cell-to-cell adhesion allows quick transmission of electrical signals between adjacent cells?",
        options: ["Desmosome", "Gap junction", "Tight junction", "All of the above"],
        answer: "",
      },

      {
        id: 9,
        question: "To initiate transcription of DNA, the ­enzyme RNA polymerase binds to the",
        options: ["Initiator codon.", "Termination codon.", "Promoter sequence.", "Centromere.", "Leader sequence."],
        answer: "",
      },
      {
        id: 10,
        question: "The base sequence on tRNA that ­recognizes the mRNA codon by the law of  complementary base pairing is called the",
        options: ["tRNA codon.", "Anticodon.", "Amino codon.", "Leader codon.", "Initiator codon."],
        answer: "",
      },
      {
        id: 11,
        question: "For proteins to be synthesized in ­association with the rough endoplasmic reticulum, the leader sequence must bind to a            on the membrane of the ­endoplasmic reticulum.",
        options: ["transport vesicle", "secretory vesicle", "coated vesicle", "signal recognition protein", "promoter"],
        answer: "",
      },

      {
        id: 12,
        question: "During replication, which enzyme causes DNA to uncoil?",
        options: ["DNA polymerase", "RNA polymerase", "DNA kinase", "Helicase", "DNA ligase"],

        answer: "",
      },

      {
        id: 13,
        question: "What is a lagging strand?",
        options: ["A sequence of nucleotides in DNA that binds RNA polymerase", "A sequence of amino acids at the ­beginning of a polypeptide that directs the polypeptide to its destination", "The newly synthesized DNA strand formed by ligation of Okazaki fragments", "The protein filaments that extend between two cells to form desmosomes", "The protein filaments that form cilia"],
        answer: "",
      },
      {
        id: 14,
        question: "During which phase of mitosis is the mitotic spindle developing?",
        options: ["Prophase", "Metaphase", "Anaphase", "Telophase", "Prometaphase"],
        answer: "",
      },
      {
        id: 15,
        question: "During which phase of mitosis do the chromosome pairs move to opposite poles of the cell?",
        options: ["Prophase", "Metaphase", "Anaphase", "Telophase", "Prometaphase"],

        answer: "",
      },

      {
        id: 16,
        question: "Monosaccharides are (polar/nonpolar/amphipathic) molecules.",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 17,
        question: "Triglycerides are (polar/nonpolar/amphipathic) molecules.",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 18,
        question: "The precursor molecule for all steroids is           .",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 19,
        question: "According to the law of complementary base pairing, in RNA, adenine base pairs with           .",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 20,
        question: "Transmembrane proteins are examples of (integral/peripheral) membrane proteins.",
        options: ["", "", "", ""],
        answer: "",
      },

      {
        id: 21,
        question: "The membrane of the smooth endoplasmic reticulum is continuous with the membrane of the Golgi apparatus. (true/false)",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 22,
        question: "Microfilaments provide structural support for hairlike projections of the plasma membrane called           .",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 23,
        question: "The proteins that form gap junctions between two adjacent cells are called           .",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 24,
        question: "A section of DNA that codes for a specific protein is called a           .",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 25,
        question: "The mRNA codon that is transcribed from the DNA triplet ATC is           .",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 26,
        question: "More than one codon may code for a single amino acid. (true/false)",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 27,
        question: "The first section of a polypeptide to be translated is called the _          ; it is ­important in directing the translated protein to its final destination.",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 28,
        question: "Replication of DNA occurs during (interphase/mitosis).",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 29,
        question: "Division of the cytoplasm into two daughter cells during cell division is called           .",
        options: ["", "", "", ""],
        answer: "",
      },

      {
        id: 30,
        question: "The chemical that tags proteins for destruction in a cell is called           .",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  {
    slug: "physiology",
    title: "Physiology Chapter 3 - Cell Metabolism",
    description: "Physiology Chapter 3 - Cell Metabolism",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "When glucose is oxidized in cells, oxygen reacts with",
        options: ["Carbon to form CO₂", "Hydrogen to form H₂O", "Components of the electron transport chain.", "Inorganic phosphate to form ATP.", "Acetyl CoA to form acetate."],
        answer: "",
      },
      {
        id: 2,
        question: "Which of the following illustrates substrate-level phosphorylation?  (P - phosphate, X - metabolic intermediate)",
        options: ["ATP → ADP + Pᵢ", "ADP + Pᵢ → ATP", "X - P → X + P", "X - P + ADP → X + ATP"],
        answer: "",
      },
      {
        id: 3,
        question: "The enzyme pyruvate dehydrogenase, which converts pyruvate to acetyl CoA, can be activated or inactivated by phosphorylation or dephosphorylation. This is an example of",
        options: ["Allosteric regulation.", "Substrate-level phosphorylation.", "Oxidative phosphorylation.", "Saturation.", "Covalent regulation."],
        answer: "",
      },
      {
        id: 4,
        question: "The following reactions occur in conjunction with step 5 of the Krebs cycle:\nGDP + Pᵢ → GTP\nGTP + ADP → GDP + ATP\nThe net reaction in this process is",
        options: ["Pᵢ + GTP → GDP", "Pᵢ + GDP → GTP", "GTP + ADP → GDP + ATP", "ADP + Pᵢ → ATP", "GDP + Pᵢ → ATP"],
        answer: "",
      },
      {
        id: 5,
        question: "Which of the following reactions is an example of hydrolysis?",
        options: ["Amino acid 1 + amino acid 2 → dipeptide + H₂O", "Lactose + H₂O → glucose + galactose", "Glucose1-phosphate → gludcose- 6-phosphate", "Glucose + 6O₂ → 6O₂ + 6H₂O", "Water (liquid) + heat → water (steam)"],
        answer: "",
      },
      {
        id: 6,
        question: "Which of the following classes of organic molecules can be used to synthesize triglycerides?",
        options: ["Carbohydrates only", "Lipids only", "Proteins only", "Carbohydrates and lipids only", "Carbohydrates, lipids, and proteins"],
        answer: "",
      },
      {
        id: 7,
        question: "Enzymes increase the rate of an enzyme-catalyzed reaction by",
        options: ["Increasing the activation energy barrier.", "Decreasing the activation energy barrier.", "Increasing the free energy of the reactant.", "Increasing the free energy of the product.", "Decreasing the free energy of the reactant."],
        answer: "",
      },

      {
        id: 8,
        question: "In the following reaction, NAD⁺ receives electrons from the substance AH₂:\nNAD⁺ + AH₂ E→ NADH + H⁺ + A\nwhere E is the enzyme that catalyzes the reaction. In this reaction, which substance undergoes oxidation?",
        options: ["NAD⁺", "NADH", "AH2", "A"],
        answer: "",
        // notes: The has a symbol issue.  The E should be above the right arrow.
      },
      {
        id: 9,
        question: "Which of the following is carried out by enzymes in the cytosol?",
        options: ["Glycolysis", "Linking step", "Krebs cycle", "Oxidative phosphorylation", "Chemiosmotic coupling"],
        answer: "",
      },
      {
        id: 10,
        question: "In which of the following is carbon dioxide generated?",
        options: ["Glycolysis only", "Linking step only", "Krebs cycle only", "Glycolysis and Krebs cycle", "Linking step and Krebs cycle"],
        answer: "",
      },

      {
        id: 11,
        question: "The removal of hydrogen atoms from a molecule is an example of (oxidation/reduction).",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "The forward rate of a reaction can be ­increased by increasing the concentrations of the (reactants/products).",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 13,
        question: "For a reaction to proceed spontaneously in the forward direction, the energy change must be (positive/negative).",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 14,
        question: "Liver and muscle cells are able to store glucose in the form of a branched-chain molecule called           .",
        options: ["", "", "", ""],
        answer: "",
      },

      {
        id: 15,
        question: "Allosteric regulation involves the ­attachment of a modulator molecule to an enzyme by means of a covalent bond. (true/false)",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 16,
        question: "Glycogenolysis is an example of a ­catabolic reaction. (true/false)",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 17,
        question: "The conversion of noncarbohydrate ­precursors into glucose is called           .",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 18,
        question: "When ATP is synthesized using energy released in glucose oxidation, most of the ATP is synthesized by oxidative ­phosphorylation. (true/false)",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 19,
        question: "When a substrate molecule binds to an enzyme, it binds to a particular location known as the (active/regulatory) site.",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 20,
        question: "Unless a substance is an essential nutrient, it is not necessary for proper cellular function. (true/false)",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 21,
        question: "An enzyme catalyzes a reaction at the (lowest/highest) possible rate when it is 100% saturated.",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 22,
        question: "Conversion of pyruvate to lactate occurs under (aerobic/anaerobic) conditions.",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  {
    slug: "physiology",
    title: "Physiology Chapter 4 - Cell Membrane Transport",
    description: "Physiology Chapter 4 - Cell Membrane Transport",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "Which of the following is located in greater concentration inside cells compared to outside?",
        options: ["Potassium ions", "Sodium ions", "Proteins", "Potassium and sodium ions are both located in greater concentration inside cells.", "Potassium ions and proteins are both located in greater concentration inside cells."],
        answer: "",
      },
      {
        id: 2,
        question: "If a certain anion is located in greater concentration inside the cell and a negative membrane potential exists, then which of the following statements is true?",
        options: ["The electrical force on the anion tries to move it into the cell.", "The chemical force on the anion tries to move it into the cell.", "The equilibrium potential for the ­anion is a positive value.", "Both a and c are correct.", "All of the above are correct."],
        answer: "",
      },
      {
        id: 3,
        question: "Given that the potassium equilibrium potential is -94 mV and the sodium equilibrium potential is +60 mV, which of the following statements is true for forces acting on sodium and potassium when a cell is at -70 mV?",
        options: ["The electrochemical gradient for Na⁺ tries to move it into the cell.", "The electrochemical gradient for K⁺ tries to move it into the cell.", "Both a and b are correct.", "Neither a nor b is correct."],
        answer: "",
      },

      {
        id: 4,
        question: "When the membrane potential is equal to the equilibrium potential of Na⁺ (Eₙₐ = + 60 mV)",
        options: ["Na⁺ moves into a cell down its electrochemical gradient.", "Na⁺ moves out of a cell down its electrochemical gradient.", "The net flux of Na⁺ is zero because it is at equilibrium."],
        answer: "",
      },
      {
        id: 5,
        question: "The osmotic pressure of a solution ­depends on",
        options: ["The concentrations of all solute particles contained in it.", "The concentrations of all permeant solute particles contained in it.", "The concentrations of all impermeant solute particles contained in it.", "The pressure exerted on the solution by the atmosphere.", "The volume of water in which the solute particles are dissolved."],
        answer: "",
      },
      {
        id: 6,
        question: "Assuming that only impermeant solutes are present, which of the following will occur when a cell is placed in a solution whose osmolarity is 200 mOsm?",
        options: ["Water will move into the cell.", "Water will move out of the cell.", "Water will not cross the cell membrane."],
        answer: "",
      },

      {
        id: 7,
        question: "A solution is hypotonic if",
        options: ["The concentration of all solutes contained in it is less than 300 mOsm.", "The concentration of all permeant solutes contained in it is less than 300 mOsm.", "The concentration of all impermeant solutes contained in it is less than 300 mOsm.", "Osmolarity is less than 300 mOsm."],
        answer: "",
      },
      {
        id: 8,
        question: "Movement of Na⁺ in sodium-linked glucose transport, in sodium-proton exchange, and via the sodium-potassium pump are all examples of",
        options: ["Primary active transport.", "Passive transport.", "Mediated transport.", "Simple diffusion."],
        answer: "",
      },
      {
        id: 9,
        question: "What do active transporters and carriers have in common?",
        options: ["They both transport molecules up electrochemical gradients.", "They both transport molecules down electrochemical gradients.", "They both transport lipid-soluble ­substances preferentially.", "They both utilize ATP to transport molecules.", "They both are specific for certain molecules."],
        answer: "",
      },

      {
        id: 10,
        question: "A leukocyte—a type of white blood cell—fights bacterial infections by sending out projections of its plasma membrane that surround an invading bacterium. The membrane then fuses together, entrapping the bacterium in a vesicle inside the cell. This is an example of",
        options: ["Exocytosis.", "Transcytosis.", "Receptor-mediated endocytosis.", "Pinocytosis.", "Phagocytosis."],
        answer: "",
      },
      {
        id: 11,
        question: "Which of the following transport mechanisms functions to bring a specific extracellular substance into the cell?",
        options: ["Receptor-mediated endocytosis", "Pinocytosis", "Phagocytosis", "Both a and c", "All of the above"],
        answer: "",
      },
      {
        id: 12,
        question: "Substances that cross cell membranes by simple diffusion are mostly _____.",
        options: ["hydrophilic", "hydrophobic"],
        answer: "",
      },

      {
        id: 13,
        question: "In simple diffusion, an uncharged solute always flows from a region of higher concentration to a region of lower concentration.",
        options: ["true", "false"],
        answer: "",
      },
      {
        id: 14,
        question: "A concentration gradient is also referred to as a(n)            driving force.",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 15,
        question: "When a membrane potential is positive, there is an excess of cations over anions inside the cell.",
        options: ["true", "false"],
        answer: "",
      },

      {
        id: 16,
        question: "A cell will shrink if it is placed in a hypertonic solution.",
        options: ["true", "false"],
        answer: "",
      },
      {
        id: 17,
        question: "When water diffuses across a membrane, it normally flows from a region of higher osmotic pressure to a region of lower osmotic pressure.",
        options: ["true", "false"],
        answer: "",
      },
      {
        id: 18,
        question: "Junctions connecting adjacent epithelial cells are            junctions.",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  {
    slug: "physiology",
    title: "Physiology Chapter 5 - Chemical Messengers",
    description: "Physiology Chapter 5 - Chemical Messengers",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "Arachidonic acid is the raw material for the synthesis of",
        options: ["Amines.", "Thyroid hormones.", "Eicosanoids.", "Steroids.", "Peptides."],
        answer: "",
      },

      {
        id: 2,
        question: "Epinephrine is a(n)",
        options: ["Amino acid.", "Steroid.", "Eicosanoid.", "Adrenocorticoid.", "Catecholamine."],
        answer: "",
      },
      {
        id: 3,
        question: "Most chemical messengers fall into which of the following chemical classes?",
        options: ["Amines", "Amino acids", "Peptides/proteins", "Eicosanoids", "Steroids"],
        answer: "",
      },
      {
        id: 4,
        question: "All amino acid chemical messengers function as",
        options: ["Paracrines.", "Autocrines.", "Neurohormones.", "Neurotransmitters.", "Hormones."],
        answer: "",
      },
      {
        id: 5,
        question: "All steroid chemical messengers function as",
        options: ["Paracrines.", "Autocrines.", "Neurohormones.", "Neurotransmitters.", "Hormones."],
        answer: "",
      },
      {
        id: 6,
        question: "Which of the following is likely to cause an increase in intracellular cAMP levels?",
        options: ["Stimulation of phosphodiesterase activity", "Activation of an inhibitory G protein targeting adenylate cyclase", "Binding of chemical messengers to enzyme-linked receptors", "Binding of chemical messengers to receptor-operated channels", "Stimulation of adenylate cyclase activity"],
        answer: "",
      },
      {
        id: 7,
        question: "Which of the following messenger classes bind to intracellular receptors?",
        options: ["Catecholamines only", "Peptides only", "Steroids only", "Both catecholamines and steroids", "Both peptides and steroids"],
        answer: "",
      },
      {
        id: 8,
        question: "The response of a target cell to a messenger depends on which of the following?",
        options: ["Concentration of the messenger", "Concentration of receptors on the target cell", "Affinity of the receptor for the messenger", "Both a and c", "All of the above"],
        answer: "",
      },
      {
        id: 9,
        question: "G proteins are involved whenever",
        options: [
          "Binding of messenger molecules to cell surface receptors triggers a target cell response.",
          "Binding of ligand molecules to cell surface receptors triggers activation or inhibition of enzymes.",
          "Binding of ligand molecules to cell surface receptors triggers synthesis of second messengers.",
          "Binding of ligand molecules to cell surface receptors triggers a change in membrane permeability to ions.",
          "All of the above are true.",
        ],
        answer: "",
      },
      {
        id: 10,
        question: "Which enzyme catalyzes the synthesis of diacylglycerol?",
        options: ["Adenylate cyclase", "Tyrosine kinase", "Phospholipase C", "Protein kinase", "Phosphoprotein phosphatase"],
        answer: "",
      },
      {
        id: 11,
        question: "Cells that secrete a messenger are called           .",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "An (endocrine/autocrine) agent acts on the same cell that secretes it.",
        options: ["endocrine", "autocrine"],
        answer: "",
      },
      {
        id: 13,
        question: "Endocrine glands release  (neurotransmitter/hormone) into the           , where it travels to the target cell.",
        options: ["neurotransmitter", "hormone"],
        answer: "",
      },
      {
        id: 14,
        question: "When a G protein is activated, it releases a (GDP/GTP) and binds a (GDP/GTP).",
        options: [],
        answer: "",
      },
      {
        id: 15,
        question: "The enzyme that catalyzes conversion of ATP to cAMP is called           .",
        options: [],
        answer: "",
      },
      {
        id: 16,
        question: "Following activation of the phosphatidylinositol system, (IP₃/DAG) liberates calcium from intracellular stores.",
        options: [],
        answer: "",
      },
      {
        id: 17,
        question: "(Lipophilic/Lipophobic) messengers  exert their effect on target cells by  activating or inactivating specific genes.",
        options: [],
        answer: "",
      },
      {
        id: 18,
        question: "Examples of locally acting chemical  messengers are (steroids/eicosanoids).",
        options: [],
        answer: "",
      },
      {
        id: 19,
        question: "Cytosolic calcium often exerts its effect by binding to cytosolic (protein kinase C/calmodulin).",
        options: [],
        answer: "",
      },
      {
        id: 20,
        question: "Lipophobic messengers are secreted by (exocytosis/diffusion across the cell membrane).",
        options: [],
        answer: "",
      },
      {
        id: 21,
        question: "Amino acids are (hormones/neurotransmitters).",
        options: [],
        answer: "",
      },
      {
        id: 22,
        question: "The (nervous system/endocrine system) is a more rapid means of communication.",
        options: [],
        answer: "",
      },
    ],
  },

  {
    slug: "physiology",
    title: "Physiology Chapter 6 - Endocrine System: Endocrine Glands and Hormone Actions",
    description: "Physiology Chapter 6 - Endocrine System: Endocrine Glands and Hormone Actions",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  // Epinephrine is released from which area of the adrenal gland?
  // Zona reticularis
  // Zona fasciculata
  // Zona glomerulosa
  // Medulla

  // Which of the following is an accurate statement regarding regulation of pituitary hormone secretion by the hypothalamus?
  // All pituitary hormones are regulated by tropic hormones from the hypothalamus.
  // All anterior pituitary hormones are regulated by a releasing hormone and a release-inhibiting hormone from the hypothalamus.
  // All posterior pituitary hormones are regulated by a releasing hormone from the hypothalamus.
  // All anterior pituitary hormones are tropic hormones.
  // None of the above is accurate.

  // Most hypothalamic and pituitary hormones are
  // Amino acids.
  // Peptides/proteins.
  // Steroids.
  // Eicosanoids.
  // Catecholamines.

  // Gonadotropin releasing hormone stimulates release of which of the following from the anterior pituitary?
  // Sex hormones
  // Follicle stimulating hormone
  // Luteinizing hormone
  // Both follicle stimulating hormone and luteinizing hormone

  // Which of the following adrenal hormones is secreted by chromaffin cells?
  // Cortisol
  // Aldosterone
  // Epinephrine
  // Androgens

  // In primary hyposecretion of thyroid hormones,
  // Levels of thyroid hormones in the blood decrease.
  // Levels of TRH in the blood decrease.
  // Levels of TSH in the blood decrease.
  // All of the above are true.
  // None of the above is true.

  // Which of the following organs secretes glucagon?
  // Liver
  // Anterior pituitary
  // Posterior pituitary
  // Adrenal gland
  // Pancreas

  // Which of the following is an example of permissiveness?
  // Glucagon increases blood glucose levels, and insulin decreases blood glucose levels.
  // Glucagon, epinephrine, and cortisol all increase blood glucose levels.
  // Estrogen stimulates synthesis of progesterone receptors in the endometrium.
  // All of the above.
  // None of the above.

  // (Endocrine/Exocrine) glands secrete hormones.

  // Neural input to the hypothalamus is involved in regulating secretion of hormones by both lobes of the pituitary. (true/false)

  // Epinephrine is secreted by the adrenal (medulla/cortex).

  // Thyroid hormones are classified as (amines/steroids).

  // Lipophobic messengers are secreted by (exocytosis/diffusion across the cell membrane).

  // Calcitonin is secreted by the (thyroid gland/parathyroid gland).

  {
    slug: "physiology",
    title: "Physiology Chapter 7 - ",
    description: "Physiology Chapter 7 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  // Depolarization of a neuron to threshold stimulates
  // Opening of sodium channels.
  // Delayed closing of sodium channels.
  // Delayed opening of potassium channels.
  // Both a and c.
  // All of the above.

  // Neurotransmitters are released most commonly from the
  // Cell body.
  // Dendrites.
  // Axon terminals.
  // Axon hillock.

  // If a cation is equally distributed across the cell membrane (that is, its concentration inside the cell equals its concentration outside the cell), then which of the following statements is false?
  // At −70 mV, the chemical force on the ion is zero.
  // At −70 mV, the electrical force on the ion acts to move it into the cell.
  // At +30 mV, the chemical force on the ion is zero.
  // The equilibrium potential for the ion is zero.
  // At −70 mV, the electrochemical force on the ion acts to move it out of the cell.

  // The depolarization phase of an action ­potential is caused by the
  // Opening of potassium channels.
  // Closing of potassium channels.
  // Opening of sodium channels.
  // Closing of sodium channels.

  // During the relative refractory period, a second action potential
  // Cannot be elicited.
  // Can be elicited by a threshold stimulus.
  // Can be elicited by a subthreshold stimulus.
  // Can be elicited by a suprathreshold stimulus.

  // Nerves are found
  // In the central nervous system.
  // In the peripheral nervous system.
  // Both a and b.
  // Neither a nor b.

  // If the membrane potential of a neuron ­becomes more negative than it was at rest, then the neuron is                 . In this state, the neuron is                  excitable.
  // depolarized; more
  // hyperpolarized; more
  // depolarized; less
  // hyperpolarized; less

  // Oubain is a poison that blocks the Na⁺/K⁺ pump. If this pump is blocked, then the concentration of potassium inside the cell would
  // Increase.
  // Decrease.
  // Not change.

  // If potassium concentrations in the extracellular fluid of the brain increased, activity in the brain would
  // Increase.
  // Decrease.
  // Not change.

  // Which of the following neurons are part of the peripheral nervous system?
  // Motor neurons innervating skeletal muscles
  // Parasympathetic neurons
  // Sympathetic neurons
  // All of the above

  // Which of the following axons exhibits the greatest conduction velocity?
  // An unmyelinated axon with diameter 5 μm
  // A myelinated axon with diameter 5 μm
  // An unmyelinated axon with diameter 20 μm
  // A myelinated axon with diameter 20 μm

  // Which of the following best describes the status of sodium channels at the resting membrane potential?
  // Activation gates are open and inactivation gates are closed.
  // Activation gates are closed and inactivation gates are open.
  // Activation gates and inactivation gates are closed.
  // Activation gates and inactivation gates are open.

  // Which of the following is not a part of the efferent division of the nervous system?
  // Parasympathetic nervous system
  // Sympathetic nervous system
  // Motor neurons
  // Sensory receptors

  // Of the following ions, which is (are) ­located in greater concentration inside the cell?
  // Sodium only
  // Potassium only
  // Chloride only
  // Sodium and potassium
  // Potassium and chloride

  // Which of the following statements about graded potentials is false?
  // The magnitude of a graded potential varies with the strength of the stimulus.
  // Some graded potentials are ­hyperpolarizations; others are depolarizations.
  // Graded potentials are produced at ligand-gated ion channels.
  // Graded potentials can sum over space and time.
  // Graded potentials are limited in ­duration by the refractory period.

  // What are the subdivisions of the peripheral nervous system?

  // Information from the periphery is brought to the central nervous system by (afferent/efferent) pathways.

  // Which cell type is more abundant in the nervous system—glial cells or neurons?

  // Voltage-gated calcium channels are located in which region(s) of a neuron?

  // (Schwann cells/Oligodendrocytes) form myelin in the peripheral nervous system, and (Schwann cells/oligodendrocytes) form myelin in the central nervous system.

  // Myelin (increases/decreases) conduction velocity in axons.

  // If an anion is present in greater concentration outside the cell compared to inside the cell, would the equilibrium ­potential for that anion be positive, ­negative, or zero?

  // Which ion is closer to equilibrium at the resting membrane potential of -70 mV: sodium or potassium?

  // In the peripheral nervous system, cell bodies of afferent neurons are located in           .

  // The electrochemical force for potassium ions when the membrane potential is at the peak of an action potential is (greater than/less than) the electrochemical force for potassium ions when the membrane potential is at rest.

  // Both sodium and potassium channels have inactivation gates that close shortly after the activation gates open. (true/false)

  // When sodium inactivation gates are closed, a second action potential is impossible. (true/false)

  // In myelinated axons, action potentials are propagated by            conduction.

  // The Na⁺/K⁺ pump causes the repolarization phase of an action potential. (true/false)

  // When a neuron is at the peak of an action potential (+30 mV) the direction of the electrical force for potassium ions is (into/out of) the cell.

  {
    slug: "physiology",
    title: "Physiology Chapter 8 - ",
    description: "Physiology Chapter 8 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  // Suppose that the electrochemical force for anion X(X⁻) acts to move the anion out of the cell. If a neurotransmitter binding to its receptor opened channels for X⁻ on the postsynaptic cell, then the response would
  // Be an EPSP.
  // Be an IPSP.
  // Be stabilization of the membrane.
  // Not occur.

  // Suppose that all the calcium could be removed from the extracellular fluid surrounding a neuron. Such removal would inhibit the ability of a neuron to
  // Produce action potentials.
  // Release neurotransmitter.
  // Respond to the binding of a neurotransmitter to its receptor.
  // Degrade neurotransmitters.

  // Synaptic vesicles
  // Store calcium.
  // Release neurotransmitters by exocytosis.
  // Degrade neurotransmitters.
  // Form gap junctions.
  // Synthesize neurotransmitters.

  // If sodium channels closed in response to a stimulus, then
  // The neuron would be depolarized.
  // The neuron would be hyperpolarized.
  // The membrane potential would be stabilized.
  // A second messenger would be produced.
  // The neuron would remain at rest.

  // A fast EPSP is most commonly produced by
  // The opening of sodium-selective channels.
  // The opening of potassium-selective channels.
  // The opening of chloride channels.
  // The opening of channels selective for both sodium and potassium.
  // The opening of calcium-selective channels.

  // The enzyme that catalyzes the synthesis of acetylcholine is
  // Adenylate cyclase.
  // Choline acetyl transferase.
  // Monoamine oxidase.
  // Acetylcholinesterase.
  // Catechol-O-methyltransferase.

  // Which of the following neurotransmitters is a biogenic amine but not a catecholamine?
  // Norepinephrine
  // Serotonin
  // Dopamine
  // Epinephrine

  // Which of the following is most likely to occur at an axoaxonic synapse?
  // An EPSP
  // An IPSP
  // Stabilization of the membrane potential
  // Temporal summation
  // Presynaptic modulation

  // What happens to the concentration of neurotransmitter in the synaptic cleft when the frequency of action potentials increases in the presynaptic neuron?
  // It increases
  // It decreases
  // It remains constant

  // The EPSPs from two different synapses occur at the same time and cause a larger depolarization than either one alone can cause. This is an example of
  // Membrane stabilization.
  // Presynaptic inhibition.
  // Presynaptic facilitation.
  // Temporal summation.
  // Spatial summation.

  // At electrical synapses, which type of junction exists between the two cells?

  // When the opening of ion channels allows both sodium and potassium ions to move through, no change in membrane potential occurs because sodium moves into the cell and potassium moves out of the cell. (true/false)

  // Neurotransmitter receptors are found at (chemical/electrical) synapses.

  // Whether a synapse is excitatory or inhibitory is determined by the mechanism of coupling between the neurotransmitter receptor and ion channels in the postsynaptic cell. (true/false)

  // The synaptic delay includes the time it takes for an action potential to travel from the trigger zone of a presynaptic cell to the axon terminal. (true/false)

  // A given neurotransmitter might be excitatory at one synapse and inhibitory at another synapse. (true/false)

  // Given that release of an inhibitory neurotransmitter is altered by presynaptic facilitation, the response in the postsynaptic cell will be a (larger/smaller) degree of hyperpolarization.

  // The response to a neurotransmitter is faster at (ionotropic/metabotropic) receptors.

  // The enzymes that catalyze the degradation of catecholamines are            and           .

  // Adenylate cyclase catalyzes the formation of           .

  {
    slug: "physiology",
    title: "Physiology Chapter 9 - ",
    description: "Physiology Chapter 9 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  // Touch perception requires that sensory neurons from the skin transmit information to
  // The basal nuclei.
  // The somatosensory cortex.
  // The hypothalamus.
  // The limbic system.
  // The hippocampus.

  // Which of the meninges is closest to the neural tissue?
  // Dura mater
  // Arachnoid mater
  // Pia mater

  // At rest, the brain accounts for how much of oxygen consumption within the body?
  // 2%
  // 5%
  // 20%
  // 40%
  // 50%

  // Most of the fibers connecting the left and right cerebral hemispheres are located in the
  // Hippocampus.
  // Corpus callosum.
  // Corticospinal tract.
  // Central canal.
  // Cerebral ventricles.

  // All spinal nerves contain
  // Afferent fibers.
  // Efferent fibers.
  // Both afferent and efferent fibers.
  // Neither afferent nor efferent fibers.

  // The origin of neurons of the corticospinal tract is the
  // Ventral horn of the spinal cord.
  // Somatosensory cortex.
  // Primary motor cortex.
  // Cerebellum.
  // Thalamus.

  // Which of the following is not a component of the limbic system?
  // Hippocampus
  // Cerebral cortex
  // Amygdala
  // Midbrain
  // Hypothalamus

  // The circadian rhythm is established by which brain area?
  // Suprachiasmatic nucleus
  // Amygdala
  // Thalamus
  // Occipital lobe of the cerebral cortex
  // Pons

  // Parkinson’s disease is caused by loss of dopaminergic innervation of the
  // Cerebellum.
  // Basal nuclei.
  // Brainstem.
  // Primary motor cortex.
  // Thalamus.

  // Which of the following reflexes is monosynaptic?
  // Withdrawal reflex
  // Crossed-extensor reflex
  // Muscle spindle stretch reflex
  // Both a and c
  // All of the above

  // The area of the brain important for the maintenance of posture is the
  // Primary motor cortex.
  // Basal nuclei.
  // Brainstem.
  // Cerebellum.
  // Limbic system.

  // Long-term potentiation is
  // A prolonged increase in synaptic activity at a given synapse.
  // The formation of new synapses.
  // Memory from more than 10 years ago.
  // Activated through the ascending reticular activating system.
  // All of the above.

  // Where is cerebrospinal fluid synthesized?

  // Which type of junction between the endothelial cells of brain capillaries produces the blood-brain barrier?

  // Myelinated axons are found in (gray/white) matter.

  // Somatic efferents originate in the (dorsal/ventral) horn of the spinal cord.

  // The major function of the (cerebrum/cerebellum) is to coordinate body movements.

  // Which three structures make up the brainstem?

  // Which side of the brain is generally associated with creativity?

  // What are the two main structures of the diencephalon?

  // What is the major sensory relay nucleus to the cortex?

  // The area of the brain most closely associated with fear is the           .

  // The           system is associated with emotions, learning, and memory.

  // The ability to recall information when taking physiology exams is an example of            memory.

  // The afferents that activate reflex motor actions are different from those that activate ascending tracts to communicate a sensory input to the brain. (true/false)

  {
    slug: "physiology",
    title: "Physiology Chapter 10 - ",
    description: "Physiology Chapter 10 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  // The strength of a stimulus is coded by
  // The size of the receptor potential.
  // The size of the action potentials.
  // The frequency of action potentials.
  // Both a and c.
  // All of the above.

  // The mechanism by which a receptor converts a stimulus into an electrical signal is called
  // Conduction.
  // Convection.
  // Transduction.
  // Modulation.
  // Propagation.

  // In lateral inhibition,
  // The nervous system produces contrast to emphasize more-important information over less-important information.
  // Afferent neurons with neighboring receptive fields inhibit each other’s communication to second-order neurons.
  // The ability to locate the site of a stimulus is enhanced.
  // Both a and c.
  // All of the above.

  // Which of the following observations best illustrates the concept of the labeled line?
  // When a boxer gets punched in the eye, he perceives light.
  // Rotation of the head stimulates certain receptors in the vestibular system but not those in the visual system.
  // Information from different photoreceptors converges on a single ganglion cell that projects to the lateral geniculate nucleus.
  // Hair cells in the cochlea are stimulated by sound vibrations over a wide range of frequencies.

  // Which of the following best illustrates the concept of an adequate stimulus?
  // When a boxer gets punched in the eye, he perceives light.
  // Rotation of the head stimulates certain receptors in the vestibular system but not those in the visual system.
  // Information from different photoreceptors converges on a single ganglion cell that projects to the lateral geniculate nucleus.
  // Hair cells in the cochlea are stimulated by sound vibrations over a wide range of frequencies.

  // Rubbing a sore area can decrease the sensation of pain by
  // Activating the endogenous analgesia systems.
  // Referring the pain to another area of the body.
  // Activating larger-diameter afferents, which activate an inhibitory interneuron, which inhibits the second-order neurons for pain.
  // Decreasing the number of action potentials in nociceptor afferents.
  // Presynaptic inhibition of substance P release.

  // In the dorsal column–medial lemniscal pathway,
  // Proprioception information is transmitted to the brain.
  // The first-order neuron communicates to the second-order neuron in the dorsal horn of the spinal cord.
  // The pathway crosses to the contralateral side in the spinal cord.
  // Both a and c.
  // All of the above.

  // Which of the following is the correct name of the pathway from the retina to the optic chiasm?
  // Optic tract
  // Optic radiations
  // Optic nerve
  // Optic disk

  // Which of the following is the correct name of the pathway from the lateral geniculate nucleus of the thalamus to the visual cortex?
  // Optic tract
  // Optic radiations
  // Optic nerve
  // Optic chiasm
  // Optic disk

  // Where would you expect to find the ascending tracts for somatosensory information?
  // In the white matter of the spinal cord
  // In a spinal nerve
  // In the gray matter of the spinal cord
  // None of the above

  // The ability to perceive different frequencies in sound vibrations is based on the fact that
  // The stereocilia of any given hair cell respond to only one frequency.
  // Different areas of the basilar membrane resonate at different frequencies, such that sound of a particular frequency causes only a certain region of the membrane to vibrate.
  // The frequency of action potentials in the cochlear nerve varies in proportion to the frequency of a sound stimulus.

  // The stereocilia for hearing are exposed to
  // Endolymph in the scala vestibuli.
  // Perilymph in the scala vestibuli.
  // Endolymph in the scala media.
  // Perilymph in the scala media.
  // Endolymph in the scala tympani.

  // The parasympathetic nervous system causes
  // Contraction of the radial muscle of the iris.
  // Contraction of the ciliary muscle.
  // Pupillary dilation.
  // Both a and c.
  // All of the above.

  // The two types of thermoreceptors are            and           .

  // Receptors are most sensitive to energy from the            stimulus.

  // A phasic receptor adapts (quickly/ slowly) to a constant stimulus.

  // The three types of nociceptors are           ,           , and           .

  // Information about touch detected on the left side of the body is transmitted to the brain in the dorsal columns on the            side of the spinal cord.

  // When a photopigment absorbs light, cGMP levels (increase/decrease).

  // The first neurons that support production of action potentials in the visual pathway are (photoreceptors/bipolar cells/ganglion cells).

  // The pitch of sound vibration reflects its (amplitude/frequency).

  // A hair cell in the cochlea can be excited by sounds of different frequencies. (true/false)

  // The process by which the lens becomes stronger for close-up vision is called           .

  // Rods and cones differ with regard to the type of (retinal/opsin) they contain.

  // A single ganglion cell will either be excited or inhibited by light applied to its visual field. (true/false)

  // The visual cortex on the left side of the brain receives information from the right eye only. (true/false)

  // Odorant molecules must be dissolved in mucus if they are to bind to olfactory receptors. (true/false)

  // A given taste receptor cell responds to only one of the four primary tastes. (true/false)

  {
    slug: "physiology",
    title: "Physiology Chapter 11 - ",
    description: "Physiology Chapter 11 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  // Effector organs of the autonomic nervous system include all of the following except
  // Heart muscle.
  // Smooth muscle in the pupils of the eye.
  // Respiratory muscles.
  // Sweat glands.
  // Salivary glands.

  // According to the concept of dual innervation by the autonomic nervous system, if sympathetic activity inhibits pancreatic secretions, then the parasympathetic nervous system should
  // Inhibit pancreatic secretions as well.
  // Stimulate pancreatic secretions.
  // Have no effect on pancreatic secretions.

  // The adrenal medulla
  // Contains sympathetic postganglionic neurons.
  // Is part of the brainstem.
  // Releases epinephrine into the blood.
  // Is part of the parasympathetic nervous system.
  // Is controlled by the somatic nervous system.

  // The origin of spinal preganglionic neurons is the
  // Ventral horn of the spinal cord.
  // Dorsal horn of the spinal cord.
  // Lateral horn of the spinal cord.

  // The origin of motor neurons is the
  // Ventral horn of the spinal cord.
  // Dorsal horn of the spinal cord.
  // Lateral horn of the spinal cord.

  // Which of the following second messengers stimulates the release of calcium from intracellular stores?
  // cAMP
  // Inositol triphosphate
  // Diacylglycerol

  // How many motor neurons innervate a single skeletal muscle cell?
  // Zero
  // One
  // Several
  // Hundreds
  // Millions

  // Which branch of the autonomic nervous system is most active when the body is at rest?

  // Which part of the adrenal gland secretes epinephrine?

  // A decrease in cAMP is associated with which class of adrenergic receptor?

  // β2 adrenergic receptors have a greater affinity for (epinephrine/norepinephrine).

  {
    slug: "physiology",
    title: "Physiology Chapter 12 - ",
    description: "Physiology Chapter 12 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  // When a muscle cell is relaxed and intracellular ATP levels are normal, a crossbridge will remain in which of the following states?
  // Bound to actin and in the low-energy form
  // Bound to actin and in the high-energy form
  // In the high-energy form, with ADP and Pi bound to it
  // In the high-energy form, with ATP bound to it
  // In the low-energy form with nothing bound to it

  // During a muscle contraction, which of the following does not change length?
  // The distance between Z lines
  // The width of I bands
  // The width of A bands
  // None of the above

  // Which of the following would tend to ­reduce the concentration of lactic acid that accumulates in a muscle cell as a ­result of contractile activity?
  // Increasing the concentration of glycolytic enzymes
  // Decreasing the oxygen supply to the cell
  // Increasing the diameter of the cell
  // Increasing the number of mitochondria in the cell
  // All of the above

  // Which of the following statements is a valid generalization regarding the properties of smooth muscle?
  // Neurotransmitters can either excite or inhibit smooth muscle contraction, but any given neurotransmitter is always excitatory or inhibitory, regardless of where the muscle is located.
  // A given smooth muscle cell can respond to more than one type of neurotransmitter.
  // Smooth muscle cells are generally unresponsive to neurotransmitters of all types.
  // Smooth muscle cells can respond to neural input from the somatic or autonomic nervous systems.
  // None of the above.

  // Which of the following is not a determinant of whole muscle tension?
  // The number of muscle fibers contracting
  // The tension produced by each contracting fiber
  // The proportion of each motor unit that is contracting at any given time
  // The extent of fatigue
  // The frequency of action potentials in the motor neurons

  // In an isotonic contraction,
  // Muscle length shortens.
  // Muscle tension exceeds the force of the load.
  // The load is moved.
  // Both a and c.
  // All of the above.

  // Which of the following is true for the ­excitation-contraction coupling of all muscle types (skeletal, cardiac, and smooth)?
  // An action potential causes calcium levels in the cytosol to increase.
  // Calcium binds to troponin.
  // Thick and thin filaments slide past each other.
  // Both a and c.
  // All of the above.

  // During contraction of a skeletal muscle fiber,
  // The thick filaments contract.
  // The thin filaments contract.
  // The A band becomes shorter.
  // The I band becomes shorter.
  // All of the above.

  // Which of the following statements concerning the characteristics of different types of muscle fibers is false?
  // The higher the myosin ATPase activity, the faster the speed of contraction.
  // Muscles that have high glycolytic capacity and large glycogen stores are more resistant to fatigue.
  // Oxidative types of muscle fibers contain myoglobin.
  // Oxidative fibers have a richer blood supply.
  // Larger-diameter fibers can produce greater tension.

  // Which of the following muscle types contain gap junctions?
  // Skeletal muscle
  // Smooth muscle
  // Cardiac muscle
  // Both a and b
  // Both b and c

  // In skeletal muscle, when calcium is released from the sarcoplasmic reticulum, it binds to (troponin/tropomyosin) to initiate the crossbridge cycle.

  // When a muscle fiber contracts, the I bands shorten. (true/false)

  // Glycolytic fibers generate more force than oxidative fibers because they are larger in diameter. (true/false)

  // (Glycolytic/Oxidative) fibers contain high concentrations of the oxygen-binding protein myoglobin.

  // The plasma membrane of a muscle cell is also known as the           .

  // During muscle contraction, ATP hydrolysis is catalyzed by (myosin head groups/actin monomers).

  // During an (isometric/isotonic) muscle contraction, a muscle develops contractile force but does not change in length.

  // The velocity of contraction of a muscle fiber is directly related to its (diameter/myosin ATPase activity).

  // A reduction in the number of active crossbridges is responsible for a decrease in force-generating capacity of a muscle fiber that is significantly (longer/shorter) than its optimum length.

  // (Oxidative/Glycolytic) muscle fibers are more resistant to fatigue.

  // According to the size principle, the force-generating capacity of a muscle fiber increases in direct proportion to its length. (true/false)

  {
    slug: "physiology",
    title: "Physiology Chapter 13 - ",
    description: "Physiology Chapter 13 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  // Minimum aortic pressure during the cardiac cycle is attained
  // Immediately after closure of the aortic semilunar valve.
  // Immediately before opening of the aortic semilunar valve.
  // Immediately before opening of the atrioventricular valves.
  // In mid-diastole.
  // At the end of systole.

  // The first heart sound occurs when the atrioventricular valves close; thus it marks
  // The end of the ejection period.
  // The beginning of the ejection period.
  // The beginning of systole.
  // The beginning of isovolumetric contraction.
  // Both c and d are true.

  // If you know end-diastolic volume, the only other thing you need to know to determine stroke volume is
  // Afterload.
  // Ventricular contractility.
  // End-systolic volume.
  // Heart rate.
  // Cardiac output.

  // As a result of Starling’s law, stroke volume should increase following an increase in
  // Mean arterial pressure.
  // Heart rate.
  // Sympathetic activity.
  // Afterload.
  // Preload.

  // Sympathetic and parasympathetic input to the SA node influences
  // Ventricular filling time.
  // Ventricular contractility.
  // Afterload.
  // Atrial contractility.
  // All of the above.

  // Which of the following contains deoxygenated blood?
  // The right ventricle
  // The left ventricle
  // Pulmonary veins
  // The aorta
  // Both a and c are true

  // Which of the following is not normally apparent in the ECG?
  // Atrial depolarization
  // Atrial repolarization
  // Ventricular depolarization
  // Ventricular repolarization
  // None of the above

  // The second heart sound occurs when the semilunar valves close; thus it marks
  // The end of the ejection period.
  // The beginning of the ejection period.
  // The beginning of systole.
  // The beginning of isovolumetric contraction.
  // Both c and d are true.

  // The QRS complex of the ECG is due to
  // Atrial depolarization.
  // Atrial repolarization.
  // Ventricular depolarization.
  // Ventricular repolarization.
  // Opening of the AV valves.

  // As a wave of action potentials travels from the atria to the ventricles, it is momentarily delayed by about 0.1 second as a result of slow conduction through
  // The SA node.
  // The AV node.
  // The atrioventricular bundle.
  // The left and right bundle branches.
  // Purkinje fibers.

  // Which of the following is most likely to cause a decrease in the stroke volume of the left ventricle?
  // An increase in mean arterial pressure
  // An increase in end-diastolic pressure
  // An increase in end-diastolic volume
  // An increase in the activity of sympathetic nerves to the heart
  // An increase in central venous pressure

  // Left ventricular pressure and aortic pressure are virtually identical during
  // Isovolumetric contraction.
  // Isovolumetric relaxation.
  // Diastole.
  // Systole.
  // The ejection period.

  // Heart rate is normally determined by the action potential frequency in the (SA/AV) node.

  // According to Starling’s law, stroke volume should increase if end-diastolic volume (increases/decreases).

  // Heart rate is determined entirely by the inherent action potential frequency in cells of the SA node, with no external influences. (true/false)

  // Blood flow through the systemic circuit is driven by contractions of the (right/left) ventricle.

  // The valve located at the junction between the left ventricle and the aorta is an example of a(n) (atrioventricular/semilunar) valve.

  // (Isovolumetric contraction/Ejection) occurs immediately after diastole.

  // The maximum aortic pressure during the cardiac cycle is called (diastolic/systolic) pressure.

  // Under normal conditions, pressures in the left and right ventricles are equal during systole. (true/false)

  // Stroke volume and            completely determine cardiac output.

  // If end-diastolic volume does not change but end-systolic volume decreases, stroke volume (increases/decreases).

  // If end-diastolic volume does not change but end-systolic volume decreases, ejection fraction (increases/decreases).

  // If sympathetic and parasympathetic inputs are constant and end-diastolic volume increases, contractility of the ventricular myocardium increases. (true/false)

  // The period of relaxation of the heart muscle is known as           .

  // The (P/T) wave of the ECG corresponds to ventricular repolarization.

  // Action potentials generated by pacemaker cells are called pacemaker potentials. (true/false)

  {
    slug: "physiology",
    title: "Physiology Chapter 14 - ",
    description: "Physiology Chapter 14 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  // Total peripheral resistance is
  // The combined resistance of all organs in the body.
  // The resistance of capillaries located in distal body parts.
  // The combined resistance of all organs in the systemic circuit.
  // The combined resistance of all the blood vessels within an organ or tissue.
  // The resistance to blood flow through the heart.

  // Venous pressure increases
  // When blood volume decreases.
  // As a result of venous pooling.
  // As a result of an increase in venomotor tone.
  // When a person stands up.
  // All of the above.

  // Which of the following tends to promote edema in systemic tissues?
  // A decrease in the concentration of plasma proteins
  // An increase in pressure in the vena cava
  // An increase in arterial pressure
  // Leakage of proteins from capillaries into the interstitial fluid
  // All of the above

  // Which of the following tends to cause a decrease in ventricular end-diastolic volume?
  // An increase in venous pressure
  // An increase in skeletal muscle pump activity
  // A decrease in filling time
  // An increase in blood volume
  // An increase in venomotor tone

  // Which of the following blood vessels possess valves that prevent blood from flowing backward?
  // Arteries
  // Arterioles
  // Capillaries
  // Venules
  // Veins

  // Where is the greatest proportion of total blood volume at rest?
  // Heart
  // Arteries
  // Arterioles
  // Capillaries
  // Veins

  // Which of the following tends to cause a decrease in mean arterial pressure?
  // A drop in total peripheral resistance
  // An increase in stroke volume of the left ventricle
  // An increase in heart rate
  // An increase in venous return
  // An increase in sympathetic activity

  // Lymphatic capillaries differ from blood capillaries in that
  // Lymphatic capillaries have a lower permeability to water.
  // Lymphatic capillaries have a lower permeability to small solutes.
  // Lymphatic capillaries are blind ended.
  // Lymphatic capillaries are not connected to any other vessels.
  // All of the above

  // Which of the following tends to cause increased venous pooling?
  // A decrease in venomotor tone
  // A decrease in the osmotic pressure of plasma proteins
  // A decrease in mean arterial pressure
  // Exercise
  // Dehydration

  // Which of the following does not tend to increase as a result of the action of the skeletal muscle pump?
  // Venous pooling
  // Venous return
  // End-diastolic volume
  // Stroke volume
  // Cardiac output

  // If arterial pressure is elevated, baroreceptor signals trigger which of the following responses?
  // A rise in vasopressin secretion
  // A fall in plasma angiotensin II levels
  // Increased activity in sympathetic ­vasoconstrictor nerves
  // An increase in epinephrine secretion
  // Increased total peripheral resistance

  // During exercise, carbon dioxide produced by muscle cells causes vasodilation in skeletal muscle. This is an example of
  // Active hyperemia.
  // Reactive hyperemia.
  // Flow autoregulation.
  // Extrinsic control of vascular resistance.
  // Starling forces.

  // Total peripheral resistance (increases/decreases) when general vasodilation of smaller arteries and arterioles occurs in systemic tissues.

  // Veins have a (larger/smaller) compliance than arteries.

  // (An increase/A decrease) in the radius of a blood vessel raises its resistance.

  // Over the course of a day, capillary ­filtration and absorption occur at the same rate, so that the net volume of fluid filtered from capillaries is zero. (true/false)

  // An increase in the hydrostatic pressure of blood in capillaries tends to increase the rate at which fluid is filtered across capillary walls. (true/false)

  // A drop in arterial blood pressure triggers (an increase/a decrease) in sympathetic nervous activity.

  // An increase in blood flow in response to a rise in metabolic activity is referred to as active hyperemia. (true/false)

  {
    slug: "physiology",
    title: "Physiology Chapter 15 - ",
    description: "Physiology Chapter 15 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  // Which of the following is not found in plasma?
  // Albumin
  // Sodium
  // Glucose
  // Hemoglobin
  // Potassium

  // Which organ synthesizes new erythrocytes?
  // Liver
  // Spleen
  // Kidney
  // Bone Marrow
  // Heart

  // Which of the following classes of leukocytes function(s) in phagocytosis?
  // Neutrophils only
  // Basophils only
  // Lymphocytes only
  // Neutrophils and basophils
  // Basophils and lymphocytes

  // Which class of leukocytes develops into macrophages in tissue?
  // Neutrophils
  // Eosinophils
  // Basophils
  // Monocytes
  // Lymphocytes

  // Contact of blood with collagen triggers
  // Platelet aggregation.
  // Activation of the intrinsic clotting cascade.
  // Activation of the extrinsic clotting cascade.
  // Both a and b.
  // All of the above.

  // Plasma with clotting factors removed is called            .

  // During the clotting cascade,             ­converts fibrinogen to fibrin.

  //             is an enzyme that converts carbon dioxide and water into carbonic acid.

  {
    slug: "physiology",
    title: "Physiology Chapter 16 - ",
    description: "Physiology Chapter 16 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  // Which of the following is a component of internal respiration?
  // Ventilation
  // Transport of oxygen in the blood
  // Diffusion of carbon dioxide from tissues to blood
  // Diffusion of oxygen from blood to tissues
  // Oxidative phosphorylation

  // Which of the following is not a function of the conducting zone of the respiratory system?
  // Humidifying the air
  // Adjusting the air to body temperature
  // Exchanging gases between the respiratory system and the blood
  // Secreting mucus
  // Protecting the lungs from inhaled particles

  // The smallest airways in the conducting zone are
  // Terminal bronchioles.
  // Respiratory bronchioles.
  // Alveolar ducts.
  // Alveolar sacs.
  // Bronchi.

  // Surfactant is secreted by
  // Goblet cells.
  // Alveolar macrophages.
  // Type I cells.
  // Type II cells.
  // Ciliated cells.

  // The product of tidal volume and breathing frequency gives
  // Respiration rate.
  // Total lung capacity.
  // Alveolar ventilation.
  // Minute ventilation.
  // Dead space volume.

  // When all muscles of respiration are relaxed and alveolar pressure is zero, lung volume is equal to
  // Residual volume.
  // Vital capacity.
  // Functional residual capacity.
  // Tidal volume.
  // Total lung capacity.

  // Which of the following statements describes the lungs at the functional residual capacity?
  // Atmospheric, intra-alveolar, and intrapleural pressures are all equal.
  // The lungs tend to collapse due to their elastic properties.
  // The chest wall tends to collapse due to its elastic properties.
  // Both a and c are true.
  // All of the above are true.

  // Which of the following factors decreases airway resistance?
  // Activation of the parasympathetic nervous system
  // Epinephrine
  // Histamine

  // Pulmonary surfactant
  // Prevents collapse of alveoli.
  // Prevents small alveoli from joining with larger alveoli.
  // Increases lung compliance.
  // Both a and c.
  // All of the above.

  // Which of the following muscles contract(s) during quiet expiration?
  // Diaphragm
  // Internal intercostals
  // External intercostals
  // None of the above
  // All of the above

  // Contraction of the diaphragm increases the rate of air flow during forced expiration. (true/false)

  // During inspiration, transpulmonary pressure (increases/decreases).

  // During inspiration, intrapleural pressure becomes (more/less) negative.

  // If airway resistance increases, a (higher/lower) transpulmonary pressure is required to produce a given rate of air flow during expiration.

  // Pulmonary surfactant (increases/decreases) the surface tension of water.

  // Pulmonary surfactant (increases/decreases) lung compliance.

  // Dead space volume is the volume of air in the (conducting zone/respiratory zone).

  // (Obstructive/Restrictive) lung diseases are characterized by increased airway resistance.

  //            cells secrete mucus.

  // The (internal/external) intercostals are muscles of inspiration.

  {
    slug: "physiology",
    title: "Physiology Chapter 17 - ",
    description: "Physiology Chapter 17 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  {
    slug: "physiology",
    title: "Physiology Chapter 18 - ",
    description: "Physiology Chapter 18 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  {
    slug: "physiology",
    title: "Physiology Chapter 19 - ",
    description: "Physiology Chapter 19 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  {
    slug: "physiology",
    title: "Physiology Chapter 20 - ",
    description: "Physiology Chapter 20 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  {
    slug: "physiology",
    title: "Physiology Chapter 21 - ",
    description: "Physiology Chapter 21 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  {
    slug: "physiology",
    title: "Physiology Chapter 22 - ",
    description: "Physiology Chapter 22 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  {
    slug: "physiology",
    title: "Physiology Chapter 23 - ",
    description: "Physiology Chapter 23 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },

  {
    slug: "physiology",
    title: "Physiology Chapter 24 - ",
    description: "Physiology Chapter 24 - ",
    image: "/images/anatomy.png",
    questions: [
      {
        id: 1,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 2,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 3,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 4,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 5,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 6,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 7,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 8,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 9,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 10,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 11,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
      {
        id: 12,
        question: "",
        options: ["", "", "", ""],
        answer: "",
      },
    ],
  },
];
