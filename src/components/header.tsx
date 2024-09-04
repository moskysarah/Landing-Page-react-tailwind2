import React from 'react';

const Header: React.FC = () => {
    return (
      <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        
        <div className="absolute inset-0">
          <img
            src="public/Rectangle 9.png"
            alt="Background"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
  
        <header className="relative z-10 text-center">
            
          <h1 className="text-5xl font-bold mb-4">The best products start with figma</h1>
            
          <p className="text-lg mb-6">Most calandars are designed for teams. slate is designed.
            for frelances
          </p>
          <a
            href="#"
            className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
           Try For Free
          </a>
        </header>
            
    </div>
  );
};
     ;
  
  export default Header;