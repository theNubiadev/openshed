import {StarIcon} from 'lucide-react';

function Testimonials() {

    const testimonials = [
        {   name: "Opeyemi Famakin",
            role: "Food Critic",
            image: "https://images.app.goo.gl/zDLpFYnxcvPufwvp8",
            review: "10/10 is for God, 9/10 is for Me, 8/10 is for the best meal i've taken. Openshed is a beauitful initiative and i love it. "
        },   
        {
            name: "Hilda Baci",
            role: "Food Creator",
            image: "https://images.app.goo.gl/3BETUEmNd3UagjfF8",
            review: "As a food blogger, I appreciate the quality of restaurants available. The app is user-friendly and reliable."
        },
        {   name: "Ajaiyeoba Dayo",
            role: "Food Creator",
            image: "https://media.istockphoto.com/id/1398349488/photo/amala-and-ewedu.jpg?s=1024x1024&w=is&k=20&c=OH4w7qO33GjVjxaS7dplXvYRjGNIzbYXd3lQVvdktqg=",
            review: "The best food delivery app I've ever used. Quick, reliable, and the food always arrives fresh!"
        }
    ];
  return (
    <div className='bg-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '> 
            <div className='text-center'>
                <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>What Our Customer's Say </h2>
                <p className='mt-4 text-lg text-gray-500'>Don't just take our word for it</p>
                </div>

                <div className=' mt-16 grid grid-cols-1 gap-8 md:grid-cols-3'> 
                    {testimonials.map ((testimony ,index) => (
                        <div className='bg-gray-50 rounded-lg p-6  shadow-sm ' key={index}>
                            <div className='flex items-center'>
                                <img src={testimony.image}
                                     alt={testimony.name} 
                                     className='h-12 w-12 rounded-full object-cover' /> 
                            <div className='ml-14 '>
                                <h4 className='text-lg font-medium text-gray-900'>
                                    {testimony.name}
                                    </h4>
                                    <p className='test-sm test-gray-500'>{testimony.role} </p>
                                     </div>

                                </div> 
                                <div className="mt-4 flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 text-gray-600">{testimony.review}</p>
            </div>

                    ))}
                </div>
            </div>
    </div>
  )
}

export default Testimonials