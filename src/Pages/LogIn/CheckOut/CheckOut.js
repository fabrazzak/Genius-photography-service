import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const CheckOut = () => {
    const {servicesId}=useParams();
    const [user, loading, error] = useAuthState(auth);
  const handleSubmit=event=> {
        event.preventDefault();
    }
    
   
    return (
        <div>
            <form onSubmit={handleSubmit} className="form mx-auto my-5">
                <h2 className='text-primary d-inline'>Check Out/</h2><span className='text-primary fs-4'>Services/id/{servicesId}</span>
               <div className="input-groupe">
                   <label htmlFor="name" className="fs-5 mb-2">Your Name</label>
                   <input type="text" className='form-control fs-5'readOnly name="name" value={user?.displayName} placeholder='Your Name' id="" required/>
               </div>
               <div className="input-groupe">
                   <label htmlFor="email" className="fs-5 mb-2">Your Email</label>
                   <input type="email"  className='form-control fs-5' name="email" value={user?.email} readOnly />
               </div>
               <div className="input-groupe">
                   <input type="text"  className='form-control fs-5'name="number" placeholder='Phone Number' id="" required />
               </div>
               <div className="input-groupe">
                   <input type="text" className='form-control fs-5' name="location" placeholder='Your Location' id=""  required/>
               </div>
               <div className="input-groupe">
                   <input type="text" className='form-control fs-5' name="location" placeholder='Add Debit or Credit card number' id=""  required/>
               </div>
               <div className="input-groupe">
                   <input type="text" className='form-control fs-5' name="location" placeholder='Security Code ' id=""  required/>
               </div>
               <button type="submit" className='btn-primary btn-lg w-50 mx-auto d-block mt-2'>Proceed</button>
              
           </form>
        </div>
    );
};

export default CheckOut;