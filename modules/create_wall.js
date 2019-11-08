class Wall {
    constructor(x, y,sqr) {
        this.x = x;
        this.y = y;
        this.width = sqr;
        this.height = sqr;
    }
    addWall(){
        let obj = {
            x:this.x,
            y:this.y,
            width:this.width,
            height:this.height
        }
        wall.push(obj);
    }
    draw(){
        ctx.fillStyle = "black";
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}