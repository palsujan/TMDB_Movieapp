import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';

const ExplorePage = () => {
    const params = useParams();
    // console.log("Params",params.explore);
    const [pageNo, setPageNo] = useState(1);
    const [data, setData] = useState([]);
    const [totalPageNo, setTotalPageNo] = useState(0)
    const fetchData = async()=>{
        try{
            const response = await axios.get(`/discover/${params.explore}`,{
                params:{
                    page:pageNo
                }
            })
            // setData((prev) =>{
            //     return {
            //         ...prev,
            //         ...response?.data?.results
            //     }
            // });
            setData((prev) => [...prev, ...response?.data?.results]);
            setTotalPageNo(response?.data?.total_pages)
        } catch(error) {
            console.log("Error", error);
        }
    }
    const handleScroll = () =>{
        if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
            setPageNo(prev => prev + 1);
        }
    }
    useEffect(()=>{
     
        fetchData();
    },[pageNo]);
    useEffect(()=>{
        setPageNo(1);
        setData([]);
        fetchData();
    },[params.explore])
    useEffect(()=>{;
        window.addEventListener('scroll',handleScroll)
    },[]);

  return (
    <div className='py-16'>
        <div className='container mx-auto'>
        <h2 className='capitalize text-lg lg:text-2xl font-semibold my-2'>Popular {params.explore} Show</h2>
        <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center lg:justify-start'>
            {
                data.map((exploreData, index)=>{
                    return(
                        <Card data={exploreData} key={exploreData.id + "exploreSection"} media_type={params.explore}/>
                    )
                })
            }
        </div>
        </div>
    </div>
  )
}

export default ExplorePage