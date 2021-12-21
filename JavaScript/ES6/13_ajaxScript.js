let loadCountries = () => {
  let url = "https://api.openaq.org/v1/countries";

  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url, true);
  xhttp.send();

  xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      const countries = JSON.parse(xhttp.response).results;
      let countriesHTMLTemplate = countries
        .map((country) => {
          // return "<p> Name : "+country.name+ "and Code : "+country.code;
          return `<p> Name : ${country.name} and Code : ${country.code}`;
        })
        .join("");

      let countriesDiv = document.getElementById("countriesDiv");
      countriesDiv.innerHTML = countriesHTMLTemplate;
      // console.log(countries);
    }
  };
};
