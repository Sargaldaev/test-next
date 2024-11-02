import React from 'react';

const Nav = () => {
  return (
    <div className={'py-[15px] border-b mb-[21px]'}>

      <ul className="flex text-sm font-normal">
        <li className="mr-[32px]">
          <a href="/">Main page</a>
        </li>
        <li className="mr-[32px]">
          <a href="#">Delivery</a>
        </li>
        <li className="mr-[32px]">
          <a href="#">Contact</a>
        </li>
        <li className="mr-[32px]">
          <a  href="#">Blog</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;