// Two type of data types are there:

// Primitive

// BONUS

// B = BOLLEAN
// B = BigInt
// O = OBJECT
// N = NULL
// N = NUMBER
// U = UNDEFINED
// S = String
// S = SYMBOL

// NON PRIMITIVE

//FUNCTION
//OBJECT
//ARRAY

let person = ["rahul", "neha", "mohan", "komal"]
let guys = person[0];
console.log(guys); //ARRAYS


let vechile = {

    car: 2,
    scooty: "sorata",
    cycle: "leapecyle"

}

console.log(vechile.car); // OBJECT

let score = myfunction (3,4);

function myfunction (a, b) {
    console.log(a + b);
} //FUCNTION

//console.log(score);


let person1 = "Rahul";

let person2 = "Hitesh"

let person3 = person1;

person1 = "Mitesh";

console.log(person1);
console.log(person3);

let userone = {

    flata: 1,
    flatb: 2,
    flatc: 3

}

//console.log(userone.flata);


let usertwo = userone  

usertwo.flata = 4;

console.log(usertwo.flata);
console.log(userone.flata);

