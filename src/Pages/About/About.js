import React from 'react';
import about from "../../images/about/267711627_359642509253958_3317984799725762620_n.jpg"

const About = () => {
    return (
        <div className='container py-5 '>
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img src={about} alt="" className='img-fluid rounded rounded-circle ' />
                </div>
                <div className="col-md-8">
                    <div className='text-center my-5 '>
                        <h2 className='fst-italic text-secondary '>a title about me</h2>
                        <h3>WHO I AM</h3>
                        <h4 className='fst-italic text-info '>and more</h4>
                    </div>
                    <p className='mx-lg-5 '>
                        My name is Abdur Razzak.My dream is to build a career as a professional full-stack web developer.I want to work as hard as a full-stack web developer.I am currently working as a WordPress developer at Upwork Marketplace. </p>
                </div>
            </div>
        </div>
    );
};

export default About;