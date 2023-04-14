let newDiv;

function addBox() {
    newDiv = document.createElement("div");
    const boxHome = document.getElementById("grid");
    newDiv.classList.add("newbox");
    boxHome.appendChild(newDiv);
}

let boxCount = 0;

while (boxCount < 16) {
    addBox();
    boxCount++;
}

const boxToChange = document.getElementsByClassName("newbox");
function hoverClass() {
    for (let i = 0; i < boxToChange.length; i++) {
        boxToChange[i].classList.add("hovereffect");
    }
}

function removeHover() {
    for (let i = 0; i < boxToChange.length; i++) {
        boxToChange[i].classList.remove("hovereffect");
    }
}

boxToChange.addEventListener("mouseover", hoverClass());
boxToChange.addEventListener("mouseout", removeHover());)