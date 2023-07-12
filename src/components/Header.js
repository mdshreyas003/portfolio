import { useState } from "react";
import { Link } from 'react-router-dom';

function Header() {
  const [active, setActive] = useState(1);

  const handleLinkClick = (index) => {
    setActive(index);
  };

  return (
    <div className="w-full flex flex-wrap space-x-3 md:space-x-8 justify-center p-4 font-sans items-center text-xl">
      <Link
        onClick={() => handleLinkClick(1)}
        style={active === 1 ? { color: 'red' } : {}}
        className="font-medium cursor-none p-2 rounded-xl hover:bg-lightblack hover:opacity-70 duration-500 transition-colors"
        to="/"
      >
        &lt;Home/&gt;
      </Link>
      <Link
        onClick={() => handleLinkClick(2)}
        style={active === 2 ? { color: '#ffbd2e' } : {}}
        className="cursor-none p-2 rounded-xl hover:bg-lightblack hover:opacity-70 duration-500 transition-colors"
        to="/about"
      >
        About Me
      </Link>
      <Link
        onClick={() => handleLinkClick(1)}
        style={active === 3 ? { color: 'green' } : {}}
        className="cursor-none text-4xl font-bold rounded-xl hover:bg-lightblack hover:opacity-70 duration-500 transition-colors"
        to="/"
      >
        MD
      </Link>
      <Link
        onClick={() => handleLinkClick(4)}
        style={active === 4 ? { color: 'blue' } : {}}
        className="cursor-none p-2 rounded-xl hover:bg-lightblack hover:opacity-70 duration-500 transition-colors"
        to="/projects"
      >
        Projects
      </Link>
      <Link to='/colors'>
        🌟
      </Link>
    </div>
  );
}

export default Header;
