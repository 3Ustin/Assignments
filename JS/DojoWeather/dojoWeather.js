function popUp(element){
    alert("We need to Load...");
}
function selectionClicking(){
    var bodyLow = document.querySelectorAll(".bodyLow");
    var bodyHigh = document.querySelectorAll(".bodyHigh");
    console.log("bodyHigh: " + bodyHigh.length +" bodyLow: " + bodyLow.length);
    if(document.getElementById("selection").selectedIndex == "1"){
        for(var i = 0; i < bodyLow.length;i++){
            bodyLow[i].innerText = parseInt((parseInt(bodyLow[i].innerText)*9/5) + 32);
            bodyHigh[i].innerText =  parseInt((parseInt(bodyHigh[i].innerText)*9/5) + 32);

        }
        console.log("here");
        //(32°F − 32) × 5/9 = 0°C
    }
    if(document.getElementById("selection").selectedIndex == "0"){
        for(var i = 0; i < bodyLow.length;i++){
            bodyLow[i].innerText = parseInt((parseInt(bodyLow[i].innerText) - 32) * 5/9);
            bodyHigh[i].innerText =  parseInt((parseInt(bodyHigh[i].innerText) - 32) * 5/9);

        }
        console.log("here");
        //(32°F − 32) × 5/9 = 0°C
    }
}

function acceptQuest(element){
    element.parentElement.remove();
}
