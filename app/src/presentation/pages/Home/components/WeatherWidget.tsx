import type { Weather } from "../../../../core/entities/weatherInterface"

interface WeatherProps {
  data: Weather
  status: string
}

function WeatherWidget({ data, status }: WeatherProps) {

  return (
    <section className="bg-green-600 text-white rounded-xl shadow-lg p-8 mb-8 flex justify-center items-center">
      {status === "success" ? (
        <div>
          <div className="grid grid-cols-2 max-w-100">
            <div>
              <h2 className="text-lg font-semibold mb-2">Clima actual</h2>
              <p className="text-4xl font-bold">{data.temp}</p>
              <p className="text-[15px] text-green-100">{data.feels}</p>
            </div>
            <div className="flex justify-center items-center">
              <span
                className="text-8xl text-center"
              >{data.icon}</span>
            </div>
          </div>
        </div>) : (
        <p
          className="text-2xl font-bold">Cargando datos...</p>
      )
      }
    </section >
  )
}

export default WeatherWidget
