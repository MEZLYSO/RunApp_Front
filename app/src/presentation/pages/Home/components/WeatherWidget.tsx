import type { Weather } from "../../../../core/entities/weatherInterface"
import useGeolocation from "../../../hooks/useGeolocation"
import useWeather from "../../../hooks/useWeather"

interface WeatherProps {
  data: Weather
  status: string
}

function WeatherWidget() {
  const { coords, error, loading } = useGeolocation()
  const { data, status, error: errorWeather } = useWeather(coords)

  if (loading) return <h1 className="mb-5 text-bold p-3 shadow-lg rounded-xl text-xl font-bold bg-white">
    Cargando ubicacion... <br />
    <span
      className="bg-green-100 p-1 text-sm font-medium rounded-xl">
      Asegurese de hacer dado permisos de ubicacion</span>
  </h1>
  if (error) return <h1>Error:{error}</h1>

  if (errorWeather) return <h1>Error:{error}</h1>

  return (
    <section className="bg-green-600 text-white rounded-xl shadow-lg p-8 mb-8 flex justify-center items-center">
      <div>
        <div className="grid grid-cols-2 max-w-100">
          {status === "success" ? (
            <>
              <div>
                <h2 className="text-lg font-semibold mb-2">Clima actual</h2>
                <p className="text-4xl font-bold">{data?.temp}</p>
                <p className="text-[15px] text-green-100">{data?.feels}</p>
              </div>
              <div className="flex justify-center items-center">
                <span
                  className="text-8xl text-center"
                >{data?.icon}</span>
              </div>
            </>
          ) : (<h1
            className="text-[20px] font-bold animate-pulse w-full">
            Cargando clima...</h1>)}
        </div>
      </div>
    </section >
  )
}

export default WeatherWidget
