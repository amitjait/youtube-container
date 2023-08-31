import Navabar from './components/Navbar';
import {Routes, Route } from 'react-router-dom';

import Videos from './components/Videos';
import Shorts from './components/Shorts';
import './App.css';
import SmallNav from './components/SmallNav';
import Footer from './components/Footer';
import Home from './components/Home';
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      <Navabar />
      <SmallNav />

      <div className='main'>
        <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/videos' element={<Videos/>} />
          <Route path='/shorts' element={<Shorts/>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
