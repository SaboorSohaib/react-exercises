import React from "react";
import './style.css';

const Form = () => (
    <div className="container">
        <h1 className="title">Subscribe</h1>
        <p className="text">Sign up with your email to recive new updates</p>
        <form>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last name"/>
            <input type="email" placeholder="Email"/>
        </form>
        <button className="subscribe-btn">Subscribe</button>
    </div>
)

export default Form;