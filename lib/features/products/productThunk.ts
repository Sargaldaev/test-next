import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '@/app/axiosApi';

export const getProducts = createAsyncThunk<Product[], string[] | undefined>(
  'products/getProducts', async (categories) => {
    if (categories?.length) {
      const products = await Promise.all(categories.map(async (category) => {
        const { data } = await axiosApi.get('products/category/' + category);
        return data;
      }));

      return products.flat().reverse();
    } else {
      const {data} = await axiosApi.get('products');
      return data;
    }
  }
);

export const getProduct = createAsyncThunk<Product, string>(
  'products/getProduct', async (id) => {
    const {data} = await axiosApi.get('products/' + id);
    return data;
  }
);
