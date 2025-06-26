import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f0f] via-[#111] to-black flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 drop-shadow-lg">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-white mt-4">Page Not Found</h2>
        <p className="text-neutral-400 mt-2 text-sm">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          🔙 Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
