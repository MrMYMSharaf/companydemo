import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import SolutionsSlider from './SolutionsSlider';

const Hero = () => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [isButtonExpanded, setIsButtonExpanded] = useState(false);
  const navigate = useNavigate();

  const handleExploreClick = () => {
    setIsButtonExpanded(true);
    setTimeout(() => {
      navigate("/solution");
    }, 500); 
  };

  const handleAboutClick = () => {
    setTimeout(() => {
      navigate("/about");
    }, 500); 
  };

  return (
    <>
      <div className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-900 font-jakarta transition-all duration-500 
        ${showSolutions ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
          src="/image/bgV.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/70 to-indigo-900/90 z-10"></div>

        {/* Logo and Brand */}
        <div className="absolute top-6 left-6 flex items-center space-x-4 z-20 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
          <img
            src="src/assets/bluechip-logo75X92.png"
            alt="bluechip-logo"
            className="h-14 w-14 object-contain hover:scale-110 transition-transform duration-300"
          />
          <div className="border-l-2 border-blue-400 pl-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white font-playfair">
              Bluechip
            </h1>
            <p className="text-sm text-blue-200 font-jakarta">Technical Services</p>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <div className="transform transition-all duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight font-playfair tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                Empowering Your Journey
              </span>
            </h1>

            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 bg-gradient-to-r from-cyan-200 via-teal-200 to-emerald-200 text-transparent bg-clip-text font-semibold font-jakarta">
              Accelerate your success with innovative IT solutions that fuel your business growth through cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-playfair">
              <button
                onClick={handleExploreClick}
                className={`group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full font-semibold text-lg transition-all duration-500
                  ${isButtonExpanded ? 'scale-150 opacity-0' : 'hover:from-cyan-600 hover:to-teal-600 hover:shadow-xl hover:-translate-y-1'}`}
              >
                Explore Solutions
                <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
              
              <button
        onClick={handleAboutClick}
        className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-100 rounded-full font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300"
      >
        Learn More
      </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-950 to-transparent z-20"></div>
        <div className="absolute bottom-8 left-0 w-full flex justify-center gap-8 z-20 text-cyan-300/60">
          <div className="animate-pulse">○○○</div>
          <div className="animate-pulse delay-75">○○○</div>
          <div className="animate-pulse delay-150">○○○</div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className={`fixed inset-0 z-50 transition-all duration-500 ${showSolutions ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="relative w-full h-full">
          <button 
            onClick={() => {
              setShowSolutions(false);
              setIsButtonExpanded(false);
            }}
            className="absolute top-6 right-6 z-50 text-white/80 hover:text-white bg-white/10 p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <SolutionsSlider />
        </div>
      </div>
    </>
  );
};

export default Hero;