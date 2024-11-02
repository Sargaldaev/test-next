'use client';
import React, { useEffect, useState } from 'react';
import favourite from '@/assets/images/favourite.svg';
import favouriteFilled from '@/assets/images/favourite-filled.svg';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { useAppDispatch } from '@/lib/hooks';
import { getProducts } from '@/lib/features/products/productThunk';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { sortByAsc, sortByDesc } from '@/lib/features/products/productsSlice';

const Products = () => {
  const router = useRouter();

  const { products, searchedProducts } = useSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();

  const [showSelect, setShowSelect] = useState(false);
  const [sortOrder, setSortOrder] = useState<string | null>(null);

  const [favourites, setFavourites] = useState<string[]>([]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setSortOrder(value);

    if (value === 'asc') {
      dispatch(sortByAsc());
    } else if (value === 'desc') {
      dispatch(sortByDesc());
    }
  };

  const handleSortClick = () => {
    setShowSelect(!showSelect);
  };

  useEffect(() => {
    setFavourites(JSON.parse(localStorage.getItem('favourites') ?? '[]') as string[]);

    if (!products.length) {
      dispatch(getProducts());
    }
  }, [dispatch, products]);

  const addFavourite = (id: string) => {
    let favourites = JSON.parse(localStorage.getItem('favourites') ?? '[]') as string[];

    const favouriteIndex = favourites ? favourites.indexOf(id) : -1;

    if (!favourites) {
      favourites = [id];
    } else if (favouriteIndex !== -1) {
      favourites.splice(favouriteIndex, 1);
    } else {
      favourites.push(id);
    }

    setFavourites(favourites);

    localStorage.setItem('favourites', JSON.stringify(favourites));
  };

  const data = searchedProducts.length ? searchedProducts : products;

  return (
    <>
      <span>Main {'>'} </span>
      <span>Catalog</span>

      <p>Catalog</p>

      <div>
        <div className="mt-2">
          <select
            value={sortOrder || undefined}
            onChange={handleSelectChange}
            className="p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Price" disabled>Price</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>


      <div className={'flex flex-wrap'}>
        {
          data.map(item => {
            return (
              <div key={item.id} className={'flex flex-wrap cursor-pointer'}
                   onClick={() => router.push('/products/' + item.id)}>
                <div
                  className=" font-satoshi w-[235px]  bg-white border border-gray-200 shadow-md p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3
                        className=" text-sm text-gray-500 text-sm"
                        style={{ fill: '#818181' }}
                      >
                        {item.category}
                      </h3>
                      <h2 className="text-lg font-semibold text-gray-800 text-sm mb-5">{item.title}</h2>
                    </div>

                    <Image
                      src={favourites.includes(item.id) ? favouriteFilled.src : favourite.src}
                      width={20}
                      height={20}
                      onClick={(e) => {
                        e.stopPropagation();
                        addFavourite(item.id);
                      }}
                      alt="favourite-img"
                    />
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
      </div>
    </>

  );
};

export default Products;