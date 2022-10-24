//JavaScript Tasks - Meta JS Course


//Task 1 - Declaring variables
var petDog = 'Rex';
var petCat = 'Pepper';

var petDog = 'Rex'; 
console.log(petDog);

console.log("My pet cat's name is: " + petCat);

var catSound = "purr";
var dogSound = "woof";

console.log(petDog, "says", dogSound);
console.log(petCat, "says", catSound);

catSound = "meow";

console.log(petCat, "now says", catSound);


//Task 2 - Advanced use of operators

var score = 8;
console.log("Mid-level skills:", score > 0 && score < 10)

var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining == 0 || energy == 0);

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

console.log(5 + 10); // 15

var now = "Now in ";
var three = 3;
var d = "D!"
console.log(now + three + d); // "Now in 3D!"

var counter = 0;
counter += 5;
counter += 3;
console.log(counter); // 8


//Task 3 - Practice conditional statements

var age = 10;

if(age >= 65){
    console.log("You get your pension");
}else if(age < 65 && age >=18){
    console.log("Each month you get a salary");
}else if(age < 18){
    console.log("You get an allowance");
}else{
    console.log("The value of the age variable is not numerical");
}


var day = "Sunday";

switch(day){

    case "Monday":
        console.log("Do something 1");
        break;    
    case "Tuesday":
        console.log("Do something 2");
        break;
    case "Wednesday":
        console.log("Do something 3");
        break;
    case "Thursday":
        console.log("Do something 4");
        break;
    case "Friday":
       console.log("Do something 5");
        break;
    case "Saturday":
        console.log("Do something 6");
        break;
    case "Sunday":
        console.log("Do something 7"); 
    default:
        console.log("There is no such day");    
}

    //Ternary Operators
    function getFee(isMember) {
        return (isMember ? '$2.00' : '$10.00');
    }
    
    console.log(getFee(true)); // expected output: "$2.00"      
    console.log(getFee(false)); // expected output: "$10.00"      
    console.log(getFee(null)); // expected output: "$10.00"

    //Falsy & Truthy

    //In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. 
    //All values are truthy unless they are defined as falsy. 
    //That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN
    
    //Truthy
    //Examples
    if (true)
    if ({})
    if ([])
    if (42)
    if ("0")
    if ("false")
    if (new Date())
    if (-42)
    if (12n)
    if (3.14)
    if (-3.14)
    if (Infinity)
    if (-Infinity)
    //The logical AND operator, &&
    // true && "dog" // returns "dog"
    // [] && "dog" // returns "dog"

    //Falsy
    //false	        -> The keyword false.
    //0		        -> The Number zero (so, also 0.0, etc., and 0x0).
    //-0	        -> The Number negative zero (so, also -0.0, etc., and -0x0).
    //0n	        -> The BigInt zero (so, also 0x0n). Note that there is no BigInt negative zero — the negation of 0n is 0n.
    //"", '', ``	-> Empty string value.
    //null	        -> null — the absence of any value.
    //undefined		-> undefined — the primitive value.
    //NaN	     	-> NaN — not a number.
    //document.all	-> 	Objects are falsy if and only if they have the [[IsHTMLDDA]] internal slot. That slot only exists in document.all and cannot be set using JavaScript.


//Task 4 - Repetitive tasks with loops

    for(var i = 1; i < 6; i++){
        console.log(i);
    };
    console.log("Counting completed!");
    

    for(var i = 5; i > 0; i--){
        console.log(i);
    };
    console.log("Counting completed!");
    

    var i = 1;
    while(i < 6){
        console.log(i);
         i++;
    };
    console.log("Counting completed!");
    

    i = 5
    while(i > 0){
        console.log(i);
         i--;
    };
    console.log("Counting completed!");


    var year = 2018;
    while(year < 2022){
        console.log(year);
        year++;
    };


//Task 5 - Working with conditionals and loops

    for(var i = 1; 1 <= 10; i++){

        if(i==1) { 
            console.log("Gold medal");
        }else if(i==2) {
            console.log("Silver medal");
        }else if(i==3) {
            console.log("Bronze medal");
        }else {
            console.log(i);
        }
    }

    for (var i = 1; i <= 10; i++) {
        switch(i) {
            case 1:
                console.log("Gold medal");
                break;
            case 2:
                console.log("Silver medal");
                break;
            case 3:
                console.log("Bronze medal");
                break;
            default:
                console.log(i);
        }
    }
    

//Task 6 - Working with conditionals and loops

     function letterFinder(word, match) {

        for(var i = 0; i < word.length; i++) {

            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }

        }
    }
    
    letterFinder("test", "t")


//Task 7 - Sample Objects

    var user = {};  // empty

    var assistantManager = {
        rangeTilesPerTurn: 3,
        socialSkills: 30,
        streetSmarts: 30,
        health: 40,
        specialAbility: "young and ambitious",
        greeting: "Let's make some money"
    }

    var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
    }

    console.log(table);  //{legs: 3, color: 'brown', priceUSD: 100}
    console.log(table.color); // 'brown'

    var house = {
        rooms: 3,
        color: "brown",
        priceUSD: 10000,
    }

    var house2 = {};
    house2.rooms = 4;
    house2.color = "pink";
    house2.priceUSD = 12345;

    console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000}
    house.windows = 10;
    console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 10}
    house.windows = 11;
    console.log(house); // {rooms: 3, color: "brown", priceUSD: 10000, windows: 11}

    
    //Object literals and the brackets notation

    var house3 = {};
    house3["rooms"] = 4;
    house3['color']= "pink";
    house3["priceUSD"] = 12345;
    console.log(house3); // {rooms: 4, color: 'pink', priceUSD: 12345}

    var car = {};
    car.color = "red";
    car["color"] = "green";
    car["speed"] = 200;
    car.speed = 100;
    console.log(car); // {color: "green", speed: 100}
    car["number of doors"] = 4;
    console.log(car); // {color: 'green', speed: 100, number of doors: 5}
    console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 5}

    var arrOfKeys = ['speed', 'altitude', 'color'];
    var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
    }
    for (var i = 0; i < arrOfKeys.length; i++) {
        console.log(drone[arrOfKeys[i]])
    }
    //100
    //200
    //red

//Task 8 - Arrays 
    
    var fruits = [];
    fruits.push("apple"); // ['apple']
    fruits.push('pear'); // ['apple', 'pear']

    fruits.pop();
    console.log(fruits); // ['apple']

    //function that takes all its arguments and pushes them into an array, like this
    function arrayBuilder(one, two, three) {
        var arr = [];
        arr.push(one);
        arr.push(two);
        arr.push(three);
        console.log(arr);
    }
    arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']

    //With return
    function arrayBuilder(one, two, three) {
        var arr = [];
        arr.push(one);
        arr.push(two);
        arr.push(three);
        return arr;
    }
    var simpleArr = arrayBuilder('apple', 'pear', 'plum');
    console.log(simpleArr); // ['apple','pear','plum']


    //Arrays Task
    var clothes = [];
    clothes.push('gray t-shirt'); // 1st item of clothing
    clothes.push('blue t-shirt'); // 2nd item of clothing
    clothes.push('yellow t-shirt'); // 3rd item of clothing
    clothes.push('slippers'); // 4th item of clothing
    clothes.push('old jeans'); // 5th item of clothing
    clothes.pop();
    clothes.push('green scarf');
    console.log(clothes[2]); //yellow t-shirt
    
    var favCar = {};
    favCar.color = "red";
    favCar.convertible = true;
    console.log(favCar); //{ color: 'red', convertible: true }


//Task 9 - Math Operations & random

    //Random
    Math.random(); // Generate a decimal number between 0 and 0.99

    //Number constants
    Math.PI //The PI number
    Math.E //The Euler's constant
    Math.LN2 //The natural logarithm of 2

    //Rounding methods
    Math.ceil() // rounds up to the closest integer 
    Math.floor() // rounds down to the closest integer 
    Math.round() // rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 
    Math.trunc() // trims the decimal, leaving only the integer

    //Arithmetic and calculus methods
    Math.pow(2,3) // calculates the number 2 to the power of 3, the result is 8 
    Math.sqrt(16) // calculates the square root of 16, the result is 4 
    Math.cbrt(8) // finds the cube root of 8, the result is 2 
    Math.abs(-10) // returns the absolute value, the result is 10 

    //Logarithmic methods
    Math.log() 
    Math.log2() 
    Math.log10()

    //Return the minimum and maximum values of all the inputs
    Math.min(9,8,7) //returns 7
    Math.max(9,8,7) //returns 9

    //Trigonometric methods
    Math.sin()
    Math.cos()
    Math.tan() //etc.


//Task 10 - Strings

    var greet = "Hello, ";
    var place = "World"

    greet.length; // 7
    greet.charAt(0); // 'H'
    greet.toUpperCase(); // "HELLO, "
    greet.toLowerCase(); // "hello, "

    "Wo".concat("rl").concat("d"); // 'World'

    "ho-ho-ho".indexOf('h'); // 0
    "ho-ho-ho".indexOf('o'); // 1
    "ho-ho-ho".indexOf('-'); // 2

    //The split method chops up the string into an array of sub-strings
    "ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']

    //Some of the String methods
    charAt() 
    concat() 
    indexOf() 
    lastIndexOf() 
    split() 
    toUpperCase() 
    toLowerCase()
    

// Task 11 - Predefined Functions

    eval() // The eval() method evaluates JavaScript code represented as a string.
    isFinite() // The global isFinite() function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.
    isNaN() // The isNaN() function determines whether a value is NaN or not. Note: coercion inside the isNaN function has interesting rules; you may alternatively want to use Number.isNaN() to determine if the value is Not-A-Number.
    parseFloat() // The parseFloat() function parses a string argument and returns a floating point number.
    parseInt() // The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
    decodeURI() // The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI or by a similar routine.
    decodeURIComponent() // The decodeURIComponent() method decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.
    encodeURI() // The encodeURI() method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).
    encodeURIComponent() // The encodeURIComponent() method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).
    escape() // The deprecated escape() method computes a new string in which certain characters have been replaced by a hexadecimal escape sequence. Use encodeURI or encodeURIComponent instead.
    unescape() // The deprecated unescape() method computes a new string in which hexadecimal escape sequences are replaced with the character that it represents. The escape sequences might be introduced by a function like escape. Because unescape() is deprecated, use decodeURI() or decodeURIComponent instead.

    // typeOf(); returns type of element
    var test = typeof(true); // boolean


//Task 12 - Objects / Objects Methods / Constructors

    var car = {};
    car.mileage = 98765;
    car.color = "red";
    console.log(car); //{ mileage: 98765, color: 'red' }
    car.turnTheKey = function() {
        console.log("The engine is running")
    }
    console.log(car); //{ mileage: 98765, color: 'red', turnTheKey: [Function (anonymous)] }
    car.lightsOn = function() {
        console.log("The lights are on.")
    }
    console.log(car); // {mileage: 98765, color: 'red', turnTheKey: [Function (anonymous)], lightsOn: [Function (anonymous)] }
    car.turnTheKey(); // The engine is running
    car.lightsOn(); // The lights are on


    const person = {
        name: ["Bob", "Smith"],
        age: 32,
        bio() {
          console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
        },
        introduceSelf() {
          console.log(`Hi! I'm ${this.name[0]}.`);
        },
      };

      //Constructor
      function createPerson(name) {
        const obj = {};
        obj.name = name;
        obj.introduceSelf = function () {
          console.log(`Hi! I'm ${this.name}.`);
        };
        return obj;
      }


//Task 13 - Error prevention

    function addTwoNums(a,b) {
        console.log(a + b)
    }
    addTwoNums(5, "5") // "55"

    function addTwoNums(a,b) {
        try {
            console.log(a + b)
        } catch(err) {
            console.log(err)
        }
    }

    function addTwoNums(a,b) {
        try {
            if(typeof(a) != 'number') {
                throw new ReferenceError('the first argument is not a number')
            } else if (typeof(b) != 'number') {
                throw new ReferenceError('the second argument is not a number')
            } else {
                console.log(a + b)
            }
        } catch(err) {
            console.log("Error!", err)
        }
    }
    addTwoNums(5, "5")
    console.log("It still works")


//Task 14 - Defensive programming

    //Defensive programming is all about assuming that all the arguments a function will receive are of the wrong type,  the wrong value or both.

    function letterFinder(word, match) {
       
        var condition1 = typeof(word) == 'string' && word.length >= 2;
        var condition2 = typeof(match) == 'string' && match.length == 1;
      
        if(condition1 && condition2) {
            for(var i = 0; i < word.length; i++) {
                if(word[i] == match) {
                    console.log('Found the', match, 'at', i)
                } else {
                    console.log('---No match found at', i)
                }
            }
        } else {
            console.log("Please pass correct arguments to the function")
        }

    }

    letterFinder([],[])
    letterFinder("cat","c")


//Task 15 - Looping Through Object

    var clothingItem = {
        price: 50,
        color: 'beige',
        material: 'cotton',
        season: 'autumn'
    }

    for( key of Object.keys(clothingItem) ) {
        console.log(keys, ":", clothingItem[key])
    }


//Task 16 - Web page content update

    let answer = prompt('What is your name?');
    if (typeof(answer) === 'string') {
        var h1 = document.createElement('h1')
        h1.innerText = answer;
        document.body.innerText = '';
        document.body.appendChild(h1);
    }

    var h1 = document.createElement('h1')
    h1.innerText = "Type into the input to make this text change"

    var input = document.createElement('input')
    input.setAttribute('type', 'text')

    document.body.innerText = '';
    document.body.appendChild(h1);
    document.body.appendChild(input);

    input.addEventListener('change', function() {
        h1.innerText = input.value
    })


//Task 17 - Capture Data

    var h1 = document.querySelector('h1')

    var arr = [
        'Example Domain',
        'First Click',
        'Second Click',
        'Third Click'
    ]

    function handleClicks() {
        switch(h1.innerText) {
            case arr[0]:
                h1.innerText = arr[1]
                break
            case arr[1]:
                h1.innerText = arr[2]
                break
            case arr[2]:
                h1.innerText = arr[3]
                break
            default:
                h1.innerText = arr[0]
        }
    }
        
    h1.addEventListener('click', handleClicks);
