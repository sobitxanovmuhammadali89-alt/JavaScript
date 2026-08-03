// 1. While

// 2. do While

// FOR loop
//for (let raqam1 = 1; raqam1 <=10; raqam1++) {
//    console.log(raqam1);
//}
//
//console.log("=====================================================");
//
//// WHILE loop
//let raqam2 = 1;
//while (raqam2 <= 10) {
//    console.log(raqam2);
//    raqam2++;
//}
//
//console.log("=====================================================");
//
//// DO WHILE loop
//let raqam3 = 1
//do {
//    console.log(raqam3)
//    raqam3++
//} while (raqam3 <= 10)

// 1. 1 dan 100 gacha bo'lgan sonlarni yigindisini toping
//
//let raqam = 1;
//let yigindi = 0;
//while (raqam <= 100) {
//    yigindi += raqam;
//    raqam++;
//}
//console.log(yigindi);
//
//// =================================================================
//
//let raqam2 = 1;
//let yigindi2 = 0;
//do {
//    yigindi2 += raqam2;
//    raqam2++;
//} while (raqam2 <= 100);
//console.log(yigindi2);
//
////====================================================================

// 3. 1 dan 50 gacha bo‘lgan juft sonlarni chiqaring.

//let raqam1 = 1;
//while (raqam1 <= 50) {
//    if (raqam1 % 2 === 0) {
//        console.log(raqam1);
//    }
//    raqam1++;
//}
//
//console.log("=====================================================");
//
//let raqam2 = 1;
//do {
//    if (raqam2 % 2 === 0) {
//        console.log(raqam2);
//    }
//    raqam2++;
//} while (raqam2 <= 50);

//
//console.log("=====================================================");
//
////  1 dan 50 gacha bo‘lgan toq sonlarni chiqaring.
//
//let raqam2 = 1;
//do {
//    if (raqam2 % 2 === 1) {
//        console.log(raqam2);
//    }
//    raqam2++;
//} while (raqam2 <= 50);
//
//console.log("=====================================================");
//
//let raqam1 = 1;
//while (raqam1 <= 50) {
//    if (raqam1 % 2 === 1) {
//        console.log(raqam1);
//    }
//    raqam1++;
//}

 //1 dan N gacha bo‘lgan sonlarning kvadratlarini chiqaring (N raqam prompt dan olinadi)
 //let n = 15;
 //let raqam1 = 2;
 //while (raqam1 <= n) {
 //    console.log(raqam1 * raqam1);
 //    raqam1++;
 //}
 //
 //console.log("=====================================================");
 //
//
 //let raqam2 = 2;
 //do {
 //    console.log(raqam2 * raqam2);
 //    raqam2++;
 //} while (raqam2 <= n2);

// ===================================================================

// 1 dan N gacha bo‘lgan sonlar ichida 3 ga bo‘linadiganlarini chiqaring.
let n =25;
let raqam1 = 1;
do {
    if (raqam1 % 3 === 0) console.log(raqam1);
    raqam1++;
} while (raqam1 <= n);

console.log("=========================================================")

let raqam2 = 1;{
    if (raqam2 % 3 === 0) {console.log(raqam2);}
}
while (raqam2 <= n) {
    if (raqam2 % 3 === 0) console.log(raqam2);
    raqam2++;
}