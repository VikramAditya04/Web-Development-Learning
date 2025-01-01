let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let bgm = document.querySelector("#bgm");
let Xmusic = document.querySelector("#xEliminated");
let Omusic = document.querySelector("#oEliminated");

let turnO = true; // player O starts
let count = 0; // to track draw
let gameStarted = false; // To track if the game has started

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Reset the game state
const resetGame = () => {
    turnO = true;
    count = 0;
    gameStarted = false; // Reset game started state
    bgm.pause(); // Pause the music
    bgm.currentTime = 0; // Reset the music to the beginning
    enableBoxes();
    msgContainer.classList.add("hide");
};

// Check for a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            winnerPatternColorChange(pattern);
            showWinner(pos1Val);
            bgm.pause(); // Stop the music
            return true;
        }
    }
    return false;
};

const winnerPatternColorChange = (pattern) => {
    pattern.forEach((index) => {
        boxes[index].style.backgroundColor = "#FEC260";
    });
};

// Show the winner message
const showWinner = (winner) => {
    msg.innerHTML = `Congratulations,<br/> <span id="winner">${winner}</span> Won! 🎉`;

    const winnerText = document.getElementById("winner");

    msgContainer.classList.remove("hide");
    disableBoxes();

     // Play music based on who won
     if (winner === "X") {
        Omusic.play();  // Play O Eliminated music
        winnerText.style.color = "white";  
    } else if (winner === "O") {
        Xmusic.play();  // Play X Eliminated music
        winnerText.style.color = "#fff"; 
        
    }
};

// Handle game draw
const gameDraw = () => {
    msg.innerText = "Game Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
    bgm.pause(); // Stop the music
};

// Disable all boxes
const disableBoxes = () => {
    boxes.forEach((box) => (box.disabled = true));
};

// Enable all boxes and reset text
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "";
        box.style.color = "";
    });
};

// Add click event listener to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!gameStarted) {
            bgm.play(); // Start the music
            bgm.volume = "0.3";
            gameStarted = true;
        }

        if (box.innerText !== "") return;

        if (turnO) {
            box.innerText = "O";
            box.style.color = "#249F9C";

            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "#ED1B76";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (!isWinner && count === 9) {
            gameDraw();
        }
    });
});

// Add event listeners to buttons
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
