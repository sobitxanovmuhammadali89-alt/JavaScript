// 1. 5 dan 15 gacha bo‘lgan sonlar
for (let i = 5; i <= 15; i++) {
    console.log(i);
}

// 2. 1 dan 200 gacha sonlar yig‘indisi
let sum2 = 0;
for (let i = 1; i <= 200; i++) {
    sum2 += i;
}
console.log("Yig'indi:", sum2);
//
//// 3. 1 dan 60 gacha juft sonlar
//for (let i = 1; i <= 60; i++) {
//    if (i % 2 === 0) console.log(i);
//}
//
//// 4. 1 dan 60 gacha toq sonlar
//for (let i = 1; i <= 60; i++) {
//    if (i % 2 !== 0) console.log(i);
//}
//
//// 5. 1 dan N gacha sonlar kubi
//let n5 = +prompt("N sonini kiriting:");
//for (let i = 1; i <= n5; i++) {
//    console.log(i ** 3);
//}
//
//// 6. 1 dan N gacha 4 ga bo'linadiganlar
//let n6 = +prompt("N sonini kiriting:");
//for (let i = 1; i <= n6; i++) {
//    if (i % 4 === 0) console.log(i);
//}
//
//// 7. 1 dan N gacha yig'indi
//let n7 = +prompt("N sonini kiriting:");
//let sum7 = 0;
//for (let i = 1; i <= n7; i++) {
//    sum7 += i;
//}
//console.log("Yig'indi:", sum7);
//
//// 8. 150 gacha 3 ga ham, 5 ga ham bo'linadiganlar
//for (let i = 1; i <= 150; i++) {
//    if (i % 3 === 0 && i % 5 === 0) console.log(i);
//}
//
//// 9. 20 dan 1 gacha teskari
//for (let i = 20; i >= 1; i--) {
//    console.log(i);
//}
//
//// 10. 1 dan N gacha faqat juftlar yig'indisi
//let n10 = +prompt("N sonini kiriting:");
//let sum10 = 0;
//for (let i = 1; i <= n10; i++) {
//    if (i % 2 === 0) sum10 += i;
//}
//console.log("Juftlar yig'indisi:", sum10);
//
//// 11. 1 dan N gacha toq sonlar soni (nechtaligi)
//let n11 = +prompt("N sonini kiriting:");
//let count11 = 0;
//for (let i = 1; i <= n11; i++) {
//    if (i % 2 !== 0) count11++;
//}
//console.log("Toq sonlar miqdori:", count11);
//
//// 12. 1 dan N gacha eng kichik son (for yordamida)
//let n12 = +prompt("N sonini kiriting:");
//let min = 1; // 1 dan boshlangani uchun eng kichigi 1
//for (let i = 1; i <= n12; i++) {
//    if (i < min) min = i;
//}
//console.log("Minimal:", min);
//
//// 13. 1 dan 30 gacha 3 ga bo'linadiganlar soni
//let count13 = 0;
//for (let i = 1; i <= 30; i++) {
//    if (i % 3 === 0) count13++;
//}
//console.log("3 ga bo'linadiganlar:", count13);
//
//// 14. 1 dan N gacha faqat 20 dan kichiklari
//let n14 = +prompt("N sonini kiriting:");
//for (let i = 1; i <= n14; i++) {
//    if (i < 20) console.log(i);
//}
//
//// 15. N uchun qo'shish jadvali (N+1 dan N+10 gacha)
//let n15 = +prompt("N sonini kiriting:");
//for (let i = 1; i <= 10; i++) {
//    console.log(`${n15} + ${i} = ${n15 + i}`);
//}
//
//// 16. 100 gacha 9 ga bo'linadiganlar
//for (let i = 1; i <= 100; i++) {
//    if (i % 9 === 0) console.log(i);
//}
//
//// 17. 1 dan N gacha eng katta toq son
//let n17 = +prompt("N sonini kiriting:");
//let maxOdd = 0;
//for (let i = 1; i <= n17; i++) {
//    if (i % 2 !== 0) maxOdd = i;
//}
//console.log("Eng katta toq son:", maxOdd);
//
//// 18. 1 dan 40 gacha 6 ga bo'linmaydiganlar
//for (let i = 1; i <= 40; i++) {
//    if (i % 6 !== 0) console.log(i);
//}
//
//// 19. 1 dan N gacha 2 ga ham, 3 ga ham bo'linadiganlar soni
//let n19 = +prompt("N sonini kiriting:");
//let count19 = 0;
//for (let i = 1; i <= n19; i++) {
//    if (i % 2 === 0 && i % 3 === 0) count19++;
//}
//console.log("2 va 3 ga bo'linadiganlar soni:", count19);
//
//// 20. 1 dan N gacha 5 ga bo'linadiganlar yig'indisi
////let n20 = +prompt("N sonini kiriting:");
////let sum20 = 0;
////for (let i = 1; i <= n20; i++) {
////    if (i % 5 === 0) sum20 += i;
////}
////console.log("5 ga bo'linadiganlar yig'indisi:", sum20);
//
//// while 
//
//// 1. 5 dan 15 gacha
//let i1 = 5;
//while (i1 <= 15) {
//    console.log(i1);
//    i1++;
//}
//
//// 2. 1 dan 200 gacha yig'indi
//let i2 = 1, sum2 = 0;
//while (i2 <= 200) {
//    sum2 += i2;
//    i2++;
//}
//console.log(sum2);
//
//// 3. Juft sonlar (60 gacha)
//let i3 = 1;
//while (i3 <= 60) {
//    if (i3 % 2 === 0) console.log(i3);
//    i3++;
//}
//
//// 4. Toq sonlar (60 gacha)
//let i4 = 1;
//while (i4 <= 60) {
//    if (i4 % 2 !== 0) console.log(i4);
//    i4++;
//}
//
//// 5. N gacha kublar
//let n5 = +prompt("N:"), i5 = 1;
//while (i5 <= n5) {
//    console.log(i5 ** 3);
//    i5++;
//}
//
//// 6. 4 ga bo'linadiganlar
//let n6 = +prompt("N:"), i6 = 1;
//while (i6 <= n6) {
//    if (i6 % 4 === 0) console.log(i6);
//    i6++;
//}
//
//// 7. N gacha yig'indi
//let n7 = +prompt("N:"), i7 = 1, sum7 = 0;
//while (i7 <= n7) {
//    sum7 += i7;
//    i7++;
//}
//console.log(sum7);
//
//// 8. 3 va 5 ga bo'linadiganlar (150 gacha)
//let i8 = 1;
//while (i8 <= 150) {
//    if (i8 % 3 === 0 && i8 % 5 === 0) console.log(i8);
//    i8++;
//}
//
//// 9. 20 dan 1 gacha teskari
//let i9 = 20;
//while (i9 >= 1) {
//    console.log(i9);
//    i9--;
//}
//
//// 10. Juftlar yig'indisi
//let n10 = +prompt("N:"), i10 = 1, sum10 = 0;
//while (i10 <= n10) {
//    if (i10 % 2 === 0) sum10 += i10;
//    i10++;
//}
//console.log(sum10);
//
//// do while 
//
//// 11. Toq sonlar soni
//let n11 = +prompt("N:"), i11 = 1, count11 = 0;
//if (n11 >= 1) {
//    do {
//        if (i11 % 2 !== 0) count11++;
//        i11++;
//    } while (i11 <= n11);
//}
//console.log(count11);
//
//// 12. Minimal son (1 dan N gacha bo'lgani uchun 1 eng kichik)
//let n12 = +prompt("N:"), i12 = 1, min = 1;
//if (n12 >= 1) {
//    do {
//        if (i12 < min) min = i12;
//        i12++;
//    } while (i12 <= n12);
//}
//console.log(min);
//
//// 13. 30 gacha 3 ga bo'linadiganlar soni
//let i13 = 1, count13 = 0;
//do {
//    if (i13 % 3 === 0) count13++;
//    i13++;
//} while (i13 <= 30);
//console.log(count13);
//
//// 14. 20 dan kichiklari
//let n14 = +prompt("N:"), i14 = 1;
//if (n14 >= 1) {
//    do {
//        if (i14 < 20) console.log(i14);
//        i14++;
//    } while (i14 <= n14);
//}
//
//// 15. Qo'shish jadvali
//let n15 = +prompt("N:"), i15 = 1;
//do {
//    console.log(`${n15} + ${i15} = ${n15 + i15}`);
//    i15++;
//} while (i15 <= 10);
//
//// 16. 9 ga bo'linadiganlar (100 gacha)
//let i16 = 1;
//do {
//    if (i16 % 9 === 0) console.log(i16);
//    i16++;
//} while (i16 <= 100);
//
//// 17. Eng katta toq son
//let n17 = +prompt("N:"), i17 = 1, maxOdd = 0;
//if (n17 >= 1) {
//    do {
//        if (i17 % 2 !== 0) maxOdd = i17;
//        i17++;
//    } while (i17 <= n17);
//}
//console.log(maxOdd);
//
//// 18. 6 ga bo'linmaydiganlar (40 gacha)
//let i18 = 1;
//do {
//    if (i18 % 6 !== 0) console.log(i18);
//    i18++;
//} while (i18 <= 40);
//
//// 19. 2 va 3 ga bo'linadiganlar soni
//let n19 = +prompt("N:"), i19 = 1, count19 = 0;
//if (n19 >= 1) {
//    do {
//        if (i19 % 2 === 0 && i19 % 3 === 0) count19++;
//        i19++;
//    } while (i19 <= n19);
//}
//console.log(count19);
//
//// 20. 5 ga bo'linadiganlar yig'indisi
//let n20 = +prompt("N:"), i20 = 1, sum20 = 0;
//if (n20 >= 1) {
//    do {
//        if (i20 % 5 === 0) sum20 += i20;
//        i20++;
//    } while (i20 <= n20);
//}
//console.log(sum20);
//