const quizzes = [
    {
      "quizID": "0001",
      "quizSubject": "Anatomy",
      "quizChapter": "Thorax",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "questionUni": "DU",
          "questionYear": "2023",
          "question": "How many chambers does the heart have?",
          "options": ["one", "two", "three", "four"],
          "correct": "four"
        },
        {
          "questionID": "002",
          "questionUni": "DU",
          "questionYear": "2023",
          "question": "Which of the following carries deoxygenated blood to lungs from heart?",
          "options": [
            "pulmonary artery",
            "pulmonary vein",
            "coronary artery",
            "coronary vein"
          ],
          "correct": "pulmonary artery"
        },
        {
          "questionID": "003",
          "questionUni": "DU",
          "questionYear": "2023",
          "question": "Which of the following is not a part of the respiratory system?",
          "options": ["trachea", "bronchus", "larynx", "esophagus"],
          "correct": "esophagus"
        },
        {
          "questionID": "004",
          "questionUni": "DU",
          "questionYear": "2023",
          "question": "Which structure separates the thoracic cavity from the abdominal cavity?",
          "options": ["diaphragm", "pleura", "peritoneum", "intercostal muscles"],
          "correct": "diaphragm"
        },
        {
          "questionID": "005",
          "questionUni": "DU",
          "questionYear": "2023",
          "question": "What is the main function of the intercostal muscles?",
          "options": [
            "Assist in breathing",
            "Pump blood to the lungs",
            "Digest food in the stomach",
            "Support the spine"
          ],
          "correct": "Assist in breathing"
        }
      ]
    },
    {
      "quizID": "0002",
      "quizSubject": "Anatomy",
      "quizChapter": "Upper Limb",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "Which of the following bones is NOT located in the upper limb?",
          "options": ["humerus", "radius", "ulna", "clavicle"],
          "correct": "clavicle"
        },
        {
          "questionID": "002",
          "question": "What is the group of muscles in the upper limb responsible for flexion of the elbow joint?",
          "options": [
            "biceps brachii",
            "triceps brachii",
            "deltoid",
            "rotator cuff muscles"
          ],
          "correct": "biceps brachii"
        },
        {
          "questionID": "003",
          "question": "The median nerve innervates all of the following EXCEPT:",
          "options": [
            "thenar muscles",
            "flexor carpi radialis",
            "brachioradialis",
            "intrinsic muscles of the hand"
          ],
          "correct": "brachioradialis"
        },
        {
          "questionID": "004",
          "question": "What major blood vessel supplies blood to the upper limb?",
          "options": [
            "subclavian artery",
            "brachial artery",
            "radial artery",
            "ulnar artery"
          ],
          "correct": "subclavian artery"
        },
        {
          "questionID": "005",
          "question": "Carpal tunnel syndrome is a condition caused by compression of a nerve in the wrist. Which nerve is most commonly affected?",
          "options": [
            "median nerve",
            "ulnar nerve",
            "radial nerve",
            "sciatic nerve"
          ],
          "correct": "median nerve"
        }
      ]
    },
    {
      "quizID": "0003",
      "quizSubject": "Anatomy",
      "quizChapter": "Abdomen",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "The abdominal cavity is lined by a membrane called the:",
          "options": ["peritoneum", "pleura", "meninges", "pericardium"],
          "correct": "peritoneum"
        },
        {
          "questionID": "002",
          "question": "Which of the following organs is NOT located in the abdominal cavity?",
          "options": ["stomach", "small intestine", "liver", "lungs"],
          "correct": "lungs"
        },
        {
          "questionID": "003",
          "question": "The appendix is a small pouch located off of the:",
          "options": ["cecum", "colon", "rectum", "small intestine"],
          "correct": "cecum"
        },
        {
          "questionID": "004",
          "question": "The diaphragm separates the abdominal cavity from the:",
          "options": [
            "thoracic cavity",
            "pelvic cavity",
            "cranial cavity",
            "spinal cavity"
          ],
          "correct": "thoracic cavity"
        },
        {
          "questionID": "005",
          "question": "Bile, a digestive fluid, is produced by the:",
          "options": ["liver", "pancreas", "gallbladder", "small intestine"],
          "correct": "liver"
        }
      ]
    },
    {
      "quizID": "0004",
      "quizSubject": "Anatomy",
      "quizChapter": "Lower Limb",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "The kneecap, also known as the patella, is part of which bone?",
          "options": ["femur", "tibia", "fibula", "sacrum"],
          "correct": "femur"
        },
        {
          "questionID": "002",
          "question": "What is the group of muscles in the lower limb responsible for hamstring movement?",
          "options": ["hamstrings", "quadriceps", "calves", "glutes"],
          "correct": "hamstrings"
        },
        {
          "questionID": "003",
          "question": "The peroneal nerve innervates most of the muscles responsible for movement of the:",
          "options": ["foot", "ankle", "knee", "hip"],
          "correct": "foot"
        },
        {
          "questionID": "004",
          "question": "Plantar fasciitis is a common condition causing pain in the:",
          "options": ["arch of the foot", "heel", "ankle", "calf"],
          "correct": "arch of the foot"
        },
        {
          "questionID": "005",
          "question": "The major artery supplying blood to the lower limb is the:",
          "options": [
            "femoral artery",
            "popliteal artery",
            "dorsalis pedis artery",
            "plantar artery"
          ],
          "correct": "femoral artery"
        }
      ]
    },
    {
      "quizID": "0005",
      "quizSubject": "Anatomy",
      "quizChapter": "Head & Neck",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "What bone forms the bony bridge of the nose?",
          "options": ["maxilla", "mandible", "zygomatic bone", "nasal bone"],
          "correct": "nasal bone"
        },
        {
          "questionID": "002",
          "question": "The parotid gland, located near the ear, is responsible for producing:",
          "options": ["saliva", "sweat", "sebum", "tears"],
          "correct": "saliva"
        },
        {
          "questionID": "003",
          "question": "The larynx, also known as the voice box, is located in the:",
          "options": [
            "throat",
            "nasal cavity",
            "behind the eyes",
            "parotid region"
          ],
          "correct": "throat"
        },
        {
          "questionID": "004",
          "question": "What is the name of the major bone in the skull that houses the brain?",
          "options": [
            "frontal bone",
            "temporal bone",
            "occipital bone",
            "sphenoid bone"
          ],
          "correct": "occipital bone"
        },
        {
          "questionID": "005",
          "question": "Which of the following cranial nerves is responsible for vision?",
          "options": [
            "trigeminal nerve",
            "facial nerve",
            "oculomotor nerve",
            "optic nerve"
          ],
          "correct": "optic nerve"
        }
      ]
    },
    {
      "quizID": "0006",
      "quizSubject": "Anatomy",
      "quizChapter": "Brain & Eyeball",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "The cerebrum is the largest part of the brain responsible for:",
          "options": [
            "higher functions like reasoning and memory",
            "involuntary actions like breathing",
            "balance and coordination",
            "receiving sensory information"
          ],
          "correct": "higher functions like reasoning and memory"
        },
        {
          "questionID": "002",
          "question": "The cerebellum is located at the back of the brain and is involved in:",
          "options": [
            "balance and coordination",
            "processing emotions",
            "generating memories",
            "controlling heart rate"
          ],
          "correct": "balance and coordination"
        },
        {
          "questionID": "003",
          "question": "The optic nerve transmits visual information from the eye to the:",
          "options": ["cerebrum", "brainstem", "thalamus", "hypothalamus"],
          "correct": "cerebrum"
        },
        {
          "questionID": "004",
          "question": "The cornea is the transparent outer layer of the eye responsible for:",
          "options": [
            "focusing light",
            "detecting light and color",
            "protecting the inner eye",
            "producing tears"
          ],
          "correct": "focusing light"
        },
        {
          "questionID": "005",
          "question": "The iris is the colored part of the eye that controls the amount of light entering through the:",
          "options": ["pupil", "cornea", "lens", "retina"],
          "correct": "pupil"
        }
      ]
    },
    {
      "quizID": "0007",
      "quizSubject": "Physiology",
      "quizChapter": "Cellular Physiology & Blood",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "What molecule is responsible for facilitating the diffusion of certain substances across the cell membrane?",
          "options": ["Protein channel", "Carbohydrate", "Lipid", "Nucleic Acid"],
          "correct": "Protein channel"
        },
        {
          "questionID": "002",
          "question": "The process by which a cell breaks down glucose to release energy is called:",
          "options": [
            "Cellular respiration",
            "Photosynthesis",
            "Mitosis",
            "Meiosis"
          ],
          "correct": "Cellular respiration"
        },
        {
          "questionID": "003",
          "question": "Which of the following blood components is responsible for initiating the clotting cascade?",
          "options": [
            "Red blood cells (RBCs)",
            "White blood cells (WBCs)",
            "Platelets",
            "Plasma"
          ],
          "correct": "Platelets"
        },
        {
          "questionID": "004",
          "question": "Hemoglobin is a protein found in red blood cells that binds to:",
          "options": ["Oxygen", "Carbon dioxide", "Glucose", "Calcium"],
          "correct": "Oxygen"
        },
        {
          "questionID": "005",
          "question": "The major difference between arteries and veins is that arteries:",
          "options": [
            "Carry blood away from the heart",
            "Carry blood towards the heart",
            "Have thinner walls",
            "Have lower blood pressure"
          ],
          "correct": "Carry blood away from the heart"
        }
      ]
    },
    {
      "quizID": "0008",
      "quizSubject": "Physiology",
      "quizChapter": "Cardiovascular Physiology",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "The rhythmic contraction and relaxation of the heart chambers is known as the:",
          "options": [
            "Cardiac cycle",
            "Action potential",
            "Diastole only",
            "Systole only"
          ],
          "correct": "Cardiac cycle"
        },
        {
          "questionID": "002",
          "question": "The structure separating the atria and ventricles in the heart is called the:",
          "options": ["Pericardium", "Myocardium", "Endocardium", "Septum"],
          "correct": "Septum"
        },
        {
          "questionID": "003",
          "question": "Which of the following blood vessels carries deoxygenated blood from the body to the right atrium of the heart?",
          "options": [
            "Superior vena cava",
            "Inferior vena cava",
            "Aorta",
            "Pulmonary artery"
          ],
          "correct": "Superior vena cava"
        },
        {
          "questionID": "004",
          "question": "The force exerted by blood against the walls of blood vessels is called:",
          "options": [
            "Cardiac output",
            "Blood pressure",
            "Stroke volume",
            "Heart rate"
          ],
          "correct": "Blood pressure"
        },
        {
          "questionID": "005",
          "question": "What is the term for the involuntary nervous system control of heart rate?",
          "options": [
            "Electrocardiogram (ECG)",
            "Autonomic nervous system",
            "Tachycardia",
            "Bradycardia"
          ],
          "correct": "Autonomic nervous system"
        }
      ]
    },
    {
      "quizID": "0009",
      "quizSubject": "Physiology",
      "quizChapter": "Respiratory Physiology",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "What is the process by which gas exchange occurs between the alveoli in the lungs and the blood?",
          "options": [
            "Diffusion",
            "Cellular respiration",
            "Photosynthesis",
            "Active transport"
          ],
          "correct": "Diffusion"
        },
        {
          "questionID": "002",
          "question": "The diaphragm is a dome-shaped muscle that plays a crucial role in:",
          "options": [
            "Inhalation",
            "Exhalation",
            "Gas exchange",
            "Oxygen transport"
          ],
          "correct": "Inhalation"
        },
        {
          "questionID": "003",
          "question": "What waste product is primarily removed from the blood by the lungs during respiration?",
          "options": ["Oxygen", "Glucose", "Carbon dioxide", "Water"],
          "correct": "Carbon dioxide"
        },
        {
          "questionID": "004",
          "question": "Low blood oxygen levels can trigger a reflex that increases the rate and depth of breathing. This reflex is controlled by the:",
          "options": [
            "Medulla oblongata",
            "Cerebrum",
            "Thalamus",
            "Hypothalamus"
          ],
          "correct": "Medulla oblongata"
        },
        {
          "questionID": "005",
          "question": "What is the term for a condition where the airways become narrowed, causing difficulty breathing?",
          "options": ["Emphysema", "Asthma", "Pneumonia", "Pulmonary fibrosis"],
          "correct": "Asthma"
        }
      ]
    },
    {
      "quizID": "0010",
      "quizSubject": "Physiology",
      "quizChapter": "Gastrointestinal and Renal Physiology",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "The muscular sac that stores food and begins mechanical digestion is the:",
          "options": [
            "Esophagus",
            "Stomach",
            "Small intestine",
            "Large intestine"
          ],
          "correct": "Stomach"
        },
        {
          "questionID": "002",
          "question": "Enzymes and acids in the stomach break down food molecules into a liquid mixture called:",
          "options": ["Chyme", "Glucose", "Amino acids", "Chyle"],
          "correct": "Chyme"
        },
        {
          "questionID": "003",
          "question": "The primary function of the kidneys is to:",
          "options": [
            "Break down food molecules",
            "Maintain blood volume and electrolyte balance",
            "Produce red blood cells",
            "Generate nerve impulses"
          ],
          "correct": "Maintain blood volume and electrolyte balance"
        },
        {
          "questionID": "004",
          "question": "Waste products and excess water are filtered from the blood in the kidneys and become:",
          "options": ["Chyme", "Glucose", "Urine", "Feces"],
          "correct": "Urine"
        },
        {
          "questionID": "005",
          "question": "Hormones like ADH (antidiuretic hormone) regulate water reabsorption in the kidneys to maintain blood pressure. Where is ADH produced?",
          "options": [
            "Adrenal glands",
            "Pituitary gland",
            "Kidneys",
            "Thyroid gland"
          ],
          "correct": "Pituitary gland"
        }
      ]
    },
    {
      "quizID": "0011",
      "quizSubject": "Physiology",
      "quizChapter": "Endocrine Physiology",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "Which hormone is produced by the thyroid gland and regulates metabolism?",
          "options": [
            "Thyroid stimulating hormone (TSH)",
            "Thyroxine (T4)",
            "Parathyroid hormone (PTH)",
            "Insulin"
          ],
          "correct": "Thyroxine (T4)"
        },
        {
          "questionID": "002",
          "question": "The pancreas secretes hormones like insulin and glucagon, which are essential for regulating:",
          "options": [
            "Blood pressure",
            "Blood cell production",
            "Blood calcium levels",
            "Blood sugar levels"
          ],
          "correct": "Blood sugar levels"
        },
        {
          "questionID": "003",
          "question": "The adrenal glands produce a hormone called cortisol, which plays a role in the body's stress response. Cortisol also helps regulate:",
          "options": [
            "Muscle growth",
            "Immune function",
            "Body temperature",
            "All of the above"
          ],
          "correct": "All of the above"
        },
        {
          "questionID": "004",
          "question": "Estrogen and testosterone are examples of sex hormones. Which glands are responsible for their production?",
          "options": [
            "Ovaries and testes",
            "Thyroid and parathyroid glands",
            "Pituitary gland and hypothalamus",
            "Adrenal glands and kidneys"
          ],
          "correct": "Ovaries and testes"
        },
        {
          "questionID": "005",
          "question": "Negative feedback loops are common in the endocrine system. How does a negative feedback loop work?",
          "options": [
            "A hormone signal increases, stimulating further hormone release.",
            "A hormone signal decreases, stimulating further hormone release.",
            "A hormone signal increases, suppressing further hormone release.",
            "A hormone signal decreases, suppressing further hormone release."
          ],
          "correct": "A hormone signal increases, suppressing further hormone release."
        }
      ]
    },
    {
      "quizID": "0012",
      "quizSubject": "Physiology",
      "quizChapter": "Physiology of Reproduction",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "In the female reproductive system, what structure is responsible for producing mature egg cells (ova)?",
          "options": ["Fallopian tubes", "Uterus", "Ovaries", "Vagina"],
          "correct": "Ovaries"
        },
        {
          "questionID": "002",
          "question": "The process by which a sperm fertilizes an egg is called:",
          "options": [
            "Implantation",
            "Ovulation",
            "Fertilization",
            "Parturition"
          ],
          "correct": "Fertilization"
        },
        {
          "questionID": "003",
          "question": "The thick muscular wall of the uterus contracts during childbirth. What is this process called?",
          "options": ["Menstruation", "Ovulation", "Parturition", "Lactation"],
          "correct": "Parturition"
        },
        {
          "questionID": "004",
          "question": "The hormone responsible for stimulating milk production in mammary glands after childbirth is:",
          "options": ["Estrogen", "Progesterone", "Prolactin", "Testosterone"],
          "correct": "Prolactin"
        },
        {
          "questionID": "005",
          "question": "The menstrual cycle is a series of hormonal changes that prepare the body for pregnancy. What is the approximate duration of a typical menstrual cycle?",
          "options": ["7-10 days", "14-21 days", "28-35 days", "42-50 days"],
          "correct": "28-35 days"
        }
      ]
    },
    {
      "quizID": "0013",
      "quizSubject": "Physiology",
      "quizChapter": "Neurophysiology",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "Neurons are the basic functional units of the nervous system. What part of a neuron transmits electrical signals to other cells?",
          "options": ["Dendrite", "Cell body", "Axon", "Myelin sheath"],
          "correct": "Axon"
        },
        {
          "questionID": "002",
          "question": "Neurotransmitters are chemicals released by neurons that allow them to communicate with other cells. How do neurotransmitters generally influence the activity of the receiving cell?",
          "options": [
            "Always excitatory (increases activity)",
            "Always inhibitory (decreases activity)",
            "Can be excitatory or inhibitory depending on the neurotransmitter and receptor",
            "Have no effect on the receiving cell"
          ],
          "correct": "Can be excitatory or inhibitory depending on the neurotransmitter and receptor"
        },
        {
          "questionID": "003",
          "question": "The myelin sheath is a fatty substance that insulates the axons of some neurons. What is the main benefit of the myelin sheath?",
          "options": [
            "Increases the production of neurotransmitters",
            "Protects the axon and allows for faster nerve impulse transmission",
            "Helps neurons communicate with distant parts of the body",
            "Provides energy for the neuron"
          ],
          "correct": "Protects the axon and allows for faster nerve impulse transmission"
        },
        {
          "questionID": "004",
          "question": "The central nervous system (CNS) is composed of the brain and spinal cord. What is the main function of the CNS?",
          "options": [
            "Senses and responds to stimuli from the environment",
            "Controls and coordinates all body functions",
            "Relays information between the CNS and the peripheral nervous system",
            "Maintains homeostasis (internal balance) in the body"
          ],
          "correct": "Controls and coordinates all body functions"
        },
        {
          "questionID": "005",
          "question": "The peripheral nervous system (PNS) carries information between the CNS and other parts of the body. The PNS can be further divided into two main parts. Which of the following is NOT a part of the peripheral nervous system?",
          "options": [
            "Somatic nervous system (controls voluntary movements)",
            "Autonomic nervous system (controls involuntary actions)",
            "Sensory nervous system (carries sensory information to the CNS)",
            "Central nervous system (controls and coordinates all body functions)"
          ],
          "correct": "Central nervous system (controls and coordinates all body functions)"
        }
      ]
    },
    {
      "quizID": "0014",
      "quizSubject": "Biochemistry",
      "quizChapter": "Biophysics & Biomolecules",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "The study of the physical principles underlying biological processes is called:",
          "options": [
            "Biochemistry",
            "Biophysics",
            "Molecular biology",
            "Cell biology"
          ],
          "correct": "Biophysics"
        },
        {
          "questionID": "002",
          "question": "Which of the following biomolecules is NOT a polymer?",
          "options": ["Protein", "Carbohydrate", "Lipid", "Water"],
          "correct": "Water"
        },
        {
          "questionID": "003",
          "question": "Hydrogen bonds play a crucial role in the structure and function of many biomolecules. What is the main characteristic of a hydrogen bond?",
          "options": [
            "A weak attraction between a slightly positive hydrogen atom and an electronegative atom",
            "A covalent bond between two hydrogen atoms",
            "An ionic bond between a positively charged and a negatively charged atom",
            "A strong covalent bond between two carbon atoms"
          ],
          "correct": "A weak attraction between a slightly positive hydrogen atom and an electronegative atom"
        },
        {
          "questionID": "004",
          "question": "Enzymes are biological catalysts that accelerate the rate of biochemical reactions. How do enzymes typically work?",
          "options": [
            "By providing energy for the reaction",
            "By lowering the activation energy required for the reaction",
            "By consuming the products of the reaction",
            "By changing the equilibrium constant of the reaction"
          ],
          "correct": "By lowering the activation energy required for the reaction"
        },
        {
          "questionID": "005",
          "question": "The primary structure of a protein refers to the:",
          "options": [
            "Linear sequence of amino acids linked by peptide bonds",
            "Three-dimensional folding of the protein",
            "Interaction of the protein with other molecules",
            "Presence of functional groups on the amino acid side chains"
          ],
          "correct": "Linear sequence of amino acids linked by peptide bonds"
        }
      ]
    },
    {
      "quizID": "0015",
      "quizSubject": "Biochemistry",
      "quizChapter": "Food, Nutrition, Vitamins & Minerals",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "What is the main difference between carbohydrates and fats in the body?",
          "options": [
            "Carbohydrates are used for energy, while fats are primarily for storage.",
            "Carbohydrates are complex molecules, while fats are simple.",
            "Carbohydrates contain nitrogen, while fats do not.",
            "Carbohydrates are insoluble in water, while fats are soluble."
          ],
          "correct": "Carbohydrates are used for energy, while fats are primarily for storage."
        },
        {
          "questionID": "002",
          "question": "A balanced diet should include all of the following EXCEPT:",
          "options": [
            "A variety of fruits and vegetables",
            "Whole grains or complex carbohydrates",
            "Lean protein sources",
            "Excessive amounts of processed sugar and unhealthy fats"
          ],
          "correct": "Excessive amounts of processed sugar and unhealthy fats"
        },
        {
          "questionID": "003",
          "question": "What is the main function of vitamins in the body?",
          "options": [
            "To provide energy",
            "To build and repair tissues",
            "To regulate various biochemical processes",
            "To form the structural components of cells"
          ],
          "correct": "To regulate various biochemical processes"
        },
        {
          "questionID": "004",
          "question": "Minerals are essential nutrients required in the body for various functions. Which of the following is NOT a function of minerals?",
          "options": [
            "Building and maintaining bones and teeth",
            "Maintaining fluid balance in the body",
            "Aiding in muscle contraction and nerve transmission",
            "Providing energy for the body"
          ],
          "correct": "Providing energy for the body"
        },
        {
          "questionID": "005",
          "question": "What is the term for a disease caused by a deficiency of a specific vitamin?",
          "options": [
            "Macronutrient deficiency",
            "Micronutrient deficiency",
            "Metabolic disorder",
            "Food allergy"
          ],
          "correct": "Micronutrient deficiency"
        }
      ]
    },
    {
      "quizID": "0016",
      "quizSubject": "Biochemistry",
      "quizChapter": "Digestion, Absorption, Bio-energetics & Metabolism",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "The mechanical and chemical breakdown of food into smaller molecules occurs in the process of:",
          "options": ["Digestion", "Absorption", "Metabolism", "Excretion"],
          "correct": "Digestion"
        },
        {
          "questionID": "002",
          "question": "Nutrients like glucose and amino acids are absorbed from the small intestine into the bloodstream through a process called:",
          "options": ["Ingestion", "Digestion", "Absorption", "Assimilation"],
          "correct": "Absorption"
        },
        {
          "questionID": "003",
          "question": "ATP (adenosine triphosphate) is the cell's main energy currency. What biological process is responsible for generating most of the ATP in the body?",
          "options": [
            "Photosynthesis (in plants)",
            "Cellular respiration",
            "Fermentation",
            "Glycolysis"
          ],
          "correct": "Cellular respiration"
        },
        {
          "questionID": "004",
          "question": "Metabolism is the sum of all the chemical reactions in the body. What are the two main categories of metabolism?",
          "options": [
            "Anabolism and catabolism",
            "Photosynthesis and cellular respiration",
            "Digestion and absorption",
            "Assimilation and excretion"
          ],
          "correct": "Anabolism and catabolism"
        },
        {
          "questionID": "005",
          "question": "During exercise, muscles require a readily available source of energy. What molecule is primarily used for short bursts of energy?",
          "options": ["Glucose", "Fatty acids", "Proteins", "Vitamins"],
          "correct": "Glucose"
        }
      ]
    },
    {
      "quizID": "0017",
      "quizSubject": "Biochemistry",
      "quizChapter": "Body Fluids, Renal Biochemistry, Electrolyte & Acid-Base Balance",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "The major fluid compartments of the body include intracellular fluid (ICF) and extracellular fluid (ECF). ICF is found:",
          "options": [
            "Inside cells",
            "Outside cells and in the bloodstream",
            "In the digestive system",
            "Within bones and cartilage"
          ],
          "correct": "Inside cells"
        },
        {
          "questionID": "002",
          "question": "The kidneys play a vital role in maintaining body fluid balance and electrolyte composition. What waste product is primarily filtered from the blood and excreted in urine?",
          "options": ["Glucose", "Proteins", "Fats", " Urea"],
          "correct": " Urea"
        },
        {
          "questionID": "003",
          "question": "Electrolytes are ions that conduct electricity in body fluids and are essential for various physiological functions. Which of the following is NOT a common electrolyte found in the body?",
          "options": [
            "Sodium (Na+)",
            "Potassium (K+)",
            "Calcium (Ca2+)",
            "Magnesium (Mg2+)",
            "Glucose"
          ],
          "correct": "Glucose"
        },
        {
          "questionID": "004",
          "question": "Acid-base balance refers to the body's ability to maintain a narrow pH range in the blood and other fluids. What is the main buffering system in the blood that helps regulate pH?",
          "options": [
            "Bicarbonate buffer system",
            "Phosphate buffer system",
            "Protein buffer system",
            "Respiratory system"
          ],
          "correct": "Bicarbonate buffer system"
        },
        {
          "questionID": "005",
          "question": "Respiratory acidosis is a condition where the blood becomes too acidic due to a buildup of carbon dioxide. How does the body attempt to compensate for respiratory acidosis?",
          "options": [
            "Increase the excretion of bicarbonate ions in the urine",
            "Decrease the rate of respiration to retain carbon dioxide",
            "Increase the production of bicarbonate ions in the kidneys",
            "Excrete more acid equivalents through sweat"
          ],
          "correct": "Increase the production of bicarbonate ions in the kidneys"
        }
      ]
    },
    {
      "quizID": "0018",
      "quizSubject": "Biochemistry",
      "quizChapter": "Clinical Biochemistry & Clinical Endocrinology",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "Blood glucose levels are a crucial indicator in diabetes diagnosis. What hormone is primarily responsible for regulating blood sugar levels?",
          "options": ["Insulin", "Glucagon", "Thyroxine", "Testosterone"],
          "correct": "Insulin"
        },
        {
          "questionID": "002",
          "question": "Liver function tests (LFTs) are a group of blood tests used to assess liver health. What enzyme is commonly elevated in the blood if there is damage to liver cells?",
          "options": [
            "Alanine aminotransferase (ALT)",
            "Amylase (involved in starch digestion)",
            "Lactate dehydrogenase (LDH)",
            "Creatine kinase (CK)"
          ],
          "correct": "Alanine aminotransferase (ALT)"
        },
        {
          "questionID": "003",
          "question": "Electrolytes like sodium (Na+) and potassium (K+) are important for nerve and muscle function. Abnormally high levels of sodium in the blood can be a sign of which condition?",
          "options": [
            "Diabetes mellitus",
            "Hyperthyroidism",
            "Addison's disease (adrenal insufficiency)",
            "Hypernatremia"
          ],
          "correct": "Hypernatremia"
        },
        {
          "questionID": "004",
          "question": "Cholesterol is a type of lipid found in the blood. High levels of LDL cholesterol are considered a risk factor for atherosclerosis. What does LDL stand for?",
          "options": [
            "Low-density lipoprotein (bad cholesterol)",
            "High-density lipoprotein (good cholesterol)",
            "Lipoprotein density",
            "Low-density lipoproteinase"
          ],
          "correct": "Low-density lipoprotein (bad cholesterol)"
        },
        {
          "questionID": "005",
          "question": "Thyroid hormones regulate metabolism and other body functions. A low level of thyroid hormone production can lead to hypothyroidism. What is a common symptom of hypothyroidism?",
          "options": [
            "Unexplained weight gain",
            "Increased heart rate and sweating",
            "Excessive thirst and urination",
            "Shortness of breath"
          ],
          "correct": "Unexplained weight gain"
        }
      ]
    },
    {
      "quizID": "0019",
      "quizSubject": "Biochemistry",
      "quizChapter": "Molecular Biology & Genetics",
      "quizType": "MCQ",
      "questions": [
        {
          "questionID": "001",
          "question": "DNA (deoxyribonucleic acid) is the genetic material that carries hereditary information. What are the building blocks of DNA?",
          "options": [
            "Amino acids",
            "Monosaccharides",
            "Fatty acids",
            "Nucleotides"
          ],
          "correct": "Nucleotides"
        },
        {
          "questionID": "002",
          "question": "During DNA replication, a double-stranded DNA molecule is copied to produce two identical copies.  What is the complementary base pairing rule that guides DNA replication?",
          "options": [
            "Adenine (A) pairs with thymine (T) and guanine (G) pairs with cytosine (C)",
            "Adenine (A) pairs with cytosine (C) and guanine (G) pairs with thymine (T)",
            "All bases pair randomly with each other",
            "There is no specific base pairing rule"
          ],
          "correct": "Adenine (A) pairs with thymine (T) and guanine (G) pairs with cytosine (C)"
        },
        {
          "questionID": "003",
          "question": "Transcription is the process by which RNA (ribonucleic acid) is synthesized from a DNA template.  What type of RNA carries the genetic code from DNA to ribosomes for protein synthesis?",
          "options": [
            "Messenger RNA (mRNA)",
            "Transfer RNA (tRNA)",
            "Ribosomal RNA (rRNA)",
            "All of the above"
          ],
          "correct": "Messenger RNA (mRNA)"
        },
        {
          "questionID": "004",
          "question": "The genetic code is the set of instructions that determines the order of amino acids in a protein. How many codons (triplets of nucleotides) are there in the genetic code?",
          "options": ["16", "20", "64", "128"],
          "correct": "64"
        },
        {
          "questionID": "005",
          "question": "Mutations are changes in the genetic material.  What type of mutation involves a single nucleotide change in the DNA sequence?",
          "options": [
            "Silent mutation (no change in amino acid)",
            "Missense mutation (change in amino acid)",
            "Nonsense mutation (creates a stop codon)",
            "Frameshift mutation (insertion or deletion of nucleotides)"
          ],
          "correct": "Missense mutation (change in amino acid)"
        }
      ]
    },
    {
      "quizID": "0020",
      "quizSubject": "anatomy",
      "quizChapter": "thorax",
      "quizType": "TF",
      "questions": [
        {
          "questionID": "001",
          "questionUni": "DU",
          "questionYear": "2024",
          "question": "Which of the following structures is NOT part of the respiratory system?",
          "options": {
            "a": "Trachea",
            "b": "Diaphragm",
            "c": "Esophagus",
            "d": "Bronchi",
            "e": "Alveoli"
          },
          "correct": {
            "a": false,
            "b": false,
            "c": true,
            "d": false,
            "e": false
          }
        }
      ]
    },
    {
      "quizID": "0021",
      "quizSubject": "anatomy",
      "quizChapter": "upper limb",
      "quizType": "TF",
      "questions": [
        {
          "questionID": "001",
          "questionUni": "DU",
          "questionYear": "2024",
          "question": "Which of the following bones is NOT part of the shoulder girdle?",
          "options": {
            "a": "Clavicle",
            "b": "Scapula",
            "c": "Humerus",
            "d": "Radius",
            "e": "Ulna"
          },
          "correct": {
            "a": false,
            "b": false,
            "c": true,
            "d": false,
            "e": false
          }
        }
      ]
    },
    {
      "quizID": "0022",
      "quizSubject": "anatomy",
      "quizChapter": "abdomen",
      "quizType": "TF",
      "questions": [
        {
          "questionID": "001",
          "questionUni": "DU",
          "questionYear": "2024",
          "question": "Which organ is NOT part of the digestive system?",
          "options": {
            "a": "Liver",
            "b": "Stomach",
            "c": "Pancreas",
            "d": "Spleen",
            "e": "Small intestine"
          },
          "correct": {
            "a": false,
            "b": false,
            "c": false,
            "d": true,
            "e": false
          }
        }
      ]
    },
    {
      "quizID": "0023",
      "quizSubject": "anatomy",
      "quizChapter": "lower limb",
      "quizType": "TF",
      "questions": [
        {
          "questionID": "001",
          "questionUni": "DU",
          "questionYear": "2024",
          "question": "Which bone forms the heel of the foot?",
          "options": {
            "a": "Tibia",
            "b": "Fibula",
            "c": "Talus",
            "d": "Calcaneus",
            "e": "Metatarsal"
          },
          "correct": {
            "a": false,
            "b": false,
            "c": false,
            "d": true,
            "e": false
          }
        }
      ]
    },
    {
      "quizID": "0024",
      "quizSubject": "anatomy",
      "quizChapter": "head & neck",
      "quizType": "TF",
      "questions": [
        {
          "questionID": "001",
          "questionUni": "DU",
          "questionYear": "2024",
          "question": "Which of the following muscles is NOT located in the neck?",
          "options": {
            "a": "Sternocleidomastoid",
            "b": "Masseter",
            "c": "Scalene",
            "d": "Trapezius",
            "e": "Platysma"
          },
          "correct": {
            "a": false,
            "b": true,
            "c": false,
            "d": false,
            "e": false
          }
        }
      ]
    },
    {
      "quizID": "0025",
      "quizSubject": "anatomy",
      "quizChapter": "brain & eyeball",
      "quizType": "TF",
      "questions": [
        {
          "questionID": "001",
          "questionUni": "DU",
          "questionYear": "2024",
          "question": "Which structure is responsible for maintaining balance and posture?",
          "options": {
            "a": "Cerebellum",
            "b": "Cerebrum",
            "c": "Thalamus",
            "d": "Hypothalamus",
            "e": "Medulla oblongata"
          },
          "correct": {
            "a": true,
            "b": false,
            "c": false,
            "d": false,
            "e": false
          }
        }
      ]
    }
  ];
  
  export default quizzes;
  