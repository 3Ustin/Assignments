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


function dSix(){
    return Math.ceil(Math.random()*6);
}
console.log(dSix());


function eightBall(){
    var random = Math.ceil(Math.random()*20) - 1;
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    return lifesAnswers[random];
}
console.log(eightBall());


function addUp(three){
    three.textContent = 
    parseInt(three.textContent) + 1;
}

var clicks = 0;
var style = "";
function imageSmaller(element){
    clicks++;
    style = (900 - clicks*100) + "px";
    element.style.width = style;
}

var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];
//all objects that are divisiable by three
for(var i = 0; i<pokémon.length;i++){
    if(pokémon[i].id % 3 == 0){
        console.log(pokémon[i]);
    }
}
// all objects that have more than one type
for(var i = 0; i<pokémon.length;i++){
    if(pokémon[i].types.length > 1){
        console.log(pokémon[i]);
    }
}
// all names only have one type and its poison
for(var i = 0; i<pokémon.length;i++){
    if(pokémon[i].types.length == 1 && pokémon[i].types[0] == "poison"){
        console.log(pokémon[i].name);
    }
}

// all first types of of pokeman whos second type is flying
for(var i = 0; i<pokémon.length;i++){
    if(pokémon[i].types.length > 1 && pokémon[i].types[1] == "flying"){
        console.log(pokémon[i].types[0]);
    }
}











































//the reverse of the names of pokemon whose only type is poison.
for(var i = 0; i < pokémon.length;i++){
    if(pokémon[i].types.length == 2 && pokémon[i].types[1] == "poison"){
        console.log(pokémon[i].name);
    }
}
function reverseString(string){
    var stringStuff;
    for(var i=0; i<string.length; i++){
        stringStuff
    }
}
