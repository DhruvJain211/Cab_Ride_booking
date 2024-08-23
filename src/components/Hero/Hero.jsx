/* eslint-disable no-unused-vars */
import React from 'react'
import cityImage from '../../assets/city.jpg'
import yellowCab from '../../assets/yellow-cab.png'

const bgStyle = {
    backgroundImage: `url(${cityImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "520px",
    width: "100vw",
};


const Hero = () => {
  return (
    <div style={bgStyle}>
        <div className='dark:bg-black/60 bg-white/50  backdrop-blur-sm flex dark:text-white duration-300 h-[520px]'>
            <div className="container grid grid-cols-1 place-items-center">
                {/* text content section */}
                <div className='text-center space-y-5 py-14'>
                    <p data-aos="fade-up" className='text-3xl font-extrabold uppercase text-primary'>
                        Book Cab now
                    </p>
                    <h1 data-aos="fade-up" data-aos-delay="600"  className='text-4xl font-bold md:text-6xl'>
                        +91 12345 67890
                    </h1>
                    <p data-aos-offset="0" data-aos="fade-up" data-aos-delay="1000" className='tracking-[8px] text-base sm:text-xl font-semibold translate-y-10 sm:translate-y-0'>
                        www.cabride.com
                    </p>
                </div>

                {/* Image section */}
                <div data-aos="zoom-in-right" data-aos-delay="300">
                    <img src={yellowCab} alt="yellow cab main page" className='max-h-[460px] sm:scale-125 w-[470px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero