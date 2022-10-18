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
    