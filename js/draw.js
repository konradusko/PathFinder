class Draw {
    constructor(size,ctx) {
        this.size = size;
        this.ctx = ctx;
    }
    drawEmptySquare(){
        this.ctx.beginPath();
        this.ctx.rect(this.x,this.y,this.size,this.size);
        this.ctx.stroke();
    }
    clear() {
        this.ctx.clearRect(this.x+2,this.y+2,this.size-4,this.size-4);
    }
    drawSquare(color){
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x +2  ,this.y +2,this.size-4,this.size-4);
        this.ctx.stroke();
    }
    

}