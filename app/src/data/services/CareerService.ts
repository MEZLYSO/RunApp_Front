import { axiosService } from "./dependencies/axiosService"

const CareerService = () => {

  const BASE_URL = "http://localhost:3000/career"
  const AxiosService = new axiosService()

  const getCareerAvailables = async () => {
    const career = await AxiosService.get(BASE_URL)
    return career.data
  }

  return {
    getCareerAvailables
  }
}

export default CareerService
