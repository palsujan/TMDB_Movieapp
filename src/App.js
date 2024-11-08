import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <div>
        <Header/>
          <div className='pt-16'>
            <Outlet/>
          </div>
        <Footer/>
      </div>
    </main>
  );
}

export default App;
