const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const quizOptions = document.getElementById("quiz-options");
const option1 = document.getElementById("pheobe-btn");
const option2 = document.getElementById("joey-btn");
const option3 = document.getElementById("rachel-btn");
const option4 = document.getElementById("ross-btn");
const option5 = document.getElementById("monica-btn");
const option6 = document.getElementById("chandler-btn");

const answer1 = document.getElementById("answer1-btn");
const answer2 = document.getElementById("answer2-btn");
const answer3 = document.getElementById("answer3-btn");
const answer4 = document.getElementById("answer4-btn");
const next = document.getElementById("next-btn");
let shuffleQuestions = 0;
let currentQuestion = 0;
let quizLength = 4;

option1.addEventListener("click", startGame);
option2.addEventListener("click", startGame);
option3.addEventListener("click", startGame);
option4.addEventListener("click", startGame);
option5.addEventListener("click", startGame);
option6.addEventListener("click", startGame);

function startGame(event) {
    let option = event.target.value;
    if (option === "option1") {
        shuffleQuestions = pheobeQuestions.sort(() => Math.random() - 0.5);
        currentQuestionSet = shuffleQuestions;
        playerOption = "pheobe"
    }

}

function buildQuestions() {
    if (currentQuestion >= quizLength) {

    }
}