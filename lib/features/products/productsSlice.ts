import {createSlice} from '@reduxjs/toolkit';
import {getProduct, getProducts} from '@/lib/features/products/productThunk';


interface ProductsState {
  products: Product[];
  product: Product | null;
  fetchLoad: boolean;
}

const initialState: ProductsState = {
  products: [],
  product: null,
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

    builder.addCase(getProduct.pending, (state: ProductsState) => {
      state.fetchLoad = true;
    });
    builder.addCase(getProduct.fulfilled, (state: ProductsState, {payload}) => {
      state.fetchLoad = false;
      state.product = payload;
    });
    builder.addCase(getProduct.rejected, (state: ProductsState) => {
      state.fetchLoad = false;
    });
  }

});

export const productsReducer = productSlice.reducer;