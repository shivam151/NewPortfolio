import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-1/2 p-8 bg-gray-800 flex flex-col justify-center items-center">
  <h1 className="text-3xl font-bold mb-4 text-white text-center lg:text-left">WHO AM I?</h1>
  <p className="text-lg text-white text-center lg:text-left">
    I am a React full-stack developer. I create responsive and secure websites for clients.
  </p>
  <Link to="/contact">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
      Contact
    </button>
  </Link>
</div>

      <div className="w-full lg:w-1/2 relative">
        <div className="flex justify-center items-center w-full h-full">
          <img
            src="https://rown-space-bucket.nyc3.digitaloceanspaces.com/R-jobResume/Achievement/3629.jpg"
            className="object-cover max-w-xs lg:max-w-full"
            alt="true"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
