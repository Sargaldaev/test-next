'use client';
import React from 'react';
import Image from 'next/image';
import logo from '..//..//..//public/logo.svg';
import search from '..//..//..//public/searchIcon.svg';
import favourite from '..//..//..//public/favourite.svg';


const Header = () => {
  return (
    <div className="flex items-center pb-4 border-b border-b-gray-200 space-x-40">
      <div>
        <Image
          src={logo}
          alt="Logo"
          width={116}
          className="mr-8"
        />
      </div>

      <div className="w-full max-w-sm min-w-[200px] relative mt-4">
        <div className="relative">
          <input type="text"
                 className="w-[428px] text-base bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md p-4 transition duration-300 ease"
                 placeholder="Search"/>
          <button
            className="absolute right-[-40px] top-1 rounded p-1.5 border border-transparent text-center text-sm transition-all"
            type="button">
            <svg xmlns={search} viewBox="0 0 16 16" fill="currentColor" className="w-7 h-7 text-gray-400">
              <path fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>

      <div className={'ml-auto'}>
        <Image
          src={favourite}
          alt="favourite"
          className="ml-4"
        />
        <span>favourite</span>
      </div>
    </div>


  );
};

export default Header;