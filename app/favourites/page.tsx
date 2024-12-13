'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axiosApi from '@/app/axiosApi';
import { Product } from '@/app/types';

const Page = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {
    const data = JSON.parse(localStorage.getItem('favourites') ?? '[]') as string[];

    const favourites = await Promise.all(
      data.map(async (id) => {
        const { data } = await axiosApi.get('products/' + id);
        return data;
      }),
    );

    setProducts(favourites);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const removeFavourite = (id: string) => {
    const favourites = JSON.parse(localStorage.getItem('favourites') ?? '[]') as string[];
    const favouriteIndex = favourites.indexOf(id);
    favourites.splice(favouriteIndex, 1);
    localStorage.setItem('favourites', JSON.stringify(favourites));
    fetchProducts();
  };

  return (
    <div>
      <h1 className={'text-[32px] border-b border-b mt-5 mb-4 px-[15%]'}>Favourite</h1>
      <p className="text-2xl mx-[15%]">{products.length} item</p>

      <div className="flex flex-col gap-5 mt-5 mx-[15%]">
        {products.map((product) => (
          <div
            key={product.id}
            className={'flex justify-between w-full cursor-pointer'}
            onClick={() => router.push('/products/' + product.id)}
          >
            <Image className={'mr-[50px]'} src={product.image} width={134} height={178} alt={'image'} />

            <div className="flex justify-between items-center w-full h-min">
              <div className={'w-[215px]'}>
                <span className={'text-sm'}>{product.category}</span>

                <p className={'text-xl font-black'}>{product.title}</p>
              </div>

              <div className="flex items-center">
                <span className={'text-xl font-black mr-[24px]'}>{product.price} $</span>

                <button
                  style={{ color: '#707070' }}
                  className={'text-sm '}
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFavourite(product.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
