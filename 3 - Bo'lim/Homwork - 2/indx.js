// 1-masala
const arr1 = [3, 7, 8, 12, 15, 20, 9];
let natija1 = arr1.find((son) => son > 10 && son % 2 === 0);
console.log(natija1); // 12


// 2-masala
const arr2 = [10, 15, 21, 30, 45, 9];
let natija2 = arr2.find((son) => son % 3 === 0 && son % 5 === 0 && son > 15);
console.log(natija2); // 30



// 3-masala
const arr3 = [5, 8, 12, -3, 7, -9, 2];
let natija3 = arr3.findIndex((son) => son < 0);
console.log(natija3); // 3


// 4-masala
const arr4 = [10, 18, 16, 22, 30, 25];
let natija4 = arr4.findIndex((son) => Number.isInteger(Math.sqrt(son)));
console.log(natija4); // 2

// 5-masala
const arr5 = [12, 60, 9, 45, 100, 33, 80];
let natija5 = arr5.findLastIndex((son) => son < 50 && son % 3 === 0);
console.log(natija5); // 5


// 6-masala
const arr6 = [5, 23, 100, 45, 200, 78, 300];
let natija6 = arr6.findLastIndex((son) => son >= 10 && son <= 99);
console.log(natija6); // 5