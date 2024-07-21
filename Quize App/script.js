const questions = [
    {
        question: "which team won the world cup 2023?",
        answere: [
            { text: "Srilanka", correct: false },
            { text: "India", correct: false },
            { text: "Australia", correct: true },
            { text: "England", correct: false },
        ]
    },
    {
        question: "which team won the Semifinal 2 in world cup 2023?",
        answere: [
            { text: "South Africa", correct: false },
            { text: "India", correct: true },
            { text: "Australia", correct: false },
            { text: "Newzeland", correct: false },
        ]
    },
    {
        question: "Highest run scorer  in world cup 2023?",
        answere: [
            { text: "Travis Head", correct: false },
            { text: "Rohit Sharma", correct: false },
            { text: "Virat kholi", correct: true },
            { text: "Surya kumar Yadav", correct: false },
        ]
    },
    {
        question: "Highest Wicket Taker  in world cup 2023?",
        answere: [
            { text: "Jasprit Bumrah", correct: false },
            { text: "Md. Shami", correct: true },
            { text: "Pat Cumminse", correct: false },
            { text: "Md. Siraj", correct: false },
        ]
    },
    {
        question: "Which team won the T20 world cup 2024?",
        answere: [
            { text: "Australia", correct: false },
            { text: "India", correct: true },
            { text: "England", correct: false },
            { text: "Southafrica", correct: false },
        ]
    },
    {
        question: "Highest run scorer in T20 world cup 2024?",
        answere: [
            { text: "Rahmanullah Gurbaz (AFG)", correct: true },
            { text: "Rohit Sharma", correct: false },
            { text: "Travis Head", correct: false },
            { text: "Q Decock", correct: false },
        ]
    },
    {
        question: "Who is the man of the Tournament in T20 2024?",
        answere: [
            { text: "Jasprit Bumrah", correct: true },
            { text: "Rohit Sharma", correct: false },
            { text: "Virat Kholi", correct: false },
            { text: "Axar Patel", correct: false },
        ]
    },
    {
        question: "How many runs has Virat Kohli scored in the 2023 World Cup?",
        answere: [
            { text: "685", correct: false },
            { text: "765", correct: true },
            { text: "795", correct: false },
            { text: "715", correct: false },
        ]
    },
    {
        question: "How many matches won by India in 2023 World Cup?",
        answere: [
            { text: "10", correct: false },
            { text: "9", correct: true },
            { text: "8", correct: false },
            { text: "5", correct: false },
        ]
    },
    {
        question: "How many matches won by australia in 2023 World Cup?",
        answere: [
            { text: "8", correct: false },
            { text: "7", correct: true },
            { text: "6", correct: false },
            { text: "5", correct: false },
        ]
    }


];
const questionElement = document.getElementById("question")
const answereButton = document.getElementById("answere-buttons");
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

    currentQuestion.answere.forEach(answere => {
        const button = document.createElement("button")
        button.innerHTML = answere.text;
        button.classList.add("btn");
        answereButton.appendChild(button);
        if (answere.correct) {
            button.dataset.correct = answere.correct;
        }
        button.addEventListener("click", selectAnswere)
    });
}
function resetState() {
    nextButton.style.display = "none";
    while (answereButton.firstChild) {
        answereButton.removeChild(answereButton.firstChild);
    }
}
function selectAnswere(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answereButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex <questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz()
