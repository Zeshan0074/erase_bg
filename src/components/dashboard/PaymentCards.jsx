import React from 'react';
import Starter from "../../assets/img/Starter.png";
import Plus from "../../assets/img/Plus.png";
import Premium from "../../assets/img/Premium.png";
import { IoIosCheckmarkCircle } from "react-icons/io";

const plans = [
  {
    name: 'Starter',
    price: '5.99',
    features: ['15 Email Accounts', '100 GB Space', '1 Domain Name'],
    img: Starter,
  },
  {
    name: 'Plus',
    price: '5.99',
    features: ['15 Email Accounts', '100 GB Space', '1 Domain Name'],
    img: Plus,
  },
  {
    name: 'Premium',
    price: '5.99',
    features: ['Unlimited Images', 'Unlimited Accounts', 'Priority Support'],
    img: Premium,
  },
];

const PricingTable = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center items-center min-h-screen bg-gray-100  w-full">
      {plans.map((plan, index) => (
        <div 
          key={index} 
          className={`border-[0.1px] rounded-2xl shadow-sm hover:transform hover:scale-110 duration-300 delay-200 px-6 py-4 w-[300px] md:w-[320px] lg:w-[370px] max-w-sm text-center h-full ${
            index === 1 ? 'bg-white' : index === 0 || index === 2 ? 'bg-transparent' : 'hover:bg-white'
          }`}
        >
          <div className="flex justify-center items-center w-full">
            <img src={plan.img} alt="" className="text-6xl text-center mb-16 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-500">{plan.name}</h2>
          <div className="text-4xl font-extrabold text-black mb-4">
            ${plan.price} <span className="text-xl text-primary font-extrabold">/Month</span>
          </div>
          <ul className="list-none p-0 mb-6 w-[70%] mx-auto">
            {plan.features.map((feature, i) => (
              <div key={i} className='flex '>
                <IoIosCheckmarkCircle size={20} className='text-primary '/>
              <li  className="text-gray-500 text-start pl-4 font-semibold mb-2">{feature}</li>

              </div>
            ))}
          </ul>
          <button className="bg-primary text-white mt-20 w-full py-2 px-4 rounded-full  transition duration-300">Purchase Now</button>
        </div>
      ))}
    </div>
  );
};

export default PricingTable;

