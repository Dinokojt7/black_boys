import React from 'react'
import Slider1 from '../assets/hero.jpg';

const Hero = () => {
  return (
    <div className='w-full h-[screen]'>
         <img className='top-0 left-0 w-full h-screen object-cover' src={Slider1} alt='/'/>
         <div className=' absolute top-0 left-0 w-full h-screen'/>
         <div className='absolute top-0 w-full h-screen flex flex-col justify-center text-white'>
            <div className='bg-black/20 p-auto mt-10 items-center w-full absolute p-4'>
                <h1 className='font-semibold font-explora text-3xl md:text-5xl drop-shadow-2xl'>
                    Events & Catering Serivces
                </h1>
                <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                Rooted in cultivated experiences, Black Boys Events works with a diverse client base. We provide off-premise catering for corporate, social, and institutional clients. We specialize in corporate dining programs, weddings, and events at a variety of select venues in and around South Africa. We take pride in our reputation of honesty and innovation.
                </p>
                <button className='border-[#b67406]/80 bg-[#a57316]/80 text-white font-semibold hover:shadow-xl'>Book Now</button>
            </div>
         </div>
    </div>
  )
}

export default Hero