import React from "react";

const about = () => {
  return (
    <div>
      <article className="flex md:mt-40 lg:mt-40 mt-10 md:ml-10 lg:ml-10 ml-4 mr-12 justify-center">
        <div>
          <h1 className="text-yellow-500 text-2xl mb-2 font-semibold">
            About us
          </h1>
          <h1 className="text-white font-bold md:text-7xl lg:text-7xl text-3xl">
            We are empowering
          </h1>
          <h1 className="text-white font-bold md:mb-6 lg:mb-6 mb-3 md:mt-6 lg:mt-6 md:text-7xl lg:text-7xl text-3xl">
            influencers to{" "}
            <span className="font-bold md:text-7xl lg:text-7xl text-pink-500">
              grow
            </span>
          </h1>
          <p className="text-white opacity-30 mb-3 md:mb-0 lg:mb-0 md:text-xl lg:text-xl">
            In today's digital age, the role of influencers has become
            increasingly prominent.
          </p>
          <p className="text-white opacity-30 md:text-xl lg:text-xl">
            {" "}
            These individuals possess the power to captivate and engage
            audiences across various platforms,
          </p>
          <p>
            {" "}
            making them valuable assets for brands and businesses. Recognizing
            their potential, there is a growing effort to empower influencers
            and enable their continuous growth.
          </p>
          <p>This empowerment encompasses several key aspects.</p>
        </div>
        <div className="w-1/3 hidden md:block lg:block">
          <img
            src="https://img.freepik.com/free-photo/customer-experience-creative-collage_23-2149346503.jpg?w=740&t=st=1687446550~exp=1687447150~hmac=af098d48d83a6c33f489e69fb43e44d89ba65e4be09d95c0adbe805804628253"
            alt="/"
          />
        </div>
      </article>
    </div>
  );
};

export default about;
