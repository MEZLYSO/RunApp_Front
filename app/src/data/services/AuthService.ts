import { axiosService } from "./dependencies/axiosService"

const AuthService = () => {

  const BASE_URL = "http://localhost:3000"
  const AxiosService = new axiosService()

  async function loginService(user: { email: string, password: string }) {
    const res = await AxiosService.post(`${BASE_URL}/auth/login`, user)
    const { status, data } = res
    return { status, data }
  }

  return {
    loginService
  }
}

export default AuthService
