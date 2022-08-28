// const time = 8;

// if (time < 11) {
//     console.log('Good morning!')
// } else {
//     console.log('Good day!')
// }

// ! If statement example

// console.log('**********\n Season 3\n**********');
// //check if the is positive

// const n1 = prompt('Enter a number: ');

// if(n1 > 0) {
//     console.log(`${n1} is positive`)
// } else if (n1 == 0) {
//     console.log(`${n1} is zero`)
// } else {
//     console.log(`${n1} is negative`)
// };

// console.log('**********\n Season 3\n**********');
// //check if the is positive

// const n1 = +prompt('Enter a number: ');
// console.log(n1, typeof n1);

// if(n1 > 0) {
//     console.log(`${n1} is positive`)
// } else if (n1 == 0) {
//     console.log(`${n1} is zero`)
// } else console.log(`${n1} is negative`);

// const size = +prompt("Enter your chest size");
// if (size < 32) {
//   console.log("Wrong Size");
// } else if (size < 35) {
//   console.log("XS");
// } else if (size < 38) {
//   console.log("S");
// } else if (size < 41) {
//   console.log("M");
// } else if (size < 44) {
//   console.log("L");
// } else if (size < 47) {
//   console.log("XL");
// } else if (size < 50) {
//   console.log("XXL");
// } else {
//   console.log("Wrong Size");

// const n1 = +prompt('number');
// const n2 = +prompt('number');
// const n3 = +prompt('number');

// if (n1 > n2 && n1 > n3) {
//     console.log
// }

// let variable = condition ? true: false

// let grade = prompt('Enter your score');
// let result = grade >= 50 ? 'pass' : 'fail';
// console.log(`You ${result} the exam`)

// const age = 23;

// let result = '';
// // if (age >= 18) {
// //     result = 'you are eligible to vote.';
// // } else {
// //     result = 'You are not aligible to vote yet'
// // }

// result = age >= 18 ? 'You are eligible to vote.' : 'You are not eligible to vote yet';
// console.log(result)

// let canDrive = false;
// const hasDriverLicense = true;
// const hasGoodVision = true;
// const isHandicapped = true;
// const usingRegularCar = false;


// result = hasDriverLicense && hasGoodVision ?
//     (!isHandicapped 
//         ? 'can drive'
//         : (!usingRegularCar 
//             ? 'can drive'
//             : 'cannot drive'
//         )
//         )
//     :'cannot drive';

// console.log(result)

// let text;
// let fruit = prompt('type your favorite fruit');
// //banana, lime, limon, orange, apple, default
// switch (fruit.toLowerCase()) {
//     case 'banana':
//         text = alert('I like Banana')
//         break;
//     case 'lime':        
//     case 'lemon':
//     case 'orange':
//         text = alert(`I am not fan of ${fruit}`)
//         break;
//     case 'apple':
//         text = alert('I like apple')
//         break;
//     default:
//         text = alert('I dont know that fruit');

// }

// console.log(text)

// pazartesi sali carsamba persembe in class
//cuma teamwork
//c.tesi inclass + workshop
//pazar self study
//default yanlis gun girildi

// let text;
// let day = prompt('Which day today?');

// switch(day.toLowerCase()) {
//     case 'pazartesi':
//     case 'sali':
//     case 'carsamba':
//     case 'persembe':
//         text = `${day} gunu in class derslerin var`
//         console.log(text)
//         break;
//     case 'cuma':
//         text = 'friday is Teamwork day'
//         console.log(text)
//         break;
//     case 'cumartesi':
//         text = 'inclass ve workshop'
//         console.log(text)
//         break;
//     case 'pazar':
//         text = 'Self study'
//         console.log(text)
//         break;
//     default:
//         text = `${day} is not a`
//         console.log(text)

// }

//output day count of a month given year 2020 02 ==> 29
//2022 02 ==> 28


const year = +prompt('Write a year');
const month = +prompt('Write a month');
let dayCount;

// switch case

switch(month){

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = '31'
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = '30'
        break
    case 2:
        if (
            (0 == year % 4) && (0 != year % 100) || (0 == year % 400) ) {
                dayCount = 28
            } else dayCount = 29
        break;
    
    default:
        dayCount = 'Something went wrong!!'
}


console.log(dayCount);




