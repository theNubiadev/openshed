import Home from '../src/pages/Home'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import { Routes, Route } from 'react-router-dom'
import Resturant from './pages/Resturant'
import Meal from './pages/Meal'
import Store from './pages/Store'


function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/resturant' element={<Resturant />} />
        <Route path='/meal' element={<Meal />}/>
        <Route path='/store' element={<Store />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App