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