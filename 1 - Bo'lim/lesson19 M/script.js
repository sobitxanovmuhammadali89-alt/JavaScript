const start = 1;
const stop = 30;
let toq = 0;
let juft = 0;
for (let i = start; i <= stop; i += 1) {
  if (i % 2 === 0) juft += i;
  else toq += i;
}
if (toq > juft) console.log("Toq yig'indi katta:", toq);
else if (juft > toq) console.log("Juft yig'indi katta:", juft);
else console.log("Yig'indilar teng:", toq);
