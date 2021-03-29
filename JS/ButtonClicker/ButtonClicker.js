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
var click0 = 0;
var click1 = 0;
var click2 = 0;
function onClick(button){
    console.log(clicks);

    if(button.classList.contains("button" + clicks)){
        button.classList.remove("button" + clicks);
    }
    if(button.id == "button0"){
        button.innerText = click0;
        click0++; 
        console.log(button.innerText);
        button.innerText = click0 + 1;
    }
    if(button.id == "button1"){
        button.innerText = click1;
        click1++; 
        console.log(button.innerText);
        button.innerText = click1;
    }
    if(button.id == "button2"){
        button.innerText = click2;
        click2++; 
        console.log(button.innerText);
        button.innerText = click2;
    }
    clicks++;
}

