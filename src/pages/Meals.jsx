import { ArrowBigLeftIcon } from "lucide-react";
import {  } from "motion/react-client";
import { useState } from "react";

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

const foodItems = [
  {
    id: 1,
    resturantId: 1,
    name: "Amala and Abula",
    price: 1200,
    description: "",
    image: "",
    category: "Swallow",
  },
  {
    id: 2,
    resturantId: 1,
    name: "Jollof Rice and Chicken",
    price: 1200,
    description: "",
    image: "",
    category: "Swallow",
  },
  {
    id: 3,
    resturantId: 1,
    name: "Fried Rice and Chicken",
    price: 1200,
    description: "",
    image: "",
    category: "Swallow",
  },
  {
    id: 4,
    resturantId: 1,
    name: " Extra Chicken",
    price: 1200,
    description: "",
    image: "",
    category: "Rice",
  }, {
    id: 5,
    resturantId: 2,
    name: "Egusi with Semo",
    price: 1500,
    description: "",
    image: "",
    category: "Swallow",
  },
  {
    id: 6,
    resturantId: 2,
    name: "Pounded Yam and Soup with beef",
    price: 3000,
    description: "",
    image: "",
    category: "Swallow",
  },
  {
    id: 7,
    resturantId: 2,
    name: "Extra Semo",
    price: 200,
    description: "",
    image: "",
    category: "Swallow",
  },
  {
    id: 8,
    resturantId: 2,
    name: " Extra Beef",
    price: 500,
    description: "",
    image: "",
    category: "Meat",
  },
  {
    id: 9,
    resturantId: 3,
    name: "Sharwamah",
    price: 2000,
    description: "",
    image: "",
    category: "Snacks",
  },
  {
    id: 10,
    resturantId: 3,
    name: "Hotdog Sharwanah",
    price: 1200,
    description: "",
    image: "",
    category: "Snacks",
  },
  {
    id: 11,
    resturantId: 3,
    name: "Eztra Hot dog",
    price: 300,
    description: "",
    image: "",
    category: "Snacks",
  },
  {
    id: 12,
    resturantId: 3,
    name: "Drink",
    price: 400,
    description: "",
    image: "",
    category: " Snacks",
  },
]
function Meals() {

  const [selectedRestuurant, setSelectedResturant] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  // const addToCart = (item) => {
  //   if (cartItems.length > 0 &&
  //     cartItems[0].resturantId !== item.resturantId
  //   ) {
  //     return;
  //   }
  //   setCartItems([
  //     {
  //       ...item,
  //       quantity: 1,
  //     },
  //   ])
  // } else {
    // setCartItems((prev) => {
    //   const existing = prev.find((i) => i.id === item:id);
    //   if (existing) {
    //     return prev.map((i) => i.id === item.id ? {
    //       ...i,
    //       quantity: i.quantity + 1,
    //     }
    //       : i
    //     )
    //   }

//       return [
//         ...prev,
//         {
//           ...item,
//           quantity: 1,
//         }
//       ];
//     });
// };

// const removeFromCart = (itemId) => {
//   setCartItems((prev) => pre.filter((item) => item.id !== itemId));
// }
// const cartTotal = cartItems.reduce(
//   (sum, item) => sum + item.price * item.quantity, 0
// );


return (
  <div className="max-w-7xl mx-auto px-4 h-16 flex items-center jusify-between">
    <div className='flex items-center'>
      <ArrowBigLeftIcon className='w-6 h-6 mr-2' />
      <h1 className='text-lg font-semibold'>Back</h1>
    </div>
  </div>
)
}

export default Meals