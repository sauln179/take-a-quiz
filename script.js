//Sets up all buttons for use
var startButton = document.querySelector("#start-btn");
var scoreButton = document.querySelector("#score-btn");
var nextButton = document.querySelector("#next-btn");
var finishButton = document.querySelector("#finish-btn");

//Sets up element
var questionContainerElement = document.querySelector("#question-container");
var questionElement = document.querySelector("#question");
var answerButtonsElement = document.querySelector("#answer-buttons")
//Makes each button clcikable
var buttonElement1 = document.querySelector("#btn1");
var buttonElement2 = document.querySelector("#btn2");
var buttonElement3 = document.querySelector("#btn3");
var buttonElement4 = document.querySelector("#btn4");
//Base Score
var score = 0;
//Final score variable to store
var finalScore;
//Used to calculate score.
var finalCount;
var user;
let currentQuestionIndex = 0;
//An array with questions, and answers
var question =[
  {
    question: 'How do you hide a div in style.css ?',
    answers:[
      {text: 'display: none', correct:true},
      {text: 'class ="hide"', correct:false},
      {text: 'background: white;', correct:false},
      {text: 'color: white;', correct:false}
    ]
  },
  {
    question: 'What is used to make a function work, once clicked?',
    answers:[
      {text: '< button >', correct:false},
      {text: 'var button = true', correct:false},
      {text: 'addEventListner', correct:true},
      {text: 'querySelector', correct:false}
    ]
  },
  {
    question: 'What file should I make if I wanted to set up the foundation?',
    answers:[
      {text: '.js', correct:false},
      {text: '.html', correct:true},
      {text: '.css', correct:false},
      {text: 'jQuery', correct:false}
    ]
  },
  {
    question: 'When do we use flex?',
    answers:[
      {text: 'So we can color the page', correct:false},
      {text: 'To add a function', correct:false},
      {text: 'To show off', correct:false},
      {text: 'So we can fit content, regardless of size', correct:true}
    ]
  },
  {
    question: 'Random Question: In Yu-gi-oh, how do you normally win?',
    answers:[
      {text: 'Lower LifePoints to Zero', correct:true},
      {text: 'Exodia', correct:false},
      {text: 'Opponent unable to draw cards.', correct:false},
      {text: 'Make them surrender.', correct:false}

    ]
  
  }
]
//Makes these buttons invisible to user
finishButton.classList.add('hide');
nextButton.classList.add('hide');
//Builds quiz 
function buildQuiz(){
  //Hides start and score buttons 
  startButton.classList.add('hide');
  scoreButton.classList.add('hide')
  //Shows question container
  questionContainerElement.classList.remove('hide');
//Next button is no longer hidden.
  nextButton.classList.remove('hide');
  //Set timer to 25.
  var count = 25;
  //Makes timer function, where if it hits 0, it will inform user they are out of time, and ask to refresh.
  var interval = setInterval(function(){
    document.getElementById('count').innerHTML= count;
  
    if (count === 0){
      clearInterval(interval);
      document.getElementById('count').innerHTML='Done';
      // or...
      alert("You're out of time! Refresh page!");
      
      nextButton.disabled = true;
    }
  
    count--;
  }, 1000);
 
  setQuestion();
  selectAnswer();
  //Adds a function for finishButton when clicked
  //Finish button condition to appear can be seen in click()
  finishButton.addEventListener('click', () =>{
    //Hides question and next again
    questionContainerElement.classList.add('hide')
    nextButton.classList.add('hide');
    //When finish is clicked, timer will stop, and finalcount = count
    clearInterval(interval);
    finalCount = count;
    calculateScore();
    //Ask user for name
   user = window.prompt("Congrats! You finished your quiz. What is your name?")
   //Saves user-input name, and their finals score.
    window.localStorage.setItem('name',user);
    window.localStorage.setItem('score', finalScore)
    
    
  
  })

}
function selectAnswer(){
  //What all this does, it takes the button clicked, and checks either if that button
  //Has the value true or false, generally if it has true, then that is a correct
  //answer, which will also gives 1 point unto the score.
  //Else it will keep their current score the same.
  //For either situation, it disables all 4 buttons, so the user does not
  //Select another button, and must press next.
  buttonElement1.addEventListener('click', () =>{
    if (buttonElement1.value =='true'){
      buttonElement1.disabled = true;
        buttonElement2.disabled = true;
        buttonElement3.disabled = true;
        buttonElement4.disabled = true; 
        alert('Correct')
        score += 1;
     
    }
    else{
      buttonElement1.disabled = true;
      buttonElement2.disabled = true;
      buttonElement3.disabled = true;
      buttonElement4.disabled = true;
      alert('False')
      score = score;
    }
    
    })
  buttonElement2.addEventListener('click', () =>{
    if (buttonElement2.value =='true'){
      alert('Correct')
      buttonElement1.disabled = true;
      buttonElement2.disabled = true;
      buttonElement3.disabled = true;
      buttonElement4.disabled = true;
      score += 1;
    }
    else{
      alert('False')
      buttonElement1.disabled = true;
      buttonElement2.disabled = true;
      buttonElement3.disabled = true;
      buttonElement4.disabled = true;
      score = score;
    }
      
    })
  buttonElement3.addEventListener('click', () =>{
    if (buttonElement3.value =='true'){
      buttonElement1.disabled = true;
      buttonElement2.disabled = true;
      buttonElement3.disabled = true;
      buttonElement4.disabled = true;
      alert('Correct')
      score+= 1;
    }
    else{
      buttonElement1.disabled = true;
      buttonElement2.disabled = true;
      buttonElement3.disabled = true;
      buttonElement4.disabled = true;
      alert('False')
      score = score;
    }
      
    })
    buttonElement4.addEventListener('click', () =>{
      if (buttonElement4.value =='true'){
        alert('Correct')
        buttonElement1.disabled = true;
        buttonElement2.disabled = true;
        buttonElement3.disabled = true;
        buttonElement4.disabled = true;
        score+=1;
      }
      else{
        buttonElement1.disabled = true;
        buttonElement2.disabled = true;
        buttonElement3.disabled = true;
        buttonElement4.disabled = true;
        alert('False')
        score = score;
      }
      
      })
  }


//Sets questions
function setQuestion(){
  showQuestion([currentQuestionIndex]
    );
}
function showQuestion(){
  //Shows question based on current index.
  //In addittion, it populates the buttons with an answer choice,
  //and gives them a value
  i = currentQuestionIndex;
  questionElement.innerHTML = question[i].question; 
  buttonElement1.innerHTML = question[i].answers[0].text;
  buttonElement1.value = question[i].answers[0].correct;
  buttonElement2.innerHTML = question[i].answers[1].text
  buttonElement2.value = question[i].answers[1].correct;
  buttonElement3.innerHTML = question[i].answers[2].text;
  buttonElement3.value = question[i].answers[2].correct;
  buttonElement4.innerHTML = question[i].answers[3].text;
  buttonElement4.value = question[i].answers[3].correct;
  

}
//Set click count to 0
var clickCount =0;
function click(){
//For everytime this is triggered, causes clickCount to go up 1
clickCount += 1;
//if clickCount = 4, then it will disable the nextButton, and 
//show the finish button.
if (clickCount >= 4){
nextButton.disabled = true;
finishButton.classList.remove('hide');
}
}
//Used to calculate score, and sets the finalsScore.
function calculateScore(){
  finalScore = ((100 * finalCount) * score +20 ) / 5;
  console.log(finalScore);
  console.log(finalCount)
}

//When start is clicked, it buildQuiz
startButton.addEventListener('click', buildQuiz);

nextButton.addEventListener('click', () => {
//Everytime the nextButton is clicked, it will update currentQuestionIndex
//In addition, it will re-enable the question buttons for next question
  currentQuestionIndex++
  buttonElement1.disabled = false;
  buttonElement2.disabled = false;
  buttonElement3.disabled = false;
  buttonElement4.disabled = false;
  setQuestion()
  console.log(currentQuestionIndex)

  
})
//Calls click.
nextButton.addEventListener('click',click);
