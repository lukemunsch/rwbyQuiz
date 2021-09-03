//defining the variables
const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answerText'));

let currentQuestion = {};
let answerRequired = true;
let score = 0;
let lifeLost = 0;
let questionCounter = 0;
let questionsLeft = [];

//creating constants
const answerScore = 1;
const maxQuestions = 20;

let firstLife = document.querySelector('.lifeline[data-life="1"');
let secLife = document.querySelector('.lifeline[data-life="2"');
let lastLife = document.querySelector('.lifeline[data-life="3"');

const maxScoreBonus = 5;
const onelifeBonus = 2;

//this is what we want to happen when the page is loaded
function startGame(){
    questionCounter = 0;
    score = 0;
    lifeLost = 0;

    firstLife.removeAttribute('style', 'display:none');
    secLife.removeAttribute('style', 'display:none');
    lastLife.removeAttribute('style', 'display:none');

    questionsLeft = [...questions];
    nextQuestion();
}

//this will pull a new question from the available array of questinos
function nextQuestion(){
  if(questionsLeft === 0 || questionCounter >= maxQuestions){
        actualScore();
        ldrbrdReveal();
  } else if (lifeLost === 3){
        endGame();
  }
  
    questionCounter++;
    let questionNo = document.getElementById('questionNumber');
    questionNo.innerText = `Question: ${questionCounter} of ${maxQuestions}`;

    const questIndex = Math.floor(Math.random() * questionsLeft.length);
        currentQuestion = questionsLeft[questIndex];
        question.innerText = currentQuestion.question;

        //this will add the corresposnding question's answers to the correct buttons
        answers.forEach( answer => {
            const number = answer.dataset['answer'];
            answer.innerText = currentQuestion['answer' + number];
        });

        //removing current question from the available list
        questionsLeft.splice(questIndex, 1);

        //this allows the correct answer to be selected if there is a question
        answerRequired = true;
}


//this is adding a click listener to the answers to generate a new question
answers.forEach(answer => {
    answer.addEventListener('click', e => {

        //if no answer is required, return nothing
            if(!answerRequired) return;

        //this will check if the answer selected is correct
            answerRequired = false;
            const selectedOption = e.target.parentElement;
            const selectedAnswer = selectedOption.dataset['answer'];
            const classResult = selectedAnswer == currentQuestion.correctAnswer ? 'correct' : 'incorrect';
                if(classResult === 'correct'){ 
                    increaseScore();
                } else {
                    decreaseLife();
                }

                //this will turn correct answer green when clicking the correct or red when incorrect

            const parentBtn = selectedOption.parentElement;
            parentBtn.classList.add(classResult);

//after clicking an answer this will generate a new question
            
            setTimeout( () => {
                parentBtn.classList.remove(classResult);

                nextQuestion();
            }, 750);
            
    });
})

//setting the incrementing score system for points
function increaseScore(){
    score += answerScore;
}
// setting the life losing functionality to the site
function decreaseLife(){
    lifeLost += answerScore;

    //this will make the scythe icons disappear depending on how many lives lost
    let loseLife = document.body.querySelector(`.lifeline[data-life="${lifeLost}"]`);
    loseLife.setAttribute('style', 'display:none');

}

//this code is to increase the score depending on how many lives are still remaining
function actualScore(){
    if(lifeLost === 0){
        score += maxScoreBonus;
    } else if(lifeLost === 1){
        score += onelifeBonus;
    } else {
        score;
    }
}

// this will allow you to see what the purpose of the game is actually about in case you have ventured to the site by accident
function aboutChange(){
    let about = document.getElementById('about-game');
    if(about.style.display === 'none'){
        about.removeAttribute('style', 'display:none');
    } else {
        about.setAttribute('style', 'display:none');
    }
}

// this will bring up the game over screen for not completing the quiz
function endGame(){
        let scaryFace = document.getElementById('gameOver');
        if(scaryFace.style.display === 'none'){
            scaryFace.removeAttribute('style', 'display:none');
        }
}
//close the game over screen
function endGameClose(){
    let restartGame = document.getElementById('gameOver');
    if(restartGame.style.display !== "none"){
        restartGame.setAttribute('style' ,'display:none');
        
        startGame();
    }
}

//function to make modal for rules
function modalChange(){
    let modChange = document.getElementById('rules-modal');
    if(modChange.style.display === "none"){
        modChange.removeAttribute('style', 'display:none');
    } else {
        modChange.setAttribute('style' ,'display:none');
    }
}
//opening the  success popup
function ldrbrdReveal(){
    let brdUp = document.getElementById('leaderboard-box');
    if(brdUp.style.display === 'none'){
        brdUp.removeAttribute('style', 'display:none');
        let points = document.getElementById('userScore');
        points.innerText = `You beat Salem with a score of: ${score}`;
    }
}
// closing the success screen
function ldrbrdClose(){
    let brdDown = document.getElementById('leaderboard-box');
    if(brdDown.style.display !== "none"){
        brdDown.setAttribute('style' ,'display:none');
        
        startGame();
    }
}



startGame();
