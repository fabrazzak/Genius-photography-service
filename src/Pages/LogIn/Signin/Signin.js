import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import SocialShare from '../SocialShare/SocialShare';
import './Signin.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signin = () => {
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, error1] = useSendEmailVerification( auth);
    let customError;
    if (user) {
        navigate("/");
    }
    if (error||error1){
        customError = <p className='text-danger'>Error{error?.message}{error1?.message}</p>

    }
    else  {
        customError = <p className='text-danger'></p>

    }

    const handleSubmitForm = async (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        const name=event.target.text.value;
        const email=event.target.email.value;
        const password=event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
    
    
      
                  
    };
    const handleSignInLogIn=()=>{
       
           navigate('/login');
      
    }
    

   
    

   
    return (
        <div className="container my-5  ">
            <div className='form mx-auto rounded py-5'>
                <h3>Please Register!</h3>
                <form onSubmit={handleSubmitForm}  >
                    <div className="input-groupe">
                        <input type="text" className='form-control fs-5 border-2' name="text" id="" required placeholder='Your Name' />
                    </div>
                    <div className="input-groupe">
                        <input type="email" className='form-control fs-5 border-2' name="email" id="" required placeholder='Your Email' />
                    </div>
                    <div className="input-groupe">
                        <input type="password" className='form-control fs-5 border-2' name="password" id="" required placeholder='Your Password' />
                    </div>
                    {customError}
                    <button   type="submit" className='btn-lg btn-primary mb-3 px-5 fw-bold fst-italic'> Sign In</button>
                    <ToastContainer />
                    <p onClick={handleSignInLogIn} className="toggleSigninLogin">Al ready have an account? <span className='text-primary'>Please Login.</span></p>
                    <SocialShare></SocialShare>
                   
                </form>
                

            </div>
        </div>
    );
};

export default Signin;