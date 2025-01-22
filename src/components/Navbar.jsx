import React from 'react'
import logo from './../assets/acm-logo.png'
const Navbar = () => {


    return (
        <div className='bg-black h-24 w-full px-8 py-2 flex text-slate-100 justify-between items-center border-b-2 border-blue-900'>
            <div className='flex-shrink-0'>
                <a href="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-20" // Adjust the height as needed
                    />
                </a>
            </div>
            <div className='flex items-center justify-between space-x-8'>
                <div className=" space-x-4 md:space-x-10 font-semibold text-sm md:text-base pb-1">
                    <a href="team" >TEAM</a>
                    <a href="events" >EVENTS</a>
                    {/* <a href="#events" >ABOUT US</a> */}
                </div>
                <div className="flex space-x-4 md:space-x-8 font-semibold text-sm md:text-base css-button-gradient--5 text-center items-center">
                    JOIN US
                </div>
            </div>

        </div>
    )
}

export default Navbar

