let person = ["rahul", "bansal", "bhavyansh", "mehul"]

console.log(person[2]);

//let mycar = new Array ("maruti", "zen", "helipad")

//console.log(mycar[1]);

// Array Method //

let myarray = new Array ("rahul", "bhavyansh", "mehul", "hardik");

myarray.push("neha")

console.log(myarray);

let myarray1 = new Array (1,2,3,4,5,6);

// myarray1.push(5);
// myarray1.push(6);
// myarray1.push(7); // this will add the digit of last value in array 

// myarray1.pop();
// myarray1.pop(); // this will remove the digit of last value in array 

// myarray1.unshift(9); // this will add the digit in first order
// myarray1.shift(); // this will remove the digit from the first order

//console.log(myarray1.includes(1));

//console.log(myarray1.indexOf(3));

let checkarray = myarray1.join(); // now the result is showing as in string format and not a array format

console.log(typeof checkarray);

//console.log(myarray1.push(15));

let ramsurname = new Array ("bansal", "kansal", "gupta", "sharma")

let slicename = ramsurname.slice(1,3);

console.log(slicename);

let ramsurname1 = new Array ("bansal", "kansal", "gupta", "sharma")

let splicename = ramsurname1.splice(1,3);

console.log(splicename);

let newname = new Array ("rahul", "prashant", "divya", "mousam")

console.log(newname.slice(2,4));

let crickters = new Array ("Sachine", "Dhoni", "Virat")

let bollywoordheros = new Array ("SRK", "Ranveer", "Saif")

// let pushvalue = crickters.concat(bollywoordheros);

// console.log(pushvalue);

// crickters.push(bollywoordheros)

// console.log(crickters);

let spreadvalues = [...crickters, ...bollywoordheros]

console.log(spreadvalues);

let joinarray = [1,2,3,4, 5,6,7, [8,9,10] ]

let joinrealarray = joinarray.flat(Infinity)

console.log(joinrealarray);

console.log(Array.isArray("Rahul")); // here "isArray" means we are asking that given value is Array or Not 
console.log(Array.from("Rahul")); // here "from" means that we are converting value into an Array 

let score1 = 1
let score2 = 2
let score3 = 3

let scoreconvert = Array.of(score1,score2,score3)
//let scoreconvert = Array.of("score1","score2","score3")

console.log(scoreconvert);








