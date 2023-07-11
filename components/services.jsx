import { BiSearchAlt2 } from "react-icons/bi";
import { FaTrophy } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";

const services = () => {
  return (
    <div className="mt-20">
      <hr></hr>
      <h1 className="text-yellow-500 text-3xl font-semibold flex justify-center mt-20">
        Services
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 ml-10 mr-10 mt-8">
        <div className="text-white flex flex-col justify-center items-center border transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <div className="text-5xl my-5 hover:text-yellow-500">
            <BiSearchAlt2 />
          </div>
          <h1 className="text-2xl mt-8">Get Discovered by Top Brands</h1>
          <p className="text-md opacity-25 mb-4">
            Get discovered by top brands by creating your portfolio
          </p>
        </div>
        <div className="text-white flex flex-col justify-center items-center border transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <div className="text-5xl my-5 hover:text-yellow-500">
            <FaTrophy />
          </div>
          <h1 className="text-2xl mt-8">Showcase your unique talents</h1>
          <p className="text-md opacity-25 mb-4">
            Showcase your unique talents by sharing your social handles
          </p>
        </div>
        <div className="text-white flex flex-col justify-center items-center border transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
          <div className="text-5xl my-5 hover:text-yellow-500">
            <FaHandHoldingHeart />
          </div>
          <h1 className="text-2xl mt-8">Receive guidance and support</h1>
          <p className="text-md opacity-25 mb-4">
            Receive guidance and support from our experts
          </p>
        </div>
      </div>
    </div>
  );
};

export default services;
