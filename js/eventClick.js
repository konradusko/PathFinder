function eventClick() {
    let mouseX = 0,
        mouseY = 0,
        target = 0,
        click = 0,
        button = undefined,
        checkifWall = undefined,
        checkifPosition = undefined;
    document.addEventListener("keyup", (e) => {
        checkifWall = search(mouseX, mouseY, game.wallArray);
        checkifPosition = search(mouseX, mouseY, [game.startPosition, game.endPosition]);
        if (e.keyCode == 83 && checkifPosition === undefined && checkifWall === undefined && target == game.canvas.id) {
            //start
            if (game.startPosition.exist == true) {
                clearParamets(game.startPosition);
                paramets(game.startPosition, 1);
            } else {
                paramets(game.startPosition, 1);
                game.startPosition.exist = true;
            }
        } else if (e.keyCode == 69 && checkifPosition === undefined && checkifWall === undefined && target == game.canvas.id) {
            //end
            if (game.endPosition.exist == true) {
                clearParamets(game.endPosition);
                paramets(game.endPosition, 1);
            } else {
                paramets(game.endPosition, 1);
                game.endPosition.exist = true;
            }
        }
    })
    document.addEventListener('mousemove', (e) => {
        target = e.target.id;
        mouseX = Math.floor(e.pageX / game.square) * game.square;
        mouseY = Math.floor(e.pageY / game.square) * game.square;
        checkifWall = search(mouseX, mouseY, game.wallArray);
        checkifPosition = search(mouseX, mouseY, [game.startPosition, game.endPosition]);
        if (click == 1 && button == 0 && checkifWall === undefined && checkifPosition === undefined && target == game.canvas.id) {
            paramets(game.wall, 2);
        } else if (click == 1 && button == 2 && checkifWall != undefined && checkifPosition === undefined) {
            removeWall(checkifWall);
        }
    })
    document.addEventListener("mousedown", (e) => {
        click = 1;
        target = e.target.id;
        button = e.button;
        checkifWall = search(mouseX, mouseY, game.wallArray);
        checkifPosition = search(mouseX, mouseY, [game.startPosition, game.endPosition]);
        if (e.button == 0 && checkifPosition === undefined && checkifWall === undefined && target == game.canvas.id) {
            paramets(game.wall, 2);
        } else if (e.button == 2 && checkifWall != undefined && checkifPosition === undefined) {
            removeWall(checkifWall);
        }
    })
    document.addEventListener("mouseup", () => {
        click = 0;
    })
    function removeWall(point) {
        game.wallArray.splice(point.index, 1);
        clearParamets(point);
        game.wallArray.forEach(e => {
            if (e.index > point.index) {
                e.index -= 1;
            }
        })
    }
    function clearParamets(point) {
        game.draw.x = point.x;
        game.draw.y = point.y;
        game.draw.clear();
        game.draw.drawEmptySquare();
    }
    function paramets(point, numb) {
        //1mouse
        //2 wall
        if (numb == 1) {
            point.x = mouseX;
            point.y = mouseY;
        } else if (numb == 2) {
            game.wallArray.push({
                x: mouseX,
                y: mouseY,
                color: point.color,
                index: game.wallArray.length
            }); //dodaje mur do tablicy
            console.log(game.wallArray)
        }
        game.draw.x = mouseX;
        game.draw.y = mouseY;
        game.draw.drawSquare(point.color);
    }
}
function search(x, y, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].x === x && array[i].y === y) {
            return array[i];
        }
    }
}