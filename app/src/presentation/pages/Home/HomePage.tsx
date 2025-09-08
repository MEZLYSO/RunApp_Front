import useSessionStorage from "../../hooks/useSessionStorage"
import CareerAvailables from "./components/CareerAvailables"
import HeaderWelcome from "./components/HeaderWelcome"

function HomePage() {

  const { userData } = useSessionStorage()

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">

        {/* <!-- Bienvenida --> */}
        <HeaderWelcome name={userData.name} />

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
          <CareerAvailables />

        </section>
        <a href="/user">User</a>
      </div>

    </>
  )
}

export default HomePage
