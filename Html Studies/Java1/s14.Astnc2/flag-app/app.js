//*=========================================================
//*                     FLAG-APP
//*=========================================================

const countriesDiv = document.querySelector(".countries");

const getCountry = async () => {
  const lands = await fetch("https://restcountries.com/v3.1/all");
  if (!lands.ok) {
    renderError(`Something went wrong: ${lands.status}`);
    throw new Error();
  }
  const data = await lands.json();
  const countryNames1 = await data.map(function (item, index) {
    return item["name"].common;
  });
  // console.log(countryNames1);
  const countryNames = countryNames1.sort()
  // console.log(countryNames);
  countryNames.forEach((x) => {
    nameSelector.innerHTML += `<option value=${x}>${x}</option>`
  });
};

const nameSelector = document.querySelector(".nameSelection");
getCountry();

// const a  = <option value="volvo">Volvo</option>

nameSelector.addEventListener("change", (e) => {
  fetchCountry(nameSelector.value)
})

const fetchCountry = async (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      renderError(`Something went wrong: ${res.status}`);
      throw new Error();
    }
    const data = await res.json();
    // console.log(data[0]);
    rederCountry(data[0]);
  } catch (error) {}
};

const renderError = (err) => {
  countriesDiv.innerHTML = `
    <h1 class="text-danger">${err}</h1>
    <img src="./img/404Error.png" alt="">
    `;
};

const rederCountry = (country) => {
  // console.log(country);
  const {
    capital,
    name: { common },
    region,
    flags: { svg },
    languages,
    currencies,
  } = country;
  //   console.log(capital[0], common, region, svg);
  //   console.log(Object.values(languages));
  //   console.log(Object.values(currencies)[0].name);
  //   console.log(Object.values(currencies)[0].symbol);

  countriesDiv.innerHTML = `
<div class="card shadow-lg" style="width: 18rem;">
  <img src="${svg}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${common}</h5>
    <p class="card-text">${region}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i>   ${capital}</li>
    <li class="list-group-item"><i class="fas fa-lg fa-comments"></i>   ${Object.values(
      languages
    )}</li>    
    <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i>   ${
      Object.values(currencies)[0].name
    }, ${Object.values(currencies)[0].symbol} </li>    
  </ul>  
</div>
`;
};

// fetchCountry("turkey");
// fetchCountry("belgium");
// fetchCountry("south africa");
// fetchCountry("norway");
