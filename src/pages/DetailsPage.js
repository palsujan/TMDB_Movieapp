import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchDetails from '../components/hooks/useFetchDetails';
import { useSelector } from 'react-redux';
import moment from 'moment';
import Divider from '../components/Divider';
import useFetch from '../components/hooks/useFetch';
import HorizontalScrollCard from '../components/HorizontalScrollCard';
import VideoPlay from '../components/VideoPlay';

export const DetailsPage = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState(""); 
  const imageURL = useSelector(store => store.movies.imageURL);
  const params = useParams();
  const {data} = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const {data: castData} = useFetchDetails(`/${params?.explore}/${params?.id}/credits`);
  const {data:similarData} = useFetch(`/${params?.explore}/${params?.id}/similar`);
  const {data:recommendationsData} = useFetch(`/${params?.explore}/${params?.id}/recommendations`);
  // console.log("Data",data);
    // console.log("castData",castData);
    const handlePlayVideo = (data) =>{
      setPlayVideoId(data);
      setPlayVideo(true);
    }

    const duration = (Number(data?.runtime)/60).toFixed(1).split(".");
    const writer = castData?.crew?.filter(el=>el?.job === "Writer")?.map(el => el?.name).join(", ");
    // console.log("writer", writer)
  return (
    <div className=''>
      <div className='w-full h-[280px] relative hidden lg:block'>
          <div className='w-full h-full'>
              <img
                src={imageURL+data?.backdrop_path}
                className='h-full object-cover w-full'
              />
          </div>
          <div className='absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent'>

          </div>
      </div>
      <div className='container mx-auto px-3 py-16 lg:py-1 flex flex-col lg:flex-row gap-5 lg:gap-10'>
        <div className='relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60 '>
          <img
              src={imageURL+data?.poster_path}
              className='h-80 w-60 object-cover rounded'
            />
             <button
              onClick={()=>handlePlayVideo(data)} 
              className='mt-3 w-full py-2 px-4 text-center text-black font-bold rounded bg-white hover:bg-gradient-to-l from-red-500 to-orange-500 shadow-md hover:scale-105 transition-all'>Play Now</button>
        </div>
        <div>
          <h2 className='text-2xl lg:text-4xl font-bold text-white'>
              {data?.title || data?.name}
          </h2>
          <p className='text-neutral-400'>{data?.tagline}</p>
          <Divider/>
          <div className='flex items-center gap-3'>
            <p>Rating : {Number(data?.vote_average).toFixed(1)}</p>
            <span>|</span>
            <p>View : {Number(data?.vote_count).toFixed(0)}</p>
            <span>|</span>
            <p>Duration : {duration[0]}h {duration[1]}m</p>
          </div>
          <Divider/>
          <div>
              <h3 className='text-xl font-bold text-white mb-1'>Overview</h3>
              <p>{data?.overview}</p>
              <Divider/>
              <div className='flex items-center text-center my-3 gap-3'>
                <p>Staus : {data?.status}</p>
                <span>|</span>
                <p>Release Date : {moment(data?.relase_date).format("MMMM Do YYYY")}</p>
                <span>|</span>
                <p>
                  Revenue : {Number(data?.revenue)}
                </p>
              </div>
              <Divider/>
          </div>
          <div>
              <p className='text-white'>{castData?.crew[0]?.job} : {castData?.crew[0]?.name}</p>
              <p className='text-white'>Writer : {writer}</p>
          </div>
          <h2 className='font-bold text-lg'>Cast</h2>
          <div className='grid grid-cols-[repeat(auto-fit,96px)] gap-3'>
              {
                castData?.cast?.filter(el=>el?.profile_path).map((cast, index)=>{
                  return(
                    <div>
                        <div>
                          <img 
                            src={imageURL+ cast?.profile_path}
                            className='w-24 h-24 object-cover rounded-full'
                          />
                        </div>
                        <p className='font-bold text-center text-sm'>
                          {cast?.name}
                        </p>
                    </div>
                  )
                })
              }
          </div>
        </div>
      </div>
      <div>
        <HorizontalScrollCard data={similarData} heading={`Similar ${params?.explore}`} media_type ={`${params?.explore}`}/>
        <HorizontalScrollCard data={recommendationsData} heading={`Recommendations ${params?.explore}`} media_type ={`${params?.explore}`}/>
      </div>
      {
        playVideo && (
          <VideoPlay data = {playVideoId} close = {() => setPlayVideo(false)} media_type={params?.explore}/>
        )
      }
      
    </div>
  )
}
