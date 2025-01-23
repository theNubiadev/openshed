import { } from "motion/react-client";
import { useState, useContext } from "react";
import { StarIcon, ClockIcon, ArrowLeftIcon } from "lucide-react";
import { restaurants, foodItems } from '../assets/assets.js'
// import { MealContext } from "../context/MealContext.jsx";
function Meal() {
  const [selectedResturant, setSelectedResturant] = useState(null);
  const { addToCart } = useContext(MealContext)

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
                  Min.Order: #{resturant.minOrder}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button
            onClick={() => setSelectedResturant(null)}
            className="text-orange-500 items-center justify-between flex font-medium mb-6 hover:text-orange-600 transition">
            <ArrowLeftIcon className="w-5 h-5 " /> Back
          </button>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h2 className="text-2xl text-gray-800 font-bold">  {selectedResturant.name}</h2>

            <div className="flex items-center mt-2 ">
              <StarIcon className="h-5 w-5 text-orange-500" />
              <span className="ml-1 text-gray-700"> {selectedResturant.rating}</span>
              <span className="mx-2">•</span>
              <span className="text-gray-600">{selectedResturant.category}</span>
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
                    <button
                      onClick={() => (addToCart(item))}
                      className="w-full bg-orange-500 text-white py-2 hover:bg-orange-600 transition-colors"> Add to cart</button>
                  </div>
                </div>
              ))};
          </div>


        </div>
      )}
    </div>
  )
}

export default Meal;