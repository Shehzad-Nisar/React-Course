import React from "react";

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="opacity-90  absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/bgImg.jpg')` }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl font-sans text-shadow-lg/30  md:text-6xl font-bold mb-2">
         Unlimited movies,  TV <br /> shows, and more
        </h1>
        <p className="text-2xl mt-0 md:text-2xl mb-6 text-shadow-lg/30 ">
          <b>Starts at Rs 250. Cancel anytime.</b>
        </p>
         <p className=" text-xl mb-3 text-shadow-lg/30  ">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        
        
        <button onClick={()=>alert("your have started!!")} style={{ backgroundColor: '#E50914' }} className="  text-white font-bold py-3 px-6 rounded  ">
          Get Started
        </button>
      </div>
    </div>
  );
}