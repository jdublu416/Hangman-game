// This array holds the words we are going to choose from.
// console.log("clicked1");
//declare all global variables
var words = [
  "dog",
  "sand",
  "ocean",
  "castle",
  "volleyball",
  "wave",
  "jazz",
  "cruise",
  "yacht",
  "chaise",
  "tides",
  "sunburn",
  "sunscreen",
  "tropical",
  "marguerita",
  "dacquiri",
  "mermaid",
  "carribean",
  "frisbee",
  "jetski",
  "boat",
  "surf",
  "currents",
  "dolphin",
  "snorkel"
];

//var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
// 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//'t', 'u', 'v', 'w', 'x', 'y', 'z'];

var activeWord = "";
var button = "";
var hidden = "";
var guessedLetter = "";
var letter = "";
var lossCount = 0;
var guessCount = 8; // set this to 9 (instead of 8 to offset the initial click event;
var letterCount;
var winCount = 0;

// press any key to get started with the game
document.onkeyup = function(event) {
  console.log("button heard"); //alert to console that the button was heard
  hidden = pickedWord(words); //need to take this variable value and feed it into the hiddenWord array

  console.log(hidden); //tells me what the "hidden word" is

  //make an array for each letter in the picked word value
  activeWord = hidden.split("");
  var text = "";
  for (var i = 0; i < activeWord.length; i++) {
    text += activeWord[i];
    console.log(activeWord[i]);
  }

  // loop to use array from activeWord and put in html to display div, create new span with css class dressing, which will make each letter hidden

  for (var a = 0; a < activeWord.length; a++) {
    var targetDiv = document.getElementById("display");
    var newSpan = document.createElement("span");
    letterCount = activeWord.length;
    newSpan.innerHTML = activeWord[a];
    targetDiv.appendChild(newSpan);
    newSpan.setAttribute("class", "dressing");
    newSpan.setAttribute("name", activeWord[a]); // <--------------------add this to each span
  }
};

function userGuess(event) {
  //need to compare the button value to the value of the the span in the html
  //also need the button to add a class that will change bgcolor and display the letter in the span

  button = event.target;
  var letter = button.innerHTML;
  var listGuess = document.getElementsByName(letter);
  button.setAttribute("class", "clicked");

  for (var i = 0; i < listGuess.length; i++) {
    var span = listGuess[i];
    span.setAttribute("class", "reveal");
  }

  if (listGuess.length === 0) {
    guessCount--;
    Check(guessCount);
    displayGuessCount(guessCount);
    changeImage(guessCount);
  } else if (listGuess.length > 0) {
    letterCount = letterCount - listGuess.length;
    console.log(letterCount);
    letterCountCheck(letterCount);
  }

  console.log(guessCount);
}

function Check(guessCount) {
  if (guessCount === 0) {
    document.getElementById("text1").innerHTML = "YOU LOST! GAME OVER...";
  }
}

function letterCountCheck(letterCount) {
  if (letterCount === 0) {
    document.getElementById("text1").innerHTML = "YOU WIN!";
    winCount++;
    displayWinCount(winCount);
  }
}

function pickedWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

function displayGuessCount(guessCount) {
  document.getElementById("guessesleft").innerHTML =
    "guesses remaining:" + guessCount;
}

function changeImage(guessCount) {
  var newSrc = "assets/images/hangmanhung" + guessCount + ".jpg";
  document.getElementById("sequence").src = newSrc;
}
function displayWinCount(winCount) {
  document.getElementById("wins").innerHTML = "Win Record:" + winCount;
}
