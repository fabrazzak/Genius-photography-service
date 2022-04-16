import React, { useEffect, useState } from 'react';
import useServices from '../../Hooks/useServices';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] =useServices();
    const ThreeService= services.filter(service => service.id<4 );
    console.log(ThreeService);

    return (
        <div className='container py-lg-5'>
            <h1 className='text-primary fw-bold py-lg-3 text-center'>My Services</h1>
            <section >
                <div className="row row-cols-1 row-cols-md-3 g-5">
                   {
                        services.map(service => <SingleService 
                            key={service.id}
                            service={service}
                            ></SingleService>)
                   }
                    
                </div>
               
            </section>
        </div>
    );
};

export default Services;