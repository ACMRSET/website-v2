import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from './HeroSection'
import Footer from '../../components/Footer'
import AboutUs from './AboutUs'
import { AuroraHero } from './AuroraHero'

const Home = () => {
    return (
        <div>
            <Navbar />
            <AuroraHero />
            {/* <HeroSection /> */}
            {/* <AboutUs /> */}
            <Footer />
        </div>
    )
}

export default Home