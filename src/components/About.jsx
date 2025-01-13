import React from 'react'
import {SearchIcon, ClockIcon , CalendarIcon, StarIcon} from 'lucide-react'
function About() {
    const features = [
        {
            icon:  <SearchIcon className='h-6 w-6 text-orange-600'/>,
             title: "Find Restaurants",
             description: "Discover the best restaurants in your area with easy search"
        },
        {
            icon:  <ClockIcon className='h-6 w-6 text-orange-600'/>,
             title: "Quick Delivery",
             description: "Get your food delivered fast and fresh to your doorstep"
        },
        {
            icon:  <CalendarIcon className='h-6 w-6 text-orange-600'/>,
             title: "Easy Reservation",
             description: " Book a table at your favorite resturant in seconds"
        },
        {
            icon: <StarIcon className='h-6 w-6 text-orange-600'/>,
            title: "Best Quality",
            description: "We partner with only the best restaurants in town",
        }
    ]
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Simple steps to get your favorite food delivered to your home
          </p>
        </div>
        <div className='mt-16'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
                {features.map((feature, index) => (
                    <div key={index} className='bg-white shadow-sm p-6 rounded-sm'> 
                    <div className='inline-block p-2 bg-orange-100 rounded-lg'>
                        {feature.icon} 
                        </div>
                        <h3 className='mt-4 text-lg font-medium text-gray-900'> {feature.title} </h3>
                        <p className='text-gray-500 mt-2 '> {feature.description}</p>
                        </div>
               ))}
                 </div>
            </div>
        </div>
        </div>
  )
}

export default About