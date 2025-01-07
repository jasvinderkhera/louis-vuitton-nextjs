import React from 'react'
import Image from 'next/image'
import menu from '../../public/hamburger.png'
import logo from '../../public/logo.svg'
import profile from '../../public/profile.png'
import search from '../../public/search.png'
import wishlist from '../../public/heart.png'


function Navbar() {
    return (
        <div className='fixed top-0 bg-white z-10 w-full'>
            <div className="container border-b-2 flex justify-between items-center px-12 py-8">
                <div className="menu flex items-center gap-5">
                    <Image src={menu} alt='menu icon' height={24}/>
                    <p className='text-xs'>Menu</p>

                    <Image src={search} alt='search' height={16}/>
                    <p className='text-xs'>Search</p>
                </div>
                <div className="logo">
                    <Image src={logo} alt="louis vuitton" height={26}/>
                </div>
                <div className="profile flex items-center gap-5">
                <p className='text-xs'>Call Us</p>
                <Image src={wishlist} alt="louis vuitton" height={16}/>
                <Image src={profile} alt="louis vuitton" height={16}/>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar