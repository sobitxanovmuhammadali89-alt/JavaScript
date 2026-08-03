
let obj = {
    ism: "Eshmat",
    yosh: 20,
    status: "Ishchi",
    manzil: "Toshkent",
}

let obj4 = Object.assign({}, obj)
obj4.ism = "toshmat",
obj4.yosh = 27,
obj4.manzil = "Toshkent"

let obj1 = structuredClone(obj)
obj1.ism = "toshmat",
obj1.yosh = 2,
obj1.manzil = "namangan";
console.log(obj1);
console.log(obj);

// =============================

let ot = {
    name: "Ali",
    age: 25,
    city: "Samarqand"
}

let acer = Object.assign({}, ot)
acer.name = "ali"
acer.age = 35
acer.city = "Toshkent"

let ot1 = structuredClone(ot)
ot1.name = "Vali"
ot1.age = 30
ot1.city = "nama"

console.log(ot1)
console.log(acer)

// =============================

let Uquvchi = {
    name: "Olim",
    age: 22,
    city: "Buxoro"
}

let hp = Object.assign({}, Uquvchi)
hp.name = "olim"
hp.age = 32
hp.city = "Toshkent"

let student1 = structuredClone(Uquvchi)
student1.name = "Vali"
student1.age = 30
student1.city = "namangan"
console.log(student1)
console.log(hp)

// =============================

let Domla = {
    name: "abdulloh",
    age: 22,
    city: "Buxoro"
}

let del = Object.assign({}, Domla) 
del.name = "abdulloh"
del.age = 32
del.city = "Toshkent"

let Domla1 = structuredClone(Domla)
Domla1.name = "Vali"
Domla1.age = 30
Domla1.city = "namangan"
console.log(Domla1)
console.log(del)

// =============================

let mom = {
    name: "abdullox",
    age: 35,
    city: "Toshkent"
}

let dell = Object.assign({}, mom)
dell.name = "abdumalik"
dell.age = 45
dell.city = "Samarqand"

let mom1 = structuredClone(mom)
mom1.name = "ali"
mom1.age = 40
mom1.city = "namangan"
console.log(mom1)
console.log(dell)

// =============================

let Mersedec = {
    brand: "Chevrolet",
    model: "Cobalt",
    year: 2022
}

let bmw = Object.assign({}, Mersedec)
bmw.brand = "BMW"
bmw.model = "X5"
bmw.year = 2023

let Mersedec1 = structuredClone(Mersedec)
Mersedec1.brand = "Mercedes"
Mersedec1.model = "Class"
Mersedec1.year = 2024
console.log(Mersedec1)
console.log(bmw)

// =============================

let Samsung = {
    brand: "Apple",
    model: "iPhone 13",
    year: 2023
}

let samsung = Object.assign({}, phone)
samsung.brand = "Samsung"
samsung.model = "Galaxy S23"
samsung.year = 2024

let phone1 = structuredClone(phone)
phone1.brand = "Xiaomi"
phone1.model = "Redmi 12"
phone1.year = 2025
console.log(phone1)
console.log(samsung)

// =============================

let boll = {
    city: "Toshkent",
    grads: 30,
    quyosh: "bor"
}

let boll1 = Object.assign({}, boll)
boll1.city = "Samarqand"
boll1.grads = 35
boll1.quyosh = "yoq"

let boll2 = structuredClone(boll)
boll2.city = "Buxoro"
boll2.grads = 25
boll2.quyosh = "bor"
console.log(boll1)
console.log(boll2)

// ============================

let hafta = {
    Dush: "Dushanba",
    sesh: "Seshanba",
    chors: "Chorshanba",
    paysh: "Payshanba",
    juma: "Juma",
    shan: "Shanba",
    yak: "Yakshanba"
}

let hafta1 = Object.assign({}, hafta)
hafta1.Dush = "seshanba"
hafta1.sesh = "payshanba"
hafta1.chors = "juma"
hafta1.paysh = "yakshanba"
hafta1.juma = "shanba"
hafta1.shan = "chorshanba"
hafta1.yak = "dushanba"


let hafta2 = structuredClone(hafta)
hafta2.Dush = "yakshanba"
hafta2.sesh = "shanba"
hafta2.chors = "juma"
hafta2.paysh = "payshanba"
hafta2.juma = "chorshanba"
hafta2.shan = "seshanba"
hafta2.yak = "dushanba"
console.log(hafta1)
console.log(hafta2) 