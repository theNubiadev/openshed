import { SoupIcon } from "lucide-react"

function Hero() {
  return (
    <div className="relative bg-white pt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:text-left">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Delicious food </span>
            <span className="block text-orange-600">delivered to you</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
            Order from your favorite restaurants, discover new places, and get
            your food delivered fast and fresh.
          </p>
          <div className="mt-8 sm:flex  sm:justify-center lg:justify-start">
            <button className="rounded-md shadow px-8 py-3 bg-orange-600 text-white font-medium hover:bg-orange-700">
              Order Now
            </button>
            <button className="mt-3  ml-2 sm:mt-0 sm:ml-3 rounded-md px-8 py-3 bg-gray-100 text-gray-900 font-medium hover:bg-gray-200">
              Browse Restaurants
            </button>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <img
            className="rounded-lg shadow-xl"
            // src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
               src="https://media.istockphoto.com/id/1398349731/photo/served-amala-with-assorted-meat.jpg?s=1024x1024&w=is&k=20&c=m9HSG0u_JMKbpwhlFSwfhHbbm1JCKSp-8fiLDMvWsEE="
            alt="Delicious food spread"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero