//* ========================================================================================
//*                           **** Array.forEach() method ****
//* ========================================================================================

//!forEacy() methodu dizinin orijinal halini degistirmez

const fiyatlar = [100, 250, 50, 89];

// // function yazdir(value) {
// //     console.log(value);
// // }

// // fiyatlar.forEach(yazdir);

// //! Arrow function kullanilarak cozum
// fiyatlar.forEach((value) => console.log(`your money is ${value}`));

// //* Fiyatlar dizisindekilerin toplamini konsola yazidriniz

// let toplam = 0;
// fiyatlar.forEach((fiyat) => (toplam += fiyat));
// console.log("Toplam:", toplam);

// //! NOT: forEach metodu void bir metottur.
// //! yani herhangi bir deger dondurmez
// // console.log(fiyatlar.forEach((fiyat) => (toplam += fiyat)));

// let toplam1 = 0;

// fiyatlar.forEach((value, index, array) => {
//   toplam1 += value;
//   console.log(`${index}.iterasyon toplami:${toplam1}`);
//   //   array[index] = value + 10;

//   // console.log(fiyatlar);
// });

//*-------------- ÖDEV -------------------
//* fiyatlar dizisinde her bir fiyata %10 zam yapalım.

// fiyatlar.forEach((value, index, dizi) => {
//   dizi[index] = (value * 110) / 100;
//   console.log(fiyatlar);
// });

//* ========================================================================================
//*                           **** array.map() method ****
//* ========================================================================================

const rakamlar = [3, 7, 17, 8, 9, 3, 0];

function katAlinmis(array) {
  return array.map((x) => x * 5);
}

// const katAlinmis = rakamlar.map((x) => x * 5);
console.log(katAlinmis(rakamlar));

const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

console.log(isimler.map((isim) => isim.toLocaleUpperCase()));
console.log(isimler);

const kucukIsimler = isimler.map((isim) => isim.toLocaleLowerCase());
console.log(kucukIsimler);

const euro = 15.93;
const dolar = 17.04;
const tlFiyatlar = [100, 150, 100, 50, 80];

const dolarFiyatlar = tlFiyatlar.map((x) => (x / dolar).toFixed(2));
const euroFiyatlar = tlFiyatlar.map((x) => (x / euro).toFixed(2));
console.log(dolarFiyatlar, euroFiyatlar);

const degerler = tlFiyatlar.map(function (d, i) {
  if (d > 100) {
    return `${i + 1}.urunun fiyati: ${(d * 1.1).toFixed(2)}`;
  } else {
    return `${i + 1}.urunun fiyati: ${(d * 1.15).toFixed(2)}`;
  }
});

console.log(degerler);

//******************  *ORENEK */

const buyukIsimler = isimler.map((isim, i, dizi) => {
  dizi[i] = isim.toLocaleLowerCase(); //!Orijinal diziyi degistirdik.
  return isim.toLocaleUpperCase();
});

console.log(buyukIsimler);

//* ========================================================================================
//*                           **** CHAINING (PIPELINE) ****
//* ========================================================================================

//! Tum isimleri buyuk harfe cevirip konsolda yazdiriniz
isimler
  .map((isim) => isim.toLocaleUpperCase())
  .forEach((name) => console.log(name));

// console.log(isimler
//   .map((isim) => isim.toLocaleUpperCase())
//   .forEach((name) => console.log(name)));

//* map() metodundan sonra eger forEach gibi bir terminal (consumer) islemi kullanilirsa yazilan ifade bir dizi dondurmemis olur.

//! ahmet olanlari secip buyuk harfe cevirip konsolda yazdiriniz
isimler
  .filter((x) => x === "Ahmet".toLocaleLowerCase())
  .map((x) => x.toLocaleUpperCase())
  .forEach((x) => console.log(x));
//! 5 elemanli bir diziyi maplersek 5 elemanli cikar, fakat filterda kriterlere gore eleme yapar

//* fiyatlar array'inda fiyati 250 tl den az olanlari ayri bir diziye saklatyalim.

const kucuk250 = fiyatlar.filter((x) => x < 250);
console.log(kucuk250);

//*-------------- ÖDEV -------------------
//* fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri
//* konsola tek tek bastırınız.

const kucuk90 = fiyatlar.filter((x) => x < 90).forEach((x) => console.log(x));

//* fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere
//*  %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

const fiyatArtis = fiyatlar
  .filter((x) => x < 110)
  .map((x) => (x * 110) / 100)
  .forEach((x) => console.log(x));

//* maaslar 4000'den düsük olanlara %50 zam yapmak istiyoruz
//* ve bunu ayri dizi olarak saklamak istiyoruz.
const maaslar = [3000, 5000, 4000, 6000, 6500];

const maas4000Zam = maaslar
  .filter((x) => x < 4000)
  .map((x) => (x * 150) / 100);
console.log(maas4000Zam);

//* Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari yazdiralim.

const maas4001Zam = maaslar.filter((x) => x > 4000).map((x) => (x*1.25).toFixed(3))
console.log(maas4001Zam);

//* ========================================================================================
//*                           **** Reduce() method ****
//* ========================================================================================

//! Reduce toplam degeri gibi tek bir deger dondurur.

const toplam = maaslar.reduce((t,m) => t+m);
console.log(toplam);

//*maaasi ortalamanin altinda olanlara 20% zam yapalim

const topZam = function name(params) {
  
}