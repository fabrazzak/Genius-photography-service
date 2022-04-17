import React from 'react';
import ContactForm from './ContactForm';
import contactImg from "../../images/Banner/banner4.jpg"

const Contact = () => {
    return (
        <div className='py-5 ' style={{ backgroundImage: ` url(${contactImg})`}}>
            
            <div className='py-5'>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default Contact;