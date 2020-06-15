//SessionModel includes background changes that may occur without the user realizing

import { action } from "easy-peasy";

const sessionModel = {
  //Variables
  randomPersonObject: null,
  weatherObject: null,
  unsplashImage: null,
  loadingRandomPerson: false,
  loadingWeather: true,

  //Actions
  updateRandomPersonObject: action((state, payload) => {
    state.randomPersonObject = payload;
  }),
  updateWeatherObject: action((state, payload) => {
    state.weatherObject = payload;
  }),
  updateUnsplashImage: action((state, payload) => {
    state.unsplashImage = payload;
  }),
  updateLoadingRandomPerson: action((state, payload) => {
    state.loadingRandomPerson = payload;
  }),
  updateLoadingWeather: action((state, payload) => {
    state.loadingWeather = payload;
  }),
};

export default sessionModel;
