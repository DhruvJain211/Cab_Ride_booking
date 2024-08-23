/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ResponsiveMenu = ({showMenu, Navlinks}) => {

    return (
        <div className={`${showMenu ? "block" : "hidden"} fixed z-20 bottom-0 top-0 flex h-screen w-3/4 flex-col justify-between bg-white dark:bg-dark dark:text-white  px-8 pb-6 pt-16 duration-300 md:hidden rounded-r-xl shadow-2xl`}>

            {/* User, top section */}
            <div className='flex items-center justify-start gap-3'>
                <FaUserCircle className='text-5xl'/>
                <div>
                    <h1>Hello user</h1>
                    <h1 className='font-light text-sm text-slate-500'>Premium user</h1>
                </div>
            </div>

            {/* Navitems, mid section */}
            <nav className=''>
                <ul>
                    {Navlinks.map(({id, name, slug}) => {
                        return (
                            <li key={id} className='py-4'>
                                <Link to={slug} className={`text-lg font-medium text-black dark:text-white rounded-full hover:text-yellow-500 dark:hover:text-yellow-500 duration-300`}>{name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* owner text, bottom footer section */}
            <div className='italic'>
                <h1 className='flex gap-1 items-center'>Made by <a className='hover:text-sky-700 hover:font-bold' href="https://github.com/DhruvJain211" target='_blank'>Dhruv Jain</a> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
                </h1>
            </div>
        </div>
    )
}

export default ResponsiveMenu