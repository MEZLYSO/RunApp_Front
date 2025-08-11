import { useState, type ChangeEventHandler } from "react"

const useForm = () => {

  const [formData, setFormData] = useState({})

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target

    setFormData({
      ...formData,
      [id]: value
    })
  }

  return {
    formData,
    handleChange
  }

}

export default useForm
