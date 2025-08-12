import type { ChangeEventHandler } from "react"

interface InputProps {
  id: string
  type: string,
  placeholder?: string
  changeCont: ChangeEventHandler<HTMLInputElement>
}

function InputField({ id, type, placeholder = "", changeCont }: InputProps) {
  return (
    <>
      <input
        id={id}
        onChange={changeCont}
        type={type}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 focus:outline-green-600"
        placeholder={placeholder} />
    </>
  )
}

export default InputField
