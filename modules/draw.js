class Draw {
    drawEmptySquare() {
        this.ctx.beginPath();
        this.ctx.rect(this.x* game.oneSquare, this.y* game.oneSquare, this.width, this.height);
        this.ctx.stroke();
    };
    clear() {
        console.log("clearuje")
        this.ctx.clearRect(this.x * game.oneSquare, this.y * game.oneSquare, this.width, this.height);
    }
    drawSquare(){
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x * game.oneSquare, this.y*game.oneSquare, this.width -1, this.height-1);
        this.ctx.stroke();
    }
}
