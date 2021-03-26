//Print odds 1-20
var i =0
while(i<=20){
    if(i%2 != 0){console.log(i);}
    i++;
}
//Print the sequence 4,2.5,1,-.05,-2
var arr = [4,2.5,1,-.05,-2];
for(var i = 0; i<arr.length;i++){
    console.log(arr[i]);
}
//Sum 0 - 100 then print
var sum = 0;
for(var i =0; i<=100; i++){
    sum += i;
}
console.log(sum);
//Factorial 1 - n;
var product = 1;
var n = 100;
var i = 1;
while(product < 1e9 && i <= n){
    product *= i;
    i++;
}
console.log(product);