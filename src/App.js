import React, { useState, useEffect } from 'react';
import './App.css';
import './stylecss/common/index.scss'
import Header from './component/commonUI/header'
import SliderHomepage from './component/commonUI/homepage/silder'
import CategoryBrands from './component/commonUI/homepage/category'
import HPjsTab from './component/commonUI/homepage/hp_section-three'
import CategreaterfourStar from './component/commonUI/homepage/productGreaterfourstar'
import dataJson from './data.json'

function App() {

  return (
    <div className="App">
      <Header />
      <SliderHomepage />
      <main class="page">
        <CategoryBrands />
        <CategreaterfourStar />
        <HPjsTab />
      </main>
    </div >
  );
}

export default App;
