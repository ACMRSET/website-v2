import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import eventData from '../../assets/events/events_data.json';

export const Events = () => {
    const [activeOption, setActiveOption] = useState('upcoming');

    const filteredEvents = eventData.events.filter(
        (event) => event.type === activeOption
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

            <div className='flex-grow min-h-[80vh]'>
                <div className="flex flex-col lg:flex-row ">
                    {/* Sidebar */}
                    <div className="w-full lg:w-1/4 lg:h-full p-6">
                        <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl p-6">
                            <h1 className="text-3xl text-center mb-6 font-semibold">Events</h1>
                            <ul className="flex lg:flex-col justify-center gap-4">
                                {['Upcoming', 'Past'].map((option) => (
                                    <li
                                        key={option.toLowerCase()}
                                        onClick={() => setActiveOption(option.toLowerCase())}
                                        className={`cursor-pointer text-center py-2 px-4 rounded-xl transition-colors font-medium ${activeOption === option.toLowerCase()
                                            ? 'bg-blue-600 bg-opacity-50'
                                            : 'hover:bg-white/10'
                                            }`}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Events Display */}
                    <div className="w-full lg:w-3/4 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map((event) => (
                                <div
                                    key={event.id}
                                    className=" w-56 md:w-72 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                                >
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-56  md:h-80 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                                        <p className="text-gray-300 text-sm">{event.date}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center text-lg text-gray-400">
                                Nothing yet
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
