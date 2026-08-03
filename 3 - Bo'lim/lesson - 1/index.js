// let arr = ["Olma" , "Anor" , "Uzum" , "Nok"];
// let newArr = arr.map((value , index , a) => {
//  return value + " " + (index + 1)
// }); 
// console.log(newArr);


// let arr = ["Shaftoli", "Anjir", "Uzum", "Nok"];
// let juftUzunlik = arr.filter(item => item.length % 2 === 0);
// console.log(juftUzunlik);

// forEach, map, filter

// map ga nisbatan 
// let arr = [1, 2, 3, 4, 5];
// javob [1, 4, 9, 16, 25]

// let arr = [1, 2, 3, 4, 5];
// let natija = arr.map(item => item * item);
// console.log(natija);


// let arr = ["scratch", "python", "html", "css", "javascript", "react js"];
// let katta = arr.map(item => item.toUpperCase());
// console.log(katta )

// let arr = ["scratch", "python", "html", "css", "javascript", "react js"];
// let natija = arr.map(item => item.toUpperCase());
// console.log(natija);

// ==================== forEach ====================

// let arr = ["Olma", "Anor", "Uzum", "Nok"];

// arr.forEach((value, index, a) => {
//   console.log(value, index);
// });

// // index shart bilan ishlatish
// let sum = 0;
// arr.forEach((value, index, a) => {
//   if (index === 3) {
//     console.log(value);
//   }
// });

// // sonlar massivi ustida forEach (yig'indi hisoblash)
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum2 = 0;
// arr2.forEach(function (value, index, a) {
//   sum2 += value;
// });
// console.log(sum2);

// // ==================== map ====================

// let arr3 = ["Olma", "Anor", "Uzum", "Nok"];

// let newArr = arr3.map((value, index, a) => {
//   return value;
// });
// console.log(newArr);

// // index bilan matn qo'shib yangi massiv yasash
// // natija: ["Olma 1", "Anor 2", "Uzum 3", "Nok 4"]
// let newArr2 = arr3.map((value, index, a) => `${value} ${index + 1}`);
// console.log(newArr2);

// // forEach va map | farqi:
// // forEach da return ishlamaydi, qiymat qaytmaydi.
// // map da return ishlaydi, o'zidan yangi array qaytaradi.

// // ==================== filter ====================

// let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArr3 = arr4.filter((value, index, a) => {
//   return value;
// });
// console.log(newArr3);

// // falsy qiymatlarni filtrlab tashlash
// let arr5 = [0, "", false, undefined, null, 6, 7, 8, 9];
// let newArr4 = arr5.filter((value, index, a) => {
//   return value;
// });
// console.log(newArr4); // [6, 7, 8, 9]

// // toq sonlarni olish
// let newArr5 = arr4.filter((value, index, a) => {
//   if (value % 2 === 1) return value;
// });
// console.log(newArr5);

// // 5 dan katta sonlarni olish
// let newArr6 = arr4.filter((value, index, a) => {
//   if (value > 5) return value;
// });
// console.log(newArr6);

// // 5 dan kichik yoki teng sonlarni olish
// let newArr7 = arr4.filter((value, index, a) => {
//   if (value <= 5) return value;
// });
// console.log(newArr7);