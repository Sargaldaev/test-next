'use client';
import React, {useEffect} from 'react';
import favourite from '../../../assets/images/favourite.svg';
import {useSelector} from 'react-redux';
import {RootState} from '@/lib/store';
import {useAppDispatch} from '@/lib/hooks';
import {getProducts} from '@/lib/features/products/productThunk';
import Image from 'next/image';
import {useRouter} from 'next/navigation';

const Product = () => {
  const router = useRouter();

  const {products} = useSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (!products.length) {
      dispatch(getProducts());
    }
  }, [dispatch, products]);


  return (
    <>
      <span>Main > </span>
      <span>Catalog</span>
      <p>Catalog</p>

      <p>Price</p>
      {
        products.map(item => {
          return (
            <div className={'flex flex-wrap cursor-pointer'} onClick={() => router.push('/products/' + item.id)}>
              <div
                className=" font-satoshi w-[235px]  bg-white border border-gray-200 shadow-md p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3
                      className=" text-sm text-gray-500 text-sm"
                      style={{fill: '#818181'}}
                    >
                      {item.category}
                    </h3>
                    <h2 className="text-lg font-semibold text-gray-800 text-sm mb-5">{item.title}</h2>
                  </div>
                  <button>
                    <svg
                      xmlns={favourite}
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </button>
                </div>

                <div className="mb-4">
                  <Image
                    width={156}
                    height={223}
                    src={item.image}
                    alt={'backpack'}
                  />
                </div>
                <div className="text-xl font-bold text-gray-900 text-2xl font-black">
                  {item.price}$
                </div>
              </div>
            </div>
          );
        })
      }
    </>

  );
};

export default Product;