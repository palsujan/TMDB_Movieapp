import React from 'react';
import logo from "../assets/movieaapp_logo.png";
import userIcon from "../assets/user.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navigation = [
        {
            label : "TV Shows",
            href:'tv'
        },
        {
            label : "Movies",
            href:'movie' 
        }
    ]
  return (
    <div className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75'>
        <div className="container mx-auto px-3 flex items-center h-full">
            <div>
                <img 
                    src={logo}
                    alt='Sohayok Logo'
                    width={200}
                />
            </div>
            <nav className='hidden lg:flex items-center gap-1 ml-5'>
                {
                    navigation.map((nav, index)=>{
                        return (
                            <div>
                                <NavLink key={nav.label} to={nav.href} className={(isActive)=>  `px-3 hover:text-neutral-100 ${isActive && "text-neutral-100"}`}>
                                    {nav.label}
                                </NavLink>
                            </div>
                        )
                    })
                }
            </nav>
            <div className='ml-auto'>
                <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                    <img 
                        src = {userIcon}
                        alt='User_Icon'
                        width='w-full h-full'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header