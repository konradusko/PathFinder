function calc() {
    let win = false;
    let start_pkt = [search2(game.grid, 1)];
    const sqr = game.square;
    let openNode = [];
    let goodPath = [];
    let tmp;
    let tmp2;
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
                openNode.push(search(start_pkt[z].x + sqr, start_pkt[z].y + sqr, game.grid))
            }
            if (search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, game.grid) != undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, openNode) == undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, start_pkt) == undefined &&
                search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, game.grid).isStartPosition == false &&
                search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, game.grid).wall == false) {
                openNode.push(search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, game.grid))
            }
            if (search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, game.grid) != undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, openNode) == undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, start_pkt) == undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, game.grid).isStartPosition == false &&
                search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, game.grid).wall == false) {
                openNode.push(search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, game.grid))
            }
            if (search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, game.grid) != undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, openNode) == undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, start_pkt) == undefined &&
                search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, game.grid).isStartPosition == false &&
                search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, game.grid).wall == false) {
                openNode.push(search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, game.grid))
            }
        }
        if (openNode.length > 0) {
            tmp = getMin(openNode);
            openNode.forEach(e => {
                if (e.isEndPosition == true) {
                    console.log("win")
                    console.log(start_pkt)
                    clearInterval(searchInv);
                    // tmp = [];
                    goodPath.push(start_pkt[start_pkt.length - 1]);
                    // // goodPath.forEach(e => {
                    // for (let x = 0; x < goodPath.length; x++) {
                    //     tmp = [];
                    //     let e = goodPath[x];

                    //     if (search(e.x + sqr, e.y, start_pkt) != undefined) {
                    //         tmp.push(search(e.x + sqr, e.y, start_pkt));
                    //     }
                    //     if (search(e.x - sqr, e.y, start_pkt) != undefined) {
                    //         tmp.push(search(e.x - sqr, e.y, start_pkt));
                    //     }
                    //     if (search(e.x, e.y - sqr, start_pkt) != undefined) {
                    //         tmp.push(search(e.x, e.y - sqr, start_pkt));
                    //     }
                    //     if (search(e.x, e.y + sqr, start_pkt) != undefined) {
                    //         tmp.push(search(e.x, e.y + sqr, start_pkt));
                    //     }
                    //     if (search(e.x + sqr, e.y + sqr, start_pkt) != undefined) {
                    //         tmp.push(search(e.x + sqr, e.y + sqr, start_pkt));
                    //     }
                    //     if (search(e.x + sqr, e.y - sqr, start_pkt) != undefined) {
                    //         tmp.push(search(e.x + sqr, e.y - sqr, start_pkt));
                    //     }
                    //     if (search(e.x - sqr, e.y + sqr, start_pkt) != undefined) {
                    //         tmp.push(search(e.x - sqr, e.y + sqr, start_pkt));
                    //     }
                    //     if (search(e.x - sqr, e.y - sqr, start_pkt) != undefined) {
                    //         tmp.push(search(e.x - sqr, e.y - sqr, start_pkt));
                    //     }
                    //     if (tmp.length == 1) {
                    //         console.log("xd")
                    //         goodPath.push(tmp[0])
                    //         game.draw.x = tmp[0].x;
                    //         game.draw.y = tmp[0].y;
                    //         game.draw.drawSquare("lighblue")
                    //     } else {
                    //         tmp2 = tmp[0];
                    //         for (let q = 1; q < tmp.length; q++) {
                    //             if (tmp2.f >= tmp[q].f && tmp2.h > tmp[q].h){
                    //                 tmp2 = tmp[q];
                    //             }
                    //         }
                    //         game.draw.x = tmp2.x;
                    //         game.draw.y = tmp2.y;
                    //         game.draw.drawSquare("black")
                    //         goodPath.push(tmp2);
                    //         console.log("?")
                    //     }
                    //     console.log(goodPath)
                    // }
                    // })
                    game.grid.forEach(e => {
                        game.ctx.font = "10px Georgia";
                        game.ctx.fillStyle = "black";
                        game.ctx.fillText('g=' + e.g, e.x + 5, e.y + 30)
                        game.ctx.fillText('h=' + e.h, e.x + 5, e.y + 20)
                        game.ctx.fillText('f=' + e.f, e.x + 5, e.y + 10)
                    })
                    win = true;
                    tmp = [];
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