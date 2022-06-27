//* ======================= HOOKS ==============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmedlir. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://reactjs.org/docs/hooks-rules.html
//* ==============================================================

import { useState } from "react";

const UseStateExample = () => {
  //* useState Bir state in degisken,
  //* ve obje ile kutlanilabilmesine olanak saglar
  //? useState hook'u 2 deger dondurur.

  //? 1. si state degiskenidir.
  //? 2. si ise state"i degistirmeye izin veren bir setter metodudur.
  //? useState parametre olarak state'in ilk degerini alir.
  const [count, setCount] = useState(0); //!Array destructure
  const [info, setInfo] = useState({
    name: "Ahmet Yilmaz",
    email: "aygmail.com",
    age: 32,
  });
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const incAge = () => {
    // setInfo(info.age = info.age + 1)
    setInfo({name:"Ahmet Yilmaz", email:"aygmail.com", age: info.age + 1})
    // setInfo({...info, age:info.age + 1})
  }

  return (
    <div className="container text-center mt-4">
      <section>
        <h1 className="display-4 text-danger m-4">useState COUNT = {count} </h1>
        <button onClick={inc} className="btn btn-success">
          INC
        </button>
        <button onClick={() => setCount(0)} className="btn btn-danger">
          CLR
        </button>
        <button onClick={dec} className="btn btn-warning">
          DEC
        </button>
      </section>
      <hr /><br /><hr />

      <section>
        <h1 className="display-4 text-danger m-4">useState OBJECT</h1>
        <h2>{info.name}</h2>
        <h3>{info.email}</h3>
        <h3>{info.age}</h3>
        <button onClick={incAge} className="btn btn-info">IncAge</button>
      </section>
    </div>
  );
};

export default UseStateExample;
