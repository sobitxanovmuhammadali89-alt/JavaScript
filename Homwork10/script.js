//// 1. 5 dan 15 gacha sonlar
function masala1() {
    for (let a = 5; a <= 15; a++) {
        console.log(a);
    }
}
masala1(30)
masala1(20)
masala1(10)

//// 2. 1 dan 200 gacha yig'indi
function masala2() {
    let b = 0;
    let c = 1;
    while (c <= 200) {
        b += c;
        c++;
    }
    console.log(b);
}
masala2(30)
masala2(20)
masala2(10)


//// 3. 1 dan 60 gacha juftlar
function masala3() {
    let d = 1;
    do {
        if (d % 2 == 0) {
            console.log(d);
        }
        d++;
    } while (d <= 60);
}
masala3(30)
masala3(20)
masala3(10)

//// 4. 1 dan 60 gacha toqlar
function masala4() {
    for (let e = 1; e <= 60; e++) {
        if (e % 2 != 0) {
            console.log(e);
        }
    }
}
masala4(30)
masala4(20)
masala4(10)

//// 5. 1 dan N gacha kublar
function masala5(f) {
    for (let g = 1; g <= f; g++) {
        console.log(g * g * g);
    }
}
masala5(30)
masala5(20)
masala5(10)

// 6. 1 dan N gacha 4 ga bo'linadiganlar
function masala6(h) {
    let i = 1;
    while (i <= h) {
        if (i % 4 == 0) {
            console.log(i);
        }
        i++;
    }
}
masala6(30)
masala6(20)
masala6(10)

// 7. 1 dan N gacha yig'indi
function masala7(j) {
    let k = 0;
    for (let l = 1; l <= j; l++) {
        k += l;
    }
    console.log(k);
}
masala1(30)
masala1(20)
masala1(10)

//// 8. 1 dan 150 gacha (3 va 5 ga bo'linadiganlar)
//function masala8() {
//    for (let m = 1; m <= 150; m++) {
//        if (m % 3 == 0 && m % 5 == 0) {
//            console.log(m);
//        }
//    }
//}
//
//// 9. 20 dan 1 gacha teskari
//function masala9() {
//    let o = 20;
//    while (o >= 1) {
//        console.log(o);
//        o--;
//    }
//}
//
//// 10. 1 dan N gacha juftlar yig'indisi
//function masala10(p) {
//    let q = 0;
//    for (let r = 1; r <= p; r++) {
//        if (r % 2 == 0) {
//            q += r;
//        }
//    }
//    console.log(q);
//}
//
//// 11. 1 dan N gacha nechta toq son bor
//function masala11(s) {
//    let t = 0;
//    for (let u = 1; u <= s; u++) {
//        if (u % 2 != 0) {
//            t++;
//        }
//    }
//    console.log(t);
//}
//
//// 12. 1 dan N gacha minimal (eng kichik) son
//function masala12(v) {
//    let w = 1;
//    for (let x = 1; x <= v; x++) {
//        if (x < w) {
//            w = x;
//        }
//    }
//    console.log(w);
//}
//
//// 13. 1 dan 30 gacha 3 ga bo'linadiganlar soni
//function masala13() {
//    let y = 0;
//    let z = 1;
//    while (z <= 30) {
//        if (z % 3 == 0) {
//            y++;
//        }
//        z++;
//    }
//    console.log(y);
//}
//
//// 14. 1 dan N gacha 20 dan kichiklari
//function masala14(aa) {
//    for (let ab = 1; ab <= aa; ab++) {
//        if (ab < 20) {
//            console.log(ab);
//        }
//    }
//}
//
//// 15. N uchun qo'shish jadvali
//function masala15(ac) {
//    for (let ad = 1; ad <= 10; ad++) {
//        console.log(ac + " + " + ad + " = " + (ac + ad));
//    }
//}
//
//// 16. 1 dan 100 gacha 9 ga bo'linadiganlar
//function masala16() {
//    let ae = 1;
//    do {
//        if (ae % 9 == 0) {
//            console.log(ae);
//        }
//        ae++;
//    } while (ae <= 100);
//}
//
//// 17. 1 dan N gacha eng katta toq son
//function masala17(af) {
//    let ag = 0;
//    for (let ah = 1; ah <= af; ah++) {
//        if (ah % 2 != 0) {
//            ag = ah;
//        }
//    }
//    console.log(ag);
//}
//
//// 18. 1 dan 40 gacha 6 ga bo'linmaydiganlar
//function masala18() {
//    for (let ai = 1; ai <= 40; ai++) {
//        if (ai % 6 != 0) {
//            console.log(ai);
//        }
//    }
//}
//
//// 19. 1 dan N gacha (2 va 3 ga bo'linadiganlar) soni
//function masala19(aj) {
//    let ak = 0;
//    for (let al = 1; al <= aj; al++) {
//        if (al % 2 == 0 && al % 3 == 0) {
//            ak++;
//        }
//    }
//    console.log(ak);
//}
//
//// 20. 1 dan N gacha 5 ga bo'linadiganlar yig'indisi
//function masala20(am) {
//     let an = 0;
//     let ao = 1;
//     while (ao <= am) {
//         if (ao % 5 == 0) {
//             an += ao;
//         }
//         ao++;
//     }
//     console.log(an);
// }
