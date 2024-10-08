import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { MdMarkEmailUnread } from "react-icons/md";
import { forgetemail, verifyforgetotp } from '../../store/actions/authAction';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';

const VerifyEmail = () => {
  const { loading } = useSelector((state) => state?.user);
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const [email, setEmail] = useState();

  useEffect(() => {
    const storedEmail = localStorage.getItem('forgetEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (value, index) => {
    if (/^[0-9]$/.test(value) || value === '') {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value !== '' && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    const pasteData = e.clipboardData.getData('Text').slice(0, 4);
    const newCode = pasteData.split('').map((char, index) => (index < 4 ? char : ''));
    setCode(newCode);
    newCode.forEach((char, index) => {
      inputRefs.current[index].value = char;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = code.join('');
    const payload = {
      email: email,
      otp: otpString,
    };
    dispatch(
      verifyforgetotp(payload, () => {
        history.push("/auth/forgetpassword");
      })
    );
  };

  const handleResend = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      otp: '', // Empty OTP to indicate resend request
    };
    dispatch(forgetemail(payload, () => {}));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-300">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-[600px]">
        <div className="flex flex-col items-center justify-center">
          <div className="text-primary mb-4">
            <MdMarkEmailUnread size={60} />
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800">Please check your email</h2>
          <p className="text-gray-600 mb-6">We've sent a reset password code</p>
          <form onSubmit={handleSubmit}>
            <div className="flex space-x-2 mb-6 w-full justify-center items-center">
              {code.map((num, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={num}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="w-12 h-12 border-2 border-primary rounded-lg text-center text-2xl text-primary"
                />
              ))}
            </div>
            <div className="text-gray-600 mb-4">
              Didn't get the code?{' '}
              <button
                onClick={handleResend}
                className="text-primary border-0 underline">
                Click to resend
              </button>
            </div>
            <button
              type='submit'
              className="bg-primary text-white w-full font-semibold text-lg px-4 py-2 rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary">
              {loading ? <Spinner size="sm" /> : "Verify"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
