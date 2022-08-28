console.log('app.js is running');

// let ad = prompt('Adinizi girin');

// let sonuc = confirm("Emin misiniz");

// console.log(sonuc);

/* console.log('adiniz : ' + ad + ' dir');
console.log(`adiniz : ${ad} dir`);
 */

var myNumber1 = 5;
console.log(myNumber1);

var myNumber1 = 'merhaba';

console.log(myNumber1);

let var1 = 55;
console.log(var1);

/* let var1 = 99;
console.log(var1) */

const var2 = 55;
console.log(var2);


{
    let localVar2 = 'local variable';
    var myName = 'matthw'
    console.log(localVar2)
}
// console.log(localVar2) tanimli degil artik
console.log(myName);  //var ile tanimlandigi icin disarida da gozukuyor

// ! const konusu

const student = {

    firstName: 'Can',
    number: "F1234"
};

console.log(student);

const otherStudent = student;

console.log(otherStudent)

otherStudent.number = 'F9876';  //icerikte bir nesneyi degistirabiliyoruz

console.log(student);

otherStudent = {

    firstName: 'Sinan',
    number: 'F3456'

};  //Kutunun kendisi degismiyor
console.log(otherStudent);