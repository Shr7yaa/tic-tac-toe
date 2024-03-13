let boxes = document.querySelectorAll(".box");
let rsbt = document.querySelector(".reset-game");
let msg = document.querySelector(".msg");
let nebt = document.querySelector(".new-game");
let win = document.querySelector(".winner");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const newbtn = () => {
    turnO = true;
    enableBoxes();
    msg.classList.add("hide");
};



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if (turnO) {
            box.innerText = "O";
            box.style.color="blue";
            turnO = false;

        }
        else {
            box.innerText = "X";
            box.style.color="black";
            turnO = true;

        }
        box.disabled = true;
        checkWinner();
       
    });
});

const disablBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const ShowWinner = (winner) => {
    win.innerText = `congratulation winner is ${winner}`
    msg.classList.remove("hide");
    disablBoxes();
};
const checkWinner =()=> {
    for (let pattern of winPatterns) {
        console.log(pattern[0]);
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if (posVal1 != "" && posVal2 != "" && posVal2 != "") {
            if (posVal1 === posVal2 && posVal2 === posVal3) {

                console.log("winner", posVal1);
                ShowWinner(posVal1);
            }
        }
    }
};
rsbt.addEventListener("click", newbtn);
nebt.addEventListener("click", newbtn);