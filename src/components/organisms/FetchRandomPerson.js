// fetches a user.

export const FetchRandomPerson = async () => {
  // console.log("FetchRandomPerson function triggered...");

  const url = process.env.REACT_APP_PERSON_API_ENDPOINT;
  const response = await fetch(url);
  const data = await response.json();
  let personData = await data.results[0];
  // console.log("personData: ", personData);

  return await personData;
};
