import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-4'>
            <div className='container'>
            <div className='flex items-center justify-center gap-4'>
            <Link className=' hover:text-red-500' to="/" >About</Link>
            <Link className=' hover:text-red-500' to="/" >Contact</Link>
            </div>
            <p className=' hover:text-red-500 text-sm'><Link target='_new' to="https://www.sujanpal.in/">Created by Dynamic Coding with Sujan Pal</Link></p>
        </div>
    </footer>
  )
}

export default Footer