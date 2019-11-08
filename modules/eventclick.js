function events() {
    window.addEventListener("mousedown", controlPanel)

    function controlPanel(e) {
        startX = Math.floor(e.x / OneSquare) * OneSquare;
        startY = Math.floor(e.y / OneSquare) * OneSquare;
        console.log(startX)
        window.addEventListener("mousemove", drawSquare)
        window.addEventListener("mouseup", removeEvents)
    }

    function drawSquare(e) {
        moveX = Math.floor(e.x / OneSquare) * OneSquare;
        moveY = Math.floor(e.y / OneSquare) * OneSquare;
        let goSearch = search(moveX, moveY, wall);
        if (goSearch === undefined) {
            let obj = new Wall(moveX, moveY, OneSquare)
            obj.addWall();
            obj.draw();
          //  console.log(wall)
        }
    }

    function removeEvents(e) {
        clickX = Math.floor(e.x / OneSquare) * OneSquare;
        clickY = Math.floor(e.y / OneSquare) * OneSquare;
        console.log(clickX)
        let checkif = search(clickX,clickY,wall);
        console.log(checkif)
        if (startX == clickX && startY == clickY && checkif === undefined) {
            if (e.button == 0 && !start_Position.exist) {
                paramets(start_Position, clickX, clickY)
            } else if (e.button == 0 && start_Position.exist) {
                fillsqr.x = start_Position.x;
                fillsqr.y = start_Position.y;
                sqr.x = start_Position.x;
                sqr.y = start_Position.y;
                fillsqr.clear();
                sqr.draw();
                paramets(start_Position, clickX, clickY) // and clear function
                // console.log(fillsqr)
            } else if (e.button == 2 && !end_Position.exist) {
                paramets(end_Position, clickX, clickY)
            } else if (e.button == 2 && end_Position.exist) {
                fillsqr.x = end_Position.x;
                fillsqr.y = end_Position.y;
                sqr.x = end_Position.x;
                sqr.y = end_Position.y;
                fillsqr.clear();
                sqr.draw();
                paramets(end_Position, clickX, clickY) // and clear function
            }
        }

        function paramets(position, clickX, clickY) {
            position.x = clickX;
            position.y = clickY;
            fillsqr.x = clickX;
            fillsqr.y = clickY;
            fillsqr.style = position.color;
            fillsqr.width = OneSquare;
            fillsqr.height = OneSquare;
            position.exist = true;
            fillsqr.draw();
        }
        window.removeEventListener("mousemove", drawSquare);
        window.removeEventListener("mouseup", removeEvents);
    }
}

function search(x, y, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].x === x && array[i].y === y) {
            return array[i];
        }
    }
}