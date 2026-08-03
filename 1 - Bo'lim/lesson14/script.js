// let algoritim = {
//     ism: "Algoritm It Center",
//     yil: 2016,
//     manzil: "Chorsu, DXA Binosi.",
//     telRaqam: "+998 90 404 18 80 "
// };
// 
// console.log(algoritim.ism); // 1
// console.log(algoritm["ism"]); // 2
// 
// let str = "ism";
// console.log(algoritm[str]); // 3

// let start21 = structuredClone({}, algoritm);
// let start21 = structuredClone( algoritm);

// console.log(start21)
// console.log(algortim)

// link o'zgatirishni 2 ta usuli bor.

// 1. Object assign
// 2. structururedClone

// =========================================================

// =========================================================

// ==]======================================================

// let algoritm = {
//     ism1: "Algoritm It center",
//     yili: 2016,
// };
// 
// let start21 = {
//     ism2: "Start 21",
//     yili2: 2021,
// }
// 
// let birlashgan = Object.assign(algoritm, start21);
// console.log(birlashgan);
// 
// let obj = {
//     ism: "Eshmat",
//     yili: 2010,
//     ism: "Toshmat",
// }
// 
// console.log(obj);

// Object.assign() - 2 ta vazifasi bor:
// 1. Link larni xar qilib beradi.
// 2. 2 va undan ortiq objectlar birlashtiradi.

//structuredClone() - 1ta vazifasi bor:
// 1. Link larni xar xil qilib beradi.

// Onject icbidagi qiymatni o'zgatirish:
// let oxford = {
// ism: "Oxford Learning",
// yili: 2023,
//};
// oxford.ism = "Oxford Learning Center";
// console.log(oxford);

// Agar Object ichida kalit 2 marta takrorlab qolsa
// oxirgi kalit qoladi, birinchisi o'chib ketadi
 let obj = {
    ism: "Eshmat",
    yosh: 20,
    status: "Ishchi",
    manzil: "Toshkent",
};


let dowhile = Object.assign(obj);
dowhile.ism = "Toshmat";
dowhile.yosh = 27;
dowhile.manzil = "Namangan";


let dowhile2 = structuredClone(obj);
dowhile2.ism = "Ali";
dowhile2.yosh = 17;
dowhile2.status = "Maktab";
dowhile2.manzil = "Farg'ona";

console.log(dowhile);
console.log(dowhile2);
