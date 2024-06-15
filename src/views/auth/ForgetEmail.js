import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { SiMinutemailer } from "react-icons/si";
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
import { forgetemail } from '../../store/actions/authAction';
const ForgetPassword = () => {
  const { loading } = useSelector((state) => state?.user);
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  
  const handleSubmit = (e) => {
    localStorage.setItem('forgetEmail', email);
    e.preventDefault();
    
    const payload = {
      email: email,
    };
    dispatch(
        forgetemail(payload, () => {
        history.push("/auth/forgetverifyotp");
      })
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-full md:w-[600px]">
        
          <div className="text-primary mb-4">
            <SiMinutemailer size={60} />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Enter Your Email</h2>
          <p className="text-gray-600 mb-6 md:text-lg text-[12px]">Insert Email to Reset Password</p>
          <form onSubmit={handleSubmit} className='w-full'>
            <div className="mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            
            <button
              type="submit"
              className="bg-primary text-white w-full font-semibold text-lg px-4 py-2 rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary">
              {loading ? <Spinner size="sm" /> : "Submit"}
            </button>
          </form>
        </div>
      </div>
    
  );
};

export default ForgetPassword;
