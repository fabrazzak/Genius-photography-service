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
                        My name is Abdur Razzak . I’m a photographer specializing in intimate weddings and elopements based out of Southern California. I've always enjoyed the arts and have taken advantage of every chance to engage in them; however, discovering photography in college soon became my passion. Growing up in the pacific northwest, being surrounded by such beautiful landscapes and nature I feel has always inspired me as a photographer, nothing makes me happier than exploring breathtaking scenery with amazing couples. It’s such a privilege to be there to document such important moments in my couple’s lives and it never seems to get old to me, no two weddings or elopements are ever the same, each one is different and unique in a way to reflect that couple's style and personality and I love to document it.

                        My photography style is colorful, candid, romantic, photo-journalistic, true to life, and a little fun. I've been told all my life I have a very laid-back personality and I pride myself on making your day as relaxed and easy-going as possible and most importantly that you enjoy your time spent with me, you have fun, and that you love your photos.</p>
                </div>
            </div>
        </div>
    );
};

export default About;