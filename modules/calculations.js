class Calc {
    constructor(width, height, WHSquare) {
        this.square = WHSquare; // wysokosc szerokosc jednego kwadratu
        this.width = Math.floor(width / this.square);
        this.height = Math.floor(height / this.square);
    }
    calculations(sqr) {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                sqr.x = j * this.square;
                sqr.y = i * this.square;
                sqr.width = this.square;
                sqr.height = this.square;
                sqr.draw();
            }
        }
    }
}