import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '@/app/axiosApi';

export const getProducts = createAsyncThunk<Product[]>(
  'products/getProducts', async () => {
    const {data} = await axiosApi.get('products');
    return data;
  }
);

export const getProduct = createAsyncThunk<Product, string>(
  'products/getProduct', async (id) => {
    const {data} = await axiosApi.get('products/' + id);
    return data;
  }
);
