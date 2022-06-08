console.log('****** LOOPS ******')

// for (let i = 1; i<=100; i++) {
//     console.log(`${i} merhaba`)
// }


// Math.floor() asagiya yuvarlar
// Math.ceil() surekli yukari yuvarlar
// Math.round() degerine gore yuvarlar
// Math.trunc() kesirli sayinin tam kismini alir


// for (let i = 1; i <= 10; i++ ) {
    //     const randomSayi = Math.trunc(Math.random() * 100 + 1 );
    //     console.log(randomSayi)
    // }
    // for (let i = 1; i <= 10; i++ ) {
        //     const randomSayi = Math.ceil(Math.random() * 100 + 1 );
        //     console.log(randomSayi)
        // }
        // for (let i = 1; i <= 10; i++ ) {
            //     const randomSayi = Math.ceil(Math.random() * 100 + 1 );
            //     console.log(randomSayi)
// }
// for (let i = 1; i <= 10; i++ ) {
    //     const randomSayi = Math.round(Math.random() * 100 + 1 );
    //     console.log(randomSayi)
    // }
    // for (let i = 1; i <= 10; i++ ) {
    //     const randomSayi = Math.floor(Math.random() * 100 + 1 );
    //     console.log(randomSayi)
    // }
    
//? 1den n kadar sayilari toplayan konu yaziniz

// const n = prompt("n sayisini giriniz: ")
// let toplam = 0;
// for (let i = 1; i <= n; i++) {
    
//     toplam = toplam + i  

// }
// console.log('Toplam:', toplam)


// Örnek: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.


// let i = 1;

// while (i < 10) {
//     console.log(i + "Merhaba");
//     i++;
// }

/***********WHILE***********/

// let i = 1;
// while(i <= 5){
//     console.log('Merhaba');
//     i++;
// }

// let grade = prompt('lütfen notunuzu giriniz (0-100):');

// while (grade < 0 || grade > 100) {
//     alert("Girdiniz not 0-100 arasinda olmalidir");
//     grade = prompt("Lutfen notunuzu giriniz (0-100): ");
// }

// console.log("Girdiginiz not", grade);




//***************DO-WHILE******** once calistir sonra kontrol et*/

// let i = 1;

// do{
//     console.log('Merhaba-', i);
//     i++;
// } while(i<=5);


// let grade;

// do{
//     grade  = prompt('lütfen notunuzu giriniz (0-100):');
//     // alert("Girdiniz not 0-100 arasinda olmalidir");
//     if(grade < 0 || grade > 100) {
//         alert("Girdiniz not 0-100 arasinda olmalidir");
//     }
// } while (grade < 0 || grade > 100);

// console.log("Girdiginiz not", grade);

// klavyeden Q karakteri girilene kadar not girisi yapan bir program dongusu kullaniniz

// let harf;

// while(harf != 'Q') {
//     harf = prompt('harf giriniz')
// }

//? ODEV2: Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

// let can = 5;
// let repeater;
// let rasgele = Math.floor(Math.random() * 100 + 1);
// console.log(rasgele)
// let tahmin;
// while (can != 0) {
//     tahmin = +prompt('bir sayi giriniz');
//     can = can - 1
//     if(tahmin < rasgele) {
//         console.log('kucuk bir sayi girdiniz');
//     } else if(tahmin > rasgele) {
//         console.log('buyuk bir tahmin yaptiniz');
        
//     } else console.log(`tahmininiz ile bizim sayi arasindaki fark ${tahmin-rasgele}`) 
    
// }

let devam;

do{
    let hak = 5;

    const rasgeleSayi = Math.floor(Math.random() * 100 +1);
    console.log(rasgeleSayi);
    do{
        const tahmin = prompt('lutfen 1 ile 100 arasinda bir sayi giriniz: ')
        hak -= 1
        if (tahmin == rasgeleSayi) {
            console.log('you won')
            console.log(`You did it on ${5 - hak}`);
            break
        } else if (tahmin < rasgeleSayi) {
            console.log('Go Higher')
        } else if (tahmin > rasgeleSayi) {
            console.log('Go Lower')
        }
    } while(hak > 0);
    
    if (hak === 0) {
        alert('Uzgunuz oyunu kaybettiniz')
    }
    devam = prompt('Tekrar denemek icin "e" yaziniz');
}while (devam == 'e' || devam == 'E')

console.log('Oyun Bitti')

