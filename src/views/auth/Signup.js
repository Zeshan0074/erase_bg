import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { FcGoogle } from "react-icons/fc";
import { signup } from '../../store/actions/authAction';
import { Spinner } from 'reactstrap';
import { login } from '../../store/actions/authAction';
function Signup() {
  const { loading } = useSelector((state) => state?.user);
  const initialState = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [userDetail, setUserDetail] = useState(initialState);

  const dispatch = useDispatch();
  const history = useHistory();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirrmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (userDetail.password === userDetail.confirmPassword) {
      let payload = {
        email: userDetail.email,
        password: userDetail.password,

      };
      localStorage.setItem('userEmail', userDetail.email);
      console.log("entered credentials:", payload)
      dispatch(
        signup(payload, () => {
          history.push({
            pathname: "/auth/verifyotp",
            state: userDetail.email,
          });
          setUserDetail(initialState);
        })
      );
    } else {
      toast.error("Password did not match");
    }
  };

  // FireBase Signup With Google 



  // FireBase Signup With Google 
  const GoogleSignin = async () => {
    const auth = getAuth(); 
    const provider = new GoogleAuthProvider();

            const result = await signInWithPopup(auth, provider);
            console.log("Firebase sign-in successful:", result?.user?.email);

           
    let payload = {
      email:  result?.user?.email,
      provider:"Google"
    };
    dispatch(
      login(payload, () => {
        
        history.push("/");
      })
    );
    };
  return (
    <div className="h-full min-h-screen bg-zinc-300  flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-[600px]">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Signup</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              required
              name='email'
              value={userDetail.email}
              onChange={(e) => {
                handleChange(e);
              }}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              required
              name='password'
              value={userDetail.password}
              onChange={(e) => {
                handleChange(e);
              }}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 pt-[32px] flex items-center text-gray-700 cursor-pointer"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaRegEye />}
            </div>
          </div>
          <div className="mb-6 relative">
            <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              required
              name='confirmPassword'
              value={userDetail.confirmPassword}
              onChange={(e) => {
                handleChange(e);
              }}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 pt-[32px] flex items-center text-gray-700 cursor-pointer"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              onClick={toggleConfirrmPasswordVisibility}
            >
              {confirmPasswordVisible ? <FaEyeSlash /> : <FaRegEye />}
            </div>
          </div>
          <div className="flex flex-col items-start gap-y-5 justify-between">
            {/* <Link to="/auth/verifyotp" className="w-full"> */}

            {/* <button
              type="submit"
              className="bg-primary text-white w-full font-semibold text-lg px-4 py-2 rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
              disabled={loading}
            >
              {loading ? <Spinner size="sm" /> : "Continue"}
            </button> */}
            <button
              type="submit"
              className="bg-primary text-white w-full font-semibold text-lg px-4 py-2 rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {loading ? <Spinner size="sm" /> : "Signup"}
            </button>
            {/* </Link> */}
          </div>
        </form>


        <p className='mt-4'>
          Already have an account?
          <Link to="/auth/login"><span className='mx-2 text-primary text-decoration-none font-semibold'>Login</span></Link>
        </p>
        {/* This div is for contnue with google */}
        <div className="mx-auto my-4 flex items-center justify-evenly w-full before:mr-4 before:block before:h-[2px] before:flex-grow before:bg-primary after:ml-4 after:block after:h-[2px] after:flex-grow after:bg-primary">
          Or
        </div>
        <div className='flex justify-center mt-4 mx-auto'>
          <button
           className='flex flex-row items-center border-2  border-primary px-3  py-2 font-semibold rounded-full'
           onClick={GoogleSignin}>
            Continue with Google  <FcGoogle size={20} className='mx-1' />
          </button>
        </div>

      </div>

    </div>
    // </div >
  );
}

export default Signup;

