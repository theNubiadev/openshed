
function Meals() {
    const meals = [
        {
            name: "Original Jollof Rice",
            description: "Classical, original & rich naija fried rice,. Search with choice of protein and sides.",
            image: "https://media.istockphoto.com/id/1127727388/photo/nigerian-jollof-rice-with-chicken-thigh.jpg?s=1024x1024&w=is&k=20&c=5Twu3vXlHUHzuJGyz2uyHMWsL0mRxV2P65FLeIlnl2Y=",
        },
        {
            name: "Original Fried Rice",
            description: "Classical, original & rich naija fried rice. Served with choice of protein and sides.",
            image: "https://media.istockphoto.com/id/2152921512/photo/kabsa-rice-with-chicken-saudi-arabian-dish-national-dish-homemade-no-people.jpg?s=1024x1024&w=is&k=20&c=mmzN-KOueghPKcYVmy7fvmC3hLkxXqdM0re_KqdGpLk=",
        },
        {
            name: "Chicken Suya Shawarma",
            description: "Our signature chicken suya wrapped in a warm pita bread with veg and special sauce served with sides of choice.",
            image: "https://media.istockphoto.com/id/1212447634/photo/nigerian-suya-chicken-roast-potatoes-and-butternut-squash-with-jollof.jpg?s=612x612&w=is&k=20&c=l53geedIWXEhLlscagzVt5FKpEIR3aUxgZT5sHGxvhk=",
        },
        {
            name: "Egusi Soup",
            description: "Thickened with ground melon seeds and typically served with pounded yam.",
            image: "https://media.istockphoto.com/id/1398351215/photo/egusi-soup-with-fufu-pounded-yam.jpg?s=612x612&w=is&k=20&c=0maKJoGaJz3qHNTdT79effGUiTdvq5pTDl2EBfz4-iI=",
        },
        {
            name: "Seafood Okro",
            description: "Loaded Okra with fresh fish, prawns, crab& Calamari. Served with choice of swallow",
            image: "https://media.istockphoto.com/id/1011036020/photo/thai-egyption-food.jpg?s=612x612&w=0&k=20&c=vWVDsUBk-odI5fyh8X8n2xsTLp1j8i3SptfAS73XV6U="
        },
        {
            name: "Authentic Abula",
            description: "Amala, Ewedu and Gbegiri with the different assorted meats. ",
            image: "https://media.istockphoto.com/id/1169415720/photo/regional-african-food.jpg?s=612x612&w=is&k=20&c=Of7Ijfl1FevgVs-YjXGGH_blZKdAcp_25JJCBbuF5yk=",
        },
        {
            name: "Loaded Efo Riro",
            description: "Vegetable loaded with chunks of beef, kpomo and fish. Served with choice of swallow",
            image: "https://media.istockphoto.com/id/2152921512/photo/kabsa-rice-with-chicken-saudi-arabian-dish-national-dish-homemade-no-people.jpg?s=1024x1024&w=is&k=20&c=mmzN-KOueghPKcYVmy7fvmC3hLkxXqdM0re_KqdGpLk=",
        },
        {
            name: "Ewa Agoyin",
            description: "Beans with assorted meat and fished garnished with fried sauce. Ready to go with bread or another topping. ",
            image: "https://media.istockphoto.com/id/654775018/photo/a-plate-of-beans-served-with-red-palm-oil-stew-and-a-loaf-of-bread.jpg?s=612x612&w=is&k=20&c=Tpjxz0NnQ474d7QrFT9ZF6Q-U6sA_n0Nswc0eSTsDFU=",
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
                            <div className='mt-6'>
                                <h2 className="text-xl font-semibold mb-2 ">{meal.name}</h2>
                                <p className="text-sm text-gray-600">{meal.description}</p>
                            </div>
                            <button className=' text-orange-600 font-medium  mt-2 text-base '>Order Now </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Meals