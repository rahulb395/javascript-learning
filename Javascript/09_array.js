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
