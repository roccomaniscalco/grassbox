import Image from "next/image";
import { string } from "prop-types";

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

WeatherIcon.propTypes = {
  icon: string.isRequired,
  alt: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
};

export default WeatherIcon;
