import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google'; // Google login import
import { toast } from 'react-toastify'; // Assuming you're using React Toastify for notifications

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login request (replace with your actual backend call)
    if (email === 'user@example.com' && password === 'password') {
      toast.success("Login successful!");
      setLoading(false);
      navigate('/home'); // Redirect after successful login
    } else {
      toast.error("Invalid credentials. Please try again.");
      setLoading(false);
    }
  };

  const handleGoogleLogin = (response) => {
    if (response.credential) {
      toast.success("Google login successful!");
      navigate('/home'); // Redirect after Google login
    } else {
      toast.error("Google login failed!");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">User Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="flex justify-between items-center">
          <a href="/forgot-password" className="text-sm text-blue-500">Forgot Password?</a>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm">
          Don't have an account? <a href="/register" className="text-blue-500">Register here</a>
        </p>
      </div>

      {/* Google Login Button */}
      <div className="mt-6">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => toast.error('Google login failed.')}
          useOneTap
          shape="pill"
          theme="outline"
          size="large"
        />
      </div>
    </div>
  );
};

export default Login;
