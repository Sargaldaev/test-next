import React from 'react';

const Nav = () => {
  return (
    <div>

      <ul className="flex text-sm font-normal">
        <li className="mr-6">
          <a href="#">Main page</a>
        </li>
        <li className="mr-6">
          <a href="#">Delivery</a>
        </li>
        <li className="mr-6">
          <a href="#">Contact</a>
        </li>
        <li className="mr-6">
          <a  href="#">Blog</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;