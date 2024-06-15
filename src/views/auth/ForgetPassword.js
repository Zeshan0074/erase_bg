import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { MdMarkEmailRead } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';
import toast from 'react-hot-toast';
import { forgetPassword } from '../../store/actions/authAction';
// import { resetPassword } from '../../store/actions/authAction'; // Assuming you have an action for password reset

const ForgetPassword = () => {
  const { loading } = useSelector((state) => state?.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // Handle password mismatch error
      toast.error("Passwords do not match!");
      return;
    }
    const payload = {
      email: email,
      new_password: password,
    };
    dispatch(
      forgetPassword(payload, () => {
        history.push("/auth/login");
      })
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg w-full md:w-[600px]">
        
          <div className="text-primary mb-4">
            <MdMarkEmailRead size={60} />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Reset Your Password</h2>
          <p className="text-gray-600 mb-6 md:text-lg text-[12px]">Enter your email address and new password</p>
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
            <div className="mb-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="New Password"
                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white w-full font-semibold text-lg px-4 py-2 rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary">
              {loading ? <Spinner size="sm" /> : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    
  );
};

export default ForgetPassword;
