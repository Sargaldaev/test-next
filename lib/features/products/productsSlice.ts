import { createSlice } from '@reduxjs/toolkit';
import { getProduct, getProducts } from '@/lib/features/products/productThunk';
import { Product } from '@/app/types';

interface ProductsState {
  products: Product[];
  product: Product | null;
  fetchLoad: boolean;
  searchedProducts: Product[];
}

const initialState: ProductsState = {
  products: [],
  product: null,
  fetchLoad: false,
  searchedProducts: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sortByAsc: (state) => {
      state.products = state.products.sort((a, b) => a.price - b.price);
    },
    sortByDesc: (state) => {
      state.products = state.products.sort((a, b) => b.price - a.price);
    },
    searchProducts: (state, { payload }) => {
      state.searchedProducts = state.products.filter((item) =>
        item.title.toLowerCase().includes(payload.toLowerCase()),
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state: ProductsState) => {
      state.fetchLoad = true;
    });
    builder.addCase(getProducts.fulfilled, (state: ProductsState, { payload }) => {
      state.fetchLoad = false;
      state.products = payload;
    });
    builder.addCase(getProducts.rejected, (state: ProductsState) => {
      state.fetchLoad = false;
    });

    builder.addCase(getProduct.pending, (state: ProductsState) => {
      state.fetchLoad = true;
    });
    builder.addCase(getProduct.fulfilled, (state: ProductsState, { payload }) => {
      state.fetchLoad = false;
      state.product = payload;
    });
    builder.addCase(getProduct.rejected, (state: ProductsState) => {
      state.fetchLoad = false;
    });
  },
});

export const productsReducer = productSlice.reducer;
export const { sortByAsc, sortByDesc, searchProducts } = productSlice.actions;
