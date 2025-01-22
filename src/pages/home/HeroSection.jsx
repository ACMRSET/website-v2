import React from 'react'
import hero_img from "./../../assets/mint-green-bg.png"
import monkey_img from "./../../assets/monkey.png"
const HeroSection = () => {
    return (
        <div className='bg-cover h-[100vh] w-full bg-zinc-900' >

            <div className='grid grid-cols-2 '>
                <div>
                    <span className='text-9xl'>Advancing Computing</span>
                    <span className='text-9xl'>As a</span>
                    <span className='text-9xl'>Scinece and proffesion</span>

                </div>

            </div>

        </div >
    )
}

export default HeroSection