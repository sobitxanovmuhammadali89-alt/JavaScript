// for (let i = 1; i <= 20; i++) {
//     if (i % 5 === 0) continue;
//     console.log(i);
// }
// 
// console.log("====================================")
// 
// for (let j = 1; j <= 30; j++) {
//     if (j % 2 === 1) continue;
//     console.log(j)
// }
// 
// console.log("====================================")
// 
// let kopaytma = 1;
// for (let k = 1; i <= 40; k++) {
//     if (k % 3 === 0 && k % 7 === 0) continue;
//     kopaytma *= k;
// }
// console.log(kopaytma)


// console.log("====================================")
// 
// for (let b = 2; b <= 50; b++) {
//     let x = true;
//     for (let n = 2; n < b; n++) {
//         if (b % n === 0) {
//             x = false;
//             break;
//         }
//     }
//     if (x) console.log(b)
// }

//console.log("====================================")
//
//let count = 0;
//for (let i = 1; i <= 50; i++) {
//    count++;
//    if (count === 11) {
//        count = 0;
//        continue;
//    }
//    console.log(i);
//}

// console.log("====================================")
// 
// for (let i = 1; i <= 100; i++) {
//     let sum = 0;
//     for (let k = 1; k < i; k++) {
//         if (i % k === 0) sum += k;
//     }
//     if (i !== sum) continue;
//     console.log(i);
// }

// console.log("====================================")

// function mavzusi
// Argument , Parametr

function xisobla(stop){
    let ty = 0;
    let jy = 0;
    for(let a = 1; a <= stop; a++){
        if(a % 2 === 1) ty+=a
        else jy+=a
    }
    console.log(jy-ty);
}

xisobla(30)
xisobla(20)
xisobla(10)

