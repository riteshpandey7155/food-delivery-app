import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Cards */}
      <div className='relative rounded-xl'>
        <div className='absolute w-full h-full text-white bg-black/50 rounded-xl'>
          <p className='px-2 pt-4 text-2xl font-bold '>Sun's Out, BOGO's Out</p>
          <p className='px-2 '>Thorugh 8/26</p>
          <button className='absolute p-1 mx-2 text-black bg-white border border-white rounded-md bottom-4'>
            Order Now
          </button>
        </div>
        <img
          src='https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          className='rounded-xl max-h-[150px] md:max-h-[200px] w-full object-cover'
        />
      </div>
      <div className='relative rounded-xl'>
        <div className='absolute w-full h-full text-white bg-black/50 rounded-xl'>
          <p className='px-2 pt-4 text-2xl font-bold '>New Restaurants</p>
          <p className='px-2 '>Added Daily</p>
          <button className='absolute p-1 mx-2 text-black bg-white border border-white rounded-md bottom-4'>
            Order Now
          </button>
        </div>
        <img
          src='https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          className='rounded-xl max-h-[150px] md:max-h-[200px] w-full object-cover'
        />
      </div>
      <div className='relative rounded-xl'>
        <div className='absolute w-full h-full text-white bg-black/50 rounded-xl'>
          <p className='px-2 pt-4 text-2xl font-bold '>We Deliver Desserts Too</p>
          <p className='px-2 '>Tasty Treats</p>
          <button className='absolute p-1 mx-2 text-black bg-white border border-white rounded-md bottom-4'>
            Order Now
          </button>
        </div>
        <img
          src='https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          className='rounded-xl max-h-[150px] md:max-h-[200px] w-full object-cover'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
