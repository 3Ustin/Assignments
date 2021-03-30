function popUp(element){
    alert("We need to Load...");
}
function selectionClicking(){
    var bodyHLValue = document.querySelectorAll(".bodyHLValue");
    //
    //console.log("bodyHLValueLength: " + bodyHLValue.length +" bodyHLValue: " + bodyHLValue);
    if(document.getElementById("selection").selectedIndex == "0"){
        for(var i = 0; i < bodyHLValue.length;i++){
            bodyHLValue[i].innerText =  parseInt((parseInt(bodyHLValue[i].innerText) - 32) * 5/9) + "°";
        }
        console.log("here");
        //(32°F − 32) × 5/9 = 0°C
    }
    if(document.getElementById("selection").selectedIndex == "1"){
        for(var i = 0; i < bodyHLValue.length;i++){
            bodyHLValue[i].innerText = parseInt((parseInt(bodyHLValue[i].innerText)*9/5) + 32) + "°";
        }
        console.log("here");
        //(32°F − 32) × 5/9 = 0°C
    }
}
// Go in and use .map() is a function for arrays
function acceptQuest(element){
    element.parentElement.remove();
}
