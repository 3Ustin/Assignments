
function acceptFriend(thisElement){
    //removes friend from requests
    //  and subtracts from num of rqsts
    //  and stores parent for future use.
    document.querySelector(".friendrqstHeader").
    firstElementChild.textContent -= 1;
    var friend = thisElement.parentElement;
    thisElement.parentElement.remove();
    
    //adds 1 to friends List num
    document.querySelector(".friendListHeader").
    firstElementChild.textContent =
    parseInt(document.querySelector(".friendListHeader").
    firstElementChild.textContent) + 1;
    
    //getting old elements to copy to new elements
    var pic = thisElement.parentElement.querySelector(".pic");
    console.log(pic);
    var pBody = thisElement.parentElement.querySelector(".friendrqstBodyP");
    console.log(pBody);

    //creating new elements
    var image = document.createElement("img");
    var words = document.createElement("H3");

    image.src = pic.src;
    words.innerHTML = pBody.innerText;
    //To assign the css classes to new element.
    image.className = pic.className;
    words.className = pBody.className;
    //tests
    console.log(image);
    console.log(words);

    document.getElementById("friendListBody").appendChild(image);
    document.getElementById("friendListBody").appendChild(words);
}

function editButton(element){
    element.id = "profileEdit";
}
function editButtonOut(element){
    element.id = "";
}
//THIS IS A FUTURE TEST
// function buttonClicking(element){
//     var body = element.parentElement;
//     var userData = document.createElement("FORM");
//     userData.
//     console.log(userData);
//     body.appendChild(userData);
// }

// This is the function for removing declined friends 
//      and subtracting friend requests.
function declineFriend(thisElement){
    //reduces num of friendRequests  by 1.
    document.querySelector(".friendrqstHeader").
    firstElementChild.textContent -= 1;
    thisElement.parentElement.remove();
}

