import React, {useState, useEffect} from 'react';
import logo from "../assets/movieaapp_logo.png";
import userIcon from "../assets/user.png";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from '../contants/navigation';


const Header = () => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();
    const handelSearch = (e) =>{
        setSearchInput(e.target.value);
    }
    const handelSubmit = (e) =>{
        e.preventDefault();
    }
    useEffect(() => {
        if(searchInput){
            navigate(`/search?q=${searchInput}`);
        }
        
    

    }, [searchInput])
    
  return (
    <div className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75'>
        <div className="container mx-auto px-3 flex items-center h-full">
            <div>
                <Link to={"/"}>
                    <img 
                        src={logo}
                        alt='Sohayok Logo'
                        width={200}
                    />
                </Link>
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
            <div className='ml-auto flex items-center gap-5'>
                <div>
                    <form className='flex items-center gap-2' onSubmit={handelSubmit}>
                        <input 
                            type='text' 
                            placeholder='Search here...'
                            className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                            value={searchInput}
                            onChange={handelSearch}
                        />
                        <button className='text-2xl text-white' type='submit'>
                            <IoSearchOutline/>
                        </button>
                    </form>
                </div>
                <div > 
                    
                </div>
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