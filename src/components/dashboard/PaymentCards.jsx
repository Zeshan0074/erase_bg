import React, { useEffect, useState } from 'react';
import Starter from "../../assets/img/Starter.png";
import Plus from "../../assets/img/Plus.png";
import Premium from "../../assets/img/Premium.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useSelector } from 'react-redux';

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
    subscription: "500 images for 15$",
  },
  {
    name: 'Premium',
    price: '25',
    planId: "P-5FP81021T07715908MZ2VMBY",
    email: "15 email accounts",
    space: "100GB Space",
    img: Premium,
    subscription: "1000 images for 25$",
  },
];

const PricingTable = () => {
  const { user } = useSelector((state) => state.authUser);
  const [subscription, setSubscription] = useState("");
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://amazingly-sought-snapper.ngrok-free.app/RemoveBG/getdetails/', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${user?.token}`,
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const responseData = await response.json();
        setSubscription(responseData?.plan?.name);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [user]);

  const handleProcessing = async (planId, planName) => {
    try {
      const response = await fetch('https://amazingly-sought-snapper.ngrok-free.app/RemoveBG/paypalprocessing/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user?.token}`
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();

      if (data?.status === "APPROVAL_PENDING") {
        const redirectLink = data?.links[0]?.href;
        if (redirectLink) {
          window.location.href = redirectLink;  // Redirect to PayPal link
        }
      }
    } catch (error) {
      console.error("Error occurred during PayPal processing:", error);
    }
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
  className={`mt-20 w-full py-2 px-4 rounded-full transition duration-300 ${subscription === plan.name ? 'bg-red-500' : 'bg-primary'} text-white`}
  onClick={() => handleProcessing(plan.planId, plan.name)}
>
  {!subscription ? "Purchase" : (subscription === plan.name ? "Cancel" : "Update")}
</button>
        </div>
      ))}
    </div>
  );
}

export default PricingTable;
