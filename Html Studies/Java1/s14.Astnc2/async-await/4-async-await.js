//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asyn hale getirmek icin fonksiyon keyword'nun onune
//* asyn keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.
let hata = false;
const getUsers = async () => {
  try {
    const res = await fetch("https://api.github.com/users");
    if (!res.ok) {
      hata = true;
    //   throw new Error(`Something went wrong: ${res.status}`);
    }
    const data = await res.json();
    updateDom(data);
  } catch (err) {
    console.log(err);
  }finally{
    //* hata = false lazimsa tabi
  }
};

getUsers();

const updateDom = (data) => {
  const userDiv = document.querySelector(".users");
  if (hata) {
    userDiv.innerHTML = `<h1 class="text-danger">Data can not be fetched</h1>
    <img src="./img/404Error.png" alt="">
    `;
    
  } else {
    data.forEach((x) => {
      const { login, avatar_url, html_url } = x;
      userDiv.innerHTML += `<h2 class="text-warning">NAME:${login}</h2>
        <img width="40%" src=${avatar_url} alt=""/>
        <p>${html_url}</p>
        `;
    });
  }
};
