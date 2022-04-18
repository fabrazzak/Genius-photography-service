import React, { useState } from 'react';




import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';

const ForgetPassword = () => {
    const [emails, setEamils] = useState();
    const [sendPasswordResetEmail, sending2, error2] = useSendPasswordResetEmail(auth);
    const handleOnBlurEmail = event => {
        let emails = event.target.value;
        setEamils(emails);
       
    
    }
    const handleSubmitForm=event=>{
        event.preventDefault();
    }
    const handleResetPassword = async () => {
        if(emails) {
            await sendPasswordResetEmail(emails);
            toast("please check email for reset password");
       

        } else {
            toast("Please Enter your email.");
        }
        
       
        

    }
    return (
        <div className="container my-5  ">
            <div className='form mx-auto rounded py-5'>
                <h3>Reset Password!</h3>
                <form onSubmit={handleSubmitForm}  >
                    <div className="input-groupe">
                        <input onBlur={handleOnBlurEmail} type="email" className='form-control fs-5 border-2' name="email" id="" required placeholder='Your Email' />
                    </div>
                    <ToastContainer />
                    <button onClick={handleResetPassword}  type="submit" className='btn-lg btn-primary mb-3 px-5 fw-bold fst-italic'> Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;