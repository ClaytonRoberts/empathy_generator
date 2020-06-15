// This component unites all the fetchers into one, and is called in the MainPage.

import React, { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { FetchRandomPerson } from "./FetchRandomPerson";
import { FetchRPWeather } from "./FetchRPWeather";
import { tempCalc } from "../molecules/tempCalc";
import { timeCalc } from "../molecules/timeCalc";

import { FetchRPUnsplashWeatherImg } from "./FetchRPUnsplash";
import {
  AppLayout,
  Background,
  Person,
  Weather,
  PersonImage,
  UnsplashImage,
} from "../molecules/style";

const FetchUniter = () => {
  //easy-peasy reading redux state
  const randomPersonObject = useStoreState(
    (state) => state.sessionState.randomPersonObject
  );
  const weatherObject = useStoreState(
    (state) => state.sessionState.weatherObject
  );
  const unsplashImage = useStoreState(
    (state) => state.sessionState.unsplashImage
  );

  //easy-peasy action implementations
  const updateRandomPersonObject = useStoreActions(
    (actions) => actions.sessionState.updateRandomPersonObject
  );
  const updateWeatherObject = useStoreActions(
    (actions) => actions.sessionState.updateWeatherObject
  );
  const updateUnsplashImage = useStoreActions(
    (actions) => actions.sessionState.updateUnsplashImage
  );

  useEffect(() => {
    // console.log("FetchUniter useEffect Triggered.");

    FetchRandomPerson().then((value) => {
      // console.log("Person value.... ", value);

      updateRandomPersonObject(value);

      const city = value.location.city;
      const state = value.location.state;
      const country = value.location.country;
      FetchRPWeather(city, state, country).then((data) => {
        updateWeatherObject(data);
        const weatherType = data.weather[0].main;
        const weatherDetail = data.weather[0].description;
        FetchRPUnsplashWeatherImg(weatherType, weatherDetail, country).then(
          (res) => {
            // console.log("unsplash res: ", res);
            updateUnsplashImage(res);
          }
        );
      });
    });
  }, [updateRandomPersonObject, updateWeatherObject, updateUnsplashImage]); //"If we pass an empty array, the effect will only run on first render." //TODO: added the objects per warning, but unsure if I should... Read useEffect docs to figure out.

  const person = randomPersonObject;
  const weather = weatherObject;

  return (
    <Background>
      <AppLayout>
        <Person>
          {!randomPersonObject ? (
            <div>loading person...</div>
          ) : (
            <div>
              <div>
                <strong>
                  {person.name.first} {person.name.last}
                </strong>
              </div>

              <PersonImage src={person.picture.large} alt="user_medium" />
              <div>{person.gender}</div>

              <div>
                {person.location.city}, {person.location.country}
              </div>
            </div>
          )}
        </Person>
        <br />
        <br />
        <Weather>
          {!weatherObject ? (
            <div>loading weather...</div>
          ) : (
            <div>
              {weather.cod !== "404" ? (
                <div>
                  <h4>{person.name.first}'s Current Weather</h4>
                  <div>
                    <small>{timeCalc(weather.timezone)}</small>
                  </div>
                  <img
                    src={
                      "http://openweathermap.org/img/wn/" +
                      weather.weather[0].icon +
                      "@2x.png"
                    }
                    alt="weather icon"
                  />
                  <div>Description: {weather.weather[0].description}</div>
                  <div>Temperature: {tempCalc(weather.main.temp)}&deg; F</div>
                  <div>Humidity: {weather.main.humidity} %</div>
                </div>
              ) : (
                <div>weather not found...</div>
              )}
            </div>
          )}
          <div>
            {!unsplashImage ? (
              <div>loading image...</div>
            ) : (
              <div>
                <UnsplashImage src={unsplashImage} alt="weather view" />
              </div>
            )}
          </div>
        </Weather>
      </AppLayout>
    </Background>
  );
};
export default FetchUniter;
