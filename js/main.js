let game,
allowToDraw= true,
sizeSqr,
startExist = false,
endExist = false,
path =0,
allowToChange = true,
speed = 90;

class Game {
    constructor(square) {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.container = document.getElementById("container");
        this.menu = document.getElementById("menu");
        this.square = square;
        this.canvas.width = Math.floor(this.container.offsetWidth / this.square) * this.square;
        this.canvas.height = Math.floor(this.container.offsetHeight / this.square) * this.square;
        this.draw = new Draw(this.square, this.ctx);
        this.grid = [];
        this.menu.style.bottom = this.container.offsetHeight-this.canvas.height + "px";
    }
    drawSquare() {
        const height = this.canvas.height / this.square,
            width = this.canvas.width / this.square;
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                if(i *this.square < this.menu.offsetWidth && j *this.square + this.square >this.canvas.height-this.menu.offsetHeight){
              
                }else{
                    this.draw.x = i * this.square;
                    this.draw.y = j * this.square;
                    this.draw.drawEmptySquare();
                    this.grid.push({
                        x: i * this.square,
                        y: j * this.square,
                        g: undefined,
                        h: undefined,
                        f: undefined,
                        wall: false,
                        color: "gray",
                        isStartPosition: false,
                        isEndPosition: false
                    })
                }
              
            }
        }
    }
    loop() {
        this.drawSquare();
        eventClick();
    }
}
 game = new Game(25);
 squareSizeMedium.classList.add("active");
 mediumBTN.classList.add("active");
 sizeSqr =2;
game.loop();

