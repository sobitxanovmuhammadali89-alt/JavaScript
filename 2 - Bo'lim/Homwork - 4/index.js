// =====================
// Math
// =====================

// Math.abs()
console.log(Math.abs(-15));
console.log(Math.abs(-100));

// Math.floor()
console.log(Math.floor(5.9));
console.log(Math.floor(9.99));

// Math.ceil()
console.log(Math.ceil(5.1));
console.log(Math.ceil(8.01));

// Math.round()
console.log(Math.round(4.4));
console.log(Math.round(4.6));

// Math.trunc()
console.log(Math.trunc(8.99));
console.log(Math.trunc(-6.75));

// Math.random()
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));

// Math.min()
console.log(Math.min(4, 8, 2, 9));
console.log(Math.min(15, 20, 7));

// Math.max()
console.log(Math.max(4, 8, 2, 9));
console.log(Math.max(15, 20, 7));

// Math.pow()
console.log(Math.pow(2, 5));
console.log(Math.pow(3, 4));

// Math.sign()
console.log(Math.sign(-25));
console.log(Math.sign(40));

// Math.sqrt()
console.log(Math.sqrt(81));
console.log(Math.sqrt(49));

// Math.cbrt()
console.log(Math.cbrt(27));
console.log(Math.cbrt(125));


// =====================
// Methods
// =====================

// toString()
let num = 150;
console.log(num.toString());

let age = 18;
console.log(age.toString());

// toFixed()
let pi = 3.14159;
console.log(pi.toFixed(2));

let price = 99.999;
console.log(price.toFixed(1));

// parseInt()
console.log(parseInt("250px"));
console.log(parseInt("99.8"));

// parseFloat()
console.log(parseFloat("25.75kg"));
console.log(parseFloat("10.99"));

// isNaN()
console.log(isNaN("Hello"));
console.log(isNaN(123));

// isFinite()
console.log(isFinite(100));
console.log(isFinite(Infinity));

// Object.is()
console.log(Object.is(5, 5));
console.log(Object.is(NaN, NaN));