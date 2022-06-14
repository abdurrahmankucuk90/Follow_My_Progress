//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? ---------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ---------------------------------------------------------------

const bekle = (ms) => {
  //!blocking-code
  const start = new Date().getTime();
  while (new Date().getTime() < start + ms);
};

// console.log("hello");
// alert("ITF"); //! blocking-code
// console.time("timer")
// bekle(3000);
// console.timeEnd("timer")
// console.log("FS11");

//* Asenkron (setTimeout)
//* ---------------------------------------------------------------

// //! Macro task kuyrugu
// setTimeout( () => {
//     //!Non-Blocking-code
//     console.log("Selemun Aleykum");
// }  ,  1000)

// //! Mikro task kuyrugu
// console.log("Aleykum Selam");
// console.log('merhaba');

// setTimeout( () => {
//     //!Non-Blocking-code
//     console.log("Dostum Naber");
// }  ,  900)

//* Asenkron (setInterval, clearInterval)
//* ---------------------------------------------------------------

let s = 0;
let minutter = 0
// const sec1 = setInterval(()=> {
//     ++s
//     if (s == 60) {
//         s = 0
//         ++minutter
//     }
//     console.log(minutter, s);

// }, 1000)
// console.log("s started");

// const sec1 = setInterval(() => {
//     console.log(++s);
//     if (s > 9){
//         clearInterval(sec1)
//     }
// }, 1000)

// console.log("s ended");


//! Callback Hell (nested ve birbirine bagli callback'ler)
//!-----------------------------------------------------------------
//* Eger birbirine bagimli asenkron kodlarin yazilmasi gerekirse,nested callback
//* yapisinin kullanilmasi gerekebilir. Fakta bu iyi bir programlama yaklasimi degildir.
// !callback hell olarak adlandirilan bu yapinin anlasilmasi ve surdurulebilirligi oldukca zordur.

setTimeout(() => {
    console.log("john:Hi");
    setTimeout(() => {
      console.log("Sarah: Hello");
      setTimeout(() => {
        console.log("John: How Are you?");
        setTimeout(() => {
          console.log("Fine and you?");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);