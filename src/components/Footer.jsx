import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 mt-8 text-center">
      <p>&copy; {new Date().getFullYear()} Charles. All rights reserved.</p>
      <p>Email : Aakaashcharleswork@gmail.com </p>
      <p>Contact : +91 9787065558</p>
    </footer>
  );
};

export default Footer;
