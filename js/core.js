let countG;
let countH;

function core() {
    let startPoint = search2(game.grid, 1);
    startPoint.g = 0;
    startPoint.h = undefined;
    let endPoint = search2(game.grid, 2);
    endPoint.g = undefined;
    endPoint.h = 0
    gAndh([startPoint], 1);
    gAndh([endPoint], 2);
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
        } else if (numb == 3) {
            if (arr[i].h != undefined && arr[i].g != undefined && arr[i].f != undefined) {
                return true;
            }
        }
    }
    return false;
}

function gAndh(node, number) {
    const numb = number;
    let sqr = game.square;
    let int = setInterval(() => {
        if (node.length != 0) {
            for (let i = 0; i < node.length; i++) {
                let e = node[i];
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
                    node = [];
                    if (numb == 1) {
                        countG = true;
                    } else if (numb == 2) {
                        countH = true;
                    }
                    clearInterval(int);
                    break;
                }
            }
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
            if (countG && countH) {
                game.grid.forEach(e => {
                    e.f = e.h + e.g;
                })
            }
            if (check(game.grid, 3)) {
                console.log(game.grid)
                calc();
            }
        }
    }, 1);
}