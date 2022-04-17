import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import SocialShare from '../SocialShare/SocialShare';
import './Signin.css'

const Signin = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

   
    return (
        <div className="container ">
            <div className='form mx-auto py-5'>
                <h1>Please Register!</h1>
                <form >
                    <div className="input-groupe">
                        <input type="text" className='form-control fs-5 border-2' name="text" id="" required placeholder='Your Name' />
                    </div>
                    <div className="input-groupe">
                        <input type="email" className='form-control fs-5 border-2' name="email" id="" required placeholder='Your Email' />
                    </div>
                    <div className="input-groupe">
                        <input type="password" className='form-control fs-5 border-2' name="password" id="" required placeholder='Your Password' />
                    </div>
                    <button type="submit" className='btn-lg btn-primary mb-3 px-5 fw-bold fst-italic'> Sign In</button>
                   
                </form>
                <p >Al ready have an account? <span className='text-primary'>Please Login.</span></p>
                <SocialShare></SocialShare>

            </div>
        </div>
    );
};

export default Signin;