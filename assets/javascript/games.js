
// This array holds the words we are going to choose from.
console.log("clicked1");
var words = ['dog', 'sand', 'ocean', 'castle', 'volleyball', 'wave', 'jazz', 'cruise', 'yacht', 'chaise','tides',
    'sunburn', 'sunscreen', 'tropical', 'marguerita', 'dacquiri', 'mermaid', 'carribean', 'frisbee'];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

// press any key to get started with the game

document.onkeyup = function (event) {

    console.log("button heard");

    // This function will pick our word
    function pickedWord(words) {

        return words[Math.floor(Math.random() * words.length)];

       
    }

    // assign the word from pickedWord function to a variable

    var hidden = pickedWord(words);//need to take this variable value and feed it into the hiddenWord array
    var html = hidden;
   

    //make an array for each letter in the picked word value
    var activeWord = hidden.split("");
    var text = "";
    for (var i = 0; i < activeWord.length; i++) {

         text += activeWord[i]
    }

    // loop to use array from activeWord and put in html to display div, create new span with css class dressing, which will make each letter hidden
    for (var a in activeWord) {
        
        var targetDiv = document.getElementById("display");;
        var newSpan = document.createElement("span");
        newSpan.innerHTML = activeWord[a];
        targetDiv.appendChild(newSpan);
        newSpan.setAttribute("class", "dressing");

    }

    //create function for button click

    

   
    }



