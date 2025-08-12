import useForm from "../../hooks/useForm"
import BackgroundAuth from "./components/BackgroundAuth"
import InputField from "./components/InputField"

function Singnup() {
  const { handleChange } = useForm()
  return (
    <div className="min-h-screen flex items-center justify-center p-6">

      <BackgroundAuth />

      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md z-0">
        <h2 className="text-2xl font-bold mb-6">Crear cuenta</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <InputField
              changeCont={handleChange}
              id="email"
              type="email"
              placeholder="Correo electrónico "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <div className="relative">
              <InputField
                changeCont={handleChange}
                id="password"
                type="password"
                placeholder="Contraseña"
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">👁</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
            <InputField
              changeCont={handleChange}
              id="confirm_password"
              type="password"
              placeholder="Confirmar contraseña"
            />
          </div>

          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium">
            Crear cuenta
          </button>

          <p className="text-sm text-center text-gray-600">
            ¿Ya tienes cuenta?
            <a href="/" className="text-green-600 hover:underline">Inicia sesión</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Singnup
