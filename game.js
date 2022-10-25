const question = document.querySelector('#question');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const choices = Array.from(document.querySelectorAll('.choice-text'));

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is one thing elephants cannot do?',
        choice1: 'Sleep standing up',
        choice2: 'Jump',
        choice3: 'Have babies past 50',
        choice4: 'Yawn',
        answer: 2,
    },
    {
        question: 'What is the age of the oldest living elephant?',
        choice1: '89',
        choice2: '72',
        choice3: '105',
        choice4: '96',
        answer: 3,
    },
    {
        question: 'How long is an elephant pregnant for?',
        choice1: '16 months',
        choice2: '9 months',
        choice3: '12 months',
        choice4: '22 months',
        answer: 4,
    },
    {
        question: 'How do elephants greet each other?',
        choice1: 'By flapping their ears',
        choice2: 'By stomping the ground',
        choice3: 'By bowing heads',
        choice4: 'By hugging their trunks',
        answer: 4,
    },
]