/* eslint-disable no-unused-vars */
import React from 'react'
import img from '../assets/notfound.svg'

const NotFoundPage = () => {
  return (
    <div className='bg-white dark:bg-dark h-screen flex flex-col gap-12 justify-center items-center duration-300'>
        <img src={img} alt="not found" className='max-w-[400px]'/>
        <h1 className='text-3xl font-bold text-center dark:text-white'>
            Page Not Found!
        </h1>
    </div>
  )
}

export default NotFoundPage