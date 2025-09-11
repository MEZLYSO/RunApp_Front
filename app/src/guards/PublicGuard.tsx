import { Navigate, Outlet } from "react-router"

function PublicGuard() {
  const token = sessionStorage.getItem("data")
  return !token ? (
    <Outlet />
  ) : (
    <Navigate replace to="/home" />
  )
}

export default PublicGuard
