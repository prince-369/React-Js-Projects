import React, { useState } from 'react';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';

// Teacher Component
const TeacherComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const teachers = [
    { id: 1, name: 'CA santosh pal', subject: 'Financial Accounting / Corporate Finance', rating: 4.8, image: 'https://yt3.googleusercontent.com/RTjPfDkS4NrxHNcpCj8oho-ilG15hkVsVZSyzjeCfknIs1NWbfxrLkxxVXccGa0EVjKc9j3rcg=s160-c-k-c0x00ffffff-no-rj' },
    { id: 2, name: 'Dipti Anand', subject: 'Secondary & Senior Secondary Education', rating: 4.5, image: 'https://yt3.googleusercontent.com/lmo7y7SmioBMeRHxLPKdfjeoZzxNAt9k77ZS4G4FyuBbChch8dDGkEsxA70ysj3XMKkOcjpaTg=s160-c-k-c0x00ffffff-no-r' },
  ];

  return (
    <div>
      {/* Welcome Banner */}
      <div className="bg-teal-600 rounded-lg p-6 mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Welcome to</h2>
          <h3 className="text-xl font-semibold text-white">E Learning Platform</h3>
        </div>
        <img 
          src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" 
          alt="E-learning" 
          className="h-20 hidden md:block"
        />
      </div>

      {/* Search Bar */}
      <div className="mb-6 flex">
        <input
          type="text"
          placeholder="Search Teacher..."
          className="flex-1 px-4 py-2 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-700 text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Find Teacher
        </button>
      </div>

      {/* Teachers Table */}
      <div className="rounded-lg shadow overflow-hidden" style={{ backgroundColor: '#1a547a' }}>
        <div className="grid grid-cols-12 p-4 font-medium text-white" style={{ backgroundColor: '#0e3a59' }}>
          <div className="col-span-5">Name</div>
          <div className="col-span-5">Subject</div>
          <div className="col-span-2">Rating</div>
        </div>
        
        {teachers.map((teacher) => (
          <div 
            key={teacher.id} 
            className="grid grid-cols-12 p-4 border-b border-gray-600 items-center"
            style={{ backgroundColor: '#1a547a' }}
          >
            <div className="col-span-5 flex items-center">
              <img 
                src={teacher.image} 
                alt={teacher.name} 
                className="h-10 w-10 rounded-full object-cover mr-3 border-2 border-white"
              />
              <span className="text-white">{teacher.name}</span>
            </div>
            <div className="col-span-5 text-gray-300">{teacher.subject}</div>
            <div className="col-span-2 flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-white">{teacher.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Classes Component
const ClassesComponent = () => {
  const schedule = [
    { id: 1, name: 'CA santosh pal', course: 'Financial Accounting / Corporate Finance', time: 'All Time Available in Youtube', status: 'completed', image: 'https://yt3.googleusercontent.com/RTjPfDkS4NrxHNcpCj8oho-ilG15hkVsVZSyzjeCfknIs1NWbfxrLkxxVXccGa0EVjKc9j3rcg=s160-c-k-c0x00ffffff-no-rj',link : 'https://www.youtube.com/@casantoshpalclasses' },
    { id: 2, name: 'Dipti Anand', course: 'Secondary & Senior Secondary Education', time: 'All Time Available in Youtube', status: 'ongoing', image: 'https://yt3.googleusercontent.com/lmo7y7SmioBMeRHxLPKdfjeoZzxNAt9k77ZS4G4FyuBbChch8dDGkEsxA70ysj3XMKkOcjpaTg=s160-c-k-c0x00ffffff-no-r',link : 'https://www.youtube.com/@learnwithdeeptianand' },
  ];

  const statusColors = {
    completed: 'bg-green-100 text-green-800',
    ongoing: 'bg-blue-100 text-blue-800',
    upcoming: 'bg-yellow-100 text-yellow-800'
  };

  return (
    <div className="p-6" style={{ backgroundColor: '#1a547a' }}>
      {/* Welcome Banner with Image */}
      <div className="bg-teal-600 rounded-lg p-6 mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Welcome to Project Title</h2>
        <img 
          src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" 
          alt="E-learning" 
          className="h-20 hidden md:block"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side - Schedule List */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">My Schedule</h3>
          
          <div className="space-y-4">
            {schedule.map((item) => (
              <div 
                key={item.id} 
                className="p-4 rounded-lg flex items-center"
                style={{ backgroundColor: '#0e3a59' }}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4 border-2 border-white"
                />
                <div className="flex-1">
                  <p className="font-medium text-white">
                    {item.name} - ({item.course})
                  </p>
                 <Link to={item.link} target='_blank'><p className="text-blue-400 underline hover:text-blue-200">{item.time}</p></Link>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[item.status]}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Next Lesson */}
        <div className="lg:w-80">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                02 : 15 : 10
              </div>
              <p className="text-gray-600">
                Your next lesson with Dipti Anand will start in
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">02</div>
                <div className="text-sm text-gray-500">Hour</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">15</div>
                <div className="text-sm text-gray-500">Minute</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">10</div>
                <div className="text-sm text-gray-500">Second</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Courses Component
const CoursesComponent = () => {
  const courses = [
    { id: 1, name: 'Physics', logo: 'https://img.freepik.com/free-vector/atom-illustration-model-with-electrons-neutron-isolated_1284-53084.jpg?uid=R200268884&ga=GA1.1.649360656.1737985464&semt=ais_hybrid&w=740' },
    { id: 2, name: 'Chemistry', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClPpQB0-SmPq6fufUcbyGI8G0VXZ1lsmVfQ&s' },
    { id: 3, name: 'Zoology', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFH41wAxAyFPUmoDtWjkW1hm8kggzYHh-tQ&s' },
    { id: 4, name: 'Math', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZS0OZwjYUp-fN_WiBvGLMSw-mVOVFZ68CA&s' },
    { id: 5, name: 'History', logo: 'https://img.freepik.com/premium-vector/history-vector-round-colorful-linear-illustration_104589-1398.jpg?semt=ais_hybrid&w=740' },
    { id: 6, name: 'Computer', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAFQGkuJiMf5FjIBCkcJPOQQhM5U2pQCMgYw&s' }
  ];

  return (
    <div className="p-6" style={{ backgroundColor: '#1a547a' }}>
      {/* Welcome Banner with Image */}
      <div className="bg-teal-600 rounded-lg p-6 mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Welcome to Project Title</h2>
        <img 
          src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg" 
          alt="E-learning" 
          className="h-20 hidden md:block"
        />
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="p-6 rounded-lg flex flex-col items-center"
            style={{ backgroundColor: '#0e3a59' }}
          >
            <img 
              src={course.logo} 
              alt={course.name} 
              className="h-16 w-16 mb-4 object-contain"
            />
            <h3 className="text-xl font-semibold text-white text-center">{course.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Dashboard Component
const DashboardPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Teacher');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/dashboard/${tab.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#04253a' }}>
      {/* Full Width Navbar */}
      <header className="w-full shadow-sm z-10" style={{ backgroundColor: '#0e3a59' }}>
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-10 w-10 mr-3"
            />
            <h1 className="text-xl font-bold text-white">Title</h1>
          </div>
          {/* <div className='flex items-center space-x-4'>
          <Link to="/signup">
            <button 
              className="px-2 py-1 bg-sky-600 text-white rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button 
              className="px-2 py-1 bg-teal-600 text-white rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              Login
            </button>
          </Link>
        </div> */}
        <Link to="/">
            <button 
              className="px-2 py-1 bg-sky-600 text-white rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              Logout
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="flex">
        {/* Sidebar - starts below navbar */}
        <div className="w-64 shadow-md" style={{ backgroundColor: '#0C4A6E' }}>
          <div className="p-6 flex flex-col items-center">
            <img 
              src="https://t4.ftcdn.net/jpg/00/97/00/09/360_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg" 
              alt="User" 
              className="h-20 w-20 rounded-full border-4 border-teal-400 object-cover mb-3"
            />
            <h3 className="text-lg font-semibold text-white">Guest User</h3>
          </div>

          <nav className="mt-6">
            <button
              onClick={() => handleTabChange('Teacher')}
              className={`w-full flex items-center px-6 py-3 text-left ${activeTab === 'Teacher' ? 'bg-gray-200 text-teal-600' : 'text-white hover:bg-gray-700'}`}
              style={{ backgroundColor: activeTab === 'Teacher' ? '' : '#0C4A6E' }}
            >
              <span className="mx-4">Teacher</span>
            </button>
            <button
              onClick={() => handleTabChange('Classes')}
              className={`w-full flex items-center px-6 py-3 text-left ${activeTab === 'Classes' ? 'bg-gray-200 text-teal-600' : 'text-white hover:bg-gray-700'}`}
              style={{ backgroundColor: activeTab === 'Classes' ? '' : '#0C4A6E' }}
            >
              <span  className="mx-4">Classes</span>
            </button>
            <button
              onClick={() => handleTabChange('Courses')}
              className={`w-full flex items-center px-6 py-3 text-left ${activeTab === 'Courses' ? 'bg-gray-200 text-teal-600' : 'text-white hover:bg-gray-700'}`}
              style={{ backgroundColor: activeTab === 'Courses' ? '' : '#0C4A6E' }}
            >
              <span className="mx-4">Courses</span>
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="teacher" element={<TeacherComponent />} />
            <Route path="classes" element={<ClassesComponent />} />
            <Route path="courses" element={<CoursesComponent />} />
            <Route path="*" element={<TeacherComponent />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;