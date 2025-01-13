import Home from '../src/pages/Home'
import Navbar from '../src/components/Navbar'
function App() {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <main> 
        <Home />
        </main>
    </div>
  )
}

export default App