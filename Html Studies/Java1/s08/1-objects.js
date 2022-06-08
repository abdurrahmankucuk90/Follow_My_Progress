//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sıralı bellek bölgeleridir. Dolayısıyla bu
//? bölgelere indeksleme ile erişebiliriz.
//? Ancak daha karmaşık veri yapısı (unstructured)ihtiyaçalrımız
//? için Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapısı kullanılır.
//? Herhangi bir veriyi erişmemk için property (key) adı kullanılır.

console.log("******* Objects *********");

//! 3 farkli yontem ile Object olusturulabilir

//* ===================================================
//*     1-Object() class'inda new Operatoru ile
//* ===================================================

const araclar = new Object();

araclar.marka = "BMW";
araclar.motor = 1.3;
araclar.model = 2022;

console.log(araclar);
console.log(araclar.motor); //? '.' koyup valueya ulasabiliriz.
console.log(araclar["model"]);

//* ---------------------------------------------------------
//* 2- object constructor'ı kullanarak (OOP ile ayrıntılandırılacak)
//* ---------------------------------------------------------

//* Object constructor
function Personel(id, ad, maas) {
  this.perId = id;
  this.perAdi = ad;
  this.perMaas = maas;
  console.log(this); //! Personel objesine bağlanmıştır (binded)
}

const ahmet = new Personel(101, "Ahmet", 75000);
const canan = new Personel(102, "Canan", 85000);
console.log(ahmet, canan);
console.log(canan.perMaas);
console.log(ahmet.perAdi);
console.log(this); //! window objesine bağlanmıştır

//* ---------------------------------------------------------
//* 3- object literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------

const calisan = {
  ad: "Ahmet",
  soyad: "Yilmaz",
  yas: 30,
  is: "developer",
  diller: ["C", "C++", "Pyton", "JS"],
  maas: 120000,
};

console.log(calisan);
console.log(calisan.yas);
console.log(calisan.diller);
console.log(calisan.diller[3]);

calisan.konum = "Norway";
calisan.email = "ahmet@gmail.com";
calisan["dogum"] = 1990;
console.log(calisan);
const isci = calisan;
//isci.maas = 50000  //! ikisinde de maasi degistirdi, referans aktarimi oluyor, adresin kendisi degisti
console.log(isci, calisan);

//* ---------------------------------------------------------
//*                     Object Metotlari
//* ---------------------------------------------------------

//!Objelere, Nesnelere, Claslara ait yontemlere metod denir

const kisi = {
  ad: "Can",
  soyad: "Canan",
  dogum: 1990,
  melsek: "developer",
  ehliyet: true,
  yasHesap: function () {
    return new Date().getFullYear() - this.dogum;
  },
  ozet: function () {
    return `${this.ad}, ${this.yasHesap()} yasindadir`;
  },
  //   ozet: () => {
  //     return `${kisi.ad}, ${kisi.yasHesap()} yasindadir`;
  //   },
};

console.log("YAS:", kisi.yasHesap());
console.log("BILGI:", kisi.ozet());

//! NOT: arrow fonksiyonları farklı amaç için geliştirilmiş fonksiyonlarıdır
//! ve lexical context'e sahiptirler. Dolayısıyla, bir arrow fonk. içerisinde
//! this kelimesi kullanılrsak beklenmeyen sonuclar alabiliriz.
//! Çünkü, arrow içerisindeki this kelimesi global scope'u gösterir. (window nesnesini) gösterir.
//! Bunu engellemek için object fonskyionlarını tanımlamak için normal fonksiyon  yöntemlerini kullanmak gerekir.

//* ---------------------------------------------------------
//*                     Object Iteration
//* ---------------------------------------------------------

//?Nested Objects

// const kisiler = [
//   {
//     ad: "Ahmet",
//     soyad: "Yilmaz",
//     yas: 30,
//     is: "developer",
//     diller: ["C", "C++", "Pyton", "JS"],
//     maas: 120000,
//   },
//   {
//     ad: "Mehmet",
//     soyad: "Yilmaz",
//     yas: 24,
//     is: "developer",
//     diller: ["C", "C++", "Pyton", "JS"],
//     maas: 100000,
//   },
// ];
const kisiler = [
  {
    name: "Ahmet",
    surname: "Can",
    job: "developer",
    age: 30,
  },
  {
    name: "Mehmet",
    surname: "Baki",
    job: "tester",
    age: 35,
  },
  {
    name: "Nur",
    surname: "Ersan",
    job: "team lead",
    age: 40,
  },
  {
    name: "Merve",
    surname: "Veli",
    job: "developer",
    age: 26,
  },

  {
    name: "Ruzgar",
    surname: "Kuzey",
    job: "tester",
    age: 24,
  },
];

console.log(kisiler);
console.log(kisiler[4]);

//*Ornek1: kisiler dizisindeki job'lari tek tek yazdiriniz
kisiler.forEach((kisi) => console.log(kisi.name));
//*Ornek2: yaslari bir artirarak yeni bir diziye saklayiniz.
const artYas = kisiler.map((kisi) => {
  return ++kisi.age;
});

console.log(artYas);

//* Ornek3: name ve surname'leri birlestirip buyuk harfe ceviren ve
//* bunu name key'i olarak saklayan, aynı zamanda age degerlerini 5
//* arttırarak age key'ine saklayan ve oluşan diziyi döndüren kodu yazınız.

const kisilerFullName = kisiler.map((kisi) => ({
  fullname: kisi.name.toUpperCase() + " " + kisi.surname.toUpperCase(),
  age: kisi.age + 5,
}));
console.log(kisilerFullName);
// console.log(kisiler);

//* Ornek4: Yasi(Age) 33den kucuk olan kisilerin adlarini (name) listeleyiniz.

const ortYas1 = kisiler.filter((kisi) => kisi.age>33).map((x) => x.name)
console.log(ortYas1);

//* Ornek5: 33 yasindan kücüklerin isimlerini diziye saklayiniz.

//* Ornek6: Meslegi developer olanlarin isim ve yaslarini yeni bir Obje olarak
//* yeni diziye saklayiniz.

const kisilerJob = kisiler.filter((kisi) => kisi.job == 'developer').map((kisi) => ({
    name: kisi.name,
    age: kisi.age
}))
console.log(kisilerJob);


//* Ornek7: kisilerin ortalama yasini hesaplayiniz.

const ortYas = kisiler.reduce((t,kisi) => t + kisi.age,0) / kisiler.length
console.log('ORT YAS:', ortYas);
