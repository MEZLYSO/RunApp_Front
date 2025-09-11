import { Toaster } from "react-hot-toast"
import useCareer from "../../hooks/useCareer"
import useSessionStorage from "../../hooks/useSessionStorage"
import CareerAvailables from "./components/CareerAvailables"
import CareerEnrolled from "./components/CareerEnrolled"
import HeaderWelcome from "./components/HeaderWelcome"

function HomePage() {

  const { userData } = useSessionStorage()
  const { dataEnrolled, statusEnrolled, statusAvailables, dataAvailables } = useCareer(userData.id)

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <Toaster position="top-right" />
        {/* <!-- Bienvenida --> */}
        <HeaderWelcome name={userData.name} />

        {/* <!-- Carreras --> */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-15">

          {/* <!-- Carreras inscritas --> */}
          <CareerEnrolled dataEnrolled={dataEnrolled} statusEnrolled={statusEnrolled} />

          {/* <!-- Carreras disponibles --> */}
          <CareerAvailables dataAvailables={dataAvailables} statusAvailables={statusAvailables} userId={userData.id} />

        </section>
      </div>

    </>
  )
}

export default HomePage
