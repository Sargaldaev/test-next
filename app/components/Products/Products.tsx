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
      <div>
        <span className="text-sm">Main {'>'} </span>
        <span className="text-sm font-['Satoshi_Bold']">Catalog</span>

        <p className="mt-[29px] text-xl font-['Satoshi_Medium']">Catalog</p>
      </div>

      <div>
        <div className="mt-[30px]">
          <select value={sortOrder || undefined} onChange={handleSelectChange} className=" bg-transparent">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className={'flex flex-wrap mt-7'}>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className={
                'flex flex-col justify-between w-1/3 h-[430px] cursor-pointer bg-white border border-gray-200 shadow-md p-4'
              }
              onClick={() => router.push('/products/' + item.id)}
            >
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-sm text-gray-500 text-sm" style={{ fill: '#818181' }}>
                    {item.category}
                  </h3>
                  <h2 className="text-lg font-semibold text-gray-800 text-sm">{item.title}</h2>
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

              <Image
                width={156}
                height={223}
                src={item.image}
                className="mb-4 mx-auto h-[223px] object-contain"
                alt={'backpack'}
              />

              <div className="font-['Satoshi_Bold'] text-2xl">{item.price}$</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
