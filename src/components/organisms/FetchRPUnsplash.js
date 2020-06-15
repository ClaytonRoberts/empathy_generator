import { randNum } from "../molecules/randNum";

export const FetchRPUnsplashWeatherImg = async (
  weatherType,
  weatherDetail,
  country
) => {
  //console.log("weatherType: ", weatherType);

  const url =
    "https://api.unsplash.com/search/photos?page=1&query=" +
    weatherType +
    " " +
    country +
    " " +
    weatherDetail +
    "&client_id=" +
    process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
  const response = await fetch(url);
  const images = await response.json();
  //console.log("images: ", images);
  // console.log("personData: ", personData);
  let aNum = randNum(0, 2);
  // console.log("aNum: ", aNum);
  let imageUrl = images.results[aNum].urls.small; //temp. will change to the url from the fetch

  return await imageUrl;
};
