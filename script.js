const boxHome = document.getElementById("grid");
let newDiv;
let boxNumber;
let boxCount = 0;
let totalBoxes;
let boxSize;

function getGrid() {
    boxNumber = prompt("How big a grid?", "Select a number less than 100");
}

function calculateBoxSize() {
}


function totalBoxGrid() {
    totalBoxes = boxNumber * boxNumber;
    boxSize = (400 / boxNumber);

    while (boxCount < totalBoxes) {
        addBox();
        boxCount++;
    };
    let divToSize = document.getElementsByClassName("newbox");
    for (i = 0; i < divToSize.length; i++) {
        divToSize[i].style.width = `${boxSize}px`;
        divToSize[i].style.height = `${boxSize}px`;
    }
}

let gridButton = document.getElementById("grid-size");
gridButton.addEventListener("click", getGrid);
gridButton.addEventListener("click", totalBoxGrid);


function addBox() {
    newDiv = document.createElement("div");
    const boxHome = document.getElementById("grid");
    newDiv.classList.add("newbox");
    boxHome.appendChild(newDiv);
}
/* 

let gridDimension = parseInt(document.getElementById("grid-size").style.width,10);
function setDimension(n) {
    let boxDimension = gridDimension / n;
    console.log(boxDimension);
}

function addMoreBoxes(n) {
    while (boxCount < n) {
        addBox();
        addHoverClass();
        boxCount++;
    };
}

let defaultBoxes = 16;
addMoreBoxes(defaultBoxes);

function changeColor(e) {
    e.target.classList.add("hovereffect");
}

function addHoverClass() {
    for (let i = 0; i < boxToChange.length; i++) {
        boxToChange[i].addEventListener("mouseover", changeColor);
    };
}

let gridAnswer;
function changeGrid(e) {
    gridAnswer = prompt("How big should your grid be", "Input a number that is 100 or less");
    addMoreBoxes(gridAnswer);
    addHoverClass();
}

gridButton.addEventListener("click", changeGrid); */