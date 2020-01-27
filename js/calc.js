function calc() {
    let start_pkt = search2(game.grid, 1);
    let node;
    let goodPath = [];
    const sqr = game.square;
    const int = setInterval(() => {
        node = [];
        node = [search(start_pkt.x + sqr, start_pkt.y, game.grid), search(start_pkt.x - sqr, start_pkt.y, game.grid),
            search(start_pkt.x, start_pkt.y + sqr, game.grid), search(start_pkt.x, start_pkt.y - sqr, game.grid),
            search(start_pkt.x + sqr, start_pkt.y + sqr, game.grid), search(start_pkt.x + sqr, start_pkt.y - sqr, game.grid),
            search(start_pkt.x - sqr, start_pkt.y - sqr, game.grid), search(start_pkt.x - sqr, start_pkt.y + sqr, game.grid)
        ]
        let nodeOfF = [];
        let nodeOfElements = [];
        let least;
        let drw = game.draw;
        //jesli bedzie undefined usuwam

        for (let i = 0; i < node.length; i++) {
            if (node[i] != undefined&&node[i].isEndPosition == true) {
                clearInterval(int)
                console.log(goodPath)
                goodPath.forEach(e=>{
                    drw.x =e.x;
                    drw.y = e.y;
                    drw.drawSquare("orange");
                })
                break;
            } else if (node[i] != undefined && node[i].isStartPosition === false) {
                // console.log(node[i])
                nodeOfElements.push(node[i])
            }
        }
        node = nodeOfElements;
        let tmp = nodeOfElements[0].f; //szukam najmniejszego F
        for (let j = 0; j < nodeOfElements.length; j++) {
            if (nodeOfElements[j].f <= tmp) {
                nodeOfF.push(nodeOfElements[j]); //dodaje najmniejsze F do listy
                tmp = nodeOfElements[j].f; // tmp ma obecny F by dalej szukać
            }
        }
        if (nodeOfF.length > 1) {
            //jesli f sa takie same szukam najmniejszego h
            nodeOfElements = nodeOfF;
            nodeOfF = nodeOfElements[0];
            for (let k = 0; k < nodeOfElements.length; k++) {
                if (nodeOfElements[k].h <= nodeOfF.h) {
                    console.log(nodeOfElements[k])
                    nodeOfF = nodeOfElements[k];
                }
            }
            least = nodeOfF;
        } else {
            least = nodeOfF[0]; //pkt ktory rysujemy
        }
        console.log(least, "least")
        node.splice(node.indexOf(search(least.x, least.y, node)), 1); //usuwamy z node rysowany wyzej element

        node.forEach(element => {
            if (element.isStartPosition == false) {
                drw.x = element.x;
                drw.y = element.y;
                drw.drawSquare("red");
            }
        });
        drw.x = least.x;
        drw.y = least.y;
        drw.drawSquare("yellow");
        start_pkt = least;
        goodPath.push(least);

    }, 1000);

    console.log(goodPath)
}