import React from 'react';
import './ContactForm.css'

const ContactForm = () => {
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
                    <form className="row g-3 needs-validation" novalidate>
                        <div className="col-md-4">
                            <label for="validationCustom01" className="form-label">First name</label>
                            <input type="text" className="form-control" id="validationCustom01" placeholder='First name' required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label for="validationCustom02" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="validationCustom02" placeholder='Last Name' required />
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label for="validationCustomUsername" className="form-label">Phone Number</label>
                            <div className="input-group has-validation">
                                <input type="text" className="form-control" id="validationCustomUsername" placeholder='Number' aria-describedby="inputGroupPrepend" required />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label for="validationCustom03" className="form-label">Your Email</label>
                            <input type="email" className="form-control" id="validationCustom03" required placeholder='Your Email' />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                       
                        <div className="col-md-6">
                            <label for="validationCustom03" className="form-label">City</label>
                            <input type="text" className="form-control" id="validationCustom03" required />
                            <div className="invalid-feedback">
                                Please provide a valid city.
                            </div>
                        </div>
                       
                       
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label" for="invalidCheck">
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
