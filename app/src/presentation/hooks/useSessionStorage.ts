import { useEffect, useState } from "react"

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

  return {
    userData
  }
}

export default useSessionStorage
