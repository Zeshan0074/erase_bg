import React, { useEffect, useState } from 'react';
import Starter from "../../assets/img/Starter.png";
import Plus from "../../assets/img/Plus.png";
import Premium from "../../assets/img/Premium.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { getpaypal, paypalcancel, paypalprocessing, paypalupdate } from '../../store/actions/paypalAction';

const PricingTable = () => {
  const { user } = useSelector((state) => state.authUser);
  const { paypal } = useSelector((state) => state?.paypal);

  const dispatch = useDispatch()
  const plans = [
    {
      name: 'Starter',
      price: '5',
      planId: "P-0VW623101X927605GM2BIO4Y",
      email: "15 email accounts",
      space: "100GB Space",
      img: Starter,
      subscription: "100 images for 5$",
    },
    {
      name: 'Plus',
      price: '15',
      planId: "P-1U006375E7306951CM2BIPTA",
      email: "15 email accounts",
      space: "100GB Space",
      img: Plus,
      subscription: "500 images for 15$",
    },
    {
      name: 'Premium',
      price: '25',
      planId: "P-96024203H3200473RM2BIQNQ",
      email: "15 email accounts",
      space: "100GB Space",
      img: Premium,
      subscription: "1000 images for 25$",
    },
  ];

  // Extract token from useSeletor
  const token = user?.token;
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

  // Fetch data after 20 seconds of component mount
  const fetchDataAfterDelay = async () => {

    await new Promise(resolve => setTimeout(resolve, 5000)); // 50 seconds delay
    fetchData();
    await new Promise(resolve => setTimeout(resolve, 30000)); // 30 seconds delay
    fetchData();
    await new Promise(resolve => setTimeout(resolve, 45000)); // 45 seconds delay
    fetchData();
  };



  useEffect(() => {
    
    fetchData();
    fetchDataAfterDelay();
  }, []);


  // GET SUBSCRIPTION API
  const fetchData = async () => {
   
    const payload = {
    }
    dispatch(getpaypal(headers, payload))
  };



  // CREATE SUBSCRIPTION API
  const handleProcessing = async (planId, planName) => {
    const payload = {
      plan_type: planName,
      PAYPAL_PLAN_ID: planId,
    }


    dispatch(paypalprocessing(payload, headers))
  };

  // UPDATE SUBSCRIPTION API
  const handleUpdate = async (planId,planName) => {
    const payload = {
      old_subscription_id: paypal?.subscription?.subscription_id,
      new_plan_id: planId,
      plan_type: planName
    }
    console.log(">>>Update Payload",payload)
    dispatch(paypalupdate(payload))
  };




  // CANCEL SUBSCRIPTION API
  const cancelSubscription = async () => {
    fetchDataAfterDelay()

    const payload = {
      subscriptionid: paypal?.subscription?.subscription_id
    }

    dispatch(paypalcancel(payload, headers))
  };

  return (
    <div className="flex flex-wrap pt-6 gap-6 justify-center items-center min-h-screen bg-gray-100 w-full">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`border-[0.1px] rounded-2xl shadow-sm hover:transform md:hover:scale-95 duration-300 delay-200 px-6 py-4 w-[300px] md:w-[320px] lg:w-[370px] max-w-sm text-center h-full ${index === 1 ? 'bg-white' : index === 0 || index === 2 ? 'bg-transparent' : 'hover:bg-white'
            }`}
        >
          <div className="flex justify-center items-center w-full">
            <img src={plan.img} alt={plan.name} className="text-6xl text-center mb-16 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-500">{plan.name}</h2>
          <div className="text-4xl font-extrabold text-black mb-4">
            ${plan.price} <span className="text-xl text-primary font-extrabold"></span>
          </div>
          <ul className="list-none p-0 mb-6 w-[70%] mx-auto">
            <div className="flex">
              <IoIosCheckmarkCircle size={20} className="text-primary" />
              <li className="text-gray-500 text-start pl-4 font-semibold mb-2">{plan.subscription}</li>
            </div>
            <div className="flex">
              <IoIosCheckmarkCircle size={20} className="text-primary" />
              <li className="text-gray-500 text-start pl-4 font-semibold mb-2">{plan.email}</li>
            </div>
            <div className="flex">
              <IoIosCheckmarkCircle size={20} className="text-primary" />
              <li className="text-gray-500 text-start pl-4 font-semibold mb-2">{plan.space}</li>
            </div>
          </ul>
          <button
            className={`mt-20 w-full py-2 px-4 rounded-full transition duration-300 ${paypal?.subscription?.status === "ACTIVE" ? (paypal?.plan?.name === plan.name ? 'bg-red-500' : 'bg-primary') : "bg-primary"} text-white`}
            onClick={() => paypal?.subscription?.status === "ACTIVE" ? paypal?.plan?.name === plan.name ? cancelSubscription() : handleUpdate(plan.planId, plan.name) : handleProcessing(plan.planId, plan.name)}
          >
            {paypal?.subscription?.status === "ACTIVE" ? (paypal?.plan?.name === plan.name ? "Cancel" : "Update") : "Purchase"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default PricingTable;
