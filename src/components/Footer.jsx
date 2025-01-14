
function Footer() {
  return (
    <div className='w-full px-6 py-8 bg-gray-900 text-white' >
      <div className='max-w-6xl mx-auto'>

        <div className='grid md:grid-cols-4 gap-8 '>
          <div>
            <h3 className='text-xl font-bold mb-4 text-orange-600 '> Openshed</h3>
            <p className="text-gray-400">  Delicious Food delivered to you. </p>
          </div>

          <div className="">
            <h2 className="font-semibold mb-4 ">About</h2>
            <ul className="space-y-2 ">
              <l1> <a href="" className='text-gray-400 flex' > About Us</a></l1>
              <l1> <a href="" className='text-gray-400 flex'> Careers</a></l1>
              <l1> <a href="" className='text-gray-400 flex'> Resturants</a></l1>
              <l1> <a href="" className='text-gray-400 flex'>  Partners</a></l1>
            </ul>
          </div>


          <div className="">
            <h2 className="font-semibold mb-4 ">Legal</h2>
            <ul className="space-y-2">
              <l1> <a href="" className='text-gray-400 flex'> Terms </a></l1>
              <l1> <a href="" className='text-gray-400 flex'> Privacy</a></l1>
              <l1> <a href="" className='text-gray-400 flex'> Support</a></l1>
            </ul>
          </div>

          <div className="">
            <h2 className="font-semibold mb-4 ">Contact</h2>
            <ul className="space-y-2">
              <l1> <a href="" className='text-gray-400 flex'> contact@openshed.com </a></l1>
              <l1> <a href="" className='text-gray-400 flex'> +234-7044909346</a></l1>
              <l1> <a href="" className='text-gray-400 flex'> Support</a></l1>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center -mb-4">Copyright 2025</p>
    </div>

  )
}

export default Footer