// Database de gramática y vocabulario organizados por bloques
const grammarDB = {
    A1: {
        blocks: [
            {
                name: "Present Simple",
                exercises: [
                    {
                        topic: 'Present Simple - Affirmative',
                        question: 'Completa: She ___ (work) every day.',
                        answer: 'works',
                        options: ['work', 'works', 'working', 'worked'],
                        explanation: 'En tercera persona singular (he/she/it) añadimos -s al verbo en Present Simple.'
                    },
                    {
                        topic: 'Present Simple - Negative',
                        question: 'Completa: They ___ like coffee.',
                        answer: "don't",
                        options: ["don't", "doesn't", "not", "aren't"],
                        explanation: 'Para formar la negación en Present Simple con I/you/we/they usamos "don\'t".'
                    },
                    {
                        topic: 'Present Simple - Questions',
                        question: 'Completa: ___ you speak English?',
                        answer: 'Do',
                        options: ['Do', 'Does', 'Are', 'Is'],
                        explanation: 'Usamos "Do" con I/you/we/they para hacer preguntas en Present Simple.'
                    }
                ]
            },
            {
                name: "Verbo To Be",
                exercises: [
                    {
                        topic: 'To be - Present',
                        question: 'Completa: I ___ a student.',
                        answer: 'am',
                        options: ['am', 'is', 'are', 'be'],
                        explanation: 'Con "I" siempre usamos "am".'
                    },
                    {
                        topic: 'To be - Negative',
                        question: 'Completa: She ___ at home.',
                        answer: "isn't",
                        options: ["isn't", "aren't", "not is", "don't"],
                        explanation: 'Negativo de "is" es "isn\'t" o "is not".'
                    }
                ]
            },
            {
                name: "Artículos y Plurales",
                exercises: [
                    {
                        topic: 'Articles - a/an',
                        question: 'Completa: I have ___ apple.',
                        answer: 'an',
                        options: ['a', 'an', 'the', '-'],
                        explanation: 'Usamos "an" antes de palabras que empiezan con sonido vocal.'
                    },
                    {
                        topic: 'Plural - Irregular',
                        question: '¿Cuál es el plural de "child"?',
                        answer: 'children',
                        options: ['childs', 'children', 'childes', 'child'],
                        explanation: 'Child es un sustantivo irregular, su plural es "children".'
                    }
                ]
            },
            {
                name: "There is / There are",
                exercises: [
                    {
                        topic: 'There is/are - Affirmative',
                        question: 'Completa: ___ three books on the table.',
                        answer: 'There are',
                        options: ['There is', 'There are', 'They are', 'It is'],
                        explanation: 'Usamos "There are" con sustantivos plurales.'
                    }
                ]
            },
            {
                name: "Imperativos",
                exercises: [
                    {
                        topic: 'Imperatives',
                        question: 'Completa: ___ the door, please.',
                        answer: 'Close',
                        options: ['Close', 'Closes', 'Closing', 'To close'],
                        explanation: 'El imperativo usa el infinitivo sin "to".'
                    }
                ]
            }
        ]
    },
    A2: {
        blocks: [
            {
                name: "Past Simple",
                exercises: [
                    {
                        topic: 'Past Simple - Irregular',
                        question: 'Completa: Yesterday I ___ (go) to the cinema.',
                        answer: 'went',
                        options: ['go', 'goes', 'went', 'going'],
                        explanation: '"Go" es irregular, su pasado es "went".'
                    },
                    {
                        topic: 'Past Simple - Regular',
                        question: 'Completa: She ___ (walk) to school yesterday.',
                        answer: 'walked',
                        options: ['walk', 'walks', 'walked', 'walking'],
                        explanation: 'Verbos regulares: añadimos -ed para el pasado.'
                    }
                ]
            },
            {
                name: "Future (Going to / Will)",
                exercises: [
                    {
                        topic: 'Future - Going to',
                        question: 'Completa: I ___ study tonight.',
                        answer: "am going to",
                        options: ['am going to', 'will', 'going to', 'go to'],
                        explanation: 'Usamos "am/is/are going to" para planes decididos.'
                    },
                    {
                        topic: 'Future - Will',
                        question: 'Completa: I think it ___ rain tomorrow.',
                        answer: 'will',
                        options: ['will', 'is going to', 'going', 'is'],
                        explanation: 'Usamos "will" para predicciones y decisiones espontáneas.'
                    }
                ]
            },
            {
                name: "Comparativos",
                exercises: [
                    {
                        topic: 'Comparative - Irregular',
                        question: 'Completa: This book is ___ than that one.',
                        answer: 'better',
                        options: ['good', 'better', 'best', 'more good'],
                        explanation: '"Good" es irregular: good → better → best.'
                    }
                ]
            },
            {
                name: "Verbos Modales (Can/Could/Should)",
                exercises: [
                    {
                        topic: 'Can/Could',
                        question: 'Completa: ___ you help me?',
                        answer: 'Could',
                        options: ['Could', 'Can', 'Should', 'Would'],
                        explanation: 'Ambos son correctos, pero "Could" es más formal y educado.'
                    }
                ]
            },
            {
                name: "Past Continuous",
                exercises: [
                    {
                        topic: 'Past Continuous',
                        question: 'Completa: I ___ (read) when you called.',
                        answer: 'was reading',
                        options: ['read', 'was reading', 'am reading', 'have read'],
                        explanation: 'Past Continuous: was/were + verbo-ing para acciones en progreso en el pasado.'
                    }
                ]
            }
        ]
    },
    B1: {
        blocks: [
            {
                name: "Present Perfect",
                exercises: [
                    {
                        topic: 'Present Perfect - Experience',
                        question: 'Completa: I ___ (visit) Paris three times.',
                        answer: 'have visited',
                        options: ['visited', 'have visited', 'visit', 'am visiting'],
                        explanation: 'Present Perfect: have/has + participio pasado. Se usa para experiencias sin tiempo específico.'
                    },
                    {
                        topic: 'Present Perfect - Just',
                        question: 'Completa: She has ___ arrived.',
                        answer: 'just',
                        options: ['just', 'yet', 'already', 'never'],
                        explanation: '"Just" = hace muy poco tiempo, va entre has/have y el participio.'
                    }
                ]
            },
            {
                name: "Voz Pasiva",
                exercises: [
                    {
                        topic: 'Passive Voice - Past',
                        question: 'Completa: The book ___ (write) in 1990.',
                        answer: 'was written',
                        options: ['wrote', 'was written', 'is written', 'has written'],
                        explanation: 'Pasiva en pasado: was/were + participio pasado.'
                    }
                ]
            },
            {
                name: "Condicionales (Tipo 1 y 2)",
                exercises: [
                    {
                        topic: 'Conditionals - Type 1',
                        question: 'Completa: If it ___ (rain), I will stay home.',
                        answer: 'rains',
                        options: ['rain', 'rains', 'will rain', 'rained'],
                        explanation: 'Condicional tipo 1: If + presente simple, ... will + infinitivo.'
                    },
                    {
                        topic: 'Conditionals - Type 2',
                        question: 'Completa: If I ___ (be) rich, I would travel.',
                        answer: 'were',
                        options: ['am', 'was', 'were', 'be'],
                        explanation: 'Condicional tipo 2: If + pasado simple. Con "I/he/she/it" preferimos "were".'
                    }
                ]
            },
            {
                name: "Estilo Indirecto",
                exercises: [
                    {
                        topic: 'Reported Speech',
                        question: 'He said, "I am tired". → He said he ___ tired.',
                        answer: 'was',
                        options: ['is', 'was', 'were', 'am'],
                        explanation: 'En estilo indirecto, presente → pasado: am → was.'
                    }
                ]
            },
            {
                name: "Oraciones de Relativo",
                exercises: [
                    {
                        topic: 'Relative Clauses - Who',
                        question: 'The man ___ lives here is my uncle.',
                        answer: 'who',
                        options: ['who', 'which', 'where', 'what'],
                        explanation: 'Usamos "who" para personas en oraciones de relativo.'
                    }
                ]
            }
        ]
    },
    B2: {
        blocks: [
            {
                name: "Past Perfect",
                exercises: [
                    {
                        topic: 'Past Perfect',
                        question: 'When I arrived, they ___ already ___ (leave).',
                        answer: 'had left',
                        options: ['left', 'have left', 'had left', 'were leaving'],
                        explanation: 'Past Perfect: had + participio. Acción pasada antes de otra acción pasada.'
                    }
                ]
            },
            {
                name: "Modales Perfectos",
                exercises: [
                    {
                        topic: 'Modal Perfects - Should have',
                        question: 'He ___ have studied harder (crítica al pasado).',
                        answer: 'should',
                        options: ['should', 'must', 'can', 'will'],
                        explanation: 'Should have + participio = crítica o consejo sobre el pasado.'
                    }
                ]
            },
            {
                name: "Condicional Tipo 3",
                exercises: [
                    {
                        topic: 'Conditionals - Type 3',
                        question: 'If I ___ (know), I would have told you.',
                        answer: 'had known',
                        options: ['knew', 'had known', 'know', 'have known'],
                        explanation: 'Condicional tipo 3: If + past perfect, ... would have + participio.'
                    }
                ]
            },
            {
                name: "Wish + Pasado",
                exercises: [
                    {
                        topic: 'Wish + Past',
                        question: 'I wish I ___ (can) speak French.',
                        answer: 'could',
                        options: ['can', 'could', 'will', 'would'],
                        explanation: 'Wish + pasado simple para deseos sobre el presente. Can → could.'
                    }
                ]
            },
            {
                name: "Pasiva Avanzada",
                exercises: [
                    {
                        topic: 'Passive - Advanced',
                        question: 'The car needs ___ (repair).',
                        answer: 'repairing',
                        options: ['repair', 'repairing', 'to repair', 'repaired'],
                        explanation: 'Need + -ing tiene significado pasivo.'
                    }
                ]
            }
        ]
    },
    C1: {
        blocks: [
            {
                name: "Inversión",
                exercises: [
                    {
                        topic: 'Inversion',
                        question: '___ have I seen such a beautiful view.',
                        answer: 'Never',
                        options: ['Never', 'Not', 'No', 'Neither'],
                        explanation: 'Después de palabras negativas usamos inversión (verbo + sujeto).'
                    }
                ]
            },
            {
                name: "Subjuntivo",
                exercises: [
                    {
                        topic: 'Subjunctive',
                        question: 'It is essential that he ___ present.',
                        answer: 'be',
                        options: ['is', 'be', 'was', 'were'],
                        explanation: 'En inglés formal, después de "essential/vital/important that" usamos subjuntivo (be).'
                    }
                ]
            },
            {
                name: "Condicionales Mixtos",
                exercises: [
                    {
                        topic: 'Mixed Conditionals',
                        question: 'If I had studied harder (past), I ___ be a doctor now (present).',
                        answer: 'would',
                        options: ['will', 'would', 'had', 'have'],
                        explanation: 'Condicional mixto: pasado → presente. If + past perfect, ... would + infinitivo.'
                    }
                ]
            },
            {
                name: "Cleft Sentences",
                exercises: [
                    {
                        topic: 'Cleft Sentences',
                        question: '___ I need is some rest.',
                        answer: 'What',
                        options: ['What', 'That', 'Which', 'Who'],
                        explanation: 'Cleft sentence para énfasis: "What I need" = "The thing that I need".'
                    }
                ]
            },
            {
                name: "Participios",
                exercises: [
                    {
                        topic: 'Participle Clauses',
                        question: '___ (finish) my work, I went home.',
                        answer: 'Having finished',
                        options: ['Finishing', 'Having finished', 'Finished', 'To finish'],
                        explanation: 'Having + participio indica una acción completada antes de otra.'
                    }
                ]
            }
        ]
    }
};

const vocabularyDB = {
    A1: {
        blocks: [
            {
                name: "Colores",
                words: [
                    { en: 'red', es: 'rojo', example: 'The apple is red.', category: 'colors' },
                    { en: 'blue', es: 'azul', example: 'The sky is blue.', category: 'colors' },
                    { en: 'green', es: 'verde', example: 'The grass is green.', category: 'colors' },
                    { en: 'yellow', es: 'amarillo', example: 'The sun is yellow.', category: 'colors' },
                    { en: 'black', es: 'negro', example: 'My car is black.', category: 'colors' }
                ]
            },
            {
                name: "Familia",
                words: [
                    { en: 'family', es: 'familia', example: 'I love my family.', category: 'family' },
                    { en: 'mother', es: 'madre', example: 'My mother is kind.', category: 'family' },
                    { en: 'father', es: 'padre', example: 'My father works hard.', category: 'family' },
                    { en: 'sister', es: 'hermana', example: 'I have one sister.', category: 'family' },
                    { en: 'brother', es: 'hermano', example: 'My brother is tall.', category: 'family' }
                ]
            },
            {
                name: "Comida y bebida",
                words: [
                    { en: 'water', es: 'agua', example: 'I drink water every day.', category: 'food' },
                    { en: 'bread', es: 'pan', example: 'I eat bread for breakfast.', category: 'food' },
                    { en: 'apple', es: 'manzana', example: 'An apple a day keeps the doctor away.', category: 'food' },
                    { en: 'coffee', es: 'café', example: 'I drink coffee in the morning.', category: 'food' },
                    { en: 'milk', es: 'leche', example: 'The baby drinks milk.', category: 'food' }
                ]
            },
            {
                name: "Lugares",
                words: [
                    { en: 'house', es: 'casa', example: 'I live in a big house.', category: 'places' },
                    { en: 'school', es: 'escuela', example: 'I go to school every day.', category: 'places' },
                    { en: 'park', es: 'parque', example: 'Children play in the park.', category: 'places' },
                    { en: 'hospital', es: 'hospital', example: 'Doctors work in a hospital.', category: 'places' }
                ]
            },
            {
                name: "Objetos cotidianos",
                words: [
                    { en: 'book', es: 'libro', example: 'I read a book before bed.', category: 'objects' },
                    { en: 'table', es: 'mesa', example: 'The book is on the table.', category: 'objects' },
                    { en: 'chair', es: 'silla', example: 'Sit on the chair.', category: 'objects' },
                    { en: 'phone', es: 'teléfono', example: 'My phone is ringing.', category: 'objects' }
                ]
            }
        ]
    },
    A2: {
        blocks: [
            {
                name: "Clima y naturaleza",
                words: [
                    { en: 'weather', es: 'clima', example: 'The weather is nice today.', category: 'nature' },
                    { en: 'rain', es: 'lluvia', example: "It's going to rain tomorrow.", category: 'nature' },
                    { en: 'sun', es: 'sol', example: 'The sun is shining.', category: 'nature' },
                    { en: 'cloud', es: 'nube', example: 'The sky is full of clouds.', category: 'nature' }
                ]
            },
            {
                name: "Viajes y transporte",
                words: [
                    { en: 'journey', es: 'viaje', example: 'The journey was long.', category: 'travel' },
                    { en: 'train', es: 'tren', example: 'I travel by train.', category: 'travel' },
                    { en: 'bus', es: 'autobús', example: 'The bus arrives at 9am.', category: 'travel' },
                    { en: 'ticket', es: 'billete', example: 'I bought a ticket.', category: 'travel' }
                ]
            },
            {
                name: "Emociones básicas",
                words: [
                    { en: 'happy', es: 'feliz', example: 'I am very happy today.', category: 'emotions' },
                    { en: 'sad', es: 'triste', example: 'She feels sad.', category: 'emotions' },
                    { en: 'angry', es: 'enfadado', example: 'He was angry yesterday.', category: 'emotions' },
                    { en: 'tired', es: 'cansado', example: 'I am tired after work.', category: 'emotions' }
                ]
            },
            {
                name: "Palabras abstractas",
                words: [
                    { en: 'experience', es: 'experiencia', example: 'It was a great experience.', category: 'abstract' },
                    { en: 'difference', es: 'diferencia', example: "There's a big difference.", category: 'abstract' },
                    { en: 'opportunity', es: 'oportunidad', example: "It's a good opportunity.", category: 'abstract' }
                ]
            }
        ]
    },
    B1: {
        blocks: [
            {
                name: "Verbos de acción",
                words: [
                    { en: 'achieve', es: 'lograr', example: 'I want to achieve my goals.', category: 'verbs' },
                    { en: 'decrease', es: 'disminuir', example: 'Sales decreased last month.', category: 'verbs' },
                    { en: 'increase', es: 'aumentar', example: 'Prices are increasing.', category: 'verbs' },
                    { en: 'improve', es: 'mejorar', example: 'We need to improve quality.', category: 'verbs' }
                ]
            },
            {
                name: "Medio ambiente",
                words: [
                    { en: 'environment', es: 'medio ambiente', example: 'We must protect the environment.', category: 'nature' },
                    { en: 'pollution', es: 'contaminación', example: 'Air pollution is a problem.', category: 'nature' },
                    { en: 'recycle', es: 'reciclar', example: 'We should recycle more.', category: 'nature' }
                ]
            },
            {
                name: "Sociedad y abstractos",
                words: [
                    { en: 'society', es: 'sociedad', example: 'Society is changing rapidly.', category: 'abstract' },
                    { en: 'benefit', es: 'beneficio', example: 'Exercise has many benefits.', category: 'abstract' },
                    { en: 'challenge', es: 'desafío', example: 'This is a big challenge.', category: 'abstract' }
                ]
            }
        ]
    },
    B2: {
        blocks: [
            {
                name: "Verbos avanzados",
                words: [
                    { en: 'strengthen', es: 'fortalecer', example: 'We need to strengthen our relationship.', category: 'verbs' },
                    { en: 'underestimate', es: 'subestimar', example: "Don't underestimate the challenge.", category: 'verbs' },
                    { en: 'overcome', es: 'superar', example: 'She overcame many obstacles.', category: 'verbs' }
                ]
            },
            {
                name: "Adjetivos descriptivos",
                words: [
                    { en: 'comprehensive', es: 'completo/exhaustivo', example: 'A comprehensive study was conducted.', category: 'adjectives' },
                    { en: 'significant', es: 'significativo', example: 'There was a significant change.', category: 'adjectives' },
                    { en: 'crucial', es: 'crucial', example: 'This is a crucial moment.', category: 'adjectives' }
                ]
            },
            {
                name: "Conceptos abstractos",
                words: [
                    { en: 'controversy', es: 'controversia', example: 'The decision sparked controversy.', category: 'abstract' },
                    { en: 'phenomenon', es: 'fenómeno', example: "It's an interesting phenomenon.", category: 'abstract' }
                ]
            }
        ]
    },
    C1: {
        blocks: [
            {
                name: "Verbos formales",
                words: [
                    { en: 'exacerbate', es: 'agravar/empeorar', example: 'This will exacerbate the problem.', category: 'verbs' },
                    { en: 'scrutinize', es: 'escudriñar/examinar', example: 'They scrutinized the evidence.', category: 'verbs' },
                    { en: 'mitigate', es: 'mitigar', example: 'We must mitigate the risks.', category: 'verbs' }
                ]
            },
            {
                name: "Adjetivos académicos",
                words: [
                    { en: 'ambiguous', es: 'ambiguo', example: 'His response was ambiguous.', category: 'adjectives' },
                    { en: 'substantial', es: 'sustancial', example: 'There was substantial progress.', category: 'adjectives' }
                ]
            },
            {
                name: "Conceptos complejos",
                words: [
                    { en: 'resilience', es: 'resiliencia', example: 'She showed great resilience.', category: 'abstract' },
                    { en: 'paradigm', es: 'paradigma', example: 'A new paradigm is emerging.', category: 'abstract' }
                ]
            }
        ]
    }
};

// Estado de la aplicación
let appState = {
    currentLevel: 'A1',
    streak: 0,
    points: 0,
    exercisesCompleted: 0,
    dailyGoal: 10,
    learnedWords: [],
    reviewSchedule: {},
    stats: {
        totalAttempts: 0,
        correctAttempts: 0,
        grammarStats: {},
        vocabularyStats: {}
    }
};

// Cargar estado del localStorage
function loadState() {
    const saved = localStorage.getItem('englishMasterState');
    if (saved) {
        appState = { ...appState, ...JSON.parse(saved) };
    }
    updateUI();
}

// Guardar estado en localStorage
function saveState() {
    localStorage.setItem('englishMasterState', JSON.stringify(appState));
}

// Sistema de repetición espaciada
function calculateNextReview(difficulty) {
    const now = new Date();
    const intervals = {
        easy: 7,    // 7 días
        medium: 3,  // 3 días
        hard: 1     // 1 día
    };
    
    const days = intervals[difficulty] || 1;
    now.setDate(now.getDate() + days);
    return now.toISOString();
}

function addToReviewSchedule(item, difficulty) {
    const nextReview = calculateNextReview(difficulty);
    const id = `${item.topic || item.en}_${Date.now()}`;
    
    appState.reviewSchedule[id] = {
        item: item,
        nextReview: nextReview,
        difficulty: difficulty,
        reviewCount: 0
    };
    
    saveState();
}

function getItemsDueForReview() {
    const now = new Date();
    return Object.entries(appState.reviewSchedule)
        .filter(([_, data]) => new Date(data.nextReview) <= now)
        .map(([id, data]) => ({ id, ...data }));
}

// Navegación entre tabs
function switchTab(tabName) {
    // Ocultar todos los tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
    });
    
    // Remover clase active de todos los botones
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mostrar tab seleccionado
    document.getElementById(`tab-${tabName}`).classList.remove('hidden');
    
    // Activar botón correspondiente
    document.querySelectorAll('.tab-btn')[
        ['home', 'practice', 'vocabulary', 'stats'].indexOf(tabName)
    ].classList.add('active');
    
    // Cargar contenido específico
    if (tabName === 'vocabulary') {
        loadVocabularyList();
    } else if (tabName === 'stats') {
        loadStats();
    }
}

// Seleccionar nivel
let selectedLevel = 'A1';
let selectedBlocks = { grammar: [], vocabulary: [] };

function selectLevel(level) {
    selectedLevel = level;
    document.querySelectorAll('.diff-btn[data-level]').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
    
    // Actualizar bloques disponibles si estamos en modo personalizado
    if (!document.getElementById('custom-practice').classList.contains('hidden')) {
        loadAvailableBlocks();
    }
}

function selectPracticeType(type) {
    document.querySelectorAll('.diff-btn[data-type]').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');
    
    if (type === 'quick') {
        document.getElementById('quick-practice').classList.remove('hidden');
        document.getElementById('custom-practice').classList.add('hidden');
    } else {
        document.getElementById('quick-practice').classList.add('hidden');
        document.getElementById('custom-practice').classList.remove('hidden');
        loadAvailableBlocks();
    }
}

function loadAvailableBlocks() {
    selectedBlocks = { grammar: [], vocabulary: [] };
    
    // Cargar bloques de gramática
    const grammarContainer = document.getElementById('grammar-blocks');
    const grammarBlocks = grammarDB[selectedLevel]?.blocks || [];
    
    grammarContainer.innerHTML = grammarBlocks.map((block, index) => {
        const exerciseCount = block.exercises.length;
        return `
            <label class="block-checkbox" data-type="grammar" data-index="${index}">
                <input type="checkbox" onchange="toggleBlock('grammar', ${index}, this.checked)">
                <div class="block-label">
                    <div class="block-topic">${block.name}</div>
                    <div class="block-count">${exerciseCount} ejercicio${exerciseCount > 1 ? 's' : ''}</div>
                </div>
            </label>
        `;
    }).join('');
    
    // Cargar bloques de vocabulario
    const vocabularyContainer = document.getElementById('vocabulary-blocks');
    const vocabularyBlocks = vocabularyDB[selectedLevel]?.blocks || [];
    
    vocabularyContainer.innerHTML = vocabularyBlocks.map((block, index) => {
        const wordCount = block.words.length;
        return `
            <label class="block-checkbox" data-type="vocabulary" data-index="${index}">
                <input type="checkbox" onchange="toggleBlock('vocabulary', ${index}, this.checked)">
                <div class="block-label">
                    <div class="block-topic">${block.name}</div>
                    <div class="block-count">${wordCount} palabra${wordCount > 1 ? 's' : ''}</div>
                </div>
            </label>
        `;
    }).join('');
    
    updateStartButton();
}

function toggleBlock(type, index, checked) {
    const checkbox = event.target.closest('.block-checkbox');
    
    if (checked) {
        selectedBlocks[type].push(index);
        checkbox.classList.add('checked');
    } else {
        selectedBlocks[type] = selectedBlocks[type].filter(i => i !== index);
        checkbox.classList.remove('checked');
    }
    
    updateStartButton();
}

function updateStartButton() {
    const btn = document.getElementById('start-custom-btn');
    const totalSelected = selectedBlocks.grammar.length + selectedBlocks.vocabulary.length;
    
    if (totalSelected > 0) {
        btn.disabled = false;
        btn.textContent = `Comenzar (${totalSelected} bloque${totalSelected > 1 ? 's' : ''} seleccionado${totalSelected > 1 ? 's' : ''})`;
    } else {
        btn.disabled = true;
        btn.textContent = 'Comenzar práctica personalizada';
    }
}

function startCustomPractice() {
    const exercises = [];
    
    // Añadir ejercicios de gramática seleccionados
    selectedBlocks.grammar.forEach(blockIndex => {
        const block = grammarDB[selectedLevel].blocks[blockIndex];
        exercises.push(...block.exercises);
    });
    
    // Añadir ejercicios de vocabulario seleccionados
    selectedBlocks.vocabulary.forEach(blockIndex => {
        const block = vocabularyDB[selectedLevel].blocks[blockIndex];
        const vocabExercises = block.words.map(word => ({
            type: 'vocabulary',
            question: `¿Qué significa "${word.en}"?`,
            answer: word.es,
            word: word,
            options: generateVocabOptionsFromBlock(word, block.words)
        }));
        exercises.push(...vocabExercises);
    });
    
    if (exercises.length === 0) return;
    
    // Mezclar y limitar ejercicios
    const shuffled = exercises.sort(() => Math.random() - 0.5);
    const finalExercises = shuffled.slice(0, Math.min(10, shuffled.length));
    
    const container = document.getElementById('practice-session');
    const selection = document.getElementById('practice-selection');
    
    selection.classList.add('hidden');
    container.classList.remove('hidden');
    
    renderExercises(container, finalExercises);
}

function generateVocabOptionsFromBlock(correctWord, blockWords) {
    const wrongOptions = blockWords
        .filter(w => w.en !== correctWord.en)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.es);
    
    const options = [correctWord.es, ...wrongOptions];
    return options.sort(() => Math.random() - 0.5);
}

// Iniciar práctica diaria
function startDailyPractice() {
    selectedLevel = appState.currentLevel;
    startPractice('mixed');
    switchTab('practice');
}

// Iniciar sesión de práctica
function startPractice(type) {
    const container = document.getElementById('practice-session');
    const selection = document.getElementById('practice-selection');
    
    selection.classList.add('hidden');
    container.classList.remove('hidden');
    
    let exercises = [];
    
    if (type === 'grammar' || type === 'mixed') {
        const allGrammarExercises = (grammarDB[selectedLevel]?.blocks || [])
            .flatMap(block => block.exercises);
        exercises = exercises.concat(allGrammarExercises);
    }
    
    if (type === 'vocabulary' || type === 'mixed') {
        const allWords = (vocabularyDB[selectedLevel]?.blocks || [])
            .flatMap(block => block.words);
        const vocabExercises = allWords.map(word => ({
            type: 'vocabulary',
            question: `¿Qué significa "${word.en}"?`,
            answer: word.es,
            word: word,
            options: generateVocabOptions(word, allWords)
        }));
        exercises = exercises.concat(vocabExercises);
    }
    
    // Mezclar ejercicios
    exercises = exercises.sort(() => Math.random() - 0.5).slice(0, 10);
    
    renderExercises(container, exercises);
}

function generateVocabOptions(word, allWords) {
    const wrongOptions = allWords
        .filter(w => w.en !== word.en)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.es);
    
    const options = [word.es, ...wrongOptions];
    return options.sort(() => Math.random() - 0.5);
}

function renderExercises(container, exercises) {
    let currentIndex = 0;
    let correctCount = 0;
    
    function showExercise() {
        if (currentIndex >= exercises.length) {
            showResults();
            return;
        }
        
        const exercise = exercises[currentIndex];
        const progress = ((currentIndex) / exercises.length) * 100;
        
        container.innerHTML = `
            <div class="card">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
                <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 16px;">
                    Pregunta ${currentIndex + 1} de ${exercises.length}
                </p>
            </div>
            
            <div class="exercise-card">
                <div class="level-badge level-${selectedLevel.toLowerCase()}">${selectedLevel}</div>
                <div class="exercise-question">${exercise.question}</div>
                ${exercise.type === 'vocabulary' && exercise.word ? 
                    `<div class="word-example" style="margin-bottom: 16px;">"${exercise.word.example}"</div>` : 
                    ''}
                <div class="options" id="options"></div>
                <div id="feedback"></div>
            </div>
        `;
        
        const optionsContainer = document.getElementById('options');
        exercise.options.forEach(option => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;
            btn.onclick = () => checkAnswer(option, exercise, btn);
            optionsContainer.appendChild(btn);
        });
    }
    
    function checkAnswer(selected, exercise, btn) {
        const correct = selected.toLowerCase().trim() === exercise.answer.toLowerCase().trim();
        const feedbackDiv = document.getElementById('feedback');
        
        // Deshabilitar todas las opciones
        document.querySelectorAll('.option-btn').forEach(b => {
            b.disabled = true;
            b.style.cursor = 'default';
            if (b.textContent.toLowerCase().trim() === exercise.answer.toLowerCase().trim()) {
                b.classList.add('correct');
            }
        });
        
        if (correct) {
            btn.classList.add('correct');
            feedbackDiv.className = 'feedback correct';
            feedbackDiv.innerHTML = `✅ ¡Correcto! ${exercise.explanation || ''}`;
            correctCount++;
            appState.points += 10;
            
            // Añadir al sistema de revisión
            addToReviewSchedule(exercise, 'easy');
            
            if (exercise.type === 'vocabulary' && !appState.learnedWords.includes(exercise.word.en)) {
                appState.learnedWords.push(exercise.word.en);
            }
        } else {
            btn.classList.add('wrong');
            feedbackDiv.className = 'feedback wrong';
            feedbackDiv.innerHTML = `❌ Incorrecto. ${exercise.explanation || `La respuesta correcta es: ${exercise.answer}`}`;
            
            // Añadir para revisión pronto
            addToReviewSchedule(exercise, 'hard');
        }
        
        // Actualizar estadísticas
        appState.stats.totalAttempts++;
        if (correct) appState.stats.correctAttempts++;
        
        setTimeout(() => {
            currentIndex++;
            showExercise();
        }, 2500);
        
        saveState();
        updateUI();
    }
    
    function showResults() {
        const percentage = Math.round((correctCount / exercises.length) * 100);
        appState.exercisesCompleted += exercises.length;
        
        // Actualizar racha
        const today = new Date().toDateString();
        const lastPractice = localStorage.getItem('lastPractice');
        if (lastPractice !== today) {
            appState.streak++;
            localStorage.setItem('lastPractice', today);
        }
        
        container.innerHTML = `
            <div class="card" style="text-align: center;">
                <div style="font-size: 64px; margin: 20px 0;">
                    ${percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '💪'}
                </div>
                <h2>¡Sesión completada!</h2>
                <p style="font-size: 18px; margin: 16px 0; color: var(--primary);">
                    ${correctCount} de ${exercises.length} correctas (${percentage}%)
                </p>
                <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 24px;">
                    +${correctCount * 10} puntos ganados
                </p>
                <button class="btn" onclick="location.reload()">Volver al inicio</button>
                <button class="btn btn-secondary" onclick="startPractice('mixed')">Otra sesión</button>
            </div>
        `;
        
        saveState();
        updateUI();
    }
    
    showExercise();
}

// Cargar lista de vocabulario
function loadVocabularyList() {
    const container = document.getElementById('vocabulary-list');
    const words = appState.learnedWords;
    
    if (words.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📚</div>
                <p>Aún no has aprendido ninguna palabra.</p>
                <p style="font-size: 14px; margin-top: 8px;">¡Empieza a practicar!</p>
            </div>
        `;
        return;
    }
    
    const allWords = Object.values(vocabularyDB)
        .flatMap(level => level.blocks)
        .flatMap(block => block.words);
    
    const learnedWordObjects = words.map(w => 
        allWords.find(word => word.en === w)
    ).filter(Boolean);
    
    container.innerHTML = learnedWordObjects.map(word => `
        <div class="vocabulary-item">
            <div class="word-en">${word.en}</div>
            <div class="word-es">${word.es}</div>
            <div class="word-example">${word.example}</div>
        </div>
    `).join('');
}

function searchVocabulary() {
    const search = document.getElementById('vocab-search').value.toLowerCase();
    const items = document.querySelectorAll('.vocabulary-item');
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(search) ? 'block' : 'none';
    });
}

// Cargar estadísticas
function loadStats() {
    const accuracy = appState.stats.totalAttempts > 0
        ? Math.round((appState.stats.correctAttempts / appState.stats.totalAttempts) * 100)
        : 0;
    
    document.getElementById('accuracy').textContent = accuracy + '%';
    document.getElementById('accuracy-bar').style.width = accuracy + '%';
    
    // Próximas revisiones
    const dueItems = getItemsDueForReview();
    const nextReview = document.getElementById('next-review');
    
    if (dueItems.length > 0) {
        nextReview.textContent = `Tienes ${dueItems.length} elementos para revisar ahora.`;
    } else {
        const upcoming = Object.values(appState.reviewSchedule)
            .sort((a, b) => new Date(a.nextReview) - new Date(b.nextReview))[0];
        
        if (upcoming) {
            const date = new Date(upcoming.nextReview);
            nextReview.textContent = `Próxima revisión: ${date.toLocaleDateString('es-ES')}`;
        } else {
            nextReview.textContent = 'No hay revisiones programadas.';
        }
    }
}

// Actualizar UI
function updateUI() {
    document.getElementById('streak').textContent = appState.streak;
    document.getElementById('points').textContent = appState.points;
    document.getElementById('level').textContent = appState.currentLevel;
    document.getElementById('exercises-done').textContent = appState.exercisesCompleted;
    document.getElementById('vocab-learned').textContent = appState.learnedWords.length;
    
    const progress = Math.min((appState.exercisesCompleted / appState.dailyGoal) * 100, 100);
    document.getElementById('daily-progress').style.width = progress + '%';
    
    // Calendario de racha
    const calendar = document.getElementById('streak-calendar');
    const days = 7;
    calendar.innerHTML = '';
    
    for (let i = days - 1; i >= 0; i--) {
        const day = document.createElement('div');
        day.className = 'streak-day';
        if (i < appState.streak) day.classList.add('completed');
        if (i === 0) day.classList.add('today');
        day.textContent = i === 0 ? 'Hoy' : `-${i}`;
        calendar.appendChild(day);
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    
    // Registrar Service Worker para PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(console.error);
    }
});
