import { useEffect, useState } from "react"
import useSWRImmutable from "swr/immutable"
import fetcher from "../../utils/fetcher"

const useGeocoding = (city) => {
  const { data, error, isValidating, mutate } = useSWRImmutable(
    `http://api.openweathermap.org/geo/1.0/direct?limit=1&q=${city}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_API_KEY
    }`,
    fetcher
  )

  const [timeoutError, setTimeoutError] = useState(null)

  useEffect(() => {
    if (data && !data?.[0] && !error && !isValidating) {
      const error = new Error("Failed to retrieve coordinates.")
      error.status = 404
      setTimeoutError(error)
    } else setTimeoutError(null)
  }, [data, error, isValidating])

  return { location: data?.[0], error: error || timeoutError, mutate }
}

export default useGeocoding
