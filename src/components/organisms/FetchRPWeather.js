// Fetching Weather based off user's location (try city, then state, then country)
// openweathermap.org

export const FetchRPWeather = async (city, state, country) => {
  // console.log("FetchRPWeather function triggered...");

  //common strings
  const wKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  const keyString = "&appid=" + wKey;
  const qUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  const cit = city + "," + country;
  const sta = state;
  const coun = country;

  //try city
  const cityWUrl = qUrl + cit;
  const cityUrlString = cityWUrl + keyString;
  // console.log(urlString);

  const responseCity = await fetch(cityUrlString);
  const dataCity = await responseCity.json();
  var finalData = null;
  // console.log("Weather data: ", data);

  //check to see if response has temp data (rather than 404)
  if (dataCity.cod !== "404") {
    // console.log("city weather found<<<<<", dataCity);
    finalData = dataCity;
  }
  if (dataCity.cod === "404") {
    //try state
    const stateWUrl = qUrl + sta;
    const stateUrlString = stateWUrl + keyString;
    const responseState = await fetch(stateUrlString);
    const dataState = await responseState.json();
    if (dataState.cod !== "404") {
      // console.log("state weather found<<<<<", dataState);
      finalData = dataState;
    }
    if (dataState.cod === "404") {
      // do country
      const countryWUrl = qUrl + coun;
      const countryUrlString = countryWUrl + keyString;
      const responseCountry = await fetch(countryUrlString);
      const dataCountry = await responseCountry.json();
      if (dataCountry.cod !== "404") {
        // console.log("country weather found<<<<<", dataCountry);
        finalData = dataCountry;
      } else {
        // console.log("Weather Location Not Found<<<<<");
        finalData = null;
      }
    }
  }

  // finalData = data;
  // return await data;
  return await finalData;
};
