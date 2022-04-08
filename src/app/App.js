import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Burger from '../components/Burger';
import ColdDrinks from '../components/ColdDrinks';
import Deserts from '../components/Deserts';
import Drinks from '../components/Drinks'
import Home from '../components/Home';
import Pizza from '../components/Pizza'
import Rolly from '../components/Rolly'
import Salads from '../components/Salads';
import SlisePizz from '../components/SlisePizz';

import QrCode from 'qrcode.react'

function App(props) {
  return (
    <div> 
      {/* <div style={{textAlign:"center"}}>
        <h1><br/>
        <QrCode
        id="abs"
        value="http://192.168.0.151:3000"
        />
        </h1>
      </div> */}

<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/Pizza' element={<Pizza/>}/>
  <Route path='/Rolly' element={<Rolly/>}/>
  <Route path='/Burger' element={<Burger/>}/>
  <Route path='/Salads' element={<Salads/>}/>
  <Route path='/Drinks' element={<Drinks/>}/>
  <Route path='/ColdDrinks' element={<ColdDrinks/>}/>
  < Route path='/SlisePizz' element={< SlisePizz/>} />
  <Route path='/Deserts' element={<Deserts/>}/>
</Routes>
       
    </div>
  );
}

export default App;