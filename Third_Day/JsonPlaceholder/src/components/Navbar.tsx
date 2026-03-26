// import React from 'react'
// import {Routes, Route, Navigate} from 'react-router-dom'
// import AddPost from "./AddPost.tsx"
// import PostList from "./PostList.tsx"
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("user")
        navigate("/")
    }

  return (
    <div style ={{ display: "flex", justifyContent: "space-between", padding: '10px', backgroundColor: '#f0f0f0'}}>
        <h1>Post Dashboard</h1>
        <button onClick={()=>navigate("/addProduct")}>Add Product</button>
        <button onClick={()=>navigate("/productList")}>Product List</button>

        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar