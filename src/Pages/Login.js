import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <div>
            <header className="header-tag">
                <div className="header-container">
                    <div>
                    <a href="/"><i class="fab fa-elementor"></i>  <strong>EMS BOARD</strong></a>
                    <NavLink to="/" className="">Home</NavLink>
                    </div>
                
                <div>
                <NavLink to="/login" className="">Sign In</NavLink>
                <NavLink to="/signup" className="sgnborder">Sign Up</NavLink>
                </div>
            </div>
            </header>
        </div>
    )
}

export default Login
