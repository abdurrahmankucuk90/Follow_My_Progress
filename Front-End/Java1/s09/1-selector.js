//* =====================================================
//*                     DOM SELECTORS
//* ======================================================

console.log("***** SELECTORS *****");

// document.getElementById('header').style.color = 'red';
// document.getElementById('header').style.backgroundColor = 'blue';

// console.log(document.getElementsByClassName('par'));
// console.log(document.querySelector('.par'));  //* ilk geleni getiriyor bir tane
// console.log(document.querySelectorAll('.par')[0]);  //* Hepsini getiriyor
//* =====================================================
//*                     getElementById()
//* ======================================================

//* EXAMPLE-1 (Paragraph )
//*-------------------------------------------------------
const header = document.getElementById("header");
console.log(header);

header.style.color = "red";

//* EXAMPLE-1 (button sytle )
//*-------------------------------------------------------

const button = document.getElementById("button");
button.style.backgroundColor = "black";
button.style.color = "yellow";
button.style.width = "100px";
button.style.fontSize = "2rem";

//* =====================================================
//*                     getElementByTagName()
//* ======================================================

//* EXAMPLE-1 (img)
//*-------------------------------------------------------

const img = document.getElementsByTagName("img");

console.log(img);

img[0].style.border = "solid";
img[0].style.borderColor = "blue";
img[0].style.borderRadius = "300px";
img[0].style.transform = "rotate(-20deg)";

//* =====================================================
//*                     getElementsByClassName()
//* ======================================================
//* EXAMPLE-1 (par)
//*-------------------------------------------------------

const par = document.getElementsByClassName("par");
par[0].textContent = "DOM Manipulasyonu";
// par[0].innerText = 'DOM Manipulasyonu'
par[0].innerHTML +=
  '<hr><a href="https://www.clarusway.com" target="_blank">Clarusway</a>'; //! innerHTML link vb de koyabilir.

//* =====================================================
//*                     quarySelector()
//* ======================================================

document.querySelector("title").textContent = "JS09 DOM😢";

const myPars = document.querySelectorAll("p");  //!class ise . ile id ise # ile
console.log(myPars); 
myPars.forEach((p) => console.log(p.textContent));  //!Bosluklari almaz
myPars.forEach((p) => console.log(p.innerText)); //! bosluk ve paragraflarida aliyor

const myPars1 = document.getElementsByClassName('par');
console.log(myPars);  //? HTML Collection
const myParsArray = Array.from(myPars1) //?Array.from ile diziye cevrildi. artik array fonksiyonlarini kullanabiliyoruz.
console.log(myParsArray[0].innerHTML);

//? spead /rest
// [...myPars1].forEach

//!quarySelector ile CSS vari secim yapmak mumkundur.
console.log(document.querySelector('section p a'));