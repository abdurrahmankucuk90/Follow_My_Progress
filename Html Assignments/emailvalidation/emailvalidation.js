// const obj = {
//   a: 5,
//   b: 7,
//   c: 8,
// };

// console.log(obj.a);

// console.log(document.getElementById("emailvalid"));
const userinput = document.getElementById("emailvalid");
const output = document.getElementById("demo");

// console.log(document.getElementsByTagName("h1")[0].innerHTML);
// console.log(userinput);


const RegexPattern = /^[a-z-A-Z0-9\_\-]+\@[a-zA-Z]+\.+[a-zA-Z]{2,3}$/

userinput.addEventListener("focus", () => {
    if (userinput.value === "") {
        output.innerHTML = "Enter your email"
        output.style.color = "grey"
    }
})

userinput.addEventListener("keyup", () => {
    // console.log(userinput.value);
    // console.log(RegexPattern.test(userinput.value));
    if(RegexPattern.test(userinput.value)) {
        output.innerHTML = "your email is valid"
        output.style.color = "green";
    }  else{
        output.innerHTML = "your mail is not valid"
        output.style.color = "red"
    }
})


