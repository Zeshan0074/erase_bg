import React, { useState } from 'react';
import Starter from "../../assets/img/Starter.png";
import Plus from "../../assets/img/Plus.png";
import Premium from "../../assets/img/Premium.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { paypalprocessing } from '../../store/actions/paypalAction'
import { useDispatch } from 'react-redux';

const plans = [
  {
    name: 'Starter',
    price: '5',
    planId: "P-6DN59517TY1856246MZ2VIQA",
    email: "15 email accounts",
    space: "100GB Space",
    img: Starter,
    subscription: "100 images for 5$",
  },
  {
    name: 'Plus',
    price: '15',
    planId: "P-4CF81880KA538483WMZ2VLEI",
    email: "15 email accounts",
    space: "100GB Space",
    img: Plus,
    subscription: "100 images for 15$",
  },
  {
    name: 'Premium',
    price: '25',
    planId: "P-5FP81021T07715908MZ2VMBY",
    email: "15 email accounts",
    space: "100GB Space",
    img: Premium,
    subscription: "100 images for 25$",
  },
];

const PricingTable = () => {

  const dispatch = useDispatch()
  const  handleProcessing=(id,type)=>
    {
      let payload = {
        plan_type: type,
        PAYPAL_PLAN_ID: "P-4A7312506F528401VMZ3LNVQ"
      }
      dispatch(paypalprocessing(payload));
    }
  return (
    <>
    
    <div className="flex flex-wrap gap-6 justify-center items-center min-h-screen bg-gray-100  w-full">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`border-[0.1px] rounded-2xl shadow-sm hover:transform md:hover:scale-105 duration-300 delay-200 px-6 py-4 w-[300px] md:w-[320px] lg:w-[370px] max-w-sm text-center h-full ${index === 1 ? 'bg-white' : index === 0 || index === 2 ? 'bg-transparent' : 'hover:bg-white'
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
          <button className="bg-primary text-white mt-20 w-full py-2 px-4 rounded-full  transition duration-300"  onClick={()=> { handleProcessing(plan.planId,plan.name) }}>Purchase Now</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default PricingTable;
