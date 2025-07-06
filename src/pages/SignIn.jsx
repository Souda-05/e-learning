import React, { useState } from "react";

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
    // You can add actual login logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;


