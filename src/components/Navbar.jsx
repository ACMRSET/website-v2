import React from 'react'
import logo from './../assets/acm-logo.png'
const Navbar = () => {


    return (
        <div className='bg-black h-24 w-full px-8 py-2 flex text-slate-100 justify-between items-center'>
            <div className='flex-shrink-0'>
                <img
                    src={logo}
                    alt="Logo"
                    className="h-20" // Adjust the height as needed
                />
            </div>
            <div className="flex space-x-4 md:space-x-8 font-semibold text-sm md:text-sm ">
                <a href="#team" >TEAM</a>
                <a href="#events" >EVENTS</a>
                {/* <a href="#events" >ABOUT US</a> */}
            </div>
            <div className="flex space-x-4 md:space-x-8 font-semibold text-sm md:text-sm ">
                JOIN US
            </div>

        </div>
    )
}

export default Navbar