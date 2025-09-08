import { useQuery } from "@tanstack/react-query"
import CareerService from "../../data/services/CareerService"

const useCareer = () => {

  const { getCareerAvailables } = CareerService()

  const { data, status } = useQuery({
    queryKey: ['careerAvailables'],
    queryFn: async () => await getCareerAvailables(),
    refetchInterval: 5000
  })

  return { data, status }
}

export default useCareer
