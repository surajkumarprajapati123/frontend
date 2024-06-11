import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/user/forgot-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setMessage('Password reset link sent to your email.');
          setTimeout(() => {
            navigate('/otp', { state: { email, flow: 'forgotPassword' } });
          }, 2000); // Redirect after 2 seconds
        } else {
          setMessage('Failed to send reset link. Please try again.');
        }
      } else {
        setMessage('An error occurred. Please try again later.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-auto bg-center bg-no-repeat flex justify-center items-center h-screen" style={{ backgroundImage: 'url(/desktop.png)' }}>
      <div className="w-full max-w-md bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
        <img
          className="mx-auto h-auto w-auto"
          src="/logo.png"
          alt="Digi Vista Infotech"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Forgot your password?
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
              >
                Send reset link
              </button>
            </div>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm text-red-500">
              {message}
            </p>
          )}

          <p className="mt-10 text-center text-sm text-gray-500">
            Remembered your password?{' '}
            <Link to="/login" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
