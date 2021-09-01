//defining the variables
const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answerText'));

let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let lifeLost = 0;
let questionCounter = 0;
let questionsLeft = [];

let scytheShow = document.querySelector('.lifeline[data-life="1"');

console.log(scytheShow);
//creating constants
const answerScore = 1;
const maxQuestions = 20;

const maxScoreBonus = 5;
const onelifeBonus = 2;

//this is what we want to happen when the page is loaded
function startGame(){

    scytheShow.style.removeProperty('display:none');
    questionCounter = 0;
    score = 0;
    lifeLost = 0;

    questionsLeft = [...questions];
    nextQuestion();
};

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
    questionNo.innerText = `Question: ${questionCounter}/${maxQuestions}`;

    const questionIndex = Math.floor(Math.random() * questionsLeft.length);
        currentQuestion = questionsLeft[questionIndex];
        question.innerText = currentQuestion.question;

        //this will add the corresposnding question's answers to the correct buttons
        answers.forEach( answer => {
            const number = answer.dataset['answer'];
            answer.innerText = currentQuestion['answer' + number];
        });

        //removing current question from the available list
        questionsLeft.splice(questionIndex, 1);

        //this allows the correct answer to be selected if there is a question
        acceptingAnswer = true;
};


//this is adding a click listener to the answers to generate a new question
answers.forEach(answer => {
    answer.addEventListener('click', e => {

        //if no answer is required, return nothing
            if(!acceptingAnswer) return;

        //this will check if the answer selected is correct
            acceptingAnswer = false;
            const selectedOption = e.target;
            const selectedAnswer = selectedOption.dataset['answer'];
            const classResult = selectedAnswer == currentQuestion.correctAnswer ? 'correct' : 'incorrect';
                if(classResult === 'correct'){
                    increaseScore(answerScore);
                } else {
                    decreaseLife(answerScore);
                }


            const parentBtn = selectedOption.parentElement;
            parentBtn.classList.add(classResult);

//after clicking an answer this will generate a new question
            
            setTimeout( () => {
                parentBtn.classList.remove(classResult);
                nextQuestion();
            }, 750);
            
    });
});

function increaseScore(){
    score += answerScore;
}

function decreaseLife(){
    lifeLost += answerScore;

    //this will make the scythe icons disappear depending on how many lives lost
    let loseLife = document.body.querySelector(`.lifeline[data-life="${lifeLost}"]`);
    loseLife.setAttribute('style', 'display:none');

   // let byeLife = loseLife.dataset['life'];
//    byeLife.style.setAttribute('style', 'display:none');
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

// function reset lives

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
