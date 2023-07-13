import React from 'react'
import Hero from '../assets/hero.jpg';
import Treats from '../assets/treats.jpg';
import Staff from '../assets/staff.jpg';

function Events() {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-7 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-3xl font-bold font-explora text-[#b67406]'>
            Special Occasions
            </h3>
            <p className='pt-4'>Parties are about the people, the thoughtfully planned details and the delicious food! The team at Black Boys Events is remarkable in their ability to imagine charming and innovative occasions that bring your unique aesthetic to life.</p>
        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover  w-full h-full ' src={Hero} alt='/'/>
            <img className='object-cover row-span-2 w-full h-full' src={Staff} alt='/'/>
            <img className='object-cover  w-full h-full ' src={Treats} alt='/'/>
        </div>
    </div>
  )
}

export default Events