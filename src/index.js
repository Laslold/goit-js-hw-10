import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

import { fetchCountries } from './api/fetchCountries';
import { one, more } from './js';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const searchInputEl = document.querySelector('#search-box');
const viewTextEl = document.querySelector('.country-info');
const listEl = document.querySelector('.country-list');

searchInputEl.addEventListener('input', debounce(countryInput, DEBOUNCE_DELAY));

function countryInput(event) {
  const searchCountry = event.target.value.trim();
  // if (searchCountry === '') {
  //   return;
  // }
  if (!searchCountry) {
    allClear();
    return;
  }
  fetchCountries(searchCountry)
    .then(data => {
      // чистка предыдущих данных
      allClear();
      // console.log(data);
      if (data.length === 0) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        return;
      }

      if (data.length > 10) {
        allClear();
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      if (data.length >= 2) {
        // надо реждерить карточки от 2 до 10
        createCards(data);
        return;
      }
      createOne(data[0]);
      // осталсЯ 1 варинт kartoshka(data[0]) и редрерит
    })
    .catch(error => {
      allClear();
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

function createOne(itemObj) {
  //1 создать шаблон в html
  const el = one(itemObj);
  viewTextEl.insertAdjacentHTML('afterbegin', el);
}
function createCards(itemArr) {
  const elements = itemArr.map(el => {
    return more(el);
  });
  // console.log(elements);
  listEl.insertAdjacentHTML('beforeend', elements.join(''));
  // console.log('создаем много');
  // console.dir(itemArr);
}

function allClear() {
  viewTextEl.innerHTML = '';
  listEl.innerHTML = '';
}
