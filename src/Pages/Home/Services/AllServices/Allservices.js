import React, { useEffect, useState } from "react";
import MyallServiceCard from "../MyallServiceCard/MyallServiceCard";

const Allservices = () => {
  const [allService, setAllService] = useState([]);

  useEffect(() => {
    fetch("https://health-coach-server-eta.vercel.app/allservices")
      .then((res) => res.json())
      .then((data) => setAllService(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <p className="text-4xl font-bold text-red-400 my-4"> My all Services</p>
        <h3 className="text-3xl font-semibold ">Service Area</h3>
        <p className="text-xl">
          Start working on your body today, and with our individual fitness
          program, already in 90 days you will see a totally different You in
          the mirror!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allService.map((allservice) => (
          <MyallServiceCard
            key={allservice._id}
            allservice={allservice}
          ></MyallServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Allservices;
