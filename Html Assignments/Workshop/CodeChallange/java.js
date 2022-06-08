// let word = 'Merhaba'
// let newWord = ''
// for (i = word.length; i>= 0; i--) {
//     newWord += word[i];
    
// };

// console.log(newWord);

// console.log("ali".split("").reverse().join(""))
// console.log(Array.from("ali").reverse().join(""))
// const a = [..."ali"]
// console.log(a.reverse().join(""))

let z = prompt("cumle yazin")
if (z.split(' ') != z) {
    console.log(`${z.split(' ').reverse().join(' ')}`)
} else console.log(z)