class Square {
    constructor(x, y,sqr) {
        this.x = x;
        this.y = y;
        this.width = sqr;
        this.height = sqr;
    }
    draw(){
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.stroke();
    };
}
class Clear extends Square{
    clear(){
        ctx.clearRect(this.x,this.y,this.width,this.height);
    }

}
class FillSquare extends Square{
    clear(){
        ctx.clearRect(this.x,this.y,this.width,this.height);
    }
    draw(){
        ctx.fillStyle = this.style;
        ctx.fillRect(this.x,this.y,this.width,this.height);
    };
}