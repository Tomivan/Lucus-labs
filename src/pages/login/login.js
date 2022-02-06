import React from "react";
import "./login.css";

const Login = () => {
    return(
        <div className="login">
            <h1>Lucus Labs</h1>
            <form className="form">
                <label>Email Address</label>
                <input type="text" placeholder="Email Address" />
                <label>Password</label>
                <input type="password" placeholder="Password" />
            </form>
            <button className="login-button">Login</button>
        </div>
    )
}

export default Login;