import React from "react";

const hero = () => {
  return (
    <div>
      <article className='md:mt-28 lg:mt:28 md:ml-20 lg:ml-20 md:flex lg:flex gap-40'>
        <div>
          <h1 className="text-white font-extrabold md:text-8xl lg:text-8xl text-5xl ml-4 ">
            Kickstart
          </h1>
          <h1 className="text-white font-extrabold md:text-8xl lg:text-8xl text-5xl ml-4 ">
            your creator
          </h1>
          <h1 className="text-white font-extrabold md:text-8xl lg:text-8xl text-5xl ml-4  mt-2">
            journey today
          </h1>
          <p className="text-white opacity-25 md:mt-8 lg:mt-8 mt-6 md:ml-6 lg:ml-6 ml-3 md:text-4xl lg:text-4xl text-2xl ">
            Connect with Top Brands
          </p>
          <button className="border animate-bounce rounded-lg md:px-20 lg:px-20 md:py-5 lg:py-5 px-2 py-2 md:mt-8 lg:mt-8 mt-7 md:ml-6 lg:ml-6 ml-3 text-white font-bold hover:bg-yellow-500">
            Join Now →
          </button>
        </div>
        <div className='w-96 hidden md:block lg:block'>
            <img src="https://cdn.pixabay.com/photo/2019/05/10/13/02/asset-4193480_1280.png" alt="/"/>
        </div>
      </article>
    </div>
  );
};

export default hero;
