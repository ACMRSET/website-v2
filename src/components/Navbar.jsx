import React from 'react'
import logo from './../assets/acm-logo.png'
const Navbar = () => {


    return (
        <div className='bg-black h-24 w-full px-8 py-2 flex text-slate-100 justify-between items-center border-b-2 border-blue-900'>
            <div className='flex-shrink-0 transition-transform duration-200 hover:scale-110'>
                <a href="/">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-20" // Adjust the height as needed
                    />
                </a>
            </div>
            <div className='flex items-center justify-between space-x-8'>
                <div className=" space-x-4 md:space-x-10 font-semibold  md:text-base pb-1 ">
                    <a className="text-xl transition-all duration-200 hover:text-2xl" href="team" >TEAM</a>
                    <a className="text-xl transition-all duration-200 hover:text-2xl" href="events" >EVENTS</a>
                    {/* <a href="#events" >ABOUT US</a> */}
                </div>

                {/* <button type="button" class="flex space-x-4 md:space-x-8 md:text-base css-button-gradient--5items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300
                 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                transition-transform duration-200 hover:scale-110">
                    JOIN US
                </button> */}
                <a href="https://www.acm.org/membership/join" type='button' target="_blank"
                    rel="noopener noreferrer">
                    <button
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-medium text-gray-900 rounded-xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 hover:text-xl bg-white dark:bg-gray-900 rounded-xl group-hover:bg-transparent group-hover:dark:bg-transparent">
                            JOIN US
                        </span>
                    </button>
                </a>
            </div>

        </div>
    )
}

export default Navbar

