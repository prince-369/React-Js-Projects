import React from 'react';
import { Link } from 'react-router-dom';
 
const RequestPage = () => {
  const requests = [
    { id: 1, name: 'CA santosh pal', course: 'GST taxation and other financial and corporate related course', image: 'https://yt3.googleusercontent.com/RTjPfDkS4NrxHNcpCj8oho-ilG15hkVsVZSyzjeCfknIs1NWbfxrLkxxVXccGa0EVjKc9j3rcg=s160-c-k-c0x00ffffff-no-rj' },
    { id: 2, name: 'Dipti Anand', course: 'CBSE and ICSE courses.along with math, physics chemistry', image: 'https://yt3.googleusercontent.com/lmo7y7SmioBMeRHxLPKdfjeoZzxNAt9k77ZS4G4FyuBbChch8dDGkEsxA70ysj3XMKkOcjpaTg=s160-c-k-c0x00ffffff-no-rj' },

  ];
 
  const notificationCount = 3;
 
  return (
    <div className="min-h-screen p-4 sm:p-6" style={{ backgroundColor: '#04253a' }}>
      {/* Main Container */}
      <div className="rounded-xl overflow-hidden shadow-2xl max-w-7xl mx-auto" style={{ backgroundColor: '#0e3a59' }}>
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-600 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 mr-3 sm:mr-4"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-white">Title</h1>
          </div>
         
          <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto justify-between sm:justify-normal">
            {/* Notification Bell */}
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-[10px] sm:text-xs font-bold rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </div>
           
            {/* Logout Button */}
            <Link to='/' className="flex-shrink-0">
              <button
                className="px-3 py-1 sm:px-4 sm:py-1 bg-sky-600 text-white text-sm sm:text-base font-medium rounded-md shadow-sm hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
              >
                Logout
              </button>
            </Link>
          </div>
        </div>
 
        {/* Requests Section */}
        <div className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">All New request</h2>
         
          {/* Requests List */}
          <div className="space-y-3 sm:space-y-4">
            {requests.map((request) => (
              <div
                key={request.id}
                className="p-3 sm:p-4 rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0"
                style={{ backgroundColor: '#1a547a' }}
              >
                <div className="flex items-center w-full sm:w-auto">
                  {/* User Profile Image */}
                  <div className="relative h-8 w-8 sm:h-10 sm:w-10 mr-2 sm:mr-3 flex-shrink-0">
                    <img
                      src={request.image}
                      alt={request.name}
                      className="rounded-full h-full w-full object-cover border-2 border-white"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-white text-sm sm:text-base break-words">
                    {request.name} - ({request.course})
                  </span>
                </div>
               
                <div className="flex space-x-2 sm:space-x-3 w-full sm:w-auto justify-end">
                 <Link to='/dashboard'><button
                    className="px-3 py-1 sm:px-4 sm:py-1 bg-blue-600 text-white text-sm sm:text-base rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Approved
                  </button></Link>
                 <Link to='/dashboard'> <button
                    className="px-3 py-1 sm:px-4 sm:py-1 bg-red-500 text-white text-sm sm:text-base rounded-md hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    Rejected
                  </button></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default RequestPage;