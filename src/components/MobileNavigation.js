import React from 'react'
import { mobileNavigation } from '../contants/navigation'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <section className='lg:hidden block bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full py-3 z-20'>

            <div className='flex  items-center justify-between h-full text-neutral-700}'>
                {
                    mobileNavigation.map((nav, index)=>{
                        return(
                            <NavLink 
                                key={nav.label + "mobilenavigation"}
                                className={({isActive})=>`px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`} 
                                to={nav.href}   
                            >
                                <div className='text-2xl'> 
                                    {nav.icon}
                                </div>
                                <p className='text-sm'>{nav.label}</p>
                            </NavLink>
                        )
                    })
                }
            </div>
    </section>
  )
}

export default MobileNavigation