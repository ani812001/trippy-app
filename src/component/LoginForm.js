




import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/UserSlice';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useHistory

  const handleLogin = async (e) => {
    e.preventDefault();

    // Implement your login logic here using the email and password state values
    // For example, you can make an API call to authenticate the user

    // For demonstration purposes, let's consider a simple success scenario
    const mockApiResponse = { success: true }; // Replace with actual API response

    if (mockApiResponse.success) {
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false);
        // Redirect to the home page
        navigate('/');
      }, 3000); // Reset success message after 3 seconds
    }

    // Clear the form fields after submission
    setEmail('');
    setPassword('');

    // Create an object with email and password
    const userCredentials = { email, password };

    dispatch(loginUser(userCredentials));
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login to Trippy</h2>
      {/* Login form */}
      <form onSubmit={handleLogin} className="login-form">
        {/* Email address input */}
        <label className="login-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
          />
        </label>

        {/* Password input */}
        <label className="login-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
        </label>

        {/* Submit button */}
        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      {loginSuccess && (
        <div className="success-message">
          Login successful! Redirecting...
        </div>
      )}
    </div>
  );
}

export default Login;
