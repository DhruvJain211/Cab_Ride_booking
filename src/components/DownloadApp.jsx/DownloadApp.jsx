/* eslint-disable no-unused-vars */
import React from 'react'
import carBooking from '../../assets/carbooking.png'
import appStore from '../../assets/website/app_store.png'
import playStore from '../../assets/website/play_store.png'
import { Link } from 'react-router-dom'

const DownloadApp = () => {
  return (
    <div className='bg-[#f5f5f5] dark:bg-black dark:text-white'>
        <div className="container">
            {/* header title section */}
            <div data-aos="fade-up" className='space-y-3 uppercase text-center py-14'>
                <p className='text-2xl font-semibold'>
                    Download
                </p>
                <h1 className='text-3xl font-bold'>
                    <span>Cab</span>
                    <span className='text-primary'>
                        Ride
                    </span>
                    &nbsp;App
                </h1>
            </div>

            {/* Card Section */}
            <div data-aos="fade-up" className='grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center'>
                <div className='space-y-8 ,max-w-[400px] mx-auto'>
                    {/* text content section */}
                    <h1 className='text-2xl font-bold'>
                        Download the App! Free Cab Voucher for you. Get much more Exciting New Offers
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ad animi consequuntur aperiam unde!
                    </p>

                    {/* Stores Logo section */}
                    <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                        <Link to="https://www.apple.com/in/app-store/" target='_blank'>
                            <img src={appStore} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                        </Link>
                        <Link to="https://play.google.com/store/apps" target='_blank'>
                            <img src={playStore} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                        </Link>
                    </div>
                </div>

                {/* Image section */}
                <div>
                    <img className='max-w-[400px]' src={carBooking} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownloadApp