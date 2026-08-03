//let obj = {
//    ism: "Ali",
//    familiya: "Valiyev",
//    yosh: 15,
//    tel_raqam: "+998 111 22 33",
//    manzil: "Namangan shahar",
//};
//
//let obj1 = structuredClone(obj)
//obj1.ism = "Salim"
//obj.familiya = "Alimov"
//obj.manzil = "Namangan shahar"
//obj.raqam = "+998 99 333 22 11"
//console.log(obj1)
//console.log(obj)

// ==========================================================================================

// let products = {
//     pen: {
//         color: "black",
//         price: 2000,
//     },
//     pencil: {
//         color: "blue",
//         price: 5000,
//     },
//     book: {
//         page_count: 200,
//         price: 50000,
//     },
// };
// 
// let totalSum = 0
// 
// for (let key in products) {
//     totalSum += products[key].price
// }
// 
// console.log(totalSum) 

// ==============================================================================================

// let products = {
//     pen: {
//         color: "black",
//         price: 2000,
//     },
//     pencil: {
//         color: "blue",
//         price: 5000,
//     },
//     book: {
//         page_count: 200,
//         price: 50000,
//     },
//     sumka: {
//         color: "red",
//         price: 100000,
//     },
//     laptop: {
//         name: "Mackbook",
//         price: 10000000,
//     },
// };
// 
// let totalSum = 0;
// 
// for (let key in products) {
//     if (products[key].price >= 50000) {
//         totalSum += products[key].price;
//     }
// }

// console.log(totalSum);

// ==========================================================================================

// let parent = {
//     ism: "Eshmat",
//     yosh: 50,
//     child: {
//         ism: "Toshmat",
//         yosh: 20,
//     },
// };
// 
// let obj1 = structuredClone(Obj)
//  obj1.child.ism = "gulmat"
//  obj1.parent.yosh = 25

// =============================================================================================

let obj = {
    name: "Algoritm",
    status: "IT Center",
    year: 2016,
    filial: {
        name: "Algoritm Chust filial",
        status: "IT Center",
        year: 2026,
    },
};

let {
    name,
    status,
    year,
    filial:{name: nameChust, status: statusChust, year: yearChust },
} = obj;

console.log(name);
console.log(status);
console.log(year);
console.log(nameChust);
console.log(statusChust);
console.log(yearChust);
