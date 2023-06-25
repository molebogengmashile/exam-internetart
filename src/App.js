import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Art } from './components/Art';
import { ArtT } from './components/ArtT';
import { BlogsJ } from './components/BlogsJ';
import { BlogsT } from './components/BlogsT';
import { Design } from './components/Design';
import { DesignT } from './components/DesignT';
import { ProfileOne } from './components/ProfileOne';
import { ProfileTwo } from './components/ProfileTwo';
import { Home } from './routes/Home';

function App() {
  return (
    <>
    <Routes Basename={process.env.PUBLIC_URL}>
      <Route path='/internetart' element={<Home/>}></Route>
      <Route path='/art' element={<Art/>}></Route>
      <Route path='/artT' element={<ArtT/>}></Route>
      <Route path='/design' element={<Design/>}></Route>
      <Route path='/designT' element={<DesignT/>}></Route>
      <Route path='/blogsJ' element={<BlogsJ/>}></Route>
      <Route path='/blogsT' element={<BlogsT/>}></Route>
      <Route path='/profileOne' element={<ProfileOne/>}></Route>
      <Route path='/profileTwo' element={<ProfileTwo/>}></Route>
    </Routes>
    </>
  );
}

export default App;
