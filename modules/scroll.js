window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0 && init.square > 10) {
        init.square -= 2.5;
        OneSquare -= 2.5;
        clear.clear();
        init.calculations(sqr);
    } else if (e.deltaY < 0 && init.square < 30) {
        init.square += 2.5;
        OneSquare += 2.5;
        clear.clear();
        init.calculations(sqr);
    }
})