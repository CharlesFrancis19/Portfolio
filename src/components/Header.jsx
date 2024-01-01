import React from 'react';
import Image from 'next/image';

const Header = () => {
  const navButtons = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="text-[chivo-bold-italic] p-4 flex items-center justify-between max-w-[1600px] mx-auto md:pb-10">
      <div className=" items-center md:block hidden">
        <Image
          src="/charles-high-resolution-logo-transparent.png"
          alt="Logo"
          width={150}
          height={100}
        />
      </div>

      <nav>
        <ul className="flex md:space-x-4 space-x-6  text-[#F56607] text-xl font-bold ">
          {navButtons.map((button) => (
           <em> <li key={button.id}>
              <a href={`#${button.id}`}>
                {button.label}
              </a>
            </li></em>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
