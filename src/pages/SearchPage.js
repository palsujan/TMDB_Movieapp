import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../components/Card';

const SearchPage = () => {
    const location = useLocation();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const navigate = useNavigate()
  const query = location?.search?.slice(3);
    const fetchData = async()=>{
      try{
          const response = await axios.get(`/search/multi`,{
              params:{
                query:location?.search?.slice(3),  
                page: page
              }
          })
          setData((prev) =>{
            return [
              ...prev, 
              ...response?.data?.results
            ]
          });
      } catch(error) {
          console.log("Error", error);
      }
  }
    useEffect(()=>{
      if(query){
        setPage(1);
        setData([]);
        fetchData();
      }
    },[location?.search])

    const handleScroll = () =>{
      if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
          setPage(prev => prev + 1);
      }
  }
  useEffect(()=>{
      if(query){
        fetchData();
      }
    
  },[page]);

  // console.log("Location", location?.search.slice(3))
  return (
    <div className='py-16'>
      <div className='lg:hidden my-2 mx-1 sticky top-16 z-20'> 
        <input
          type='text'
          placeholder='Search...'
          onChange = {(e)=> navigate(`/search?q=${e.target.value}`)}
          className='px-4 py-1 text-lg w-full bg-white rounded-full text-neutral-900 mx-2'
        />
      </div>
      <div className='container mx-auto'>
      <h2 className='capitalize text-lg lg:text-2xl font-semibold my-2'> Search Results</h2>
      <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
            {
                data.map((searchData, index)=>{
                    return(
                        <Card data={searchData} key={searchData.id + "searchData"} media_type={searchData.explore}/>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default SearchPage