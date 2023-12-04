import React from "react";
import ErrorImg from "../assets/robot-error.svg";
import { Link } from "react-router-dom";
import { FaTriangleExclamation } from "react-icons/fa6";

const PageNotFound = () => {
  return (
    <div className="bg-flat-black h-screen flex  items-center justify-center flex-col">
      <div className="relative text-center">
        <FaTriangleExclamation className="text-2xl text-red-400 absolute left-0 top-0" />
        <img
          src={ErrorImg}
          alt="Error"
          className="max-w-sm select-none"
          draggable="false"
        />
        <h1 className="text-center mb-2 text-pink text-3xl font-dmSans font-bold">
          Page Does Not Exist...
        </h1>
        <p className="text-white font-dmSans">
          Go Back To{" "}
          <Link to="/" className="underline text-blue-500">
            Home Page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
