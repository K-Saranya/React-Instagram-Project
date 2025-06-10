import React from 'react'
import './Navbar.css';
import logo from '../../Assets/insta.png'
const Navbar = () => {
  return (
    <>
     <div className='navbar'>
        <img className='logo' src={logo} alt="" />
        <ul className='navbar-names'>
            <li><i class="ri-home-4-fill"></i>Home</li>
            <li><i class="ri-search-line"></i>Search</li>
            <li><i class="ri-compass-3-fill"></i>Explore</li>
            <li><i class="ri-clapperboard-fill"></i>Reels</li>
            <li><i class="ri-send-plane-fill"></i>Messages</li>
            <li><i class="ri-heart-line"></i>Notifications</li>
            <li><i class="ri-add-box-line"></i>Create</li>
            <li><i class="ri-account-circle-line"></i>Profile</li>
            <li><i class="ri-circle-line"></i>Meta AI</li>
            <li><i class="ri-threads-line"></i>Threads</li>
            <li><i class="ri-align-justify"></i>More</li>
        </ul>
    </div> 
    
    </>
  )
}

export default Navbar
