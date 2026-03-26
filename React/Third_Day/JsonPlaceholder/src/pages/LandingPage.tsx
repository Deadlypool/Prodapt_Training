// import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Welcome to Landing Page</h1>
        <p>This is the landing page of the application</p>

        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/register')}>Register</button>
    </div>
  )
}

export default LandingPage