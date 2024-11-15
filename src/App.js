import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setBannerData, setImageURL } from './utlis/movieSlice';

function App() {
  const dispatch = useDispatch();
  const fetchTrendingData = async () =>{
    try{
      const response = await axios.get("trending/all/week");
      // console.log("Response", response?.data?.results);
      dispatch(setBannerData(response?.data?.results))
    } catch (error){
      console.log(error);
    }
  }
  const fetchConfiguration = async() =>{
    try{
      const response = await axios.get("/configuration")
      // console.log("Configuration data", response.data.images.secure_base_url+"original");
      dispatch(setImageURL(response.data.images.secure_base_url+"original"))
    } catch(error){

    }
  }
  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, [])
  
  return (
    <main className='pb-14 lg:pb-0'>
      <div>
        <Header/>
          <div className='min-h-[90vh]'>
            <Outlet/>
          </div>
        <Footer/>
        <MobileNavigation/>
      </div>
    </main>
  );
}

export default App;
