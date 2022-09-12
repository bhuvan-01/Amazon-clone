import React from "react";
import { Link } from "react-router-dom";
import './Login.css'


function Login() {
  return (
    <div className="login">
        <Link to="/">
      <img
        className="login_logo"
        src="https://pngimg.com/uploads/amazon/small/amazon_PNG24.png"
      />
      </Link>
      <div className="login_container">
        <h1> sign in</h1>
        <form>
            <h5 >E-mail</h5>
            <input type='text' />

            <h5 >Password</h5>
            <input type='password' />

            <button>Sign In </button>
        </form>
        <p>By sign-in you to agree Amazon's conditions</p>

      </div>
    </div>
  );
}
export default Login;
