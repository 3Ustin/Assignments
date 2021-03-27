function onMouseOver(element){
    element.classList.add("shadow");
}
function onMouseOut(element){
    element.classList.remove("shadow");
}

// EXAMPLE OF AUIDO FILE WORKING!!
// var bgm = new Audio('sound/bgm/[08]FallOfFall~AkimekuTaki.mp3');
// bgm.play();


var clicks = 0;
function onClick(button){
    console.log(clicks);
    console.log(button.attributes);
    button.id
        if(button.classList.contains("button" + clicks)){
            button.classList.remove("button" + clicks);
        }
    clicks++;
}

