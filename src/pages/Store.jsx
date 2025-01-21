import  { useState } from "react";
import {  StarIcon, ClockIcon, XIcon } from "lucide-react";

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

 function Store() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    if (
      cartItems.length > 0 &&
      cartItems[0].restaurantId !== item.restaurantId
    ) {
      if (
        !confirm(
          "Adding items from a different restaurant will clear your current cart. Continue?"
        )
      ) {
        return;
      }
      setCartItems([{ ...item, quantity: 1 }]);
    } else {
      setCartItems((prev) => {
        const existing = prev.find((i) => i.id === item.id);
        if (existing) {
          return prev.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return [...prev, { ...item, quantity: 1 }];
      });
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto mt-8 px-4 pt-6">
    {!selectedRestaurant ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setSelectedRestaurant(restaurant)}
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {restaurant.name}
              </h3>
              <p className="text-gray-600 text-sm">{restaurant.cuisine}</p>
              <div className="flex items-center mt-2 text-sm">
                <StarIcon className="h-4 w-4 text-orange-500 fill-current" />
                <span className="ml-1 text-gray-700">{restaurant.rating}</span>
                <ClockIcon className="h-4 w-4 ml-4 text-gray-600" />
                <span className="ml-1 text-gray-700">
                  {restaurant.deliveryTime} mins
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Min. order: ${restaurant.minOrder}
              </p>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div>
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {selectedRestaurant.name}
          </h2>
          <div className="flex items-center mt-2">
            <StarIcon className="h-5 w-5 text-orange-500 fill-current" />
            <span className="ml-1 text-gray-700">{selectedRestaurant.rating}</span>
            <span className="mx-2">•</span>
            <span className="text-gray-600">{selectedRestaurant.cuisine}</span>
            <span className="mx-2">•</span>
            <ClockIcon className="h-5 w-5 text-gray-600" />
            <span className="ml-1 text-gray-700">
              {selectedRestaurant.deliveryTime} mins
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodItems
            .filter((item) => item.restaurantId === selectedRestaurant.id)
            .map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <span className="text-orange-500 font-semibold">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    )}
    {isCartOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
        <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="p-4 flex-1 overflow-auto">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty</p>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center py-4 border-b"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">
                        ${item.price} x {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <XIcon className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                ))}
                <div className="mt-4 border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-orange-500 text-white py-3 rounded-lg mt-4 hover:bg-orange-600 transition-colors">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )}
  </div>
  
  );
}
export default Store;