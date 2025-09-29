import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Try from './pages/Try';
import Home from './component/home/Home';
// import Home from './component/home/Home';


function App() {
  return (

    <div>
      {/* <Home/> */}
      {/* <Try/> */}
      <Routes>
        <Route path='/try' element={<Home/>}/>
      </Routes>
    </div>

  );
}

export default App;
