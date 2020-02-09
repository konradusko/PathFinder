const squareSizeSmall = document.getElementById("SquareSizeSmall"),
    squareSizeMedium = document.getElementById("SquareSizeMedium"),
    squareSizeLarge = document.getElementById("SquareSizeLarge"),
    search_BTN = document.getElementById("search_BTN"),
    inputCheckBox = document.getElementById("showValue"),
    openEl = document.getElementById("open"),
    closeEl = document.getElementById("close"),
    pathEl = document.getElementById("path"),
    smallBTN = document.getElementById("slow"),
    mediumBTN = document.getElementById("medium"),
    fastBtN = document.getElementById("fast"),
    menu1 = document.getElementById("menu_1"),
    menu2 = document.getElementById("menu_2"),
    menu3 = document.getElementById("menu_3"),
    info = document.getElementById("Info"),
    menu4 = document.getElementById("menu_4"),
    playAgainBTN = document.getElementById("playAgain"),
    containerMenu = document.getElementById("container_menu");

    playAgainBTN.addEventListener("click", e=>{
        location.reload();
    })
    smallBTN.addEventListener("click", e=>{
        if(allowToChange){
            speed = 140;
          smallBTN.classList.add("active");
          mediumBTN.classList.remove("active");
          fastBtN.classList.remove("active");
        }
    })
    mediumBTN.addEventListener("click", e=>{
        if(allowToChange){
            speed = 90;
            smallBTN.classList.remove("active");
            mediumBTN.classList.add("active");
            fastBtN.classList.remove("active");

        }
    })
    fastBtN.addEventListener("click", e=>{
        if(allowToChange){
            speed = 20;
            smallBTN.classList.remove("active");
            mediumBTN.classList.remove("active");
            fastBtN.classList.add("active");
        }
    })

squareSizeSmall.addEventListener("click", e => {
    if(allowToChange){
        game = new Game(15);
        game.loop();
        squareSizeSmall.classList.add("active");
        squareSizeMedium.classList.remove("active");
        squareSizeLarge.classList.remove("active");
        sizeSqr = 1;
        reset();
    }

});
squareSizeMedium.addEventListener("click", e => {
    if(allowToChange){
        game = new Game(25);
        game.loop();
        squareSizeSmall.classList.remove("active");
        squareSizeMedium.classList.add("active");
        squareSizeLarge.classList.remove("active");
        sizeSqr = 2;
        reset();
    }

});
squareSizeLarge.addEventListener("click", e => {
    if(allowToChange){
        game = new Game(40);
        game.loop();
        squareSizeSmall.classList.remove("active");
        squareSizeMedium.classList.remove("active");
        squareSizeLarge.classList.add("active");
        sizeSqr = 3;
    reset();
    }

});
search_BTN.addEventListener("click", e => {
    if (startExist == true && endExist == true && allowToChange == true) {
        core();
        allowToDraw = false;
        allowToChange = false;
    }

})
function reset(){
    allowToDraw = true;
    startExist = false;
    endExist = false;
    path = 0;
    openEl.innerHTML = 0;
    closeEl.innerHTML =0;
    pathEl.innerHTML = 0;
}
