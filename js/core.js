function core() {
    let stInGrid = search(game.startPosition.x, game.startPosition.y, game.grid);
    stInGrid.g = 0;
    stInGrid.h = undefined;
    let endInGrid = search(game.endPosition.x, game.endPosition.y, game.grid);
    endInGrid.h = 0;
    endInGrid.g = undefined;
    gAndh([stInGrid], 1);
    gAndh([endInGrid], 2);
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

function gAndh(nod, number) {
    let node = nod;
    // console.log(node)
    const numb = number;
    let sqr = game.square;
    let int = setInterval(() => {
        if (node.length != 0) {
            node.forEach(e => {
                if (check(game.grid, numb)) {
                    //numb 1 ==g
                    if (numb == 1 && search(e.x + sqr, e.y, game.grid) != undefined &&
                        search(e.x + sqr, e.y, game.grid).g === undefined) {
                        search(e.x + sqr, e.y, game.grid).g = e.g + 10;
                    } else if (search(e.x + sqr, e.y, game.grid) != undefined &&
                        search(e.x + sqr, e.y, game.grid).h === undefined && numb == 2) {
                        search(e.x + sqr, e.y, game.grid).h = e.h + 10;
                    }

                    if (numb == 1 && search(e.x - sqr, e.y, game.grid) != undefined &&
                        search(e.x - sqr, e.y, game.grid).g === undefined) {
                        search(e.x - sqr, e.y, game.grid).g = e.g + 10;
                    } else if (numb == 2 && search(e.x - sqr, e.y, game.grid) != undefined &&
                        search(e.x - sqr, e.y, game.grid).h === undefined) {
                        search(e.x - sqr, e.y, game.grid).h = e.h + 10;
                    }

                    if (numb == 1 && search(e.x, e.y - sqr, game.grid) != undefined &&
                        search(e.x, e.y - sqr, game.grid).g === undefined) {
                        search(e.x, e.y - sqr, game.grid).g = e.g + 10;
                    } else if (search(e.x, e.y - sqr, game.grid) != undefined &&
                        search(e.x, e.y - sqr, game.grid).h === undefined && numb == 2) {
                        search(e.x, e.y - sqr, game.grid).h = e.h + 10;
                    }

                    if (numb == 1 && search(e.x, e.y + sqr, game.grid) != undefined &&
                        search(e.x, e.y + sqr, game.grid).g === undefined) {
                        search(e.x, e.y + sqr, game.grid).g = e.g + 10;
                    } else if (search(e.x, e.y + sqr, game.grid) != undefined &&
                        search(e.x, e.y + sqr, game.grid).h === undefined && numb == 2) {
                        search(e.x, e.y + sqr, game.grid).h = e.h + 10;
                    }


                    if (search(e.x + sqr, e.y + sqr, game.grid) != undefined &&
                        search(e.x + sqr, e.y + sqr, game.grid).g === undefined && numb == 1) {
                        search(e.x + sqr, e.y + sqr, game.grid).g = e.g + 14;
                        node.push(search(e.x + sqr, e.y + sqr, game.grid))
                    } else if (search(e.x + sqr, e.y + sqr, game.grid) != undefined &&
                        search(e.x + sqr, e.y + sqr, game.grid).h === undefined && numb == 2) {
                        search(e.x + sqr, e.y + sqr, game.grid).h = e.h + 14;
                        node.push(search(e.x + sqr, e.y + sqr, game.grid))
                    }

                    if (search(e.x + sqr, e.y - sqr, game.grid) != undefined &&
                        search(e.x + sqr, e.y - sqr, game.grid).g === undefined && numb == 1) {
                        search(e.x + sqr, e.y - sqr, game.grid).g = e.g + 14;
                        node.push(search(e.x + sqr, e.y - sqr, game.grid))
                    } else if (search(e.x + sqr, e.y - sqr, game.grid) != undefined &&
                        search(e.x + sqr, e.y - sqr, game.grid).h === undefined && numb == 2) {
                        search(e.x + sqr, e.y - sqr, game.grid).h = e.h + 14;
                        node.push(search(e.x + sqr, e.y - sqr, game.grid))
                    }

                    if (search(e.x - sqr, e.y - sqr, game.grid) != undefined &&
                        search(e.x - sqr, e.y - sqr, game.grid).g === undefined && numb == 1) {
                        search(e.x - sqr, e.y - sqr, game.grid).g = e.g + 14;
                        node.push(search(e.x - sqr, e.y - sqr, game.grid))
                    } else if (search(e.x - sqr, e.y - sqr, game.grid) != undefined &&
                        search(e.x - sqr, e.y - sqr, game.grid).h === undefined && numb == 2) {
                        search(e.x - sqr, e.y - sqr, game.grid).h = e.h + 14;
                        node.push(search(e.x - sqr, e.y - sqr, game.grid))
                    }

                    if (search(e.x - sqr, e.y + sqr, game.grid) != undefined &&
                        search(e.x - sqr, e.y + sqr, game.grid).g === undefined && numb == 1) {
                        search(e.x - sqr, e.y + sqr, game.grid).g = e.g + 14;
                        node.push(search(e.x - sqr, e.y + sqr, game.grid))
                    } else if (search(e.x - sqr, e.y + sqr, game.grid) != undefined &&
                        search(e.x - sqr, e.y + sqr, game.grid).h === undefined && numb == 2) {
                        search(e.x - sqr, e.y + sqr, game.grid).h = e.h + 14;
                        node.push(search(e.x - sqr, e.y + sqr, game.grid))
                    }

                } else {
                    node.splice(node.indexOf(search(e.x, e.y, node)), 1);
                }

            });
            let node2 = [];
            let lastindx = node[node.length - 1];
            for (let i = 0; i < node.length; i++) {
                if (numb == 1) {
                    if (node[i].g == lastindx.g) {
                        node2.push(node[i])
                    }
                } else if (numb == 2) {
                    if (node[i].h == lastindx.h) {
                        node2.push(node[i])
                    }
                }
            }
            node = [];
            node = node2;

        } else {
            clearInterval(int);
            game.count += 1;
            if (game.count == 2) {
                console.log("czas na F COST")
                game.grid.forEach(e => {
                    e.f = e.g + e.h;
                })
                console.log(game.grid)
            }
        }
    }, 50);
}