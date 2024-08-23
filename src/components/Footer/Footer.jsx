/* eslint-disable no-unused-vars */
import React from 'react'
import {
    FaAndroid,
    FaAppStoreIos,
    FaFacebook,
    FaGoogle,
    FaInstagram,
    FaMapMarker,
    FaMousePointer,
    FaTwitter
} from 'react-icons/fa'
import { MdCall, MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white'>
        {/* Upper section banner */}
        <div className='bg-primary'>
            <div className="container text-black text-center py-10 lg:py-14 text-2xl font-bold space-y-4">
                <p>
                    WE ARE READY TO TAKE YOUR CALL 24 HOURS, 7 DAYS!
                </p>
                <h1 className='text-3xl md:text-5xl font-bold'>
                    +123 4567 890
                </h1>
            </div>
        </div>

        {/* Bottom Footer section */}
        <div className='container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-20 py-12'>
            {/* First Col */}
            <div className='space-y-6'>
                {/* Heading */}
                <h1 className='text-2xl py-3 font-bold uppercase border-b-8 border-primary'>
                    About Cab Ride
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure et fugit distinctio animi repudiandae quaerat ullam modi, porro quos corporis blanditiis officia dolorum nam quia nemo numquam impedit, tempora dolorem!
                </p>

                {/* social media */}
                <div className='flex items-center text-primary gap-3 text-2xl'>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaGoogle/>
                    <FaTwitter/>
                </div>
            </div>

            {/* Second Col */}
            <div className='space-y-6'>
                {/* Heading */}
                <h1 className='text-2xl py-3 font-bold uppercase border-b-8 border-primary'>
                    Download
                </h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure et fugit distinctio animi repudiandae quaerat ullam modi, porro quos.
                </p>

                {/* social media */}
                <div className='flex flex-col gap-3 text-2xl'>
                    <div className='flex items-center gap-6'>
                        <h1 className='text-xl text-primary font-semibold'>
                            Android User
                        </h1>
                        <FaAndroid/>
                    </div>

                    <div className='flex items-center gap-6'> 
                        <h1 className='text-xl text-primary font-semibold'>
                            IOS User
                        </h1>
                        <FaAppStoreIos/>
                    </div>
                </div>
            </div>

            {/* Third Col */}
            <div className='space-y-6'>
                {/* Heading */}
                <h1 className='text-2xl py-3 font-bold uppercase border-b-8 border-primary'>
                    Contact
                </h1>
                <div className='flex items-center gap-4'>
                    <FaMapMarker/> House no. 123, New Delhi, INDIA
                </div>
                <div className='flex items-center gap-4'>
                    <MdCall/> +123 4567 890
                </div>
                <div className='flex items-center gap-4'>
                    <MdEmail className='transform translate-x-1/3 scale-150'/> cabride@gmail.com
                </div>
                <div className='flex items-center gap-4'>
                    <FaMousePointer/> www.cabride.com
                </div>
            </div>
        </div>

        {/* Copyright section */}
        <p className='text-center text-sm py-4'>
            Copyright &copy; 2024. All rights reserved
        </p>
    </div>
  )
}

export default Footer