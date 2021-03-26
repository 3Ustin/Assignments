//High Pass Filter - build an array starting at cutoff from the given array.
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=cutoff;i<arr.length;i++){
        filteredArr.push(arr[i]);
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//Evens or Odds - given arr figure out what summed values are greater, even numbers or odd numbers.
function evensOfOdds(arr) {
    var totalOdds = 0;
    var totalEvens = 0;
    for(var i = 0;i<arr.length;i++){
        if(arr[i]%2==0){totalEvens+=arr[i]}
        else{totalOdds+=arr[i]}
    }
    if(totalEvens > totalOdds){return "Evens are Larger."}
    else if(totalEvens < totalOdds){return "Evens are Smaller."}
    else{return "Evens are Equal to Odds."}
}
var result = evensOfOdds([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back "evens are larger"

//Better than average - given arr return how many are larger than avg.
function betterThanAverage(arr) {
    var sum = 0;
    for(var i =0;i<arr.length;i++){sum+=arr[i]}
    var count = 0
    for(var i =0;i<arr.length;i++){
        if(arr[i]>sum/arr.length){count+=1}
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//Fibonacci Array - function given n gives Fib numbers up to n.
function fibonacciArray(n) {
    var fibArr = [0, 1];
    if(n<=1){return "must be greater." }
    for(var i=2;i<n;i++){fibArr.push(fibArr[i-2] + fibArr[i-1])}
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

