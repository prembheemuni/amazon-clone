import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";
import { auth } from "./FireBase.js";

function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          nav("/");
        }
      })
      .catch((error) => alert(error.message));

    //some firebase stiff
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        nav("/");
      })
      .catch((error) => alert(error.message));
    // some firebase stuff
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="amazon logo"
          className="login__image"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form onSubmit={signIn}>
          <h5>E-mail</h5>
          <input
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit" className="login__signinButton">
            Sign in
          </button>
        </form>
        <p>
          By sigining-in you are agree to Amazon's Conditions of Use & Sale.
          Please see our Privacy notice our Cookies notice and our Intrest-Based
          Ads
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
