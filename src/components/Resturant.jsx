import {ClockIcon } from 'lucide-react'

function Resturant() {

    const resturants = [
        {   name: "Yellow Corner", 
          type: "Causual Dining",
          icon: < ClockIcon  className='w-6 h-6 text-orange-500'/> ,
          time: "10-15 min",
          image: "https://www.istockphoto.com/photo/black-family-restaurant-and-eating-with-mom-and-child-together-with-bonding-food-and-gm2032134594-562114998?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fresturant&utm_medium=affiliate&utm_source=unsplash&utm_term=resturant%3A%3A%3A",
        }, 
        {name: "Green Corner", 
            type: "Causual Dining",
            icon: < ClockIcon  className='w-6 h-6 text-orange-500'/> ,
            time: "10-15 min",
            image: "https://www.istockphoto.com/photo/enjoying-a-brunch-together-gm1829241109-550651763?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fresturant&utm_medium=affiliate&utm_source=unsplash&utm_term=resturant%3A%3A%3A",
          },
          {name: "Ajewumi", 
            type: "Local Dining",
            icon: < ClockIcon  className='w-6 h-6 text-orange-500'/> ,
            time: "10 - 15 min",
            image: "https://www.istockphoto.com/photo/interior-of-a-modern-cozy-italian-restaurant-gm1390005458-447104873?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fresturant&utm_medium=affiliate&utm_source=unsplash&utm_term=resturant%3A%3A%3A",
          },
          {name: "Fanawole", 
            type: "Local Dining",
            icon: < ClockIcon  className='w-6 h-6 text-orange-500'/> ,
            time: "30 - 40 min",
            image: "https://images.unsplash.com/photo-1723744910344-370bc4305972?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {name: "F&F", 
            type: "Local Dining",
            icon: < ClockIcon  className='w-6 h-6 500bg-orange-'/> ,
            time: "30 - 45 min",
            image: "https://unsplash.com/photos/3d-render-of-luxury-restaurant-interior-V9CVO_cv-78"
          },
          {name: "God's Glory Resturant", 
            type: "Fast food",
            icon: < ClockIcon  className='w-6 h-6 text-orange-500'/> ,
            time: "10 - 15 min",
            image:"https://images.unsplash.com/photo-1615829718741-a664638362eb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdHVyYW50fGVufDB8fDB8fHww"
          }
    ];

  return (
    <div className='bg-gray-50 ' >
<div className='max-w-7xl mx-auto p-4 sm:p-6 lg:p-8'> 
    <div className='text-center mb-6'> 
        <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl   '>Featured Resturants </h2>
        <p className='mt-2 text-lg text-gray-500'> Check out our array of top rated resturants </p>
    </div>

    {/* <div className="mt-16">  */}
        <div className="grid  gap-6 md:grid-cols-3">
            {resturants.map(( store,index ) => (
                <div key={index} className='bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md  p-4'> 
                <img  src={store.image} alt={store.name}
                    className='w-full h-48 object-cover rounded-lg'
                />

                <h2 className='text-xl font-semibold mb-2'>{store.name} </h2>
                <p  className='text-gray-600 text-sm mb-2 '> {store.type}  </p>

                <div className='flex items-center justify-between '>
                    <p className='flex items-center justify-center'> {store.icon} <span className='text-sm text-gray-500'> {store.time}</span> </p>
                    </div>
                </div>
            ))}
             {/* </div> */}
    </div>
</div>
    </div>
  )
}

export default Resturant