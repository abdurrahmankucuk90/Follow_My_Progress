// const taxRate = 0.18;
// const shippingPrice = 15.0;

window.addEventListener("load", () => {
  calculateCartTotal();
  //!Browserin storagi bu
  //*en ust seviye global storage
  //   localStorage.setItem("taxRate", taxRate);
  //   localStorage.setItem("shippingPrice", shippingPrice);
  //* kullanici kapatinca vb item kayboluyor
  //   sessionStorage.setItem("taxRate", taxRate);
  //   sessionStorage.setItem("shippingPrice", shippingPrice);
});

//*CAPTURING METHOD
//!.className'de butun class isimlerini yazmak gerekiyor
let productsDiv = document.querySelector(".products");
productsDiv.addEventListener("click", (e) => {
  if (e.target.className == "minus") {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
      //!parameter == productInfoDiv
      calculateProductAndCartTotal(e.target.parentElement.parentElement);
    } else {
      if (confirm("Product will be deleted?")) {
        e.target.parentElement.parentElement.parentElement.remove();
        calculateCartTotal();
      }
    }
    // console.log("minus button clicked");
  } else if (e.target.classList.contains("plus")) {
    e.target.previousElementSibling.innerText++;
    calculateProductAndCartTotal(e.target.parentElement.parentElement);
    // console.log("plus button clicked");
  } else if (e.target.classList.contains("remove-product")) {
    e.target.parentElement.parentElement.parentElement.remove();
    calculateCartTotal();
    // console.log("remove button clicked");
  } else {
    // console.log("Other elements clicked");
  }

  // console.log(e.target);
});

//* calculate cart and product totals

const calculateProductAndCartTotal = (productInfoDiv) => {
  //   console.log(productInfoDiv);
  let price = productInfoDiv.querySelector("strong").innerText;

  let quantity = productInfoDiv.querySelector("#product-quantity").innerText;

  let productTotalDiv = productInfoDiv.querySelector(".product-line-price");

  productTotalDiv.innerText = (price * quantity).toFixed(2);

  calculateCartTotal();
};

//* calculate cart totals

const calculateCartTotal = () => {
  let productsTotalPriceDivs = document.querySelectorAll(".product-line-price");

  let subtotal = 0;
  productsTotalPriceDivs.forEach((eachProductTotalDiv) => {
    subtotal += parseFloat(eachProductTotalDiv.innerText);
  });

  let taxPrice = subtotal * localStorage.getItem("taxRate");

  let shippingPrice =
    subtotal > 0 ? parseFloat(localStorage.getItem("shippingPrice")) : 0;

  let cartTotal = parseFloat(subtotal + taxPrice + shippingPrice);

  document.querySelector("#cart-subtotal p:nth-child(2)").innerText =
    subtotal.toFixed(2);

  document.querySelector("#cart-tax p:nth-child(2)").innerText =
    taxPrice.toFixed(2);

  document.querySelector("#cart-shipping p:nth-child(2)").innerText =
    shippingPrice;

  document.querySelector("#cart-total p:nth-child(2)").innerText =
    cartTotal.toFixed(2);

  // console.log(taxPrice);
  // console.log(productsTotalPriceDivs);
};
