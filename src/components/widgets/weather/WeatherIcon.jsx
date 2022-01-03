import Image from "next/image";

const WeatherIcon = ({ icon, alt, width, height }) => {
  return (
    <Image
      src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
      alt={alt}
      layout="fixed"
      width={width}
      height={height}
    />
  );
};

export default WeatherIcon;
