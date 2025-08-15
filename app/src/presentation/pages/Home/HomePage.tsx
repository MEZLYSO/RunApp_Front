import { useEffect } from "react";
import WeatherWidget from "./components/WeatherWidget";
import useWeather from "../../hooks/useWeather";

function HomePage() {

  const { data, status } = useWeather()


  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">

        {/* <!-- Bienvenida --> */}
        <header className="bg-white rounded-xl shadow p-6 mb-6 flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Bienvenido <span className="text-green-600">Mauricio</span>
          </h1>
        </header>

        {/* <!-- Banner clima --> */}
        <WeatherWidget data={data!} status={status} />

        {/* <!-- Carreras --> */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* <!-- Carreras inscritas --> */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Carreras inscritas</h3>
            <ul className="space-y-3">
              <li className="p-4 bg-gray-50 rounded-lg shadow-sm">Maratón Ciudad 2025</li>
              <li className="p-4 bg-gray-50 rounded-lg shadow-sm">Carrera Nocturna 10K</li>
            </ul>
          </div>

          {/* <!-- Carreras disponibles --> */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Carreras disponibles</h3>
            <ul className="space-y-3">
              <li className="p-4 bg-gray-50 rounded-lg shadow-sm flex items-center justify-between">
                Carrera de la Primavera
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm">Inscribirse</button>
              </li>
              <li className="p-4 bg-gray-50 rounded-lg shadow-sm flex items-center justify-between">
                Medio Maratón Playa
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm">Inscribirse</button>
              </li>
            </ul>
          </div>

        </section>

      </div>

    </>
  )
}

export default HomePage
