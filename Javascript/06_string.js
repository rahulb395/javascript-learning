let name = "My Name is Rahul"

let surname = "Bansal"

let fullname = name + surname;

// console.log(fullname); // Concate using string

console.log(`Type any thing here. ${name} and my surname is ${surname}`); //backticks , stringinterpolation

// Second Method two declare String is as follows:

let myname = new String ("RAHUL");

// console.log(myname[0]);
// console.log(myname[1]);
// console.log(myname[2]);
// console.log(myname[3]);
// console.log(myname[4]);

console.log(myname.length);
console.log(myname.toLowerCase());
console.log(myname.bold());
console.log(myname.charAt(2));
console.log(myname.indexOf("R"));
console.log(myname.substring(0,4));

let mysecname = "   rahul   "
console.log(mysecname);
console.log(mysecname.trim());

let replacework = "www.google.com%%20%%";

console.log(replacework.replace("google", "yahoo"));

console.log(replacework.includes("google1"));






