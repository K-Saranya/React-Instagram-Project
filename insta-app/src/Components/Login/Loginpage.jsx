import React from "react";
import "./Loginpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Loginpage = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <div className="login-title">
            <img src="/Instagram.png" alt="Instagram" />
          </div>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Log In</button>
          </form>
          <div className="or">
            <p>OR</p>
          </div>
          <div className="fblogin">
            <FontAwesomeIcon icon={faFacebook} /> Log in with Facebook
          </div>
          <div className="fpass">
            <p>Forgot Password?</p>
          </div>
        </div>
        <div className="signup-link">
          Don't have an account? <a href="#">Sign up</a>
        </div>
        <div className="app">
          <p>Get the app.</p>
          <div className="downloadPic">
            <img src="/GooglePlay.png" alt="google play" />
            <img src="microsoft.png" alt="microsoft" />
          </div>
        </div>
      </div>
      <div className="links">
        <p>Meta</p>
        <p>About</p>
        <p>Blog</p>
        <p>Jobs</p>
        <p>Help</p>
        <p>API</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Locations</p>
        <p>Instagram Lite</p>
        <p>Threads</p>
        <p>Contact Uploading and Non-Users</p>
        <p>Meta Verified</p>
      </div>
      <div className="pageEnd">
        <p>English</p>
        <p>@ 2025 Instagram from Meta</p>
      </div>
    </>
  );
};

export default Loginpage;
