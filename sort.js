// let num = [5, 1];

// Using sort method
// num.sort();
// console.log(num); // [1, 5]

// similarly taking more than 2 numbers
// let num2 = [5, 1, 3, 2, 4];

// num2 = num2.sort();
// console.log(num2); // [1, 2, 3, 4, 5]


// let arr = [61, 8, 20, 5, 1, 11, 9, 3];

// // sort method using arrow function
// arr.sort((a, b) => a - b);

// // reverse the sorted array
// arr.reverse();

// // Output
// console.log(arr);

// let arr = [61, 8, 20, 5, 1, 11, 9, 3];

// sort method using arrow function
// arr.sort((a, b) => b - a);

// Output
// console.log(arr);


// let lang = ["HTML", "CSS", "Javascript", "SQL", "Python"];

// applying sort method
// lang.sort();
// console.log(lang);


let lang = ["HTML", "CSS", "Javascript", "SQL", "Python"];

// reverse sort
function compare(a, b) {
  return b - a;
}
lang.sort(compare);
console.log(lang);

