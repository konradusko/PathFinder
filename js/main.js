class Game {
    constructor(square) {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.container = document.getElementById("container");
        this.square = square;
        this.canvas.width = Math.floor(this.container.offsetWidth / this.square) * this.square;
        this.canvas.height = Math.floor(this.container.offsetHeight / this.square) * this.square;
        this.wallArray = [];
        this.startPosition = {
            color: "green",
            x: -1,
            y: -1,
            exist: false,
        }
        this.endPosition = {
            color: "red",
            x: -2,
            y: -2,
            exist: false,
        }
        this.wall ={
            color:"gray",
        }
        this.draw = new Draw(this.square, this.ctx);
        this.grid = [];
        this.count =0;
    }

    drawSquare() {

        const height = this.canvas.height / this.square,
            width = this.canvas.width / this.square;
        console.log(this.canvas.width / this.square)
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                this.draw.x = i*this.square;
                this.draw.y = j*this.square;
                this.draw.drawEmptySquare();
                this.grid.push({x:i*this.square,y:j*this.square,g:undefined,h:undefined,f:undefined})
            }
        }
        console.log(this.grid)
    }
    loop() {
        this.drawSquare();
        eventClick();
    }
    
}
const game = new Game(20);
game.loop();
