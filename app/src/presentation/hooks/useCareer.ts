import { useQuery } from "@tanstack/react-query"
import CareerService from "../../data/services/CareerService"

const useCareer = (id: string) => {

  const { getCareerAvailables, getCareerEnrolled } = CareerService()

  const { data: dataAvailables, status: statusAvailables } = useQuery({
    queryKey: ['careerAvailables'],
    queryFn: async () => await getCareerAvailables(),
    refetchInterval: 5000
  })

  const { data: dataEnrolled, status: statusEnrolled } = useQuery({
    queryKey: ['careerEnrolled'],
    queryFn: async () => await getCareerEnrolled(id),
    refetchInterval: 5000,
    enabled: !!id
  })

  return {
    dataAvailables,
    statusAvailables,
    dataEnrolled,
    statusEnrolled
  }
}

export default useCareer
