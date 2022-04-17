import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
    const handleSubmit=event=>{
        event.preventDefault();
    }
    return (
       <div className='container pb-5'> 
                <h1 className='text-center text-primary py-lg-3'>Contact Me</h1>
            <div className="row">
                <div className="col-md-4">
                    <ul>
                        <li className='list-iteam'><span className='me-3 fs-4 text-primary'><i className='fa fa-envelope'></i></span> Email: jasonburns@gmail.com</li>
                        <li className='list-iteam'> <span className='me-3 fs-4 text-primary'><i className='fa fa-edge'></i></span> Web: https://www.jasonburns.com</li>
                        <li className='list-iteam'><span className='me-3 fs-4 text-primary'><i className='fa fa-phone'></i></span> Phone: 01775832654</li>                       
                    </ul>

                </div>
                <div className="col-md-8">
                    <form onSubmit={handleSubmit} className="row g-3" >
                        <div className="col-md-4">
                            <input type="text" className="form-control" id="validationCustom01" placeholder='First name' required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="validationCustom03" placeholder='Your location' required />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="input-group ">
                                <input type="text" className="form-control" id="validationCustomUsername" placeholder='Number' aria-describedby="inputGroupPrepend" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <input type="email" className="form-control" id="validationCustom03" required placeholder='Your Email' />
                           
                        </div>
                        <div className="col-md-10">
                          <div className="mb-3 w-100">
                              
                                <textarea className="form-control " name="message" rows="4" placeholder='Your message'></textarea>
                            </div>
                           
                        </div>
                       
                        
                       
                       
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" required />
                                <label className="form-check-label" >
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
       </div>
    );
};

export default ContactForm;
