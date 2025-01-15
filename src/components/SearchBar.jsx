import { useState } from "react"
import { SearchIcon } from "lucide-react";


function SearchBar() {

    const [value, OnChange] = useState('');
    
  return (
    <div className="relative w-full max-w-md">
        <input 
            type="text"
            value={value}
            onChange={(e) => OnChange(e.target.value)}
            placeholder="Search Resturants or Cusines"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focu:border-transparent"
        />
        <SearchIcon  className="absolute left-3 top-1/2 transform -translate-y-1/2"/>
    </div>
  )
}

export default SearchBar