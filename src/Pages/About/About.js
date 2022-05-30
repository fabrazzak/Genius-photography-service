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
                        Hello, I am a professional and skilled Web Developer.I develop websites in React single pages application and  a CMS named WordPress.As for programming languages, I am skilled at HTML, CSS,Tailwind,Javascript,React.js ,Node.js, Express.js,MongoDB,Daisy tailwind library, PHP,Wordpress, JS, Jquery, and Bootstrap.Each website I make will be responsive and will load fast.I am working at Upwork market place and fiver market place. </p>
                </div>
            </div>
        </div>
    );
};

export default About;