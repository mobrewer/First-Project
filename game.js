const question = document.querySelector('#question')
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')
const choices = Array.from(document.querySelectorAll('.choice-text'))

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
        choice1: 'By flapping their ears at each other',
        choice2: 'By stomping the ground',
        choice3: 'By bowing heads at one another',
        choice4: 'By hugging each others trunks',
        answer: 4,
    },
    {
        question: 'What is the main difference between an African elephant and an indian elephant?',
        choice1: 'Indian elephants have smaller ears',
        choice2: 'African elephants have longer tails',
        choice3: 'African elephants speak Swahili',
        choice4: 'Indian elephants have bigger tusks',
        answer: 1,
    },
    {
        question: 'What is a baby elephant called?',
        choice1: 'A pup',
        choice2: 'A heffalump',
        choice3: 'A calf',
        choice4: 'David',
        answer: 3,
    },
    {
        question: 'Why are elephants endangered?',
        choice1: 'Habit destruction',
        choice2: 'Exploitation of elephants in zoos and amusement parks',
        choice3: 'People hunt them for their tusks',
        choice4: 'All of the above',
        answer: 4,
    },
    {
        question: 'How do elephants communicate?',
        choice1: 'Through vibrations in the ground',
        choice2: 'Signaling with their feet',
        choice3: 'By flapping their ears',
        choice4: 'By trumpeting (sound made by pushing air through the trunk)',
        answer: 1,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 8

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('./end.html')
    }
    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()