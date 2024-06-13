import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./Components/Navbar"
import Login from './Page/Login'
import Register from './Page/Register'
import ForgotPassword from './Page/ForgotPassword';
import Profile from './Page/Profile';
import MarkAttendance from './Page/MarkAttendance';
import Holidays from './Page/Holidays';
import ApplyLeave from './Page/ApplyLeave';
import Home from './Page/Home';
import Otp from './Page/Otp';
import ResetPassword from './Page/ResetPassword';




function App() {
   return ( 
    <Router>
      <div>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/applyleave" element={<ApplyLeave />} />
          <Route path="/holidays" element={<Holidays />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/markattendance" element={<MarkAttendance />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
