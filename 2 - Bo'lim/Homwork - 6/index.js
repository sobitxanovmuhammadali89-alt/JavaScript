// push()
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);

let numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers);

// pop()
fruits = ["apple", "banana", "orange"];
fruits.pop();
console.log(fruits);

numbers = [10, 20, 30, 40];
numbers.pop();
console.log(numbers);

// unshift()
fruits = ["banana", "orange"];
fruits.unshift("apple");
console.log(fruits);

numbers = [3, 4, 5];
numbers.unshift(1, 2);
console.log(numbers);

// shift()
fruits = ["apple", "banana", "orange"];
fruits.shift();
console.log(fruits);

numbers = [10, 20, 30];
numbers.shift();
console.log(numbers);

// delete
fruits = ["apple", "banana", "orange"];
delete fruits[1];
console.log(fruits);

numbers = [10, 20, 30];
delete numbers[0];
console.log(numbers);

// length
fruits = ["apple", "banana", "orange"];
console.log(fruits.length);

numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);

// at()
fruits = ["apple", "banana", "orange"];
console.log(fruits.at(1));

numbers = [10, 20, 30, 40];
console.log(numbers.at(-1));

// indexOf()
fruits = ["apple", "banana", "orange"];
console.log(fruits.indexOf("banana"));

numbers = [10, 20, 30, 40];
console.log(numbers.indexOf(30));

// lastIndexOf()
fruits = ["apple", "banana", "apple"];
console.log(fruits.lastIndexOf("apple"));

numbers = [1, 2, 3, 2, 4];
console.log(numbers.lastIndexOf(2));

// includes()
fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana"));

numbers = [10, 20, 30];
console.log(numbers.includes(50));

// slice()
fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits.slice(1, 3));

numbers = [10, 20, 30, 40, 50];
console.log(numbers.slice(2));

// splice()
fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1);
console.log(fruits);

numbers = [10, 20, 30];
numbers.splice(1, 0, 15);
console.log(numbers);

// reverse()
fruits = ["apple", "banana", "orange"];
fruits.reverse();
console.log(fruits);

numbers = [1, 2, 3, 4];
numbers.reverse();
console.log(numbers);

// concat()
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log(arr1.concat(arr2));

let fruits1 = ["apple"];
let fruits2 = ["banana", "orange"];
console.log(fruits1.concat(fruits2));