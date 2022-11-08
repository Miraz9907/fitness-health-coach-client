import React, { useEffect, useState } from 'react';
import MyServices from './MyServices';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mt-2'>
            <div className='text-center'>
                <p className='text-4xl font-bold text-red-400 my-4'>Services</p>
                <h3 className='text-3xl font-semibold '>Service Area</h3>
                <p className='text-xl'>Start working on your body today, and with our individual fitness program, already in 90 days you will see a totally different You in the mirror!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <MyServices
                    key={service.service_id}
                    service ={service}
                    ></MyServices>)

                }
            </div>
        </div>
    );
};

export default Services;