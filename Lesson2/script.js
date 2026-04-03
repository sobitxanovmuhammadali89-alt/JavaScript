// Data types - Ma'lumot turlari.

//                                           PRIMITIVE
//                                    1. string
//                                    2.number
//                                    3.bigint
//                                    4.boolean
//                                    5.undefined
//                                    6.null
//                                    7.symbol


//                                           NONPRIMITIVE
//                                     1.Object --> {}
//                                     2. Array --> []
//                                     3.Function --> function funcNomi(){  code...  }



//  console.log("Muhammadali *-* qondaysiz bratim")

//Type convirisions bir datatype malumotni boshqa bir data type ga ozgarib ketishini aytiladi
// % --> qoldiqli bulish
// () --> qavisning amalni brinchi ishlatish uchun ishlatiladi
//++ --> oshirirp beradi
//-- --> 1 qadam ayiradi
// * --> daraja vazifasini bajaradi

// Ниже — упражнения по теме "как в уроке". Для каждой темы по 5 примеров.
// Запустите `node script.js` чтобы увидеть результаты в консоли.

console.log('\n=== Type conversions (5 examples) ===');
// 1) Явное преобразование string -> number
console.log('1) Number("123") =>', Number('123'));
// 2) Number -> string
console.log('2) String(456) =>', String(456));
// 3) Boolean -> number
console.log('3) Number(true) =>', Number(true));
// 4) parseInt / parseFloat
console.log('4) parseInt("12px") =>', parseInt('12px'), ', parseFloat("3.14px") =>', parseFloat('3.14px'));
// 5) Неявное преобразование (операция - и +)
console.log('5) "5" - 2 =>', '5' - 2, ', "5" + 2 =>', '5' + 2);

console.log('\n=== Operator + (5 examples) ===');
console.log('1) 2 + 3 =>', 2 + 3);
console.log('2) "5" + 3 =>', '5' + 3, ' (конкатенация)');
console.log('3) 5 + true =>', 5 + true, ' (true -> 1)');
console.log('4) "a" + 1 =>', 'a' + 1);
console.log('5) 0.1 + 0.2 =>', 0.1 + 0.2, ' (погрешность плавающей точки)');

console.log('\n=== Operator - (5 examples) ===');
console.log('1) 5 - 2 =>', 5 - 2);
console.log('2) "5" - 2 =>', '5' - 2, ' ("5" -> 5)');
console.log('3) "10" - "4" =>', '10' - '4');
console.log('4) true - false =>', true - false);
console.log('5) "a" - 1 =>', 'a' - 1, ' (NaN)');

console.log('\n=== Operator * (5 examples) ===');
console.log('1) 3 * 4 =>', 3 * 4);
console.log('2) "5" * 2 =>', '5' * 2);
console.log('3) 2 * "3px" =>', 2 * '3px', ' (NaN)');
console.log('4) 0 * Infinity =>', 0 * Infinity, ' (NaN)');
console.log('5) 0.2 * 3 =>', 0.2 * 3, ' (погрешность)');

console.log('\n=== Operator / (5 examples) ===');
console.log('1) 10 / 2 =>', 10 / 2);
console.log('2) "9" / 3 =>', '9' / 3);
console.log('3) 1 / 0 =>', 1 / 0, ' (Infinity)');
console.log('4) 0 / 0 =>', 0 / 0, ' (NaN)');
console.log('5) 7 / 2 =>', 7 / 2);

console.log('\n=== Operator % (Modulo) (5 examples) ===');
console.log('1) 10 % 3 =>', 10 % 3);
console.log('2) 15 % 5 =>', 15 % 5);
console.log('3) -7 % 3 =>', -7 % 3, ' (в JS знак результата = знак делимого)');
console.log('4) 5.5 % 2 =>', 5.5 % 2);
console.log('5) Проверка чётности: 7 % 2 =>', 7 % 2, ', 8 % 2 =>', 8 % 2);

console.log('\n=== Parentheses () and precedence (5 examples) ===');
console.log('1) 2 + 3 * 4 =>', 2 + 3 * 4, ', (2 + 3) * 4 =>', (2 + 3) * 4);
console.log('2) (5 - 2) * (3 + 1) =>', (5 - 2) * (3 + 1));
console.log('3) 10 - (2 + 3) =>', 10 - (2 + 3));
console.log('4) -(2 + 3) =>', -(2 + 3));
console.log('5) 2 + 3 ** 2 =>', 2 + 3 ** 2, ', (2 + 3) ** 2 =>', (2 + 3) ** 2);

console.log('\n=== Assignment = and compound assignments (5 examples) ===');
let a = 5;
console.log('1) let a = 5 =>', a);
// 2) присваивание с вычислением
a; // no-op to keep linter quiet if any
let b = 2;
b; // no-op
a = a + 3;
console.log('2) a = a + 3 =>', a);
// 3) compound assignment
let c = 10;
c;
c += 5; // c = c + 5
console.log('3) c += 5 =>', c);
// 4) chain assignment (внимание: справа-налево)
let d, e;
d = e = 7; // e и d получают 7 (e - глобальная если без let; здесь объявлены)
console.log('4) d = e = 7 => d:', d, ', e:', e);
// 5) комбинирование с другими операциями
let f = 4;
f *= 2 + 1; // f = f * (2 + 1)
console.log('5) f *= 2 + 1 =>', f);

console.log('\n=== Increment/Decrement ++ / -- (5 examples) ===');
let x = 1;
console.log('1) x = 1; console.log(x++) =>', x++ , ', now x =>', x);
let y = 1;
console.log('2) y = 1; console.log(++y) =>', ++y, ', now y =>', y);
let p = 2;
console.log('3) p = 2; console.log(p--) =>', p--, ', now p =>', p);
let q = 2;
console.log('4) q = 2; console.log(--q) =>', --q, ', now q =>', q);
// 5) ++ on non-number (string)
let s = '5';
console.log('5) s = "5"; ++s =>', ++s, ' (строка неявно преобразуется в число)');

console.log('\n=== Exponentiation ** (5 examples) ===');
console.log('1) 2 ** 3 =>', 2 ** 3);
console.log('2) 5 ** 2 =>', 5 ** 2);
console.log('3) (2 + 3) ** 2 =>', (2 + 3) ** 2);
console.log('4) 2 ** -1 =>', 2 ** -1);
console.log('5) 10 ** 3 =>', 10 ** 3);

console.log('\n=== End of exercises ===\n');

