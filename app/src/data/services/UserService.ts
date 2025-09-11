import { useNavigate } from "react-router"
import { axiosService } from "./dependencies/axiosService"

const UserService = () => {

  const BASE_URL = "http://localhost:3000/user"
  const AxiosService = new axiosService()
  const navigate = useNavigate()

  const deleteUser = async (uuid: string) => {
    console.log(uuid);

    await AxiosService.delete(`${BASE_URL}/${uuid}`)
    sessionStorage.removeItem('data')
    navigate('/', { replace: true })
  }

  return {
    deleteUser
  }
}

export default UserService
