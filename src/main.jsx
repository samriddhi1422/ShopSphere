

import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import {Route, BrowserRouter,Routes} from 'react-router-dom'

import Layout from './Layout.jsx'
import HeroSec from './pages/heroSec.jsx'
import Products from './pages/products.jsx'

import Addtocart from './pages/Addtocart.jsx'
import Knowus from './pages/Knowus.jsx'
import SinglePage from './pages/SinglePage.jsx'
import { Provider } from 'react-redux'
import store from './store.js'

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<HeroSec />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/knowus" element={<Knowus/>} />
          <Route path="/addtocart" element={<Addtocart/>} />
          <Route path="/:id" element={<SinglePage></SinglePage>} ></Route>
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>

<Main />

</Provider>

);
