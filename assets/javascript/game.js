
const word = ['fat', 'lazy', 'hungry'];
var guessesLeft = 8;

let randNum = Math.floor(Math.random() * word.length);
let chosenWord = word[randNum];
let rightWord = [];
let wrongWord = [];
let underScore = [];

let docUnderScore = document.getElementsByClassName('underscore');
let docRightGuess = document.getElementsByClassName('rightGuess');
let docWrongGuess = document.getElementsByClassName('wrongGuess');
let guessesLeftArea = document.getElementsByClassName('guessesLeft');

console.log(chosenWord);



let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
        underScore.join('_');
    }
        return underScore;
}



document.addEventListener('keypress', (event) => {
    let keycode = event.keyCode;
    let keyword = String.fromCharCode(keycode);

    if(chosenWord.indexOf(keyword) > -1){

        rightWord.push(keyword);

        docUnderScore[0].innerHTML = underScore.join('');
        underScore[chosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join (' ');
        docRightGuess[0].innerHTML = rightWord;
        
        
        if(underScore.join('') == chosenWord) {
            alert('You Win');
        }
    }    
    else{
        if(guessesLeft===0){
            return alert('You lose!');
        }
        wrongWord.push(keyword);
        docWrongGuess[0].innerHTML = wrongWord;
        guessesLeft = guessesLeft -1;
        guessesLeftArea [0].innerHTML = guessesLeft;
    
    }
});



generateUnderscore().join(' ') ;
 
 