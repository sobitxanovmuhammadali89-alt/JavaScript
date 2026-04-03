// if , else if , else
    
// 1. if - shart yoziladi va if blokida boshida faqat 1 marta ishlatiladi. 

// 2. else if - shart yoziladi va if blokida ko'p marta ishlatiladi.

let vaqt = 1;
if (vaqt >= 1 && vaqt <= 2) {
    console.log("Siz chaqaloqsiz");
}

if (vaqt >= 22.00 && vaqt <= 6.59) {
    console.log("Siz uhlayapsiz");
} else if (vaqt >= 7.00 && vaqt <= 17) {
    console.log("Siz ishda ishlayapsiz");
} else if (vaqt >= 18.00 && vaqt <= 19) {
    console.log("Siz oyga ketiyabsiz");
} else if (vaqt >= 20.00 && vaqt <= 21.59) {
    console.log("Siz ovaqtlanayapsiz yoki ovaqatlanbulip utiripsiz");
} else if (vaqt >= 60) {
    console.log("Siz juda ko'p vaqt o'qiysiz");
}                                                                                                                        


const mondaySchedule = [
    { time: "01:00", action: "Uxlash" },
    { time: "07:00", action: "Uyg'onish va nonushta" },
    { time: "08:00", action: "Kursda (dars boshlanishi)" },
    { time: "10:00", action: "Dars tugaydi, uyga ketish" },
    { time: "11:00", action: "Tushlik/abed" },
    { time: "11:30", action: "Dars/uy vazifalari (11:30–13:00)" },
    { time: "13:00", action: "Dokon (do'kon)ni tekshirish" },
    { time: "14:00", action: "Ish boshlash" },
    { time: "23:00", action: "Uyga qaytish (dodomlar bilan)" }
];


console.log("--- Dushanba jadvali ---");
mondaySchedule.forEach(item => console.log(item.time + " — " + item.action));


