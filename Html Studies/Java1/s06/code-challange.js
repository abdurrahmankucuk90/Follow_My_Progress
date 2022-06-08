let email = "abdurrahmankucuk@hotmail.no";

const deletebosluk = function (x) {
  // x = x.split(" ").join("")
  if (x.includes(" ")) {
    console.log("olmadi");
  } else {
    if (x.includes("@")) {
      if ((x.startsWith("."), x.indexOf("@"))) {
        if (
          x.slice(x.indexOf(".")).length - 1 <= 3 &&
          x.slice(x.indexOf(".")).length - 1 > 0
        ) {
          console.log("oldu");
        } else console.log("olmadi");
      }
    } else console.log("olmadi");
  }
};

deletebosluk(email);
