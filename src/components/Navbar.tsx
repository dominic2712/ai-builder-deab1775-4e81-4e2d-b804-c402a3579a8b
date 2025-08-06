import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-xl">AI Future</Link>
        <div>
          <Link to="/" className="text-white mx-2">Home</Link>
          <Link to="/about" className="text-white mx-2">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;