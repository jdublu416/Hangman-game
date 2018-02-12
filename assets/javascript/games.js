
// This array holds the words we are going to choose from.
console.log("clicked1");
var words = ['dog', 'tree', 'swing', 'doctor', 'around', 'scientist', 'jazz', 'hover', 'flower', 'emergency'];

// press any key to get started with the game

document.onkeyup = function (event) {
         
    console.log("clicked2");

    // This function will pick our word
    function pickedWord(words) {
        // Write code here
        return words[Math.floor(Math.random() * words.length)];

        // return to the html with format for game  "_ _ _" (corresponding to word length)  

    }
    var html = pickedWord(words);

    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#marquis").innerHTML = html;

}
