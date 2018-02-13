
// This array holds the words we are going to choose from.
console.log("clicked1");
var words = ['dog', 'tree', 'swing', 'doctor', 'around', 'scientist', 'jazz', 'hover', 'flower', 'emergency'];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

var hiddenWord = [];


// press any key to get started with the game

document.onkeyup = function (event) {

    console.log("clicked2");

    // This function will pick our word
    function pickedWord(words) {

        return words[Math.floor(Math.random() * words.length)];

        // return to the hidden variable with format for game  "_ _ _" (corresponding to word length)  

    }

    // assign the word from pickedWord function to a variable

    var hidden = pickedWord(words);//need to take this variable value and feed it into the hiddenWord array


    // document.getElementById("demo").innerHTML = text;

    //make an array for each letter in the picked word value
    var activeWord = hidden.split("");
    var text = "";
    for (var i = 0; i < activeWord.length; i++) {

        text += activeWord[i]
    }
    alert("I'm split");
    console.log(activeWord);

    //make a function to take the hidden word array and make not visible
    function hideWord(activeWord) {

        for (var i in activeWord) {

            hiddenWord[i] = hideWord
}

    }



    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#marquis").innerHTML = html;

}
