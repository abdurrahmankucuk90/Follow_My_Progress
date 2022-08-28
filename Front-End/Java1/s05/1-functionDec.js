console.log("****** FUNC DECLARATION ******")

//Function declaration

//Parametre almamis, birsey dondurmemis (return) void function
// function yazdir() {
//     console.log("Merhaba")
// };
// yazdir();
// yazdir();

// console.log(typeof yazdir());
// console.log(typeof yazdir);

// function selamla(name, lastname = '') {
//     console.log(`Merhaba ${name} ${lastname}`)
// }

// selamla("Erhan", "Yilmaz")
// selamla("Erol")
// selamla("Jason")

//PÅarametreli, donus degerli

// function yasHesapla(yas, name) {
//     let sonuc = 2022 - yas
//     console.log(`${name}'in yasi ${sonuc}dur`)
// };
// yasHesapla(2001, 'Elif')

// function tamyasHesaplama (year, name) {
//     const time = new Date().getTime();
//     // console.log(time)
//     const mesaj = `${name}'in yasi ${new Date().getFullYear() - year} dir.`;
//     return mesaj;
// }
// const mesaj1 = tamyasHesaplama(2001, 'Elif')
// console.log(mesaj1)


// parametreli, Donus degerli

// function tekCift(sayi) {
//     if (sayi % 2) {
//         return 'tek'
//     } else return 'cift'
// };

// console.log(tekCift(20));

function tekCift (number) {
    return number % 2 === 0 ? `${number} is even number` : `${number} is odd number`;     
};

console.log(tekCift(12));

