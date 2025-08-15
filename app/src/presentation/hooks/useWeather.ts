import { useQuery } from "@tanstack/react-query"
import { fetchWeatherByCoord } from "../../data/services/weatherServices"
import { useState } from "react"

const useWeather = () => {

  const [latLon, setLatLon] = useState({ lat: 0, lon: 0 })
  const [enableGeolocation, setEnableGeolocation] = useState(false)

  const setCoord = async () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatLon({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        })
      })
      return await fetchWeatherByCoord(latLon)
    } else {
      return await fetchWeatherByCoord({ lat: 0, lon: 0 })
    }
  }

  const { data, status } = useQuery({
    queryKey: ['weather'],
    queryFn: setCoord,
    refetchInterval: 5000,
    enabled: latLon.lat !== 0 && latLon.lon !== 0

  })

  return {
    data,
    status,
    latLon,
    enableGeolocation
  }
}

export default useWeather
