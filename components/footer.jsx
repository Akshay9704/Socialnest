import {BsFacebook} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"

const footer = () => {
  return (
    <div className="mt-20 mb-20">
        <hr></hr>
      <footer className="flex md:flex-row lg:flex-row flex-col md:gap-96 lg:gap-80 justify-center mb-12">
        <div className="flex md:flex-row lg:flex-row flex-col md:gap-40 lg:gap-40">
        <div className="m-auto md:ml-10 lg:ml-10">
          <h1 className="mt-8 md:text-5xl lg:text-5xl text-4xl text-slate-500 font-extrabold cursor-pointer">
            Social<span className="text-yellow-500">nest</span>
          </h1>
        </div>
        <div className="mt-10 flex flex-col m-auto">
            <h2 className="text-slate-500 text-2xl font-semibold">Links</h2>
            <ul className="text-white">
                <li className="hover:text-yellow-500 cursor-pointer text-lg"><a href="/">About</a></li>
                <li className="hover:text-yellow-500 cursor-pointer text-lg"><a href="/">Pricing</a></li>
                <li className="hover:text-yellow-500 cursor-pointer text-lg"><a href="/">Support</a></li>
                <li className="hover:text-yellow-500 cursor-pointer text-lg"><a href="/">Legal</a></li>
            </ul>
        </div>
        </div>
        <div className="md:mt-10 lg:mt-10 mt-20 flex flex-col m-auto">
            <h2 className="text-slate-500 text-2xl font-semibold">NEWSLETTER</h2>
            <h2 className="text-white text-3xl font-bold mt-4">Join our newsletter</h2>
            <input type="email" placeholder="Enter your email" className="bg-white border mt-4 pl-4 md:pr-12 lg:pr-12 pr-4 py-2"></input>
            <p className="text-slate-500 text-md mt-4 font-medium">We only send interesting and relevant emails</p>
        </div>
      </footer>
      <hr></hr>
      <footer className="flex justify-between mt-4 -mb-12">
        <div>
        <h4 className="text-white md:text-xl lg:text-xl text-md md:ml-10 lg:ml-10 ml-4 opacity-30">
        Copyright © 2023
        </h4>
        </div>
        <div className="text-white md:text-2xl lg:text-2xl text-lg flex gap-5 mt-1 md:mr-10 lg:mr-10 mr-5">
          <BsFacebook/>
          <BsInstagram/>
          <BsLinkedin/>
          <BsTwitter/>
        </div>
      </footer>
    </div>
  )
}

export default footer