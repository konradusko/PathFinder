function calc() {
    let start_pkt = [search2(game.grid, 1)];
    const sqr = game.square;
    let openNode = [];
    let nodeAsPossible = []; // sprawdzone pod wzgledem istnienia i muru
    let tmp;
    let tryNodes = [search2(game.grid, 1)]; // obiekty które już były uzyte
    const searchInv = setInterval(() => {
        for (let z = 0; z < start_pkt.length; z++) {
            openNode.push(search(start_pkt[z].x + sqr, start_pkt[z].y, game.grid), search(start_pkt[z].x - sqr, start_pkt[z].y, game.grid),
                search(start_pkt[z].x, start_pkt[z].y + sqr, game.grid), search(start_pkt[z].x, start_pkt[z].y - sqr, game.grid),
                search(start_pkt[z].x + sqr, start_pkt[z].y + sqr, game.grid), search(start_pkt[z].x + sqr, start_pkt[z].y - sqr, game.grid),
                search(start_pkt[z].x - sqr, start_pkt[z].y - sqr, game.grid), search(start_pkt[z].x - sqr, start_pkt[z].y + sqr, game.grid)
            );
            for (let j = 0; j < openNode.length; j++) {
                if (openNode[j] != undefined && openNode[j].isEndPosition == true) {
                    clearInterval(searchInv);
                    console.log("we got this")
                    nodeAsPossible = undefined;
                    break;
                } else if (openNode[j] != undefined &&
                    openNode[j].isStartPosition == false &&
                    openNode[j].wall == false && search(openNode[j].x, openNode[j].y, nodeAsPossible) == undefined &&
                    search(openNode[j].x, openNode[j].y, tryNodes) == undefined) {
                    nodeAsPossible.push(openNode[j]);
                }
            }

        }
        // console.log(nodeAsPossible)
        if(nodeAsPossible != undefined){
            // console.log(getMin(nodeAsPossible))
            tmp = getMin(nodeAsPossible);
            nodeAsPossible.forEach(e => {
                game.draw.x = e.x;
                game.draw.y = e.y;
                game.draw.drawSquare("yellow");
            })
            tmp.forEach(e => {
                game.draw.x = e.x;
                game.draw.y = e.y;
                game.draw.drawSquare("orange");
                start_pkt.push(e);
                tryNodes.push(e);
            })
            tmp = undefined;
            nodeAsPossible = [];
            // game.grid.forEach(e => {
            //     game.ctx.font = "10px Georgia";
            //     game.ctx.fillStyle = "black";
            //     game.ctx.fillText('g=' + e.g, e.x + 5, e.y + 30)
            //     game.ctx.fillText('h=' + e.h, e.x + 5, e.y + 20)
            //     game.ctx.fillText('f=' + e.f, e.x + 5, e.y + 10)
            // })
        }


    }, 600);
}

function getMin(ar) {
    // console.log(ar2)
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
        // console.log(ar2)
        if (tmpArray[j].h == lowestH) {
            returnArray.push(tmpArray[j]);
        }
    }
    return returnArray;
}