/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export const BannerCard = ({title, description, icon}) => {
  return (
    <div className='max-w-[350px] mx-auto'>
        <div className="flex items-center gap-4">
            <div data-aos="fade-up">
                <span className='h-[60px] w-[60px] rounded-full text-black bg-primary flex items-center justify-center'>
                    {icon}
                </span>
            </div>
            <div data-aos="fade-up" className='space-y-2'>
                <h1 className="text-xl uppercase text-primary font-bold">
                    {title}
                </h1>
                <p className='text-white'>
                    {description}
                </p>
            </div>
        </div>
    </div>
  )
}
