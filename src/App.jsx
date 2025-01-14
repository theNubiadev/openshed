import Home from '../src/pages/Home'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='min-h-screen bg-white'>

      <Navbar />

      <Routes >


        <Route path='/' element={<Home />} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App