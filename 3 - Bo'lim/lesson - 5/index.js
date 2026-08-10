// let users = [
// { name: "Ali", age: 25 },
// { name: "Vali", age: 17 },
// { name: "Sami", age: 20 },
// { name: "John", age: 30 }
// ];
// let result = users.filter(user => user.age > 18 && user.name.toLowerCase().includes("a"));
// console.log(result);

// 1, 50 gacha bolgan sonlarni faqat toq sonlarning chiqrish kere

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let yigindi = arr.reduce((value, index, a) => {
    
// });

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.reduce((acc, num) => {
//   return num % 2 !== 0 ? acc * num : acc;
// }, 1);
// console.log(result); 


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = arr.reduce((acc, sum) => !(sum % 2) || !(sum % 3) ?acc + sum : acc, 0)
console.log(sum);

