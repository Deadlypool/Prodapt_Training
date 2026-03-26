// import { useState } from 'react'
import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import Landing from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import AddProduct from './components/AddProduct'
import ProductList from './components/PostList'
import NotFound from './pages/NotFound'


function App() {
  const isAuth = localStorage.getItem("user") 

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={isAuth ? <Dashboard/> : <Navigate to="/login" />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
