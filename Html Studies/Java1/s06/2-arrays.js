//? -------------------------------ARRAYS------------------------------------------
//* Array (list), Object (dict), Map, Sets*//

//* -------------------------------------------------------------------------------
//* Dizi Tanimlama
//* -------------------------------------------------------------------------------

//! 1.yontem (Array Literal) -Tercih edilen yontem
const isimler = ["ahmet", "mehmet", "ismet", "saffet"];
console.log(isimler, ":", isimler.length); // 4

//! 2.yontem (Object Constructor)
const diller = new Array("Python", "Java", "C++", "JS", "Go", 10);
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers); // [ 3, 2, 1 ]

const sayilar = new Array(10);
console.log(sayilar); // [ <10 empty items> ]

//* -------------------------------------------------------------------------------
//* Diziden Veri Okuma-Yazma
//* -------------------------------------------------------------------------------

//! Okuma
const java = diller[1];
console.log(java);

//! Yazma
//* const yapisal bir degisiklige izin vermez ama heapteki degisikliklere izin verir
isimler[2] = "Canan";
console.log(isimler);

const yaslar = [22, 18, 15];
const kisiler = ["Ahmet", "Yilmaz", 2022, 2022 - 1990, true, 5.6, yaslar];
console.log(kisiler);
console.log(kisiler[6][1]);

kisiler[6][2] = 16;
kisiler[6][2]++;
++kisiler[6][2];
console.log(kisiler);

const sonYas = ++kisiler[6][1]; //*once kullan sonra arttir yapiyor su anda
console.log(sonYas, kisiler);

//? ===============================================================================
//? Dizi Metotlari (mutator : degistiriyor icerigi)
//? ===============================================================================

//* pop() son elemani siler ve sildigi elemani dondurur
const cars = ["BMW", "Prosche", "Mercedes", "Fiat"];
const deleted = cars.pop();
console.log(cars, "Silinen:", deleted);

//*push() dizinin sonuna eleman ekler ve dizinin son eleman sayisini dondurur.
const added = cars.push("Volvo");
console.log(cars, added); //yeni eleman sayisini gosteriyor

//* unshift() dizinin 0. indexsine yeni eleman ekler ve diszinin son eleman sayisini dondurur
const boyut = cars.unshift("Audi");
console.log(boyut, cars);

//* shift() dizinin 0. index elemanini siler ve silinen elemani dondurur.
const silinen = cars.shift('Not Audi');
console.log(silinen, cars);

//* reverse() Dizinin tamamini ters sirayla cevirir
console.log(cars.reverse());
console.log(cars);

//*sort() Diziyi alfebetik olarak siralar
console.log(cars.sort());

//* sort metodu diziyi iterasyona ugratir ve parametre olarak aldigi arrow fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.
const numbers1 = [3, 5, 1, 10, 30, 55];
console.log(numbers1.sort());

console.log(numbers1.sort((a, b) => a - b));


// cars.splice(3, 0, 'Vosvos', 'not Vosvos')
// console.log(cars);


// cars.splice(0, 3, 'not BMW')
// console.log(cars);

cars.splice(2, 1, 'Anadol')
console.log(cars);

