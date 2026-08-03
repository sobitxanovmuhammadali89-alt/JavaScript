// 1-mashq:
let pi = 3.14159;
console.log(pi.toFixed(2)); // Javob: "3.14"

// 2-mashq:
let narx = 10.5;
console.log(narx.toFixed(3)); // Javob: "10.500"

//==============
// 1-mashq:
let balandlik = "180px";
console.log(Number.parseInt(balandlik)); // Javob: 180

// 2-mashq:
let yosh = "32 yosh";
console.log(Number.parseInt(yosh)); // Javob: 32

// 1-mashq:
console.log(Math.round(4.7)); // Javob: 5

// 2-mashq:
console.log(Math.round(4.2)); // Javob: 4

// 1-mashq:
console.log(Math.ceil(6.1)); // Javob: 7

// 2-mashq:
console.log(Math.ceil(-3.9)); // Javob: -3

// 1-mashq:
console.log(Math.floor(8.9)); // Javob: 8

// 2-mashq:
console.log(Math.floor(-5.1)); // Javob: -6


// ==========================================

// 1-mashq:
console.log(Math.random()); 

// 2-mashq:
let tasodifiy = Math.floor(Math.random() * 10) + 1;
console.log(tasodifiy); 

// 1-mashq (Math.min):
console.log(Math.min(12, 5, 8, 45, 2)); // Javob: 2

// 2-mashq (Math.max):
console.log(Math.max(12, 5, 8, 45, 2)); // Javob: 45


function multipleOfIndex(array) {
  let result = [];
  
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      // 0-indeksdagi element faqat 0 bo'lsa natijaga qo'shiladi
      if (array[i] === 0) {
        result.push(array[i]);
      }
    } else if (array[i] % i === 0) {
      result.push(array[i]); 
    }
  }
  
  return result;
}


