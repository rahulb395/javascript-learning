let mydate = new Date()

// console.log(mydate);
// console.log(mydate.getDate());
// console.log(mydate.getMinutes());
// console.log(mydate.toLocaleString());
// console.log(mydate.toString());
// console.log(typeof mydate);


// let createdate = new Date(2036, 1, 10)

// console.log(createdate.toDateString());

// let createdatemin = new Date(2036, 1, 10, 5, 20)

// console.log(createdatemin.toLocaleString());

let newdate = new Date();

console.log(newdate.toLocaleString("default", {
 weekday: "short"
}));