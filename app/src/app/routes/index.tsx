import { BrowserRouter, Route, Routes } from 'react-router'
import Login from '../../presentation/pages/Auth/Login'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
