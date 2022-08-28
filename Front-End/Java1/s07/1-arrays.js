// const sayilar = [-5, 15, 22, -4, 45, 78, -25];
// let sonuc = 0;
// for (let i in sayilar) {
//     sonuc += sayilar[i]
// }
// console.log(sonuc);

//! for i in x pythondaki gibi ama for of Map vb de kullanilabiliyor

console.log();
("******************************* LOOPS IN ARRAYS*****************************");

const islemler = [-3000, 4500, -2200, -6000, 9000];
let yatirma = 0;
let cekme = 0;
const islemlerToplami = () => {
  for (let i = 0; i < islemler.length; i++) {
    if (islemler[i] >= 0) {
      yatirma += islemler[i];
    } else {
      cekme += islemler[i];
    }
  }
  return `Toplam Yatirma: ${yatirma}, Toplam Cekme: ${cekme * -1}`;
};

console.log(islemlerToplami());

//* =========================================================================================
//*                                         FOR-IN LOOP
//* =========================================================================================

const ogrenciler = [
  "ahmet",
  "mehmet",
  "ismet",
  "saffet",
  "ahmet",
  "nur",
  "can",
  "nur",
  "mehmet",
  "cem",
];

const ogrenciBul = function (isim) {
  let sayac = 0;
  for (let i in ogrenciler) {
    if (ogrenciler[i].toLocaleLowerCase() === isim) {
      sayac++;
    }
  }
  if (sayac == 0) {
    return `${isim} bulunamadi`;
  } else {
    return `${isim}, ${sayac} adet bulundu`;
  }
};

let ogrIsim = "Nur".toLowerCase();

console.log(ogrenciBul(ogrIsim));

//* =========================================================================================
//*                                         FOR-IN LOOP
//* =========================================================================================

const ogrenciBulForOf = function (isim) {
  let sayac = 0;
  for (let ogr of ogrenciler) {
    ogr === isim && sayac++; //!Shortcut yontemi short-circuiting else durumu yok
    // ogr === isim || sayac--; //!Shortcut yontemi olumsuz durum icin
    // ogr === isim ? sayac++ : null; //!Ternary
  }
  return !sayac ? `${isim} bulunamadi` : `${isim}, ${sayac} adet bulundu`;
//   return sayac === 0 ? `${isim} bulunamadi` : `${isim}, ${sayac} adet bulundu`;
//   return sayac ?  `${isim}, ${sayac} adet bulundu`:`${isim} bulunamadi`;
};

let ogrName = "caner".toLowerCase();

console.log(ogrenciBulForOf(ogrName));





