import React, { useState, useEffect } from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import Card from '../components/Card';
import HorizontalScrollCard from '../components/HorizontalScrollCard';
import axios from 'axios';
import useFetch from '../components/hooks/useFetch';

const Home = () => {
    const trendingMovies = useSelector(state => state.movies.bannerData);
    // console.log("trendingMovies",trendingMovies);
    // const [nowPlayingData, setNowPlayingData] = useState([]);
    const {data: nowPlayingData} = useFetch('/movie/now_playing');
    // const fetchPlayingData = async () =>{
    //     try{
    //         const response = await axios.get("/movie/now_playing")
    //         setNowPlayingData(response?.data?.results);

    //     } catch(error){

    //     }
    // }
    // useEffect(()=>{
    //     fetchPlayingData();
    // },[]);
  return (
    <div>
        <BannerHome/>
        <HorizontalScrollCard data ={trendingMovies} heading = {"Trending"} trending={"Trending"}/>
        <HorizontalScrollCard data ={nowPlayingData} heading = {"Now Playing"} />

    </div>
  )
}

export default Home