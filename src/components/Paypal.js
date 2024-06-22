import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { paypalprocessing } from '../store/actions/paypalAction'

const Paypal = ({ planId }) => {
  const paypal = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    window.paypal?.Buttons({
      style: { shape: "pill" },
      createSubscription: async (data, actions) => {
        let payload = {
          PAYPAL_PLAN_ID: "P-6DN59517TY1856246MZ2VIQA" // Use the planId passed as prop
        };
        await dispatch(paypalprocessing(payload));
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        console.log("Successfully Order is Placed", order);
      },
      onError: (err) => {
        console.log(err);
      }
    }).render(paypal.current);
  }, [dispatch]); // Add planId and dispatch to dependency array

  return (
    <div ref={paypal}></div>
  );
}

export default Paypal;
