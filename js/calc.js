function calc() {
    let win = false;
    let lose = false;
    let start_pkt = [search2(game.grid, 1)];
    const sqr = game.square;
    let openNode = [];
    let tmp;
    // let RealOpenNode = [];
    const searchInv = setInterval(() => {
        for (let z = 0; z < start_pkt.length; z++) {
            if (search(start_pkt[z].x + sqr, start_pkt[z].y, game.grid) != undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y, openNode) == undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y, start_pkt) == undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y, game.grid).isStartPosition == false &&
                search(start_pkt[z].x + sqr, start_pkt[z].y, game.grid).wall == false) {
                search(start_pkt[z].x + sqr, start_pkt[z].y, game.grid).parent = search(start_pkt[z].x, start_pkt[z].y, game.grid);
                openNode.push(search(start_pkt[z].x + sqr, start_pkt[z].y, game.grid))
            }
            if (search(start_pkt[z].x - sqr, start_pkt[z].y, game.grid) != undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y, openNode) == undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y, start_pkt) == undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y, game.grid).isStartPosition == false &&
                search(start_pkt[z].x - sqr, start_pkt[z].y, game.grid).wall == false) {
                search(start_pkt[z].x - sqr, start_pkt[z].y, game.grid).parent = search(start_pkt[z].x, start_pkt[z].y, game.grid);
                openNode.push(search(start_pkt[z].x - sqr, start_pkt[z].y, game.grid));
            }
            if (search(start_pkt[z].x, start_pkt[z].y + sqr, game.grid) != undefined &&
                search(start_pkt[z].x, start_pkt[z].y + sqr, openNode) == undefined &&
                search(start_pkt[z].x, start_pkt[z].y + sqr, start_pkt) == undefined &&
                search(start_pkt[z].x, start_pkt[z].y + sqr, game.grid).isStartPosition == false &&
                search(start_pkt[z].x, start_pkt[z].y + sqr, game.grid).wall == false) {
                search(start_pkt[z].x, start_pkt[z].y + sqr, game.grid).parent = search(start_pkt[z].x, start_pkt[z].y, game.grid);
                openNode.push(search(start_pkt[z].x, start_pkt[z].y + sqr, game.grid))
            }
            if (search(start_pkt[z].x, start_pkt[z].y - sqr, game.grid) != undefined &&
                search(start_pkt[z].x, start_pkt[z].y - sqr, openNode) == undefined &&
                search(start_pkt[z].x, start_pkt[z].y - sqr, start_pkt) == undefined &&
                search(start_pkt[z].x, start_pkt[z].y - sqr, game.grid).isStartPosition == false &&
                search(start_pkt[z].x, start_pkt[z].y - sqr, game.grid).wall == false) {
                search(start_pkt[z].x, start_pkt[z].y - sqr, game.grid).parent = search(start_pkt[z].x, start_pkt[z].y, game.grid);
                openNode.push(search(start_pkt[z].x, start_pkt[z].y - sqr, game.grid))
            }
            if (search(start_pkt[z].x + sqr, start_pkt[z].y + sqr, game.grid) != undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y + sqr, openNode) == undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y + sqr, start_pkt) == undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y + sqr, game.grid).isStartPosition == false &&
                search(start_pkt[z].x + sqr, start_pkt[z].y + sqr, game.grid).wall == false) {
                if (search(start_pkt[z].x, start_pkt[z].y + sqr, game.grid) != undefined &&
                    search(start_pkt[z].x, start_pkt[z].y + sqr, game.grid).wall == false ||
                    search(start_pkt[z].x + sqr, start_pkt[z].y, game.grid) != undefined &&
                    search(start_pkt[z].x + sqr, start_pkt[z].y, game.grid).wall == false) {
                    search(start_pkt[z].x + sqr, start_pkt[z].y + sqr, game.grid).parent = search(start_pkt[z].x, start_pkt[z].y, game.grid);
                    openNode.push(search(start_pkt[z].x + sqr, start_pkt[z].y + sqr, game.grid))
                }

            }
            if (search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, game.grid) != undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, openNode) == undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, start_pkt) == undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, game.grid).isStartPosition == false &&
                search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, game.grid).wall == false) {
                if (search(start_pkt[z].x, start_pkt[z].y - sqr, game.grid) != undefined &&
                    search(start_pkt[z].x, start_pkt[z].y - sqr, game.grid).wall == false ||
                    search(start_pkt[z].x + sqr, start_pkt[z].y, game.grid) != undefined &&
                    search(start_pkt[z].x + sqr, start_pkt[z].y, game.grid).wall == false) {
                    search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, game.grid).parent = search(start_pkt[z].x, start_pkt[z].y, game.grid);
                    openNode.push(search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, game.grid))
                }
            }
            if (search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, game.grid) != undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, openNode) == undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, start_pkt) == undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, game.grid).isStartPosition == false &&
                search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, game.grid).wall == false) {
                if (search(start_pkt[z].x, start_pkt[z].y - sqr, game.grid) != undefined &&
                    search(start_pkt[z].x, start_pkt[z].y - sqr, game.grid).wall == false ||
                    search(start_pkt[z].x - sqr, start_pkt[z].y, game.grid) != undefined &&
                    search(start_pkt[z].x - sqr, start_pkt[z].y, game.grid).wall == false) {
                    search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, game.grid).parent = search(start_pkt[z].x, start_pkt[z].y, game.grid);
                    openNode.push(search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, game.grid))
                }
            }
            if (search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, game.grid) != undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, openNode) == undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, start_pkt) == undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, game.grid).isStartPosition == false &&
                search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, game.grid).wall == false) {
                if (search(start_pkt[z].x, start_pkt[z].y + sqr, game.grid) != undefined &&
                    search(start_pkt[z].x, start_pkt[z].y + sqr, game.grid).wall == false ||
                    search(start_pkt[z].x - sqr, start_pkt[z].y, game.grid) != undefined &&
                    search(start_pkt[z].x - sqr, start_pkt[z].y, game.grid).wall == false) {
                    search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, game.grid).parent = search(start_pkt[z].x, start_pkt[z].y, game.grid);
                    openNode.push(search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, game.grid))
                }
            }
        }

        function shortestWay() {
            let lastE = start_pkt[start_pkt.length - 1];
            game.draw.x = lastE.x;
            game.draw.y = lastE.y;
            game.draw.drawSquare("lightblue");
            path++;
            pathEl.innerHTML = path;
            let goodPathIntv = setInterval(() => {
                if (lastE.parent.isStartPosition == true) {
                    clearInterval(goodPathIntv);
                    if (inputCheckBox.checked == true && sizeSqr == 3) {
                        game.grid.forEach(e => {
                            game.ctx.font = "10px Georgia";
                            game.ctx.fillStyle = "black";
                            game.ctx.fillText('g=' + e.g, e.x + 5, e.y + 32)
                            game.ctx.fillText('h=' + e.h, e.x + 5, e.y + 22)
                            game.ctx.fillText('f=' + e.f, e.x + 5, e.y + 12)
                        })
                    }
                    allowToChange = true;
                    menu1.style.display = "none";
                    menu2.style.display = "none";
                    menu4.style.display = "none";
                    container_menu.style.width = 100 + "%";
                    menu3.style.display = "flex";
                    info.innerHTML = "Congratulations, you've found the path!";
                    info.style.color = "yellow";

                } else {
                    game.draw.x = lastE.parent.x;
                    game.draw.y = lastE.parent.y;
                    game.draw.drawSquare("lightblue");
                    lastE = lastE.parent;
                    path++;
                    pathEl.innerHTML = path;
                }
            }, speed);
        }
        if (openNode.length > 0) {
            tmp = getMin(openNode);
            openNode.forEach(e => {
                if (e.isEndPosition == true) {
                    win = true;
                    tmp = [];
                    openNode = [];
                    clearInterval(searchInv)
                    shortestWay();
                } else if (e.isStartPosition == false && e.isEndPosition == false && win == false) {
                    game.draw.x = e.x;
                    game.draw.y = e.y;
                    game.draw.drawSquare("yellow");
                }
            })


            tmp.forEach(e => {
                game.draw.x = e.x;
                game.draw.y = e.y;
                game.draw.drawSquare("orange");
                start_pkt.push(e);
                closeEl.innerHTML = start_pkt.length - 1;
            })
        } else {
            clearInterval(searchInv)
            tmp = undefined;
            openNode = [];
            lose = true;
            menu1.style.display = "none";
            menu2.style.display = "none";
            menu4.style.display = "none";
            container_menu.style.width = 100 + "%";
            menu3.style.display = "flex";
            info.innerHTML = "Unfortunately there is no path!";
            info.style.color = "red";
        }
        if (win == false && lose == false) {
            openEl.innerHTML = openNode.length - tmp.length;
        }
        tmp = undefined;
        openNode = [];
    }, speed);
}

function getMin(ar) {
    let lowestF = ar.reduce((min, p) => p.f < min ? p.f : min, ar[0].f);
    let tmpArray = [];

    for (let i = 0; i < ar.length; i++) {
        if (ar[i].f == lowestF) {
            tmpArray.push(ar[i]);

        }
    }

    let returnArray = [];
    let lowestH = tmpArray.reduce((min, p) => p.h < min ? p.h : min, ar[0].h);
    for (let j = 0; j < tmpArray.length; j++) {
        if (tmpArray[j].h == lowestH) {
            returnArray.push(tmpArray[j]);
        }
    }

    if (returnArray.length > 0) {
        return returnArray;
    } else {
        return tmpArray;
    }
}