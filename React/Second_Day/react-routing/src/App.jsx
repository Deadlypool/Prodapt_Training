import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import DepartmentForm from './components/DepartmentForm'
import SkillForm from './components/SkillForm'
import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'

function App() {

  return (
    <>
      <nav>
    <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/department">Department</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/add-product">Add Product</Link></li>
    </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/department" element={<DepartmentForm />} />
        <Route path="/skills" element={<SkillForm />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </>
      
  )
}

export default App
