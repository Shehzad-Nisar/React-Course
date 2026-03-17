import React from "react";
import { useNavigate } from "react-router-dom";

function  Error() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-800">
      <h1 className="text-9xl font-extrabold mb-4 animate-pulse">404</h1>
      <p className="text-2xl mb-6">Oops! Page not found.</p>
      <p className="text-gray-500 mb-8">The page you are looking for does not exist.</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Home
      </button>
    </div>
  );
}

export default Error;