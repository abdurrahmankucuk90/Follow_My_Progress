//*============================================================
//**********************EVENTS********************************/
//*============================================================

//!1.Yontem

//!2.Yontem: addEventListener()
document.querySelector("#header").addEventListener("mouseover", function () {
  document.getElementById("header").style.transform = "rotate(-20deg)";
  document.getElementById("header").style.transition = "all 1s";
});
document.querySelector("#header").addEventListener("mouseout", function () {
  document.getElementById("header").style.transform = "rotate(0deg)";
  document.getElementById("header").style.transition = "all 1s";
});

//? Metod 3 (only)

const myImg = document.querySelector("img");
myImg.addEventListener("mouseover", () => {
  myImg.style.transform = "scale(.5)";
  myImg.style.transition = "all 1s";
});
myImg.addEventListener("mouseout", () => {
  myImg.style.transform = "scale(1)";
  myImg.style.transition = "all 1s";
});

//* Example (Button)

// const myImg1 = document.querySelector("#img");
// const button = document.querySelector("#button");
// button.addEventListener("click", () => {
//   myImg1.style.transform = "translateY(15px)";
// });
// button.addEventListener("click", () => {
//   myImg1.style.transform = "translateY(-15px)";
// });

const button = document.querySelector("#button");

button.addEventListener("click", function () {
  document.querySelector("body").style.backgroundImage = "linear-gradient(to right, purple, yellow)";
});

button.addEventListener('click', function() {
    document.querySelector("body").style.backgroundColor = "none";
})

// const img = document.querySelector("img");

// let toggler = false;
// const imgResize = () => {
//   if (!toggler) {
//     toggler = true;
//     img.style = `
//         width:30rem;
//         height:30rem;
//         `;
//   } else {
//     toggler = false;
//     img.style = null;
//   }
// };
// img.addEventListener("click", imgResize);
