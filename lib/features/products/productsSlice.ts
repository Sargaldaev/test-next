import {createSlice} from '@reduxjs/toolkit';
import {getProducts} from '@/lib/features/products/productThunk';


interface ProductsState {
  products: Products[];
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
    builder.addCase(getProducts.pending, (state: ProductsState) => {
      state.fetchLoad = true;
    });
    builder.addCase(getProducts.fulfilled, (state: ProductsState, {payload}) => {
      state.fetchLoad = false;
      state.products = payload;
    });
    builder.addCase(getProducts.rejected, (state: ProductsState) => {
      state.fetchLoad = false;
    });
  }

});

export const productsReducer = productSlice.reducer;