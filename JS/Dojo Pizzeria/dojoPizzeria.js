var pizza = {};
var sauce = ["maranara", "alfraido", "BBQ", "Franks"];
var cheese = ["jack", "chedder"];
var vegToppings = ["mushrooms", "peppers", "onions", "spinach", "pinapple"];
var meatToppings = ["bacon", "burger", "steak", "ham", "octopus"];
var doughType = ["deep dish", "traditional", "stuffed"];

function pizzaOven(sauce,cheese,vegToppings,meatToppings,doughType){
    var pizza={};
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.vegToppings = vegToppings;
    pizza.meatToppings = meatToppings;
    pizza.doughType = doughType;
    return pizza;
}

pizza = pizzaOven(sauce[0],cheese[1],vegToppings[3],meatToppings[4],doughType[2]);
console.log(pizza);
pizza = pizzaOven(sauce[2],cheese,vegToppings[0] + "," + vegToppings[2],meatToppings[4] + "," + meatToppings[2],doughType[0]);
console.log(pizza);


//Creating a random Pizza out of choices.


function randomPizzaOven(sauce,cheese,vegToppings,meatToppings,doughType){
    var pizza={};
    pizza.sauce = sauce[Math.floor(Math.random()*(sauce.length))];
    pizza.cheese = cheese[Math.ceil(Math.random()*(cheese.length-1))];
    pizza.vegToppings = vegToppings[Math.round(Math.random()*(vegToppings.length-1))];
    pizza.meatToppings = meatToppings[Math.round(Math.random()*(meatToppings.length-1))];
    pizza.doughType = doughType[Math.round(Math.random()*(doughType.length-1))];
    return pizza;
}

pizza = randomPizzaOven(sauce,cheese,vegToppings,meatToppings,doughType);
console.log(pizza);