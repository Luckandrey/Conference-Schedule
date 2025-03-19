import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-gradient-to-r from-[#3864fb] to-[#61DAFB] p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Logo/Brand */}
        <Link to="/" className="text-white text-2xl font-bold uppercase tracking-wider">
          ReactConf
        </Link>

        {/* Links Desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/speakers" className="text-white hover:text-gray-200 transition-colors">
              Speakers
            </Link>
          </li>
          <li>
            <Link to="/schedule" className="text-white hover:text-gray-200 transition-colors">
              Schedule
            </Link>
          </li>
          <li>
            <Link to="/code-of-conduct" className="text-white hover:text-gray-200 transition-colors">
              Code of Conduct
            </Link>
          </li>
          <li>
            <Link to="/tickets" className="text-white hover:text-gray-200 transition-colors">
              Tickets
            </Link>
          </li>
        </ul>

        {/* Ícone Hamburguer - Mobile */}
        <div className="md:hidden cursor-pointer" onClick={handleToggle}>
          <div className={`w-8 h-1 bg-white my-1 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-8 h-1 bg-white my-1 transition-all ${open ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 h-1 bg-white my-1 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </div>
      </div>

      {/* Menu Mobile */}
      {open && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 bg-blue-700 p-4">
          <li>
            <Link to="/speakers" className="text-white hover:text-gray-200 transition-colors">
              Speakers
            </Link>
          </li>
          <li>
            <Link to="/schedule" className="text-white hover:text-gray-200 transition-colors">
              Schedule
            </Link>
          </li>
          <li>
            <Link to="/code-of-conduct" className="text-white hover:text-gray-200 transition-colors">
              Code of Conduct
            </Link>
          </li>
          <li>
            <Link to="/tickets" className="text-white hover:text-gray-200 transition-colors">
              Tickets
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
