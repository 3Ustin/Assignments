var count0 = document.getElementById("contentCol2FeedLikeCount0").textContent;
var count1 = document.getElementById("contentCol2FeedLikeCount1").textContent;
var count2 = document.getElementById("contentCol2FeedLikeCount2").textContent;
function onClick0(element){
    console.log(count0);
    count0++;
    document.getElementById("contentCol2FeedLikeCount0").textContent = count0;
}
function onClick1(element){
    console.log(count1);
    count1++;
    document.getElementById("contentCol2FeedLikeCount1").textContent = count1;
}
function onClick2(element){
    console.log(count2);
    count2++;
    document.getElementById("contentCol2FeedLikeCount2").textContent = count2;
}