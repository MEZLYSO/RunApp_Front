import CareerService from "../../data/services/CareerService"

const useManageEnrolled = () => {

  const { enrolledUser } = CareerService()

  const getKey = (data: { userId: string, careerId: string, rfid: string }) => {
    console.log(data);

    enrolledUser(data)

  }

  return {
    getKey
  }
}

export default useManageEnrolled
