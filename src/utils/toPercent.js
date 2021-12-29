const toPercent = (float, decimalPlaces) => {
  return `${(float * 100).toFixed(decimalPlaces)}%`;
};

export default toPercent;
