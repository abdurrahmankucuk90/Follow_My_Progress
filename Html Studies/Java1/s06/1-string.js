//? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// console.log("*********STRING METHODS**********");

// //! Klasik yontem ile string tanimlanirsa bu string bir primitive degiskendir
// const str1 = "Clarusway ";
// const str2 = "Hello ";
// const str3 = "World";

// console.log(typeof str1);

// //!Non primitive String tanimlama
// const str4 = str1 + str2; //*String concat
// console.log(str4);

// //*String concats have more buildin fonctions

// console.log(str4.concat(str3));

// const str5 = new String("Non-Primitibe String");
// console.log(str5, typeof str5);

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string ile kullanılabili r hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//? Ek Açıklama için: https://javascript.info/primitives-methods

//* -------------------------------------------------------------------------------
//* concat() - immutable
//* -------------------------------------------------------------------------------

// const s1 = "Hello ";
// const s2 = "World";
// const s3 = s1.concat(s2);
// console.log(s3);

// console.log(s3.concat(" Clarusway ", str2, "Merhaba"));
// console.log(s2, s3);

//* -------------------------------------------------------------------------------
//* charAt() - indexi getiriyor default is 0
//* -------------------------------------------------------------------------------

// console.log(s3.charAt());
// console.log(s3.charAt(4));
// console.log(s3.charAt(s3.length - 1));

// console.log(s3.charAt(-1));

//* -------------------------------------------------------------------------------
//* includes() -case sensetive
//* -------------------------------------------------------------------------------

// const word = "To be or not to be, that is the question";

// console.log(word.toLowerCase().includes("to be"));
// console.log(word.includes("That")); //!false
// console.log(word.includes("")); //!true
// console.log(word.includes("to be", 13)); //!true 13.indexten itibaren bakiyor
// console.log(word.includes("to be", 14)); //!false 13.indexten itibaren bakiyor

//* -------------------------------------------------------------------------------
//* indexOf(), lastIndexOf()
//* -------------------------------------------------------------------------------

// const tobeIndex = word.indexOf("or");
// console.log(tobeIndex);
// console.log(word.indexOf("be"));
// console.log(word.lastIndexOf("be"));
// console.log(word.lastIndexOf("BE"));

//* -------------------------------------------------------------------------------
//* startsWith(), endWith -case sensetive
//* -------------------------------------------------------------------------------

// const word2 = "Salina salina sinsice !";
// console.log(word2.startsWith("sa")); //!false
// console.log(word2.startsWith("sa", 7)); //!true
// console.log(word2.endsWith("!")); //!true

//* -------------------------------------------------------------------------------
//* replace(searchFor, replaceWith)
//* -------------------------------------------------------------------------------

// let oku = "Oku baban gibi, saf olma";

// console.log(oku.replace("saf olma", "akilli ol"));
// oku = oku.replace("saf olma", "akilli ol");
// console.log(oku);

// //* Detayli degistirme alternatifleri icin regex kullanilabilir
// console.log(oku.replace(/AKILLI/i, "Zeki"));

//* -------------------------------------------------------------------------------
//* slice(beginIndex[, endIndex])
//* substring(beginIndex[, endIndex])
//* substr(depreceated) *kaldiriliyor
//* -------------------------------------------------------------------------------

const veysel = "Uzun ince bir yoldayim yuruyorum gunduz gece..";
const sliced = veysel.slice(33);
console.log(sliced, typeof sliced); //gunduz gece.. string

console.log(veysel.slice(17, 30)); //dayim yuruyor
console.log(veysel.slice(-10)); //duz gece..
console.log(veysel.slice(-23, -19)); //yuru
//! negatif indeks substring ile kullanilimaz
console.log(veysel.substring(17, 30)); //dayim yuruyor

//* -------------------------------------------------------------------------------
//* split([sep [, limit] ] )
//* -------------------------------------------------------------------------------

const tarkan = "Gel gunduzle gece olalim";
const splited = tarkan.split(" "); //bosluklara gore ayirip Array yapti (liste)
console.log(splited, typeof splited);
const gece = splited[2]; // indexleme ile deger okunabilir.
console.log(gece);

const chars = tarkan.split(" ").join("").split("");
console.log(chars);
const copyTarkan = tarkan.split();
console.log(copyTarkan); //*String'i array haline getirdi. (Tek elemanli)

//* ODEV
//* -------------------------------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE
//* Otomatik sekilde uzun linkleri kisa linklere donusturmek istiyoruz.
const link = 'https://www.youtube.com/watch?v=b7vfp5G4brE';

// const kisaLink;

//* -------------------------------------------------------------------------------
//* trim(); basinda ve sonundaki bosluklari kaldiriyor 
//* -------------------------------------------------------------------------------

const ramazan = '     Hos geldin ya sehri Ramazan     '
console.log(ramazan, ":", ramazan.length);
console.log(ramazan.trim(), ":", ramazan.trim().length);


c