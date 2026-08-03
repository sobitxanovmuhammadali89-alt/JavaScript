// // min - minimum - eng kichik 
// let kichik = Math.min(6, 9, 2, 4, 7, 5);
// console.log(kichik);

// // max - maximum - eng katta
// let katta = Math.max(6, 9, 2, 4, 7, 5);
// console.log(katta);

// ====================================================

// pow - darajaga oshirish uchun kerak
// let daraja = Math.pow(2, 3);
// let daraja = 2 ** 3
// console.log(daraja);;

// sign - sizga berilgan 
// son Musbat sonmi? yoki
// Manfiy sonmi? yoki
// 0 ga tengmi shuni tekshirib beradi.
// Musbat son bersangiz: 1 chiqadi
// Manfiy son bersangiz: -1 chiqadi
// o son bersangiz: 0 chiqdi

// let a = Math.sign(5);
// let b = Math.sign(-6);
// let c = Math.sign(0);
// console.log(a);
// console.log(b);
// console.log(c);

// ====================================================
// sqrt - Kvadrat ildiz degani.
// 9 -> 3
// 25 -> 5
// 16 -> 4
// let a = Math.sqrt(9);
// let b = Math.sqrt(25);
// let c = Math.sqrt(16);
// console.log(a);
// console.log(b);
// console.log(c);

// let raqam = 11;
// console.log(+Math.sqrt(raqam).toFixed(1));

// cbrt - Kub ildiz degani.
// 27 -> 3
// 512 -> 8 
// 1080 -> 10
let kub = Math.cbrt(512);
console.log(kub);

console.log(512 ** (1 / 3));

// ====================================================

// let raqam = 100;
// toString() - berilgan qiymatni stringga aylantirib beradi.
// raqam = raqam.toString();
// console.log(typeof raqam);

// let kasr = 100 / 3;
// console.log(kasr.toFixed(1));

let a = null;
let b = "100"
let c = -10
let d = 10
console.log(isNaN(a));
console.log(isNaN(b));
console.log(isNaN(c));
console.log(isNaN(d));
