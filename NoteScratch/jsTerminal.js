function countingPositivity(array){
    var count = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] >= 0){
            count++;
        }
    }
    console.log(count);
}
countingPositivity([3,2,-1,5,16,8,-4]);