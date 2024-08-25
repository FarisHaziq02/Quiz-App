const questions = [
    {
        question: "Which ancient civilization is known for building the pyramids",
        answers: [
            { text: "Mesopotamian", correct: false },
            { text: "Roman", correct: false },
            { text: "Egyptian", correct: true },
            { text: "Greek", correct: false },
        ]
    },
    {
        question: "In what year did World War II end ",
        answers: [
            { text: "1942", correct: false },
            { text: "1945", correct: true },
            { text: "1948", correct: false },
            { text: "1950", correct: false },
        ]
    },
    {
        question: "Who was the first Roman Emperor",
        answers: [
            { text: "Julius Caesar", correct: false },
            { text: "Augustus", correct: true },
            { text: "Nero", correct: false },
            { text: "Caligula", correct: false},
        ]
    },
    {
        question: "The Magna Carta was signed in which year",
        answers: [
            { text: "1066", correct: false },
            { text: "1215", correct: true },
            { text: "1492", correct: false },
            { text: "1776", correct: false },
        ]
    },
    {
        question: "Who discovered the sea route to India by sailing around the Cape of Good Hope",
        answers: [
            { text: "Ferdinand Magellan", correct: false },
            { text: "Christopher Columbus", correct: false },
            { text: "Vasco da Gama", correct: true },
            { text: "Marco Polo", correct: false },
        ]
    },
    {
        question: "In which country did the Industrial Revolution begin",
        answers: [
            { text: "United States", correct: false },
            { text: "Germany", correct: false },
            { text: "France", correct: false },
            { text: "United Kingdom", correct: true },
        ]
    },
    {
        question: "What was the main symbol of the French Revolution",
        answers: [
            { text: "Guillotine", correct: true },
            { text: "Eiffel Tower", correct: false },
            { text: "Bastille", correct: false },
            { text: "Notre Dame", correct: false },
        ]
    },
    {
        question: "The Cuban Missile Crisis occured in which year",
        answers: [
            { text: "1959", correct: false },
            { text: "1962", correct: true },
            { text: "1965", correct: false },
            { text: "1968", correct: false },
        ]
    },
    {
        question: "The Renaissance began in which country",
        answers: [
            { text: "France", correct: false },
            { text: "Spain", correct: false },
            { text: "Italy", correct: true },
            { text: "England", correct: false },
        ]
    },
    {
        question: "The assassination of which archduke led to the start of World War I",
        answers: [
            { text: "Archduke Charles", correct: false },
            { text: "Archduke Ferdinand", correct: true },
            { text: "Archduke William", correct: false },
            { text: "Archduke Leopold", correct: false },
        ]
    },
    {
        question: "Who was the last Tsar of Russia",
        answers: [
            { text: "Alexander II", correct: false },
            { text: "Nicholas II", correct: true },
            { text: "Peter the Great", correct: false },
            { text: "Ivan the Terrible", correct: false },
        ]
    },
    {
        question: "The Great Wall of China was primarily built during which dynasty",
        answers: [
            { text: "Ming Dynasty", correct: true },
            { text: "Qing Dynasty", correct: false },
            { text: "Han Dynasty", correct: false },
            { text: "Tang Dynasty", correct: false },
        ]
    },
    {
        question: "Which country colonized the Philippines for over 300 years",
        answers: [
            { text: "Portugal", correct: false },
            { text: "France", correct: false },
            { text: "Spain", correct: true },
            { text: "Netherlands", correct: false },
        ]
    },
    {
        question: "Who was the philosopher who taught Alexander the Great",
        answers: [
            { text: "Plato", correct: false },
            { text: "Socrates", correct: false },
            { text: "Aristotle", correct: true },
            { text: "Pythagoras", correct: false },
        ]
    },
    {
        question: "The Black Death, which killed millions in Europe, was caused by what",
        answers: [
            { text: "Bacteria", correct: true },
            { text: "Virus", correct: false },
            { text: "Fungus", correct: false },
            { text: "Parasite", correct: false },
        ]
    },
    {
        question: "Who was the first woman to win a Nobel Prize",
        answers: [
            { text: "Jane Addams", correct: false },
            { text: "Marie Curie", correct: true },
            { text: "Rosalind Franklin", correct: false },
            { text: "Malala Yousafzai", correct: false },
        ]
    },
    {
        question: "What was the language spoken in ancient Rome",
        answers: [
            { text: "Greek", correct: false },
            { text: "Latin", correct: true },
            { text: "Aramaic", correct: false },
            { text: "Hebrew", correct: false },
        ]
    },
    {
        question: "Nelson Mandela was released from prison in which year",
        answers: [
            { text: "1988", correct: false },
            { text: "1990", correct: true },
            { text: "1992", correct: false },
            { text: "1994", correct: false },
        ]
    },
    {
        question: "Who was the President of the Confederate States during the American Civil War",
        answers: [
            { text: "Robert E. Lee", correct: false },
            { text: "Jefferson Davis", correct: true },
            { text: "Ulysses S. Grant", correct: false },
            { text: "Andrew Johnson", correct: false },
        ]
    },
    {
        question: "Who was the principal author of the Declaration of Independence",
        answers: [
            { text: "George Washington", correct: false },
            { text: "John Adams", correct: false },
            { text: "Thomas Jefferson", correct: true },
            { text: "Benjamin Franklin", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();