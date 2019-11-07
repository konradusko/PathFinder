class Square {
    constructor(x, y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
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