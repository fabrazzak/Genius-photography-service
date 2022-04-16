import React from 'react';
import useServices from '../../Hooks/useServices';
import SingleService from '../Services/SingleService';
import Banner from './Banner/Banner';


const Home = () => {
    const [services, setServices] = useServices();
    const ThreeService = services.filter(service => service.id < 4);
    return (
        < >
            <Banner></Banner>
           
            <div className='container py-lg-5'>
                <h1 className='text-primary fw-bold py-lg-3 text-center'>My Services</h1>
                <section >
                    <div className="row row-cols-1 row-cols-md-3 g-5">
                        {
                            ThreeService.map(service => <SingleService
                                key={service.id}
                                service={service}
                            ></SingleService>)
                        }
                    </div>
                    <div>
                        <button className='btn-lg  w-25 mx-auto btn-link bg-white text-decoration-none border-0 d-block my-4'>Show All....</button>
                    </div>
                </section>
            </div>

            
        </>
    );
};

export default Home;