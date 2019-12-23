class Game {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.container = document.getElementById("container");
        this.buttonStartSearching = document.getElementById("start_position");
        this.oneSquare = 20;
        this.canvas.width = Math.floor(this.container.offsetWidth / this.oneSquare) * this.oneSquare;
        this.canvas.height = Math.floor(this.container.offsetHeight / this.oneSquare) * this.oneSquare;
        this.wall = [];
        this.startPoint = new Draw();
        this.startPoint.exist = false;
        this.startPoint.color = "blue";
        this.startPoint.ctx = this.ctx;

        this.endPoint = new Draw();
        this.endPoint.exist = false;
        this.endPoint.color = "green";
        this.endPoint.ctx = this.ctx;

        this.draw = new Draw();
        this.draw.ctx = this.ctx;
        this.block = true;
    }
    drawing() {
        const height = this.canvas.height / this.oneSquare;
        const width = this.canvas.width / this.oneSquare;
        console.log(this.canvas.width/this.oneSquare)
        console.log(this.canvas.height/this.oneSquare)
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                this.draw.x = j;
                this.draw.y = i;
                this.draw.width = this.oneSquare;
                this.draw.height = this.oneSquare;
                this.draw.drawEmptySquare();
            }
        }
    }
    events() {
        window.addEventListener("wheel", scroll);
        this.buttonStartSearching.addEventListener("click",calculateLocation);
        drawAndMore();
        this.drawing();
    }

}
const game = new Game();
game.events();

