// 1-misol
let user = {
  fullname: "Anvar",
  level: 2,
  region: "Samarkand"
}

let newUser = {}

for (let key in user) {
  if (typeof user[key] === "number") {
    newUser[key] = user[key] + 5
  } else if (key === "fullname") {
    newUser[key] = "Sardor"
  } else {
    newUser[key] = user[key]
  }
}
console.log(newUser)

// 2-misol
let auto = {
  type: "Sedan",
  cost: 15000,
  make: "Tesla"
}

let autoUpdate = {}

for (let key in auto) {
  if (typeof auto[key] === "number") {
    autoUpdate[key] = auto[key] * 1.5
  } else if (key === "make") {
    autoUpdate[key] = "BYD"
  } else {
    autoUpdate[key] = auto[key]
  }
}
console.log(autoUpdate)

// 3-misol
let worker = {
    fname: "Ali",
    experience: 3,
    status: "active"
}

let workerInfo = {}

for (let key in worker) {
    if (typeof worker[key] === "number") {
        workerInfo[key] = worker[key] + 2
    } else if (key === "fname") {
        workerInfo[key] = "Vali"
    } else {
        workerInfo[key] = worker[key]
    }
}
console.log(workerInfo)

// 4-misol
let gadget = {
    title: "Redmi Note 13",
    color: "blue",
    price: 300,
}

let gadgetRes = {}
for(let key in gadget){
    if(typeof gadget[key] === "number"){
        gadgetRes[key] = gadget[key] / 2
    } else if(key === "color"){
        gadgetRes[key] = "Green"
    } else if(key === "title"){
         gadgetRes[key] = "Redmi Note 14"
    } else {
        gadgetRes[key] = gadget[key]
    }
}
console.log(gadgetRes);

// 5-misol
let house = {
    address: "Tashkent City",
    paint: "yellow",
    square: 100,
}
let houseNew = {}
for(let key in house){
    if(typeof house[key] === "number"){
        houseNew[key] = house[key] * 3
    } else if(key === "paint"){
        houseNew[key] = "gray"
    } else if(key === "address"){
        houseNew[key] = "Nurafshon"
    } else {
        houseNew[key] = house[key]
    }
}
console.log(houseNew);

// 6-misol
let watch = {
    brand: "Apple Watch 9",
    strap: "silicon",
    cost: 450,
}

let watchData = {}
for(let key in watch){
    if(typeof watch[key] === "number"){
        watchData[key] = watch[key] - 50
    } else if(key === "strap"){
        watchData[key] = "leather"
    } else if(key === "brand"){
        watchData[key] = "Apple Watch Ultra"
    } else {
        watchData[key] = watch[key]
    }
}
console.log(watchData);

// 7-misol
let fruit = {
    name: "Banana",
    weight: 10,
    origin: "Ecuador"
}
let fruitBox = {}
for(let key in fruit){
    if(typeof fruit[key] === "number"){
        fruitBox[key] = fruit[key] + 5
    } else if(key === "origin"){
        fruitBox[key] = "Uzbekistan"
    } else if(key === "name"){
        fruitBox[key] = "Apple"
    } else {
        fruitBox[key] = fruit[key]
    }
}
console.log(fruitBox);
