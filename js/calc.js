function calc() {
    let win = false;
    let start_pkt = [search2(game.grid, 1)];
    const sqr = game.square;
    let openNode = [];
    let goodPath = [];
    let tmp;
    const searchInv = setInterval(() => {
        for (let z = 0; z < start_pkt.length; z++) {
            if (search(start_pkt[z].x + sqr, start_pkt[z].y, game.grid) != undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y, openNode) == undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y, start_pkt) == undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y, game.grid).isStartPosition == false &&
                search(start_pkt[z].x + sqr, start_pkt[z].y, game.grid).wall == false) {
                openNode.push(search(start_pkt[z].x + sqr, start_pkt[z].y, game.grid))
            }
            if (search(start_pkt[z].x - sqr, start_pkt[z].y, game.grid) != undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y, openNode) == undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y, start_pkt) == undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y, game.grid).isStartPosition == false &&
                search(start_pkt[z].x - sqr, start_pkt[z].y, game.grid).wall == false) {
                openNode.push(search(start_pkt[z].x - sqr, start_pkt[z].y, game.grid));
            }
            if (search(start_pkt[z].x, start_pkt[z].y + sqr, game.grid) != undefined &&
                search(start_pkt[z].x, start_pkt[z].y + sqr, openNode) == undefined &&
                search(start_pkt[z].x, start_pkt[z].y + sqr, start_pkt) == undefined &&
                search(start_pkt[z].x, start_pkt[z].y + sqr, game.grid).isStartPosition == false &&
                search(start_pkt[z].x, start_pkt[z].y + sqr, game.grid).wall == false) {
                openNode.push(search(start_pkt[z].x, start_pkt[z].y + sqr, game.grid))
            }
            if (search(start_pkt[z].x, start_pkt[z].y - sqr, game.grid) != undefined &&
                search(start_pkt[z].x, start_pkt[z].y - sqr, openNode) == undefined &&
                search(start_pkt[z].x, start_pkt[z].y - sqr, start_pkt) == undefined &&
                search(start_pkt[z].x, start_pkt[z].y - sqr, game.grid).isStartPosition == false &&
                search(start_pkt[z].x, start_pkt[z].y - sqr, game.grid).wall == false) {
                openNode.push(search(start_pkt[z].x, start_pkt[z].y - sqr, game.grid))
            }
            if (search(start_pkt[z].x + sqr, start_pkt[z].y + sqr, game.grid) != undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y + sqr, openNode) == undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y + sqr, start_pkt) == undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y + sqr, game.grid).isStartPosition == false &&
                search(start_pkt[z].x + sqr, start_pkt[z].y + sqr, game.grid).wall == false) {
                if (search(start_pkt[z].x, start_pkt[z].y + sqr, game.grid).wall == false ||
                    search(start_pkt[z].x + sqr, start_pkt[z].y, game.grid).wall == false) {
                    openNode.push(search(start_pkt[z].x + sqr, start_pkt[z].y + sqr, game.grid))
                }

            }
            if (search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, game.grid) != undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, openNode) == undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, start_pkt) == undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, game.grid).isStartPosition == false &&
                search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, game.grid).wall == false) {
                if (search(start_pkt[z].x, start_pkt[z].y - sqr, game.grid).wall == false ||
                    search(start_pkt[z].x + sqr, start_pkt[z].y, game.grid).wall == false) {
                    openNode.push(search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, game.grid))
                }
            }
            if (search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, game.grid) != undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, openNode) == undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, start_pkt) == undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, game.grid).isStartPosition == false &&
                search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, game.grid).wall == false) {
                if (search(start_pkt[z].x, start_pkt[z].y - sqr, game.grid).wall == false ||
                    search(start_pkt[z].x - sqr, start_pkt[z].y, game.grid).wall == false) {
                    openNode.push(search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, game.grid))
                }
            }
            if (search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, game.grid) != undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, openNode) == undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, start_pkt) == undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, game.grid).isStartPosition == false &&
                search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, game.grid).wall == false) {
                if (search(start_pkt[z].x, start_pkt[z].y + sqr, game.grid).wall == false ||
                    search(start_pkt[z].x - sqr, start_pkt[z].y, game.grid).wall == false) {
                    openNode.push(search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, game.grid))
                }
            }
        }

        function shortestWay() {
            goodPath.push(start_pkt[start_pkt.length - 1]);
            let goodPkt;
            let tmpGoodPath = [];
            let goodPathInv = setInterval(() => {
                if (search(goodPath[goodPath.length - 1].x + sqr, goodPath[goodPath.length - 1], start_pkt) != undefined &&
                    search(goodPath[goodPath.length - 1].x + sqr, goodPath[goodPath.length - 1], goodPath) == undefined) {
                    tmpGoodPath.push(search(goodPath[goodPath.length - 1].x + sqr, goodPath[goodPath.length - 1].y, start_pkt));
                }
                if (search(goodPath[goodPath.length - 1].x - sqr, goodPath[goodPath.length - 1].y, start_pkt) != undefined &&
                    search(goodPath[goodPath.length - 1].x - sqr, goodPath[goodPath.length - 1].y, goodPath) == undefined) {
                    tmpGoodPath.push(search(goodPath[goodPath.length - 1].x - sqr, goodPath[goodPath.length - 1].y, start_pkt));
                }
                if (search(goodPath[goodPath.length - 1].x, goodPath[goodPath.length - 1].y - sqr, start_pkt) != undefined &&
                    search(goodPath[goodPath.length - 1].x, goodPath[goodPath.length - 1].y - sqr, goodPath) == undefined) {
                    tmpGoodPath.push(search(goodPath[goodPath.length - 1].x, goodPath[goodPath.length - 1].y - sqr, start_pkt));
                }
                if (search(goodPath[goodPath.length - 1].x, goodPath[goodPath.length - 1].y + sqr, start_pkt) != undefined &&
                    search(goodPath[goodPath.length - 1].x, goodPath[goodPath.length - 1].y + sqr, goodPath) == undefined) {
                    tmpGoodPath.push(search(goodPath[goodPath.length - 1].x, goodPath[goodPath.length - 1].y + sqr, start_pkt));
                }
                if (search(goodPath[goodPath.length - 1].x + sqr, goodPath[goodPath.length - 1].y + sqr, start_pkt) != undefined &&
                    search(goodPath[goodPath.length - 1].x + sqr, goodPath[goodPath.length - 1].y + sqr, goodPath) == undefined) {
                    if (search(goodPath[goodPath.length - 1].x, goodPath[goodPath.length - 1].y + sqr, game.grid).wall == false ||
                        search(goodPath[goodPath.length - 1].x + sqr, goodPath[goodPath.length - 1].y, game.grid).wall == false) {
                        tmpGoodPath.push(search(goodPath[goodPath.length - 1].x + sqr, goodPath[goodPath.length - 1].y + sqr, start_pkt));
                    }
                }
                if (search(goodPath[goodPath.length - 1].x + sqr, goodPath[goodPath.length - 1].y - sqr, start_pkt) != undefined &&
                    search(goodPath[goodPath.length - 1].x + sqr, goodPath[goodPath.length - 1].y - sqr, goodPath) == undefined) {
                    if (search(goodPath[goodPath.length - 1].x, goodPath[goodPath.length - 1].y - sqr, game.grid).wall == false ||
                        search(goodPath[goodPath.length - 1].x + sqr, goodPath[goodPath.length - 1].y, game.grid).wall == false) {
                        tmpGoodPath.push(search(goodPath[goodPath.length - 1].x + sqr, goodPath[goodPath.length - 1].y - sqr, start_pkt));
                    }
                }
                if (search(goodPath[goodPath.length - 1].x - sqr, goodPath[goodPath.length - 1].y + sqr, start_pkt) != undefined &&
                    search(goodPath[goodPath.length - 1].x - sqr, goodPath[goodPath.length - 1].y + sqr, goodPath) == undefined) {
                    if (search(goodPath[goodPath.length - 1].x, goodPath[goodPath.length - 1].y + sqr, game.grid).wall == false ||
                        search(goodPath[goodPath.length - 1].x - sqr, goodPath[goodPath.length - 1].y, game.grid).wall == false) {
                        tmpGoodPath.push(search(goodPath[goodPath.length - 1].x - sqr, goodPath[goodPath.length - 1].y + sqr, start_pkt));
                    }
                }
                if (search(goodPath[goodPath.length - 1].x - sqr, goodPath[goodPath.length - 1].y - sqr, start_pkt) != undefined &&
                    search(goodPath[goodPath.length - 1].x - sqr, goodPath[goodPath.length - 1].y - sqr, goodPath) == undefined) {
                    if (search(goodPath[goodPath.length - 1].x, goodPath[goodPath.length - 1].y - sqr, game.grid).wall == false ||
                        search(goodPath[goodPath.length - 1].x - sqr, goodPath[goodPath.length - 1].y, game.grid).wall == false) {
                        tmpGoodPath.push(search(goodPath[goodPath.length - 1].x - sqr, goodPath[goodPath.length - 1].y - sqr, start_pkt));
                    }

                }

                if (tmpGoodPath.length == 1) {
                    goodPkt = tmpGoodPath[0];
                } else {
                    goodPkt = tmpGoodPath[0];
                    //które wartość ma najmniejszy f i najwiekszy h
                    for (let a = 1; a < tmpGoodPath.length; a++) {
                        if (goodPkt.f == tmpGoodPath[a].f && goodPkt.h < tmpGoodPath[a].h) {
                                goodPkt = tmpGoodPath[a];
                        } else if (goodPkt.f > tmpGoodPath[a].f) {
                            goodPkt = tmpGoodPath[a];
                            ///////do poprawy
                        }
                    
                    }

                }
                if (goodPkt.isStartPosition == false) {
                    goodPath.push(goodPkt);
                    goodPath.forEach(e => {
                        game.draw.x = e.x;
                        game.draw.y = e.y;
                        game.draw.drawSquare("lightblue");
                    })
                } else {
                    clearInterval(goodPathInv)
                    game.grid.forEach(e => {
                        game.ctx.font = "10px Georgia";
                        game.ctx.fillStyle = "black";
                        game.ctx.fillText('g=' + e.g, e.x + 5, e.y + 30)
                        game.ctx.fillText('h=' + e.h, e.x + 5, e.y + 20)
                        game.ctx.fillText('f=' + e.f, e.x + 5, e.y + 10)
                    })
                }
                tmpGoodPath = [];
            }, 200);
        }
        if (openNode.length > 0) {
            tmp = getMin(openNode);
            openNode.forEach(e => {
                if (e.isEndPosition == true) {
                    win = true;
                    tmp = [];
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
            })
        } else {
            console.log("GAME OVER")
            clearInterval(searchInv)
        }
        tmp = undefined;
        openNode = [];
    }, 50);
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