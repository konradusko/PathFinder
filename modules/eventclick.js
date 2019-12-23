function drawAndMore() {
    if (game.block) {
        window.addEventListener("mousedown", controlPanel)

        function controlPanel(e) {
            startX = Math.floor(e.x / game.oneSquare);
            startY = Math.floor(e.y / game.oneSquare);
            whichButton = e.button;
            window.addEventListener("mousemove", drawSquare)
            window.addEventListener("mouseup", removeEvents)
        }

        function drawSquare(e) {
            const moveX = Math.floor(e.x / game.oneSquare);
            const moveY = Math.floor(e.y / game.oneSquare);
            const goSearch = search(moveX, moveY, game.wall);
            const goSearch2 = search(moveX, moveY, [game.startPoint, game.endPoint])
            if (whichButton == 2 && goSearch != undefined && goSearch2 === undefined) {
                game.wall.splice(goSearch.index, 1);
                clearParamets(goSearch);
                game.wall.forEach(e => {
                    if (e.index > goSearch.index)
                        e.index -= 1;
                })
            } else if (whichButton == 0 && goSearch === undefined && goSearch2 === undefined && e.target.id == game.canvas.id) {
                const sqr2 = new Draw();
                sqr2.ctx = game.ctx;
                sqr2.x = moveX;
                sqr2.y = moveY;
                sqr2.width = game.oneSquare;
                sqr2.height = game.oneSquare;
                sqr2.color = "purple";
                sqr2.index = game.wall.length;
                sqr2.drawSquare();
                game.wall.push(sqr2);
            }
        }

        function removeEvents(e) {
            const clickX = Math.floor(e.x / game.oneSquare);
            const clickY = Math.floor(e.y / game.oneSquare);
            const checkif = search(clickX, clickY, game.wall);
            const checkif2 = search(clickX, clickY, [game.startPoint, game.endPoint])
            if (startX == clickX && startY == clickY && checkif === undefined && checkif2 === undefined && e.target.id == game.canvas.id) {
                if (e.button == 0 && !game.startPoint.exist) {
                    paramets(game.startPoint, clickX, clickY)
                } else if (e.button == 0 && game.startPoint.exist) {
                    clearParamets(game.startPoint)
                    paramets(game.startPoint, clickX, clickY) // and clear function
                } else if (e.button == 2 && !game.endPoint.exist) {
                    paramets(game.endPoint, clickX, clickY)
                } else if (e.button == 2 && game.endPoint.exist) {
                    clearParamets(game.endPoint)
                    paramets(game.endPoint, clickX, clickY) // and clear function
                }
            }
            window.removeEventListener("mousemove", drawSquare);
            window.removeEventListener("mouseup", removeEvents);
        }

        function clearParamets(point) {
            point.clear();
            point.drawEmptySquare();
        }

        function paramets(position, clickX, clickY) {
            position.x = clickX;
            position.y = clickY;
            position.width = game.oneSquare;
            position.height = game.oneSquare;
            position.exist = true;
            position.drawSquare();
        }
    }
}