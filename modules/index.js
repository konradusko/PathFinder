const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const container = document.getElementById("container");
const menu = document.getElementById("menu");
const startPositionButton = document.getElementById("start_position");
canvas.height = container.offsetHeight;
canvas.width = container.offsetWidth;
let OneSquare = 10;
const init = new Calc(canvas.width, canvas.height, OneSquare)
const clear = new Clear(0,0,canvas.width,canvas.height);
const sqr = new Square(0, 0,OneSquare,OneSquare);
init.calculations(sqr);
window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0 && init.square > 10) {
        init.square -= 2.5;
        clear.clear();
        init.calculations(sqr);
    } else if (e.deltaY < 0 && init.square < 30) {
        init.square += 2.5;
        clear.clear();
        init.calculations(sqr);
    }
})