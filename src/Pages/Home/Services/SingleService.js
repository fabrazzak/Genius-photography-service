import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const SingleService = ({service}) => {
    const navigate=useNavigate();
    const {id,img,name,price,description}=service;
    const handleCheckout=(id)=>{
       navigate(`services/${id}`);

    }

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>
                    <h5 className="card-title">Price: ${price}</h5>
                    <button onClick={()=>handleCheckout(id)} className='hire-me-btn btn-lg w-100 border mt-4'>Hire Me </button>
                    </div>
            </div>
        </div>
    );
};

export default SingleService;