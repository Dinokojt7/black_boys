import React, {useState} from 'react'
import Logo from '../assets/logomark.png';
import {HiMenuAlt3} from 'react-icons/hi'
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
    const[nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        if(!nav) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    };
  return (
    <div className='absolute w-full flex top-0 justify-between p-4'>
        <img className='z-20 p-0 ml-4 top-0' src={Logo} alt='/' style={{width:"6rem"}}/>
        <div onClick={handleNav} className='z-20 top-0 p-0 text-white cursor-pointer'>
            {nav ? <IoCloseSharp size={28}/> : <HiMenuAlt3 size={28} />} 
        </div>
        <div className={
                nav 
                ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10' 
                : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
            }
        >
            <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                <li className='font-bold text-3xl p-8'>Home</li>
                <li className='font-bold text-3xl p-8'>What We Do</li>
                <li className='font-bold text-3xl p-8'>Reservations</li>
                <li className='font-bold text-3xl p-8'>Conference & Events</li>
                <li className='font-bold text-3xl p-8'>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar