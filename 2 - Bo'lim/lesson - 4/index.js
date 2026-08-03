// repeat -
// let str = "gol"
// let newStr = str[0] + str[1].repeat(10) + str[2];
// console.log(newStr);
// 
//---------------------------------------------
// replace , replaceAll - 
// // let sana = "17.07.2026"
// sana = sana.replaceAll("." , "/")
// console.log(sana);
// 
// // let email = "ali@gmail.com"
// email = email.replace("gmail.com" , "yandex.ru")
// console.log(email);
// 
// 
// // -----------------------------------------
// // slice , substring - matndan nusxa olish uchun ishlatiladi.
// let str1 = "Men Algoritm IT Center'da o'qiyman.";
// // let a = str1.slice(4, 12);
// // let b = str1.substring(4, 12);
// // console.log(a);
// // console.log(b);
// let c = str1.slice(-9)
// console.log(c);
// let e = str1.substring
// console.log(d);
// --------------------------------------------
// split - string qiymatini arrayga aylantirish uchun ishlatiladi
let str = "Algoritm";
let arr = str.split("");
console.log(arr);
let str1 = "Algoritm, Oxford, Start21, Ziyokor";
let arr0 = str1.split(", ");
console.log(arr0);

// --------------------------------------------
// trim - qiymatlarni boshi va oxiridagi bo'sh joylarni olib tashlaydi
let matn = "      Dunyo       "
console.log(matn); // oldingi xolat
matn = matn.trim
console.log(matn); // yangi xolat

// --------------------------------------------

// toString - barcha qiymatni string ga aylantirib beradi

let raqam = 200
console.log(raqam.toString);

// --------------------------------------------

// localCompare - Xarflani Alifbe buyicha taqoslaydi
// 1, -1, 0
// let a = "Salom"
// let b = "Lom"
// console.log(a.localCompare(b));

// let c = "Salom";
// let d = "Salom";
// console.log(c.LocalCompare(d));

// let f = "Zlik";
// let e = "Salom";
// console.log(f.localCompare(d));


// --------------------------------------------
// eval - String ichidagi matematik amallarni to'gri bajarib beradi.
let sum - ""
