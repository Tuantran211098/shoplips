import React, { useState, useEffect } from 'react';
import './App.css';
import './stylecss/common/index.scss'
import Header from './component/commonUI/header'
import SliderHomepage from './component/commonUI/homepage/silder'
import CategoryBrands from './component/commonUI/homepage/category'
import dataJson from './data.json'

function App() {

  return (
    <div className="App">
      <Header />
      <SliderHomepage />
      <main class="page">
        <CategoryBrands />
      </main>
    </div >
  );
}

export default App;
