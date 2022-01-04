const toPercent = (float, decimalPlaces) => {
  return Math.round((float * 100).toFixed(decimalPlaces)) + "%";
};

export default toPercent;
