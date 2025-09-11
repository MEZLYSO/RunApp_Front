import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

type UserData = {
  id: string
  name: string
  surname1: string
  surname2: string
  email: string
}

const useSessionStorage = () => {

  const [userData, setUserData] = useState<UserData>({
    id: "",
    name: "",
    surname1: "",
    surname2: "",
    email: ""
  })

  useEffect(() => {
    const dataOfSessionStorage = sessionStorage.getItem('data')
    if (dataOfSessionStorage) {
      setUserData(JSON.parse(dataOfSessionStorage))
    }
  }, [])

  const navigate = useNavigate()
  const closeSesssion = () => {
    sessionStorage.removeItem('data')
    navigate('/', { replace: true })
  }

  return {
    userData,
    closeSesssion
  }
}

export default useSessionStorage
