import React from 'react'
import "@fortawesome/react-fontawesome"
import './Content.css'





const Content = () => {
    return (
    <>
            <div className="story-container">
                <div className="story">
                    <i className="fa-solid fa-circle-user"></i>
                    <div className="story-name">And_re_ax</div>
                </div>

                <div className="story">
                    <i className="fa-solid fa-circle-user"></i>
                    <div className="story-name">a.rjun.z</div>
                </div>

                <div className="story">
                    <i className="fa-solid fa-circle-user"></i>
                    <div className="story-name">zzz.zzz.9</div>
                </div>

                <div className="story">
                    <i className="fa-solid fa-circle-user"></i>
                    <div className="story-name">6_thi</div>
                </div>

                <div className="story">
                    <i className="fa-solid fa-circle-user"></i>
                    <div className="story-name">i_arjun_24</div>
                </div>

                <div className="story">
                    <i className="fa-solid fa-circle-user"></i>
                    <div className="story-name">_gobbika_.</div>
                </div>
            </div>


            <div className="post">
                <div className="post-header">
                    <i className="fa-solid fa-circle-user"></i>
                    <div className="post-username">And_re_ax</div>
                </div>
                <img className="post-image" src="https://www.krauzovinacestach.cz/wp-content/uploads/2024/04/dsc09672-1024x683.jpg" alt="Post"></img>
                <div className="post-actions">
                    <div className="post-left-icons">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                        <i className="fa-regular fa-paper-plane"></i>
                    </div>
                    <div className="post-right-icon">
                        <i className="fa-regular fa-bookmark"></i>
                    </div>
                </div>
                <div className="comment">
                    <p>140 likes</p>
                </div>
                </div>

                </>
            
            )
}

            export default Content
