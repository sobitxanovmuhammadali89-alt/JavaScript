let str1 = "JavaScript";
console.log(str1.length);

let str2 = "Frontend";
console.log(str2.length);

console.log(str2.length - 1); 
let str3 = "OpenAI GPT";
if (str3.length > 10) {
  console.log("Uzun");
} else {
  console.log("Qisqa");
}

let str4 = "Backend";
console.log(`Uzunligi: ${str4.length}`);
let str5 = "HTML";
let str6 = "CSS";

if (str5.length > str6.length) {
  console.log(str5);
} else {
  console.log(str6);
}

let str7 = "";
console.log(str7.length);

let str8 = "   Hello   ";
console.log(str8.length);

console.log(str8.trim().length);
let str9 = "Codewars";
for (let i = 0; i < str9.length; i++) {
  console.log(str9[i]);
}

let str10 = "Programming";
console.log(str10[str10.length - 1]);

let str11 = "Java";
console.log(str11[0]);
console.log(str11[str11.length - 1]);