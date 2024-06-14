import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import eyeOff from "@iconify/icons-mdi/eye-off";
import eye from "@iconify/icons-mdi/eye";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [validationMessages, setValidationMessages] = useState({
    length: false,
    number: false,
    letter: false,
  });
  const navigate = useNavigate();

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const validatePassword = (password) => {
    const hasNumber = /[0-9]/.test(password);
    const hasLetter = /[a-zA-Z]/.test(password);
    const isValidLength = password.length >= 7;

    setValidationMessages({
      length: isValidLength,
      number: hasNumber,
      letter: hasLetter,
    });

    return isValidLength && hasNumber && hasLetter;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsValidPassword(validatePassword(newPassword));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming forrdata is defined somewhere

    try {
      const response = await axios.post("http://localhost:3000/user/create", {
        name,
        username,
        email,
        password,
        departmentName,
      });

      // Handle successful response here if needed
      console.log("User created successfully:", response.data);
      toast.success(response.data.message);
      setDepartmentName("");
      setEmail("");
      setPassword("");
      setName("");
      setPassword("");
      navigate("/otp");
    } catch (error) {
      // Handle error
      console.error("Error creating user:", error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat flex justify-center items-center h-screen"
      style={{ backgroundImage: "url(/hello.png)" }}
    >
      <div className="w-full max-w-md bg-white bg-opacity-40 p-4 rounded-lg shadow-lg">
        <img
          className="mx-auto h-15 w-15 mb-4"
          src="/logo.png"
          alt="Digi Vista Infotech"
        />
        <h2 className="text-2xl font-bold mb-5 text-center">Register Now</h2>
        <form onSubmit={handleSubmit} className="text-center">
          <h3 className="text-lg font-semibold mb-2 text-left">
            Name <span className="text-red-500">*</span>
          </h3>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 mb-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <h3 className="text-lg font-semibold mb-2 text-left">
            Username <span className="text-red-500">*</span>
          </h3>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 mb-1"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <h3 className="text-lg font-semibold mb-2 text-left">
            Email <span className="text-red-500">*</span>
          </h3>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 mb-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h3 className="text-lg font-semibold mb-2 text-left">
            Password <span className="text-red-500">*</span>
          </h3>
          <div className="relative">
            <input
              type={type}
              placeholder="Password"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 mb-1 ${
                isValidPassword ? "border-green-500" : "border-red-500"
              }`}
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={handleToggle}
            >
              <Icon icon={icon} size={25} />
            </span>
          </div>
          <div className="text-left mb-1 text-sm">
            <p
              className={
                validationMessages.length ? "text-green-500" : "text-red-500"
              }
            >
              At least 7 characters [0-9][a-zA-Z]
            </p>
          </div>

          <h3 className="text-lg font-semibold mb-2 text-left">
            Department <span className="text-red-500">*</span>
          </h3>
          <input
            type="text"
            placeholder="Department"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 mb-4"
            value={departmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 mb-4"
          >
            Register
          </button>
        </form>
        <div className="options text-center">
          <Link to="/login" className="text-black-500 hover:underline">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
