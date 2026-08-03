// let toqYigindi = 0;
// let juftYigindi = 0;
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) 
//     }
// console.log("toqYigindi")
// console.log("juftYigindi")

//  let toqYigindi = 0;
//  let juftYigindi = 0;
//  let j = 1;
//  while (j <= 20) {
//      if (j % 2 === 0) {
//          juftYigindi += j;
//      } else {
//          toqYigindi += j;
//      }
//      j++;
//  }
//  console.log("Toq yig'indi:", toqYigindi);
//  console.log("Juft yig'indi:", juftYigindi)
// let toqYigindi1 = 0;
// let juftYigindi2 = 0;
// let i = 1;
// do {
//     if (i % 2 === 0) {
//         juftYigindi2 += i;
//     } else {
//         toqYigindi1 += i;
//     }
//     i++;
// } while (i <= 20);
// console.log("toqYigindi:");

// let count = 0;
// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 ) count++
// }
// console.log(count)
// 
// let count = 0;
//  let i = 1;
//  while (i <= 20) {
//      if (i % 3 === 0) count++;
//      i++;
//  }
////  console.log(count)
//
//let uper = 0;
//let j = 1;
//do {
//    if (j % 3 === 0)
//        uper++; 
//    j++
//}
//while (j <= 20);
//console.log(uper)
//
//

// let n = 30;
// let yigindi = 0;
// while (n >= 1) {
//     if (n % 3 === 0 || n % 5 === 0) yigindi += n;
//     n--;
// }
// console.log(yigindi)
// 
// let yigindi1 = 0;
// for (i = 30; i>=1; i++) {(i = 30; i>=1; i++) {
//     if(i % 3 === 0 || i % 5 === 0)
//         yigindi1 += i
// }
// console.log(yigindi)

// let i = 1;
// let kopaytma = 1;
// do{
//     if(i % 5 === 0 && i % 7 === 0) kopaytma *= i;
//     i++
// } while (i <= 100);
// console.log(kopaytma)
// 
// let j = 1;
// let kopayma1 = 1
// while(j <= 100) {
//     if (j % 5 === 0 && j % 7 === 0 ) kopayma1 *= j;
//     j++;
// }
// console.log(kopayma1)

// for (let i=1; i<=50; i++) {
//     if (i % 2 === 1) toqYigindi += i;
//     else juftYigindi += i;
// }
// let result = juftYigindi - toqYigindi;
// if (result % 2 === 1) console.log(result, "Bu Toq son.");
// else console.log(result, "Bu Juft son.")

//let j = 1;
//let ToqSon = 0;
//let JuftSon = 0;
//while (j <= 50) {
//    if (j % 2 === 1) ToqSon += j
//    else JuftSon += j;
////    j++;
////}
////let result = JuftSon - ToqSon;
////if (result % 2 === 1) console.log(result, "Bu Toq son.");
////else console.log(result, "Bu Juft son.")
//
//let j = 1;
//let ToqSon = 0;
//let JuftSon = 0;
//
//do {
//    if (j % 2 === 1) {
//        ToqSon += j;
//    } else {
//        JuftSon += j;
//    }
//    j++;
//} while (j <= 50);
//
//let result = JuftSon - ToqSon;
//
//if (result % 2 === 1 || result % 2 === -1) {
//    console.log(result, "Bu Toq son.");
//} else {
//    console.log(result, "Bu Juft son.");
//}
//

// continue - o'tqazib yuboring, davom etmoq.
// break - to'xtamoq, tugatmoq.

// ==================================================]


//for (let i = 1; i <= 10; i++) {
//    if (i % 2 === 1) continue;
//    console.log(i);
//} 
//
//for (let j = 1; j <= 10; j++) {
//    if (j % 2 === 1) break;
//    console.log(j);
//}

// for (let i = 1; true; i++) {
//     if (i % 5 === 0 && i % 7 === 0) {
//         console.log(i)
//         break;
//     }
// }

let i = 1;
while (true) {
    if (i % 5 === 0 && i % 7 === 0) {
        console.log(i);
        break;
    }
    i++;
}

let j = 1;
do {
    if (j % 5 === 0 && j % 7 === 0) {
        console.log(j);
        break;
    }
    j++;
} while (true);


0ol