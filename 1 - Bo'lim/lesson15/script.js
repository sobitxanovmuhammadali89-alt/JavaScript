// let obj = {
//     ism: "Hayotbek",
//     Familiya: "Saidahmadov",
//     yosh: 14,
//     kurs: "Frontend"
// };

// 1. static
// obj.ism = "Azizbek";
// obj.familiya = "Abdukarimov";
// obj.yosh = 15;
// obj.kurs = "JavaScript";;
// console.log(obj)

// 2. dinamic
// obj["ism"] = "Muboshir";
// obj["Familiya"] = "Xojiyev";
// obj["yosh"] = 12;
// obj["kurs"] = "Uqimaydi";
// console.log(obj);

// let obj = {
//     ism: "Hayotbek",
//     Familiya: "Saidahmadov",
//     yosh: 14,
//     kurs: "Frontend"
// };
// 
// for(let i in obj){
//     console.log(i, obj[i])
// }

//  let laptop = {
//      name: "Dell XPS",
//      country: "USA",
//      price: 1000,
//  };
//
//   let newlaptop = {};
//   for (let key in laptop){
//       if (typeof laptop [key] === "number")
//       newlaptop [key] = laptop[key] / 2;
//   } else {
//       newlaptop [key] = laptop[key];
//   }
//   console.log(newlaptop);
//
// let laptop = {
//       name: "Dell XPS",
//       country: "USA",
//       price: 1000,
//       chip: "M5"
//   };
// 
// laptop.price = 500;
// laptop.chip = "m2";
// console.log(laptop.price);
// 




let obj = {
    nomi: "Iphone 17 pro max",
    color: "Black",
    price: 1800
};
let newObj = {};
for(let key in obj) {
   if(typeof obj[key] === "number") {
    newObj[key] = 2000
   } else if (key === "nomi") {
    newObj[key] = "Iphone 18 pro max" 
   } else if (key === "color") {
    newObj[key] = "BlueViolet"
   } 

    
} console.log(newObj)
