import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavigation from './components/MobileNavigation';

function App() {
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
