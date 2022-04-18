import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialShare from '../SocialShare/SocialShare';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const navigate=useNavigate();
    const location=useLocation();
    const [emails,setEamils]=useState();
    let from=location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending2, error2] = useSendPasswordResetEmail(auth);
   
    let customError;
    if (error) {
        customError = <p className='text-danger'>Error{error?.message} </p>

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
      
        
    }
    const handleOnBlurEmail=event=>{
        const emails=event.target.value;
        setEamils(emails);
    }
    const handleResetPassword=()=>{
        navigate("/resetpassword")
    }
    return (
        <div className="container my-5  ">
            <div className='form mx-auto rounded py-5'>
                <h3>Please Login!</h3>
                <form onSubmit={handleSubmitForm}  >
                    <div className="input-groupe">
                        <input onBlur={handleOnBlurEmail} type="email" className='form-control fs-5 border-2' name="email" id="" required placeholder='Your Email' />
                    </div>
                    <div className="input-groupe">
                        <input type="password" className='form-control fs-5 border-2' name="password" id="" required placeholder='Your Password' />
                    </div>
                    {customError}
                    <button type="submit" className='btn-lg btn-primary mb-3 px-5 fw-bold fst-italic'> Sign In</button>

                </form>
                <p onClick={handleLogin} className="toggleSigninLogin ">New to jason burns? <span className='text-primary'>Please Register.</span></p>
              
                <p onClick={handleResetPassword} className="toggleSigninLogin">Forget your password? <span className='text-primary'>Reset Password.</span></p>
              
                <SocialShare></SocialShare>

            </div>
        </div>
    );
};

export default Login;