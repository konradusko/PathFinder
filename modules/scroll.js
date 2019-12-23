function scroll(e){
    if (e.deltaY > 0 && game.oneSquare > 10) {
        game.oneSquare -= 2.5;
    } else if (e.deltaY < 0 && game.oneSquare < 30) {
        game.oneSquare += 2.5;
    }
    game.draw.x = 0;
    game.draw.y = 0;
    game.draw.width = game.canvas.width;
    game.draw.height = game.canvas.height;
    game.draw.clear();
    game.drawing();
    game.wall.forEach(e => {
        e.width = game.oneSquare;
        e.height = game.oneSquare;
        e.drawSquare()
    })
    if(game.startPoint.exist){
    game.startPoint.width = game.oneSquare;
    game.startPoint.height = game.oneSquare;
    game.startPoint.drawSquare();
    }
    if(game.endPoint.exist){
        game.endPoint.width = game.oneSquare;
        game.endPoint.height = game.oneSquare;
        game.endPoint.drawSquare();
    }
}
