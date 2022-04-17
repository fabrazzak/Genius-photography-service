import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    var today = new Date();

    var date = today.getFullYear() 
    return (
        <div className='text-center py-5 bg-dark text-light'>
            <div className="container">
                <div className="row ">
                    <div className='col-lg-3 col-sm-12 '>
                        <div className='d-flex justify-content-around'>
                            <div>
                                <Link className=' d-block text-white text-decoration-none fs-6' to="/">Home</Link>
                                <Link className=' d-block text-white text-decoration-none fs-6' to="services">Services</Link>
                                <Link className=' d-block text-white text-decoration-none fs-6' to="about">About</Link>
                                <Link className=' d-block text-white text-decoration-none fs-6' to="blogs">Blogs</Link>
                                <Link className=' d-block text-white text-decoration-none fs-6' to="contact">Contact</Link>
                            </div>
                            
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 text-align-center  mt-3 d-flex align-iteams-center justify-content-center'>
                        <h1>JASON BURNS </h1>
                    </div>
                    <div className='col-lg-3 col-sm-12'>
                       
                        <div className='mb-5'>
                            <h4 className='my-5'>Follow Link </h4>
                            
                            <a href="#" className='me-4 bg-white p-2  rounded rounded-circle fs-5' > <i className='fa fa-facebook'></i></a>
                            <a href="#" className='me-4 bg-white p-2  rounded rounded-circle fs-5' > <i className='fa fa-twitter'></i></a>
                            <a href="#" className='me-4 bg-white p-2  rounded rounded-circle fs-5' > <i className='fa fa-youtube'></i></a>
                        </div>
                    </div>
                </div>
                <div>
                    <p>JASON BURNS PHOTOGRAPHY | ORANGE COUNTY WEDDING & ELOPEMENT PHOTOGRAPHER</p>
                </div>
                <div>
                    <p>© {date} JASON BURNS PHOTOGRAPHY. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;