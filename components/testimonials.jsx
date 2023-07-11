import { FaUserAlt } from "react-icons/fa";

const testimonials = () => {
  return (
    <div className="md:mt-40 lg:mt-40 mt-20">
        <h1 className='text-yellow-500 text-3xl font-semibold flex justify-center'>Testimonials</h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 ml-10 mr-10 mt-8">
        <div className="text-white flex flex-col justify-center items-center border transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
        <div className="text-5xl my-5 hover:text-yellow-500">
        <FaUserAlt/>
        </div>
        <h1 className="text-2xl">John H.</h1>
        <img className="w-40" src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" alt="rating"/>
        <p className="text-md opacity-50 my-4 mx-4">Socialnest is the best thing to happen to my influencer career. Their platform allowed me to showcase my talent and connect with brands tht align with my values.</p>
        </div>
        <div className="text-white flex flex-col justify-center items-center border transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
        <div className="text-5xl my-5 hover:text-yellow-500">
        <FaUserAlt/>
        </div>
        <h1 className="text-2xl">Akshay B.</h1>
        <img className="w-40" src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" alt="rating"/>
        <p className="text-md opacity-50 my-4 mx-4">Socialnest made it easy for me to turn my hobby into profiatble business. Their platform is a one-stop-shop for all things infulencer, from building your portfolio to connecting with brands.</p>
        </div>
        <div className="text-white flex flex-col justify-center items-center border transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
        <div className="text-5xl my-5 hover:text-yellow-500">
        <FaUserAlt/>
        </div>
        <h1 className="text-2xl">Rahul G.</h1>
        <img className="w-40" src="https://cdn.pixabay.com/photo/2022/01/11/12/16/rating-6930474_1280.png" alt="rating"/>
        <p className="text-md opacity-50 my-4 mx-4">Socialnest is the ultimate platform for aspiring influencers. Their tools and resources are unmatched, and their team is always on hand to provide support and guidance.</p>
        </div>
        </div>
    </div> 
  )
}

export default testimonials