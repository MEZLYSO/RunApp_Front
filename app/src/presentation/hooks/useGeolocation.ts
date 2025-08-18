import { useEffect, useState } from "react"

const useGeolocation = () => {

  const [coords, setCoords] = useState({ lat: 0, lon: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setError("Error en Geolocacion")
      setLoading(false)
    }

    navigator.geolocation.getCurrentPosition((pos) => {
      setCoords({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      })
      setLoading(false)
    }, (error) => {
      setError(error.message)
      setLoading(true)
    },
      { enableHighAccuracy: false }
    )

  }, [])


  return {
    coords,
    loading,
    error
  }
}

export default useGeolocation
