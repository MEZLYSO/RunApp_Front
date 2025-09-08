interface headerWelcomeProps {
  name: string
}

function HeaderWelcome({ name }: headerWelcomeProps) {
  return (
    <header className="bg-white rounded-xl shadow p-6 mb-6 flex items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-800">
        Bienvenido <span className="text-green-600">{name}</span>
      </h1>
    </header>
  )
}

export default HeaderWelcome
