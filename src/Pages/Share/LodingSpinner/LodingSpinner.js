import React from 'react';
import { Spinner } from 'react-bootstrap';
import "./LodingSpinner.css"

const LodingSpinner = () => {
    return (
        <div className='d-flex justify-content-center align-items-center spinner' >
            <Spinner animation="border" variant="primary" />
            
        </div>
    );
};

export default LodingSpinner;