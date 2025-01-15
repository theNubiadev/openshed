import { XIcon, ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react"
function ResturantModal({resturant, onClick}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">

        <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">

        <div className="relative">
            <img src={resturant.image} 
                alt={resturant.text}
                className="w-full h-64 object-cover" />
        </div>
        </div>

    </div>
  )
}

export default ResturantModal