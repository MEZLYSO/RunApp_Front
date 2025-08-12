import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Login from '../../presentation/pages/Auth/Login'
import { lazy, Suspense } from 'react'
import Singnup from '../../presentation/pages/Auth/SignUp'
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
                <h1>Loading</h1>
              }>
              <HomePage />
            </Suspense>
          } >
        </Route>

        {/* Redireccionador */}
        <Route path='/' element={<Navigate to='/auth' />} />

      </Routes>
    </BrowserRouter >
  )
}

export default Router
