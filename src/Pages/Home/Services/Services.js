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
        <div>
            <div>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h3 className='text-5xl font-semibold'>My Service Area</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maiores consequatur consequuntur eaque aspernatur. Dolores enim nihil inventore temporibus neque.</p>
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