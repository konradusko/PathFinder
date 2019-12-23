function search(x, y, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].x === x && array[i].y === y) {
            return array[i];
        }
    }
}

function calculateLocation() {
    game.block = false;
    const searchArray = [];
    const lastPoints = [];
    const start = game.startPoint;
    const end = game.endPoint;
    console.log(end)
    console.log(start)
    searchArray.push(start)
    lastPoints.push(start);
    // for (let i = 0; i < 8; i++) {
    const engine = setInterval(() => {
        let PresentDistanceX = Math.abs(lastPoints[lastPoints.length - 1].x - end.x);
        let PresentDistanceY = Math.abs(lastPoints[lastPoints.length - 1].y - end.y);

        let e = lastPoints[lastPoints.length - 1];
        // let directionsX = [];
        // let directionsY = [];
        let directions = [];
        Right = {
            IsTrue: search(e.x + 1, e.y, searchArray),
            IsWall: search(e.x + 1, e.y, game.wall),
            x: e.x + 1,
            y: e.y,
        };
        Left = {
            IsTrue: search(e.x - 1, e.y, searchArray),
            IsWall: search(e.x - 1, e.y, game.wall),
            x: e.x - 1,
            y: e.y,
        };
        Up = {
            IsTrue: search(e.x, e.y - 1, searchArray),
            IsWall: search(e.x, e.y - 1, game.wall),
            x: e.x,
            y: e.y - 1,
        };
        Down = {
            IsTrue: search(e.x, e.y + 1, searchArray),
            IsWall: search(e.x, e.y + 1, game.wall),
            x: e.x,
            y: e.y + 1,
        };
        directions.push(Right, Left, Up, Down);
        test = [];
        let xd = 0;
        for (let j = 0; j < 4; j++) {
            if (directions[j].IsTrue === undefined && directions[j].IsWall === undefined) {
                const square = new Draw();
                square.x = directions[j].x;
                square.y = directions[j].y;
                square.width = game.oneSquare;
                square.height = game.oneSquare;
                square.ctx = game.ctx;
                square.color = "yellow";
                square.drawSquare();
                searchArray.push(square)
                test.push(square)
            }else{
               xd++;
            } 
          
        }

        for (let k = 0; k < test.length; k++) {
            if (Math.abs(end.x - test[k].x) < PresentDistanceX) {
                test[k].color = "orange";
                console.log("xd")
                lastPoints.push(test[k]);
                test[k].drawSquare();
                break;

            } else if (Math.abs(end.y - test[k].y < PresentDistanceY)) {
                test[k].color = "gray";
                lastPoints.push(test[k]);
                test[k].drawSquare();
                break;
            }
            // else if (Math.abs(end.y - test[k].y > PresentDistanceY)) {
            //     test[k].color = "pink";
            //     lastPoints.push(test[k]);
            //     test[k].drawSquare();
            //     break;
            // }
        }
        console.log(lastPoints)

        //0 right 1 left 2 up 3 down
        //         directionsX.push(Right, Left)
        //         directionsY.push(Up,Down)
        //         for (let j = 0; j < 2; j++) {
        //             if(lastPoints[lastPoints.length - 1].x == end.x && lastPoints[lastPoints.length - 1].y === end.y){
        //                 clearInterval(engine);
        //             }else if (directionsX[j].IsTrue === undefined && directionsX[j].IsWall === undefined) {
        //                 console.log(Math.abs(end.x - directionsX[j].x))
        //                 console.log(PresentDistanceX)
        //                 console.log("/////" + j)
        //                 console.log(Math.abs(end.y - directionsX[j].y))
        //                 console.log(PresentDistanceY)
        //                 const square = new Draw();
        //                 square.x = directionsX[j].x;
        //                 square.y = directionsX[j].y;
        //                 square.width = game.oneSquare;
        //                 square.height = game.oneSquare;
        //                 square.color = "yellow";
        //                 if (Math.abs(end.x - directionsX[j].x) < PresentDistanceX&&Math.abs(end.y - directionsX[j].y <= PresentDistanceY)) {
        //                     square.color = "orange";
        //                     lastPoints.push(directionsX[j]);

        //                 }else {
        // for (let k =0; k <2 ;k++){
        //     console.log("xd")
        //     if( (directionsY[j].IsTrue === undefined && directionsY[j].IsWall === undefined) ){
        //         if((Math.abs(end.x - directionsX[j].x) === PresentDistanceX&&Math.abs(end.y - directionsX[j].y <= PresentDistanceY))){
        //             square.color = "gray";
        //             lastPoints.push(directionsX[j]);
        //         }
        //     }
        // }
        //                 }
        //             square.ctx = game.ctx;
        //             square.drawSquare();
        //             searchArray.push(square)
        //         }
        //     }
        // console.log(lastPoints)
        // }
    }, 500)
}

// function calculateLocation() {
//     game.block = false;
//     const searchArray = [];
//     searchArray.push(game.startPoint)
//     const engine = setInterval(() => {
//         searchArray.forEach(e => {
//             let startX = Math.abs(game.endPoint.x - e.x);
//             let startY = Math.abs(game.endPoint.y - e.y);
//             // console.log(startX)
//             let directions = [];
//             Right = {
//                 IsTrue: search(e.x + 1, e.y, searchArray),
//                 IsWall: search(e.x + 1, e.y, game.wall),
//                 valueX: e.x + 1,
//                 valueY: e.y,
//                 Gx:Math.abs(game.endPoint.x - (e.x+1)),
//                 Fx:Math.abs(game.endPoint.y - e.y)
//             };
//             Left = {
//                 IsTrue: search(e.x - 1, e.y, searchArray),
//                 IsWall: search(e.x - 1, e.y, game.wall),
//                 valueX: e.x - 1,
//                 valueY: e.y,
//                 Gx:Math.abs(game.endPoint.x - (e.x-1)),
//                 Fx:Math.abs(game.endPoint.y - e.y)
//             };
//             Up = {
//                 IsTrue: search(e.x, e.y - 1, searchArray),
//                 IsWall: search(e.x, e.y - 1, game.wall),
//                 valueX: e.x,
//                 valueY: e.y - 1,
//                 Gx:Math.abs(game.endPoint.x - e.x),
//                 Fx:Math.abs(game.endPoint.y - (e.y -1))
//             };
//             Down = {
//                 IsTrue: search(e.x, e.y + 1, searchArray),
//                 IsWall: search(e.x, e.y + 1, game.wall),
//                 valueX: e.x,
//                 valueY: e.y + 1,
//                 Gx:Math.abs(game.endPoint.x - e.x),
//                 Fx:Math.abs(game.endPoint.y - (e.y +1))
//             };
//             //0 right 1 left 2 up 3 down
//             directions.push(Right, Left, Up, Down)
//             for (let j = 0; j < 4; j++) {
//                 if (directions[j].valueX == game.endPoint.x && directions[j].valueY == game.endPoint.y) {
//                     console.log("win");
//                     clearInterval(engine)
//                     console.log(searchArray)
//                     shortPath();
//                     break;
//                 } else if (directions[j].IsTrue === undefined && directions[j].IsWall === undefined &&
//                     directions[j].valueX >= 0 && directions[j].valueX < (game.canvas.width / game.oneSquare) &&
//                     directions[j].valueY >= 0 && directions[j].valueY < (game.canvas.height / game.oneSquare)) {
//                     const square = new Draw();
//                     square.x = directions[j].valueX;
//                     square.y = directions[j].valueY;
//                     square.G = directions[j].Gx;
//                     square.F = directions[j].Fx;
//                     square.width = game.oneSquare;
//                     square.height = game.oneSquare;
//                     square.color = "yellow";
//                     square.ctx = game.ctx;
//                     square.drawSquare();
//                     searchArray.push(square)
//                 }
//             }
//         })
//     }, 200)
//     function shortPath(){
//         // let e = game.endPoint;
//         let test = [game.endPoint];
//      for(let i = 0; i <5;i++){
//         // const engine = setInterval(() => {
//             searchArray.forEach(e=>{

//            let testnumber = 0;
//          let directions = [];
//         //  let directionsY = [];
//         Right = {
//             IsTrue: search(e.x + 1, e.y, searchArray),
//             IsWall: search(e.x + 1, e.y, game.wall),
//             valueX: e.x + 1,
//             valueY: e.y,
//             Gx:Math.abs(game.endPoint.x - (e.x+1)),
//             Fx:Math.abs(game.endPoint.y - e.y)
//         };
//         Left = {
//             IsTrue: search(e.x - 1, e.y, searchArray),
//             IsWall: search(e.x - 1, e.y, game.wall),
//             valueX: e.x - 1,
//             valueY: e.y,
//             Gx:Math.abs(game.endPoint.x - (e.x-1)),
//             Fx:Math.abs(game.endPoint.y - e.y)
//         };
//         Up = {
//             IsTrue: search(e.x, e.y - 1, searchArray),
//             IsWall: search(e.x, e.y - 1, game.wall),
//             valueX: e.x,
//             valueY: e.y - 1,
//             Gx:Math.abs(game.endPoint.x - e.x),
//             Fx:Math.abs(game.endPoint.y - (e.y -1))
//         };
//         Down = {
//             IsTrue: search(e.x, e.y + 1, searchArray),
//             IsWall: search(e.x, e.y + 1, game.wall),
//             valueX: e.x,
//             valueY: e.y + 1,
//             Gx:Math.abs(game.endPoint.x - e.x),
//             Fx:Math.abs(game.endPoint.y - (e.y +1))
//         };
//             directions.push(Right, Left,Up,Down)
//             // directionsY.push()
//             console.log(Down.Gx)
//             for(let j =0; j< 4; j++){
//                 // if (directions[j].valueX == game.startPoint.x && directions[j].valueY == game.startPoint.y) {
//                 //     console.log("win222222");
//                 //     clearInterval(engine)
//                 //     // console.log(searchArray)
//                 //     // shortPath();
//                 //     break;
//                 // }else 
//                 if(directions[j].IsTrue != undefined&& directions[j].IsWall === undefined&&
//                     directions[j].Fx < e.F&& directions[j].Gx < e.G){
//                     // console.log(directions[j].check);
//                      console.log(e.F)
//                     e.color = "orange";
//                     e.drawSquare();
//                     break;
//                 }
// //                 else if( directions[j].IsTrue === undefined&& directions[j].IsWall === undefined){
// // testnumber++;
// // // console.log(testnumber)
// //                 }else if( directions[j].IsTrue != undefined&& directions[j].IsWall === undefined){
// //                     // directions[j].IsTrue.color = "red";
// //                     // directions[j].IsTrue.drawSquare();
// //                     // // e = directions[j].IsTrue;
// //                     // test.push(directions[j].IsTrue)

// //                   // directions2.push(directions[j].IsTrue);
// //                 //   console.log(directions[j].firstPKT)
// //                 //   console.log(directions[j].check)
// //                 }

//             }
//             // console.log(testnumber)
//             // if(testnumber ==0){
//             //     e.color = "purple";
//             //     e.drawSquare();
//             // }else    if(testnumber ==1){
//             //     e.color = "orange";
//             //     e.drawSquare();
//             // }else if(testnumber ==2 ){
//             // //  console.log(e)
//             //  e.color = "pink";
//             //  e.drawSquare();
//             // }else if(testnumber ==3){
//             //     e.color = "black";
//             //     e.drawSquare();
//             // }
//         })
//         // }, 500)
//      }
//     }
// }