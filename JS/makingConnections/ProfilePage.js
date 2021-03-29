
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
    
    //create children
    var image = document.createElement("img");
    

    var paragraph = document.createElement("P");
    paragraph.innerHTML = "yellow belly";
    console.log(paragraph);
    document.getElementById("friendListBody").
    appendChild(paragraph);


}
// This is the function for removing declined friends 
//      and subtracting friend requests.
function declineFriend(thisElement){
    //reduces num of friendRequests  by 1.
    document.querySelector(".friendrqstHeader").
    firstElementChild.textContent -= 1;
    thisElement.parentElement.remove();
}

