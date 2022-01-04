import { string } from "prop-types"

const WeatherIcon = ({ icon, alt, width, height }) => {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
    />
  )
}

WeatherIcon.propTypes = {
  icon: string.isRequired,
  alt: string.isRequired,
  width: string.isRequired,
  height: string.isRequired,
}

export default WeatherIcon
