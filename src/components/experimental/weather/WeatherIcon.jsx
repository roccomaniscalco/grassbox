import Image from "next/image";

const WeatherIcon = ({ iconCode, width, height }) => {
  return (
    <Image
      src={`https://openweathermap.org/img/wn/${iconCode}@4x.png`}
      layout="fixed"
      width={width}
      height={height}
    />
  );
};

export default WeatherIcon;
