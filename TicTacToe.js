// current player of the game
var currentPlayer = "O";
// whether the game has been won
var won = false;
// where the winning message will be displayed
var winning = document.getElementById("winningMessage");
var text = document.createElement('p');
// Creating a new button.
var button = document.createElement('button');
button.innerHTML = "Reset";
// reloads the page when clicked
button.onclick = () => location.reload();

// This function places "X" or "O" depending on whos go it is.
function place(box) {
    // prevents the cell from being clicked a second time once it has been clicked.
    if(box.innerHTML != "" || won) return;
    // Adds the mark depending on which players turn it is currently.
    box.innerHTML = currentPlayer;
    currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";
    // Checks the game board to see if either player has won after placing the marker.
    checkGameBoard();
}

function checkGameBoard() {
    // checking the rows and the columns for wins by checking the div IDs.
    for(var i = 0; i <= 2; i++) {
        checkWinner(document.getElementById(i + "_0"),
            document.getElementById(i + "_1"),
            document.getElementById(i + "_2"));
        checkWinner(document.getElementById("0_" + i),
            document.getElementById("1_" + i),
            document.getElementById("2_" + i));
    }
    // Checking the diagonals for wins by checking the div IDs.
    checkWinner(document.getElementById("0_0"),
        document.getElementById("1_1"),
        document.getElementById("2_2"));
    checkWinner(document.getElementById("0_2"),
        document.getElementById("1_1"),
        document.getElementById("2_0"));

    // Checking if the game has resulted in a draw.
    draw(document.getElementById("0_0"), document.getElementById("1_0"), document.getElementById("2_0"),
        document.getElementById("0_1"), document.getElementById("1_1"), document.getElementById("2_1"), 
        document.getElementById("0_2"), document.getElementById("1_2"), document.getElementById("2_2"));
}

// This function checks whether the three cells all equal eachother. If they do then a message of the winning player is displayed on the screen.
// @param first, second, third are the div IDs.
function checkWinner(first, second, third) {
    // checks if the inner text of all three divs are equal to eachother and are not empty.
    if(first.innerHTML != "" && first.innerHTML == second.innerHTML && first.innerHTML == third.innerHTML && won == false) {
        // changes the background colour of the winning cells.
        changeColour(first, second, third);
        // holds a string to then later be passed as the winner
        var winner = "";
        // checks which players turn it is and then sets the variable winner to the opposite.
        if(currentPlayer == "X") {
            winner = "O";
        }else {
            winner = "X";
        }
        // appending all the relevent information to the winning message in the html document.
        var p = document.createTextNode(winner + " wins!");
        text.appendChild(p);
        winning.appendChild(text);
        winning.appendChild(button);
        won = true;
    }
}

// If all cells have content inside them, then the game results in a draw and a relevant message is displayed.
function draw(first, second, third, fourth, fith, sixth, seventh, eighth, ninth) {
    if(won == false) {
        if(first.innerText != "" && second.innerText != "" && third.innerText != "" && fourth.innerText != "" && fith.innerText != "" && sixth.innerText != "" && seventh.innerText != "" && eighth.innerText != "" && ninth.innerText != "") {
            var t = document.createTextNode("Draw!");
            text.appendChild(t);
            winning.appendChild(text);
            winning.appendChild(button);
            won = true;
        }
    }
}

// changes the background collours of the cells that win.
function changeColour(one, two, three) {
    if(one.innerText != "" && one.innerText == two.innerText && one.innerText == three.innerText) {
        one.style.background = "green";
        two.style.background = "green";
        three.style.background = "green";
    }
}
