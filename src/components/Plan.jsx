import React from 'react'
import Plan1 from '../assets/plan1.jpg';
import Plan2 from '../assets/plan2.jpg';
import Plan3 from '../assets/plan3.jpg';
import Plan4 from '../assets/plan4.jpg';
import Plan5 from '../assets/plan5.jpg';

function Plan() {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/*Left Side*/}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='object-cover row-span-3 w-full h-full p-2' src={Plan1} alt='/'/>
            <img className='object-cover row-span-2 w-full h-full p-2' src={Plan3} alt='/'/>
            <img className='object-cover row-span-2 w-full h-full p-2' src={Plan4} alt='/'/>
            <img className='object-cover row-span-3 w-full h-full p-2' src={Plan2} alt='/'/>
            <img className='object-cover row-span-2 w-full h-full p-2' src={Plan5} alt='/'/>
        </div>
         {/*Right Side*/}
         <div className='flex flex-col h-full justify-center'>
            <h3 className='text-4xl md:text-5xl text-[#b67406] font-bold font-explora'>Celebrating Your Life</h3>
            <p className='text-2xl py-6'>
                Experience a great event with our experienced planners
            </p>
            <p className='pb-6'>
            From your engagement party to your baby shower, your graduation party to your wedding reception, your day-after brunch to your anniversary milestones, Black Boy Events is the for all things event-related.
            </p>
            <div>
                <button className='border-[#b67406] bg-white/20 text-[#b67406] font-semibold mr-4 hover:shadow-xl'>
                    Learn More
                </button>
                <button className='border-[#b67406] bg-[#a57316] text-white font-semibold hover:shadow-xl'>
                    Start Booking
                </button>
            </div>
         </div>
    </div>
  )
}

export default Plan