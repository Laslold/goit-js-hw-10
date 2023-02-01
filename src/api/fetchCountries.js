const BASE_URL = 'https://restcountries.com/v3.1/name/';
export function fetchCountries(path = '') {
  return fetch(BASE_URL + path).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}
