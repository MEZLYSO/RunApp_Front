import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Login from '../../presentation/pages/Auth/Login'
import { lazy, Suspense } from 'react'
import Singnup from '../../presentation/pages/Auth/SignUp'
import LoadingPage from '../../presentation/components/layout/LoadingPage'
import UserPage from '../../presentation/pages/Home/UserPage'
import PrivateGuard from '../../guards/PrivateGuard'
import PublicGuard from '../../guards/PublicGuard'
import UserUpdatePage from '../../presentation/pages/Home/UserUpdatePage'
const HomePage = lazy(async () => import('../../presentation/pages/Home/HomePage'))

function Router() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes */}
        <Route element={<PublicGuard />}>
          <Route path='/auth'>
            {/* Login page route */}
            <Route index element={<Login />} />
            {/* Singup page route */}
            <Route path='/auth/signup' element={<Singnup />} />
          </Route>
        </Route>
        {/* Private routes */}

        {/* Homepage page route */}
        <Route element={<PrivateGuard />}>
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


          <Route
            path='/update'
            element={
              <Suspense
                fallback={
                  <LoadingPage />
                }>
                <UserUpdatePage />
              </Suspense>
            } >
          </Route>

        </Route>
        {/* Redireccionador */}
        <Route path='/' element={<Navigate to='/auth' />} />

        {/* Not Found */}

      </Routes>
    </BrowserRouter >
  )
}

export default Router
