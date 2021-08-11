import React from 'react'
import { NavLink } from 'react-router-dom'
import image1 from './image1.jpeg'

function Home() {
    return (
        <>
        <main>
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

            <div className="flex-arial">

            <div className="text-area">
                <h3>
                Good business starts<br/>with employee wellbeing
                </h3>
                <p>
                    Customers will not love a company untill employee(s) love <br/>their companies at first
                </p>
                <button className="sgnborder">
                    Discover Now
                </button>
            </div>
            <div>
                <img src={image1} alt="image1"/>
            </div>

            </div>

        <div>
            <h2>
                Benefits of Utilizing ****employee
                Management System
            </h2>
            <p>
                It's well secured; easy to utilizes and brings about
                employer and employee cordial relationship
            </p>
            <button>
                Learn More
            </button>
        </div>

        <div>
            <div>
            <img src={image1} alt="image1"/> 
            </div>
            <div>
            <img src={image1} alt="image1"/>
            </div>
        </div>
        
        <div>
            <h1>Services that leads to excellent production</h1>
        </div>

        <div>
            <div>
            <img src={image1} alt="image1"/> 
            </div>
            <div>
            <img src={image1} alt="image1"/>
            </div>
            <div>
            <img src={image1} alt="image1"/>
            </div>
            <div>
            <img src={image1} alt="image1"/>
            </div>
            <div>
            <img src={image1} alt="image1"/>
            </div>
            <div>
            <img src={image1} alt="image1"/>
            </div>
            <div>
            <img src={image1} alt="image1"/>
            </div>
        </div>

        <div className="footer-div">
            <div>
                <input type="text"/>
                <br/>
                <p>
                    The purpose of employee management software 
                    is to integrate employers and employees cordial
                    relationship; so as to increase productivity in
                    an organization.
                </p>
            </div>
            <div>
                <h2>Contact</h2>
                <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i>Instagram</a><br/>
                <a href="https://www.twitter.com/"><i class="fab fa-twitter-square"></i>Twitter</a><br/>
                <a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i>Facebook</a><br/>
                <br/>
                <footer>
                    Copyright @2021....All rights reserved.
                </footer>
            </div>
            <div>
                <p>Terms & Policies</p>
                <a href="#">Privacy Policies</a><br/>
                <a href="#">Terms & Conditions</a>
            </div>
        </div>

        </main>

        </>
    )
}

export default Home
