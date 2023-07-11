"use client";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import { MdOutlineFaceRetouchingNatural } from "react-icons/md";
import InfluencersTable from "./InfluencersTable";
import SearchBar from "./SearchBar";
import "./profile.css";


const Profile = () => {

  const handleMain = () => {
    window.location.href = "/";
  }

  return (
    <div>
      <header className="header sticky w-full bg-black mb-8">
        <nav className="navbar flex justify-between">
          <h1 onClick={handleMain} className="px-5 py-8 text-3xl text-slate-500 font-extrabold cursor-pointer">
            Social<span className="text-yellow-500">nest</span>
          </h1>
        </nav>
      </header>
      {/* <hr className="bg-black"></hr> */}
      <div className="flex gap-24 mt-8">
        <header>
          <nav>
            <ul className="text-lg mx-6">
              <li className="flex gap-2">
                <AiFillHome className="mt-1" />
                <a href="" className="hover:text-yellow-500">
                  Home
                </a>
              </li>
              <li className="flex my-6 gap-2">
                <BsBriefcaseFill className="mt-1" />
                <a href="" className="hover:text-yellow-500">
                  Collaborations
                </a>
              </li>
              <li className="flex gap-2">
                <MdOutlineFaceRetouchingNatural className="mt-1" />
                <a href="" className="hover:text-yellow-500">
                  Influencers
                </a>
              </li>
            </ul>
            <div className="vertical"></div>
          </nav>
        </header>
        <div className="flex flex-col">
          <div>
            <SearchBar/>
          </div>
          <div>
            <InfluencersTable/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
