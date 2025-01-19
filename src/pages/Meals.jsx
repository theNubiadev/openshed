
import {useState} from 'react'

const resturants = [
    {
      id: 1,
      name: "Green Corner",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 4.5,
      deliveryTime: "25-40",
      minOrder: 10,
      cuisine: "Local Delicacy",
    },
    {
      id: 2,
      name: "Green Corner",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 4.5,
      deliveryTime: "25-40",
      minOrder: 10,
      cuisine: "Exotic",
    },
    {
      id: 3,
      name: "Item7Go",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      rating: 4.5,
      deliveryTime: "15-20",
      minOrder: 10,
      cuisine: "Fast Meal",
    }
  ];

function Meals() {
  const [selectedResturant, setSelectedResturant] = useState('');
  const [cartItems, setCartItems] = useState();
  const [cartOpen, setCartOpen] = useState(false)

  return (
    <div className='bg-gray-600 min-h-screen '>
    
    </div>
  )
}

export default Meals