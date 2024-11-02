'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../assets/images/logo.svg';
import favourite from '../../../assets/images/favourite.svg';
import Link from 'next/link';
import { useAppDispatch } from '@/lib/hooks';
import { searchProducts } from '@/lib/features/products/productsSlice';

const Header = () => {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState<string>('');

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearch(value);
    dispatch(searchProducts(value));
  };

  return (
    <div className="flex justify-between items-center pb-[12px] pb-4 mx-[15%]">
      <div>
        <Image src={logo} alt="Logo" width={116} />
      </div>

      <div style={{ marginRight: '145px' }} className="w-full max-w-sm min-w-[200px] relative mt-4">
        <div className="relative">
          <input
            type="text"
            className="w-[428px] text-base bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md p-4 transition duration-300 ease"
            placeholder="Search"
            value={search}
            onChange={changeValue}
          />

          <button
            className="absolute right-[-40px] top-1 rounded p-1.5 border border-transparent text-center text-sm transition-all"
            type="button"
          >
            <svg xmlns={search} viewBox="0 0 16 16" fill="currentColor" className="w-7 h-7 text-gray-400">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <Link href={'/favourites'}>
        <Image src={favourite} alt="favourite" className="ml-4" width={20} height={20} />
        <span className={'text-sm'}>Favourite</span>
      </Link>
    </div>
  );
};

export default Header;
