import { FaUserAlt } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";

const team = () => {
  return (
        <div className="mt-40">
        <h1 className='text-yellow-500 text-3xl font-semibold flex justify-center'>Our Team</h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 ml-10 mr-10 mt-8">
        <div className="text-white flex flex-col justify-center items-center border transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">    
        <FaUserAlt className="text-5xl my-5 hover:text-yellow-500"/>
        <h1 className="text-2xl">Rose M.</h1>
        <p className="text-lg opacity-40 mb-4">Founder & CTO</p>
        <div className="flex gap-3 text-3xl mb-4">
          <AiFillFacebook className="hover:text-yellow-500 cursor-pointer"/>
          <AiFillLinkedin className="hover:text-yellow-500 cursor-pointer"/>
          <AiFillTwitterSquare className="hover:text-yellow-500 cursor-pointer"/>
        </div>
        </div>
        <div className="text-white flex flex-col justify-center items-center border transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <FaUserAlt className="text-5xl my-5 hover:text-yellow-500"/>
        <h1 className="text-2xl">Kunal S.</h1>
        <p className="text-lg opacity-40 mb-4">Web Developer</p>
        <div className="flex gap-3 text-3xl mb-4">
          <AiFillFacebook className="hover:text-yellow-500 cursor-pointer"/>
          <AiFillLinkedin className="hover:text-yellow-500 cursor-pointer"/>
          <AiFillTwitterSquare className="hover:text-yellow-500 cursor-pointer"/>
        </div>
        </div>
        <div className="text-white flex flex-col justify-center items-center border transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
        <FaUserAlt className="text-5xl my-5 hover:text-yellow-500"/>
        <h1 className="text-2xl">Abhishek M.</h1>
        <p className="text-lg opacity-40 mb-4">Web Designer</p>
        <div className="flex gap-3 text-3xl mb-4">
          <AiFillFacebook className="hover:text-yellow-500 cursor-pointer"/>
          <AiFillLinkedin className="hover:text-yellow-500 cursor-pointer"/>
          <AiFillTwitterSquare className="hover:text-yellow-500 cursor-pointer"/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default team