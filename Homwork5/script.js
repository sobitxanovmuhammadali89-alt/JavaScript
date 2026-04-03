const savol = "Malibu";
const color = "red";

if (typeof prompt === 'undefined' || typeof alert === 'undefined') {
    globalThis.prompt = (msg) => {
        console.log(msg);
        
        return "1886";
    };
    globalThis.alert = (msg) => console.log("ALERT:", msg);
}

 switch (savol) {
   case "Nexia":
      console.log("Siz Xato Javob Kritdingiz");
      break;
   case "Cobalt":
      console.log("Siz Hato javob krdingiz")
      break;
   case "Damas":
      console.log("Siz hato javob kritdingiz")
      break;
   case "Malibu":
      console.log("Siz tugri javob kritdingiz javob Malibu edi") 
      break;
 }

      
 switch (color) {
   case "red":
      console.log("Bu rang qizil bu rang olmaga oxshaydi");
      break;
    case "green":
        console.log("Bu rang yashil bu rang archaga oxshaydi")
      break;
   case "yellow":
      console.log("Bu rang sariq bu rang quyoshga oxshaydi")
      break;
   case "black":
      console.log("Bu rang qora bu rang soyaga oxshaydi") 
      break;
 }

let yil = Number(prompt("Karl Benz birinchi avtomobilni nechanchi yilda ixtiro qilgan?"));

if (yil === 1886) {
    alert("Barakalla! Bu tarixiy yil.");
} else if (yil > 1886 && yil < 1900) {
    alert("Yaqin keldingiz, lekin biroz kechroq aytdingiz.");
} else {
    alert("Noto'g'ri. To'g'ri javob: 1886-yil.");
}


let yoqdimi = prompt("Sizga Mercedes-Benz yoqadimi? (ha/yo'q)");

yoqdimi === "ha" 
    ? alert("Siz haqiqiy komfort ishqibozisiz!") 
    : alert("Demak, siz BMW muxlisidirsiz? :)");


let tanlov = prompt("Qaysi klass haqida ma'lumot kerak? \n A, C, E, S");

switch (tanlov.toUpperCase()) {
    case "S":
        alert("S-Class: Bu eng hashamatli sedan.");
        break;
    case "G":
    case "GELIK":
        alert("G-Class: Bu afsonaviy yo'ltanlamas.");
        break;
    case "E":
        alert("E-Class: Biznes klass vakili.");
        break;
    default:
        alert("Bizda hozircha bu model haqida ma'lumot yo'q.");
}

let mashina = prompt("Mercedes-Benz 'Banan' modelining asl nomi nima?");

switch (mashina) {
    case "CLS":
    case "cls":
    case "Cls":
    case "Cls-class":
        alert("To'g'ri javob! Bu mashhur 'Banan' modeli.");
        break;
    default:
        alert("Noto'g'ri javob. To'g'ri javob: CLS");
}

let otKuchi = Number(prompt("G63 modelida necha ot kuchi bor? (Masalan: 585)"));
otKuchi >= 585 
    ? alert("Dahshatli quvvat!") 
    : alert("Bu model uchun bu kamlik qiladi.");
     