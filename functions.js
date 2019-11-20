function foodShopping(food1, food2) {                             //Give the function a name and add parameters within the parenthesis
    console.log(`Today I will buy some ${food1} and ${food2}`);         //This is the code that will run when the function is called
} 

foodShopping("milk", "fruit");    //This command calls the function. The values passed within the parenthesis are called the arguments


function shoppingList(item, amount, shop) {
    console.log(`Today I will buy ${amount} ${item} at ${shop}`);
    console.log("Today I will buy " + amount + " "  + item + " at " + shop);
}

shoppingList("apples", 10, "Asda"); //The order of the argument values is important, they must match the order of the parameters
shoppingList("oranges"); //If all arguments are not passed to the function, the parameters will be returned as 'undefined'
shoppingList(4);

function greeting() {
    console.log("Hi everyone");
}

greeting();

const basket = function(number1, number2) {    //This assigns an anonymous function to the constant - basket
    return number1 + number2; //Return is needed to make sure the value produced by the function is STORED with the function name
}

const basket2 = function(number1, number2, number3){
    return number1 + number2 + number3;
}

let totalShopping = basket(2, 4) + basket2(1, 1, 2);

console.log(totalShopping);


// Arrow function

const basket1 = (fruit) => {
    console.log("I have some " + fruit + " in my basket");
}

basket1("apples");

// If function has only one parameter you can omit the parenthesis. If it has only one line of code to run, you can omit the curly brackets

const basket1 = fruit => console.log("I have some " + fruit + " in my basket");

basket1("apples");

// Activity 1

let orderCount = 0;
const takeOrder = (topping1, topping2) => {
    orderCount++;
    console.log(`Order number ${orderCount} is for a pizza with ${topping1} and ${topping2}`);
} 

takeOrder("pineapple", "pepperoni");
takeOrder("olives", "cheese");
takeOrder("meatballs", "peppers");

// Activity 2

let custPin = 1234
let balance = 10000

const transaction = (pinInput, withdrawalAmount) => {
    if  ((pinInput == custPin) && (withdrawalAmount <= balance)){
        console.log(`You have withdrawn £${withdrawalAmount}`);
    } else if (pinInput != custPin){
        console.log(`You have entered an incorrect PIN`);
    } else if (withdrawalAmount > balance){
        console.log(`You do not have the necessary funds to withdraw that amount`);
    }
}

transaction(1234, 19999);