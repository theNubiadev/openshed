import React from "react";
import { XIcon, ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react";

 function RestaurantModal  ({ restaurant, onClose })  {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {restaurant.name}
          </h2>
          <p className="text-gray-600 mt-2">{restaurant.cuisine}</p>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex items-center text-gray-600">
              <MapPinIcon className="w-5 h-5 mr-2" />
              <span>{restaurant.address}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <PhoneIcon className="w-5 h-5 mr-2" />
              <span>{restaurant.phone}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <ClockIcon className="w-5 h-5 mr-2" />
              <span>{restaurant.openingHours}</span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Menu</h3>
            {restaurant.menu.map((category, index) => (
              <div key={index} className="mb-6">
                <h4 className="text-lg font-medium mb-3">
                  {category.category}
                </h4>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b pb-4">
                      <div className="flex justify-between">
                        <span className="font-medium">{item.name}</span>
                        <span className="text-gray-600">{item.price}</span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResturantModal;