const gridContainer = document.querySelector('.grid-container');
const slider  = document.querySelector('#crack')


slider.onchange = (e) => updateSliderValue(e.target.value) 


function updateSliderValue(sex) {
    changeGrid(sex);
}

// Generating the divs

function changeGrid(gridSize) {
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

    for (i = 0; i < (gridSize ** 2); i++) {
        const gridBox = document.createElement('div');
        gridBox.classList.add('grid-item');
        gridContainer.appendChild(gridBox);
        gridBox.addEventListener('mouseenter', changeColor)
    }   
}





function changeColor(e) {
    if (mouseIsDown == true) {
        e.target.style.background = 'red';
    }
}


// const gridBoxes = document.querySelectorAll('.grid-item');


// Checking if mousedown is true 
let mouseIsDown = false; 

document.body.onmousedown = () => (mouseIsDown = true)
document.body.onmouseup = () => (mouseIsDown = false)
// document.body.onmouseup = () => (mouseIsDown = false)

// function randomFunc(e) {
//     console.log("Mouse is down");
//     console.log(e.target.style.background = 'brown');
// }
// gridContainer.addEventListener('click', randomFunc)

// gridBoxes.forEach((box) => {

//     box.addEventListener('mouseenter', (e) => {

//         e.target.style.background = 'red';
//     })
// })