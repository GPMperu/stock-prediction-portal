import { useState } from 'react'
import './assets/css/style.css'
import Main from './components/Main.jsx'
import Register from './components/Register.jsx'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer'
import Login from './components/Login.jsx'

function App() {

  return (
    <>
    <BrowserRouter >
      <Header  />
      <Routes> 
      <Route path='/' element={<Main />}  />
      <Route path='/Register' element={<Register />}  />
      <Route path='/Login' element={<Login />}  />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
