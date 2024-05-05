import React from 'react'
import { Link } from 'react-router-dom';

const homePage = () => {
  return (
    <div className="bg-gray-800 text-white py-20 relative"> 
  <div className="absolute inset-0">
    <img className="w-full h-full object-cover" src="https://rown-space-bucket.nyc3.digitaloceanspaces.com/R-jobResume/Achievement/3629.jpg" alt="into-img" />
  </div>

    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="container mx-auto flex flex-col justify-center items-center h-screen relative"> {/* Changed h-full to h-screen */}
  <p className="text-xl font-medium mb-4">HI, I AM A BTECH STUDENT</p> 
  <h1 className="text-4xl font-bold mb-6">React Developer</h1> 
  <div className="flex"> 
    <Link to="/project" className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">Projects</Link>
    <Link to="/contact" className="btn btn-light bg-gray-200 text-gray-900 font-bold py-2 px-4 rounded">Contact</Link>
  </div>
</div>


  </div>
  )
}

export default homePage
