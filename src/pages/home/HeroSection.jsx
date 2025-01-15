import React from 'react'
import hero_img from "./../../assets/mint-green-bg.png"
import monkey_img from "./../../assets/monkey.png"
const HeroSection = () => {
    return (
        <div className='bg-cover h-[100vh] w-full' style={{ backgroundImage: `url(${hero_img})` }}>

            <div className='grid grid-cols-2 '>
                <div>
                    HeroSection

                </div>

                <div className="flex mt-14">
                    <img
                        src={monkey_img}
                        alt="MOnkeey"
                        className="max-h-[80vh] max-w-[80%] object-contain"
                    />
                </div>
            </div>

        </div>
    )
}

export default HeroSection