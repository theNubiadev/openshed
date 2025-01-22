import { } from "motion/react-client";
import { useState } from "react";
import { StarIcon, ClockIcon, ArrowLeftIcon } from "lucide-react";
const restaurants = [
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
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3",
      rating: 4.3,
      deliveryTime: "30-45",
     minOrder: 20,
      category: "Swallow",
    },
    {
      id: 2,
      resturantId: 1,
      name: "Jollof Rice and Chicken",
      price: 1200,
      description: "",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3",
      rating: 4.3,
      deliveryTime: "30-45",
     minOrder: 20,
      category: "Swallow",
    },
    {
      id: 3,
      resturantId: 1,
      name: "Fried Rice and Chicken",
      price: 1200,
      description: "",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3",
      rating: 4.3,
      deliveryTime: "30-45",
     minOrder: 20,
      category: "Swallow",
    },
    {
      id: 4,
      resturantId: 1,
      name: " Extra Chicken",
      price: 1200,
      description: "",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3",
      rating: 4.3,
      deliveryTime: "30-45",
     minOrder: 20,
      category: "Rice",
    }, {
      id: 5,
      resturantId: 2,
      name: "Egusi with Semo",
      price: 1500,
      description: "",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3",
      rating: 4.3,
      deliveryTime: "30-45",
     minOrder: 20,
      category: "Swallow",
    },
    {
      id: 6,
      resturantId: 2,
      name: "Pounded Yam and Soup with beef",
      price: 3000,
      description: "",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3",
      rating: 4.3,
      deliveryTime: "30-45",
     minOrder: 20,
      category: "Swallow",
    },
    {
      id: 7,
      resturantId: 2,
      name: "Extra Semo",
      price: 200,
      description: "",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3",
      rating: 4.3,
      deliveryTime: "30-45",
     minOrder: 20,
      category: "Swallow",
    },
    {
      id: 8,
      resturantId: 2,
      name: " Extra Beef",
      price: 500,
      description: "",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3",
      rating: 4.3,
      deliveryTime: "30-45",
     minOrder: 20,
      category: "Meat",
    },
    {
      id: 9,
      resturantId: 3,
      name: "Sharwamah",
      price: 2000,
      description: "",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3",
      rating: 4.3,
      deliveryTime: "30-45",
     minOrder: 20,
      category: "Snacks",
    },
    {
      id: 10,
      resturantId: 3,
      name: "Hotdog Sharwanah",
      price: 1200,
      description: "",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3",
      rating: 4.3,
      deliveryTime: "30-45",
     minOrder: 20,
      category: "Snacks",
    },
    {
      id: 11,
      resturantId: 3,
      name: "Eztra Hot dog",
      price: 300,
      description: "",
      category: "Snacks",  
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3",
      rating: 4.3,
      deliveryTime: "30-45",
     minOrder: 20,
    },
    {
      id: 12,
      resturantId: 3,
      name: "Drink",
      price: 400,
      description: "",
      category: " Snacks",
      image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3",
      rating: 4.3,
      deliveryTime: "30-45",
     minOrder: 20,
    },
  ];
// const restaurants = [
//     {
//         id: 1,
//         name: "Burger Palace",
//         image:
//             "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3",
//         rating: 4.5,
//         deliveryTime: "25-35",
//         minOrder: 15,
//         cuisine: "American",
//     },
//     {
//         id: 2,
//         name: "Pizza Paradise",
//         image:
//             "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3",
//         rating: 4.3,
//         deliveryTime: "30-45",
//         minOrder: 20,
//         cuisine: "Italian",
//     },
//     {
//         id: 3,
//         name: "Green Bowl",
//         image:
//             "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3",
//         rating: 4.7,
//         deliveryTime: "20-30",
//         minOrder: 12,
//         cuisine: "Healthy",
//     },
// ];

// const foodItems = [
//     {
//         id: 1,
//         restaurantId: 1,
//         name: "Classic Burger",
//         price: 12.99,
//         description:
//             "Juicy beef patty with fresh lettuce, tomatoes, and special sauce",
//         image:
//             "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3",
//         category: "Burgers",
//     },
//     {
//         id: 2,
//         restaurantId: 2,
//         name: "Margherita Pizza",
//         price: 14.99,
//         description: "Fresh mozzarella, tomatoes, and basil on crispy crust",
//         image:
//             "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3",
//         category: "Pizza",
//     },
//     {
//         id: 3,
//         restaurantId: 3,
//         name: "Caesar Salad",
//         price: 9.99,
//         description:
//             "Crisp romaine lettuce, parmesan cheese, croutons with caesar dressing",
//         image:
//             "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3",
//         category: "Salads",
//     },
// ];
function Meal() {
    const [selectedResturant, setSelectedResturant] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    return (
        <div className='max-w-7xl mx-auto px-8 pt-24 pb-12'>

            <div className='mt-12'>
                <h2 className="flex justify-center mb-4 text-4xl font-bold ">Order your Preferred Meal</h2>
            </div>
            {!selectedResturant ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {restaurants.map((resturant) => (
                        <div
                            key={resturant.id}
                            className="bg-white rounded-lg shadow-sm  overflow-hidden cursor-pointer"
                            onClick={() => setSelectedResturant(resturant)}
                        >
                            <img
                                src={resturant.image}
                                alt={resturant.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {resturant.name}
                                </h3>
                                <p className="text-gray-600 text-sm"> {resturant.cuisine}</p>
                                <div className="flex items-center mt-2 text-sm">
                                    <StarIcon className="h-4 w-4 text-orange-500 fill-current" />
                                    <span className="ml-1 text-gray-700">
                                        <ClockIcon className="h-4 w-4 ml-4 text-gray-500" />
                                    </span>
                                    <span className="ml-1 text-gray-700 ">
                                        {resturant.deliveryTime} mins</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">
                                    Min. Order: ${resturant.minOrder}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (

              
                <div>

              <button 
              onClick={() => setSelectedResturant(null)}
              className="text-orange-500 items-center justify-between flex font-medium mb-6 hover:text-orange-600 transition">
                  <ArrowLeftIcon  className="w-5 h-5 "/> Back
              </button>
                    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                        <h2 className="text-2xl text-gray-800 font-bold">  {selectedResturant.name}</h2>

                        <div className="flex items-center mt-2 ">
                            <StarIcon className="h-5 w-5 text-orange-500" />
                            <span className="ml-1 text-gray-700"> {selectedResturant.rating}</span>
                            <span className="mx-2">•</span>
                            <span className="text-gray-600">{selectedResturant.cuisine}</span>
                            <span className="mx-2">•</span>
                            <ClockIcon className="h-5 w-5 text-gray-600" />
                            <span className="ml-1 text-gray-700">
                                {selectedResturant.deliveryTime} mins
                            </span>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {foodItems.filter((item) => item.resturantId === selectedResturant.id)
                            .map((item) => (
                                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer"
                                    key={item.id}>
                                    <img src={item.image} alt={item.name}
                                        className="w-full h-48 object-cover" />
                                        <div className="p-4">
                                        <div className="flex justify-between items-start mb-12">
                                        <h3>{item.name}</h3>
                                        <span className="text-orange-500 font-semibold">
                                        #{item.price}</span>
                                        </div>
                                        <p className="text-gray-600 text-sm mb-4 ">
                                        {item.description}</p>

                                        <button className="w-full bg-orange-500 text-white py-2 hover:bg-orange-600 transition-colors"> Add to cart</button>
                                        </div>
                                </div>

                           ) )};
                    </div>

                </div>
            )}
        </div>
    )
}

export default Meal