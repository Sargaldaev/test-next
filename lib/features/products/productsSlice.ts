import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from '@/lib/features/products/productThunk';
import {AppStore, RootState} from '@/lib/store';


interface ProductsState {
  products: [];
  fetchLoad: boolean;
}

const initialState: ProductsState = {
  products: [],
  fetchLoad: false
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state: RootState, {payload}) => {
      state.products = payload;
    });
  }

});

export const productsReducer = productSlice.reducer;