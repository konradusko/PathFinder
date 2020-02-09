function eventClick() {
    let mouseX = 0,
        mouseY = 0,
        target = 0,
        click = 0,
        button = undefined,
        checkif = undefined,
        checkStartPosition = undefined,
        checkEndPosition = undefined;
    document.addEventListener("keyup", (e) => {
        if (allowToDraw == true) {
            checkif = search(mouseX, mouseY, game.grid);
            checkStartPosition = search2(game.grid, 1);
            checkEndPosition = search2(game.grid, 2);
            if (e.keyCode == 83 && target == game.canvas.id && checkif != undefined &&
                checkif.wall === false && checkif.isStartPosition == false && checkif.isEndPosition == false) {
                //start
                if (checkStartPosition === false) {
                    paramets(checkif, 1);
                    startExist = true;
                } else {
                    clearParamets(checkStartPosition, 1);
                    paramets(checkif, 1);
                    //istnieje juz
                }
            } else if (e.keyCode == 69 && target == game.canvas.id && checkif != undefined &&
                checkif.wall === false && checkif.isEndPosition == false && checkif.isStartPosition == false) {
                //end
                if (checkEndPosition === false) {
                    paramets(checkif, 2);
                    endExist = true;
                } else {
                    clearParamets(checkEndPosition, 2);
                    paramets(checkif, 2);
                    //istnieje juz
                }
            }

        }

    })
    document.addEventListener('mousemove', (e) => {
        if (allowToDraw == true) {
            target = e.target.id;
            mouseX = Math.floor(e.pageX / game.square) * game.square;
            mouseY = Math.floor(e.pageY / game.square) * game.square;
            checkif = search(mouseX, mouseY, game.grid);
            if (checkif != undefined && target == game.canvas.id && click == 1 && button == 0 && checkif.isStartPosition == false &&
                checkif.isEndPosition == false && checkif.wall == false) {
                paramets(checkif, 3);
            } else if (checkif != undefined && target == game.canvas.id && click == 1 && button == 2 && checkif.isEndPosition == false &&
                checkif.isStartPosition == false && checkif.wall == true) {
                clearParamets(checkif, 3);
            }
        }

    })
    document.addEventListener("mousedown", (e) => {
        click = 1;
        target = e.target.id;
        button = e.button;
        checkif = search(mouseX, mouseY, game.grid);
        if (checkif != undefined && target == game.canvas.id && e.button == 0 && checkif.isStartPosition == false &&
            checkif.isEndPosition == false && checkif.wall == false) {
            paramets(checkif, 3);
        } else if (checkif != undefined && target == game.canvas.id && e.button == 2 && checkif.isEndPosition == false &&
            checkif.isStartPosition == false && checkif.wall == true) {
            clearParamets(checkif, 3);
        }

    })
    document.addEventListener("mouseup", () => {
        click = 0;
    })

    function clearParamets(point, numb) {
        game.draw.x = point.x;
        game.draw.y = point.y;
        game.draw.clear();
        if (numb == 1) {
            //start
            point.isStartPosition = false;
        } else if (numb == 2) {
            //end
            point.isEndPosition = false;
        } else if (numb == 3) {
            point.wall = false;
        }
    }

    function paramets(point, numb) {
        //1mouse
        //2 wall
        if (numb == 1) {
            point.color = "blue";
            point.isStartPosition = true;
        } else if (numb == 2) {
            point.color = "green";
            point.isEndPosition = true;
        } else if (numb == 3) {
            point.wall = true;
            point.color = "gray";
        }
        game.draw.x = mouseX;
        game.draw.y = mouseY;
        game.draw.drawSquare(point.color);
    }
}