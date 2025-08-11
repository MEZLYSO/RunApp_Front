import useForm from "../../hooks/useForm"
import ButtonPrimary from "./components/ButtonPrimary"
import InputField from "./components/InputField"


function Login() {

  const { handleChange } = useForm()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Iniciar sesión</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <InputField
              id="email"
              changeCont={handleChange}
              name="emailInput"
              type="email"
              placeholder="Correo electrónico" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <div className="relative">
              <InputField
                id="password"
                changeCont={handleChange}
                name="passwordInput"
                type="password"
                placeholder="Contraseña" />
              <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">👁</span>
            </div>
          </div>

          <ButtonPrimary message="Iniciar sesión" cb={() => { console.log("hola") }} />

          <p className="text-sm text-center text-gray-600">
            ¿No tienes cuenta?
            <a href="#" className="text-green-600 hover:underline">Regístrate</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
