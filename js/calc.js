function calc() {
    let start_pkt = search2(game.grid, 1);
    const sqr = game.square;
    let node;
    let nodeAsPossible = [];
    let tmp;
    let goodPath = [];
    let nodeOfF = [];
    const searchInterval = setInterval(() => {
        node = [];
        node = [search(start_pkt.x + sqr, start_pkt.y, game.grid), search(start_pkt.x - sqr, start_pkt.y, game.grid),
            search(start_pkt.x, start_pkt.y + sqr, game.grid), search(start_pkt.x, start_pkt.y - sqr, game.grid),
            search(start_pkt.x + sqr, start_pkt.y + sqr, game.grid), search(start_pkt.x + sqr, start_pkt.y - sqr, game.grid),
            search(start_pkt.x - sqr, start_pkt.y - sqr, game.grid), search(start_pkt.x - sqr, start_pkt.y + sqr, game.grid)
        ];
        for (let i = 0; i < node.length; i++) {
            if (node[i] != undefined && node[i].isEndPosition == true) {
                //znalazło pkt
                console.log("MAMY TO")
                clearInterval(searchInterval)
                nodeAsPossible = [];
                break;
            } else if (node[i] != undefined && node[i].isStartPosition === false && node[i].wall == false&&
                search(node[i].x,node[i].y,goodPath)== undefined) {
                //jesli nie jest sciana i istnieje 
                console.log( search(node[i].x,node[i].y,goodPath))
                nodeAsPossible.push(node[i]);
            }
        }
        console.log(nodeAsPossible)
        if (nodeAsPossible.length != 0) {
            tmp = nodeAsPossible[0];
            for (let j = 0; j < nodeAsPossible.length; j++) {
                //szukam najmniejszego f lub h

                if (nodeAsPossible[j].f < tmp.f) {
                    tmp = nodeAsPossible[j];
                    console.log("?")
                }else if (nodeAsPossible[j].f == tmp.f) {
                    tmp = nodeAsPossible[j];
                    nodeOfF.push(nodeAsPossible[j]);
                }
       
            }
            if (nodeOfF.length > 1) {
                // console.log(nodeOfF)
                tmp = nodeOfF[0];
                // console.log(tmp)
                for (let k = 0; k < nodeOfF.length; k++) {
                    // console.log(nodeOfF[k])
                    // console.log(tmp)
                    if (nodeOfF[k].g > tmp.g) {
                        tmp = nodeOfF[k];
                        // console.log("MNIEJSZE")
                    } else if (nodeOfF[k].g == tmp.g) {
                        if (nodeOfF[k].h <= tmp.h) {
                            tmp = nodeOfF[k];
                        } 
                    }
                }
            }
            nodeAsPossible.splice(nodeAsPossible.indexOf(search(tmp.x, tmp.y, game.grid)), 1);
            console.log(tmp);
            console.log(nodeAsPossible);
            nodeAsPossible.forEach(e => {
                game.draw.x = e.x;
                game.draw.y = e.y;
                game.draw.drawSquare("yellow");
            })

            // game.draw.x = tmp.x;
            // game.draw.y = tmp.y;
            // game.draw.drawSquare("red");
            goodPath.push(tmp);
            goodPath.forEach(e => {
                game.draw.x = e.x;
                game.draw.y = e.y;
                game.draw.drawSquare("red");
            })

            game.grid.forEach(e => {
                game.ctx.font = "15px Georgia";
                game.ctx.fillStyle = "black";
                game.ctx.fillText('g=' + e.g, e.x + 5, e.y + 60)
                game.ctx.fillText('h=' + e.h, e.x + 5, e.y + 40)
                game.ctx.fillText('f=' + e.f, e.x + 5, e.y + 20)
            })

nodeAsPossible=[];
            start_pkt = tmp;
tmp =0;
// clearInterval(searchInterval)
        }

        //   clearInterval(searchInterval)
    })
}
