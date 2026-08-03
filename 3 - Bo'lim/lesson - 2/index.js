// let arr = [1, 2, 3, 4, 5];
// // [2, 3, 4, 8, 10]
// let newArr = arr.map((value, index, a) => value * 2)
// console.log(newArr);

// 2 === 1 shartmas
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // [1, 3, 5, 7, 9]
// let newArr = arr.filter((value, index, a) => value % 2 === 1)
// console.log(newArr);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // [1, 3, 5, 7, 9]
// let newArr = arr.filter((value, index, a) => value % 2)
// console.log(newArr);

// let arr = ["Olma", "Nok", "Uzum", "Shaftoli"];
// let sum = 0;
// arr.forEach((value, index, a) => (sum += value.length));
// console.log(sum);

// let arr = ["Olma", "Nok", "Uzum", "Shaftoli"];
// // ["Olma", "Nok", "Uzum"]
// let newArr = arr.filter((value, index, a) => {
//     return value.length <= 4;
// });
// console.log(newArr);

// let arr = ["Olma", "Nok", "Uzum", "Shaftoli"];
// // ["Olma 4", "Nok 3", "Uzum 4", "Shaftoli 8"];
// let newArr = arr.map((value, index, a) => {
//     return value + " " + value.length;
// });
// console.log(newArr);

// let arr = ["Olma", "Nok", "Uzum", "Shaftoli"];
// // ["*lma", "*ok", "*zum", "*haftoli"];
// let newArr = arr.map((value, index, a) => {
//     return `*${value.slice(1)}`;
// });
// console.log(newArr);

// =================================================
// =================================================
// =================================================
// =================================================


// find() - array ichidan qiymat qidiradi, topsa qiymatni qaytaradi
// topa olmasa undefined qaytaradi. Agar qiymat 1 tada k'op bo' lsa faqat 
// 1 - topgan qiymatni qaytaradi va shu yerda o'z ishini yakunlaydi.
// let arr = ["Olma", "Uzum", "Nok", "Olcha", "Gilos", "Nok"];

// let newValue = arr.find((value, index, a) => {
//     if (value === "Nok") return value;
// });
// console.log(newValue);

// let arr = ["Olma", "Uzum", "Nok", "Olcha", "Gilos", "Nok"];

// let newValue = arr.find((value, index, a) => value === "Nok");
// console.log(newValue);

// findIndex()
// let arr = ["Olma", "Uzum", "Nok", "Olcha", "Gilos", "Nok"];
// let i = arr.findIndex((value, index, a) => value === "Olma");
// // let i = arr.findLastIndex((value, index, a) => {
// //   if (value === "Nok") return index;
// // });
// console.log(i);
