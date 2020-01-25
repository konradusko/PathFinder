function core() {
    let stInGrid = search(game.startPosition.x, game.startPosition.y, game.grid);
    stInGrid.g = 0;
    stInGrid.h = undefined;
    let endInGrid = search(game.endPosition.x, game.endPosition.y, game.grid);
    endInGrid.h = 0;
    endInGrid.g = undefined;
    gAndh([endInGrid], 1);
    // gAndh([endInGrid],2);
    console.log(game.grid)
    console.log(endInGrid)
}

function check(arr, numb) {
    for (let i = 0; i < arr.length; i++) {
        if (numb == 1) {
            if (arr[i].g === undefined) {
                return true;
            }
        } else if (numb == 2) {
            if (arr[i].h === undefined) {
                return true;
            }
        }
    }
}

function gAndh(node, numb) {
    let sqr = game.square;
    let xd = game.draw;
    let int = setInterval(() => {
        console.log(node)
        node.forEach(e => {

            // console.log(pkt)
            if (check(game.grid, numb)) {
                //numb 1 ==g
                if (numb == 1 && search(e.x + sqr, e.y, game.grid) != undefined &&
                    search(e.x + sqr, e.y, game.grid).g === undefined) {
                    search(e.x + sqr, e.y, game.grid).g = e.g + 10;
                    xd.x = e.x + sqr;
                    xd.y = e.y;
                    xd.drawSquare("black");
                } else if (numb == 2 && search(e.x + sqr, e.y, game.grid) != undefined &&
                    search(e.x + sqr, e.y, game.grid).h === undefined) {
                    search(e.x + sqr, e.y, game.grid).h = e.h + 10;
                    xd.x = e.x + sqr;
                    xd.y = e.y;
                    xd.drawSquare("yellow");
                }
                //  if(search(e.x + sqr, e.y, game.grid)!= undefined&&
                //  search(e.x + sqr, e.y, game.grid).g===undefined){
                //      search(e.x + sqr, e.y, game.grid).g = e.g + 10;
                //      xd.x = e.x + sqr;
                //      xd.y = e.y;
                //      xd.drawSquare("yellow");
                //      //
                //  }
                if (numb == 1 && search(e.x - sqr, e.y, game.grid) != undefined &&
                    search(e.x - sqr, e.y, game.grid).g === undefined) {
                    search(e.x - sqr, e.y, game.grid).g = e.g + 10;
                    xd.x = e.x + sqr;
                    xd.y = e.y;
                    xd.drawSquare("yellow");
                } else if (numb == 2 && search(e.x - sqr, e.y, game.grid) != undefined &&
                    search(e.x - sqr, e.y, game.grid).h === undefined) {
                    search(e.x - sqr, e.y, game.grid).h = e.h + 10;
                    xd.x = e.x + sqr;
                    xd.y = e.y;
                    xd.drawSquare("yellow");
                }



                //  if(search(e.x - sqr, e.y, game.grid)!= undefined&&
                //  search(e.x - sqr, e.y, game.grid).g===undefined){
                //      search(e.x - sqr, e.y, game.grid).g = e.g + 10;
                //      xd.x = e.x - sqr;
                //      xd.y = e.y;
                //      xd.drawSquare("yellow");
                //  }
                if (numb == 1 && search(e.x, e.y - sqr, game.grid) != undefined &&
                    search(e.x, e.y - sqr, game.grid).g === undefined) {
                    search(e.x, e.y - sqr, game.grid).g = e.g + 10;
                    xd.x = e.x + sqr;
                    xd.y = e.y;
                    xd.drawSquare("yellow");
                } else if (numb == 2 && search(e.x, e.y - sqr, game.grid) != undefined &&
                    search(e.x, e.y - sqr, game.grid).h === undefined) {
                    search(e.x, e.y - sqr, game.grid).h = e.h + 10;
                    xd.x = e.x + sqr;
                    xd.y = e.y;
                    xd.drawSquare("yellow");
                }
                //  if(search(e.x, e.y - sqr, game.grid)!= undefined&&
                //  search(e.x, e.y - sqr, game.grid).g===undefined){
                //      search(e.x, e.y - sqr, game.grid).g = e.g + 10;
                //      xd.x = e.x;
                //      xd.y = e.y - sqr;
                //      xd.drawSquare("yellow");
                //  }
                if (numb == 1 && search(e.x, e.y + sqr, game.grid) != undefined &&
                    search(e.x, e.y + sqr, game.grid).g === undefined) {
                    search(e.x, e.y + sqr, game.grid).g = e.g + 10;
                    xd.x = e.x + sqr;
                    xd.y = e.y;
                    xd.drawSquare("yellow");
                } else if (numb == 2 && search(e.x, e.y + sqr, game.grid) != undefined &&
                    search(e.x, e.y + sqr, game.grid).h === undefined) {
                    search(e.x, e.y + sqr, game.grid).h = e.h + 10;
                    xd.x = e.x + sqr;
                    xd.y = e.y;
                    xd.drawSquare("yellow");
                }
                //  if(search(e.x, e.y + sqr, game.grid)!= undefined&&
                //  search(e.x, e.y + sqr, game.grid).g===undefined){
                //      search(e.x, e.y + sqr, game.grid).g = e.g + 10;
                //      xd.x = e.x;
                //      xd.y = e.y + sqr;
                //      xd.drawSquare("yellow");
                //  }

                if (numb == 1 && search(e.x + sqr, e.y + sqr, game.grid) != undefined &&
                    search(e.x + sqr, e.y + sqr, game.grid).g === undefined) {
                    search(e.x + sqr, e.y + sqr, game.grid).g = e.g + 14;
                    node.push(search(e.x + sqr, e.y + sqr, game.grid));
                    xd.x = e.x + sqr;
                    xd.y = e.y;
                    xd.drawSquare("red");
                } else if (numb == 2 && search(e.x + sqr, e.y + sqr, game.grid) != undefined &&
                    search(e.x + sqr, e.y + sqr, game.grid).h === undefined) {
                    search(e.x + sqr, e.y + sqr, game.grid).h = e.h + 14;
                    node.push(search(e.x + sqr, e.y + sqr, game.grid));
                    xd.x = e.x + sqr;
                    xd.y = e.y;
                    xd.drawSquare("red");
                }

                //  if(search(e.x + sqr, e.y + sqr, game.grid)!= undefined&&
                //  search(e.x + sqr, e.y + sqr, game.grid).g===undefined){
                //      search(e.x + sqr, e.y + sqr, game.grid).g = e.g + 14;
                //      node.push(search(e.x + sqr, e.y + sqr, game.grid))
                //      xd.x = e.x + sqr;
                //      xd.y = e.y + sqr;
                //      xd.drawSquare("orange");
                //  }
                if (numb == 1 && search(e.x + sqr, e.y - sqr, game.grid) != undefined &&
                    search(e.x + sqr, e.y - sqr, game.grid).g === undefined) {
                    search(e.x + sqr, e.y - sqr, game.grid).g = e.g + 14;
                    node.push(search(e.x + sqr, e.y + sqr, game.grid));
                    xd.x = e.x + sqr;
                    xd.y = e.y;
                    xd.drawSquare("red");
                } else if (numb == 2 && search(e.x + sqr, e.y - sqr, game.grid) != undefined &&
                    search(e.x + sqr, e.y - sqr, game.grid).h === undefined) {
                    search(e.x + sqr, e.y - sqr, game.grid).h = e.h + 14;
                    node.push(search(e.x + sqr, e.y - sqr, game.grid));
                    xd.x = e.x + sqr;
                    xd.y = e.y;
                    xd.drawSquare("red");
                }
                //  if(search(e.x + sqr, e.y - sqr, game.grid)!= undefined&&
                //  search(e.x + sqr, e.y - sqr, game.grid).g===undefined){
                //      search(e.x + sqr, e.y - sqr, game.grid).g = e.g + 14;
                //      node.push(search(e.x + sqr, e.y - sqr, game.grid))
                //      xd.x = e.x + sqr;
                //      xd.y = e.y - sqr;
                //      xd.drawSquare("orange");
                //  }
                if (numb == 1 && search(e.x - sqr, e.y - sqr, game.grid) != undefined &&
                    search(e.x - sqr, e.y - sqr, game.grid).g === undefined) {
                    search(e.x - sqr, e.y - sqr, game.grid).g = e.g + 14;
                    node.push(search(e.x + sqr, e.y + sqr, game.grid));
                    xd.x = e.x + sqr;
                    xd.y = e.y;
                    xd.drawSquare("red");
                } else if (numb == 2 && search(e.x - sqr, e.y - sqr, game.grid) != undefined &&
                    search(e.x - sqr, e.y - sqr, game.grid).h === undefined) {
                    search(e.x - sqr, e.y - sqr, game.grid).h = e.h + 14;
                    node.push(search(e.x - sqr, e.y - sqr, game.grid));
                    xd.x = e.x + sqr;
                    xd.y = e.y;
                    xd.drawSquare("red");
                }
                //  if(search(e.x - sqr, e.y - sqr, game.grid)!= undefined&&
                //  search(e.x - sqr, e.y - sqr, game.grid).g===undefined){
                //      search(e.x - sqr, e.y - sqr, game.grid).g = e.g + 14;
                //      node.push(search(e.x - sqr, e.y - sqr, game.grid))
                //      xd.x = e.x - sqr;
                //      xd.y = e.y - sqr;
                //      xd.drawSquare("orange");
                //  }
                if (numb == 1 && search(e.x - sqr, e.y + sqr, game.grid) != undefined &&
                    search(e.x - sqr, e.y + sqr, game.grid).g === undefined) {
                    search(e.x - sqr, e.y + sqr, game.grid).g = e.g + 14;
                    node.push(search(e.x + sqr, e.y + sqr, game.grid));
                    xd.x = e.x + sqr;
                    xd.y = e.y;
                    xd.drawSquare("red");
                } else if (numb == 2 && search(e.x - sqr, e.y + sqr, game.grid) != undefined &&
                    search(e.x - sqr, e.y + sqr, game.grid).h === undefined) {
                    search(e.x - sqr, e.y + sqr, game.grid).h = e.h + 14;
                    node.push(search(e.x - sqr, e.y + sqr, game.grid));
                    xd.x = e.x + sqr;
                    xd.y = e.y;
                    xd.drawSquare("red");
                }
                //  if(search(e.x - sqr, e.y + sqr, game.grid)!= undefined&&
                //  search(e.x - sqr, e.y + sqr, game.grid).g===undefined){
                //      search(e.x - sqr, e.y + sqr, game.grid).g = e.g + 14;
                //      node.push(search(e.x - sqr, e.y + sqr, game.grid))
                //      xd.x = e.x - sqr;
                //      xd.y = e.y + sqr;
                //      xd.drawSquare("orange");
                //  }

            } else {
                console.log("stop")
                clearInterval(int);
                console.log(game.grid)
            }

        });
        let node2 = [];
        let lastindx = node[node.length - 1];
        console.log(lastindx)
        for (let i = 0; i < node.length; i++) {
            if (numb == 1) {
                console.log(node[i].g, lastindx.g)
                if (node[i].g == lastindx.g) {
                    node2.push(node[i])
                }
            } else if (numb == 2) {
                if (node[i].h == lastindx.h) {
                    node2.push(node[i])
                }
            }

        }
        node = node2;
    }, 50);
}