import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import MyServices from './MyServices';

const Services = () => {
  useTitle('Services');

    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/services')
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
                    services.slice(0,3).map(service => <MyServices
                    key={service._id}
                    service ={service}
                    ></MyServices>)

                }
            </div>
            <div className='text-center mt-5'>
                <Link to = '/services'> <button className='btn btn-primary'>see all services</button> </Link>
            </div>
        </div>
    );
};

export default Services;