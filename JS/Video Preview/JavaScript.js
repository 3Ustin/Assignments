//Mouse Over the video plays it.
function onMouseOver(sourceVid){
    sourceVid.classList.add("video");
    sourceVid.play();
}

//Mouse Over the video pause it.
function onMouseOut(sourceVid){
    var x = sourceVid.classList.remove("video");
    sourceVid.pause();
}
