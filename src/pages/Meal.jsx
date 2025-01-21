import { } from "motion/react-client";
import { useState } from "react";
import { StarIcon, ClockIcon } from "lucide-react";

const restaurants = [
    {
        id: 1,
        name: "Burger Palace",
        image:
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3",
        rating: 4.5,
        deliveryTime: "25-35",
        minOrder: 15,
        cuisine: "American",
    },
    {
        id: 2,
        name: "Pizza Paradise",
        image:
            "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3",
        rating: 4.3,
        deliveryTime: "30-45",
        minOrder: 20,
        cuisine: "Italian",
    },
    {
        id: 3,
        name: "Green Bowl",
        image:
            "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3",
        rating: 4.7,
        deliveryTime: "20-30",
        minOrder: 12,
        cuisine: "Healthy",
    },
];

const foodItems = [
    {
        id: 1,
        restaurantId: 1,
        name: "Classic Burger",
        price: 12.99,
        description:
            "Juicy beef patty with fresh lettuce, tomatoes, and special sauce",
        image:
            "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3",
        category: "Burgers",
    },
    {
        id: 2,
        restaurantId: 2,
        name: "Margherita Pizza",
        price: 14.99,
        description: "Fresh mozzarella, tomatoes, and basil on crispy crust",
        image:
            "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-4.0.3",
        category: "Pizza",
    },
    {
        id: 3,
        restaurantId: 3,
        name: "Caesar Salad",
        price: 9.99,
        description:
            "Crisp romaine lettuce, parmesan cheese, croutons with caesar dressing",
        image:
            "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3",
        category: "Salads",
    },
];
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

                </div>
            )}

        </div>
    )
}

export default Meal