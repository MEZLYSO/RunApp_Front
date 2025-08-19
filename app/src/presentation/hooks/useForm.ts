import { useState, type ChangeEventHandler } from "react"
import { useNavigate } from "react-router"
import AuthService from "../../data/services/AuthService"

const useForm = () => {


  // Functions for Auth Forms (Testing)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate()
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: value
    })
  }

  //Auth Methods

  const { loginService } = AuthService()

  const handleSubmitLogin: ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const { password, email } = formData
    loginService({ password, email })
    // navigate('/home', { replace: true })
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
    handleSubmitLogin,
    handleVisible
  }

}

export default useForm
