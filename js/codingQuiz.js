//Variables
var questions = [
    {
    question: 'What state do you live in?',
    choices: ['Florida','Alabama','California','Georgia'],
    answer: 'Florida'
},
{
        question: 'Who is your favorite person in the world?',
        choices: ['Emma Dill', 'The Pope', 'Mother Theresa', 'Otis'],
        answer: 'Emma Dill'
},
{
    question: 'Where did you get engaged?',
    choices: ['Texas', 'Orlando', 'Tampa', 'California'],
    answer: 'Orlando'
}
]
var rightAnswers = 0; 
var activeQuestion = 0; 
var timer=60;
var choices = document.querySelector("#questionChoices");
var activeQuestion = 0;
var userSelections = [];

//EventListeners
document.getElementById('startButton').addEventListener('click',startQuiz);
document.getElementById('submitScore').addEventListener('click',submitResults);
document.getElementById('questionChoices').addEventListener('click',questionSelected);

//Timer function
function onTimer() {
    document.getElementById('timer').innerHTML = timer;
    timer--;
    if (timer < 0) {
      alert('You lose!');
    }
    else {
      setTimeout(onTimer, 1000);
    }
  }
//Start the Quiz
function startQuiz(e){
    e.preventDefault();
    onTimer();
    var firstQuestion = document.getElementById('Question').classList.remove('hide'); 
    var startButton = document.getElementById('startButton').classList.add('hide');
    document.querySelector('#questionTitle').innerHTML = questions[activeQuestion].question;
    for(i=0;i<questions[activeQuestion].choices.length; i++){
        var button = document.createElement('button');
        button.setAttribute("class","btn btn-secondary");
        button.setAttribute("data",questions[activeQuestion].choices[i]);
        button.innerHTML = questions[activeQuestion].choices[i];
        button.setAttribute("id",i);
        choices.append(button);
    }
}

//Submit the Results
function submitResults(e){
e.preventDefault();
var highScores = [];
if(localStorage.getItem('pastHighScores')){
    highScores = JSON.parse(localStorage.getItem('pastHighScores'));
}

highScores.push({
        initials: document.getElementById('userInitials').value,
        score: rightAnswers
    })
localStorage.setItem('pastHighScores', JSON.stringify(highScores));
window.location.href = "\highScores.html";
}

//Show the next question
function nextQuestion(){
    for(i=0; i<questions[activeQuestion].choices.length; i++){
        document.getElementById(i).innerHTML = questions[activeQuestion].choices[i];
        document.getElementById('questionTitle').innerHTML = questions[activeQuestion].question;
}
}

//Hide the question div
function hideQuestions(){
    document.querySelector("#Question").classList.add('hide');
}

//Validate if the user answered the question correct
function answerValidation(){
    if(questions[activeQuestion].answer == event.target.innerHTML){
        rightAnswers++;
    }else{
        timer = timer-10; 
    }
}

//Handle when user selects an answer
function questionSelected(event){
    event.preventDefault();
    
    if(event.target.tagName == 'BUTTON'){
        answerValidation();
        activeQuestion++;
        if(activeQuestion == questions.length){
            showResults();
            hideQuestions();
        }else{
            nextQuestion();
            }  
        }
        
    }

//Show the results of the quiz
function showResults(){
    document.getElementById('finalResults').innerHTML = rightAnswers+ "/2"; 
    var results = document.getElementById('results').classList.remove('hide');
}
