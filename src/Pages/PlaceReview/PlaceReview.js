import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PlaceReview = () => {
    const { user } = useContext(AuthContext);
    const placeReview = useLoaderData();
    const {_id, title, price} = placeReview;

    let dateTimeObj = new Date();
    let dateTime = dateTimeObj.toISOString();
    
    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const rating = form.rating.value;
        const dateTime = form.dateTime.value;
        const img = form.photoUrl.value;
        const msg = form.message.value;



        const review = {
            service: _id,
            serviceName: title,
            price,
            reviewer: name,
            email,
            rating,
            dateTime,
            img,
            msg
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Review placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));


    }
    return (
        <div>
        <form onSubmit={handlePlaceReview} className='m-10' >
            <h2 className="text-4xl text-center">You are here to review: {title}</h2>
            <h4 className="text-3xl text-center">Price: ${price}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <input name="firstName" type="text" placeholder="First Name" className="input input-ghost w-full  input-bordered" required />
                <input name="lastName" type="text" placeholder="Last Name" className="input input-ghost w-full  input-bordered" required />
                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                <input name="photoUrl" type="text" placeholder="Photo Url" className="input input-ghost w-full  input-bordered" required />
                <input name="dateTime" type="text" placeholder="Date" defaultValue={dateTime} className="input input-ghost w-full  input-bordered" readOnly />
                <input name="rating" type="number" placeholder="Rating" className="input input-ghost w-full  input-bordered" />
            </div>
            <textarea name="message" className="textarea textarea-bordered mt-6 h-24 w-full" placeholder="Place Your Review here" required></textarea>
            <div className='text-center'>
            <input className='btn btn-primary' type="submit" value="Submit Reveiw" />
            </div>

            
        </form>
    </div>
    );
};

export default PlaceReview;