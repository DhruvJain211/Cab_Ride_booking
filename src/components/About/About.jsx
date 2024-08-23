/* eslint-disable no-unused-vars */
import React from 'react'
import bgImage from '../../assets/girl.jpg'
import { SlStar } from 'react-icons/sl'
import { BannerCard } from './BannerCard';

// const bgStyle = {
//     backgroundImage: `url(${bgImage})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     height: "700px",
//     width: "100vw",
// };

const About = () => {
  return (
    //wrote below css in this way as to make it responsive for below sm, earlier content was going out of background image below sm
    <div className='bg-cover bg-center bg-no-repeat h-[700px] sm:h-[530px] w-full' style={{backgroundImage: `url(${bgImage})`}}>
        <div className="text-white bg-black/80 min-h-[700px] sm:min-h-[530px] flex items-center py-10">
            <div className='container'>
                {/* header title section */}
                <div data-aos="fade-up" className='space-y-3 uppercase text-center py-14'>
                    <p className='text-primary text-2xl font-semibold'>
                        We do Much Better
                    </p>
                    <h1 className='text-2xl font-bold'>
                        Than You wish
                    </h1>
                </div>

                {/* Cards section */}
                <div data-aos="fade-up" className='grid grid-cols-1 sm:grid-cols-2 gap-8 aos-init aos-animate'>
                    <div className='space-y-8'>
                        <BannerCard title="Fast Booking" description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} icon={<SlStar/>}/>
                        <BannerCard title="Fast Booking" description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} icon={<SlStar/>}/>
                    </div>
                    <div className='space-y-8'>
                        <BannerCard title="Fast Booking" description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} icon={<SlStar/>}/>
                        <BannerCard title="Fast Booking" description={"Lorem ipsum dolor sit amet consectetur adipisicing elit."} icon={<SlStar/>}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About