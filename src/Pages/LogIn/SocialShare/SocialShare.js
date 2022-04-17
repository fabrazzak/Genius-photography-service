import React from 'react';
import './SocialShare.css'
import google from "../../../images/Socila/google.png"
import github from "../../../images/Socila/github.png"

const SocialShare = () => {
    return (
        <div>
            <div className='d-flex content-container '>
                <div className='content '></div>
                <div className=' content-p '><p>or</p></div>
                <div className='content '></div>
            </div>
            <div className='d-flex justify-content-center flex-column socila'>
                <button className='btn-lg socile-btn btn-link bg-white me-3 my-2 text-decoration-none   w-100 rounded-pill '>
                    <img src={google} alt="" />
                    <span className=' me-5'> Google with</span></button>
            
                <button className='btn-lg socile-btn btn-link bg-white me-3  my-2 text-decoration-none w-100 rounded-pill '>
                    <img src={github} alt="" />
                    <span className=' me-5'> Github with</span> </button>
            </div>
            
        </div>
    );
};

export default SocialShare;