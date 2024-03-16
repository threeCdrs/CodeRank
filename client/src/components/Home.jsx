import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <div className="bg-white h-screen ">
            <div className=" mx-auto px-0 py-0 flex flex-col h-full justify-center items-center">
                <div className="flex justify-center w-full h-full">
                {/* Student Section */}
                <div className="bg-gray-200 flex flex-col justify-center items-center flex-grow">
                    <h2 className="text-2xl font-semibold mb-0">For Students</h2>
                    <p className="text-gray-500 text-center mt-0 py-5">"Education is the passport to the future." - Giridharan</p>
                    <Link to="/signinstudent">
                        <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-xl mb-4">
                        Sign In
                        </button>
                    </Link>
                    <p className="mb-4 text-center">Don't have an account?</p>
                    <Link to="/signupstudent">
                        <button className="bg-white hover:bg-blue-900 text-black hover:text-white font-bold py-2 px-4 rounded-md mb-4">
                        Sign Up
                        </button>
                    </Link>
                </div>

                {/* Teacher Section */}
                <div className="bg-gray-50 flex flex-col justify-center items-center flex-grow">
                    <h2 className="text-2xl font-semibold mb-0">For Teachers</h2>
                    <p className="text-gray-500 text-center mt-0 py-5">"Teaching is the profession that teaches all other professions." - Jagan</p>
                    <Link to="/signinstaff">
                        <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-xl mb-4">
                        Sign In
                        </button>
                    </Link>
                    <p className="mb-4 text-center">Don't have an account?</p>
                    <Link to="/signupstaff">
                        <button className="bg-white hover:bg-blue-900 text-black hover:text-white font-bold py-2 px-4 rounded-md mb-4">
                        Sign Up
                        </button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default Home;
