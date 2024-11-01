'use client'
import React from 'react';

const Sidebar = () => {

  const categories = ['womens clothing ','mens clothing','electronics','jewelery']
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
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
