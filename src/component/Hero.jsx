import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'>The <span className='font-bold text-orange-400'>Best</span></h1>
                <h1 className='px-4 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'>Foods <span className='font-bold text-orange-400'>Delivered</span></h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pancakes" />
        </div>
    </div>
  )
}

export default Hero