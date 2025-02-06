

import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { StudentDetails } from './pages/studentDetails'

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/student/:id' element={<StudentDetails/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
