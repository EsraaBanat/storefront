import React, { useState } from 'react';
import Header from './components/Header/Header';
import Catagories from './components/Catagories/Catagories';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';
import './App.css';

function App() {
  const [active, setActive] = useState(false)
  console.log(active)
  return (
    <div className="App">
      <Header/>
      <Catagories  />
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
