import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className={'py-[15px] px-[15%] border-b border-t border-b-gray-200 mb-[21px]'}>
      <ul className="flex text-sm font-normal">
        <li className="mr-[32px]">
          <Link href={'/'}>Main page</Link>
        </li>
        <li className="mr-[32px]">
          <Link href={'/'}>Delivery</Link>
        </li>
        <li className="mr-[32px]">
          <Link href={'/'}>Contact</Link>
        </li>
        <li className="mr-[32px]">
          <Link href={'/'}>Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
