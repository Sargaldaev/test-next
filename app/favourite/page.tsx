'use client';
import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axiosApi from '@/app/axiosApi';

const Page = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = useCallback(async () => {
    const data = JSON.parse(localStorage.getItem('favourites') ?? '[]') as string[];

    const favourites = await Promise.all(data.map(async (id) => {
      const { data } = await axiosApi.get('products/' + id);
      return data;
    }));

    setProducts(favourites);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const removeFavourite = (id: string) => {
    const favourites = JSON.parse(localStorage.getItem('favourites') ?? '[]') as string[];

    const favouriteIndex = favourites.indexOf(id);
    favourites.splice(favouriteIndex, 1);

    localStorage.setItem('favourites', JSON.stringify(favourites));

    fetchProducts();
  };

  return (
    <>
      <h1
        className={'text-2xl border-b border-b mb-3'}
      >
        Favourite
      </h1>

      {products.length} item

      {
        products.map(product => (
            <div className={'flex justify-between w-[853px]'} onClick={() => router.push('/products/' + product.id)}>

              <div className={'flex align-center'}>
                <Image
                  className={'mr-[50px]'}
                  src={product.image}
                  width={134}
                  height={178}
                  alt={'image'}/>

                <div className={'w-[215px]'}>
            <span
              className={'text-sm'}
            >
              {product.category}
            </span>

                  <p
                    className={'text-xl font-black'}
                  >
                    {product.title}
                  </p>
                </div>
              </div>

              <div>
                <span className={'text-xl font-black mr-[24px]'}>{product.price} $</span>
                <button
                  style={{color:'#707070'}}
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
          )
        )
      }
    </>
  );
};

export default Page;