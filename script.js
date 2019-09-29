var number = Math.floor(Math.random() * 21) + 10; // Random number between 10 and 30, so the user can see some action, but also has some variety

// Storing all the getElementById calls into variables in one place
var numberOutput = document.getElementById("numberOutput");
numberOutput.innerHTML = number + " "; // Set initial number value on page reload
var newNumberButton = document.getElementById("newNumberButton");
var runGameButton = document.getElementById("runGameButton");
var resultList = document.getElementById("resultList");
var fizzBuzzModalTitle = document.getElementById("fizzBuzzModalTitle");

function newNumber() {
    // This functions sets the number again if the user clicks on the new number icon
    number = Math.floor(Math.random() * 21) + 10;
    numberOutput.innerHTML = number + " ";
}

function clearOldGame() {
    // This functions checks if there are any existing list elements and removes them for a fresh game
    while (resultList.hasChildNodes()) {
        resultList.removeChild(resultList.firstChild);
    }
}

function writeResults(result) {
    // This function first creates an empty list item, adds content within and then appends (adds) it to the target list. 
    // Function also takes the result of the FizzBuzz as an argument.
    let node = document.createElement("LI");
    node.setAttribute("class","list-group-item");
    let textnode = document.createTextNode(result);
    node.appendChild(textnode);
    resultList.appendChild(node);
    return result;
}

function fizzBuzz() {
    // A for loop that counts from one to final number. The FizzBuzz condition should be checked first, otherwise it will get skipped!
    for (let i = 1; i <= number; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            writeResults(i + " (FizzBuzz)");
        } else if (i % 3 === 0) {
            writeResults(i + " (Fizz)");
        } else if (i % 5 === 0) {
            writeResults(i + " (Buzz)");
        } else {
            writeResults(i);
        }
    }
    fizzBuzzModalTitle.innerHTML="FizzBuzz results for number " + number;
}

newNumberButton.addEventListener('click', function () {
    newNumber(); // Calling newNumber function on this button click
});

runGameButton.addEventListener('click', function () {
    clearOldGame(); // First we call the clearOldGame function to check and clear any previous data
    fizzBuzz(); // We start the fizzBuzz game by calling this function
});
