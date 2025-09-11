import { Link, useLocation } from "react-router"

function Navbar() {
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link
            to='/home'
            className={`flex flex-col items-center p-3 w-full transition-colors duration-200 ${location.pathname === "/home"
              ? "text-green-800"
              : "text-gray-500 hover:text-gray-700"
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xs mt-1">Inicio</span>
          </Link>

          <Link
            to="/user"
            className={`flex flex-col items-center p-3 w-full transition-colors duration-200 ${location.pathname === "/user"
              ? "text-green-800"
              : "text-gray-500 hover:text-gray-700"
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="text-xs mt-1">Perfil</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
