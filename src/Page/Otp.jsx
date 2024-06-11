import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Icon } from '@iconify/react';
import eyeOff from '@iconify/icons-mdi/eye-off';
import eye from '@iconify/icons-mdi/eye';

const Otp = () => {
  const [otp, setOtp] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    if (type === 'password') {
      setType('text');
      setIcon(eye);
    } else {
      setType('password');
      setIcon(eyeOff);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/user/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setMessage('Registration successful!');
          setTimeout(() => {
            if (location.state.flow === 'forgotPassword') {
              navigate('/reset-password');
            } else {
              navigate('/login');
            }
          }, 2000); // Redirect after 2 seconds
        } else {
          setMessage('Invalid OTP. Please try again.');
        }
      } else {
        setMessage('An error occurred. Please try again later.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div
      className="bg-auto bg-center bg-no-repeat flex justify-center items-center h-screen"
      style={{ backgroundImage: 'url(/desktop.png)' }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
        <img
          className="mx-auto h-auto w-auto"
          src="/logo.png"
          alt="Digi Vista Infotech"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Verification Code
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          We have sent a code to your email
        </p>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-2 relative">
                <input
                  id="otp"
                  name="otp"
                  type={type}
                  placeholder="Code"
                  autoComplete="otp"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <button
                  type="button"
                  onClick={handleToggle}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                >
                  <Icon icon={icon} />
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
              >
                Submit
              </button>
            </div>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm text-red-500">
              {message}
            </p>
          )}

          <p className="mt-10 text-center text-sm text-gray-500">
            Didn't receive code?{' '} 
            <Link to="/login" className="font-semibold leading-6 text-blue-600 hover:text-blue-500"> 
              Resend
            </Link>
          </p>
          //change the resend button
        </div>
      </div>
    </div>
  );
};

export default Otp;
