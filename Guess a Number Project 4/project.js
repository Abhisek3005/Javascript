let random_number = parseInt(Math.random() * 100 + 1);
const button = document.querySelector('#subt');
const user_Input = document.querySelector('#guessField');
const guess_slot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p= document.createElement('p');

let prevGuess  = []
let numGuess = 1
let playGame = true

if (playGame){
 button.addEventListener('click', function(e){
   e.preventDefault();
   const guess= parseInt(user_Input.value);
   validateGuess(guess);
   console.log(guess)

 })
}

function validateGuess(guess){
  //It will only validate that the value is between 1-100.
   if(isNaN(guess)){
     alert("Please Enter a Valid Number")

   }else if (guess < 1){
    alert("Please Enter a Valid Number and that is more than 0")
  } else if (guess > 100){
    alert("Please Enter a Valid Number")
  }else{
    prevGuess.push(guess)
    if (numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game Over, Random number was ${random_number}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)

    } 
    
  }
}

function checkGuess(guess){
  //It will check the input value is same with random number.
  if(guess === random_number){
    displayMessage('You Guessed it right');
    endGame()

  }else if(guess < random_number){
    displayMessage('Number is too low')

  }else if(guess > random_number){
    displayMessage('Number is too High')

  }
}

function displayMessage(message){
  //It will show if you win or the number is high or low
  lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function displayGuess(guess){
  //it will update the values of previous guesses and remaining guesses.
  user_Input.value = ''
  guess_slot.innerHTML += `${guess}, `
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`
}

function endGame(){
  user_Input.value = ''
  user_Input.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
const newgame_button = document.querySelector('#newGame');
newgame_button.addEventListener('click',function(e){
  random_number = parseInt(Math.random() * 100 + 1);
  prevGuess = [];
  numGuess = 1;
  guess_slot.innerHTML = ''
  remaining.innerHTML = `${11-numGuess}` 
  user_Input.removeAttribute('disabled');
  startOver.removeChild(p);
  playGame = true
})

}
