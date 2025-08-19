import { lazy } from "react"
import useForm from "../../hooks/useForm"
import ButtonPrimary from "./components/ButtonPrimary"
import InputField from "./components/InputField"
const BackgroundAuth = lazy(() => import("../../components/ui/BackgroundAuth"))

function Login() {

  const { handleChange, handleSubmitLogin, handleVisible, type } = useForm()

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6">
      <BackgroundAuth />
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md z-0">
        <h2 className="text-2xl font-bold mb-6">Iniciar sesión</h2>

        <form
          method="POST"
          onSubmit={handleSubmitLogin}
          className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <InputField
              id="email"
              changeCont={handleChange}
              type="email"
              placeholder="Correo electrónico" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <div className="relative">
              <InputField
                id="password"
                changeCont={handleChange}
                type={type.type}
                placeholder="Contraseña" />
              <span
                onClick={handleVisible}
                className="text-2xl absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
                {type.text}
              </span>
            </div>
          </div>

          <ButtonPrimary message="Iniciar sesión" />

          <p className="text-sm text-center text-gray-600">
            ¿No tienes cuenta?
            <a href="/auth/signup" className="text-green-600 hover:underline">Regístrate</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
