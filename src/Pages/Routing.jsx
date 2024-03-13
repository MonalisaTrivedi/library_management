import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Navbar from '../Components/Navbar'
import Books from './Books'
import Add_book from './Add_book'
import Edit from './Edit'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Routing = () => {
  return (
  <>
  <ToastContainer/>
  <Router>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Books' element={<Books/>}/>
        <Route path='/Add_book' element={<Add_book/>}/>
        <Route path='/Edit/:id' element={<Edit/>}/>
    </Routes>
  </Router>
  </>
  )
}

export default Routing