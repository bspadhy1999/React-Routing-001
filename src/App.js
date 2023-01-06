import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import About from './ComponentsRouting/About'
import Blog from './ComponentsRouting/Blog'
import Contact from './ComponentsRouting/Contact'
import Home from './ComponentsRouting/Home'
import Navbar from './ComponentsRouting/Navbar'
import Project from './ComponentsRouting/Project'
import Service from './ComponentsRouting/Service'

// import Navbar from './Components/Navbar'
// import Home from './Pages/Home'
// import SignIn from './Pages/SignIn'
// import SignUp from './Pages/SignUp'

export default function App() {
  return (
    <>
      {/* <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter> */}

      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/project' element={<Project/>}></Route>
          <Route path='/services' element={<Service/>}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
