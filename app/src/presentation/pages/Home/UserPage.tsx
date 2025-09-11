import UserService from "../../../data/services/UserService"
import useSessionStorage from "../../hooks/useSessionStorage"
import AvatarProfile from "./components/AvatarProfile"

function UserPage() {

  const { userData } = useSessionStorage()
  const { deleteUser } = UserService()

  const dataUser = [
    { label: "Nombre", value: userData.name },
    { label: "Apellido 1", value: userData.surname1 },
    { label: "Apellido 2", value: userData.surname2 },
    { label: "Email", value: userData.email },
  ]

  const { closeSesssion } = useSessionStorage()

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">

      <AvatarProfile name={userData.name} surname1={userData.surname1} surname2={userData.surname2} />

      <div className="bg-white rounded-xl shadow-lg p-6 mt-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Información de perfil</h2>

        <div className="space-y-3">

          {dataUser.map((item) => (
            <div
              key={item.label}>
              <span className="block text-sm font-medium text-gray-500">{item.label}</span>
              <p className="text-gray-800">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-3 mt-6">
          <button
            onClick={async () => await deleteUser(userData.id)}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 rounded-md font-medium">
            Borrar cuenta
          </button>
          <button
            onClick={() => closeSesssion()}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-medium">
            Cerrar sesión
          </button>
        </div>
      </div>

    </div>

  )
}

export default UserPage
