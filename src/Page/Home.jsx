import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaClock, FaClipboardList } from 'react-icons/fa';

const Home = () => {
  // user data
  const userName = 'Harsh Vardhan Singh';
  const userEmail = 'harshvsingh@digivista.com';
  const upcomingHolidays = [
    { date: '14-06-2024', occasion: 'Diwali' }, // calendar api to be called for India holiday
    { date: '19-06-2024', occasion: 'Holi' },
  ];
  const casualLeaves = 5; // to be synced
  const sickLeaves = 5; // to be synced
  const privilegedLeave = 5; // to be synced

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <h1 className="text-4xl font-extrabold text-white mt-8">Dashboard</h1>
      <h2 className="text-2xl font-bold text-white mt-4">Welcome, {userName}!</h2>
      <div className="grid grid-cols-1 gap-6 mt-8 w-full px-6">
        <Link to="/profile" className="group flex items-center w-full bg-white bg-opacity-20 p-6 rounded-md shadow-md hover:bg-opacity-40 transition duration-300">
          <FaUser className="text-white text-4xl mr-4 group-hover:text-red-500 transition duration-300" />
          <div className="text-left">
            <p className="text-lg font-semibold text-white group-hover:text-red-500 transition duration-300">My Profile</p>
            <p className="text-sm text-gray-200">{userEmail}</p>
          </div>
        </Link>
        <Link to="/markattendance" className="group flex items-center w-full bg-white bg-opacity-20 p-6 rounded-md shadow-md hover:bg-opacity-40 transition duration-300">
          <FaClock className="text-white text-4xl mr-4 group-hover:text-yellow-500 transition duration-300" />
          <div className="text-left">
            <p className="text-lg font-semibold text-white group-hover:text-yellow-500 transition duration-300">Mark your Attendance</p>
            <p className="text-sm text-gray-200">Don't get late today!</p>
          </div>
        </Link>
        <Link to="/holidays" className="group flex items-center w-full bg-white bg-opacity-20 p-6 rounded-md shadow-md hover:bg-opacity-40 transition duration-300">
          <FaCalendarAlt className="text-white text-4xl mr-4 group-hover:text-green-500 transition duration-300" />
          <div className="text-left">
            <p className="text-lg font-semibold text-white group-hover:text-green-500 transition duration-300">View your Holidays</p>
            <ul className="text-sm text-gray-200">
              {upcomingHolidays.map((holiday, index) => (
                <li key={index}>{holiday.date}: {holiday.occasion}</li>
              ))}
            </ul>
          </div>
        </Link>
        <Link to="/applyleave" className="group flex items-center w-full bg-white bg-opacity-20 p-6 rounded-md shadow-md hover:bg-opacity-40 transition duration-300">
          <FaClipboardList className="text-white text-4xl mr-4 group-hover:text-purple-500 transition duration-300" />
          <div className="text-left">
            <p className="text-lg font-semibold text-white group-hover:text-purple-500 transition duration-300">Apply for Leave</p>
            <p className="text-sm text-gray-200">Casual Leaves: {casualLeaves}, Sick Leaves: {sickLeaves}, Privileged Leave: {privilegedLeave}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="flex flex-col items-center justify-Top min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold mb-8">Home</h1>
//       <div className="flex flex-col space-y-4">
//         <Link to="/markattendance" className="w-full bg-blue-600 text-white py-3 rounded-md text-center hover:bg-blue-500 transition">
//           Mark Attendance
//         </Link>
//         <Link to="/holidays" className="w-full bg-blue-600 text-white py-3 rounded-md text-center hover:bg-blue-500 transition">
//           View upcoming Holidays
//         </Link>
//         <Link to="/profile" className="w-full bg-blue-600 text-white py-3 rounded-md text-center hover:bg-blue-500 transition">
//           Profile
//         </Link>
//         <Link to="/applyleave" className="w-full bg-blue-600 text-white py-3 rounded-md text-center hover:bg-blue-500 transition">
//           Apply for Leave
//         </Link>
//       </div>
//     </div>
//   );
// };
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaCalendarAlt, FaUser, FaClock, FaClipboardList } from 'react-icons/fa';

// const Home = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
//       <h1 className="text-4xl font-extrabold text-white mb-8">Dashboard</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         <Link to="/profile" className="group w-full bg-white bg-opacity-20 p-6 rounded-md text-center shadow-md hover:bg-opacity-40 transition duration-300">
//           <FaUser className="text-white text-4xl mb-4 group-hover:text-red-500 transition duration-300" />
//           <p className="text-lg font-semibold text-white group-hover:text-red-500 transition duration-300">Profile</p>
//         </Link>
//         <Link to="/markattendance" className="group w-full bg-white bg-opacity-20 p-6 rounded-md text-center shadow-md hover:bg-opacity-40 transition duration-300">
//           <FaClock className="text-white text-4xl mb-4 group-hover:text-yellow-500 transition duration-300" />
//           <p className="text-lg font-semibold text-white group-hover:text-yellow-500 transition duration-300">Mark Attendance</p>
//         </Link>
//         <Link to="/holidays" className="group w-full bg-white bg-opacity-20 p-6 rounded-md text-center shadow-md hover:bg-opacity-40 transition duration-300">
//           <FaCalendarAlt className="text-white text-4xl mb-4 group-hover:text-green-500 transition duration-300" />
//           <p className="text-lg font-semibold text-white group-hover:text-green-500 transition duration-300">Upcoming Holidays/Week-Offs</p>
//         </Link>
//         <Link to="/applyleave" className="group w-full bg-white bg-opacity-20 p-6 rounded-md text-center shadow-md hover:bg-opacity-40 transition duration-300">
//           <FaClipboardList className="text-white text-4xl mb-4 group-hover:text-purple-500 transition duration-300" />
//           <p className="text-lg font-semibold text-white group-hover:text-purple-500 transition duration-300">Apply for Leave</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;
