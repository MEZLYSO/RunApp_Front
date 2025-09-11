import { useState, type ChangeEventHandler } from "react"
import { useNavigate } from "react-router"
import AuthService from "../../data/services/AuthService"
import CareerService from "../../data/services/CareerService"

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

  const { loginService, signupService } = AuthService()

  const handleSubmitLogin: ChangeEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    try {
      const res = await loginService(formData)
      if (res && res.status === 201) {
        sessionStorage.setItem('data', JSON.stringify(res.data))
        navigate('/home', { replace: true })
      }
    } catch (error) {
      console.log(error);
    }

  }

  const handleSubmitSignUp: ChangeEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    try {
      const res = await signupService(formData)
      if (res && res.status === 201) {
        sessionStorage.setItem('data', JSON.stringify(res.data))
        navigate('/home', { replace: true })
      }
    } catch (error) {
      console.log(error);
    }

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

  const { removeEnrolled } = CareerService()

  const removeElementCareer = async (id: string) => {
    await removeEnrolled(id)
    window.location.reload()
  }

  return {
    formData,
    type,
    handleChange,
    handleSubmitLogin,
    handleSubmitSignUp,
    handleVisible,
    removeElementCareer
  }

}

export default useForm
