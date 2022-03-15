const canvas = document.querySelector(".canvas")
    , canvasSize = 500;
let pixels = 16

function createGrid (size, canvas) {
    for (let r = 1; r < size; r++) {
        let row = document.createElement('div');
        row.classList.add('row')
        canvas.appendChild(row)
        for(let c = 0; c < size; c++){
            let col = document.createElement('div');
            col.classList.add('col')
            row.appendChild(col)
        }
    }
}

function setSize (canvasSize, pixels) {
    let rows = document.querySelectorAll(".row");
    let cols = document.querySelectorAll(".col");
    let size = Math.floor(canvasSize / pixels) + 'px';

    rows.forEach((row) => {
        row.style.height = size;
    })
    cols.forEach((col) => {
        col.style.height = size;
        col.style.width = size;
    })
}

createGrid(pixels, canvas, canvasSize);
setSize(canvasSize, pixels);