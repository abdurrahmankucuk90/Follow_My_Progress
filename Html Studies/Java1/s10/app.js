console.log("**** app.js *******");

const dilInput = document.querySelector(".diller");
const silBtn = document.getElementById("sil");
const ekleBtn = document.getElementById("ekle");
const dilSection = document.getElementById("dil-section");

const ul = document.createElement("ul");
dilSection.appendChild(ul);

console.log(dilSection.children[0]);
console.log(dilSection.parentNode.parentNode);

const h1 = ul.closest(".container").firstElementChild; //!butun elementi getiriyor
// const h2 = ul.closest(".container").firstChild //!yazi elementini getiriyor
h1.style.color = "red";

//? Container claasin icerisindeki btn classina ait olan elementleri arar.
const buttons = ul.closest(".container").querySelectorAll(".btn");
console.log(buttons);

ekleBtn.onclick = function () {
  if (!dilInput.value) {
    alert("Lutfen bir dil giriniz");
  } else {
    ul.innerHTML += `<li>${dilInput.value}</li>`;
    dilInput.value = "";
  }
};
silBtn.onclick = function () {
  ul.childElementCount > 0
    ? ul.removeChild(ul.lastElementChild)
    : alert("No list to delete");
};

// const javascriptControl = () => {
//   document.querySelectorAll("ul li").forEach((dil) => {
//     const kucukharf = dil.textContent.toLowerCase();
//     if(kucukharf === "javascript") {
//       dil.className = "red";
//       // dil.setAttribute("class", "red")
//     }
//   });
// };

const javascriptKontrol = () => {
  document.querySelectorAll("ul li").forEach((dil) => {
    const kucukHarf = dil.textContent.toLowerCase();
    if (kucukHarf === `javascript`) {
      // dil.className = 'red';
      dil.setAttribute("class", "red");
      document.querySelector(".red").color = "red";
    }
  });
};
dilInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    ekleBtn.click();
  }
  if (e.code === "Delete") {
    silBtn.click();
  }
});
dilInput.focus();

window.onload = () => {
  dilInput.focus();
};
