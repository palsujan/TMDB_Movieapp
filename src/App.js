import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const fetchTrendingData = async () =>{
    try{
      const response = await axios.get("trending/all/week");
      console.log("Response", response);
    } catch (error){
      console.log(error);
    }
  }
  useEffect(() => {
    fetchTrendingData();
  }, [])
  
  return (
    <main className='pb-14 lg:pb-0'>
      <div>
        <Header/>
          <div className='pt-16'>
            <Outlet/>
          </div>
        <Footer/>
        <MobileNavigation/>
      </div>
    </main>
  );
}

export default App;
