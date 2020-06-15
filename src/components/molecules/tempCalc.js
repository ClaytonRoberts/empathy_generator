export const tempCalc = (kelvin) => {
  //   let celc = Math.round(kelvin - 273.15);

  let fahr = Math.round((kelvin - 273.15) * 1.8 + 32);

  let temp = fahr;

  return temp;
};
