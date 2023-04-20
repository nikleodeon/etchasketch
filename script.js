const boxHome = document.getElementById("grid");
const gridButton = document.getElementById("grid-size");
const resetButton = document.getElementById("reset");
const boxToChange = document.getElementsByClassName("newbox");
let newDiv;
let boxNumber;
let boxCount = 0;

function getGrid() {
    boxNumber = prompt("How big a grid?", "Select a number between 1 and 50");
    if (boxNumber > 50 || boxNumber < 1) {
        boxNumber = prompt("Please choose a valid number");
    } else {
        return boxNumber;
    }
}

gridButton.addEventListener("click", getGrid);

function addBox() {
    newDiv = document.createElement("div");
    const boxHome = document.getElementById("grid");
    newDiv.classList.add("newbox");
    boxHome.appendChild(newDiv);
} 

function changeColor(e) {
    e.target.classList.add("hovereffect");
}

function addHoverClass() {
    for (let i = 0; i < boxToChange.length; i++) {
        boxToChange[i].addEventListener("mouseover", changeColor);
    };
}

function getBoxSize(n) {
    let boxDimension = document.getElementById("grid").clientWidth / n;
    for (let i = 0; i < boxToChange.length; i++) {
        boxToChange[i].setAttribute("style",`width:${boxDimension}px`,`height:${boxDimension}px`);
    }
}

function displayGrid() {
    let square = boxNumber * boxNumber;
    while (boxCount < square) {
        addBox();
        getBoxSize(boxNumber);
        addHoverClass();
        boxCount++;
    };
}

gridButton.addEventListener("click", displayGrid);

function resetGrid() {
    for (let i = 0; i < boxToChange.length; i++) {
        boxToChange[i].classList.remove("hovereffect");
    }
}

resetButton.addEventListener("click", resetGrid);