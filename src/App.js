import Navabar from './components/Navbar';
import {Routes, Route } from 'react-router-dom';


import All from './components/All';
import Videos from './components/Videos';
import Shorts from './components/Shorts';
import './App.css';
import SmallNav from './components/SmallNav';
import Banner from './components/Banner';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navabar />
      <SmallNav />

      <div className='main'>
        <Banner />
        <Routes >
          <Route path='/' element={<All/>} />
          <Route path='/videos' element={<Videos/>} />
          <Route path='/shorts' element={<Shorts/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
