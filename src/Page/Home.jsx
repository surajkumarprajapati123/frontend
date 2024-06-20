import React, { useState } from 'react';
import { FaCalendarAlt, FaUser, FaClock, FaClipboardList, FaBars, FaHome } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css'; // Import custom CSS for the calendar

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [currentView, setCurrentView] = useState('welcome');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [workHours, setWorkHours] = useState('');
  const [attendanceRecords, setAttendanceRecords] = useState({});
  const [showAttendanceReport, setShowAttendanceReport] = useState(false);

  const userName = 'Harsh Vardhan Singh';
  const userEmail = 'harshvsingh@digivista.com';
  const upcomingHolidays = [
    { date: '14-06-2024', occasion: 'Diwali' },
    { date: '19-06-2024', occasion: 'Holi' },
  ];
  const casualLeaves = 5;
  const sickLeaves = 5;
  const privilegedLeave = 5;
  const Present = 5;
  const absent = 0;
  const leave = 0;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAttendanceSubmit = () => {
    setAttendanceRecords((prevRecords) => ({
      ...prevRecords,
      [selectedDate.toDateString()]: workHours ? 'Present' : 'Absent',
    }));
    setWorkHours('');
  };

  const getTileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateString = date.toDateString();
      const holiday = upcomingHolidays.find((holiday) => new Date(holiday.date).toDateString() === dateString);
      if (holiday) return <p className="holiday">Holiday</p>;
      const attendanceStatus = attendanceRecords[dateString];
      return <p className={attendanceStatus === 'Present' ? 'present' : 'absent'}>{attendanceStatus}</p>;
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'profile':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mt-4">My Profile</h2>
            <p className="text-white mt-2">Name: {userName}</p>
            <p className="text-white">Email: {userEmail}</p>
          </div>
        );
      case 'attendance':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mt-4">Mark your Attendance</h2>
            <div className="bg-white bg-opacity-20 p-4 rounded-md shadow-md mt-4">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd-MM-yyyy"
                className="w-full p-2 rounded-md"
              />
              <table className="w-full mt-4">
                <thead>
                  <tr>
                    <th className="border px-4 py-2 text-white">Date</th>
                    <th className="border px-4 py-2 text-white">Hours Worked</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 text-white">{selectedDate.toDateString()}</td>
                    <td className="border px-4 py-2">
                      <input
                        type="number"
                        value={workHours}
                        onChange={(e) => setWorkHours(e.target.value)}
                        className="w-full p-2 rounded-md"
                        placeholder="Enter hours worked"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                onClick={handleAttendanceSubmit}
                className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        );
      case 'holidays':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mt-4">Your Holidays</h2>
            <ul className="text-white mt-2">
              {upcomingHolidays.map((holiday, index) => (
                <li key={index}>{holiday.date}: {holiday.occasion}</li>
              ))}
            </ul>
          </div>
        );
      case 'leave':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mt-4">Apply for Leave</h2>
            <p className="text-white mt-2">Casual Leaves: {casualLeaves}</p>
            <p className="text-white">Sick Leaves: {sickLeaves}</p>
            <p className="text-white">Privileged Leave: {privilegedLeave}</p>
          </div>
        );
      case 'report':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mt-4">Attendance Report</h2>
            <p className="text-white mt-2">Present: {Present}</p>
            <p className="text-white">Absent: {absent}</p>
            <p className="text-white">Leave Leave: {leave}</p>
            <div className="bg-white bg-opacity-20 p-4 rounded-md shadow-md mt-4">
              <Calendar
                tileContent={getTileContent}
                className="custom-calendar"
              />
            </div>
          </div>
        );
      default:
        return (
          <div>
            <h1 className="text-4xl font-extrabold text-white mt-8">Welcome to DigiVista!</h1>
            <h2 className="text-2xl font-bold text-white mt-4">Hello, {userName}!</h2>
            <p className="text-white mt-4">Here you can manage your profile, mark your attendance, view holidays, and apply for leaves.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className={`flex flex-col bg-white bg-opacity-20 p-4 shadow-lg transition-width duration-300 ${isMenuOpen ? 'w-64' : 'w-20'}`}>
        <button onClick={toggleMenu} className="text-white text-3xl mb-4 focus:outline-none">
          <FaBars />
        </button>
        <button onClick={() => setCurrentView('welcome')} className="group flex items-center mb-4 p-2 rounded-md hover:bg-opacity-40 transition duration-300">
          <FaHome className="text-white text-4xl mr-4 group-hover:text-blue-500 transition duration-300" />
          {isMenuOpen && (
            <div className="text-left">
              <p className="text-lg font-semibold text-white group-hover:text-blue-500 transition duration-300">Home</p>
            </div>
          )}
        </button>
        <button onClick={() => setCurrentView('profile')} className="group flex items-center mb-4 p-2 rounded-md hover:bg-opacity-40 transition duration-300">
          <FaUser className="text-white text-4xl mr-4 group-hover:text-red-500 transition duration-300" />
          {isMenuOpen && (
            <div className="text-left">
              <p className="text-lg font-semibold text-white group-hover:text-red-500 transition duration-300">My Profile</p>
              <p className="text-sm text-gray-200">{userEmail}</p>
            </div>
          )}
        </button>
        <button onClick={() => setCurrentView('attendance')} className="group flex items-center mb-4 p-2 rounded-md hover:bg-opacity-40 transition duration-300">
          <FaClock className="text-white text-4xl mr-4 group-hover:text-yellow-500 transition duration-300" />
          {isMenuOpen && (
            <div className="text-left">
              <p className="text-lg font-semibold text-white group-hover:text-yellow-500 transition duration-300">Mark your Attendance</p>
              <p className="text-sm text-gray-200">Don't get late today!</p>
            </div>
          )}
        </button>
        <button onClick={() => setCurrentView('holidays')} className="group flex items-center mb-4 p-2 rounded-md hover:bg-opacity-40 transition duration-300">
          <FaCalendarAlt className="text-white text-4xl mr-4 group-hover:text-green-500 transition duration-300" />
          {isMenuOpen && (
            <div className="text-left">
              <p className="text-lg font-semibold text-white group-hover:text-green-500 transition duration-300">View your Holidays</p>
              <ul className="text-sm text-gray-200">
                {upcomingHolidays.map((holiday, index) => (
                  <li key={index}>{holiday.date}: {holiday.occasion}</li>
                ))}
              </ul>
            </div>
          )}
        </button>
        <button onClick={() => setCurrentView('leave')} className="group flex items-center mb-4 p-2 rounded-md hover:bg-opacity-40 transition duration-300">
          <FaClipboardList className="text-white text-4xl mr-4 group-hover:text-purple-500 transition duration-300" />
          {isMenuOpen && (
            <div className="text-left">
              <p className="text-lg font-semibold text-white group-hover:text-purple-500 transition duration-300">Apply for Leave</p>
              <p className="text-sm text-gray-200">Casual Leaves: {casualLeaves}, Sick Leaves: {sickLeaves}, Privileged Leave: {privilegedLeave}</p>
            </div>
          )}
        </button>
        <button onClick={() => setCurrentView('report')} className="group flex items-center mb-4 p-2 rounded-md hover:bg-opacity-40 transition duration-300">
          <FaClipboardList className="text-white text-4xl mr-4 group-hover:text-purple-500 transition duration-300" />
          {isMenuOpen && (
            <div className="text-left">
              <p className="text-lg font-semibold text-white group-hover:text-purple-500 transition duration-300">Attendance Report</p>
            </div>
          )}
        </button>
      </div>
      <div className="flex-grow p-6">
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;
