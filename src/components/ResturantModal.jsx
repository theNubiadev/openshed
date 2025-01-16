import { XIcon, ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react"


function ResturantModal({ resturant, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">

      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">

        <div className="relative">
          <img src={resturant.image}
            alt={resturant.text}
            className="w-full h-64 object-cover" />

          <button onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
          >
            <XIcon className="w-5 h-5 " />
          </button>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">{resturant.name}</h2>
            <p className="text-gray-600">{resturant.cusine}</p>

            <div className="flex flex-col gap-2 mt-4 ">
              <div className="flex items-centertext-gray-600 " ></div>

            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

// ResturantModal.P
export default ResturantModal