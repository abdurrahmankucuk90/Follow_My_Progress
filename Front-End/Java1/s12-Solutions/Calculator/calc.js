//* =================================================
//*                     IOS CALCULATOR
//* =================================================
const prevDisp = document.querySelector(".previous-display");
const currDisp = document.querySelector(".current-display");

const btnContainer = document.querySelector(".buttons-container");

let currOperand = "";
let previousOperand = "";
let operation = "";
let equalOrPercentPressed = false;

//? Butonlari tasiyan container icin event tanimlamasi
btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("num")) {
    appendNumber(e.target.textContent);
    updateDisplay();
  }
  if (e.target.classList.contains("operator")) {
    // if (currOperand) {
    //   chooseOperator(e.target.textContent);
    //   updateDisplay();
    // }
    chooseOperator(e.target.textContent);
    updateDisplay();
  }
  if (e.target.classList.contains("equal")) {
    calculate();
    updateDisplay();
    equalOrPercentPressed = true;
  }
  if (e.target.classList.contains("ac")) {
    previousOperand = "";
    currOperand = "";
    operation = "";
    updateDisplay();
  }
  if (e.target.classList.contains("pm")) {
    if (!currOperand) return;
    currOperand *= -1;
    updateDisplay();
  }
  if (e.target.classList.contains("percent")) {
    if (!currOperand) return;
    currOperand /= 100;
    updateDisplay();
    equalOrPercentPressed = true;
  }
});

const appendNumber = (num) => {
  //? Eger ilk olarak  0 girilmisse geri don
  if (currOperand === "0" && num === "0") return;

  if (currOperand === "0" && num !== ".") {
    currOperand = num;
    return;
  }
  if (equalOrPercentPressed) {
    currOperand = num;
    equalOrPercentPressed = false;
    return
  }

  //? Eğer şu anki sayi . ise ve önceki girilen sayi . iceriyorsa geri don
  if (num === "." && currOperand.includes(".")) return;

  if (currOperand.length > 10) return;

  //? Girilen sayilari birlestir.
  currOperand += num;
};

const updateDisplay = () => {
  if (currOperand.toString().length > 11) {
    currOperand = Number(currOperand).toExponential(3);
  }
  currDisp.textContent = currOperand;
  prevDisp.textContent = `${previousOperand} ${operation}`;
};

const chooseOperator = (op) => {
  //?Ilk sayi girisinden sonraki islemleri gerceklestir
  if (previousOperand) {
    calculate();
  }
  //?Degisken swapping
  operation = op;
  previousOperand = currOperand;
  currOperand = "";
};

const calculate = () => {
  let calculation = 0;
  const prev = Number(previousOperand);
  const current = Number(currOperand);

  switch (operation) {
    case "+":
      calculation = prev + current;
      break;
    case "-":
      calculation = prev - current;
      break;
    case "x":
      calculation = prev * current;
      break;
    case "÷":
      calculation = prev / current;
      break;
    default:
      return;
  }
  currOperand = calculation;
  //? Esittire tiklandiginda bunlarin gozukmemesi lazim
  previousOperand = "";
  operation = "";
};
