import React from 'react'

import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './Pages/Detail';
import KayitOl from './Pages/KayitOl';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Detail/:storeName' element={<Detail/>}  />
      <Route path='/KayitOl' element={<KayitOl/>} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App;

