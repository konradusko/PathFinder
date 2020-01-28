
function search(x, y, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].x === x && array[i].y === y) {
            return array[i];
        }
    }
}

function search2(array, numb) {
    for (let i = 0; i < array.length; i++) {
        if (numb == 1) {
            //start
            if (array[i].isStartPosition == true) {
                return array[i];
            }
        } else if (numb == 2) {
            if (array[i].isEndPosition == true) {
                return array[i];
            }
        }

    }
    return false;
}