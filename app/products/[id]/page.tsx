'use client';
import React from 'react';
import Image from 'next/image';
import heartImage from '@/assets/images/favourite.svg';
import StarRatings from 'react-star-ratings';

const Page = () => {
  const product = {
    title: 'Mens Casual Premium Slim Fit T-Shirts',
    description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating: { rate: 4, count: 120 },
    price: 22.30,
  };

  return (
    <div className="mt-[30px] mx-[10%] lg:flex gap-11">
      <Image src={product.image} width={192} height={256} className="h-min mx-auto" alt="product-img" />

      <div className="mt-10">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold max-w-[260px] font-['Satoshi_Black']">{product.title}</h2>

          <button className="flex items-center gap-3 px-[22px] py-[10px] rounded-md border border-[#E2E8F0] text-sm leading-5 font-['Satoshi'] h-min">
            Add to favourite
            <Image src={heartImage.src} width={20} height={20} alt="heart-img" />
          </button>
        </div>

        <div className="flex gap-2 mt-2">
          <StarRatings
            rating={product.rating.rate}
            starRatedColor="#FFC700"
            starDimension="12px"
            starSpacing="2px"
            numberOfStars={5}
          />
          <span>({product.rating.count} rated)</span>
        </div>

        <hr className="bg-[#E2E8F0] mt-[15px] mb-[40px]"/>

        <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[80px]">
          <div className="flex flex-col gap-5">
            <h4 className="font-['Satoshi_Black']">Description</h4>
            <p className="leading-normal text-sm">{product.description}</p>
          </div>

          <div className="flex flex-col items-end gap-[15px]">
            <h2 className="font-['Satoshi_Black'] text-xl whitespace-nowrap">{product.price} $</h2>
            <button className="text-white bg-[#FFC700] rounded-md px-[25px] py-[8px] text-base">Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

  export default Page;