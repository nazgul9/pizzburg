import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import MenuOne from '../components/MenuOne';
import Pizza from '../components/Pizza'

function App(props) {
  return (
    <div>

<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/Pizza' element={<Pizza/>}/>

</Routes>
<MenuOne/>
       
    </div>
  );
}

export default App;