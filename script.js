// Language translations
const translations = {
    en: {
        title: "Which Mythical Blox-fruit Are You?",
        exploreTitle: "Explore the Fruits:",
        resultTitle: "Your Result:",
        startButton: "Which Mythical Fruit Are You?",
        nextButton: "Next",
        tryAgainButton: "Try Again",
        questions: [
            {
                question: "What do you value the most?",
                answers: ["Power", "Freedom", "Wisdom", "Adventure", "Friendship"]
            },
            {
                question: "How would you describe your personality?",
                answers: ["Fiery", "Calm", "Mysterious", "Brave", "Playful"]
            },
            {
                question: "What type of environment do you prefer?",
                answers: ["Volcanoes", "Oceans", "Mountains", "Forests", "Deserts"]
            },
            {
                question: "What is your fighting style?",
                answers: ["Aggressive", "Defensive", "Strategic", "Supportive", "Sneaky"]
            },
            {
                question: "Choose a legendary creature:",
                answers: ["Dragon", "Phoenix", "Griffin", "Unicorn", "Mermaid"]
            },
            {
                question: "What motivates you to keep going?",
                answers: ["Achieving greatness", "Protecting loved ones", "Curiosity", "Proving others wrong", "Finding joy"]
            },
            {
                question: "Which of these is your dream destination?",
                answers: ["A hidden treasure island", "An ancient temple", "A mystical forest", "A bustling city", "A serene beach"]
            },
            {
                question: "How do you approach challenges?",
                answers: ["Charge in headfirst", "Plan carefully", "Find a way around", "Rally friends", "Use clever tricks"]
            },
            {
                question: "What type of music do you enjoy?",
                answers: ["Energetic and loud", "Calm and soothing", "Mysterious and haunting", "Epic and inspiring", "Fun and catchy"]
            },
            {
                question: "If you could have any superpower, what would it be?",
                answers: ["Fire manipulation", "Water control", "Mind reading", "Super strength", "Invisibility"]
            },
            {
                question: "What kind of stories do you prefer?",
                answers: ["Epic adventures", "Romantic tales", "Mysteries", "Heroic sagas", "Comedies"]
            },
            {
                question: "Choose a weapon:",
                answers: ["Sword", "Bow", "Staff", "Spear", "Dagger"]
            },
            {
                question: "What kind of friend are you?",
                answers: ["Loyal", "Supportive", "Adventurous", "Wise", "Fun-loving"]
            },
            {
                question: "If you could be any mythical creature, which would you be?",
                answers: ["Dragon", "Phoenix", "Griffin", "Cerberus", "Basilisk"]
            },
            {
                question: "What is your greatest dream?",
                answers: ["To be the strongest", "To explore the world", "To master magic", "To help others", "To make everyone smile"]
            },
            {
                question: "How do you handle stress?",
                answers: ["I tackle it head-on.", "I prefer to take a step back and think.", "I seek support from friends.", "I try to stay calm and composed.", "I find a creative outlet."]
            },
            {
                question: "What role do you usually take in a group project?",
                answers: ["Leader, directing the team.", "Organizer, keeping everything on track.", "Contributor, sharing my ideas.", "Supporter, helping others with their tasks.", "Innovator, coming up with unique solutions."]
            },
            {
                question: "How do you prefer to spend your free time?",
                answers: ["Engaging in sports or physical activities.", "Reading or learning something new.", "Hanging out with friends and family.", "Creating art or music.", "Exploring nature or traveling."]
            },
            {
                question: "What motivates you to succeed?",
                answers: ["Personal ambition and goals.", "Recognition and praise from others.", "Making a positive impact.", "The joy of learning and growth.", "Competing and being the best."]
            },
            {
                question: "How do you react to criticism?",
                answers: ["I take it constructively and learn from it.", "I feel hurt but try to improve.", "I defend my choices and stand firm.", "I reflect on it and see if it’s valid.", "I ignore it if it’s unfounded."]
            },
            {
                question: "What is your decision-making style?",
                answers: ["I rely on logic and analysis.", "I trust my gut feelings.", "I consider the opinions of others.", "I weigh the pros and cons carefully.", "I seek advice before deciding."]
            },
            {
                question: "How would your friends describe you?",
                answers: ["Outgoing and sociable.", "Thoughtful and introspective.", "Energetic and fun-loving.", "Supportive and reliable.", "Creative and imaginative."]
            },
            {
                question: "What do you value most in friendships?",
                answers: ["Loyalty and trust.", "Fun and shared interests.", "Deep conversations and understanding.", "Support and encouragement.", "Diversity and different perspectives."]
            },
            {
                question: "How do you approach challenges?",
                answers: ["With confidence and determination.", "Analyzing the situation thoroughly.", "Seeking help and collaboration.", "Adapting and finding alternative solutions.", "Taking my time to plan carefully."]
            },
            {
                question: "What type of goals do you set for yourself?",
                answers: ["Ambitious and challenging ones.", "Realistic and achievable targets.", "Personal growth and self-improvement.", "Goals that help others and the community.", "Creative and innovative projects."]
            }
        ]
    },
    no: {
        title: "Hvilken mytisk Blox-frukt er du?",
        exploreTitle: "Utforsk fruktene:",
        resultTitle: "Ditt resultat:",
        startButton: "Hvilken mytiske frukt er du?",
        nextButton: "Neste",
        tryAgainButton: "Prøv igjen",
        questions: [
            {
                question: "Hva setter du mest pris på?",
                answers: ["Makt", "Frihet", "Visdom", "Eventyr", "Vennskap"]
            },
            {
                question: "Hvordan ville du beskrevet personligheten din?",
                answers: ["Ildfull", "Rolig", "Mysterisk", "Modig", "Leken"]
            },
            {
                question: "Hvilken type miljø foretrekker du?",
                answers: ["Vulkaner", "Hav", "Fjell", "Skoger", "Ørkener"]
            },
            {
                question: "Hva er din kampstil?",
                answers: ["Aggressiv", "Defensiv", "Strategisk", "Støttende", "Snikete"]
            },
            {
                question: "Velg et legendarisk skapning:",
                answers: ["Drage", "Føniks", "Griffin", "Enhjørning", "Havfrue"]
            },
            {
                question: "Hva motiverer deg til å fortsette?",
                answers: ["Å oppnå storhet", "Å beskytte de du elsker", "Nysgjerrighet", "Å bevise for andre", "Å finne glede"]
            },
            {
                question: "Hvilken av disse er drømmedestinasjonen din?",
                answers: ["En skjult skatteøy", "Et gammelt tempel", "En mystisk skog", "En travel by", "En rolig strand"]
            },
            {
                question: "Hvordan nærmer du deg utfordringer?",
                answers: ["Jeg går inn i det med full kraft", "Planlegger nøye", "Finner en annen vei", "Samler venner", "Bruker smarte triks"]
            },
            {
                question: "Hvilken type musikk liker du?",
                answers: ["Energisk og høylytt", "Rolig og beroligende", "Mysterisk og uhyggelig", "Episk og inspirerende", "Morsom og fengende"]
            },
            {
                question: "Hvis du kunne hatt en superkraft, hva ville det vært?",
                answers: ["Ildmanipulering", "Vanekontroll", "Tankelesing", "Superstyrke", "Usynlighet"]
            },
            {
                question: "Hvilken type historier foretrekker du?",
                answers: ["Episk eventyr", "Romantiske historier", "Mysterier", "Heltesagaer", "Komedier"]
            },
            {
                question: "Velg et våpen:",
                answers: ["Sverd", "Bue", "Stav", "Spyd", "Dagger"]
            },
            {
                question: "Hva slags venn er du?",
                answers: ["Loyal", "Støttende", "Eventyrlysten", "Kyndig", "Morsom"]
            },
            {
                question: "Hvis du kunne være et hvilket som helst mytisk vesen, hvilket ville du vært?",
                answers: ["Drage", "Føniks", "Griffin", "Cerberus", "Basilisk"]
            },
            {
                question: "Hva er din største drøm?",
                answers: ["Å være den sterkeste", "Å utforske verden", "Å mestre magi", "Å hjelpe andre", "Å få alle til å smile"]
            },
            {
                question: "Hvordan håndterer du stress?",
                answers: ["Jeg tar det direkte.", "Jeg tar et steg tilbake og tenker.", "Jeg søker støtte fra venner.", "Jeg prøver å forbli rolig og samlet.", "Jeg finner en kreativ utløp."]
            },
            {
                question: "Hvilken rolle tar du vanligvis i et gruppeprosjekt?",
                answers: ["Leder, som dirigerer teamet.", "Organisator, som holder alt på sporet.", "Bidragsyter, som deler ideene mine.", "Støttespiller, som hjelper andre med oppgavene sine.", "Innovatør, som kommer opp med unike løsninger."]
            },
            {
                question: "Hvordan foretrekker du å bruke fritiden din?",
                answers: ["Engasjere deg i sport eller fysisk aktivitet.", "Lese eller lære noe nytt.", "Henge med venner og familie.", "Skape kunst eller musikk.", "Utforske naturen eller reise."]
            },
            {
                question: "Hva motiverer deg til å lykkes?",
                answers: ["Personlig ambisjon og mål.", "Anerkjennelse og ros fra andre.", "Å gjøre en positiv innvirkning.", "Gleden av å lære og vokse.", "Konkurrere og være den beste."]
            },
            {
                question: "Hvordan reagerer du på kritikk?",
                answers: ["Jeg tar det konstruktivt og lærer av det.", "Jeg blir såret, men prøver å forbedre meg.", "Jeg forsvarer valgene mine og står fast.", "Jeg reflekterer over det og ser om det er gyldig.", "Jeg ignorerer det hvis det ikke er berettiget."]
            },
            {
                question: "Hva er din beslutningstakingstil?",
                answers: ["Jeg stoler på logikk og analyse.", "Jeg stoler på magefølelsen min.", "Jeg vurderer andres meninger.", "Jeg veier fordeler og ulemper nøye.", "Jeg søker råd før jeg bestemmer meg."]
            },
            {
                question: "Hvordan ville vennene dine beskrive deg?",
                answers: ["Utadvendt og sosial.", "Tankefull og innadvendt.", "Energi og morsom.", "Støttende og pålitelig.", "Kreativ og fantasifull."]
            },
            {
                question: "Hva setter du mest pris på i vennskap?",
                answers: ["Loyalitet og tillit.", "Moro og felles interesser.", "Dype samtaler og forståelse.", "Støtte og oppmuntring.", "Mangfold og forskjellige perspektiver."]
            },
            {
                question: "Hvordan nærmer du deg utfordringer?",
                answers: ["Med selvtillit og besluttsomhet.", "Analysere situasjonen grundig.", "Søke hjelp og samarbeid.", "Tilpasse seg og finne alternative løsninger.", "Ta meg tid til å planlegge nøye."]
            },
            {
                question: "Hvilken type mål setter du deg selv?",
                answers: ["Ambisiøse og utfordrende.", "Realistiske og oppnåelige mål.", "Personlig vekst og selvforbedring.", "Mål som hjelper andre og samfunnet.", "Kreative og innovative prosjekter."]
            }
        ]
    }
};

// Initialize current language
let currentLanguage = 'en'; // Default language

// Declare variables for quiz state
let currentQuestionIndex = 0; // Initialize question index
let selectedAnswers = []; // Store selected answers
let allQuestions = translations[currentLanguage].questions; // Initialize with default questions

// Declare the DOM elements after initializing variables
const quizForm = document.getElementById('quiz-form');
const nextButton = document.getElementById('next-button');
const resultDiv = document.getElementById('result');
const resultImage = document.getElementById('result-image');
const resultText = document.getElementById('result-text');
const motivationText = document.getElementById('motivation-text');
const startButton = document.getElementById('start-button');
const tryAgainButton = document.getElementById('try-again-button');

// Function to change the language
function changeLanguage(lang) {
    currentLanguage = lang;
    allQuestions = translations[currentLanguage].questions; // Update questions based on language
    updateContent(); // Call to update the content
}

// Function to update the content based on the selected language
function updateContent() {
    const translation = translations[currentLanguage];

    document.getElementById('title').textContent = translation.title;
    document.getElementById('explore-title').textContent = translation.exploreTitle;
    document.getElementById('result-title').textContent = translation.resultTitle;
    document.getElementById('start-button').textContent = translation.startButton;
    document.getElementById('next-button').textContent = translation.nextButton;
    document.getElementById('try-again-button').textContent = translation.tryAgainButton;

    const randomizedQuestions = getRandomQuestions(); // Get randomized questions
    currentQuestionIndex = 0; // Reset question index
    showQuestion(randomizedQuestions[currentQuestionIndex]); // Show the first question
}

// Load the initial language content
updateContent();

// Handle language switch
document.getElementById('lang-en').addEventListener('click', () => changeLanguage('en'));
document.getElementById('lang-no').addEventListener('click', () => changeLanguage('no'));

// Function to randomize questions
function getRandomQuestions() {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 12); // Select the first 12 questions
}

const fruitProfiles = {
    "Gravity Fruit": {
        description: {
            en: "The Gravity Fruit grants you control over gravitational forces, allowing you to manipulate the weight of objects and even fly!",
            no: "Gravitasfrukten gir deg kontroll over gravitasjonskrefter, slik at du kan manipulere vekten av objekter og til og med fly!"
        },
        motivation: {
            en: "Just like the Gravity Fruit, you have the power to lift yourself and others up. Believe in your strength and let your dreams soar!",
            no: "Akkurat som Gravitasfrukten, har du makten til å løfte deg selv og andre opp. Tro på din styrke og la drømmene dine sveve!"
        },
        keywords: {
            en: ["Freedom", "Adventure", "Wisdom"],
            no: ["Frihet", "Eventyr", "Visdom"]
        }
    },
    "Mammoth Fruit": {
        description: {
            en: "With the Mammoth Fruit, you gain the massive strength and resilience of the great beasts, making you unstoppable!",
            no: "Med Mammothfrukten får du den enorme styrken og motstandskraften til de store dyrene, noe som gjør deg ustoppelig!"
        },
        motivation: {
            en: "Embrace your inner strength! Just like the Mammoth, you can face any challenge with courage and determination.",
            no: "Omfavn din indre styrke! Akkurat som Mammoth, kan du møte enhver utfordring med mot og besluttsomhet."
        },
        keywords: {
            en: ["Power", "Strength", "Resilience"],
            no: ["Makt", "Styrke", "Motstandskraft"]
        }
    },
    "T-Rex Fruit": {
        description: {
            en: "This fruit gives you the ferocity and power of the T-Rex, making you a force to be reckoned with in any battle!",
            no: "Denne frukten gir deg styrken og aggresjonen til T-Rex, noe som gjør deg til en kraft å regne med i enhver kamp!"
        },
        motivation: {
            en: "Channel the fierce spirit of the T-Rex! You have what it takes to conquer your fears and achieve greatness!",
            no: "Kanalisér den fierce ånden til T-Rex! Du har det som trengs for å overvinne frykten din og oppnå storhet!"
        },
        keywords: {
            en: ["Aggressive", "Brave"],
            no: ["Aggressiv", "Modig"]
        }
    },
    "Dough Fruit": {
        description: {
            en: "The Dough Fruit allows you to create and manipulate dough, shaping it into powerful forms to overcome your foes.",
            no: "Doughfrukten lar deg lage og manipulere deig, og forme den til kraftige former for å overvinne fiendene dine."
        },
        motivation: {
            en: "Just like the Dough Fruit, you can shape your future! Use your creativity and imagination to build something amazing!",
            no: "Akkurat som Doughfrukten kan du forme fremtiden din! Bruk din kreativitet og fantasi for å bygge noe fantastisk!"
        },
        keywords: {
            en: ["Creative", "Playful"],
            no: ["Kreativ", "Leken"]
        }
    },
    "Shadow Fruit": {
        description: {
            en: "The Shadow Fruit grants you the ability to blend into the darkness, making you stealthy and elusive.",
            no: "Skygfrukten gir deg evnen til å blande deg inn i mørket, noe som gjør deg snikete og unnvikende."
        },
        motivation: {
            en: "Embrace your uniqueness! Like the Shadow, your true potential shines brightest when you are true to yourself.",
            no: "Omfavn din unikhet! Som Skyggen skinner ditt sanne potensial sterkest når du er tro mot deg selv."
        },
        keywords: {
            en: ["Mysterious", "Stealthy"],
            no: ["Mysterisk", "Snikete"]
        }
    },
    "Spirit Fruit": {
        description: {
            en: "With the Spirit Fruit, you can harness spiritual energy to empower yourself and those around you.",
            no: "Med Spiritfrukten kan du utnytte åndelig energi for å styrke deg selv og de rundt deg."
        },
        motivation: {
            en: "Let your spirit shine! Just as the Spirit Fruit brings strength to others, you have the power to inspire and uplift those around you.",
            no: "La ånden din skinne! Akkurat som Spiritfrukten gir styrke til andre, har du makten til å inspirere og løfte de rundt deg."
        },
        keywords: {
            en: ["Curiosity", "Joy"],
            no: ["Nysgjerrighet", "Glede"]
        }
    },
    "Dragon Fruit": {
        description: {
            en: "The Dragon Fruit gives you the fierce spirit and abilities of a dragon, allowing you to unleash fiery power!",
            no: "Dragefrukten gir deg den fierce ånden og evnene til en drage, noe som lar deg slippe løs brennende kraft!"
        },
        motivation: {
            en: "Roar like a dragon! Your courage and passion can ignite the fire within you to pursue your dreams!",
            no: "Brøl som en drage! Ditt mot og din lidenskap kan tenne ilden i deg for å forfølge drømmene dine!"
        },
        keywords: {
            en: ["Power", "Aggressive"],
            no: ["Makt", "Aggressiv"]
        }
    },
    "Leopard Fruit": {
        description: {
            en: "With the Leopard Fruit, you gain agility and speed, enabling you to move with grace and precision.",
            no: "Med Leopardfrukten får du smidighet og hastighet, noe som gjør at du kan bevege deg med eleganse og presisjon."
        },
        motivation: {
            en: "Like the Leopard, you are swift and agile! Trust your instincts and chase after your goals with determination.",
            no: "Som Leoparden er du rask og smidig! Stol på instinktene dine og jag etter målene dine med besluttsomhet."
        },
        keywords: {
            en: ["Agility", "Clever"],
            no: ["Smidighet", "Kløktig"]
        }
    },
    "Kitsune Fruit": {
        description: {
            en: "This fruit bestows upon you the cleverness and magical abilities of the Kitsune, allowing you to outsmart your opponents.",
            no: "Denne frukten gir deg kløkt og magiske evner til Kitsune, som lar deg overvinne motstanderne dine."
        },
        motivation: {
            en: "Be clever like the Kitsune! Your intelligence and creativity are your greatest assets in overcoming obstacles.",
            no: "Vær smart som Kitsune! Din intelligens og kreativitet er dine største ressurser for å overvinne hindringer."
        },
        keywords: {
            en: ["Clever", "Creative"],
            no: ["Kløktig", "Kreativ"]
        }
    },
    "Meme Fruit": {
        description: {
            en: "The Meme Fruit gives you the power to create laughter and joy, spreading happiness wherever you go.",
            no: "Meme-frukten gir deg makten til å skape latter og glede, og spre lykke hvor enn du går."
        },
        motivation: {
            en: "Spread joy like the Meme Fruit! Your positivity can light up the lives of those around you. Never underestimate the power of a smile!",
            no: "Spred glede som Meme-frukten! Din positivitet kan lyse opp livene til de rundt deg. Aldri undervurder kraften av et smil!"
        },
        keywords: {
            en: ["Joy", "Fun-loving"],
            no: ["Glede", "Morsom"]
        }
    },
    "Control Fruit": {
        description: {
            en: "With the Control Fruit, you can manipulate your surroundings, bending them to your will with precision and focus.",
            no: "Med Kontrollfrukten kan du manipulere omgivelsene dine og bøye dem til din vilje med presisjon og fokus."
        },
        motivation: {
            en: "Take control of your destiny! Like the Control Fruit, your determination can shape your path to success.",
            no: "Ta kontroll over din skjebne! Som Kontrollfrukten kan din besluttsomhet forme din vei til suksess."
        },
        keywords: {
            en: ["Control", "Strategic"],
            no: ["Kontroll", "Strategisk"]
        }
    },
    "Venom Fruit": {
        description: {
            en: "The Venom Fruit grants you toxic powers, but with great power comes the responsibility to use it wisely.",
            no: "Venom-frukten gir deg giftige krefter, men med stor makt følger ansvaret for å bruke det klokt."
        },
        motivation: {
            en: "Harness your power wisely! Like the Venom Fruit, your choices can create change. Use your strength to protect and inspire others.",
            no: "Utnytt kraften din klokt! Som Venom-frukten kan valgene dine skape endringer. Bruk styrken din til å beskytte og inspirere andre."
        },
        keywords: {
            en: ["Power", "Aggressive"],
            no: ["Makt", "Aggressiv"]
        }
    }
};

// Function to start the quiz
startButton.addEventListener('click', () => {
    document.querySelector('.fruit-images').style.display = 'none'; // Hide fruit images
    startButton.style.display = 'none'; // Hide start button
    quizForm.style.display = 'block'; // Show quiz form
    nextButton.style.display = 'block'; // Show next button
    selectedAnswers = []; // Reset answers
    currentQuestionIndex = 0; // Reset question index
    const randomizedQuestions = getRandomQuestions(); // Get randomized questions
    showQuestion(randomizedQuestions[currentQuestionIndex]); // Show the first question
});

// Function to show a specific question
function showQuestion(question) {
    quizForm.innerHTML = ''; // Clear previous question
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `<p>${currentQuestionIndex + 1}. ${question.question}</p>`;
    question.answers.forEach((answer) => {
        questionElement.innerHTML += `
            <label>
                <input type="radio" name="question${currentQuestionIndex}" value="${answer}" required>
                ${answer}
            </label>
        `;
    });
    quizForm.appendChild(questionElement);

    // Hide the description bubble when showing a new question
    const descriptionBubble = document.getElementById('fruit-description');
    descriptionBubble.style.display = 'none';
}

function showResult() {
    // Initialize fruit counts
    const fruitCount = {
        "Gravity Fruit": 0,
        "Mammoth Fruit": 0,
        "T-Rex Fruit": 0,
        "Dough Fruit": 0,
        "Shadow Fruit": 0,
        "Spirit Fruit": 0,
        "Dragon Fruit": 0,
        "Leopard Fruit": 0,
        "Kitsune Fruit": 0,
        "Meme Fruit": 0,
        "Control Fruit": 0,
        "Venom Fruit": 0
    };

    // Count how many times each fruit is selected based on the answers
    selectedAnswers.forEach(answer => {
        for (const fruit in fruitCount) {
            if (fruitProfiles[fruit].keywords[currentLanguage].includes(answer)) {
                fruitCount[fruit]++;
            }
        }
    });

    // Create a list of fruits with positive counts
    const availableFruits = [];
    for (const fruit in fruitCount) {
        if (fruitCount[fruit] > 0) {
            availableFruits.push(fruit);
        }
    }

    // Check if there are any available fruits
    if (availableFruits.length === 0) {
        alert("No matching fruit found! Please try answering the questions differently.");
        return; // Stop further processing if no fruits are available
    }

    // Randomly select one of the available fruits
    const randomFruit = availableFruits[Math.floor(Math.random() * availableFruits.length)];

    // Get the profile for the selected fruit
    const profile = fruitProfiles[randomFruit];
    const imageUrl = `images/${randomFruit.replace(/ /g, "_")}.png`;

    // Update result display based on current language
    motivationText.textContent = profile.motivation[currentLanguage]; 
    motivationText.style.display = 'block';
    resultText.textContent = currentLanguage === 'en' ? `You are the ${randomFruit}!` : `Du er ${randomFruit}!`;
    resultImage.src = imageUrl;

    // Show results
    resultDiv.style.display = 'block';
    tryAgainButton.style.display = 'block';
}

// Handle next button click
nextButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    const selectedAnswer = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedAnswer) {
        selectedAnswers.push(selectedAnswer.value); // Store the selected answer
        currentQuestionIndex++;

        if (currentQuestionIndex < 12) {
            showQuestion(allQuestions[currentQuestionIndex]);
        } else {
            nextButton.style.display = 'none';
            showResult();
        }
    } else {
        alert("Please select an answer before proceeding.");
    }
});

// Functionality for the "Try Again" button
tryAgainButton.addEventListener('click', () => {
    // Reset everything
    selectedAnswers = []; // Reset selected answers
    resultDiv.style.display = 'none'; // Hide result
    tryAgainButton.style.display = 'none'; // Hide "Try Again" button
    motivationText.style.display = 'none'; // Hide motivational text
    quizForm.style.display = 'none'; // Hide quiz form
    document.querySelector('.fruit-images').style.display = 'block'; // Show fruit images
    startButton.style.display = 'block'; // Show start button again
});

// Functionality to show fruit description in a speech bubble
const fruitImages = document.querySelectorAll('.fruit');
const descriptionBubble = document.getElementById('fruit-description');

fruitImages.forEach(image => {
    image.addEventListener('click', (event) => {
        // Hide any previously shown bubble
        descriptionBubble.style.display = 'none';

        const description = event.target.getAttribute('data-description');
        descriptionBubble.textContent = description;

        const rect = event.target.getBoundingClientRect();

        // Position the speech bubble near the clicked image
        descriptionBubble.style.left = `${rect.left + window.scrollX}px`;
        descriptionBubble.style.top = `${rect.bottom + window.scrollY + 10}px`; // Offset below the image
        descriptionBubble.style.display = 'block'; // Show the speech bubble

        // Allow clicking outside the bubble to hide it
        document.addEventListener('click', (e) => {
            if (!descriptionBubble.contains(e.target) && e.target !== event.target) {
                descriptionBubble.style.display = 'none';
            }
        }, { once: true }); // Remove listener after the first click
    });
});
