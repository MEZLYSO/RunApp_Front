import { Navigate, Outlet } from 'react-router'
import Navbar from '../presentation/pages/Home/components/Navbar'

function PrivateGuard() {
  const token = sessionStorage.getItem("data")
  return token ? (<>
    <Outlet />
    <Navbar />
  </>
  ) : (
    <Navigate replace to="/" />
  )
}

export default PrivateGuard
