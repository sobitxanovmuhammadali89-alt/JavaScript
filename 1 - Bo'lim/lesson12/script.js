// let a = 10;
// let b = 20;
// 
// // 1. Function Decloration
// function functionName(raqam1, raqam2) {
//     let bolinma = raqam2 / raqam1;
//     return bolinma;
// }
// console.log(functionName(a, b));
// 
// console.log("============================================================")
// 
// // 2.Expression Function
// const functionName2 = function (raqam3, raqam4) {
//     let bolinma = raqam4 / raqam3;
//     return bolinma;
// };
// 
// // 3. Arrow Function
// const functionName3 = (raqam5, raqam6) => {
//     let bolinma = raqam6 / raqam5;
//     return bolinma;
// };
// console.log(functionName3(a, b));
// 
// console.log("============================================================")
// 
// let start = 1;
// let stop = 10;
// function summa(a, b) {
//     let yigindi = 0;
//     for (let i = a; i <= b; i++) {
//         yigindi += i;
//     }
//     return yigindi;
// }
// console.log(summa(start, stop));
// 
// console.log("============================================================")

// let start = 1;
// let stop  = 10;
// const functionName = function (a,b) {
//     let yigindi = 0;
//     for(i = a; i <= b; i++) {
// 
//     }
//     return yigindi
// }
// console.log(summa(start, stop));
// 
// const summa3 = (a, b) => 
//     const functionName = function (a,b) {
//     let yigindi = 0;
//     for(i = a; i <= b; i++) 
//     
//     return yigindi
// }
// console.log(summa3(start, stop));

// console.log("============================================================")

// let a = 5;
// let b = 7;
// function kattaSonniTop(raqam1, raqam2) {
//     if(raqam1 > raqam2){
//         console.log(raqam1, "Katta");
//         console.log(raqam1, "Kichik")
//     } else if (raqam1 < raqam2) {
//         console.log(raqam2, "Katta");
//         console.log(raqam1; "Kichik")
//     } else {
//         console.log(raqam1, "va", raqam2, "bir-biriga teng");
//     }
// }
// kattaSonniTop(a,b)
// 
// =================================================================================

// Expreshion 

const kattaSonniTop = function (raqam1, raqam2) {
    if (raqam1 > raqam2) {
        console.log(raqam1, "Katta");
        console.log(raqam2, "Kichik");
    } else if (raqam1 < raqam2) {
        console.log(raqam2, "Katta");
        console.log(raqam1, "Kichik");
    } else {
        console.log(raqam1, "va", raqam2, "bir-biriga teng");
    }
};

kattaSonniTop(5, 7);

// Arrow

const kattaSonniTop2 = (raqam1, raqam2) => {
    if (raqam1 > raqam2) {
        console.log(`${raqam1} Katta, ${raqam2} Kichik`);
    } else if (raqam1 < raqam2) {
        console.log(`${raqam2} Katta, ${raqam1} Kichik`);
    } else {
        console.log(`${raqam1} va ${raqam2} teng`);
    }
};

kattaSonniTop(5, 7);





