// 1 Savol
let arr = ["Salom", "Gemini", "AI"];
let nearr = arr.join("").split("").reverse("");
console.log(nearr);

// Javob: ["I" , "A" , "i" , "n" , "i" , "m" , "e" , "G" , "m" , "o" , "l" , "a" , "S"]-

// 2 Savol
let str = "Algoritm IT Center";
let javob = "";

for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === char.toUpperCase()) {
        javob +=  char.toLowerCase();
    } else {
        javob += char.toUpperCase();
    }
}
console.log(javob);

// Javob:"aLGORITM it cENTER";

// 3 Savol
let ar1 = [1, 2, 3, 4, 5, 6, 7];
ar1.splice(1 , 5 , 20 , 30 , 40 , 50 , 6)
console.log(ar1);

// shu arrayni kesib oling.
// [1, 20, 30, 40, 50, 6, 7];
// [3, 4, 5];

// 4 Savol
let st = "A2lgo0ri2tm6"; 
let res = ""; 

for (let i = 0; i < st.length; i++) { 
    if (isNaN(st[i])) { 
        res += st[i]; 
    }
} 

console.log(res);   
console.log(2026);  
 

// Javob: "Algoritm"
// Javob: 2026

// 5 Savol
// let m = [198, 5, 27, 4, 18, 44, 72];
// Shu array ning juft sonlarning raqamlari soni nechta?