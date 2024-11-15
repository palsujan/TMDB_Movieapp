import axios from 'axios';
import React, { useState, useEffect } from 'react'

const useFetchDetails = (endpoint) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const fetchData = async () =>{
    try{
        setLoading(true);
        const response = await axios.get(endpoint);
        setLoading(false);
        setData(response?.data);

    } catch(error){
        console.log('error', error);
    }
}
useEffect(()=>{
    fetchData();
},[]);
  return {data, loading}
}

export default useFetchDetails;