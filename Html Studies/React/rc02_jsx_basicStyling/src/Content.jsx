//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.

//? Dahili resim eklemek icin import yapmak gerekiyor.
import img2 from "./img/tulip-flowers-4762986_1920.jpg";
import "./Content.css";

const Content = () => {
  const imgStyle = {
    width: "300px",
    display: "block",
    margin: "1rem, auto",
  };
  return (
    <div className="content">
      {/* Inline Style */}
      <h2 className="h2comp" style={{ color: "red" }}>
        React JS
      </h2>
      <p style={{ backgroundColor: "lightgreen" }}>
        React, kullanici arabirimi tasarlamak icin kullanilan bir JS
        kutuphanesidir.
      </p>
      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2018/04/22/15/02/siberian-squill-3341288_960_720.jpg"
        alt=""
      />
      <img src={img2} style={imgStyle} alt="img2" />
      <p className="par-1" style={{ color: "red" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        voluptatem atque et culpa optio ipsa, magni tempore officia quibusdam
        eum ad incidunt. Optio eligendi libero facere qui hic magnam itaque
        suscipit, quam neque sapiente commodi quisquam. Suscipit illo fugiat
        officia saepe doloribus, quidem odit perferendis veniam harum amet,
        ducimus culpa?
      </p>
    </div>
  );
};

export default Content;
