import toast from "react-hot-toast"
import { axiosService } from "./dependencies/axiosService"

type FormDataUser = {

  email: string

  password: string

  name?: string

  surname1?: string

  surname2?: string

}

const AuthService = () => {

  const BASE_URL = "http://localhost:3000"
  const AxiosService = new axiosService()

  async function loginService(user: FormDataUser) {
    try {
      const res = await AxiosService.post(`${BASE_URL}/auth/login`, user)
      const { status, data } = res
      return { status, data }
    } catch (error) {
      toast.error("Error:Verifica tu contrasena o correo")
    }
  }

  async function signupService(user: FormDataUser) {
    const res = await AxiosService.post(`${BASE_URL}/auth/signup`, user)
    const { status, data } = res
    return { status, data }
  }

  return {
    loginService,
    signupService
  }
}

export default AuthService
