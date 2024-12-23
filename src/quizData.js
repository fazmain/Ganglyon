const quizzes = [
  {
    "quizID": "0001",
    "quizSubject": "Anatomy",
    "quizChapter": "Abdomen",
    "quizType": "TF",
    "questions": [
      {
        "questionID": "0001",
        "questionUni": "DU-22Nv",
        "question": "Structures passing through sacral hiatus are-",
        "options": {
          "a": "5th pair of sacral spinal nerve",
          "b": "Coccygeal nerve",
          "c": "Median sacral artery",
          "d": "Conus medullaris",
          "e": "Filum terminale"
        },
        "correct": {
          "a": true,
          "b": true,
          "c": false,
          "d": false,
          "e": true
        }
      },
      {
        "questionID": "0002",
        "questionUni": "DU-22Nv",
        "question": "The portal vein-",
        "options": {
          "a": "Is formed by the union of superior mesenteric vein and cystic vein",
          "b": "Conveys the absorbed products of the digested food",
          "c": "Is formed behind the body of pancreas",
          "d": "Lies behind the inferior vena cava",
          "e": "Is lined by simple squamous epithelium"
        },
        "correct": {
          "a": false,
          "b": true,
          "c": false,
          "d": false,
          "e": true
        }
      },
      {
        "questionID": "0003",
        "questionUni": "DU-22Nv",
        "question": "Area of anal canal above the pectinate line is-",
        "options": {
          "a": "Developed from endodermal cloaca",
          "b": "Lined by simple columner epithelium",
          "c": "Drained into superficial inguinal lymph nodes",
          "d": "Drained into superior rectal vein",
          "e": "Supplied by pudendal nerve"
        },
        "correct": {
          "a": true,
          "b": true,
          "c": false,
          "d": true,
          "e": false
        }
      },
      {
        "questionID": "0004",
        "questionUni": "DU-22Nv",
        "question": "Ureteric bud gives rise to-",
        "options": {
          "a": "Bowman's capsule",
          "b": "Loop of Henle",
          "c": "Collecting tubules",
          "d": "Collecting duct",
          "e": "Minor calyx"
        },
        "correct": {
          "a": false,
          "b": false,
          "c": true,
          "d": false,
          "e": true
        }
      },
      {
        "questionID": "0005",
        "questionUni": "DU-22Nv",
        "question": "Midgut rotates-",
        "options": {
          "a": "Around the axis of superior mesenteric artery",
          "b": "Counter clock wise",
          "c": "180 degree during herniation",
          "d": "90 degree during retraction",
          "e": "During its rapid growth in length"
        },
        "correct": {
          "a": true,
          "b": true,
          "c": false,
          "d": false,
          "e": true
        }
      },
      {
        "questionID": "0006",
        "questionUni": "DU-22Nv",
        "question": "The lamina propria of colon contains-",
        "options": {
          "a": "Collagen fibers",
          "b": "Glands",
          "c": "Lymphatic follicles",
          "d": "Paneth cell",
          "e": "Lacteal"
        },
        "correct": {
          "a": true,
          "b": true,
          "c": true,
          "d": false,
          "e": false
        }
      },
      {
        "questionID": "0007",
        "questionUni": "DU-22M",
        "question": "Transpyloric plane crosses-",
        "options": {
          "a": "pylorus of stomach",
          "b": "fundus of gall bladder",
          "c": "hilum of kidney",
          "d": "tail of pancreas",
          "e": "origin of inferior mesenteric artery"
        },
        "correct": {
          "a": true,
          "b": true,
          "c": true,
          "d": true,
          "e": true
        }
      },
      {
        "questionID": "0008",
        "questionUni": "DU-22M",
        "question": "Goblet cells are abundant in-",
        "options": {
          "a": "ileum",
          "b": "vermiform appendix",
          "c": "ascending colon",
          "d": "fallopian tube",
          "e": "vagina"
        },
        "correct": {
          "a": true,
          "b": true,
          "c": true,
          "d": false,
          "e": false
        }
      },
      {
        "questionID": "0009",
        "questionUni": "DU-22M",
        "question": "The cervix of uterus-",
        "options": {
          "a": "forms 90° angulation with the body of the uterus",
          "b": "has peritoneum on its anterior surface",
          "c": "is related to the ureter laterally",
          "d": "is attached to the Mackenrodt's ligament",
          "e": "sheds its lining epithelium during menstruation"
        },
        "correct": {
          "a": true,
          "b": false,
          "c": true,
          "d": true,
          "e": true
        }
      },
      {
        "questionID": "0010",
        "questionUni": "DU-22M",
        "question": "Spleen-",
        "options": {
          "a": "is a peripheral lymphoid organ",
          "b": "is entirely covered with peritoneum",
          "c": "filters blood",
          "d": "contains all types of blood cells",
          "e": "is derived from foregut"
        },
        "correct": {
          "a": true,
          "b": false,
          "c": true,
          "d": false,
          "e": false
        }
      },
      {
        "questionID": "0011",
        "questionUni": "DU-22M",
        "question": "Endodermal derivatives of foregut include-",
        "options": {
          "a": "alveolar epithelium of lung",
          "b": "gastric gland",
          "c": "hepatocytes",
          "d": "submucosa of duodenum",
          "e": "circular muscles of stomach"
        },
        "correct": {
          "a": true,
          "b": true,
          "c": true,
          "d": false,
          "e": false
        }
      },
      {
        "questionID": "0012",
        "questionUni": "DU-22Ja,21Nv/M,18M",
        "question": "Rotation of mid gut occurs-",
        "options": {
          "a": "Around the axis of superior mesenteric artery",
          "b": "In clockwise direction",
          "c": "For 90° during herniation",
          "d": "For 180° during retraction of herniated loop",
          "e": "In 12th week of intrauterine life"
        },
        "correct": {
          "a": true,
          "b": false,
          "c": true,
          "d": true,
          "e": false
        }
      },
      {
        "questionID": "0013",
        "questionUni": "DU-22Ja,21Nv/M",
        "question": "Derivatives of septum transversum include-",
        "options": {
          "a": "Central tendon of diaphragm",
          "b": "Parenchyma of liver",
          "c": "Fibrous pericardium",
          "d": "Costal pleura",
          "e": "Epicardium"
        },
        "correct": {
          "a": true,
          "b": false,
          "c": true,
          "d": false,
          "e": false
        }
      },
      {
        "questionID": "0014",
        "questionUni": "DU-22Ja,21Nv/M,16Ju",
        "question": "Submucosal glands are present in-",
        "options": {
          "a": "colon",
          "b": "duodenum",
          "c": "jejunum",
          "d": "oesophagus",
          "e": "stomach"
        },
        "correct": {
          "a": false,
          "b": true,
          "c": false,
          "d": true,
          "e": false
        }
      },
      {
        "questionID": "0015",
        "questionUni": "DU-22Ja,21Nv/M,13Ja",
        "question": "Urinary bladder-",
        "options": {
          "a": "lies in the hypogastric region",
          "b": "is devoid of peritoneal covering",
          "c": "bears muscularis mucosae",
          "d": "is supported by pelvic fascia",
          "e": "drains into inguinal lymph node"
        },
        "correct": {
          "a": true,
          "b": false,
          "c": true,
          "d": false,
          "e": false
        }
      },
      {
        "questionID": "0016",
        "questionUni": "DU-07Ju,RMU-21M",
        "question": "Structures drained by the portal vein are-",
        "options": {
          "a": "Pancreas",
          "b": "Gall bladder",
          "c": "Spleen",
          "d": "Kidney",
          "e": "Gonads"
        },
        "correct": {
          "a": true,
          "b": true,
          "c": true,
          "d": false,
          "e": false
        }
      },
      {
        "questionID": "0017",
        "questionUni": "RMU-21M",
        "question": "Retroperitoneal organs are-",
        "options": {
          "a": "spleen",
          "b": "kidney",
          "c": "stomach",
          "d": "most part of pancreas",
          "e": "sigmoid colon"
        },
        "correct": {
          "a": false,
          "b": true,
          "c": false,
          "d": true,
          "e": false
        }
      },
      {
        "questionID": "0018",
        "questionUni": "RMU-21M",
        "question": "Derivatives of paramesonephric duct -",
        "options": {
          "a": "Uterine tube",
          "b": "Uterus",
          "c": "Vagina",
          "d": "Appendix of epididymis",
          "e": "Prostatic utricle"
        },
        "correct": {
          "a": true,
          "b": true,
          "c": true,
          "d": false,
          "e": false
        }
      },
      {
        "questionID": "0019",
        "questionUni": "RMU-21M",
        "question": "Lateral branches of the abdominal aorta -",
        "options": {
          "a": "Renal artery",
          "b": "Gonadal artery",
          "c": "Celiac artery",
          "d": "Median sacral artery",
          "e": "Inferior phrenic artery"
        },
        "correct": {
          "a": true,
          "b": true,
          "c": false,
          "d": false,
          "e": true
        }
      },
      {
        "questionID": "0020",
        "questionUni": "RMU-21M",
        "question": "Characteristics of a female bony pelvis are -",
        "options": {
          "a": "Long section of a short cone",
          "b": "Cylindrical cavity",
          "c": "Heart shaped inlet",
          "d": "Sub pubic angle 80° to 85°",
          "e": "Inverted ischial spine"
        },
        "correct": {
          "a": false,
          "b": true,
          "c": false,
          "d": true,
          "e": false
        }
      },
      {
        "questionID": "0021",
        "questionUni": "DU-21Feb,20Nv/M",
        "question": "Rectus sheath contains -",
        "options": {
          "a": "cremaster muscle",
          "b": "pyramidalis muscle",
          "c": "inferior epigastric artery",
          "d": "subcostal nerve",
          "e": "paraumblical vein"
        },
        "correct": {
          "a": false,
          "b": true,
          "c": true,
          "d": true,
          "e": false
        }
      },
      {
        "questionID": "0022",
        "questionUni": "DU-21Feb,20Nv/M",
        "question": "In the hepatic lobule -",
        "options": {
          "a": "hepatocytes are arranged radially around the central vein",
          "b": "The plates of hepatocytes branch and anastomose freely",
          "c": "Space of Disse separate hepatocyte from central vein",
          "d": "Kupffer cells are located in the space of Disse",
          "e": "Ito cells are found in the perisinusoidal space"
        },
        "correct": {
          "a": true,
          "b": true,
          "c": false,
          "d": false,
          "e": true
        }
      },
      {
        "questionID": "0023",
        "questionUni": "DU-21Feb,20Nv/M",
        "question": "Base of urinary bladder in female is related posteriorly to-",
        "options": {
          "a": "Body of uterus",
          "b": "Supra vaginal part of cervix",
          "c": "Ampulla of rectum",
          "d": "Anterior vaginal wall",
          "e": "Pouch of Douglas"
        },
        "correct": {
          "a": false,
          "b": true,
          "c": false,
          "d": true,
          "e": false
        }
      },
      {
        "questionID": "0024",
        "questionUni": "DU-19Nv,17M",
        "question": "Retroperitoneal structures include-",
        "options": {
          "a": "abdominal aorta",
          "b": "ascending colon",
          "c": "spleen",
          "d": "transverse colon",
          "e": "ureter"
        },
        "correct": {
          "a": true,
          "b": true,
          "c": false,
          "d": false,
          "e": true
        }
      },
      {
        "questionID": "0025",
        "questionUni": "DU-19Nv",
        "question": "Tributaries of inferior vena cava are-",
        "options": {
          "a": "left supra renal vein",
          "b": "right gonadal vein",
          "c": "renal vein",
          "d": "splenic vein",
          "e": "superior mesenteric vein"
        },
        "correct": {
          "a": false,
          "b": true,
          "c": true,
          "d": false,
          "e": false
        }
      }
    ]
  },
  {
    "quizID": "0002",
    "quizSubject": "Physiology",
    "quizChapter": "Respiratory Physiology",
    "quizType": "MCQ",
    "questions": [
      {
        "questionID": "0001",
        "questionUni": null,
        "question": "Which of the following muscles help raise the rib cage, in addition to the external intercostals?",
        "options": [
          "Sternocleidomastoid, pectoralis major, and trapezius",
          "Sternocleidomastoid, anterior serrati, and scaleni",
          "Deltoid, biceps, and latissimus dorsi",
          "Rectus abdominis, transverse abdominis, and obliques"
        ],
        "correct": "Sternocleidomastoid, anterior serrati, and scaleni"
      },
      {
        "questionID": "0002",
        "questionUni": null,
        "question": "Which muscles pull the rib cage downward during expiration?",
        "options": [
          "External intercostals and diaphragm",
          "Abdominal recti and internal intercostals",
          "Pectoralis major and latissimus dorsi",
          "Sternocleidomastoid and scalene"
        ],
        "correct": "Abdominal recti and internal intercostals"
      },
      {
        "questionID": "0003",
        "questionUni": null,
        "question": "What is the transpulmonary pressure?",
        "options": [
          "Pressure difference between alveoli and atmosphere",
          "Pressure difference between alveoli and pleural space",
          "Pressure inside the alveoli",
          "Pressure on the outer surfaces of the lungs"
        ],
        "correct": "Pressure difference between alveoli and pleural space"
      },
      {
        "questionID": "0004",
        "questionUni": null,
        "question": "What is lung compliance?",
        "options": [
          "Ability of lungs to expand with increase in transpulmonary pressure",
          "Ability of lungs to exchange gases",
          "Elasticity of lung tissue",
          "Surface tension in the alveoli"
        ],
        "correct": "Ability of lungs to expand with increase in transpulmonary pressure"
      },
      {
        "questionID": "0005",
        "questionUni": null,
        "question": "Which of these is NOT a component of surfactant?",
        "options": [
          "Dipalmitoyl phosphatidylcholine",
          "Surfactant apoproteins",
          "Calcium ions",
          "Hemoglobin"
        ],
        "correct": "Hemoglobin"
      },
      {
        "questionID": "0006",
        "questionUni": null,
        "question": "What percentage of total blood volume is in the pulmonary circulation?",
        "options": ["5%", "9%", "15%", "25%"],
        "correct": "9%"
      },
      {
        "questionID": "0007",
        "questionUni": null,
        "question": "What is the respiratory unit composed of?",
        "options": [
          "Bronchioles, alveolar ducts, atria, alveoli",
          "Trachea, bronchi, bronchioles",
          "Right and left lungs",
          "Diaphragm and intercostal muscles"
        ],
        "correct": "Bronchioles, alveolar ducts, atria, alveoli"
      },
      {
        "questionID": "0008",
        "questionUni": null,
        "question": "Which factor does NOT determine gas diffusion across the respiratory membrane?",
        "options": [
          "Membrane thickness",
          "Membrane surface area",
          "Gas diffusion coefficient",
          "Atmospheric pressure"
        ],
        "correct": "Atmospheric pressure"
      },
      {
        "questionID": "0009",
        "questionUni": null,
        "question": "What percentage of blood entering the left atrium has NOT passed through alveolar capillaries?",
        "options": ["2%", "5%", "10%", "20%"],
        "correct": "2%"
      },
      {
        "questionID": "0010",
        "questionUni": null,
        "question": "Which part of the respiratory center mainly controls rate and depth of breathing?",
        "options": [
          "Dorsal respiratory group",
          "Ventral respiratory group",
          "Pneumotaxic center",
          "Apneustic center"
        ],
        "correct": "Pneumotaxic center"
      },
      {
        "questionID": "0011",
        "questionUni": null,
        "question": "How is the nervous signal to inspiratory muscles transmitted?",
        "options": [
          "As a ramp increasing over 2 seconds",
          "As instantaneous bursts",
          "Continuously at a constant rate",
          "In a pulsatile manner"
        ],
        "correct": "As a ramp increasing over 2 seconds"
      },
      {
        "questionID": "0012",
        "questionUni": null,
        "question": "What is the ultimate goal of respiration?",
        "options": [
          "Maintain CO2 levels",
          "Maintain O2 levels",
          "Maintain proper concentrations of O2, CO2 and H+ in tissues",
          "Ventilate the lungs"
        ],
        "correct": "Maintain proper concentrations of O2, CO2 and H+ in tissues"
      },
      {
        "questionID": "0013",
        "questionUni": null,
        "question": "Which substance depresses the respiratory center the most?",
        "options": [
          "Sodium pentobarbital",
          "Halothane",
          "Morphine",
          "Nitrous oxide"
        ],
        "correct": "Sodium pentobarbital"
      },
      {
        "questionID": "0014",
        "questionUni": null,
        "question": "What is sleep apnea?",
        "options": [
          "Inability to breathe during sleep",
          "Excessive snoring during sleep",
          "Insomnia",
          "Narcolepsy"
        ],
        "correct": "Inability to breathe during sleep"
      },
      {
        "questionID": "0015",
        "questionUni": null,
        "question": "What is the classic cause of inability of tissues to use O2?",
        "options": ["Cyanide poisoning", "Anemia", "Asthma", "Pneumonia"],
        "correct": "Cyanide poisoning"
      },
      {
        "questionID": "0016",
        "questionUni": null,
        "question": "Under what condition does cyanosis usually appear?",
        "options": [
          "When hemoglobin is < 5 g/dL",
          "When arterial oxygen is < 60 mmHg",
          "When > 5g deoxyhemoglobin/100 mL blood",
          "When CO2 levels are high"
        ],
        "correct": "When > 5g deoxyhemoglobin/100 mL blood"
      },
      {
        "questionID": "0017",
        "questionUni": null,
        "question": "What are the most fundamental tests of pulmonary performance?",
        "options": [
          "Chest X-ray and CT scan",
          "Blood pH, pCO2, pO2",
          "Spirometry",
          "Exercise stress test"
        ],
        "correct": "Blood pH, pCO2, pO2"
      },
      {
        "questionID": "0018",
        "questionUni": null,
        "question": "What is acclimatization in mountain climbers?",
        "options": [
          "Increased breathing rate at high altitude",
          "Increased red blood cell production",
          "Deeper breathing to compensate for low O2",
          "Use of supplemental oxygen"
        ],
        "correct": "Deeper breathing to compensate for low O2"
      },
      {
        "questionID": "0019",
        "questionUni": null,
        "question": "Where are the carotid bodies located?",
        "options": [
          "In the medulla oblongata",
          "In the carotid arteries",
          "In the aortic arch",
          "In the lungs"
        ],
        "correct": "In the carotid arteries"
      },
      {
        "questionID": "0020",
        "questionUni": null,
        "question": "What directly stimulates the respiratory center?",
        "options": [
          "CO2 and H+ ions",
          "O2 levels",
          "Blood pressure",
          "Body temperature"
        ],
        "correct": "CO2 and H+ ions"
      }
    ]
  },
  {
    "quizID": "0003",
    "quizSubject": "Biochemistry",
    "quizChapter": "Metabolism",
    "quizType": "MCQ",
    "questions": [
      {
        "questionID": "Q001",
        "questionUni": null,
        "question": "Which of the following is not a source of acetyl CoA?",
        "options": [
          "Oxidation of glucose",
          "Oxidation of fatty acid",
          "Oxidation of glucogenic amino acid",
          "Degradation of ketone bodies"
        ],
        "correct": "Oxidation of glucogenic amino acid"
      },
      {
        "questionID": "Q002",
        "questionUni": null,
        "question": "Which process represents a catabolic pathway for glucose metabolism?",
        "options": [
          "Glycogenesis",
          "Gluconeogenesis",
          "Lipogenesis",
          "Glycogenolysis"
        ],
        "correct": "Glycogenolysis"
      },
      {
        "questionID": "Q003",
        "questionUni": null,
        "question": "Which statement is not true about glycolysis?",
        "options": [
          "Its substrate is glucose",
          "Its product is pyruvate",
          "It occurs in the mitochondria",
          "It produces 8 ATP in aerobic conditions"
        ],
        "correct": "It occurs in the mitochondria"
      },
      {
        "questionID": "Q004",
        "questionUni": null,
        "question": "Which of the following is not a ketone body?",
        "options": [
          "Acetoacetic acid",
          "Acetic acid",
          "Beta hydroxybutyrate",
          "Acetone"
        ],
        "correct": "Acetic acid"
      },
      {
        "questionID": "Q005",
        "questionUni": null,
        "question": "Which molecule is not a hydrogen carrier?",
        "options": ["NAD", "FAD", "Cytochrome oxidase", "Coenzyme"],
        "correct": "Cytochrome oxidase"
      },
      {
        "questionID": "Q006",
        "questionUni": null,
        "question": "NADPH produced in the HMP shunt is not primarily used for:",
        "options": [
          "Reductive synthesis of nucleotides",
          "Detoxifying functions of the liver",
          "Antioxidant activity in RBCs",
          "Superoxide and free radical production in phagocytes"
        ],
        "correct": "Reductive synthesis of nucleotides"
      },
      {
        "questionID": "Q007",
        "questionUni": null,
        "question": "Negative nitrogen balance is not typically found in which condition?",
        "options": [
          "Diabetes mellitus",
          "Malignancy",
          "Starvation",
          "Pregnancy"
        ],
        "correct": "Pregnancy"
      },
      {
        "questionID": "Q008",
        "questionUni": null,
        "question": "Which amino acid does not undergo transamination?",
        "options": ["Glutamate", "Aspartate", "Alanine", "Lysine"],
        "correct": "Lysine"
      },
      {
        "questionID": "Q009",
        "questionUni": null,
        "question": "Which statement is not true for ketoacidosis in diabetes mellitus?",
        "options": [
          "Hyperglycemia",
          "Lack of insulin",
          "Suppression of hormone-sensitive lipase",
          "Excess free fatty acid"
        ],
        "correct": "Suppression of hormone-sensitive lipase"
      },
      {
        "questionID": "Q010",
        "questionUni": null,
        "question": "Which compound is derived from lipoxygenase?",
        "options": [
          "Prostaglandins",
          "Prostacyclin",
          "Thromboxane A2",
          "Leukotriene"
        ],
        "correct": "Leukotriene"
      }
    ]
  }
];
  
  export default quizzes;
  