//generate a random number between 1-100

//global variable

let randomNumber = Math.floor(Math.random()*100)+1;
//console.log(randomNumber)
let attempts = 0;

//function to check users guess
function checkGuess(){
    const guessInput = document.getElementById('guess');
    const feedback = document.getElementById('feedback');
    const userGuess = parseInt(guessInput.value);
    console.log(userGuess)
    //console.log(UserGuess)

    if(!userGuess || userGuess < 1 || userGuess > 100){
        feedback.textContent = " Please enter a valid between 1 and 100";
        feedback.style.color='red';
        return;
    }

    attempts++;
    if(userGuess === randomNumber){
        feedback.textContent=`Congratulation!!  You guessed the number in ${attempts} attempts.`
        feedback.style.color='green';

    } else if(userGuess > randomNumber){
        feedback.textContent=`Too high!! Try again!`
        feedback.style.color='red'
    }else if(userGuess < randomNumber){
        feedback.textContent=`Too low!! Try again!`
        feedback.style.color='red'
    }
     document.getElementById('guess').value = "";
}
    //function resetgame()

    function resetGame(){
        randomNumber = MathFloor(Math.random() * 100) + 1;
        attempts= 0;
        document.getElementById('guess').value = "";
         document.getElementById('feedback').textContent="";
    }
