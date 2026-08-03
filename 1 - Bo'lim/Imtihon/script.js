// let ball = 75;
//
// if (ball >= 0 && ball <= 59) {
//     console.log("Yiqildi");
// } else if (ball >= 60 && ball <= 70) {
//     console.log("O'rtacha");
// } else if (ball >= 71 && ball <= 80) {
//     console.log("Yaxshi");
// } else if (ball >= 81 && ball <= 90) {
//     console.log("Alo");
// } else if (ball >= 91 && ball <= 100) {
//    console.log("Zo'r");
// } else {
//     console.log("Notogri ball kiritildi");
// }

// ==========================================================

// 1 - 10 gacha bolgan raqamlarning toq sonlarning yigindisini toping ?
//  for(),va while(),va do while(),


// for(let i = 1; i <= 10; i++) {
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
// }
// console.log("===================")
//
// let i = 1;
// while(i <= 10) {
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }
// console.log("===================")
//
// let e = 1;
// do {
//     if(e % 2 !== 0) {
//         console.log(e);
//     }
//     e++;
// } while(e <= 10);
// ===============================================================
// prompt() dan raqam kirit.
// if, else da shu raqamni juft yoki toq ligini tekshiring.
// agar raqam toq bol'sa alert() ga "Bu son toq son " deb chiqarilsin.
// aks xolda alert() ga "Bu son juft" deb chiqarilsin

// let raqam = prompt("Raqam kiriting:");
// if (raqam % 2 === 0) {
//     alert("Bu son juft");
// } else {
//     alert("Bu son toq son");
// }

// ==========================================================
// Shu obj ni pastda berilgan korini'shda ozgatrib beradigan 
// 3 ta Function yarating 3 tasi  xam xar xil Function bo'lsin.

// {
//     name: "WBA",
//     status: "IT"
// };


let obj = {
    name: "Webrain Academy",
    status: "It center",
};

// Function declaration
function malina(obj) {
    return {
        name: "WBA",
        status: "IT",
    };
}
console.log(malina(obj))
console.log("================")
// Function expression 
const qlubnay = function(obj) {
    return{
        name: "WBA",
        status: "IT"
    }
}
console.log(qlubnay(obj))
console.log("================")
// Function Arrow
const olma = (obj) => {
    return {
        name: "WBA",
        status: "IT"
    };
};
console.log(olma(obj));