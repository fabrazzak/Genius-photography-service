import React, { useEffect, useState } from 'react';

const SingleService = ({service}) => {
    const {id,img,name,price,description}=service;
   

    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{description}</p>
                    <h5 className="card-title">Price: ${price}</h5>
                    <button className='hire-me-btn btn-lg w-100 border mt-4'>Hire Me </button>
                    </div>
            </div>
        </div>
    );
};

export default SingleService;