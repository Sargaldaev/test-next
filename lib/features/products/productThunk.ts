import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '@/app/axiosApi';
import {RootState} from '@/lib/store';

export const getProducts = createAsyncThunk<[],null,{state:RootState}>(
  'products/getProducts', async () => {
    const {data} = await axiosApi.get('products');
    return data;
  }
);