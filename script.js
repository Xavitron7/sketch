//Grab the document elements

const container = document.querySelector("#container");
const clearButton = document.querySelector("#clear")
const dimensionsInput = document.querySelector("#dimensions");
const submitButton = document.querySelector("#submit");
const numberInput = document.querySelector("#numberInput");

//Generate the grid
function createGrid(number) {
for (let i = 0 ; i < number * number; i++) {
    let square = document.createElement("DIV");
    square.classList.add("grid-square");
    container.appendChild(square);
}

}
createGrid(16);

//Add event listener to all squares

let squares = document.querySelectorAll("div.grid-square");
squares.forEach(square => {
    square.addEventListener("mouseover", changeColour)
})

//Add event listener to button
clearButton.addEventListener("click", clearGrid)
submitButton.addEventListener("click", generateGrid)

//Colour changing function

function changeColour(event) {
//Add the hovered class (which changes bg colour to black) to a square that is moused over
event.target.classList.add("hovered")
}


//Clear grid function. Removes hovered class so square colours revert to white

function clearGrid() {
    squares.forEach(square => {
        square.classList.remove("hovered");
    })

}

//Change grid size
function generateGrid() {
    //Capturing the value in the number input field
let gridSize = numberInput.value;

//Clear the grid by removing all child squares
container.innerHTML = "";

//Update the grid template to have the number of squares that the user has entered
container.style["grid-template"] = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`

//Spin up the grid
for (let i = 0 ; i < gridSize * gridSize; i++) {
    let square = document.createElement("DIV");
    square.classList.add("grid-square");
    container.appendChild(square);
}

//Add the mouseover event to all new squares. Without this, the hover function wouldn't work.
let squares = document.querySelectorAll(".grid-square");
squares.forEach(square => {
    square.addEventListener("mouseover", changeColour)
})

}