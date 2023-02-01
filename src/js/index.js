export const one = obj => {
  const { flags, name, capital, population, languages } = obj;
  return `<div class="country-info">
        <div class="country-info--header">
            <img src="${flags.svg}" alt="Country flag" width="60", height="35">
            <h2 class="country-info--name"> ${name.common}</h2>
        </div>
            <p class="country-info--field">Capital: <span class="country-value">${capital}</span></p>
            <p class="country-info--field">Population: <span class="country-value">${population}</span></p>
            <p class="country-info--field">Languages: <span class="country-value">${Object.values(
              languages
            ).join(', ')}</span></p>
    </div>`;
};

export const more = obj => {
  const { flags, name } = obj;
  return `<li class="country-list--header">
  <img src="${flags.svg}" alt="Country flag" width="60", height="35">
  <h2 class="country-list--name"> ${name.common}</h2>
</li>`;
};
