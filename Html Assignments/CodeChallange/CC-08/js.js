//*0. Array 34444185856.join("")
//*1. ile basamak 0 mi?
//*2. 11 hanelimi?
//*3. hepsi digit mi?
//*4.
let a = document.querySelector("#idCheck");
a.value = "53963153566"
  const arrTC = a.value.split("");
  let cToplam = 0;
  let tToplam = 0;
  for (let i = 0; i < 9; i++) {
    if (i % 2 == 0) {
      tToplam += +arrTC[i];
    } else {
      cToplam += +arrTC[i];
    }
  }
  if (
    !isNaN(a.value) &&
    arrTC[0] == 0 &&
    arrTC.length == 11 &&
    (tToplam * 7 - cToplam) % 10 == arrTC[9] &&
    (tToplam + cToplam + ((tToplam * 7 - cToplam) % 10)) % 10 == arrTC[10]
  ) {
    console.log("valid");
  }
// let a;

//* (arrTC[0],[2],[4],[6],[8] * 7 - [1],[3],[5],[7]).split("")[-1]
const button = document.querySelector(".btn");
button.addEventListener("click", (e) => {
  e.preventDefault()
  let a = document.querySelector("#idCheck");
  const arrTC = a.value.split("");
  let cToplam = 0;
  let tToplam = 0;
  for (let i = 0; i < 9; i++) {
    if (i % 2 == 0) {
      tToplam += +arrTC[i];
    } else {
      cToplam += +arrTC[i];
    }
  }
  if (
    !isNaN(a.value) &&
    arrTC[0] == 0 &&
    arrTC.length == 11 &&
    (tToplam * 7 - cToplam) % 10 == arrTC[9] &&
    (tToplam + cToplam + ((tToplam * 7 - cToplam) % 10)) % 10 == arrTC[10]
  ) {
    return console.log("valid");
  }
  
});

// console.log(onbirBasamak);

// console.log((tToplam));
// console.log((cToplam));

// function check() {

//   let numericMi = !isNaN(a);
//   let ilkBasamak = arrTC[0] == 0 ? false : true;
//   let onBirDigit = arrTC.length == 11 ? true : false;
//   let cToplam = 0;
//   let tToplam = 0;
//   // console.log(arrTC[9]);
//   for (let i = 0; i < 9; i++) {
//     if (i % 2 == 0) {
//       tToplam += +arrTC[i];
//     } else {
//       cToplam += +arrTC[i];
//     }
//   }
//   let oncuBasamak = (tToplam * 7 - cToplam) % 10 == arrTC[9];
//   let onbirBasamak =
//     (tToplam + cToplam + ((tToplam * 7 - cToplam) % 10)) % 10 == arrTC[10];
//   if (numericMi && ilkBasamak && onBirDigit && oncuBasamak && onbirBasamak) {
//     console.log("your ID is valid");
//   } else console.log("your ID is not valid");
// }
