let str = "Algorithm and Oxford"

// 1. length
// let uzunlik = str.length
// console.log(uzunlik)

// 2. charAt() at()
// let harf = str.charAt(0);
// console.log(harf);
// console.log(str.at(0));
// console.log(str[0]);
// console.log(str.at(0));
// console.log======================");
// console.log(str.charAt(-1));
// console.log(str[-1]);
// console.log(str.at(-1));

// let i = "and";
// if (str.includes(i)) {
//  console.log("Ha Bor");
//  str = str.replace(i, "va")
// } else (
//    console.log("Yoq Mavjud Emas")
// );
// console.log(str);


// let s = "Alg";
// let isStart = str.startsWith(s);
// console.log(isStart);
// let e = "rd"
// let isEnd = str.endsWith(e);
// console.log(isEnd);

// let isAlpha = str.search("and")
// console.log(isAlpha);
// console.log(str.indexOf("o"));
// console.log(str.lastIndexOf("o"));

let phone = "901234567"
let newPhone = phone.padStart(phone.length, + 5, "+998")
console.log(newPhone);

let name = "eshmat.toshmatov2026"
let email = name.padEnd(name.length + 10, "@gmail.com")
console.log(email)