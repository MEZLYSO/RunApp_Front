import toast from "react-hot-toast"
import { axiosService } from "./dependencies/axiosService"

const CareerService = () => {

  const BASE_URL = "http://localhost:3000/career"
  const AxiosService = new axiosService()

  const getCareerAvailables = async () => {
    const career = await AxiosService.get(BASE_URL)
    return career.data
  }

  const BASE_URL_1 = "http://localhost:3000/enrolled"
  const getCareerEnrolled = async (id: string) => {
    const career = await AxiosService.get(`${BASE_URL_1}/${id}`)
    return career.data
  }

  const removeEnrolled = async (id: string) => {
    await AxiosService.delete(`${BASE_URL_1}/${id}`)
  }

  const enrolledUser = async (data: any) => {
    try {
      const res = await AxiosService.post(BASE_URL_1, data)
      return res
    } catch (err: any) {
      toast.error(`Error:Ya estas inscrito a esta carrera \n o RFID ocupado`)
    }
  }

  return {
    getCareerAvailables,
    getCareerEnrolled,
    removeEnrolled,
    enrolledUser
  }
}

export default CareerService
