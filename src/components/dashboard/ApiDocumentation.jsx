import React, { useState } from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";

const ApiDocumentation = () => {
  const [selectedSection, setSelectedSection] = useState('Getting Started');

  const sections = {
    'Getting Started': (
      <>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-xl md:text-3xl font-bold mb-6">Getting Setup</h1>

          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-600 mb-6">
            This document provides the details about the API you have purchased.
            Please follow the instructions and examples below to integrate with our API.
          </p>

          <h2 className="text-xl font-semibold mb-4">API Key</h2>
          <p className="text-gray-600 mb-6">
            Your API key is used to authenticate your requests. Please keep it secret and do not expose it publicly.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <span className="text-gray-600">Your API Key:</span>
              <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded">********************</span>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Endpoints</h2>

          <h3 className="text-xl font-semibold mb-2">1. Get User Data</h3>
          <p className="text-gray-600 mb-4">
            Endpoint: <span className="text-gray-800 font-mono">GET /api/v1/user</span>
          </p>
          <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 mb-6">
            <pre className="text-gray-800">
              <code>
                {`
curl -X GET "https://api.example.com/v1/user" \\
     -H "Authorization: Bearer YOUR_API_KEY"
              `}
              </code>
            </pre>
          </div>

          <h3 className="text-xl font-semibold mb-2">2. Update User Data</h3>
          <p className="text-gray-600 mb-4">
            Endpoint: <span className="text-gray-800 font-mono">PUT /api/v1/user</span>
          </p>
          <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 mb-6">
            <pre className="text-gray-800">
              <code>
                {`
curl -X PUT "https://api.example.com/v1/user" \\
     -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     -d '{
           "name": "New Name",
           "email": "newemail@example.com"
         }'
              `}
              </code>
            </pre>
          </div>

          <h2 className="text-xl font-semibold mb-4">Error Codes</h2>
          <p className="text-gray-600 mb-4">Common error codes you may encounter:</p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li><strong>400 Bad Request:</strong> The request was invalid or cannot be served.</li>
            <li><strong>401 Unauthorized:</strong> The request requires user authentication.</li>
            <li><strong>403 Forbidden:</strong> The server understood the request, but it refuses to authorize it.</li>
            <li><strong>404 Not Found:</strong> The requested resource could not be found.</li>
            <li><strong>500 Internal Server Error:</strong> An error occurred on the server.</li>
          </ul>

          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or need further assistance, please contact our support team at
            <a href="mailto:support@example.com" className="text-blue-500"> support@example.com</a>.
          </p>
        </div>
      </>
    ),
    'Change the API Key': (
      <>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold mb-6">API Key Management</h1>
          <p className="text-gray-600 mb-6">
            Your API key is used to authenticate your requests. Please keep it secret and do not expose it publicly.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Your API Key:</span>
              <span className="bg-gray-200 text-gray-800 py-1 px-3 rounded">********************</span>
            </div>
          </div>
        </div>
      </>
    ),
    'View Usage': (
      <>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">

          <h1 className="text-3xl font-bold mb-6">Usage Information</h1>
          <p className="text-gray-600 mb-6">
            This section provides details about your API usage, including request counts and rate limits.
          </p>
        </div>
      </>
    ),
    'Change the Plan': (
      <>
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">

          <h1 className="text-3xl font-bold mb-6">Plan Management</h1>
          <p className="text-gray-600 mb-6">
            Here you can change your API plan. Choose a plan that best fits your needs.
          </p>
        </div>
      </>
    )
  };

  return (
    <div className="min-h-screen flex flex-col gap-y-4 lg:flex-row bg-gray-50 p-8">
      {/* Left div like sidebar */}
      <div className="bg-white p-6 rounded-2xl shadow-md w-full mx-2 mt-4 lg:w-80 h-fit">
        {Object.keys(sections).map((section) => (
          <div
            key={section}
            className="flex md:text-lg font-semibold gap-x-3 items-center py-3 text-gray-700 cursor-pointer hover:text-gray-900"
            onClick={() => setSelectedSection(section)}
          >
            {section} <span><IoMdArrowRoundForward size={20} /></span>
          </div>
        ))}
      </div>

      {/* Right div to show the data */}
      <div className="max-w-4xl mx-auto lg:p-6 rounded-lg w-full">
        {sections[selectedSection]}
      </div>
    </div>
  );
};

export default ApiDocumentation;
