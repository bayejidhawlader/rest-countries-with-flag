const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  console.log(countries);
  const coutriesHTML = countries.map((country) => getCountryHtml(country));
  //   console.log(coutriesHTML);
  const container = document.getElementById("countries");
  container.innerHTML = coutriesHTML.join(" ");
};

// Option 02
const getCountryHtml = ({ name, flags, area, region }) => {
  return `
    <div class="country">
        <h2>${name.common}</h2>
        <img src="${flags.png}">
        <p>Area: ${area} </p>
        <p>Region: ${region}</p>
    </div>
    `;
};

// Original
// const getCountryHtml = (country) => {
//     return `
//       <div class="country">
//           <h2>${country.name.common}</h2>
//           <img src="${country.flags.png}">
//       </div>
//       `;
// };

// Option 01
// const getCountryHtml = (country) => {
//     // Option 1
//     const { name, flags } = country;
//     return `
//       <div class="country">
//           <h2>$.name.common}</h2>
//           <img src="${flags.png}">
//       </div>
//       `;
//   };

loadCountries();
