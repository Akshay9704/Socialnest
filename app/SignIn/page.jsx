"use client";

import { useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    const { email, password } = user;
    if (email && password) {
      window.location.href = "/Profile";
    } else {
      alert("User not found");
    }
  };

  return (
    <div>
      <div>
        <div className="flex flex-col items-center">
          <h1 className="flex mt-8 text-6xl text-slate-500 font-extrabold cursor-pointer">
            Social<span className="text-yellow-500">nest</span>
          </h1>
          <h1 className="text-2xl text-white font-bold">Login</h1>
          <form className="flex flex-col items-center mt-5 gap-5">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              className="bg-white border h-12 w-96"
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              className="bg-white border h-12 w-96"
            ></input>
            <button
              onClick={login}
              className="border animate-bounce rounded-lg px-20 py-5 mt-10 text-white font-bold hover:bg-yellow-500"
            >
              Login →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
