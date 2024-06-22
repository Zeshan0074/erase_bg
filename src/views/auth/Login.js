import { GoogleAuthProvider, signInWithPopup ,getAuth} from 'firebase/auth';
import React, { useState } from 'react';
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';
import { auth } from '../../config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/actions/authAction';
import { Spinner } from "reactstrap"
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
import toast from 'react-hot-toast';
function Login() {
  const { loading } = useSelector((state) => state?.user);
  const { user } = useSelector((state) => state.authUser);

  const initialState = {
    email: "",
    password: "",
  }
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userDetails, setUserDetails] = useState(initialState);

  const dispatch = useDispatch();
  const history = useHistory();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = {
      email: userDetails.email,
      password: userDetails.password,
    };
    dispatch(
      login(payload, () => {
        
        history.push("/");
      })
    );
  };




  // FireBase Signup With Google 
  const GoogleSignin = async () => {
    const auth = getAuth(); 
    const provider = new GoogleAuthProvider();

        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Firebase sign-in successful:", result.user);
            // Handle successful sign-in (e.g., update state, call another function)
        } catch (error) {
            console.error("Firebase sign-in error:", error);
            // Handle sign-in errors (e.g., show error message)
        }
    };



  return (
    <div className="min-h-screen bg-zinc-300 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full md:w-[600px]">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">Login</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              required
              name='email'
              value={userDetails.email}
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
              value={userDetails.password}
              onChange={(e) => {
                handleChange(e);
              }}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div
              className="absolute pt-[32px] inset-y-0 right-0 pr-3 flex items-center text-gray-700 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? <FaEyeSlash /> : <FaRegEye />}
            </div>
          </div>

          <div className="flex flex-col items-start gap-y-5 justify-between">
            <Link to="/auth/forgetemail" className="text-primary hover:underline">Forget Password?</Link>
            <button
              type="submit"
              className="bg-primary text-white w-full font-semibold text-lg px-4 py-2 rounded-lg hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {loading ? <Spinner size="sm" /> : "Login"}
            </button>
          </div>
        </form>


        <p className='mt-4'>
          Already have an account?
          <Link to="/auth/signup"><span className='mx-2 text-primary text-decoration-none font-semibold'>Signup</span></Link>
        </p>

        <div className="mx-auto my-4 flex items-center justify-evenly w-full before:mr-4 before:block before:h-[2px] before:flex-grow before:bg-primary after:ml-4 after:block after:h-[2px] after:flex-grow after:bg-primary">
          Or
        </div>
        {/* This div is for contnue with google */}
        <div className='flex justify-center mt-4 mx-auto'>
          <button className='flex flex-row items-center border-2  border-primary px-3  py-2 font-semibold rounded-full'
            onClick={GoogleSignin}>
            Continue with Google  <FcGoogle size={20} className='mx-1' />
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;
