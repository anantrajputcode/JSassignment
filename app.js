// // let a = 5;
// // let b = 10;

// // // let election = true;
// // // if(age > 18 && election){
// // //     console.log("Individual can give vote.")
// // // }
// // // let result = a++ > 5 && helloasjdlfjsald
// // // ""|| a === 6;

// // console.log("23" == 23);
// // console.log("23" === 23); 


// let rows = 4;
// let columns = 6;

// for (let i = 1; i <= rows; i++) {
//     let pattern = "";

//     for (let j = 1; j <= columns; j++) {
//         pattern += "* ";
//     }

//     console.log(pattern);
// }

// let obj = {
//     name : "Pushkar",
//     bloodRelation : "Brother"
// };

// function greet(){
//     console.log(`his name is ${this.name}`);
// }

// (greet.bind(obj))();

// ==========================================================
//                 JAVASCRIPT ARRAYS
// ==========================================================


// ----------------------------------------------------------
// 1. CREATING AN ARRAY
// ----------------------------------------------------------

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);


// ----------------------------------------------------------
// 2. ARRAY LENGTH
// ----------------------------------------------------------
// .length tells us how many elements are in the array.

console.log(fruits.length);


// ----------------------------------------------------------
// 3. ACCESSING ELEMENTS
// ----------------------------------------------------------
// Array indexing starts from 0.
//
// Index:    0         1         2
//          Apple     Banana    Mango

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango


// ----------------------------------------------------------
// 4. ACCESSING THE LAST ELEMENT
// ----------------------------------------------------------
// The last index is always:
// array.length - 1

console.log(fruits[fruits.length - 1]); // Mango


// ----------------------------------------------------------
// 5. CHANGING AN ELEMENT
// ----------------------------------------------------------
// We can change an element using its index.

fruits[1] = "Orange";

console.log(fruits);
// ["Apple", "Orange", "Mango"]


// ----------------------------------------------------------
// 6. ADDING AN ELEMENT AT THE END
// ----------------------------------------------------------
// push() adds an element to the end of the array.

fruits.push("Grapes");

console.log(fruits);
// ["Apple", "Orange", "Mango", "Grapes"]


// ----------------------------------------------------------
// 7. REMOVING THE LAST ELEMENT
// ----------------------------------------------------------
// pop() removes the last element.

fruits.pop();

console.log(fruits);
// ["Apple", "Orange", "Mango"]


// ----------------------------------------------------------
// 8. ADDING AN ELEMENT AT THE BEGINNING
// ----------------------------------------------------------
// unshift() adds an element at index 0.

fruits.unshift("Pineapple");

console.log(fruits);
// ["Pineapple", "Apple", "Orange", "Mango"]


// ----------------------------------------------------------
// 9. REMOVING THE FIRST ELEMENT
// ----------------------------------------------------------
// shift() removes the first element.

fruits.shift();

console.log(fruits);
// ["Apple", "Orange", "Mango"]


// ----------------------------------------------------------
// 10. FINDING THE INDEX OF AN ELEMENT
// ----------------------------------------------------------
// indexOf() returns the index of the element.
//
// If the element does not exist, it returns -1.

console.log(fruits.indexOf("Orange")); // 1
console.log(fruits.indexOf("Grapes")); // -1


// ----------------------------------------------------------
// 11. CHECKING IF AN ELEMENT EXISTS
// ----------------------------------------------------------
// includes() returns either true or false.

console.log(fruits.includes("Mango"));  // true
console.log(fruits.includes("Grapes")); // false


// ----------------------------------------------------------
// 12. ADDING / REMOVING ELEMENTS USING splice()
// ----------------------------------------------------------
// splice(start, deleteCount)
//
// Example:
// splice(1, 1)
// Start at index 1 and remove 1 element.

fruits.splice(1, 1);

console.log(fruits);
// ["Apple", "Mango"]


// ----------------------------------------------------------
// 13. ADDING ELEMENTS USING splice()
// ----------------------------------------------------------
// splice(start, deleteCount, item)
//
// Here:
// 1  -> start at index 1
// 0  -> remove nothing
// "Orange" -> add Orange

fruits.splice(1, 0, "Orange");

console.log(fruits);
// ["Apple", "Orange", "Mango"]


// ----------------------------------------------------------
// 14. LOOPING THROUGH AN ARRAY
// ----------------------------------------------------------
// A for loop is commonly used to access every element.
//
// i starts at 0
// i < fruits.length keeps the loop inside the array
// i++ moves to the next index

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// ----------------------------------------------------------
// 15. REVERSE AN ARRAY
// ----------------------------------------------------------
// reverse() reverses the order of elements.

fruits.reverse();

console.log(fruits);


// ----------------------------------------------------------
// 16. SORT AN ARRAY
// ----------------------------------------------------------
// sort() sorts elements alphabetically by default.

fruits.sort();

console.log(fruits);


// ----------------------------------------------------------
// QUICK SUMMARY
// ----------------------------------------------------------
//
// length       -> Get number of elements
//
// arr[index]   -> Access an element
//
// arr[index] = -> Change an element
//
// push()       -> Add at the end
//
// pop()        -> Remove from the end
//
// unshift()    -> Add at the beginning
//
// shift()      -> Remove from the beginning
//
// indexOf()    -> Find the index of an element
//
// includes()   -> Check if an element exists
//
// splice()     -> Add/remove elements anywhere
//
// reverse()    -> Reverse the array
//
// sort()       -> Sort the array
//
// ----------------------------------------------------------


// ==========================================================
//                 JAVASCRIPT ARRAYS
// ==========================================================


// ----------------------------------------------------------
// 1. CREATING AN ARRAY
// ----------------------------------------------------------

let fruits = ["Apple", "Banana", "Mango"];

console.log(fruits);


// ----------------------------------------------------------
// 2. ARRAY LENGTH
// ----------------------------------------------------------
// .length tells us how many elements are in the array.

console.log(fruits.length);


// ----------------------------------------------------------
// 3. ACCESSING ELEMENTS
// ----------------------------------------------------------
// Array indexing starts from 0.
//
// Index:    0         1         2
//          Apple     Banana    Mango

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango


// ----------------------------------------------------------
// 4. ACCESSING THE LAST ELEMENT
// ----------------------------------------------------------
// The last index is always:
// array.length - 1

console.log(fruits[fruits.length - 1]); // Mango


// ----------------------------------------------------------
// 5. CHANGING AN ELEMENT
// ----------------------------------------------------------
// We can change an element using its index.

fruits[1] = "Orange";

console.log(fruits);
// ["Apple", "Orange", "Mango"]


// ----------------------------------------------------------
// 6. ADDING AN ELEMENT AT THE END
// ----------------------------------------------------------
// push() adds an element to the end of the array.

fruits.push("Grapes");

console.log(fruits);
// ["Apple", "Orange", "Mango", "Grapes"]


// ----------------------------------------------------------
// 7. REMOVING THE LAST ELEMENT
// ----------------------------------------------------------
// pop() removes the last element.

fruits.pop();

console.log(fruits);
// ["Apple", "Orange", "Mango"]


// ----------------------------------------------------------
// 8. ADDING AN ELEMENT AT THE BEGINNING
// ----------------------------------------------------------
// unshift() adds an element at index 0.

fruits.unshift("Pineapple");

console.log(fruits);
// ["Pineapple", "Apple", "Orange", "Mango"]


// ----------------------------------------------------------
// 9. REMOVING THE FIRST ELEMENT
// ----------------------------------------------------------
// shift() removes the first element.

fruits.shift();

console.log(fruits);
// ["Apple", "Orange", "Mango"]


// ----------------------------------------------------------
// 10. FINDING THE INDEX OF AN ELEMENT
// ----------------------------------------------------------
// indexOf() returns the index of the element.
//
// If the element does not exist, it returns -1.

console.log(fruits.indexOf("Orange")); // 1
console.log(fruits.indexOf("Grapes")); // -1


// ----------------------------------------------------------
// 11. CHECKING IF AN ELEMENT EXISTS
// ----------------------------------------------------------
// includes() returns either true or false.

console.log(fruits.includes("Mango"));  // true
console.log(fruits.includes("Grapes")); // false


// ----------------------------------------------------------
// 12. ADDING / REMOVING ELEMENTS USING splice()
// ----------------------------------------------------------
// splice(start, deleteCount)
//
// Example:
// splice(1, 1)
// Start at index 1 and remove 1 element.

fruits.splice(1, 1);

console.log(fruits);
// ["Apple", "Mango"]


// ----------------------------------------------------------
// 13. ADDING ELEMENTS USING splice()
// ----------------------------------------------------------
// splice(start, deleteCount, item)
//
// Here:
// 1  -> start at index 1
// 0  -> remove nothing
// "Orange" -> add Orange

fruits.splice(1, 0, "Orange");

console.log(fruits);
// ["Apple", "Orange", "Mango"]


// ----------------------------------------------------------
// 14. LOOPING THROUGH AN ARRAY
// ----------------------------------------------------------
// A for loop is commonly used to access every element.
//
// i starts at 0
// i < fruits.length keeps the loop inside the array
// i++ moves to the next index

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// ----------------------------------------------------------
// 15. REVERSE AN ARRAY
// ----------------------------------------------------------
// reverse() reverses the order of elements.

fruits.reverse();

console.log(fruits);


// ----------------------------------------------------------
// 16. SORT AN ARRAY
// ----------------------------------------------------------
// sort() sorts elements alphabetically by default.

fruits.sort();

console.log(fruits);


// ----------------------------------------------------------
// QUICK SUMMARY
// ----------------------------------------------------------
//
// length       -> Get number of elements
//
// arr[index]   -> Access an element
//
// arr[index] = -> Change an element
//
// push()       -> Add at the end
//
// pop()        -> Remove from the end
//
// unshift()    -> Add at the beginning
//
// shift()      -> Remove from the beginning
//
// indexOf()    -> Find the index of an element
//
// includes()   -> Check if an element exists
//
// splice()     -> Add/remove elements anywhere
//
// reverse()    -> Reverse the array
//
// sort()       -> Sort the array
//
// ----------------------------------------------------------
// ==========================================================
//                 map() AND filter()
// ==========================================================


// ==========================================================
// 1. map()
// ==========================================================
//
// DEFINITION:
// map() is an array method that creates a NEW ARRAY by
// applying a function to EVERY element of the original array.
//
// WHAT DOES IT DO?
// It is mainly used to TRANSFORM or MODIFY the values
// of an array.
//
// IMPORTANT:
// - Runs on every element
// - Returns a NEW array
// - Original array is NOT changed
// - Usually the new array has the SAME length
//
// SYNTAX:
//
// array.map(function(element) {
//     return newValue;
// });
//
// ==========================================================


let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(function(num) {
    return num * 2;
});

console.log(doubled);

// Output:
// [2, 4, 6, 8, 10]


// The original array is still unchanged.

console.log(numbers);

// Output:
// [1, 2, 3, 4, 5]



// ----------------------------------------------------------
// Shorter way using arrow function
// ----------------------------------------------------------

let squares = numbers.map(num => num * num);

console.log(squares);

// Output:
// [1, 4, 9, 16, 25]



// ==========================================================
// 2. filter()
// ==========================================================
//
// DEFINITION:
// filter() is an array method that creates a NEW ARRAY
// containing only the elements that satisfy a condition.
//
// WHAT DOES IT DO?
// It is mainly used to SELECT or KEEP specific elements
// from an array.
//
// IMPORTANT:
// - Checks every element
// - Uses a condition
// - If condition is TRUE → element is included
// - If condition is FALSE → element is excluded
// - Returns a NEW array
// - Original array is NOT changed
// - New array can have fewer elements
//
// SYNTAX:
//
// array.filter(function(element) {
//     return condition;
// });
//
// ==========================================================


let numbers2 = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers2.filter(function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);

// Output:
// [2, 4, 6]



// ----------------------------------------------------------
// Shorter way using arrow function
// ----------------------------------------------------------

let greaterThanThree = numbers2.filter(num => num > 3);

console.log(greaterThanThree);

// Output:
// [4, 5, 6]



// ==========================================================
//               MAIN DIFFERENCE
// ==========================================================
//
// map()
// → TRANSFORMS every element
//
// Example:
//
// [1, 2, 3]
//     ↓ map(x => x * 2)
// [2, 4, 6]
//
//
// filter()
// → SELECTS elements based on a condition
//
// Example:
//
// [1, 2, 3, 4]
//     ↓ filter(x => x > 2)
// [3, 4]
//
// ==========================================================


// ==========================================================
//                 EASY WAY TO REMEMBER
// ==========================================================
//
// map()    → "Change every element"
//
// filter() → "Keep only the elements I want"
//
// ==========================================================