const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const container = document.getElementById("container");
const menu = document.getElementById("menu");
const startPositionButton = document.getElementById("start_position");
canvas.height = container.offsetHeight*2;
canvas.width = container.offsetWidth*2;
let OneSquare = 20;
let start_Position ={
    exist:false,
    color:"blue"
}
let end_Position ={
    exist:false,
    color:"red"
}
let wall = [];
const init = new Calc(canvas.width, canvas.height, OneSquare)
const clear = new Clear(0,0,canvas.width,canvas.height);
const sqr = new Square(0, 0,OneSquare);
const fillsqr = new FillSquare();
init.calculations(sqr);
events();