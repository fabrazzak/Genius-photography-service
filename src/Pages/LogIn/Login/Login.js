import React from 'react';
import SocialShare from '../SocialShare/SocialShare';

const Login = () => {
    return (
        <div className="container my-5  ">
            <div className='form mx-auto rounded py-5'>
                <h1>Please Login!</h1>
                <form >
                    <div className="input-groupe">
                        <input type="email" className='form-control fs-5 border-2' name="email" id="" required placeholder='Your Email' />
                    </div>
                    <div className="input-groupe">
                        <input type="password" className='form-control fs-5 border-2' name="password" id="" required placeholder='Your Password' />
                    </div>
                    <button type="submit" className='btn-lg btn-primary mb-3 px-5 fw-bold fst-italic'> Sign In</button>

                </form>
                <p >New to jason burns? <span className='text-primary'>Please Register.</span></p>
                <SocialShare></SocialShare>

            </div>
        </div>
    );
};

export default Login;