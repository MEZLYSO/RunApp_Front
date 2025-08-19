import type { User } from "../../core/entities/User"
import { axiosService } from "./dependencies/axiosService"

const AuthService = () => {

  const BASE_URL = "http://localhost:3000/user"
  const fetchService = new axiosService()

  const loginService = async (user: User) => {
    const res = await fetchService.get(BASE_URL)
    console.log(res)
  }

  return {
    loginService
  }
}

export default AuthService
