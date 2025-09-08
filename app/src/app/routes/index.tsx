import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Login from '../../presentation/pages/Auth/Login'
import { lazy, Suspense } from 'react'
import Singnup from '../../presentation/pages/Auth/SignUp'
import LoadingPage from '../../presentation/components/layout/LoadingPage'
import UserPage from '../../presentation/pages/Home/UserPage'
const HomePage = lazy(async () => import('../../presentation/pages/Home/HomePage'))

function Router() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes */}
        <Route path='/auth'>
          {/* Login page route */}
          <Route index element={<Login />} />
          {/* Singup page route */}
          <Route path='/auth/signup' element={<Singnup />} />
        </Route>

        {/* Private routes */}

        {/* Homepage page route */}
        <Route
          path='/home'
          element={
            <Suspense
              fallback={
                <LoadingPage />
              }>
              <HomePage />
            </Suspense>
          } >
        </Route>

        {/* Userpage page route */}
        <Route
          path='/user'
          element={
            <Suspense
              fallback={
                <LoadingPage />
              }>
              <UserPage />
            </Suspense>
          } >
        </Route>

        {/* Redireccionador */}
        <Route path='/' element={<Navigate to='/auth' />} />

        {/* Not Found */}

      </Routes>
    </BrowserRouter >
  )
}

export default Router
