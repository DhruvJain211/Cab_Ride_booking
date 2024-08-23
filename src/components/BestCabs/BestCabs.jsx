/* eslint-disable no-unused-vars */
import React from 'react'
import Img2 from "../../assets/car2.png"

const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "Economy Class",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illum culpa.",
        aosDelay: "100"
    },
    {
        id: 2,
        img: Img2,
        name: "Standard Class",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illum culpa.",
        aosDelay: "300"
    },
    {
        id: 3,
        img: Img2,
        name: "Premium Class",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illum culpa.",
        aosDelay: "500"
    },
]

const BestCabs = () => {
  return (
    <div className='py-10 bg-white dark:bg-dark text-black dark:text-white'>
        <div className='container'>
            {/* header title section */}
            <div data-aos="fade-up" className='text-center mb-20'>
                <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>
                    Choose Best Cab
                </h1>
            </div>

            {/* Best Cabs Card section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 place-items-center'>
                {ServicesData.map(({id, img, name, description, aosDelay}) => {
                    return (
                        // '!': This makes the class "important," overriding other conflicting styles.
                        <div data-aos="fade-up" data-aos-delay={aosDelay} className='dark:bg-black rounded-2xl group bg-white hover:!bg-primary shadow-xl duration-200 relative max-w-[300px]' key={id}> 
                            {/* image section */}
                            <div className='h-[110px]'>
                                <img src={img} alt="" className='max-w-[200px] block mx-auto transform -translate-y-20 group-hover:scale-110 group-hover:translate-x-4 duration-300'/>
                            </div>

                            {/* text section */}
                            <div className='p-4 text-center space-y-5'>
                                <h1 className='text-xl font-bold'>
                                    {name}
                                </h1>
                                <p className='text-gray-500 group-hover:text-black duration-300 text-sm line-clamp-2'>
                                    {description}
                                </p>
                                <p className='text-primary text-2xl font-bold group-hover:text-black'>10Rs/km</p>
                                <button className='bg-black text-white px-4 py-2 rounded-lg'>
                                    Read More
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default BestCabs