

const resturants: Resturant[] = [
  {
    id: 1,
    name: "Green Corner",
    image: "",
    rating: 4.5,
    deliveryTime: "25-40",
    minOrder: 10,
    cuisine: "Local Delicacy",
  },
  {
    id: 2,
    name: "Green Corner",
    image: "",
    rating: 4.5,
    deliveryTime: "25-40",
    minOrder: 10,
    cuisine: "Exotic",
  },
  {
    id: 3,
    name: "Item7Go",
    image: "",
    rating: 4.5,
    deliveryTime: "15-20",
    minOrder: 10,
    cuisine: "Fast Meal",
  }
];

const foodItems: FoodItem[] = [
  {
    id: 1,
    resturantId: 1,
    name: "Amala and Abula",
    price: 1200,
    description: "",
    image: "",
    category: "Swallow",
  },
  {
    id: 2,
    resturantId: 1,
    name: "Jollof Rice and Chicken",
    price: 1200,
    description: "",
    image: "",
    category: "Swallow",
  },
  {
    id: 3,
    resturantId: 1,
    name: "Fried Rice and Chicken",
    price: 1200,
    description: "",
    image: "",
    category: "Swallow",
  },
  {
    id: 4,
    resturantId: 1,
    name: " Extra Chicken",
    price: 1200,
    description: "",
    image: "",
    category: "Rice",
  }, {
    id: 5,
    resturantId: 2,
    name: "Egusi with Semo",
    price: 1500,
    description: "",
    image: "",
    category: "Swallow",
  },
  {
    id: 6,
    resturantId: 2,
    name: "Pounded Yam and Soup with beef",
    price: 3000,
    description: "",
    image: "",
    category: "Swallow",
  },
  {
    id: 7,
    resturantId: 2,
    name: "Extra Semo",
    price: 200,
    description: "",
    image: "",
    category: "Swallow",
  },
  {
    id: 8,
    resturantId: 2,
    name: " Extra Beef",
    price: 500,
    description: "",
    image: "",
    category: "Meat",
  },
  {
    id: 9,
    resturantId: 3,
    name: "Sharwamah",
    price: 2000,
    description: "",
    image: "",
    category: "Snacks",
  },
  {
    id: 10,
    resturantId: 3,
    name: "Hotdog Sharwanah",
    price: 1200,
    description: "",
    image: "",
    category: "Snacks",
  },
  {
    id: 11,
    resturantId: 3,
    name: "Eztra Hot dog",
    price: 300,
    description: "",
    image: "",
    category: "Snacks",
  },
  {
    id: 12,
    resturantId: 3,
    name: "Drink",
    price: 400,
    description: "",
    image: "",
    category: " Snacks",
  },
]
function Meals() {
  return (
    <div>Meals</div>
  )
}

export default Meals