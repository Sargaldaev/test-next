import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '@/app/axiosApi';

export const getProducts = createAsyncThunk<Products[]>(
  'products/getProducts', async () => {
    const {data} = await axiosApi.get('products');
    return data;
  }
);