import { useState, type ChangeEventHandler } from "react"
import { useNavigate } from "react-router"

const useForm = () => {

  const [formData, setFormData] = useState({})
  const navigate = useNavigate()
  const [type, setType] = useState("password")

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value
    })
  }

  const handleSubmit: ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    navigate('/home', { replace: true })
  }

  const handleVisible = () => {

  }

  return {
    formData,
    handleChange,
    handleSubmit
  }

}

export default useForm
