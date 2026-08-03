// 1. Obyektlarni yaratish
let m1 = { nomi: "Nexia 3", narxi: 10000 };
let m2 = { nomi: "Malibu 2", narxi: 30000 };
let m3 = { nomi: "Gentra", narxi: 13000 };
let m4 = { nomi: "Tracker", narxi: 21000 };
let m5 = { nomi: "Onix", narxi: 18000 };
let m6 = { nomi: "Tesla S", narxi: 70000 };
let m7 = { nomi: "BMW M5", narxi: 80000 };
let m8 = { nomi: "Mercedes", narxi: 90000 };
let m9 = { nomi: "Toyota", narxi: 35000 };
let m10 = { nomi: "Kia K5", narxi: 32000 };

// 2. Funksiya (Siz ko'rsatgan 3-usul, Arrow function)
const mashinaHaqida = (obj) => {
    let maumot = obj.nomi + "ning narxi " + obj.narxi + "$";
    return maumot;
}

// ---------------------------------------------------------
// 1. STATIC USUL (Nuqta orqali)
// ---------------------------------------------------------
console.log("--- Static Usul ---");
console.log(m1.nomi, m1.narxi);
console.log(m2.nomi, m2.narxi);
console.log(m3.nomi, m3.narxi);
console.log(m4.nomi, m4.narxi);
console.log(m5.nomi, m5.narxi);
console.log(m6.nomi, m6.narxi);
console.log(m7.nomi, m7.narxi);
console.log(m8.nomi, m8.narxi);
console.log(m9.nomi, m9.narxi);
console.log(m10.nomi, m10.narxi);

// ---------------------------------------------------------
// 2. DYNAMIC USUL (Qavs va Funksiya orqali)
// ---------------------------------------------------------
console.log("--- Dynamic Usul ---");
console.log(mashinaHaqida(m1));
console.log(mashinaHaqida(m2));
console.log(m3["nomi"], m3["narxi"]); // Qavs orqali chiqarish
console.log(mashinaHaqida(m4));
console.log(mashinaHaqida(m5));
console.log(mashinaHaqida(m6));
console.log(mashinaHaqida(m7));
console.log(mashinaHaqida(m8));
console.log(mashinaHaqida(m9));
console.log(mashinaHaqida(m10));
