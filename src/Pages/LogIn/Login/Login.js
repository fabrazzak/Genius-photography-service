import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialShare from '../SocialShare/SocialShare';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {

    const navigate=useNavigate();
    const location=useLocation();
    let from=location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let customError;
    if (error) {
        customError = <p className='text-danger'>Error{error?.message}</p>

    }else{
        navigate(from, { replace: true });
    }
    

    const handleLogin=()=>{
        navigate("/signin")
    }

    const handleSubmitForm = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
       
       
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
       
            
        
        
      
    };

    return (
        <div className="container my-5  ">
            <div className='form mx-auto rounded py-5'>
                <h1>Please Login!</h1>
                <form onSubmit={handleSubmitForm}  >
                    <div className="input-groupe">
                        <input type="email" className='form-control fs-5 border-2' name="email" id="" required placeholder='Your Email' />
                    </div>
                    <div className="input-groupe">
                        <input type="password" className='form-control fs-5 border-2' name="password" id="" required placeholder='Your Password' />
                    </div>
                    {customError}
                    <button type="submit" className='btn-lg btn-primary mb-3 px-5 fw-bold fst-italic'> Sign In</button>

                </form>
                <p onClick={handleLogin} className="toggleSigninLogin">New to jason burns? <span className='text-primary'>Please Register.</span></p>
                <SocialShare></SocialShare>

            </div>
        </div>
    );
};

export default Login;