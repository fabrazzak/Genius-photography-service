import React from 'react';
import './SocialShare.css'
import google from "../../../images/Socila/google.png"
import github from "../../../images/Socila/github.png"
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import LodingSpinner from '../../Share/LodingSpinner/LodingSpinner';

const SocialShare = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorMessage ;
    if(error1||error){
        errorMessage = <p className='text-danger'>Error: {error1?.message} {error?.message}</p>;
    }
    if(user || user1){
        navigate(from, { replace: true });
      
    }
    if(loading || loading1){
        return <LodingSpinner></LodingSpinner>
      
    }
    const handleSigninGoogle=()=>{
        signInWithGoogle();
        
    }
    const handleSigninGithub=()=>{
        signInWithGithub();
    }
    
  
    return (
        <div>
            <div className='d-flex content-container '>
                <div className='content '></div>
                <div className=' content-p '><p>or</p></div>
                <div className='content '></div>
            </div>
            {errorMessage}
            <div className='d-flex justify-content-center flex-column socila'>
                <button onClick={handleSigninGoogle} className='btn-lg socile-btn btn-link bg-white me-3 my-2 text-decoration-none   w-100 rounded-pill '>
                    <img src={google} alt="" />
                    <span className=' me-5'> Google with</span></button>
            
                <button onClick={handleSigninGithub}  className='btn-lg socile-btn btn-link bg-white me-3  my-2 text-decoration-none w-100 rounded-pill '>
                    <img src={github} alt="" />
                    <span className=' me-5'> Github with</span> </button>
            </div>
            
        </div>
    );
};

export default SocialShare;