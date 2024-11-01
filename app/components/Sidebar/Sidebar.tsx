'use client'
import React from 'react';

const Sidebar = () => {
  return (
      <div className="flex flex-col mb-4 space-y-2">
        <span>
          Filters
        </span>
        <div className="flex items-center">
          <input
            id="default-checkbox1"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="default-checkbox1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            women's clothing
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="default-checkbox2"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="default-checkbox2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            men's clothing
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="default-checkbox3"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="default-checkbox3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            electronics
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="default-checkbox4"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label htmlFor="default-checkbox4" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            jewelery
          </label>
        </div>
      </div>
  );
};

export default Sidebar;
