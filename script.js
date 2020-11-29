//Grab the document elements

const container = document.querySelector("#container");
const clearButton = document.querySelector("#clear")

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

//Add event listener to clear button
clearButton.addEventListener("click", clearGrid)

//Colour changing function

function changeColour(event) {

event.target.classList.add("hovered")
}


//Clear grid function

function clearGrid() {
    squares.forEach(square => {
        square.classList.remove("hovered");
    })
}

//Add a button for mouseover mode vs click mode