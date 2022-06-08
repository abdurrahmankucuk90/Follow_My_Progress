function calc(a, b, c) {
    if ( b == "-"){
        return a - c
    }
    if ( b == "+"){
        return a + c
    }
    if ( b == "/"){
        return a / c
    }
    if ( b == "*"){
        return a * c
    }
      
    };

console.log((calc(2,"-",5)));
    
const arr1 = [1,2,3,4,5]
const arr2 = []

function numbMaker(a) {
    return parseInt(a.join(""))
}

arr1.push(4)
console.log(arr1, parseInt(arr1.join("")));

const calculator = document.querySelector(".calculator")
const numb = document.querySelector(".numb")
const yellow = document.querySelector(".yellow")
const ac = document.querySelector(".ac")
const screen = document.querySelector(".display h4")

calculator.addEventListener("click", (e) => {
    
})
