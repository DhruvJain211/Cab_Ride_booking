/* eslint-disable no-unused-vars */
import React from 'react'
import Slider from 'react-slick'
import bgImage from '../../assets/testimonial.png'

const reviewsData = [
    {
        id: 1,
        name: "Hardik",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, in unde! Voluptatem incidunt labore tempore nihil unde sint amet sit.",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Dev",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, in unde! Voluptatem incidunt labore tempore nihil unde sint amet sit.",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Dhruv",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, in unde! Voluptatem incidunt labore tempore nihil unde sint amet sit.",
        img: "https://picsum.photos/103/103",
    },
    {
        id: 4,
        name: "Disha",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, in unde! Voluptatem incidunt labore tempore nihil unde sint amet sit.",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 5,
        name: "Manya",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, in unde! Voluptatem incidunt labore tempore nihil unde sint amet sit.",
        img: "https://picsum.photos/105/105",
    },
]

const Reviews = () => {
    //slider config
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
    <div className='bg-auto bg-center bg-repeat w-full' style={{backgroundImage: `url(${bgImage})`}}>
        <div className='bg-white/80 dark:bg-gray-800/90 py-14 dark:text-white'>
            <div data-aos="fade-up" className='container'>
                {/* header section */}
                <div className='text-center mb-10'>
                    <h1 className='text-4xl font-bold'>
                        Reviews
                    </h1>
                </div>

                {/* Reviews Card section */}
                <div data-aos="zoom-in" className=''>
                    <Slider {...settings}>
                        {reviewsData.map(({id, name, text, img}) => {
                            return (
                                <div key={id} className='my-6'>
                                    <div className="flex flex-col gap-6 shadow-xl py-8 px-6 mx-4 rounded-3xl bg-white dark:bg-dark relaive">
                                        {/* Content section */}
                                        <div className='flex flex-col items-center gap-4'>
                                            <p className='text-xs'>
                                                {text}
                                            </p>
                                        </div>

                                        {/* image section & name section */}
                                        <div className='flex items-center gap-6'>
                                            <img src={img} alt={name} className='rounded-full w-16 h-16'/>
                                            <div>
                                                <h1 className='text-xl font-bold text-black/60 dark:text-primary font-cursive'>
                                                    {name}
                                                </h1>
                                                <h2 className='mt-3 text-sm font-bold text-black/45 dark:text-white'>
                                                    Verified Customer
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews