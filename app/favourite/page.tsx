'use client';
import React from 'react';
import Image from 'next/image';
import clothes from '..//../public/T-Shirts.png';

const Page = () => {
  return (
    <>
      <h1
        className={'text-2xl border-b border-b mb-3'}
      >
        Favourite
      </h1>

      {
        1 // здесь будет счетчик избранных
      } item

      <div className={'flex justify-between w-[853px]'}>

        <div className={'flex align-center'}>
          <Image
            className={'w-[134px] mr-[50px]'}
            src={clothes}
            alt={'image'}/>

          <div className={'w-[215px]'}>
            <span
              className={'text-sm'}
            >
              men's clothing
            </span>

            <p
              className={'text-xl font-black'}
            >
              Mens Casual Premium Slim Fit T-Shirts
            </p>
          </div>
        </div>

        <div>
          <span className={'text-xl font-black mr-[24px]'}>22.30$</span>
          <button style={{color:'#707070'}} className={'text-sm '}>Remove</button>
        </div>

      </div>
    </>
  );
};

export default Page;