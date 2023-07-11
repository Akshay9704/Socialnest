"use client"

import "../styles/header.css"

const header = () => {

  const handleSignUp = () => {
    window.location.href = "/SignUp";
  }

  const handleSignIn = () => {
    window.location.href = "/SignIn"
  }

  return (
    <div>
        <header className="w-full bg-black">
          <nav className='navbar flex justify-between'>
            <h1 className="mt-8 ml-5 text-3xl text-slate-500 font-extrabold cursor-pointer">Social<span className="text-yellow-500">nest</span></h1>
            <ul className='nav-list flex gap-24 justify-center text-white mt-10 mb-5'>
              <li className="hover:text-yellow-500 cursor-pointer text-lg"><a href="/">Home</a></li>
              <li className="hover:text-yellow-500 cursor-pointer text-lg"><a href="/">About Us</a></li>
              <li className="hover:text-yellow-500 cursor-pointer text-lg"><a href="/">Contact Us</a></li>
            </ul>
            <ul className='nav-btn flex gap-5 mr-10 mt-10 mb-5'>
              <button onClick={handleSignUp} className="border rounded-lg px-7 py-1 text-white bg-slate-500 hover:bg-yellow-500 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Signup</button>
              <button onClick={handleSignIn} className="border rounded-lg px-7 py-1 text-white bg-slate-500 hover:bg-yellow-500 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">Signin</button>
            </ul>
          </nav>
        </header>
    </div>
  )
}

export default header