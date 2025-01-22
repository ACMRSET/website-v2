import React from 'react'
import acmlogo from './../assets/acm-logo-white.png'
import rajagirilogo from './../assets/rajagiri-white.png'
const Footer = () => {
    return (
        <div className='bg-black text-white py-12 border-white border-2 flex justify-between '>
            <div className='flex space-x-4'>
                <div className='flex-shrink-0 hidden md:block'>
                    <img
                        src={acmlogo}
                        alt="Logo"
                        className="h-40 my-4 mx-10" // Adjust the height as needed
                    />
                </div>
                <div className="max-w-sm bg-slate-950 rounded-lg shadow-md p-4 text-center">
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex-col justify-center space-x-6">
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-pink-500 transition-transform transform hover:scale-110"
                        >
                            <div className='flex space-x-2 text-white items-center  hover:text-pink-500 transition-transform transform hover:scale-110 '>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                                    alt="Instagram"
                                    className="w-10 h-10 m-2"
                                />
                                instagram_id
                            </div>


                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-700 transition-transform transform hover:scale-110"
                        >
                            <div className='flex space-x-2 text-white items-center hover:text-blue-700 transition-transform transform hover:scale-110'>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg"
                                    alt="LinkedIn"
                                    className="w-10 h-10 m-2 "
                                />
                                linken_id
                            </div>
                        </a>
                    </div>
                </div>
                <div className="bg-slate-950 text-gray-200 max-w-sm p-6 rounded-lg shadow-lg ">
                    <div className=" text-center flex-col space-y-3">
                        <h2 className="text-xl font-semibold">Contact Us</h2>
                        <div>
                            <h2 className="text-xl font-semibold">John Doe</h2>
                            <p className="text-sm text-gray-400">johndoe@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-shrink-0 hidden md:block'>
                <img
                    src={rajagirilogo}
                    alt="Logo"
                    className="h-40 my-4 mx-10" // Adjust the height as needed
                />
            </div>
        </div>
    )
}

export default Footer