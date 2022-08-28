const hesapla = function (islem, s1, s2) {
    let sonuc;
    if (islem == "+") {
      sonuc = topla(s1, s2);
    } else if (islem == "-") {
      sonuc = cikar(s1, s2);
    } else if (islem == "*") {
      sonuc = carp(s1, s2);
    } else if (islem == "/") {
      sonuc = bol(s1, s2);
    }
    return sonuc;
  };
  const topla = function (s1, s2) {
    return s1+s2;
  };
  const cikar = function (s1, s2) {
    return s1 - s2;
  };
  const carp = function (s1, s2) {
    return s1 * s2;
  };
  const bol = function (s1, s2) {
    return s1 / s2;
  };
console.log(hesapla('+', 2, 5))