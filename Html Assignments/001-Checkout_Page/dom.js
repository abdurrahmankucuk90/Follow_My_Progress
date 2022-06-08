const inp1 = document.querySelector(".input1");
const plusBtn1 = document.querySelector(".plus1");
const minusBtn1 = document.querySelector(".minus1");
const removeBtn1 = document.querySelector(".remove1");

plusBtn1.addEventListener("click", function () {
  inp1.innerHTML++;
  sonuc();
});

minusBtn1.addEventListener("click", function () {
  inp1.innerHTML--;
  if (inp1.innerHTML <= 0) {
    inp1.innerHTML = 0;
  }
  sonuc();
});
removeBtn1.addEventListener("click", function () {
  return (
    (inp1.innerHTML = 0),
    (removeBtn1.parentElement.parentElement.style.display = "none"),
    sonuc()
  );
});

const inp2 = document.querySelector(".input2");
const plusBtn2 = document.querySelector(".plus2");
const minusBtn2 = document.querySelector(".minus2");
const removeBtn2 = document.querySelector(".remove2");

plusBtn2.addEventListener("click", function () {
  inp2.innerHTML++;
  sonuc();
});

minusBtn2.addEventListener("click", function () {
  inp2.innerHTML--;
  if (inp2.innerHTML <= 0) {
    inp2.innerHTML = 0;
  }
  sonuc()
});
removeBtn2.addEventListener("click", function () {
  return (
    (inp2.innerHTML = 0),
    (removeBtn2.parentElement.parentElement.style.display = "none"),
    sonuc()
  );
});

const inp3 = document.querySelector(".input3");
const plusBtn3 = document.querySelector(".plus3");
const minusBtn3 = document.querySelector(".minus3");
const removeBtn3 = document.querySelector(".remove3");

plusBtn3.addEventListener("click", function () {
  inp3.innerHTML++;
  sonuc()
});

minusBtn3.addEventListener("click", function () {
  inp3.innerHTML--;
  if (inp3.innerHTML <= 0) {
    inp3.innerHTML = 0;
  }
  sonuc()
});
removeBtn3.addEventListener("click", function () {
  return (
    (inp3.innerHTML = 0),
    (removeBtn3.parentElement.parentElement.style.display = "none"),
    sonuc()
  );
});
const price = [inp1, inp2, inp3];
const subtotal = document.querySelector(".subtotal-p");
const tax = document.querySelector(".tax-p");
const shipping = document.querySelector(".shipping-p");
const total = document.querySelector(".total-p");

const sonuc = () => {
  subtotal.innerHTML = (
    25.99 * inp1.innerHTML +
    42.99 * inp2.innerHTML +
    74.99 * inp3.innerHTML
  ).toFixed(2);
  tax.innerHTML = (subtotal.innerHTML * 0.18).toFixed(2);
  if (inp1.innerHTML + inp2.innerHTML + inp3.innerHTML > 0) {
    shipping.innerHTML = 15;
  } else{shipping.innerHTML = 0}
  total.innerHTML = (1 * subtotal.innerHTML + 1* tax.innerHTML + 1* shipping.innerHTML).toFixed(2);
};
