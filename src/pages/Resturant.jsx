import { useState } from "react"
import SearchBar from "../components/SearchBar"


function Resturant() {
    const [searchItem, setSearchItem] = useState('')

    const featuredResturant = [
        {
            id: 1,
            name: "The Rustic Table",
            image:
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            cuisine: "Contemporary American",
            rating: 4.5,
            address: "123 Main St, City",
            phone: "(555) 123-4567",
            openingHours: "11:00 AM - 10:00 PM",
            menu: [
                {
                    category: "Starters",
                    items: [
                        {
                            name: "Artisan Bread Basket",
                            price: "$8",
                            description: "Freshly baked selection of artisan breads",
                        },
                        {
                            name: "Soup of the Day",
                            price: "$7",
                            description: "Chef's daily creation",
                        },
                    ],
                },
                {
                    category: "Main Courses",
                    items: [
                        {
                            name: "Grilled Salmon",
                            price: "$26",
                            description: "Fresh Atlantic salmon with seasonal vegetables",
                        },
                        {
                            name: "Braised Short Rib",
                            price: "$28",
                            description: "Slow-cooked beef short rib with mashed potatoes",
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            name: "The Rustic Table",
            image:
                "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            cuisine: "Contemporary American",
            rating: 4.5,
            address: "123 Main St, City",
            phone: "(555) 123-4567",
            openingHours: "11:00 AM - 10:00 PM",
            menu: [
                {
                    category: "Starters",
                    items: [
                        {
                            name: "Artisan Bread Basket",
                            price: "$8",
                            description: "Freshly baked selection of artisan breads",
                        },
                        {
                            name: "Soup of the Day",
                            price: "$7",
                            description: "Chef's daily creation",
                        },
                    ],
                },
                {
                    category: "Main Courses",
                    items: [
                        {
                            name: "Grilled Salmon",
                            price: "$26",
                            description: "Fresh Atlantic salmon with seasonal vegetables",
                        },
                        {
                            name: "Braised Short Rib",
                            price: "$28",
                            description: "Slow-cooked beef short rib with mashed potatoes",
                        },
                    ],
                },
            ],
        },
    ];

    const [selectedResturant, setSelectedResturant] = useState(null);
    const filteredResturants = resturant.filter(
        (resturant) =>
            resturant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resturant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 ">
            <div className=" mt-12">
                <div className="flex justify-center mb-8 ">
                    <SearchBar value={searchItem} onChange={setSearchItem} />
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


                </div>
            </div>

        </div>
    )
}

export default Resturant