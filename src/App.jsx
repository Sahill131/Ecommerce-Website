
import {HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './nav'
import Home from './home'
import Men from './men'
import Women from './women'
import P from './perfume'
import B from './blog'
import O from './offers'
import J from './jewellery'
import New from './new  a'
import Top from './top rated'
import T from './trending'


function App() {
  return (
   
        <HashRouter>
          <Nav />
          
<Routes>
  <Route path='/'  element={<Home/>}/>
            <Route path='/men' element={<Men/>} />
            <Route path='/women' element={<Women/>} />
            <Route path='/perfume' element={<P/>} />
            <Route path='/offers' element={<O/>} />
            <Route path='/blog' element={<B/>} />
            <Route path='/jewellery' element={<J/>} />
            <Route path='/jewellery' element={<J/>} />
            <Route path='*' element={<Home/>} />
            
          </Routes>
        </HashRouter>
      
  )
}

export default App
