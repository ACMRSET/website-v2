import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useState } from 'react'

export const Events = () => {
    const [activeOption, setActiveOption] = useState('upcoming');
    return (
        <div>
            <Navbar />
            <div className="bg-gray-800 w-1/4 p-4 min-h-screen">
                <h1 className="text-3xl text-center text-white mb-6">Events</h1>
                <ul>
                    {['Upcoming', 'Past'].map((option) => (
                        <li
                            key={option.toLowerCase()}
                            onClick={() => setActiveOption(option.toLowerCase())}
                            className={`cursor-pointer py-2 px-2 text-white ${activeOption === option.toLowerCase() ? 'bg-gray-700' : ''
                                } hover:bg-gray-700 transition-colors`}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            </div>
            <div>

            </div>
            <Footer />
        </div>
    )
}
