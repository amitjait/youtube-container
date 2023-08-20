import Navabar from './components/Navbar';
import {Routes, Route } from 'react-router-dom';


import All from './components/All';
import Videos from './components/Videos';
import Shorts from './components/Shorts';
import './App.css';
import SmallNav from './components/SmallNav';


function App() {
  return (
    <div className="App">
      <Navabar />
      <SmallNav />
      {/* <Youtube /> */}
      <div className='main'>
        <Routes >
          <Route path='/' element={<All/>} />
          <Route path='/videos' element={<Videos/>} />
          <Route path='/shorts' element={<Shorts/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
