import { useState } from 'react'
import { MenuIcon } from 'lucide-react'
import { Link } from 'react-router-dom';


function Navbar() {
  const [openMenu, setOpenMenu] = useState('false');

  return (
    <div>
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-orange-600">Openshed</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to='/' className="text-gray-600 hover:text-orange-600">
                Home
              </Link>
              <Link to='/resturant' className="text-gray-600 hover:text-orange-600">
                Restaurants
              </Link>
              <Link to='' className="text-gray-600 hover:text-orange-600">
                How it Works
              </Link>
              <Link to='' className="text-gray-600 hover:text-orange-600">
                Contact
              </Link>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
                Order Now
              </button>
            </div>
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-orange-600">
                <MenuIcon size={24} onClick={openMenu} />
              </button>
            </div>

          </div>

          <div className='hidden'> 
            
            
             </div>
        </div>

      </nav>
      </div>
  )
}

export default Navbar