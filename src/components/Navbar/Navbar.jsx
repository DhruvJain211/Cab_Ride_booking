/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DarkMode from './DarkMode'
import ResponsiveMenu from './ResponsiveMenu'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'

const Navbar = () => {
    const Navlinks = [
        {
            id: 1,
            name: 'Home',
            slug: '/'
        },
        {
            id: 2,
            name: 'About',
            slug: '/about'
        },
        {
            id: 3,
            name: 'Features',
            slug: '/features'
        },
        {
            id: 4,
            name: 'Blog',
            slug: '/blog'
        },
        {
            id: 5,
            name: 'Contact',
            slug: '/contact'
        },
    ];

    const[showMenu, setShowMenu] = useState(false)
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    
    const pathname = useLocation();
    //useLocation: This hook returns the location object that represents the current URL. The location object includes:
    // pathname: The path of the URL.
    // search: The query string of the URL.
    // hash: The URL fragment identifier.
    // state: Any state passed along with navigation.
    // location.pathname: Extracts the pathname from the current URL, which is similar to what you would get from usePathname in Next.js.

    return (
    <nav className='relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300'>
        <div className='container py-2 md:py-0'>
            <div className='flex items-center justify-between'>
                {/* LOGO SECTION */}
                <Link to='/' className='text-2xl font-semibold'>
                    <span>Cab</span>
                    <span className='text-primary'>Ride</span>
                </Link>

                {/* DESKTOP MENU SECTION */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-6'>
                        {Navlinks.map(({id, name, slug}) => {
                            const isActive = pathname.pathname === slug;
                            return (
                                <li key={id} className='py-4'>
                                    <Link to={slug} className={`${isActive ? "bg-primary dark:text-black" : ""} text-lg font-medium text-black dark:text-white py-2 px-2 rounded-full hover:bg-primary duration-500`}>{name}</Link>
                                </li>
                            );
                        })}
                        {/* DARKMODE BUTTON */}
                        <DarkMode/>
                    </ul>
                </div>
                        
                {/* Mobile menu section */}
                <div className='md:hidden flex items-center gap-4'>
                    <DarkMode/>
                    { showMenu ? (
                        <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer transition-all' size={25}/>
                        ) : <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer transition-all' size={25}/> 
                    }
                </div>
            </div>
        </div>
        <ResponsiveMenu showMenu={showMenu} Navlinks={Navlinks}/>
    </nav>
    )
}

export default Navbar;