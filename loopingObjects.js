// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (let element of dairy) {
        console.log(element);
    }
}
// Task 2
const animal = {
canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
    
    for (let obj of Object.keys(bird)) {
        console.log(obj+": "+bird[obj])
    }

}
// Task 3

function animalCan() {
    
    for (let i in bird) { 
        console.log(i+": "+bird[i])
    } 

}


// for-of loop doesn't works for Object data types. The for-of loop must use an iterable such as arrays.