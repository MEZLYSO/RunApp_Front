interface ButtonProps {
  message: string
  cb: () => void
}

function ButtonPrimary({ message, cb }: ButtonProps) {
  return (
    <>
      <input
        onClick={cb}
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 focus:outline-none text-white py-2 rounded-md font-medium"
        value={message}
      />
    </>
  )
}

export default ButtonPrimary
