
function Meals() {
    const meals = [
        {
            name: "Original Fried Rice",
            description: "Classical, original & rich naija fried rice,. Search with choice of protein and sides.",
            image: "",
        },
        {
            name: "Original Fried Rice",
            description: "Classical, original & rich naija fried rice. Served with choice of protein and sides.",
            image: "",
        },
        {
            name: "Chicken Suya Shawarma",
            description: "Our signature chicken suya wrapped in a warm pita bread with veg and special sauce served with sides of choice.",
            image: "",
        },
        {
            name: "Egusi Soup",
            description: "Thickened with ground melon seeds and typically served with pounded yam.",
            image: "",
        },
        {
            name: "Seafood Okro",
            description: "Loaded Okra with fresh fish, prawns, crab& Calamari. Served with choice of swallow",
            image: ""
        },
        {
            name: "Authentic Abula",
            description: "Amala, Ewedu and Gbegiri with the different assorted meats. ",
            image: "",
        },
        {
            name: "Loaded Efo Riro",
            description: "Vegetable loaded with chunks of beef, kpomo and fish. Served with choice of swallow",
            image: "",
        }
    ]

    return (
        <div className="bg-gray-50">
            <div className="max-w-7xxl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl ">Check Out Mouth Watering Dishes</h2>
                    <p className="mt-2 text-lg text-gray-500 mb-2">Engulf yourself in the taste and aroma of our properly made meals. </p>
                </div>

                <div className="grid gap-6 md:grid-cols-4 ">
                    {meals.map((meal, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md p-6">
                            <img src={meal.image} alt={meal.name}
                                className="w-full h-48 object-cover rounded-sm"
                          />
                            <div>
                                <h2 className="text-xl font-semibold mb-2 ">{meal.name}</h2>
                                <p className="text-base text-gray-600">{meal.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Meals