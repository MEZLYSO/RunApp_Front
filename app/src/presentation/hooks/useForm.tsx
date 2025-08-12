import { useState, type ChangeEventHandler } from "react"
import { useNavigate } from "react-router"

const useForm = () => {

  // Functions for Auth Forms (Testing)
  const [formData, setFormData] = useState({})
  const navigate = useNavigate()
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


  // Functions for change type in Input password
  const initialStateType = { type: 'password', text: '🙈' }
  const [type, setType] = useState(initialStateType)
  const handleVisible = () => {
    if (type.type === "password") {
      setType({ type: 'text', text: '🙊' })
    } else {
      setType(initialStateType)
    }
  }

  return {
    formData,
    type,
    handleChange,
    handleSubmit,
    handleVisible
  }

}

export default useForm
