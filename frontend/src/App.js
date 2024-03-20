import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './screens/Home';
import AboutUs from './screens/AboutUs';
import Support from './screens/Support';
import Product from './screens/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path='aboutus' element={<AboutUs />} />
          <Route exact path='support' element={<Support />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App