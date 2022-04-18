import React from 'react';
import { useNavigate } from 'react-router-dom';
import fourOfour from '../../images/about/Cute-404-page-not-found-design.jpg'

const FourOFour = () => {
    const navigate=useNavigate();
    const handleOnclick=()=>{
        navigate("/");

    }
    return (
        <div >
            <div onClick={handleOnclick} className='d-flex fourOfour justify-content-center'>
                <img src={fourOfour} className="img-fluid" alt="" />
                      
            </div>
        </div>
    );
};

export default FourOFour;