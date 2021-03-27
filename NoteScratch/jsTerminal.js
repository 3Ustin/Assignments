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

// function declaration
function reverse(arr){     //arr = ["a","b","c","d","e"];
    var temp; //temp stands for temparary
    for(var i=0; i<arr.length/2;i++){ //the loop that loops through half of the array.
        temp=arr[i]; //tempararily hold the first index in the array
        arr[i]=arr[arr.length-1-i]; //makes the first index = to the last index
        arr[arr.length-1-i]=temp; //makes the last index = the temparary value (which = the last index)
    }
    console.log(arr); //logs out the newly edited array.
}
reverse(["a","b","c","d","e"]);
//Less Itteravily + computationally complex. Better for computer
function reverse(arr){     //arr = ["a","b","c","d","e"];
    var temp = []; //temp stands for temparary
    for(var i=arr.length-1; i > 0;i--){ //the loop that loops through half of the array.
        temp[i] = arr[i];
    }
    console.log(arr); //logs out the newly edited array.
}
reverse(["a","b","c","d","e"]);


alphabet=["a","b","c","d","e"];


alphabet=["a","b","c","d","e"];
console.log(alphabet.reverse());


alphabet=["a","b","c","d","e"];