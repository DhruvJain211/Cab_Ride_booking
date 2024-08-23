/* eslint-disable no-unused-vars */
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-primary text-black sm:min-h-[600px] sm:grid sm:place-items-center duration-300 pt-24 pb-10'>
        <div className="container grid grid-cols-1 sm:grid-cols-2 place-items-center">
            {/* left text content section */}
            <div className='space-y-5 sm:p-16 pb-6'>
                <h1 data-aos="fade-up" className='text-2xl sm:text-3xl font-bold'>
                    Best in City
                </h1>
                <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold uppercase'>
                    Most Trusted Cab Services in Delhi
                </h1>
                <p data-aos="fade-up" className='tracking-wide leading-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla minus molestiae possimus architecto alias iure! Possimus minima laboriosam sit pariatur! Ex sint facere nobis incidunt tempore animi at dicta iusto! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button data-aos="fade-up" data-aos-offset="0" className='bg-black text-white px-4 py-2 rounded-xl'>
                    Book Now
                </button>
            </div>

            {/* right text content section */}
            <div data-aos="fade">
                <div className='w-full md:max-w-[350px] mx-auto'>
                    <h1 className='uppercase text-white text-2xl bg-black px-5 py-3'>
                        Book a Cab
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 bg-white p-5">
                        <input className='px-5 py-1 mb-4 border-b-2 border-gray-300 ring-0 focus:ring-0 focus:outline-none' type="text" name="" id="" placeholder='Name'/>
                        <input className='px-5 py-1 mb-4 border-b-2 border-gray-300 ring-0 focus:ring-0 focus:outline-none' type="tel" name="" id="" placeholder='Phone'/>
                        <input className='px-5 py-1 mb-4 border-b-2 border-gray-300 ring-0 focus:ring-0 focus:outline-none' type="datetime" name="" id="" placeholder='Start'/>
                        <input className='px-5 py-1 mb-4 border-b-2 border-gray-300 ring-0 focus:ring-0 focus:outline-none' type="datetime" name="" id="" placeholder='End'/>
                        <input className='px-5 py-1 mb-4 border-b-2 border-gray-300 ring-0 focus:ring-0 focus:outline-none col-span-2' type="text" name="" id="" placeholder='Choose Vehicle'/>

                        <button className='col-span-2 bg-black mt-6 text-white py-2 px-4 rounded-lg w-full'>
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact