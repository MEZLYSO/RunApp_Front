import type { ChangeEventHandler } from "react"

interface InputProps {
  id: string
  type: string,
  placeholder?: string
  name: string
  changeCont: ChangeEventHandler<HTMLInputElement>
}

function InputField({ id, type, placeholder = "", name, changeCont }: InputProps) {
  return (
    <>
      <input
        id={id}
        onChange={changeCont}
        name={name}
        type={type}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-green-600"
        placeholder={placeholder} />
    </>
  )
}

export default InputField
