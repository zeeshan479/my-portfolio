
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import 'remixicon/fonts/remixicon.css'
import 'animate.css'
import Home from './component/Home'
import Resume from './component/Resume'
import Works from './component/Works'
import Contact from './component/Contact'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/resume' element={<Resume/>} />
      <Route path='/works' element={<Works/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App

