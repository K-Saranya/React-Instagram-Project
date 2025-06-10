import React from "react";
import "./Signuppage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Signuppage = () => {
  return (
    <>
      <div className="signup-container">
        <div className="signup-box">
          <div className="signup-title">
            <img src="/Instagram.png" alt="Instagram" />
          </div>
          <p className="Quote">
            Sign up to see photos and videos from your friends.
          </p>
          <button className="fbloginbtn">
            <FontAwesomeIcon icon={faFacebook} /> Log in with Facebook
          </button>
          <div className="or">
            <p>OR</p>
          </div>
          <form>
            <input type="text" placeholder="Mobile Number or Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Username" />
            <p className="learn-more">
              People who use our service may have uploaded your contact
              information to Instagram. <a href="#">Learn More</a>
            </p>
            <p className="learn-more">
              By signing up, you agree to our{" "}
              <a href="#">Terms , Privacy Policy</a> and{" "}
              <a href="#">Cookies Policy</a> .
            </p>
            <button className="signupbtn">Sign up</button>
          </form>
        </div>
        <div className="login-link">
          Have an account? <br />
          <a href="#">Log In</a>
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

export default Signuppage;
