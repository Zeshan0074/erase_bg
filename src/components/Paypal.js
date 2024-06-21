import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { paypalprocessing } from '../store/actions/paypalAction';

const Paypal = () => {
    const paypal = useRef()
    const dispatch = useDispatch()
    useEffect(() => {
         window.paypal?.Buttons(
        {style: { shape: "pill"},
            createSubscription: (data, actions, err) =>
            {
                dispatch(paypalprocessing(payload))
            },
            OnApprover: async (data, actions) =>{
                const order = await actions.order.capture()
                console.log("Successfully Order is Placed",order)
            },
            onError: (err) => {
                console.log(err)
            }
         }).render(paypal.current)
      }, []);
  return (
    <div ref={paypal}>

    </div>
  )
}

export default Paypal