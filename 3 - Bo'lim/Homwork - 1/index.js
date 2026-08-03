// forEach
let ism = ["Ali", "Vali", "Sami", "Olim"];
ism.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
});

let a = [10000, 20000, 15000];
a.forEach(item => {
    console.log(`${item} => ${item * 0.9}`);
});

let meva = ["olma", "anor", "banan"];
meva.forEach(item => {
    console.log(item.toUpperCase());
});
// ==================================================

// map
let yosh = [15, 18, 20, 25];
let natija = yosh.map(item => item + 1);
console.log(natija);

let ism2 = ["Ali", "Vali", "Sami"];
let natija2 = ism2.map(item => item + "bek");
console.log(natija2);

let son = [1, 2, 3, 4];
let natija3 = son.map(item => `Son: ${item}`);
console.log(natija3);

// ==================================================
// filter
let yosh2 = [12, 18, 25, 16, 30];
let natija4 = yosh2.filter(item => item >= 18);
console.log(natija4);

let meva2 = ["olma", "banan", "shaftoli", "anor"];
let natija5 = meva2.filter(item => item.length > 5);
console.log(natija5);

let raqam = [-5, 0, 7, -2, 10];
let natija6 = raqam.filter(item => item >= 0);
console.log(natija6);

let talabalar = ["Ali", "Vali", "Sami", "Olim"];

talabalar.forEach((ism, tartibRaqami) => {
    console.log(`${tartibRaqami + 1}. ${ism}`);
});

let narxlar = [10000, 20000, 15000];
narxlar.forEach(narx => {
    console.log(`${narx} => ${narx * 0.9}`);
});

let mevalar = ["olma", "anor", "banan"];
mevalar.forEach(meva => {
    console.log(meva.toUpperCase());
});

let yoshlar = [15, 18, 20, 25];
let yangiYoshlar = yoshlar.map(yosh => yosh + 1);
console.log(yangiYoshlar);

let ismlar = ["Ali", "Vali", "Sami"];
let yangiIsmlar = ismlar.map(ism => ism + "bek");
console.log(yangiIsmlar);

let sonlar = [1, 2, 3, 4];
let matnlar = sonlar.map(son => `Son: ${son}`);
console.log(matnlar);

let yoshlar2 = [12, 18, 25, 16, 30];
let kattalar = yoshlar2.filter(yosh => yosh >= 18);
console.log(kattalar);

let sozlar = ["olma", "banan", "shaftoli", "anor"];
let uzunSozlar = sozlar.filter(soz => soz.length > 5);
console.log(uzunSozlar);

let sonlar2 = [-5, 0, 7, -2, 10];
let musbatSonlar = sonlar2.filter(son => son >= 0);
console.log(musbatSonlar); 