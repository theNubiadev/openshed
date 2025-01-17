// import { useState } from 'react';
// import { MenuIcon, XIcon , ShoppingCartIcon} from 'lucide-react';
// import { Link, NavLink } from 'react-router-dom';

// function Navbar() {
//   const [openMenu, setOpenMenu] = useState(false);

//   return (
//     <div>
//       <nav className="fixed w-full bg-white shadow-sm z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <span className="text-xl font-bold text-orange-600">Openshed</span>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-8">
//               <Link to="/" className="text-gray-600 hover:text-orange-600">
//                 Home
//               </Link>
//               <Link to="/resturant" className="text-gray-600 hover:text-orange-600">
//                 Restaurants
//               </Link>
//               <Link to="" className="text-gray-600 hover:text-orange-600">
//                 How it Works
//               </Link>
//               <Link to="" className="text-gray-600 hover:text-orange-600">
//                 Contact
//               </Link>
//               <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
//                 Order Now
//               </button>
//             </div>

//             <div className='md:flex md:items-end'>
//               <ShoppingCartIcon  className='w-6 h-6 '/>
//             </div>

//             {/* Mobile Menu Icon */}
//             <div className="md:hidden">
//               <button
//                 className="text-gray-600 "
//                 onClick={() => setOpenMenu(true)}
//               >
//                 <MenuIcon size={24} />
//               </button>
//             </div>
//           </div>
//         </div>
//         {/* Mobile Menu */}
//         {openMenu && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
//             <div className="fixed right-0 top-0 w-3/4 max-w-sm h-full bg-white shadow-lg">
//               <div className="flex justify-end items-center px-4 py-4">
//                 <button
//                   className="text-gray-600 hover:text-orange-600"
//                   onClick={() => setOpenMenu(false)}
//                 >
//                   <XIcon size={24} />
//                 </button>
//               </div>
//               <div className="flex flex-col space-y-4 px-4 py-6">
//                 <NavLink
//                   to="/"
//                   className="text-gray-600 hover:text-orange-600"
//                   onClick={() => setOpenMenu(false)}
//                 >
//                   Home
//                 </NavLink>
//                 <NavLink
//                   to="/resturant"
//                   className="text-gray-600 hover:text-orange-600"
//                   onClick={() => setOpenMenu(false)}
//                 >
//                   Restaurants
//                 </NavLink>
//                 <NavLink
//                   to=""
//                   className="text-gray-600 hover:text-orange-600"
//                   onClick={() => setOpenMenu(false)}
//                 >
//                   How it Works
//                 </NavLink>
//                 <NavLink
//                   to=""
//                   className="text-gray-600 hover:text-orange-600"
//                   onClick={() => setOpenMenu(false)}
//                 >
//                   Contact
//                 </NavLink>
//                 <button
//                   className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
//                   onClick={() => setOpenMenu(false)}
//                 >
//                   Order Now
//                 </button>
//               </div>
//             </div>
//             {/* Click outside menu to close */}
//             <div
//               className="fixed inset-0"
//               onClick={() => setOpenMenu(false)}
//             ></div>
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// } 
// export default Navbar;



import { useState } from 'react';
import { MenuIcon, XIcon, ShoppingCartIcon } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-orange-600">Openshed</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-orange-600">
                Home
              </Link>
              <Link to="/resturant" className="text-gray-600 hover:text-orange-600">
                Restaurants
              </Link>
              <Link to="" className="text-gray-600 hover:text-orange-600">
                How it Works
              </Link>
              <Link to="" className="text-gray-600 hover:text-orange-600">
                Contact
              </Link>
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
                Order Now
              </button>
              {/* Shopping Cart Icon */}
              <Link to="/cart">
                <ShoppingCartIcon className="w-6 h-6 text-gray-600 hover:text-orange-600" />
              </Link>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden flex items-center">
              <Link to="/cart" className="mr-4">
                <ShoppingCartIcon className="w-6 h-6 text-gray-600 hover:text-orange-600" />
              </Link>
              <button className="text-gray-600" onClick={() => setOpenMenu(true)}>
                <MenuIcon size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {openMenu && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="fixed right-0 top-0 w-3/4 max-w-sm h-full bg-white shadow-lg">
              <div className="flex justify-between items-center px-4 py-4">
                <span className="text-xl font-bold text-orange-600">Openshed</span>
                <button
                  className="text-gray-600 hover:text-orange-600"
                  onClick={() => setOpenMenu(false)}
                >
                  <XIcon size={24} />
                </button>
              </div>
              <div className="flex flex-col space-y-4 px-4 py-6">
                <NavLink
                  to="/"
                  className="text-gray-600 hover:text-orange-600"
                  onClick={() => setOpenMenu(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/resturant"
                  className="text-gray-600 hover:text-orange-600"
                  onClick={() => setOpenMenu(false)}
                >
                  Restaurants
                </NavLink>
                <NavLink
                  to=""
                  className="text-gray-600 hover:text-orange-600"
                  onClick={() => setOpenMenu(false)}
                >
                  How it Works
                </NavLink>
                <NavLink
                  to=""
                  className="text-gray-600 hover:text-orange-600"
                  onClick={() => setOpenMenu(false)}
                >
                  Contact
                </NavLink>
                <Link
                  to="/cart"
                  className="flex items-center text-gray-600 hover:text-orange-600"
                  onClick={() => setOpenMenu(false)}
                >
                  <ShoppingCartIcon className="w-6 h-6 mr-2" />
                  Cart
                </Link>
                <button
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                  onClick={() => setOpenMenu(false)}
                >
                  Order Now
                </button>
              </div>
            </div>
            {/* Click outside menu to close */}
            {/* <div
              className="fixed inset-0"
              onClick={() => setOpenMenu(false)}
            ></div> */}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
