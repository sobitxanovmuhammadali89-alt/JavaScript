// Umumiy ozgaruvchilar
let son1 = 40;
let son2 = 10;

// ==========================================
// 1. FUNCTION DECLARATION (10 ta)
// ==========================================

function yigindiHisobla(a, b) { return a + b; }
console.log(yigindiHisobla(son1, son2));

function ayirmaHisobla(a, b) { return a - b; }
console.log(ayirmaHisobla(son1, son2));

function kopaytmaHisobla(a, b) { return a * b; }
console.log(kopaytmaHisobla(son1, son2));

function bolinmaHisobla(a, b) { return a / b; }
console.log(bolinmaHisobla(son1, son2));

function qoldiqHisobla(a, b) { return a % b; }
console.log(qoldiqHisobla(son1, son2));

function kvadratiniTop(a) { return a * a; }
console.log(kvadratiniTop(son1));

function kubiniTop(a) { return a ** 3; }
console.log(kubiniTop(son2));

function ortachaQiymat(a, b) { return (a + b) / 2; }
console.log(ortachaQiymat(son1, son2));

function tengmi(a, b) { return a === b; }
console.log(tengmi(son1, son2));

function yuzaHisobla(a, b) { return a * b; }
console.log(yuzaHisobla(son1, son2));


// ==========================================
// 2. FUNCTION EXPRESSION (10 ta)
// ==========================================

const darajaHisob = function(a, b) { return a ** b; };
console.log(darajaHisob(son1, son2));

const kattasiniTop = function(a, b) { return a > b ? a : b; };
console.log(kattasiniTop(son1, son2));

const kichiginiTop = function(a, b) { return a < b ? a : b; };
console.log(kichiginiTop(son1, son2));

const foiziniTop = function(a, b) { return (a * b) / 100; };
console.log(foiziniTop(son1, son2));

const juftmi(a) { return a % 2 === 0; };
console.log(juftmi(son1));

const toqmi(a) { return a % 2 !== 0; };
console.log(toqmi(son1));

const musbatmi = function(a) { return a > 0; };
console.log(musbatmi(son1));

const manfiymi = function(a) { return a < 0; };
console.log(manfiymi(son1));

const perimetrHisob = function(a, b) { return 2 * (a + b); };
console.log(perimetrHisob(son1, son2));

const ildizHisob = function(a) { return a ** 0.5; };
console.log(ildizHisob(son1));


// ==========================================
// 3. ARROW FUNCTION (10 ta)
// ==========================================

const ikkiBaravar = (a) => a * 2;
console.log(ikkiBaravar(son1));

const uchBaravar = (a) => a * 3;
console.log(uchBaravar(son1));

const yarmiHisob = (a) => a / 2;
console.log(yarmiHisob(son1));

const beshniQosh = (a) => a + 5;
console.log(beshniQosh(son1));

const onniAyir = (a) => a - 10;
console.log(onniAyir(son1));

const oxirgiRaqam = (a) => a % 10;
console.log(oxirgiRaqam(son1));

const yuzniQosh = (a) => a + 100;
console.log(yuzniQosh(son1));

const aylanaUzunligi = (a) => 2 * 3.14 * a;
console.log(aylanaUzunligi(son2));

const yigindiKvadrati = (a, b) => (a + b) ** 2;
console.log(yigindiKvadrati(son1, son2));

const ayirmaKvadrati = (a, b) => (a - b) ** 2;
console.log(ayirmaKvadrati(son1, son2));
