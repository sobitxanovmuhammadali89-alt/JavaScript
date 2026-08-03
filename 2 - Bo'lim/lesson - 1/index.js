// let raqam1 = 2026;
// let raqam2 = "2026";
// 
// // console.log(raqam1 + 2)
// // console.log(+raqam2 + 2)
// console.log(parseInt(raqam2) + 2);
// console.log(parseFloat(raqam2) + 2);
// console.log(Number(raqam2) + 2);
// 
// 
// // String ichidagi raqamni parchalash necha xil usul bor;
// // 1. +
// // 2. parseInt
// // 3. parseFloat
// // 4. Number
// 
// // isInteger() - is Integer - butun son ekanligini tekshiradi
// console.log(Number.isInteger(2026)); // true
// console.log(Number.isInteger(2026.5)); // false
// // ============================================
// let a = -5;
// let b = 10;
// let c = -100000;
// console.log(Math.abs(a)); // 5
// console.log(Math.abs(b)); // 10
// console.log(Math.abs(c)); // 100000
// 
// // ============================================
// // floor
// 
// let d = 5.7;
// let e = 5.999999
// let f = 5.0000001
// console.log(Math.floor(d)); // 5
// console.log(Math.floor(e)); // 5
// console.log(Math.floor(f)); // 5
// 
// let d2 = -5.7;
// let e2 = -5.999999
// let f2 = -5.0000001
// console.log(Math.floor(d2)); // -6
// console.log(Math.floor(e2)); // -6
// console.log(Math.floor(f2)); // -6

// ====================================

// 3. ceil - kasr sonni tepaga qarab yaxitlaydi.

// 4. round - kasr son yuqoriga yaqin bolsa yuqoriga qarab 
// pastga yaqin bo'lsa past ga qarab yaxitlaydi
// let a = 7.7
// let b = 7.9;
// let c = 7.4
// let d = 7.1
// let e = 7.5
// console.log(Math.round(a)); // 8
// console.log(Math.round(b)); // 8
// console.log(Math.round(c)); // 7
// console.log(Math.round(d)); // 7
// console.log(Math.round(e)); // 8

// 5. trunc - kasr sonni faqat butun qismini kesib oladi.
// let a = 3.12;
// let b = 3.988;
//console.log(Math.trunc(a)); // 3
//console.log(Math.trunc(b)); // 3

// ===============================================


function getPhone() {
    let arr = [77, 99, 88, 50, 98, 97, 95, 94, 93, 91, 90, 50, 33, 88, 78, 70];
    let code = Math.trunc(Math.random() * 100);
    let a = Math.trunc(Math.random() * 10);
    let b = Math.trunc(Math.random() * 10);
    let c = Math.trunc(Math.random() * 10);
    let d = Math.trunc(Math.random() * 10);
    let e = Math.trunc(Math.random() * 10);
    let f = Math.trunc(Math.random() * 10);
    let g = Math.trunc(Math.random() * 10);
    let h = Math.trunc(Math.random() * 10);
  if(code < 10 || !arr.includes(code)) return getPhone();
    return `+998 ${code} ${a}${b}${c} ${d}${e}${f}${g}`;
}
console.log(getPhone());
