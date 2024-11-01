'use client';
import React, {useEffect, useState} from 'react';
import axiosApi from '@/app/axiosApi';
import {useAppDispatch} from '@/lib/hooks';
import {getProducts} from '@/lib/features/products/productThunk';

const Sidebar = () => {
  const dispatch = useAppDispatch();

  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await axiosApi.get('products/categories');
      setCategories(data);
    })();
  }, []);

  const checkedCategory = (category) => {
    setSelectedCategories(prevState => {
      const stateCopy = [...prevState];

      const categoryIndex = stateCopy.indexOf(category);

      if (categoryIndex !== -1) {
        stateCopy.splice(categoryIndex, 1);
      } else {
        stateCopy.push(category);
      }

      dispatch(getProducts(stateCopy));

      return stateCopy;
    });

  };

  return (
      <div className="font-satoshi flex flex-col mb-4 space-y-2">
        <span style={{fontSize:'15px',fontWeight:'500'}}>
          Filters
        </span>
        {
          categories.map((item, index) => (
            <div className="flex items-center" key={index}>
              <input
                id={`checkbox-${index}`}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={selectedCategories.includes(item)}
                onClick={() => checkedCategory(item)}
              />
              <label htmlFor={`checkbox-${index}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {item}
              </label>
            </div>
          ))
        }

      </div>
  );
};

export default Sidebar;
