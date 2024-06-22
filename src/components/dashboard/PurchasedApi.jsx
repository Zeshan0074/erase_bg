// ./src/components/ApiKeySetup.js
import React from 'react';

const ApiKeySetup = () => {
  return (
    <div className="min-h-screen bg-gray-100  flex justify-center items-center w-full">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        
        <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
          <div className="flex gap
          -y-3 md:flex-row flex-col justify-between items-center mb-2">
            <h2 className="text-xl font-bold">API Keys</h2>
            <button className="bg-primary text-white text-sm font-semibold py-1 px-4 rounded hover:bg-gray-400">
              Create New Secret Key
            </button>
          </div>
          <p className="text-gray-500 mb-4">
            Make sure to keep your keys secret and never expose them.
          </p>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <label className="block text-gray-600 mb-2">SECRET KEY</label>
            <div className="flex items-center justify-between">
              <input
                type="text"
                className="w-full bg-gray-100 p-2 rounded text-gray-800 border border-gray-300"
                value="***************************************"
                readOnly
              />
              <div className="flex items-center space-x-2 ml-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeySetup;
